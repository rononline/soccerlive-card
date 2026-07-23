import test from 'node:test';
import assert from 'node:assert/strict';
import { isFinishedMatch, sortMatchesByStateAndDate } from '../../src/cards/shared-match-order.js';

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
