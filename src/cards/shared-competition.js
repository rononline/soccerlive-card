export function displayCompetitionName(name, lang = 'en') {
  const raw = String(name || '').trim();
  if (!raw || raw === 'N/A') return '';

  const key = raw
    .toLowerCase()
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

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

  if (
    key === 'friendlies clubs' ||
    key === 'friendlies club' ||
    key === 'friendly clubs' ||
    key === 'friendly club' ||
    key === 'club friendlies' ||
    key === 'club friendly'
  ) {
    return clubFriendlies[lang] || clubFriendlies.en;
  }

  if (key === 'friendlies' || key === 'friendly') {
    return friendlies[lang] || friendlies.en;
  }

  return raw;
}
