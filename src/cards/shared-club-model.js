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
