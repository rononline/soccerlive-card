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

test('timeline text shows substitution direction (in ▲ / out ▼)', () => {
  const t = key => key;
  // Providers set player=out, assist=in.
  assert.equal(
    timelineEventText({ type: 'subst', type_text: 'Substitution', player: 'Terho', assist: 'van Cruijsen', athletes: ['Terho', 'van Cruijsen'] }, t),
    '▲ van Cruijsen ▼ Terho',
  );
  // Falls back to the athletes pair [out, in] when player/assist are absent.
  assert.equal(
    timelineEventText({ type: 'subst', type_text: 'Substitution', athletes: ['out', 'in'] }, t),
    '▲ in ▼ out',
  );
});

test('timeline text marks penalties and own goals, but not normal goals', () => {
  const t = key => `t:${key}`;
  assert.equal(
    timelineEventText({ type: 'goal', type_text: 'Penalty', scoring_play: true, athletes: ['Ueda'] }, t),
    'Ueda (t:event.penalty)',
  );
  assert.equal(
    timelineEventText({ type: 'goal', type_text: 'Own Goal', scoring_play: true, athletes: ['Defender'] }, t),
    'Defender (t:event.own_goal)',
  );
  assert.equal(
    timelineEventText({ type: 'goal', type_text: 'Goal', athletes: ['Valente', 'Zechiel'] }, t),
    'Valente, Zechiel',
  );
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
