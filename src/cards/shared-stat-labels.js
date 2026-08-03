/**
 * Maps ESPN API stat keys to i18n translation keys.
 * Keys that already existed: team.possession, team.shots, team.on_target, team.fouls
 * New keys added: stat.*
 */
const STAT_KEY_MAP = {
  possessionPct:    'team.possession',
  totalShots:       'team.shots',
  shotsOnTarget:    'team.on_target',
  foulsCommitted:   'team.fouls',
  goalAssists:      'stat.assists',
  totalGoals:       'stat.goals',
  wonCorners:       'stat.corners',
  appearances:      'stat.appearances',
  shotAssists:      'stat.shot_assists',
  yellowCards:      'stat.yellow_cards',
  redCards:         'stat.red_cards',
  offsides:         'stat.offsides',
  saves:            'stat.saves',
  blockedShots:     'stat.blocked_shots',
  shotsOffTarget:   'stat.shots_off_target',
  expectedGoals:    'stat.expected_goals',
  touchesInOppositionBox: 'stat.touches_opposition_box',
  bigChances:       'stat.big_chances',
  bigChancesMissed: 'stat.big_chances_missed',
  accuratePasses:   'stat.accurate_passes',
  totalPasses:      'stat.total_passes',
  passesCompleted:  'stat.passes_completed',
  tacklesTotal:     'stat.tackles',
  interceptions:    'stat.interceptions',
  aerialDuelsWon:   'stat.aerial_duels_won',
  freeKickGoals:    'stat.free_kick_goals',
  penaltyGoals:     'stat.penalty_goals',
  accurateCrosses:  'stat.accurate_crosses',
  clearances:       'stat.clearances',
  successfulDribbles: 'stat.successful_dribbles',
  duelsWon:         'stat.duels_won',
  groundDuelsWon:   'stat.ground_duels_won',
  accurateLongBalls: 'stat.accurate_long_balls',
  oppositionHalfPasses: 'stat.opposition_half_passes',
  ownHalfPasses:    'stat.own_half_passes',
  throws:           'stat.throws',
  blocks:           'stat.blocks',
  shotsInsideBox:   'stat.shots_inside_box',
  shotsOutsideBox:  'stat.shots_outside_box',
  hitWoodwork:      'stat.hit_woodwork',
};

const NORMALIZED_STAT_KEYS = Object.fromEntries(
  Object.keys(STAT_KEY_MAP).map(key => [key.replace(/[^a-z0-9]/gi, '').toLowerCase(), key]),
);

Object.assign(NORMALIZED_STAT_KEYS, {
  ballpossesion: 'possessionPct',
  touchesoppbox: 'touchesInOppositionBox',
  touchesoppositionbox: 'touchesInOppositionBox',
  bigchance: 'bigChances',
  bigchancemissed: 'bigChancesMissed',
  bigchancemissedtitle: 'bigChancesMissed',
  accuratepass: 'accuratePasses',
  accuratepasses: 'accuratePasses',
  yellowcard: 'yellowCards',
  shotsontarget: 'shotsOnTarget',
  shotsofftarget: 'shotsOffTarget',
  corners: 'wonCorners',
  offsides: 'offsides',
  accuratecrosses: 'accurateCrosses',
  aerialswon: 'aerialDuelsWon',
  clearances: 'clearances',
  dribblessucceeded: 'successfulDribbles',
  duelwon: 'duelsWon',
  fouls: 'foulsCommitted',
  groundduelswon: 'groundDuelsWon',
  interceptions: 'interceptions',
  keepersaves: 'saves',
  longballsaccurate: 'accurateLongBalls',
  matchstatsheaderstackles: 'tacklesTotal',
  oppositionhalfpasses: 'oppositionHalfPasses',
  ownhalfpasses: 'ownHalfPasses',
  playerthrows: 'throws',
  redcards: 'redCards',
  shotblocks: 'blocks',
  shotsinsidebox: 'shotsInsideBox',
  shotsoutsidebox: 'shotsOutsideBox',
  shotswoodwork: 'hitWoodwork',
});

/**
 * Returns a human-readable label for an ESPN stat key.
 * Falls back to camelCase → Title Case conversion when no translation exists.
 */
export const canonicalStatKey = key => {
  const rawKey = String(key || '');
  return NORMALIZED_STAT_KEYS[rawKey.replace(/[^a-z0-9]/gi, '').toLowerCase()] || rawKey;
};

export const matchStatRows = (homeStats, awayStats = {}) => {
  if (!homeStats || typeof homeStats !== 'object') return [];
  const awayByCanonical = new Map();
  if (awayStats && typeof awayStats === 'object') {
    for (const [key, value] of Object.entries(awayStats)) {
      const canonical = canonicalStatKey(key);
      if (!awayByCanonical.has(canonical)) awayByCanonical.set(canonical, value);
    }
  }
  const seen = new Set();
  const rows = [];
  for (const [key, home] of Object.entries(homeStats)) {
    const canonical = canonicalStatKey(key);
    if (canonical === 'Unknown' || canonical === 'appearances' || seen.has(canonical)) continue;
    seen.add(canonical);
    rows.push({
      key: canonical,
      home,
      away: awayByCanonical.has(canonical) ? awayByCanonical.get(canonical) : '—',
    });
  }
  return rows;
};

export const translateStatKey = (key, t) => {
  const rawKey = String(key || '');
  const canonicalKey = canonicalStatKey(rawKey);
  const i18nKey = STAT_KEY_MAP[canonicalKey];
  if (i18nKey) {
    const translated = t(i18nKey);
    if (translated && translated !== i18nKey) return translated;
  }
  return rawKey
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, s => s.toUpperCase())
    .trim();
};
