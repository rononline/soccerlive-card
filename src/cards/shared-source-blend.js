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
      && ['home_score', 'away_score', 'state', 'status', 'date_iso', 'venue'].includes(key)
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
  const merged = mergeObject(
    primary,
    secondary,
    '',
    provenance,
    conflicts,
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
  const secondaryId = config?.enrichment_entity
    || (config?.auto_enrichment ? findEnrichmentEntity(hass, config) : '');
  if (!hass?.states || !primaryId || !secondaryId || primaryId === secondaryId) return hass;
  const primary = hass.states[primaryId];
  const secondary = hass.states[secondaryId];
  if (!primary || !secondary) return hass;
  const states = Object.create(hass.states);
  states[primaryId] = {
    ...primary,
    attributes: blendAttributes(primary.attributes, secondary.attributes),
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
