import test from 'node:test';
import assert from 'node:assert/strict';
import {
  raceModel,
  virtualStandingsImpact,
} from '../../src/cards/shared-race-model.js';

const standings = {
  standings_groups: [{
    name: 'Eredivisie',
    standings: [
      { rank: 1, team_name: 'Ajax', points: 10, games_played: 4, goal_difference: 6 },
      { rank: 2, team_name: 'Feyenoord', points: 8, games_played: 4, goal_difference: 4 },
      { rank: 3, team_name: 'Sparta Rotterdam', points: 7, games_played: 4, goal_difference: 1 },
    ],
  }],
  standings_history: [
    { captured_at: '2026-08-01', groups: [{ standings: [{ rank: 3, team_name: 'Feyenoord', points: 3 }] }] },
    { captured_at: '2026-08-08', groups: [{ standings: [{ rank: 2, team_name: 'Feyenoord', points: 8 }] }] },
  ],
};

test('builds race gaps, maximum points and trajectory', () => {
  const model = raceModel(standings, 'Feyenoord');
  assert.equal(model.tracked.gapLeader, 2);
  assert.equal(model.tracked.maximum, 8);
  assert.deepEqual(model.trajectory.map(item => item.rank), [3, 2]);
});

test('calculates virtual table impact from a live score', () => {
  const impact = virtualStandingsImpact(standings, {
    state: 'in',
    home_team: 'Sparta',
    away_team: 'Feyenoord',
    home_score: 0,
    away_score: 2,
  }, 'Feyenoord');
  assert.equal(impact.points, 11);
  assert.equal(impact.rank, 1);
  assert.equal(impact.change, 1);
});

test('does not add points again after the standings have been updated', () => {
  const impact = virtualStandingsImpact(standings, {
    state: 'post',
    home_team: 'Sparta',
    away_team: 'Feyenoord',
    home_score: 0,
    away_score: 2,
  }, 'Feyenoord');
  assert.equal(impact, null);
});
