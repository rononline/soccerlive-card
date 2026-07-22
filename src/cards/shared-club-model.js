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
