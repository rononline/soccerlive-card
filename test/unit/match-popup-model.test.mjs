import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kickoffMinutes, kickoffDurationParts, formResults, prematchContext, reviewContext, predictionOutcome, derivedMatchStory, matchNarrative, momentumPoints } from '../../src/cards/shared-match-popup-model.js';

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

test('prematchContext consumes schema-v10 analysis factors', () => {
  const context = prematchContext({ preview_analysis: { factors: [
    { code: 'form', home: ['W', 'D'], away: ['L', 'W'] },
    { code: 'standings', home: 2, away: 9 },
    { code: 'absences', home: 1, away: 3 },
    { code: 'player_to_watch', value: 'A. Player' },
  ] } });
  assert.deepEqual(context.homeForm, ['W', 'D']);
  assert.deepEqual(context.standings, { home: 2, away: 9 });
  assert.deepEqual(context.absences, { code: 'absences', home: 1, away: 3 });
  assert.equal(context.featured, 'A. Player');
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

test('reviewContext uses the schema-v8 structured summary as fallback', () => {
  const review = reviewContext({
    match_summary: {
      goal_scorers: ['A. Player'],
      home_xg: 1.7,
      away_xg: 0.8,
      player_of_the_match: { name: 'A. Player' },
    },
  });
  assert.equal(review.present, true);
  assert.equal(review.scorers[0].player, 'A. Player');
  assert.deepEqual(review.expectedGoals, { home: 1.7, away: 0.8 });
});

test('reviewContext and story consume schema-v10 post-match analysis', () => {
  const match = { post_match_analysis: {
    home_xg: 1.8,
    away_xg: 0.7,
    player_of_the_match: { name: 'A. Player' },
    milestones: [
      { code: 'opening_goal', minute: 11, player: 'A. Player' },
      { code: 'goal', minute: 81, player: 'B. Player' },
    ],
    turning_point: { code: 'decisive_goal', minute: 81, player: 'B. Player' },
  } };
  const review = reviewContext(match);
  assert.deepEqual(review.expectedGoals, { home: 1.8, away: 0.7 });
  assert.equal(review.turningPoint.player, 'B. Player');
  assert.deepEqual(derivedMatchStory(match).map(item => item.type), ['opening_goal', 'decisive_goal']);
});

test('momentumPoints falls back to event-pressure analysis', () => {
  assert.deepEqual(momentumPoints({ momentum_analysis: { points: [
    { minute: 10, home: 3, away: 1, net: 2 },
  ] } }), [{ minute: 10, home: 3, away: 1, value: 2 }]);
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

test('derivedMatchStory corrects reverse provider order and omits a decider in a draw', () => {
  const story = derivedMatchStory({
    home_team: 'Feyenoord', away_team: 'Atalanta', home_score: 1, away_score: 1,
    match_story: [
      { minute: 11, type: 'decisive_goal', player: 'Ayase Ueda' },
      { minute: 45, type: 'opening_goal', player: 'Nikola Krstovic' },
    ],
    key_events: [
      { minute: 45, scoring_play: true, team: 'Atalanta', player: 'Nikola Krstovic', home_score: 1, away_score: 1 },
      { minute: 11, scoring_play: true, team: 'Feyenoord', player: 'Ayase Ueda', home_score: 1, away_score: 0 },
    ],
  });
  assert.deepEqual(story.map(item => [item.minute, item.type, item.player]), [
    [11, 'opening_goal', 'Ayase Ueda'],
    [45, 'equalizer', 'Nikola Krstovic'],
  ]);
});

test('derivedMatchStory marks the first permanent lead as the decisive goal', () => {
  const story = derivedMatchStory({
    home_team: 'A', away_team: 'B', home_score: 3, away_score: 1,
    key_events: [
      { minute: 10, scoring_play: true, team: 'A', player: 'One', home_score: 1, away_score: 0 },
      { minute: 20, scoring_play: true, team: 'B', player: 'Equal', home_score: 1, away_score: 1 },
      { minute: 30, scoring_play: true, team: 'A', player: 'Winner', home_score: 2, away_score: 1 },
      { minute: 70, scoring_play: true, team: 'A', player: 'Insurance', home_score: 3, away_score: 1 },
    ],
  });
  assert.equal(story.find(item => item.type === 'decisive_goal').player, 'Winner');
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

test('matchNarrative summarizes score, comeback and dominant statistics', () => {
  const narrative = matchNarrative({
    state: 'post',
    home_team: 'Feyenoord',
    away_team: 'Sparta',
    home_score: 3,
    away_score: 1,
    key_events: [
      { scoring_play: true, home_score: 0, away_score: 1 },
      { scoring_play: true, home_score: 1, away_score: 1 },
    ],
    expected_goals: { home: 2.7, away: 0.8 },
    home_statistics: { shots: 18 },
    away_statistics: { shots: 7 },
  });
  assert.deepEqual(narrative.map(item => item.key), [
    'story.final_result',
    'story.comeback',
    'story.xg_dominance',
  ]);
});
