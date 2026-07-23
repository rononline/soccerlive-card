import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kickoffMinutes, kickoffDurationParts, formResults, prematchContext, reviewContext, predictionOutcome, derivedMatchStory } from '../../src/cards/shared-match-popup-model.js';

test('kickoffMinutes uses ISO time and remains null without a valid date', () => {
  const now = new Date('2026-07-23T12:00:00Z').getTime();
  assert.equal(kickoffMinutes({ date_iso: '2026-07-23T13:30:00Z' }, now), 90);
  assert.equal(kickoffMinutes({}, now), null);
});

test('kickoffDurationParts presents a compact human duration', () => {
  assert.deepEqual(kickoffDurationParts(4238), [
    { unit: 'day', value: 2 },
    { unit: 'hour', value: 22 },
  ]);
  assert.deepEqual(kickoffDurationParts(95), [
    { unit: 'hour', value: 1 },
    { unit: 'minute', value: 35 },
  ]);
  assert.deepEqual(kickoffDurationParts(8), [{ unit: 'minute', value: 8 }]);
  assert.deepEqual(kickoffDurationParts(0), []);
});

test('prematchContext normalizes form, standings and h2h capability', () => {
  const context = prematchContext({
    preview: { home_form: 'WWDLW', away_form: ['L', 'W', 'D'], h2h_count: 4 },
    home_rank: 2, league_name: 'Eredivisie', week_number: 3,
  });
  assert.deepEqual(context.homeForm, ['W', 'W', 'D', 'L', 'W']);
  assert.deepEqual(context.awayForm, ['L', 'W', 'D']);
  assert.equal(context.hasStandings, true);
  assert.equal(context.h2hCount, 4);
  assert.equal(context.round, 3);
});

test('reviewContext stays hidden without content and maps provider review', () => {
  assert.equal(reviewContext({}).present, false);
  const review = reviewContext({ review: {
    scorers: [{ player: 'A', minute: 12 }],
    player_of_the_match: { name: 'A' },
    expected_goals: { home: 1.2, away: 0.8 },
  } });
  assert.equal(review.present, true);
  assert.equal(review.playerOfMatch.name, 'A');
  assert.equal(review.scorers.length, 1);
});

test('predictionOutcome compares the forecast with the final result', () => {
  const result = predictionOutcome({
    state: 'post', home_team: 'Feyenoord', away_team: 'Rayo', home_score: 3, away_score: 1,
    prediction: { percent_home: 62, percent_draw: 24, percent_away: 14 },
    review: { expected_goals: { home: 1.8, away: 0.7 } },
  });
  assert.equal(result.correct, true);
  assert.equal(result.predicted, 'home');
  assert.equal(result.predictedPercent, 62);
  assert.deepEqual(result.xg, { home: 1.8, away: 0.7 });
  assert.equal(predictionOutcome({ state: 'pre' }), null);
});

test('predictionOutcome does not invent a favourite when the top percentages are tied', () => {
  assert.equal(predictionOutcome({
    state: 'post', home_team: 'A', away_team: 'B', home_score: 1, away_score: 1,
    prediction: { percent_home: 40, percent_draw: 20, percent_away: 40 },
  }), null);
});

test('derivedMatchStory creates milestones from provider-neutral events', () => {
  const story = derivedMatchStory({
    home_team: 'Feyenoord', away_team: 'Rayo', home_score: 2, away_score: 1,
    key_events: [
      { minute: 12, scoring_play: true, team: 'Feyenoord', player: 'A', home_score: 1, away_score: 0 },
      { minute: 40, scoring_play: true, team: 'Rayo', player: 'B', home_score: 1, away_score: 1 },
      { minute: 78, scoring_play: true, team: 'Feyenoord', player: 'C', home_score: 2, away_score: 1 },
    ],
  });
  assert.deepEqual(story.map(item => item.type), ['opening_goal', 'equalizer', 'decisive_goal']);
});

test('derivedMatchStory excludes cancelled and missed goals', () => {
  const story = derivedMatchStory({
    home_team: 'A', away_team: 'B', home_score: 1, away_score: 0,
    key_events: [
      { minute: 10, type: 'Goal', type_text: 'Goal cancelled', team: 'A', player: 'No goal' },
      { minute: 20, type: 'Goal', type_text: 'Penalty - Missed', team: 'B', player: 'Missed' },
      { minute: 30, scoring_play: true, type: 'Goal', team: 'A', player: 'Winner' },
    ],
  });
  assert.deepEqual(story.map(item => item.player), ['Winner']);
});
