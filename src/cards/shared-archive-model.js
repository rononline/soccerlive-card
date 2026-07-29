function seasonOf(match) {
  if (match?.season && match.season !== 'unknown') return String(match.season);
  const raw = String(match?.date_iso || match?.date || '');
  const found = raw.match(/((?:19|20)\d{2})-(\d{2})/);
  if (!found) return 'unknown';
  const year = Number(found[1]);
  const start = Number(found[2]) >= 7 ? year : year - 1;
  return `${start}/${String(start + 1).slice(-2)}`;
}

export function archiveResult(match, teamName) {
  const team = String(teamName || '').toLowerCase();
  const homeName = String(match?.home_team || '').toLowerCase();
  const awayName = String(match?.away_team || '').toLowerCase();
  const same = (left, right) => (
    left === right
    || (left.length >= 4 && right.length >= 4 && (left.includes(right) || right.includes(left)))
  );
  const away = team && same(awayName, team);
  const home = !team || same(homeName, team);
  if (!home && !away) return null;
  const own = Number(away ? match.away_score : match.home_score);
  const other = Number(away ? match.home_score : match.away_score);
  if (!Number.isFinite(own) || !Number.isFinite(other)) return null;
  return {
    code: own > other ? 'w' : own < other ? 'l' : 'd',
    own,
    other,
    venue: away ? 'away' : 'home',
    opponent: away ? match.home_team : match.away_team,
  };
}

function monthOf(match) {
  const raw = String(match?.date_iso || match?.date || '');
  const found = raw.match(/((?:19|20)\d{2})-(\d{2})/);
  return found ? `${found[1]}-${found[2]}` : '';
}

function calculateStats(matches, teamName) {
  const stats = {
    matches: 0, won: 0, drawn: 0, lost: 0,
    goals_for: 0, goals_against: 0, clean_sheets: 0,
    longest_unbeaten: 0, longest_winning: 0,
  };
  let unbeaten = 0;
  let winning = 0;
  for (const match of [...matches].reverse()) {
    const result = archiveResult(match, teamName);
    if (!result) continue;
    stats.matches += 1;
    stats.goals_for += result.own;
    stats.goals_against += result.other;
    if (result.other === 0) stats.clean_sheets += 1;
    if (result.code === 'w') {
      stats.won += 1;
      winning += 1;
      unbeaten += 1;
    } else if (result.code === 'd') {
      stats.drawn += 1;
      winning = 0;
      unbeaten += 1;
    } else {
      stats.lost += 1;
      winning = 0;
      unbeaten = 0;
    }
    stats.longest_unbeaten = Math.max(stats.longest_unbeaten, unbeaten);
    stats.longest_winning = Math.max(stats.longest_winning, winning);
  }
  stats.goal_difference = stats.goals_for - stats.goals_against;
  stats.win_percentage = stats.matches ? Math.round((stats.won / stats.matches) * 100) : 0;
  return stats;
}

export function archiveModel(matches, teamName, season = '', competition = '', filters = {}) {
  const all = Array.isArray(matches) ? matches : [];
  const seasons = [...new Set(all.map(seasonOf).filter(value => value !== 'unknown'))].sort().reverse();
  const competitions = [...new Set(all.map(
    match => match.competition_name || match.league_name,
  ).filter(Boolean))].sort();
  const filtered = all.filter(match => (
    (!season || seasonOf(match) === season)
    && (!competition || (match.competition_name || match.league_name) === competition)
    && (!filters.location || archiveResult(match, teamName)?.venue === filters.location)
    && (!filters.result || archiveResult(match, teamName)?.code === filters.result)
    && (!filters.opponent || String(archiveResult(match, teamName)?.opponent || '').toLowerCase().includes(String(filters.opponent).toLowerCase()))
  ));
  const monthly = [...new Set(filtered.map(monthOf).filter(Boolean))].sort().slice(-12).map(month => {
    const monthMatches = filtered.filter(match => monthOf(match) === month);
    return { month, ...calculateStats(monthMatches, teamName) };
  });
  const seasonComparison = seasons.slice(0, 5).map(value => ({
    season: value,
    ...calculateStats(all.filter(match => seasonOf(match) === value), teamName),
  }));
  return {
    matches: filtered,
    seasons,
    competitions,
    stats: calculateStats(filtered, teamName),
    monthly,
    seasonComparison,
  };
}
