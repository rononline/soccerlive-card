import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  hasClubContent,
  groupSquad,
  visibleTransfers,
  transferCounterparty,
  formatTransferDate,
} from '../../src/cards/shared-club-model.js';

test('hasClubContent: true only when profile/squad/transfers present', () => {
  assert.equal(hasClubContent(null), false);
  assert.equal(hasClubContent({}), false);
  assert.equal(hasClubContent({ coach: 'X' }), false);
  assert.equal(hasClubContent({ profile: { name: 'A' } }), true);
  assert.equal(hasClubContent({ squad: [] }), true);
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
