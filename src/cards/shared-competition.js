// Normalised comparison key for a competition name (lowercase, single spaces,
// separators/dots collapsed) so slugs and display names compare consistently.
function _normKey(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[._-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Localised names for the two friendly "competitions". These are both the
// output of displayCompetitionName AND — importantly — what the integration
// already stores in `league_name` for API-Football (it localises there), so a
// card may see either the English key or a translated name.
const CLUB_FRIENDLY_LABELS = {
  en: 'Club Friendlies', nl: 'Oefenwedstrijd', de: 'Vereinsfreundschaftsspiele',
  es: 'Amistosos de clubes', fr: 'Matchs amicaux clubs', it: 'Amichevoli club',
  pt: 'Amistosos de clubes',
};
const FRIENDLY_LABELS = {
  en: 'Friendlies', nl: 'Oefenwedstrijden', de: 'Freundschaftsspiele',
  es: 'Amistosos', fr: 'Matchs amicaux', it: 'Amichevoli', pt: 'Amistosos',
};

// Raw provider keys (English) plus every localised label above, normalised.
const _RAW_FRIENDLY_KEYS = [
  'friendlies clubs', 'friendlies club', 'friendly clubs', 'friendly club',
  'club friendlies', 'club friendly', 'friendlies', 'friendly',
];
const FRIENDLY_SET = new Set([
  ..._RAW_FRIENDLY_KEYS,
  ...Object.values(CLUB_FRIENDLY_LABELS).map(_normKey),
  ...Object.values(FRIENDLY_LABELS).map(_normKey),
]);

// Whether a competition is a friendly. Providers hand out a generic FIFA logo
// for friendlies, so cards use this to suppress that misleading logo. Matches
// the raw English names, every localised name, and any name containing
// "friendl" (covers "International Friendly", ESPN slugs, etc.).
export function isFriendlyCompetition(name) {
  const key = _normKey(name);
  if (!key) return false;
  return FRIENDLY_SET.has(key) || /friendl/.test(key);
}

export function displayCompetitionName(name, lang = 'en') {
  const raw = String(name || '').trim();
  if (!raw || raw === 'N/A') return '';

  const key = _normKey(raw);

  if (['friendlies clubs', 'friendlies club', 'friendly clubs', 'friendly club',
       'club friendlies', 'club friendly'].includes(key)) {
    return CLUB_FRIENDLY_LABELS[lang] || CLUB_FRIENDLY_LABELS.en;
  }

  if (key === 'friendlies' || key === 'friendly') {
    return FRIENDLY_LABELS[lang] || FRIENDLY_LABELS.en;
  }

  return raw;
}
