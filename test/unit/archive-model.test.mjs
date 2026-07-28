import test from 'node:test';
import assert from 'node:assert/strict';
import { archiveModel, archiveResult } from '../../src/cards/shared-archive-model.js';

const matches = [
  {
    date_iso: '2026-08-01T12:00:00+00:00',
    home_team: 'Feyenoord', away_team: 'A', home_score: 2, away_score: 0,
    competition_name: 'Eredivisie',
  },
  {
    date_iso: '2027-02-01T12:00:00+00:00',
    home_team: 'B', away_team: 'Feyenoord', home_score: 1, away_score: 1,
    competition_name: 'Eredivisie',
  },
  {
    date_iso: '2025-05-01T12:00:00+00:00',
    home_team: 'Feyenoord', away_team: 'C', home_score: 0, away_score: 1,
    competition_name: 'KNVB Beker',
  },
];

test('calculates archive filters and tracked-team statistics', () => {
  const model = archiveModel(matches, 'Feyenoord', '2026/27', 'Eredivisie');
  assert.equal(model.matches.length, 2);
  assert.deepEqual(model.seasons, ['2026/27', '2024/25']);
  assert.equal(model.stats.won, 1);
  assert.equal(model.stats.drawn, 1);
  assert.equal(model.stats.goals_for, 3);
  assert.equal(model.stats.clean_sheets, 1);
  assert.equal(model.stats.longest_unbeaten, 2);
});

test('returns null when a configured team is not part of a match', () => {
  assert.equal(archiveResult(matches[0], 'Ajax'), null);
});
