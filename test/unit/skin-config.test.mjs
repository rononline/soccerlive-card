import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveAppearance,
  resolvePalette,
  paletteUsesCustomColors,
  APPEARANCES,
  PALETTES,
} from '../../src/skin-config.js';

test('new fields win and are validated', () => {
  assert.equal(resolveAppearance({ appearance: 'light' }), 'light');
  assert.equal(resolvePalette({ palette: 'red-white' }), 'red-white');
  // invalid values fall back to defaults
  assert.equal(resolveAppearance({ appearance: 'nope' }), 'dark');
  assert.equal(resolvePalette({ palette: 'nope' }), 'purple');
});

test('defaults when nothing is set', () => {
  assert.equal(resolveAppearance({}), 'dark');
  assert.equal(resolvePalette({}), 'purple');
  assert.equal(resolveAppearance(null), 'dark');
  assert.equal(resolvePalette(undefined), 'purple');
});

test('legacy skin maps to appearance + palette', () => {
  assert.equal(resolveAppearance({ skin: 'light' }), 'light');
  assert.equal(resolvePalette({ skin: 'light' }), 'purple');
  assert.equal(resolveAppearance({ skin: 'red-white' }), 'dark');
  assert.equal(resolvePalette({ skin: 'red-white' }), 'red-white');
  // auto -> team palette (Auto renamed to Team colours)
  assert.equal(resolvePalette({ skin: 'auto' }), 'team');
  assert.equal(resolvePalette({ skin: 'custom' }), 'custom');
});

test('club-name aliases still resolve', () => {
  assert.equal(resolvePalette({ skin: 'feyenoord' }), 'red-white');
  assert.equal(resolvePalette({ skin: 'Barcelona' }), 'blue-red');
  assert.equal(resolveAppearance({ skin: 'arsenal' }), 'dark');
});

test('new fields override the legacy skin (enables new combinations)', () => {
  // light + red-white was impossible with the single skin field
  const cfg = { skin: 'red-white', appearance: 'light' };
  assert.equal(resolveAppearance(cfg), 'light');
  assert.equal(resolvePalette(cfg), 'red-white');
});

test('paletteUsesCustomColors: only team and custom', () => {
  assert.equal(paletteUsesCustomColors('team'), true);
  assert.equal(paletteUsesCustomColors('custom'), true);
  assert.equal(paletteUsesCustomColors('red-white'), false);
  assert.equal(paletteUsesCustomColors('purple'), false);
});

test('option sets stay in sync with the axes', () => {
  assert.ok(APPEARANCES.includes('ha'));
  assert.ok(PALETTES.includes('team'));
  assert.ok(PALETTES.includes('custom'));
});
