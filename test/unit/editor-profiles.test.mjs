import test from 'node:test';
import assert from 'node:assert/strict';
import { applyEditorProfile, EDITOR_PROFILES } from '../../src/cards/editor-profiles.js';

test('editor profiles cover the six supported usage modes', () => {
  assert.deepEqual(Object.keys(EDITOR_PROFILES), ['basic', 'matchday', 'live', 'analysis', 'club', 'compact']);
  assert.equal(EDITOR_PROFILES.matchday.card_type, 'matchday');
  assert.equal(EDITOR_PROFILES.live.card_type, 'match-center');
  assert.equal(EDITOR_PROFILES.live.phase_aware, true);
});

test('profile keeps source and appearance but removes old card-only fields', () => {
  const next = applyEditorProfile({
    type: 'custom:soccer-live-card',
    entity: 'sensor.team',
    appearance: 'dark',
    palette: 'team',
    max_rows: 99,
  }, 'compact');
  assert.equal(next.entity, 'sensor.team');
  assert.equal(next.palette, 'team');
  assert.equal(next.card_type, 'countdown');
  assert.equal(next.compact, true);
  assert.equal(next.max_rows, undefined);
});
