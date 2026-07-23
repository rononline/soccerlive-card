import { test } from 'node:test';
import assert from 'node:assert/strict';
import { kickoffMinutes, formResults, prematchContext, reviewContext } from '../../src/cards/shared-match-popup-model.js';

test('kickoffMinutes uses ISO time and remains null without a valid date', () => {
  const now = new Date('2026-07-23T12:00:00Z').getTime();
  assert.equal(kickoffMinutes({ date_iso: '2026-07-23T13:30:00Z' }, now), 90);
  assert.equal(kickoffMinutes({}, now), null);
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
