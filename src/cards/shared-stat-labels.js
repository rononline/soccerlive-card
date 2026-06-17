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
  totalPasses:      'stat.total_passes',
  passesCompleted:  'stat.passes_completed',
  tacklesTotal:     'stat.tackles',
  interceptions:    'stat.interceptions',
  aerialDuelsWon:   'stat.aerial_duels_won',
  freeKickGoals:    'stat.free_kick_goals',
  penaltyGoals:     'stat.penalty_goals',
};

/**
 * Returns a human-readable label for an ESPN stat key.
 * Falls back to camelCase → Title Case conversion when no translation exists.
 */
export const translateStatKey = (key, t) => {
  const i18nKey = STAT_KEY_MAP[key];
  if (i18nKey) {
    const translated = t(i18nKey);
    if (translated && translated !== i18nKey) return translated;
  }
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim();
};
