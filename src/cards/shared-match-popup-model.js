export function kickoffMinutes(match, now = Date.now()) {
  const raw = match?.date_iso || match?.date;
  const time = raw ? new Date(raw).getTime() : NaN;
  return Number.isFinite(time) ? Math.ceil((time - now) / 60000) : null;
}

export function kickoffDurationParts(totalMinutes, maxParts = 2) {
  if (!Number.isFinite(totalMinutes) || totalMinutes <= 0) return [];
  let remaining = Math.ceil(totalMinutes);
  const values = [
    ['day', Math.floor(remaining / 1440)],
    ['hour', Math.floor((remaining % 1440) / 60)],
    ['minute', remaining % 60],
  ];
  return values
    .filter(([, value]) => value > 0)
    .slice(0, Math.max(1, maxParts))
    .map(([unit, value]) => ({ unit, value }));
}

export function formResults(value) {
  if (Array.isArray(value)) return value.map(item => String(item?.result || item || '').slice(0, 1).toUpperCase()).filter(item => 'WDL'.includes(item)).slice(-5);
  return String(value || '').toUpperCase().split('').filter(item => 'WDL'.includes(item)).slice(-5);
}

export function prematchContext(match) {
  const m = match || {};
  const preview = m.preview || {};
  const homeForm = formResults(preview.home_form || m.home_form);
  const awayForm = formResults(preview.away_form || m.away_form);
  const h2h = Array.isArray(m.head_to_head) ? m.head_to_head : [];
  const hasStandings = [m.home_rank, m.away_rank, m.home_standing_summary, m.away_standing_summary].some(value => value !== null && value !== undefined && value !== '' && value !== 'N/A');
  return {
    homeForm,
    awayForm,
    h2h: h2h.slice(0, 5),
    h2hCount: h2h.length || Number(preview.h2h_count || 0),
    hasStandings,
    competition: m.competition_name || m.league_name || '',
    round: m.week_number ?? m.round ?? '',
  };
}

export function reviewContext(match) {
  const review = match?.review || {};
  const scorers = Array.isArray(review.scorers) ? review.scorers : [];
  const rated = Array.isArray(review.top_rated_players) ? review.top_rated_players : [];
  return {
    scorers,
    playerOfMatch: review.player_of_the_match || match?.player_of_the_match || null,
    rated,
    expectedGoals: review.expected_goals || null,
    standout: review.standout_stat || null,
    present: Boolean(scorers.length || review.player_of_the_match || rated.length || review.expected_goals || review.standout_stat),
  };
}
