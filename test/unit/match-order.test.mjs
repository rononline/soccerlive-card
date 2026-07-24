import test from 'node:test';
import assert from 'node:assert/strict';
import { isFinishedMatch, matchIdentity, matchTimestamp, sortMatchesByStateAndDate } from '../../src/cards/shared-match-order.js';

test('isFinishedMatch prefers provider-neutral state and supports legacy statuses', () => {
  assert.equal(isFinishedMatch({ state: 'post', status: 'Einde wedstrijd' }), true);
  assert.equal(isFinishedMatch({ state: 'pre', status: 'Full Time' }), false);
  assert.equal(isFinishedMatch({ status: 'Final' }), true);
  assert.equal(isFinishedMatch({ status: 'Scheduled' }), false);
});

test('sortMatchesByStateAndDate orders each phase chronologically', () => {
  const sorted = sortMatchesByStateAndDate([
    { event_id: 'old-result', state: 'post', date: '10-05-2026 14:00' },
    { event_id: 'later', state: 'pre', date: '02-08-2026 14:00' },
    { event_id: 'new-result', state: 'post', date: '17-05-2026 14:00' },
    { event_id: 'live', state: 'in', date: '23-07-2026 14:00' },
    { event_id: 'sooner', state: 'pre', date: '26-07-2026 14:00' },
  ]);
  assert.deepEqual(sorted.map(match => match.event_id), [
    'live', 'sooner', 'later', 'new-result', 'old-result',
  ]);
});

test('matchTimestamp prefers date_iso and falls back to localized date', () => {
  assert.equal(matchTimestamp({
    date_iso: '2026-07-26T12:00:00Z',
    date: '27-07-2026 14:00',
  }), Date.parse('2026-07-26T12:00:00Z'));
  assert.equal(matchTimestamp({ date: '26-07-2026 14:00' }), new Date(2026, 6, 26, 14, 0).getTime());
  assert.equal(matchTimestamp({ date: 'TBD' }), null);
});

test('sortMatchesByStateAndDate keeps TBD matches behind dated matches', () => {
  const sorted = sortMatchesByStateAndDate([
    { event_id: 'tbd-upcoming', state: 'pre', date: 'TBD' },
    { event_id: 'dated-upcoming', state: 'pre', date_iso: '2026-07-26T12:00:00Z' },
    { event_id: 'tbd-result', state: 'post' },
    { event_id: 'dated-result', state: 'post', date_iso: '2026-07-20T12:00:00Z' },
  ]);
  assert.deepEqual(sorted.map(match => match.event_id), [
    'dated-upcoming', 'tbd-upcoming', 'dated-result', 'tbd-result',
  ]);
});

test('matchIdentity distinguishes ISO-only fixtures and prefers event ids', () => {
  assert.equal(
    matchIdentity({ event_id: 42, date_iso: '2026-08-01T12:00:00Z' }),
    'event:42',
  );
  assert.notEqual(
    matchIdentity({ date_iso: '2026-08-01T12:00:00Z', home_team: 'A', away_team: 'B' }),
    matchIdentity({ date_iso: '2026-08-08T12:00:00Z', home_team: 'A', away_team: 'C' }),
  );
});
