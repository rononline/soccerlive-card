// Normalised comparison key for a competition name (lowercase, single spaces).
function _normKey(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const CLUB_FRIENDLY_KEYS = new Set([
  'friendlies clubs', 'friendlies club', 'friendly clubs', 'friendly club',
  'club friendlies', 'club friendly',
]);
const FRIENDLY_KEYS = new Set(['friendlies', 'friendly']);

// Whether a competition is a friendly. Providers hand out a generic FIFA logo
// for friendlies, so cards use this to suppress that misleading logo.
export function isFriendlyCompetition(name) {
  const key = _normKey(name);
  return CLUB_FRIENDLY_KEYS.has(key) || FRIENDLY_KEYS.has(key);
}

export function displayCompetitionName(name, lang = 'en') {
  const raw = String(name || '').trim();
  if (!raw || raw === 'N/A') return '';

  const key = _normKey(raw);

  const clubFriendlies = {
    en: 'Club Friendlies',
    nl: 'Oefenwedstrijd',
    de: 'Vereinsfreundschaftsspiele',
    es: 'Amistosos de clubes',
    fr: 'Matchs amicaux clubs',
    it: 'Amichevoli club',
    pt: 'Amistosos de clubes',
  };
  const friendlies = {
    en: 'Friendlies',
    nl: 'Oefenwedstrijden',
    de: 'Freundschaftsspiele',
    es: 'Amistosos',
    fr: 'Matchs amicaux',
    it: 'Amichevoli',
    pt: 'Amistosos',
  };

  if (CLUB_FRIENDLY_KEYS.has(key)) {
    return clubFriendlies[lang] || clubFriendlies.en;
  }

  if (FRIENDLY_KEYS.has(key)) {
    return friendlies[lang] || friendlies.en;
  }

  return raw;
}
