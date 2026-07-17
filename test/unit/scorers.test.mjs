import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rankScorers, rankingField } from '../../src/cards/shared-scorers.js';

const data = [
  { player: 'A', goals: 20, assists: 5, rank: 1 },
  { player: 'B', goals: 12, assists: 11, rank: 2 },
  { player: 'C', goals: 8, assists: 9, rank: 3 },
];

test('rankScorers: goals keeps provider order and sets value', () => {
  const r = rankScorers(data, 'goals');
  assert.deepEqual(r.map(s => s.player), ['A', 'B', 'C']);
  assert.equal(r[0].value, 20);
});

test('rankScorers: assists re-sorts and re-ranks', () => {
  const r = rankScorers(data, 'assists');
  assert.deepEqual(r.map(s => s.player), ['B', 'C', 'A']);
  assert.equal(r[0].value, 11);
  assert.equal(r[0].rank, 1);
  assert.equal(r[2].rank, 3);
});

test('rankScorers: non-numeric / missing counts become 0', () => {
  const r = rankScorers([{ player: 'X', goals: 'N/A' }, { player: 'Y' }], 'goals');
  assert.equal(r[0].value, 0);
  assert.equal(r[1].value, 0);
});

test('rankScorers: unknown ranking falls back to goals', () => {
  assert.equal(rankingField('nonsense'), 'goals');
  const r = rankScorers(data, 'nonsense');
  assert.equal(r[0].value, 20);
});

test('rankScorers: non-array input is handled', () => {
  assert.deepEqual(rankScorers(undefined, 'assists'), []);
});
