import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  hasClubContent,
  groupSquad,
  collapseGroups,
  visibleTransfers,
  filterTransfers,
  countTransfers,
  transferCounterparty,
  formatTransferDate,
  squadValueSummary,
} from '../../src/cards/shared-club-model.js';

test('squadValueSummary totals known values and ages by position', () => {
  const summary = squadValueSummary([
    { position: 'Defender', market_value: 10_000_000, age: 24 },
    { position: 'Defender', market_value: 5_000_000, age: 26 },
    { position: 'Attacker', age: 20 },
  ]);
  assert.equal(summary.total, 15_000_000);
  assert.equal(summary.valued_count, 2);
  assert.equal(summary.by_position.Defender, 15_000_000);
  assert.equal(summary.average_age, 70 / 3);
});

test('collapseGroups: caps players per position and counts hidden', () => {
  const groups = [
    { key: 'club.goalkeepers', players: [{ name: 'A' }, { name: 'B' }, { name: 'C' }] },
    { key: 'club.defenders', players: [{ name: 'D' }, { name: 'E' }] },
  ];
  const { groups: capped, hidden } = collapseGroups(groups, 2);
  assert.equal(capped[0].players.length, 2);
  assert.equal(capped[1].players.length, 2);
  assert.equal(hidden, 1);  // one keeper hidden
  // perPosition < 1 => no cap
  assert.equal(collapseGroups(groups, 0).hidden, 0);
});

test('filterTransfers / countTransfers: by direction', () => {
  const tr = [
    { direction: 'in', player: 'A' }, { direction: 'out', player: 'B' }, { direction: 'in', player: 'C' },
  ];
  assert.deepEqual(countTransfers(tr), { all: 3, in: 2, out: 1 });
  assert.equal(filterTransfers(tr, 'in').length, 2);
  assert.equal(filterTransfers(tr, 'out').length, 1);
  assert.equal(filterTransfers(tr, 'all').length, 3);
  assert.equal(filterTransfers(null, 'in').length, 0);
});

test('hasClubContent: true when profile/coach/non-empty squad/transfers present', () => {
  assert.equal(hasClubContent(null), false);
  assert.equal(hasClubContent({}), false);
  assert.equal(hasClubContent({ squad: [] }), false);      // empty list is not content
  assert.equal(hasClubContent({ transfers: [] }), false);
  assert.equal(hasClubContent({ coach: 'Van Bronckhorst' }), true); // a coach is usable
  assert.equal(hasClubContent({ profile: { name: 'A' } }), true);
  assert.equal(hasClubContent({ squad: [{ name: 'P' }] }), true);
});

test('groupSquad: keeps position order and drops empty groups', () => {
  const squad = [
    { name: 'Keeper', position: 'Goalkeeper' },
    { name: 'Striker', position: 'Attacker' },
    { name: 'Back', position: 'Defender' },
  ];
  const groups = groupSquad(squad);
  assert.deepEqual(groups.map(g => g.pos), ['Goalkeeper', 'Defender', 'Attacker']);
  assert.deepEqual(groups[0].players.map(p => p.name), ['Keeper']);
});

test('groupSquad: tolerates non-array and unknown positions', () => {
  assert.deepEqual(groupSquad(null), []);
  assert.deepEqual(groupSquad([{ name: 'X', position: 'Coach' }]), []);
});

test('visibleTransfers: caps to max most-recent entries', () => {
  const list = Array.from({ length: 12 }, (_, i) => ({ player: `P${i}` }));
  assert.equal(visibleTransfers(list, 8).length, 8);
  assert.equal(visibleTransfers(list, 3)[2].player, 'P2');
  assert.equal(visibleTransfers(null).length, 0);
});

test('transferCounterparty: shows the other club for the direction', () => {
  assert.equal(transferCounterparty({ direction: 'in', from: 'Ajax', to: 'Feyenoord' }), 'Ajax');
  assert.equal(transferCounterparty({ direction: 'out', from: 'Feyenoord', to: 'Ajax' }), 'Ajax');
  assert.equal(transferCounterparty({}), '');
});

test('formatTransferDate: yyyy-mm-dd becomes dd-mm-yyyy', () => {
  assert.equal(formatTransferDate('2025-07-01'), '01-07-2025');
  assert.equal(formatTransferDate(''), '');
});
