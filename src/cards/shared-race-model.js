function number(value, fallback = 0) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function raceModel(attrs = {}, teamName = '') {
  const group = attrs.standings_groups?.[0];
  const rows = group?.standings || [];
  if (!rows.length) return null;
  const ordered = [...rows].sort((a, b) => number(a.rank, 999) - number(b.rank, 999));
  const leaderPoints = number(ordered[0]?.points);
  const totalMatches = Math.max(
    ...ordered.map(row => number(row.games_played)),
    Math.max(0, (ordered.length - 1) * 2),
  );
  const raceRows = ordered.map((row, index) => {
    const points = number(row.points);
    const played = number(row.games_played);
    const remaining = Math.max(0, totalMatches - played);
    return {
      ...row,
      points,
      played,
      remaining,
      maximum: points + remaining * 3,
      gapLeader: Math.max(0, leaderPoints - points),
      gapAbove: index ? Math.max(0, number(ordered[index - 1].points) - points) : 0,
    };
  });
  const wanted = String(teamName || '').toLowerCase();
  const tracked = raceRows.find(row => wanted && String(row.team_name || '').toLowerCase().includes(wanted));
  const trajectory = (attrs.standings_history || []).map(snapshot => {
    const snapshotRows = snapshot.groups?.[0]?.standings || [];
    const row = snapshotRows.find(item => (
      tracked?.team_id != null
        ? String(item.team_id) === String(tracked.team_id)
        : wanted && String(item.team_name || '').toLowerCase().includes(wanted)
    ));
    return row ? {
      date: snapshot.captured_at,
      rank: number(row.rank),
      points: number(row.points),
    } : null;
  }).filter(Boolean);
  return { rows: raceRows, tracked, trajectory, totalMatches, group: group?.name || '' };
}

export function standingsForMatch(hass, config, match) {
  if (!hass?.states) return null;
  if (config?.standings_entity && hass.states[config.standings_entity]) {
    return hass.states[config.standings_entity].attributes;
  }
  const competition = String(match?.competition_name || match?.league_name || '').toLowerCase();
  return Object.values(hass.states).find(state => {
    const attrs = state?.attributes || {};
    if (!attrs.standings_groups) return false;
    const name = String(attrs.league_name || attrs.competition_name || '').toLowerCase();
    return competition && name && (competition.includes(name) || name.includes(competition));
  })?.attributes || null;
}

export function virtualStandingsImpact(attrs, match, trackedTeam = '') {
  const rows = attrs?.standings_groups?.[0]?.standings;
  const liveState = String(match?.state || '').toLowerCase();
  if (!rows?.length || !match || !['in', 'live'].includes(liveState)) return null;
  const home = String(match.home_team || '').toLowerCase();
  const away = String(match.away_team || '').toLowerCase();
  const table = rows.map(row => ({ ...row, points: number(row.points), rank: number(row.rank, 999) }));
  const find = name => table.find(row => {
    const team = String(row.team_name || '').toLowerCase();
    return team && name && (team.includes(name) || name.includes(team));
  });
  const homeRow = find(home);
  const awayRow = find(away);
  if (!homeRow || !awayRow) return null;
  const homeScore = number(match.home_score);
  const awayScore = number(match.away_score);
  if (homeScore > awayScore) homeRow.points += 3;
  else if (homeScore < awayScore) awayRow.points += 3;
  else { homeRow.points += 1; awayRow.points += 1; }
  table.sort((a, b) => b.points - a.points || number(b.goal_difference) - number(a.goal_difference));
  table.forEach((row, index) => { row.virtual_rank = index + 1; });
  const wanted = String(trackedTeam || '').toLowerCase();
  const tracked = find(wanted) || (home.includes(wanted) ? homeRow : awayRow);
  return tracked ? {
    previous_rank: tracked.rank,
    rank: tracked.virtual_rank,
    change: tracked.rank - tracked.virtual_rank,
    points: tracked.points,
    team: tracked.team_name,
  } : null;
}
