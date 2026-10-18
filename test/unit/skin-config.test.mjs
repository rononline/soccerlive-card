import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  resolveAppearance,
  resolvePalette,
  paletteUsesCustomColors,
  mergeCardDefaults,
  resolveCompact,
  buildMigratedConfig,
  nextRadioIndex,
  sanitizeFontFamily,
  clampCardScale,
  APPEARANCES,
  PALETTES,
} from '../../src/skin-config.js';

test('buildMigratedConfig: seeds both axes from effective, applies pick, drops skin', () => {
  // Legacy skin:red-white -> effective dark + red-white. Picking appearance=light.
  const next = buildMigratedConfig({ skin: 'red-white', entity: 'sensor.x' }, 'dark', 'red-white', { appearance: 'light' });
  assert.equal(next.appearance, 'light');   // the pick
  assert.equal(next.palette, 'red-white');  // seeded from effective
  assert.equal(next.skin, undefined);       // legacy skin removed
  assert.equal(next.entity, 'sensor.x');    // other keys kept
  // Picking a palette keeps the effective appearance.
  const next2 = buildMigratedConfig({ skin: 'red-white' }, 'dark', 'red-white', { palette: 'blue' });
  assert.equal(next2.appearance, 'dark');
  assert.equal(next2.palette, 'blue');
});

test('nextRadioIndex: wraps forward/back, ignores non-arrow keys', () => {
  assert.equal(nextRadioIndex(0, 3, 'ArrowRight'), 1);
  assert.equal(nextRadioIndex(2, 3, 'ArrowRight'), 0);   // wrap
  assert.equal(nextRadioIndex(0, 3, 'ArrowLeft'), 2);    // wrap back
  assert.equal(nextRadioIndex(1, 3, 'ArrowUp'), 0);
  assert.equal(nextRadioIndex(1, 3, 'Enter'), 1);        // unchanged
  assert.equal(nextRadioIndex(-1, 3, 'ArrowRight'), -1); // no focused button
  assert.equal(nextRadioIndex(1, 4, 'Home'), 0);         // Home -> first
  assert.equal(nextRadioIndex(1, 4, 'End'), 3);          // End -> last
});

test('resolveCompact: card value wins, else inherits shared', () => {
  assert.equal(resolveCompact({ compact: true }, { compact: false }), true);
  assert.equal(resolveCompact({ compact: false }, { compact: true }), false);   // explicit off overrides shared on
  assert.equal(resolveCompact({}, { compact: true }), true);                    // inherit shared on
  assert.equal(resolveCompact({}, { compact: false }), false);
  assert.equal(resolveCompact({}, null), false);                                // nothing -> off
});

test('mergeCardDefaults: inherits per field, not all-or-nothing', () => {
  const shared = { appearance: 'dark', palette: 'red-white' };
  // Card sets only appearance -> still inherits the shared palette.
  const m = mergeCardDefaults({ appearance: 'light' }, shared);
  assert.equal(m.appearance, 'light');
  assert.equal(m.palette, 'red-white');
  assert.equal(resolvePalette(m), 'red-white');
  // Card sets only palette -> still inherits the shared appearance.
  const m2 = mergeCardDefaults({ palette: 'blue' }, shared);
  assert.equal(m2.appearance, 'dark');
  assert.equal(m2.palette, 'blue');
});

test('mergeCardDefaults: typography and size inherit from shared, card wins', () => {
  const shared = { font_family: 'Inter, sans-serif', card_scale: '1.1' };
  // Nothing set on the card -> inherits both.
  const m = mergeCardDefaults({}, shared);
  assert.equal(m.font_family, 'Inter, sans-serif');
  assert.equal(m.card_scale, '1.1');
  // The card's own values win.
  const m2 = mergeCardDefaults({ font_family: 'Roboto, sans-serif', card_scale: '0.9' }, shared);
  assert.equal(m2.font_family, 'Roboto, sans-serif');
  assert.equal(m2.card_scale, '0.9');
  // They inherit independently of a legacy skin (unlike appearance/palette).
  const m3 = mergeCardDefaults({ skin: 'blue' }, shared);
  assert.equal(m3.font_family, 'Inter, sans-serif');
  assert.equal(m3.card_scale, '1.1');
});

test('sanitizeFontFamily: keeps a valid stack, rejects anything injectable', () => {
  assert.equal(sanitizeFontFamily('"Segoe UI", system-ui, sans-serif'), '"Segoe UI", system-ui, sans-serif');
  assert.equal(sanitizeFontFamily('  Roboto  '), 'Roboto');
  // Disallowed characters (CSS injection) -> rejected entirely.
  assert.equal(sanitizeFontFamily('red; } body { display:none'), '');
  assert.equal(sanitizeFontFamily('url(evil.css)'), '');
  assert.equal(sanitizeFontFamily(''), '');
  assert.equal(sanitizeFontFamily(42), '');
});

test('clampCardScale: clamps to 0.5–2.0, null when unset or invalid', () => {
  assert.equal(clampCardScale('1.1'), 1.1);
  assert.equal(clampCardScale(1.25), 1.25);
  assert.equal(clampCardScale('5'), 2);      // clamped up to max
  assert.equal(clampCardScale('0.1'), 0.5);  // clamped up to min
  assert.equal(clampCardScale(''), null);
  assert.equal(clampCardScale(undefined), null);
  assert.equal(clampCardScale('abc'), null);
  assert.equal(clampCardScale(0), null);
});

test('mergeCardDefaults: card values and legacy skin win over shared', () => {
  const shared = { appearance: 'dark', palette: 'red-white' };
  // A legacy skin sets both axes -> opts out of both shared values.
  const m = mergeCardDefaults({ skin: 'blue' }, shared);
  assert.equal(m.appearance, undefined);
  assert.equal(m.palette, undefined);
  assert.equal(resolvePalette(m), 'blue');
  // Nothing set -> inherits both.
  const m2 = mergeCardDefaults({}, shared);
  assert.equal(m2.appearance, 'dark');
  assert.equal(m2.palette, 'red-white');
  // No shared defaults -> config unchanged.
  assert.deepEqual(mergeCardDefaults({ palette: 'gold' }, null), { palette: 'gold' });
});

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

test('light defaults to blue, dark to purple', () => {
  // legacy skin:light preserved its blue accent; a bare appearance:light matches
  assert.equal(resolvePalette({ skin: 'light' }), 'blue');
  assert.equal(resolvePalette({ appearance: 'light' }), 'blue');
  assert.equal(resolvePalette({ appearance: 'dark' }), 'purple');
  assert.equal(resolvePalette({}), 'purple');
});

test('legacy skin maps to appearance + palette', () => {
  assert.equal(resolveAppearance({ skin: 'light' }), 'light');
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
