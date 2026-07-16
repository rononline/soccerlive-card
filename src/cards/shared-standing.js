// Shared league-standing label. Prefers the structured rank/points that
// API-Football provides (so the "pts" label is localizable), and falls back to
// the provider's ready-made summary string (ESPN's "2nd in Dutch Eredivisie").
// `t` is a translate function; returns '' when there is no standing.
export function standingText(match, side, t) {
  if (!match) return '';
  const rank = match[`${side}_rank`];
  if (rank !== undefined && rank !== null) {
    const points = match[`${side}_points`];
    const pts = (points !== undefined && points !== null) ? ` · ${points} ${t('team.pts')}` : '';
    return `#${rank}${pts}`;
  }
  const summary = match[`${side}_standing_summary`];
  return (summary && summary !== 'N/A') ? summary : '';
}
