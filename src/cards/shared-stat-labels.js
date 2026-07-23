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
};

const NORMALIZED_STAT_KEYS = Object.fromEntries(
  Object.keys(STAT_KEY_MAP).map(key => [key.replace(/[^a-z0-9]/gi, '').toLowerCase(), key]),
);

Object.assign(NORMALIZED_STAT_KEYS, {
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
});

/**
 * Returns a human-readable label for an ESPN stat key.
 * Falls back to camelCase → Title Case conversion when no translation exists.
 */
export const translateStatKey = (key, t) => {
  const rawKey = String(key || '');
  const canonicalKey = NORMALIZED_STAT_KEYS[rawKey.replace(/[^a-z0-9]/gi, '').toLowerCase()] || rawKey;
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
