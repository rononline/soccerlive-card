import { test } from 'node:test';
import assert from 'node:assert/strict';
import { standingText } from '../../src/cards/shared-standing.js';

const t = k => ({ 'team.pts': 'pts' }[k] || k);

test('standingText: structured rank + points', () => {
  assert.equal(standingText({ home_rank: 3, home_points: 45 }, 'home', t), '#3 · 45 pts');
});

test('standingText: rank present, zero points still shown', () => {
  assert.equal(standingText({ away_rank: 18, away_points: 0 }, 'away', t), '#18 · 0 pts');
});

test('standingText: rank without points shows just the rank', () => {
  assert.equal(standingText({ home_rank: 1, home_points: null }, 'home', t), '#1');
  assert.equal(standingText({ home_rank: 1 }, 'home', t), '#1');
});

test('standingText: falls back to the ESPN summary string', () => {
  assert.equal(standingText({ home_standing_summary: '2nd in Dutch Eredivisie' }, 'home', t), '2nd in Dutch Eredivisie');
});

test('structured rank takes precedence over the summary string', () => {
  const m = { home_rank: 5, home_points: 30, home_standing_summary: '2nd in Eredivisie' };
  assert.equal(standingText(m, 'home', t), '#5 · 30 pts');
});

test('standingText: N/A and empty summary -> empty string', () => {
  assert.equal(standingText({ home_standing_summary: 'N/A' }, 'home', t), '');
  assert.equal(standingText({ home_standing_summary: '' }, 'home', t), '');
  assert.equal(standingText({}, 'home', t), '');
  assert.equal(standingText(null, 'home', t), '');
});

test('standingText: uses the translated points label', () => {
  const nl = k => ({ 'team.pts': 'ptn' }[k] || k);
  assert.equal(standingText({ home_rank: 2, home_points: 65 }, 'home', nl), '#2 · 65 ptn');
});
