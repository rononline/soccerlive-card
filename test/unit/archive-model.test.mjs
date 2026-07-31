import test from 'node:test';
import assert from 'node:assert/strict';
import {
  archiveMatchesFromState,
  archiveModel,
  archiveResult,
  historicalH2H,
} from '../../src/cards/shared-archive-model.js';

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

test('filters by venue, result and opponent and compares seasons', () => {
  const model = archiveModel(matches, 'Feyenoord', '', '', {
    location: 'home',
    result: 'w',
    opponent: 'a',
  });
  assert.equal(model.matches.length, 1);
  assert.equal(model.matches[0].away_team, 'A');
  assert.equal(model.monthly.length, 1);
  assert.equal(model.seasonComparison.length, 2);
  assert.equal(model.homeAway.find(item => item.location === 'home').matches, 1);
  assert.equal(model.commonOpponents[0].matches, 1);
  assert.equal(model.biggestWin.result.opponent, 'A');
});

test('normalizes Dutch external archives for historical H2H', () => {
  const external = archiveMatchesFromState({
    attributes: {
      uitslagen: [
        { datum: '01-05-1921', thuis: 'Feyenoord', uit: 'Sparta', uitslag: '2-1' },
        { datum: '02-05-1921', thuis: 'Ajax', uit: 'Sparta', uitslag: '1-0' },
      ],
    },
  });
  const h2h = historicalH2H(external, 'Sparta Rotterdam', 'Feyenoord Rotterdam');
  assert.equal(h2h.length, 1);
  assert.equal(h2h[0].date_iso, '1921-05-01');
  assert.equal(h2h[0].home_score, 2);
});
