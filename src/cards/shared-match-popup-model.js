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

export function predictionOutcome(match) {
  if (match?.state !== 'post') return null;
  const prediction = match.prediction || {};
  const home = Number(match.home_score);
  const away = Number(match.away_score);
  if (!Number.isFinite(home) || !Number.isFinite(away)) return null;
  const actual = home > away ? 'home' : away > home ? 'away' : 'draw';
  const percentages = {
    home: Number(prediction.percent_home),
    draw: Number(prediction.percent_draw),
    away: Number(prediction.percent_away),
  };
  let predicted = Object.entries(percentages)
    .filter(([, value]) => Number.isFinite(value))
    .sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const winner = String(prediction.winner_name || '').trim().toLowerCase();
  if (winner && match.home_team && winner === String(match.home_team).trim().toLowerCase()) predicted = 'home';
  if (winner && match.away_team && winner === String(match.away_team).trim().toLowerCase()) predicted = 'away';
  if (!predicted) return null;
  const xg = match.review?.expected_goals || match.expected_goals || null;
  return {
    predicted,
    actual,
    correct: predicted === actual,
    predictedPercent: Number.isFinite(percentages[predicted]) ? percentages[predicted] : null,
    xg: xg && (xg.home != null || xg.away != null) ? xg : null,
  };
}

export function derivedMatchStory(match) {
  if (Array.isArray(match?.match_story) && match.match_story.length) return match.match_story;
  const events = (Array.isArray(match?.key_events) ? match.key_events : [])
    .filter(event => event && (event.scoring_play || /goal/i.test(`${event.type || ''} ${event.type_text || ''}`) || /red/i.test(`${event.type || ''} ${event.type_text || ''}`)))
    .sort((a, b) => Number(a.minute ?? a.clock ?? 0) - Number(b.minute ?? b.clock ?? 0));
  if (!events.length) return [];
  const goals = events.filter(event => event.scoring_play || /goal/i.test(`${event.type || ''} ${event.type_text || ''}`));
  const story = [];
  if (goals[0]) story.push({ ...goals[0], type: 'opening_goal', minute: goals[0].minute ?? goals[0].clock });
  for (const event of goals.slice(1)) {
    if (event.home_score != null && event.away_score != null && Number(event.home_score) === Number(event.away_score)) {
      story.push({ ...event, type: 'equalizer', minute: event.minute ?? event.clock });
    }
  }
  for (const event of events.filter(item => /red/i.test(`${item.type || ''} ${item.type_text || ''}`))) {
    story.push({ ...event, type: 'red_card', minute: event.minute ?? event.clock });
  }
  const home = Number(match.home_score);
  const away = Number(match.away_score);
  const winningTeam = home > away ? match.home_team : away > home ? match.away_team : '';
  const decisive = [...goals].reverse().find(event => winningTeam && event.team === winningTeam);
  if (decisive && decisive !== goals[0]) story.push({ ...decisive, type: 'decisive_goal', minute: decisive.minute ?? decisive.clock });
  return [...new Map(story.map(item => [`${item.type}:${item.minute}:${item.player || item.athletes?.[0] || ''}`, item])).values()]
    .sort((a, b) => Number(a.minute || 0) - Number(b.minute || 0));
}
