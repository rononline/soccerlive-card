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
