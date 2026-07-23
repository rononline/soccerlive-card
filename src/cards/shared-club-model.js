// Pure, lit-free computation for the Club card, so the grouping and transfer
// display logic can be unit-tested without rendering.

// Squad position groups, in the order the sensor already sorts them.
export const POSITION_GROUPS = [
  ['Goalkeeper', 'club.goalkeepers'],
  ['Defender', 'club.defenders'],
  ['Midfielder', 'club.midfielders'],
  ['Attacker', 'club.attackers'],
];

/** Whether a club blob carries anything worth rendering. A usable coach counts,
 * while an empty squad/transfers list does not. */
export function hasClubContent(club) {
  return Boolean(
    club && (
      club.profile ||
      club.coach ||
      club.squad?.length ||
      club.transfers?.length
    )
  );
}

/**
 * Group a flat squad list into the fixed position groups, preserving the
 * sensor's order and dropping empty groups.
 * Returns [{ pos, key, players }].
 */
export function groupSquad(squad) {
  const arr = Array.isArray(squad) ? squad : [];
  return POSITION_GROUPS
    .map(([pos, key]) => ({ pos, key, players: arr.filter(p => p && p.position === pos) }))
    .filter(g => g.players.length > 0);
}

/** Cap the transfer list to `max` (default 8) most-recent entries. */
export function visibleTransfers(transfers, max = 8) {
  const arr = Array.isArray(transfers) ? transfers : [];
  return arr.slice(0, Math.max(0, max));
}

/**
 * Cap each position group to `perPosition` players (for the collapsed squad
 * view) and report how many players are hidden. perPosition < 1 means no cap.
 */
export function collapseGroups(groups, perPosition) {
  const arr = Array.isArray(groups) ? groups : [];
  if (!perPosition || perPosition < 1) return { groups: arr, hidden: 0 };
  let hidden = 0;
  const limited = arr.map((g) => {
    const shown = (g.players || []).slice(0, perPosition);
    hidden += (g.players || []).length - shown.length;
    return { ...g, players: shown };
  });
  return { groups: limited, hidden };
}

/** Filter transfers by direction: 'in' | 'out' | anything else = all. */
export function filterTransfers(transfers, filter) {
  const arr = Array.isArray(transfers) ? transfers : [];
  if (filter === 'in' || filter === 'out') return arr.filter((t) => t && t.direction === filter);
  return arr;
}

/** Count transfers by direction: { all, in, out }. */
export function countTransfers(transfers) {
  const arr = Array.isArray(transfers) ? transfers : [];
  let inc = 0;
  let out = 0;
  for (const t of arr) {
    if (t?.direction === 'in') inc += 1;
    else if (t?.direction === 'out') out += 1;
  }
  return { all: arr.length, in: inc, out };
}

/** The counterparty club for a transfer, relative to the tracked team. */
export function transferCounterparty(tr) {
  const t = tr || {};
  return t.direction === 'in' ? (t.from || '') : (t.to || '');
}

/** Format an ISO `yyyy-mm-dd` date as `dd-mm-yyyy` (empty stays empty). */
export function formatTransferDate(date) {
  if (!date) return '';
  return String(date).split('-').reverse().join('-');
}

export function squadValueSummary(squad) {
  const players = Array.isArray(squad) ? squad : [];
  const valued = players.filter(player => Number.isFinite(Number(player?.market_value)) && Number(player.market_value) > 0);
  const ages = players.map(player => Number(player?.age)).filter(Number.isFinite);
  const byPosition = {};
  for (const player of valued) {
    const position = player.position || 'Other';
    byPosition[position] = (byPosition[position] || 0) + Number(player.market_value);
  }
  return {
    total: valued.reduce((sum, player) => sum + Number(player.market_value), 0),
    valued_count: valued.length,
    average_age: ages.length ? ages.reduce((sum, age) => sum + age, 0) / ages.length : null,
    by_position: byPosition,
  };
}

export function squadAnalysis(squad) {
  const players = (Array.isArray(squad) ? squad : []).filter(player => player?.name);
  const positions = {};
  for (const player of players) {
    const position = player.position || 'Other';
    const group = positions[position] ||= { count: 0, ages: [], value: 0 };
    group.count += 1;
    const age = Number(player.age);
    if (Number.isFinite(age) && age > 0) group.ages.push(age);
    const value = Number(player.market_value);
    if (Number.isFinite(value) && value > 0) group.value += value;
  }
  const lines = Object.entries(positions).map(([position, group]) => ({
    position,
    count: group.count,
    averageAge: group.ages.length ? group.ages.reduce((sum, age) => sum + age, 0) / group.ages.length : null,
    value: group.value,
  }));
  const aged = players.filter(player => Number.isFinite(Number(player.age)) && Number(player.age) > 0);
  const youngest = aged.length ? aged.reduce((best, player) => Number(player.age) < Number(best.age) ? player : best) : null;
  const oldest = aged.length ? aged.reduce((best, player) => Number(player.age) > Number(best.age) ? player : best) : null;
  return { lines, youngest, oldest, thin: lines.filter(line => line.count <= 2) };
}

export function normalizedInjuries(club) {
  const data = club || {};
  const squad = Array.isArray(data.squad) ? data.squad : [];
  const explicit = Array.isArray(data.injuries) ? data.injuries : [];
  const byName = new Map();
  for (const injury of explicit) {
    const name = injury?.player || injury?.name;
    if (name) byName.set(String(name).toLowerCase(), { ...injury, player: name });
  }
  for (const player of squad.filter(item => item?.injured)) {
    const key = String(player.name || '').toLowerCase();
    if (!key) continue;
    byName.set(key, { ...player, ...(byName.get(key) || {}), player: player.name });
  }
  return [...byName.values()];
}

export function availabilityRadar(squad) {
  return POSITION_GROUPS.map(([position, key]) => {
    const players = (Array.isArray(squad) ? squad : []).filter(player => player?.position === position);
    const available = players.filter(player => !player.injured).length;
    return { position, key, available, total: players.length, thin: players.length > 0 && available <= (position === 'Goalkeeper' ? 1 : 2) };
  }).filter(line => line.total > 0);
}

export function predictedLineup(squad, transfers = []) {
  const transferStatus = new Map();
  const sortedTransfers = [...(Array.isArray(transfers) ? transfers : [])].sort((a, b) =>
    String(b?.date || '').localeCompare(String(a?.date || '')));
  for (const transfer of sortedTransfers) {
    const idKey = transfer?.player_id != null ? `id:${transfer.player_id}` : '';
    const nameKey = transfer?.player ? `name:${String(transfer.player).trim().toLowerCase()}` : '';
    if (idKey && !transferStatus.has(idKey)) transferStatus.set(idKey, transfer.direction);
    if (nameKey && !transferStatus.has(nameKey)) transferStatus.set(nameKey, transfer.direction);
  }
  const hasLeft = player => {
    const idStatus = player?.id != null ? transferStatus.get(`id:${player.id}`) : null;
    const nameStatus = transferStatus.get(`name:${String(player?.name || '').trim().toLowerCase()}`);
    return (idStatus || nameStatus) === 'out';
  };
  const available = (Array.isArray(squad) ? squad : []).filter(player => player?.name && !player.injured && !hasLeft(player));
  const score = player => Number(player.starts || player.appearances || 0) * 10 + Number(player.rating || 0);
  const pick = (position, count) => available.filter(player => player.position === position).sort((a, b) => score(b) - score(a)).slice(0, count);
  const lines = [pick('Goalkeeper', 1), pick('Defender', 4), pick('Midfielder', 3), pick('Attacker', 3)];
  const players = lines.flat();
  return players.length >= 7 ? { formation: '4-3-3', lines, players } : null;
}

export function officialSelection(attrs) {
  const summary = matchdaySummary(attrs);
  const match = summary?.match;
  if (!match) return null;
  const teamId = String(attrs?.team_id ?? '');
  const teamName = String(attrs?.team_name || '').toLowerCase();
  const home = teamId ? String(match.home_id ?? '') === teamId : String(match.home_team || '').toLowerCase() === teamName;
  const players = home ? match.lineup_home : match.lineup_away;
  if (!Array.isArray(players) || !players.length) return null;
  return {
    match,
    starters: players.filter(player => player?.starter !== false),
    substitutes: players.filter(player => player?.starter === false),
  };
}

export function teamNews(club, changes) {
  const news = [];
  for (const item of (Array.isArray(changes) ? changes : [])) news.push({ ...item, source: 'change' });
  for (const item of (Array.isArray(club?.injuries) ? club.injuries : [])) news.push({ type: 'injury_added', player: item.player || item.name, detail: item.expected_return, source: 'injury' });
  for (const item of (Array.isArray(club?.transfers) ? club.transfers : []).slice(0, 5)) news.push({ type: 'transfer_added', player: item.player, detail: item.direction, date: item.date, source: 'transfer' });
  return [...new Map(news.map((item, index) => [`${item.type}|${item.player || item.name}|${item.date || index}`, item])).values()].slice(0, 10);
}

export function playerComparison(players) {
  const list = (Array.isArray(players) ? players : []).filter(Boolean).slice(0, 2);
  if (list.length !== 2) return null;
  const fields = ['age', 'market_value', 'appearances', 'goals', 'assists', 'rating'];
  return { players: list, fields: fields.filter(field => list.some(player => player[field] !== null && player[field] !== undefined && player[field] !== '')) };
}

export function filterSquad(squad, query = '', position = 'all', availability = 'all') {
  const term = String(query || '').trim().toLowerCase();
  return (Array.isArray(squad) ? squad : []).filter(player => {
    if (!player) return false;
    if (term && !String(player.name || '').toLowerCase().includes(term)) return false;
    if (position !== 'all' && player.position !== position) return false;
    if (availability === 'available' && player.injured) return false;
    if (availability === 'unavailable' && !player.injured) return false;
    return true;
  });
}

export function clubRecords(matches, teamId, teamName) {
  const id = String(teamId ?? '');
  const name = String(teamName || '').trim().toLowerCase();
  const parsed = (Array.isArray(matches) ? matches : []).filter(match => match?.state === 'post').map(match => {
    const home = id ? String(match.home_id ?? '') === id : String(match.home_team || '').trim().toLowerCase() === name;
    const away = id ? String(match.away_id ?? '') === id : String(match.away_team || '').trim().toLowerCase() === name;
    if (!home && !away) return null;
    const ours = Number(home ? match.home_score : match.away_score);
    const theirs = Number(home ? match.away_score : match.home_score);
    if (!Number.isFinite(ours) || !Number.isFinite(theirs)) return null;
    return { match, home, ours, theirs, result: ours > theirs ? 'W' : ours < theirs ? 'L' : 'D', time: matchTime(match) };
  }).filter(Boolean).sort((a, b) => b.time - a.time);
  if (!parsed.length) return null;
  const streak = predicate => {
    let count = 0;
    for (const item of parsed) { if (!predicate(item)) break; count += 1; }
    return count;
  };
  const wins = parsed.filter(item => item.result === 'W');
  const biggest = wins.sort((a, b) => (b.ours - b.theirs) - (a.ours - a.theirs))[0] || null;
  const split = home => {
    const games = parsed.filter(item => item.home === home);
    const points = games.reduce((sum, item) => sum + (item.result === 'W' ? 3 : item.result === 'D' ? 1 : 0), 0);
    return { games: games.length, pointsPerGame: games.length ? points / games.length : null };
  };
  return {
    played: parsed.length,
    unbeaten: streak(item => item.result !== 'L'),
    winning: streak(item => item.result === 'W'),
    cleanSheets: streak(item => item.theirs === 0),
    averageGoals: parsed.reduce((sum, item) => sum + item.ours, 0) / parsed.length,
    biggestWin: biggest ? { score: `${biggest.ours}–${biggest.theirs}`, opponent: biggest.home ? biggest.match.away_team : biggest.match.home_team } : null,
    home: split(true),
    away: split(false),
  };
}

export const CLUB_SECTION_ORDER = ['profile', 'matchday', 'dashboard', 'quality', 'availability', 'selection', 'prediction', 'news', 'season', 'changes', 'favorites', 'records', 'analysis', 'injuries', 'comparison', 'squad', 'transfers', 'automations'];

export function normalizeClubSectionOrder(value) {
  const requested = (Array.isArray(value) ? value : String(value || '').split(','))
    .map(item => String(item).trim().toLowerCase()).filter(item => CLUB_SECTION_ORDER.includes(item));
  return [...new Set([...requested, ...CLUB_SECTION_ORDER])];
}

function matchTime(match) {
  const raw = match?.date_iso || match?.date;
  const time = raw ? new Date(raw).getTime() : NaN;
  return Number.isFinite(time) ? time : 0;
}

/** Provider placeholders are not display values. */
export function usableMatchText(value) {
  if (value === null || value === undefined) return '';
  const text = String(value).trim();
  return /^(?:n\/?a|none|null|undefined|-)$/i.test(text) ? '' : text;
}

/** Pick the most useful match for a phase-aware club dashboard. */
export function matchdaySummary(attrs) {
  const data = attrs || {};
  const matches = [
    ...(Array.isArray(data.matches) ? data.matches : []),
    ...(Array.isArray(data.upcoming_matches) ? data.upcoming_matches : []),
    ...(Array.isArray(data.previous_matches) ? data.previous_matches : []),
    ...(data.next_match ? [data.next_match] : []),
  ].filter(Boolean);
  const unique = [...new Map(matches.map((match, index) => [String(match.event_id ?? `${match.home_team}|${match.away_team}|${match.date_iso || match.date}|${index}`), match])).values()];
  const live = unique.find(match => match.state === 'in');
  const upcoming = unique.filter(match => match.state === 'pre').sort((a, b) => matchTime(a) - matchTime(b))[0];
  const finished = unique.filter(match => match.state === 'post').sort((a, b) => matchTime(b) - matchTime(a))[0];
  const match = live || upcoming || finished || null;
  return match ? { match, phase: live ? 'live' : upcoming ? 'pre' : 'post' } : null;
}

/** Quantify how much normal first-team production is unavailable. */
export function selectionImpact(club) {
  const squad = Array.isArray(club?.squad) ? club.squad : [];
  const injuries = normalizedInjuries(club);
  const unavailableNames = new Set(injuries.map(item => String(item.player || '').trim().toLowerCase()));
  const unavailable = squad.filter(player => player?.injured || unavailableNames.has(String(player?.name || '').trim().toLowerCase()));
  if (!unavailable.length) return null;
  const metrics = [
    player => player.starts,
    player => player.appearances,
    player => player.minutes == null ? NaN : Number(player.minutes) / 90,
  ];
  const metric = metrics
    .map((read, priority) => ({
      read,
      priority,
      coverage: squad.filter(player => Number.isFinite(Number(read(player))) && Number(read(player)) >= 0).length,
      total: squad.reduce((sum, player) => {
        const value = Number(read(player));
        return sum + (Number.isFinite(value) && value >= 0 ? value : 0);
      }, 0),
    }))
    .filter(item => item.coverage > 0 && item.total > 0)
    .sort((a, b) => b.coverage - a.coverage || b.total - a.total || a.priority - b.priority)[0]?.read;
  const load = player => {
    const number = Number(metric?.(player));
    return Number.isFinite(number) && number >= 0 ? number : 0;
  };
  const totalLoad = squad.reduce((sum, player) => sum + load(player), 0);
  const missingLoad = unavailable.reduce((sum, player) => sum + load(player), 0);
  return {
    players: unavailable,
    count: unavailable.length,
    loadPercent: totalLoad > 0 ? Math.round(missingLoad / totalLoad * 100) : null,
    goals: unavailable.reduce((sum, player) => sum + (Number(player.goals) || 0), 0),
    assists: unavailable.reduce((sum, player) => sum + (Number(player.assists) || 0), 0),
  };
}

/** Current-season W/D/L and cumulative points, oldest match first. */
export function seasonProgress(matches, teamId, teamName, max = 12) {
  const id = String(teamId ?? '');
  const name = String(teamName || '').trim().toLowerCase();
  const list = (Array.isArray(matches) ? matches : [])
    .filter(match => {
      const competition = `${match?.competition_name || ''} ${match?.league_name || ''}`.toLowerCase();
      return match?.state === 'post' && match.is_friendly !== true && !/friendl|oefen|amical|amistoso|freundschaft/.test(competition);
    })
    .sort((a, b) => matchTime(a) - matchTime(b));
  let points = 0;
  let goalsFor = 0;
  let goalsAgainst = 0;
  const rounds = [];
  for (const match of list) {
    const home = id ? String(match.home_id ?? '') === id : String(match.home_team || '').trim().toLowerCase() === name;
    const away = id ? String(match.away_id ?? '') === id : String(match.away_team || '').trim().toLowerCase() === name;
    if (!home && !away) continue;
    const ours = Number(home ? match.home_score : match.away_score);
    const theirs = Number(home ? match.away_score : match.home_score);
    if (!Number.isFinite(ours) || !Number.isFinite(theirs)) continue;
    const result = ours > theirs ? 'W' : ours < theirs ? 'L' : 'D';
    points += result === 'W' ? 3 : result === 'D' ? 1 : 0;
    goalsFor += ours;
    goalsAgainst += theirs;
    rounds.push({ points, result, goalsFor, goalsAgainst, opponent: home ? match.away_team : match.home_team });
  }
  return { rounds: rounds.slice(-Math.max(1, max)), played: rounds.length, points, goalsFor, goalsAgainst };
}

/** Financial/window summary; absent fees remain absent rather than becoming zero. */
export function transferSummary(transfers) {
  const list = Array.isArray(transfers) ? transfers : [];
  const numeric = item => {
    if (item?.fee !== null && item?.fee !== undefined && item?.fee !== '') {
      const value = Number(item.fee);
      if (Number.isFinite(value) && value >= 0) return value;
    }
    const text = `${item?.fee_text || ''} ${item?.type || ''}`;
    if (!/[€$£]/.test(text)) return null;
    const match = text.replace(',', '.').match(/([\d.]+)\s*([mk])?/i);
    if (!match) return null;
    const value = Number(match[1]);
    const factor = match[2]?.toLowerCase() === 'm' ? 1_000_000 : match[2]?.toLowerCase() === 'k' ? 1_000 : 1;
    return Number.isFinite(value) ? value * factor : null;
  };
  const incoming = list.filter(item => item?.direction === 'in');
  const outgoing = list.filter(item => item?.direction === 'out');
  const spentFees = incoming.map(numeric).filter(value => value !== null);
  const incomeFees = outgoing.map(numeric).filter(value => value !== null);
  const spent = spentFees.reduce((sum, value) => sum + value, 0);
  const income = incomeFees.reduce((sum, value) => sum + value, 0);
  const feeCoverage = spentFees.length + incomeFees.length;
  const loans = list.filter(item => /loan|huur|leih|prêt|prest/i.test(`${item?.type || ''} ${item?.fee_text || ''}`)).length;
  const free = list.filter(item => /free|transfervrij|gratuit|ablösefrei|libre/i.test(`${item?.type || ''} ${item?.fee_text || ''}`)).length;
  const windows = {};
  for (const item of list) {
    const date = String(item?.date || '');
    const year = date.slice(0, 4);
    const month = Number(date.slice(5, 7));
    if (!/^\d{4}$/.test(year) || !Number.isFinite(month)) continue;
    const key = `${year}-${month >= 7 ? 'summer' : 'winter'}`;
    windows[key] = (windows[key] || 0) + 1;
  }
  return { incoming: incoming.length, outgoing: outgoing.length, spent, income, balance: income - spent, feeCoverage, loans, free, windows };
}
