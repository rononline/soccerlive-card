import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  isPrematchState,
  splitLineup,
  timelineEventKind,
  timelineEventText,
  visibleTimelineEvents,
} from '../../src/cards/shared-match-sections.js';

test('isPrematchState: only pre-match (or unknown) shows the expected lineup', () => {
  assert.equal(isPrematchState('pre'), true);
  assert.equal(isPrematchState(undefined), true); // unknown -> treat as pre-match
  assert.equal(isPrematchState(''), true);
  assert.equal(isPrematchState('in'), false);     // live -> hide expected lineup
  assert.equal(isPrematchState('post'), false);   // finished -> hide expected lineup
});

test('timeline section classifies provider-neutral event variants', () => {
  assert.equal(timelineEventKind({ type: 'Goal' }), 'goal');
  assert.equal(timelineEventKind({ type_text: 'Yellow Card' }), 'yellow');
  assert.equal(timelineEventKind({ type_text: 'Red Card' }), 'red');
  assert.equal(timelineEventKind({ type: 'substitution' }), 'sub');
  assert.equal(timelineEventKind({ type_text: 'Corner' }), 'meta');
});

test('timeline section filters technical events and keeps useful unknown events', () => {
  const events = visibleTimelineEvents({ key_events: [
    { type_text: 'Video Review' },
    { type_text: 'Cooling Break' },
    { type_text: 'Corner' },
  ] });
  assert.deepEqual(events, [{ type_text: 'Corner' }]);
});

test('timeline text prefers athletes and otherwise translates known event text', () => {
  const translate = key => `translated:${key}`;
  assert.equal(timelineEventText({ athletes: ['A', 'B'] }, translate), 'A, B');
  assert.equal(timelineEventText({ type_text: 'Halftime' }, translate), 'translated:status.halftime');
  assert.equal(timelineEventText({ type_text: 'Corner' }, translate), 'Corner');
});

test('lineup splitting handles starter flags and provider lists without flags', () => {
  const flagged = [{ name: 'Starter', starter: true }, { name: 'Sub', starter: false }];
  assert.deepEqual(splitLineup(flagged), {
    starters: [flagged[0]], substitutes: [flagged[1]],
  });
  assert.deepEqual(splitLineup(flagged, true), {
    starters: [flagged[0]], substitutes: [],
  });
  const plain = [{ name: 'Player' }];
  assert.deepEqual(splitLineup(plain), { starters: plain, substitutes: [] });
  assert.deepEqual(splitLineup(null), { starters: [], substitutes: [] });
});
