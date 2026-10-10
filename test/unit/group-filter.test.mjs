import { test } from 'node:test';
import assert from 'node:assert/strict';
import { groupFilterActive, filterByGroup } from '../../src/cards/shared-group-filter.js';
import { pickNextFromMatches } from '../../src/cards/shared-minimal-model.js';
import { pickLastFromMatches } from '../../src/cards/shared-last-match.js';

const SAMPLE = [
  { home_team: 'France', away_team: 'Belgium', group: 'Group F', state: 'in', home_score: 1, away_score: 0, date_iso: '2026-06-15T19:00:00Z' },
  { home_team: 'Turkey', away_team: 'Italy', group: 'Group F', state: 'pre', date_iso: '2026-06-15T19:00:00Z' },
  { home_team: 'Spain', away_team: 'Germany', group: 'Group A', state: 'pre', date_iso: '2026-06-15T16:00:00Z' },
  { home_team: 'France', away_team: 'Italy', group: 'Group F', state: 'post', home_score: 2, away_score: 1, date_iso: '2026-06-11T19:00:00Z' },
  { home_team: 'Turkey', away_team: 'Belgium', group: 'Group F', state: 'post', home_score: 0, away_score: 0, date_iso: '2026-06-10T19:00:00Z' },
];

test('groupFilterActive: true only when a group option is set', () => {
  assert.equal(groupFilterActive({}), false);
  assert.equal(groupFilterActive({ my_team: 'France' }), false);
  assert.equal(groupFilterActive({ filter_group: 'Group F' }), true);
  assert.equal(groupFilterActive({ only_my_group: true }), true);
  assert.equal(groupFilterActive({ exclude_my_team: true }), true);
  assert.equal(groupFilterActive(null), false);
});

test('filterByGroup: fixed group keeps only that group', () => {
  const out = filterByGroup(SAMPLE, { filter_group: 'Group A' });
  assert.equal(out.length, 1);
  assert.equal(out[0].home_team, 'Spain');
});

test('filterByGroup: only_my_group keeps the whole group of my_team', () => {
  const out = filterByGroup(SAMPLE, { only_my_group: true, my_team: 'France' });
  assert.deepEqual(out.map(m => m.group), ['Group F', 'Group F', 'Group F', 'Group F']);
  assert.ok(out.every(m => m.group === 'Group F'));
});

test('filterByGroup: only_my_group + exclude_my_team drops my own fixtures', () => {
  const out = filterByGroup(SAMPLE, { only_my_group: true, exclude_my_team: true, my_team: 'France' });
  // France plays in two of the Group F matches; both are dropped, leaving
  // Turkey-Italy (pre) and Turkey-Belgium (post).
  assert.equal(out.length, 2);
  assert.ok(out.every(m => !/france/i.test(m.home_team) && !/france/i.test(m.away_team)));
});

test('filterByGroup: never mutates its input', () => {
  const before = SAMPLE.length;
  filterByGroup(SAMPLE, { exclude_my_team: true, my_team: 'France' });
  assert.equal(SAMPLE.length, before);
});

test('filterByGroup: no config / empty returns input unchanged', () => {
  assert.equal(filterByGroup(SAMPLE, {}).length, SAMPLE.length);
  assert.deepEqual(filterByGroup(null, { filter_group: 'x' }), []);
});

test('pickNextFromMatches: live wins, else earliest upcoming', () => {
  // The group-filtered "other team" pool: Turkey-Italy (pre) is next.
  const pool = filterByGroup(SAMPLE, { only_my_group: true, exclude_my_team: true, my_team: 'France' });
  const next = pickNextFromMatches(pool.filter(m => m.state !== 'post'));
  assert.equal(next.home_team, 'Turkey');
  assert.equal(next.away_team, 'Italy');

  // A live match in the pool wins over an earlier-dated upcoming one.
  const live = pickNextFromMatches(SAMPLE);
  assert.equal(live.state, 'in');
  assert.equal(live.home_team, 'France');
});

test('pickNextFromMatches: earliest by date among upcoming', () => {
  const next = pickNextFromMatches(SAMPLE.filter(m => m.state === 'pre'));
  assert.equal(next.home_team, 'Spain'); // 16:00 is earlier than 19:00
});

test('pickLastFromMatches: most recent finished match', () => {
  const pool = filterByGroup(SAMPLE, { only_my_group: true, exclude_my_team: true, my_team: 'France' });
  const last = pickLastFromMatches(pool);
  // Only finished Group-F match without France is Turkey-Belgium (10 Jun).
  assert.equal(last.home_team, 'Turkey');
  assert.equal(last.away_team, 'Belgium');
});

test('pickLastFromMatches / pickNextFromMatches: empty pools return null', () => {
  assert.equal(pickLastFromMatches([]), null);
  assert.equal(pickNextFromMatches([]), null);
  assert.equal(pickLastFromMatches(null), null);
});
