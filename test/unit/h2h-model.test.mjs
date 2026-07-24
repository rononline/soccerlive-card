import { test } from 'node:test';
import assert from 'node:assert/strict';
import { h2hResult } from '../../src/cards/shared-h2h-model.js';

test('H2H result uses the tracked team instead of the selected fixture home team', () => {
  const match = {
    home_id: 456,
    home_team: 'Cambuur',
    away_id: 209,
    away_team: 'Feyenoord',
    home_score: 1,
    away_score: 4,
  };
  assert.equal(h2hResult(match, { id: 209, name: 'Feyenoord' }).scoreClass, 'our-win');
  assert.equal(h2hResult(match, { id: 456, name: 'Cambuur' }).scoreClass, 'our-loss');
});

test('H2H result falls back to a normalized tracked team name', () => {
  const match = {
    home_team: 'Feyenoord Rotterdam',
    away_team: 'Cambuur',
    home_score: 3,
    away_score: 1,
  };
  assert.equal(h2hResult(match, { name: 'Feyenoord' }).scoreClass, 'our-win');
});

test('H2H result is neutral without a reliable tracked team', () => {
  const match = { home_team: 'A', away_team: 'B', home_score: 0, away_score: 2 };
  assert.equal(h2hResult(match).scoreClass, 'neutral');
  assert.equal(h2hResult({ ...match, home_score: 1, away_score: 1 }).scoreClass, 'draw');
});
