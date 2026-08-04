const EMPTY_VALUES = new Set(['', 'N/A', 'n/a', 'unknown', 'Unknown']);

function present(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return !EMPTY_VALUES.has(value.trim());
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return true;
}

function normalizedName(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\b(fc|cf|sc|afc|club|football|voetbal|rotterdam)\b/g, '')
    .replace(/[^a-z0-9]+/g, '');
}

function sameTeam(left, right) {
  const a = normalizedName(left);
  const b = normalizedName(right);
  return Boolean(a && b && (a === b || a.includes(b) || b.includes(a)));
}

function kickoffDay(match) {
  return String(match?.date_iso || match?.date || '').slice(0, 10);
}

export function sameFixture(left, right) {
  if (!left || !right) return false;
  if (
    left.event_id != null
    && right.event_id != null
    && String(left.event_id) === String(right.event_id)
  ) return true;
  const dayA = kickoffDay(left);
  const dayB = kickoffDay(right);
  return Boolean(
    dayA && dayB && dayA === dayB
    && sameTeam(left.home_team, right.home_team)
    && sameTeam(left.away_team, right.away_team)
  );
}

function equivalent(left, right) {
  if (left === right) return true;
  if (typeof left === 'object' || typeof right === 'object') {
    try { return JSON.stringify(left) === JSON.stringify(right); } catch (_) { return false; }
  }
  return String(left) === String(right);
}

function clockProgress(value) {
  const text = String(value || '').toUpperCase().trim();
  if (text === 'HT') return 45;
  const parts = text.match(/\d+/g)?.map(Number) || [];
  return parts.length ? parts.reduce((total, part) => total + part, 0) : -1;
}

function scoreTotal(match) {
  const home = Number(match?.home_score);
  const away = Number(match?.away_score);
  return Number.isFinite(home) && Number.isFinite(away) ? home + away : -1;
}

function liveProgress(match) {
  const state = String(match?.state || '').toLowerCase();
  if (state === 'post') return 1000;
  if (state === 'in' || state === 'live') return 100 + Math.max(0, clockProgress(match?.clock));
  return 0;
}

function latestEventMinute(match) {
  return (Array.isArray(match?.key_events) ? match.key_events : []).reduce(
    (latest, event) => Math.max(latest, clockProgress(event?.minute ?? event?.clock)),
    -1,
  );
}

function normalizeLiveClock(match) {
  if (!match || liveProgress(match) < 100 || liveProgress(match) >= 1000) return match;
  const clock = clockProgress(match.clock);
  const eventMinute = latestEventMinute(match);
  if (clock < 0 || eventMinute <= clock) return match;
  return { ...match, clock: '', stale_clock: match.clock };
}

function normalizeAttributes(attrs) {
  const source = attrs || {};
  const normalized = { ...source };
  if (Array.isArray(source.matches)) normalized.matches = source.matches.map(normalizeLiveClock);
  for (const key of ['next_match', 'current_match']) {
    if (source[key]) normalized[key] = normalizeLiveClock(source[key]);
  }
  return normalized;
}

function preferFresherLiveCore(merged, primary, secondary, provenance, secondaryProvider) {
  const primaryProgress = liveProgress(primary);
  const secondaryProgress = liveProgress(secondary);
  const progressAdvanced = secondaryProgress > primaryProgress;
  const scoreAdvanced = (
    secondaryProgress >= 100
    && scoreTotal(secondary) > scoreTotal(primary)
  );
  if (!progressAdvanced && !scoreAdvanced) return merged;

  const result = { ...merged };
  const fields = [
    ...(progressAdvanced ? ['state', 'status', 'period', 'clock'] : []),
    'home_score', 'away_score',
  ];
  for (const key of fields) {
    if (!present(secondary[key])) continue;
    result[key] = secondary[key];
    provenance[key] = secondaryProvider;
  }
  return result;
}

function mergeObject(primary, secondary, path, provenance, conflicts, secondaryProvider) {
  if (!primary || typeof primary !== 'object' || Array.isArray(primary)) return primary;
  if (!secondary || typeof secondary !== 'object' || Array.isArray(secondary)) return primary;
  const merged = { ...primary };
  for (const [key, secondaryValue] of Object.entries(secondary)) {
    const fieldPath = path ? `${path}.${key}` : key;
    const primaryValue = merged[key];
    if (!present(primaryValue) && present(secondaryValue)) {
      merged[key] = secondaryValue;
      provenance[fieldPath] = secondaryProvider;
    } else if (
      present(primaryValue)
      && present(secondaryValue)
      && !equivalent(primaryValue, secondaryValue)
      && typeof primaryValue === 'object'
      && !Array.isArray(primaryValue)
      && typeof secondaryValue === 'object'
      && !Array.isArray(secondaryValue)
    ) {
      merged[key] = mergeObject(
        primaryValue,
        secondaryValue,
        fieldPath,
        provenance,
        conflicts,
        secondaryProvider,
      );
    } else if (
      present(primaryValue)
      && present(secondaryValue)
      && !equivalent(primaryValue, secondaryValue)
      && ['home_score', 'away_score', 'state', 'status', 'period', 'clock', 'date_iso', 'venue'].includes(key)
    ) {
      conflicts.push({ field: fieldPath, primary: primaryValue, secondary: secondaryValue });
    }
  }
  return merged;
}

export function blendMatch(primary, secondary, primaryProvider = 'primary', secondaryProvider = 'secondary') {
  if (!secondary || !sameFixture(primary, secondary)) return primary;
  const provenance = {};
  const conflicts = [];
  let merged = mergeObject(
    primary,
    secondary,
    '',
    provenance,
    conflicts,
    secondaryProvider,
  );
  merged = preferFresherLiveCore(
    merged,
    primary,
    secondary,
    provenance,
    secondaryProvider,
  );
  return {
    ...merged,
    source_provenance: {
      ...(primary.source_provenance || {}),
      ...provenance,
    },
    source_conflicts: [
      ...(primary.source_conflicts || []),
      ...conflicts,
    ],
    source_providers: [...new Set([
      ...(primary.source_providers || []),
      primaryProvider,
      secondaryProvider,
    ].filter(Boolean))],
  };
}

const SOURCE_SECTIONS = {
  schedule: ['date', 'date_iso', 'venue', 'competition_name', 'league_name', 'broadcasts'],
  preview: ['head_to_head', 'prediction', 'odds', 'injuries_home', 'injuries_away', 'weather'],
  lineup: ['lineup_home', 'lineup_away', 'formation_home', 'formation_away'],
  timeline: ['key_events', 'match_details'],
  statistics: ['home_statistics', 'away_statistics', 'momentum', 'shotmap'],
  review: ['review', 'player_of_the_match', 'team_of_the_match', 'match_story'],
};

function sourceSections(match, primaryProvider, secondaryProvider, primaryUpdated, secondaryUpdated) {
  const provenance = match?.source_provenance || {};
  return Object.fromEntries(Object.entries(SOURCE_SECTIONS).map(([section, fields]) => {
    const paths = Object.keys(provenance);
    const enrichedFields = fields.filter(field =>
      paths.some(path => path === field || path.startsWith(`${field}.`)));
    const enriched = enrichedFields.length > 0;
    const available = fields.some(field => present(match?.[field]));
    const primaryAvailable = fields.some(field =>
      present(match?.[field]) && !enrichedFields.includes(field));
    return [section, {
      available,
      provider: (
        enriched && primaryAvailable
          ? `${primaryProvider} + ${secondaryProvider}`
          : enriched ? secondaryProvider : primaryProvider
      ),
      updated_at: enriched ? secondaryUpdated : primaryUpdated,
      enriched,
    }];
  }));
}

function matchingSecondary(primary, secondaryMatches) {
  return secondaryMatches.find(candidate => sameFixture(primary, candidate));
}

/**
 * Blend missing data from a second sensor into a primary sensor payload.
 *
 * Secondary-only fixtures are deliberately not appended: enrichment should
 * never reintroduce another provider's previous-season schedule.
 */
export function blendAttributes(primaryAttrs, secondaryAttrs) {
  const primary = primaryAttrs || {};
  const secondary = secondaryAttrs || {};
  const primaryProvider = primary.provider || 'primary';
  const secondaryProvider = secondary.provider || 'secondary';
  const secondaryMatches = secondary.matches || [];
  const primaryUpdated = primary.last_successful_update || primary.data_quality?.updated_at;
  const secondaryUpdated = secondary.last_successful_update || secondary.data_quality?.updated_at;
  const matches = (primary.matches || []).map(match => {
    const blended = blendMatch(
      match,
      matchingSecondary(match, secondaryMatches),
      primaryProvider,
      secondaryProvider,
    );
    return {
      ...blended,
      source_sections: sourceSections(
        blended,
        primaryProvider,
        secondaryProvider,
        primaryUpdated,
        secondaryUpdated,
      ),
    };
  });
  const merged = mergeObject(primary, secondary, '', {}, [], secondaryProvider);
  // A detail service and its payload form one provider-specific contract.
  // Merging detail_service_data field by field can create an invalid hybrid,
  // for example one provider's team_id combined with another service's entry ID.
  const detailOwner = present(primary.detail_service)
    ? primary
    : (present(secondary.detail_service) ? secondary : null);
  if (detailOwner) {
    merged.detail_service = detailOwner.detail_service;
    if (Object.prototype.hasOwnProperty.call(detailOwner, 'detail_service_data')) {
      merged.detail_service_data = detailOwner.detail_service_data;
    } else {
      delete merged.detail_service_data;
    }
  }
  if (primary.matches) merged.matches = matches;
  for (const key of ['next_match', 'current_match']) {
    if (!primary[key]) continue;
    const candidate = (
      (secondary[key] && sameFixture(primary[key], secondary[key]) && secondary[key])
      || matchingSecondary(primary[key], secondaryMatches)
    );
    const blended = blendMatch(primary[key], candidate, primaryProvider, secondaryProvider);
    merged[key] = {
      ...blended,
      source_sections: sourceSections(
        blended,
        primaryProvider,
        secondaryProvider,
        primaryUpdated,
        secondaryUpdated,
      ),
    };
  }
  const enriched = matches.reduce(
    (count, match) => count + Object.keys(match.source_provenance || {}).length,
    0,
  );
  const conflicts = matches.reduce(
    (count, match) => count + (match.source_conflicts || []).length,
    0,
  );
  merged.source_blend = {
    primary: primaryProvider,
    secondary: secondaryProvider,
    enriched_fields: enriched,
    conflicts,
  };
  return merged;
}

export function blendHassSources(hass, config) {
  const primaryId = config?.entity;
  const primary = hass?.states?.[primaryId];
  if (!hass?.states || !primaryId || !primary) return hass;
  const configured = [
    config?.enrichment_entity,
    ...(Array.isArray(config?.supplementary_entities) ? config.supplementary_entities : []),
  ].filter(Boolean);
  if (!configured.length && config?.auto_enrichment) {
    configured.push(findEnrichmentEntity(hass, config));
  }
  const secondaryIds = [...new Set(configured)]
    .filter(id => id && id !== primaryId && hass?.states?.[id]);
  const attributes = secondaryIds.reduce(
    (current, id) => blendAttributes(current, hass.states[id].attributes),
    normalizeAttributes(primary.attributes),
  );
  const states = Object.create(hass.states);
  states[primaryId] = {
    ...primary,
    attributes: {
      ...attributes,
      source_blend: {
        ...(attributes.source_blend || {}),
        primary: primary.attributes.provider || 'primary',
        supplementary_entities: secondaryIds,
      },
    },
  };
  const composite = Object.create(hass);
  Object.defineProperty(composite, 'states', {
    configurable: true,
    enumerable: true,
    value: states,
  });
  return composite;
}

function richness(attrs) {
  const matches = attrs?.matches || [];
  return matches.reduce((score, match) => score + [
    'key_events', 'lineup_home', 'home_statistics', 'head_to_head',
    'prediction', 'odds', 'injuries_home', 'review', 'momentum',
  ].filter(key => present(match?.[key])).length, 0);
}

export function findEnrichmentEntity(hass, config) {
  const primaryId = config?.entity;
  const primary = hass?.states?.[primaryId];
  if (!primary) return '';
  const attrs = primary.attributes || {};
  const primaryMatches = attrs.matches || [];
  const primaryDays = new Set(primaryMatches.map(kickoffDay).filter(Boolean));
  const primaryIds = new Set(
    primaryMatches.map(match => String(match?.event_id || '')).filter(Boolean),
  );
  const provider = attrs.provider;
  const candidates = Object.entries(hass.states)
    .filter(([id, state]) =>
      id !== primaryId
      && id.startsWith('sensor.')
      && state?.attributes
      && state.attributes.provider
      && state.attributes.provider !== provider
      && Array.isArray(state.attributes.matches)
      && state.attributes.matches.some(match => (
        primaryDays.has(kickoffDay(match))
        || primaryIds.has(String(match?.event_id || ''))
      )))
    .map(([id, state]) => {
      const matches = state.attributes.matches;
      const overlap = primaryMatches.reduce(
        (count, match) => count + (matches.some(candidate => sameFixture(match, candidate)) ? 1 : 0),
        0,
      );
      return { id, score: overlap * 100 + richness(state.attributes) };
    })
    .filter(candidate => candidate.score >= 100)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  return candidates[0]?.id || '';
}
