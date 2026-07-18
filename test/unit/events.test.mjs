import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyEvent, isGoalEvent } from '../../src/cards/shared-event-i18n.js';

test('classifyEvent: known types get their badge', () => {
  assert.equal(classifyEvent({ type: 'Goal', athletes: ['A'] }).btype, 'goal');
  assert.equal(classifyEvent({ type_text: 'Yellow Card', athletes: ['B'] }).btype, 'yellow');
  assert.equal(classifyEvent({ type_text: 'Red Card', athletes: ['C'] }).btype, 'red');
  assert.equal(classifyEvent({ type: 'substitution', athletes: ['D', 'E'] }).btype, 'sub');
});

test('classifyEvent: SKIP types are dropped', () => {
  assert.equal(classifyEvent({ type_text: 'Cooling Break' }), null);
  assert.equal(classifyEvent({ type_text: 'Video Review' }), null);
});

test('classifyEvent: empty/unknown with no text is skipped (no blank row)', () => {
  assert.equal(classifyEvent({ type: 'WeirdThing' }), null);       // no athletes, no i18n, but has fallbackText 'WeirdThing'? type_text empty
  assert.equal(classifyEvent({}), null);
  assert.equal(classifyEvent(null), null);
});

test('classifyEvent: unrecognised but with text is shown neutrally (meta, known=false)', () => {
  const c = classifyEvent({ type_text: 'Corner', athletes: [] });
  assert.equal(c.btype, 'meta');
  assert.equal(c.known, false);
  assert.equal(c.fallbackText, 'Corner');
});

test('classifyEvent: an odd substitution with one athlete still renders neutrally', () => {
  // The Feyenoord case: a substitution with an implausible single name.
  const c = classifyEvent({ type: 'substitution', athletes: ['S. van Persie'] });
  assert.equal(c.btype, 'sub');
  assert.deepEqual(c.athletes, ['S. van Persie']);
});

test('isGoalEvent: excludes missed/disallowed', () => {
  assert.equal(isGoalEvent({ type: 'Goal' }), true);
  assert.equal(isGoalEvent({ type: 'Goal', type_text: 'Goal Disallowed' }), false);
  assert.equal(isGoalEvent({ type_text: 'Penalty - Missed' }), false);
});
