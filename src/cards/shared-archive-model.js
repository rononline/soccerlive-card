function seasonOf(match) {
  if (match?.season && match.season !== 'unknown') return String(match.season);
  const raw = String(match?.date_iso || match?.date || '');
  const found = raw.match(/((?:19|20)\d{2})-(\d{2})/);
  if (!found) return 'unknown';
  const year = Number(found[1]);
  const start = Number(found[2]) >= 7 ? year : year - 1;
  return `${start}/${String(start + 1).slice(-2)}`;
}

export function normalizeArchiveMatch(match) {
  if (!match || typeof match !== 'object') return null;
  let homeScore = match.home_score ?? match.thuis_score ?? match.score_home;
  let awayScore = match.away_score ?? match.uit_score ?? match.score_away;
  const score = String(match.uitslag || match.score || '').match(/(\d+)\s*[-–:]\s*(\d+)/);
  if (score) {
    homeScore ??= Number(score[1]);
    awayScore ??= Number(score[2]);
  }
  const rawDate = String(match.date_iso ?? match.datetime ?? match.date ?? match.datum ?? '');
  const localized = rawDate.match(/^(\d{2})-(\d{2})-((?:19|20)\d{2})(.*)$/);
  return {
    ...match,
    event_id: match.event_id ?? match.id ?? match.wedstrijd_id,
    date_iso: localized ? `${localized[3]}-${localized[2]}-${localized[1]}${localized[4]}` : rawDate,
    date: match.date ?? match.datum,
    home_team: match.home_team ?? match.home ?? match.thuis ?? match.team_home,
    away_team: match.away_team ?? match.away ?? match.uit ?? match.team_away,
    home_score: homeScore,
    away_score: awayScore,
    competition_name: match.competition_name ?? match.league_name ?? match.competitie ?? match.soort,
  };
}

export function archiveMatchesFromState(state) {
  const attrs = state?.attributes || {};
  const raw = attrs.match_archive || attrs.matches || attrs.uitslagen || [];
  return Array.isArray(raw) ? raw.map(normalizeArchiveMatch).filter(Boolean) : [];
}

function normalizedTeam(value) {
  return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/\b(fc|cf|sc|afc|rotterdam)\b/g, '').replace(/[^a-z0-9]/g, '');
}

function sameTeam(a, b) {
  const left = normalizedTeam(a);
  const right = normalizedTeam(b);
  return Boolean(left && right && (left === right || left.includes(right) || right.includes(left)));
}

export function historicalH2H(matches, homeTeam, awayTeam) {
  return (matches || []).map(normalizeArchiveMatch).filter(match => (
    match && (
      (sameTeam(match.home_team, homeTeam) && sameTeam(match.away_team, awayTeam))
      || (sameTeam(match.home_team, awayTeam) && sameTeam(match.away_team, homeTeam))
    )
    && Number.isFinite(Number(match.home_score))
    && Number.isFinite(Number(match.away_score))
  )).sort((a, b) => String(b.date_iso || b.date || '').localeCompare(String(a.date_iso || a.date || '')));
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
  const results = filtered.map(match => ({ match, result: archiveResult(match, teamName) }))
    .filter(item => item.result);
  const opponentCounts = new Map();
  results.forEach(({ result }) => opponentCounts.set(
    result.opponent,
    (opponentCounts.get(result.opponent) || 0) + 1,
  ));
  const homeAway = ['home', 'away'].map(location => ({
    location,
    ...calculateStats(
      filtered.filter(match => archiveResult(match, teamName)?.venue === location),
      teamName,
    ),
  }));
  const byMargin = results.map(({ match, result }) => ({
    match,
    result,
    margin: result.own - result.other,
  }));
  return {
    matches: filtered,
    seasons,
    competitions,
    stats: calculateStats(filtered, teamName),
    monthly,
    seasonComparison,
    homeAway,
    commonOpponents: [...opponentCounts.entries()]
      .sort((a, b) => b[1] - a[1]).slice(0, 8)
      .map(([name, matches]) => ({ name, matches })),
    biggestWin: byMargin.filter(item => item.margin > 0).sort((a, b) => b.margin - a.margin)[0] || null,
    biggestLoss: byMargin.filter(item => item.margin < 0).sort((a, b) => a.margin - b.margin)[0] || null,
  };
}
