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
  const matches = (primary.matches || []).map(match =>
    blendMatch(
      match,
      matchingSecondary(match, secondaryMatches),
      primaryProvider,
      secondaryProvider,
    ));
  const merged = mergeObject(primary, secondary, '', {}, [], secondaryProvider);
  if (primary.matches) merged.matches = matches;
  for (const key of ['next_match', 'current_match']) {
    if (!primary[key]) continue;
    const candidate = (
      (secondary[key] && sameFixture(primary[key], secondary[key]) && secondary[key])
      || matchingSecondary(primary[key], secondaryMatches)
    );
    merged[key] = blendMatch(primary[key], candidate, primaryProvider, secondaryProvider);
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
  const secondaryId = config?.enrichment_entity;
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
