import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickLastMatch, lastMatchGoals } from '../../src/cards/shared-last-match.js';

test('pickLastMatch: prefers a finished match from the primary (detailed) list', () => {
  const attrs = {
    matches: [
      { state: 'post', home_team: 'Sparta', away_team: 'Feyenoord', date_iso: '2026-08-09T10:15:00Z', key_events: [] },
    ],
    previous_matches: [
      { state: 'post', home_team: 'Old', away_team: 'Match', date: '01-08-2026 18:00' },
    ],
  };
  const m = pickLastMatch(attrs);
  assert.equal(m.home_team, 'Sparta');
  assert.ok('key_events' in m); // the detailed one
});

test('pickLastMatch: falls back to previous_matches, newest first', () => {
  const attrs = {
    matches: [{ state: 'pre', home_team: 'Upcoming' }],
    previous_matches: [
      { state: 'post', home_team: 'Older', date: '01-08-2026 18:00' },
      { state: 'post', home_team: 'Newer', date: '08-08-2026 20:00' },
    ],
  };
  assert.equal(pickLastMatch(attrs).home_team, 'Newer');
});

test('pickLastMatch: null when there is no finished match', () => {
  assert.equal(pickLastMatch({ matches: [{ state: 'pre' }], previous_matches: [] }), null);
  assert.equal(pickLastMatch({}), null);
  assert.equal(pickLastMatch(null), null);
});

test('lastMatchGoals: extracts scorers from key events, empty for compact matches', () => {
  const match = { key_events: [
    { type: 'goal', scoring_play: true, athletes: ['Luciano Valente', 'Gjivai Zechiël'], clock: "35'", team: 'Feyenoord' },
    { type: 'yellow-card', athletes: ['Casper Terho'], clock: "39'" },
    { type: 'substitution', athletes: ['A', 'B'], clock: "57'" },
  ] };
  assert.deepEqual(lastMatchGoals(match), [
    { player: 'Luciano Valente', minute: '35', team: 'Feyenoord' },
  ]);
  assert.deepEqual(lastMatchGoals({}), []);       // compact match, no events
});
