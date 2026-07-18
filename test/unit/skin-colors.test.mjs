import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeCssColor,
  hexToRgbTriplet,
  isUsableAccent,
  colorDistance,
  lighten,
  getAutoColors,
} from '../../src/skin-colors.js';

test('normalizeCssColor: expands #rgb, lowercases, accepts bare hex and rgba', () => {
  assert.equal(normalizeCssColor('#ABC'), '#aabbcc');
  assert.equal(normalizeCssColor('E50000'), '#e50000');
  assert.equal(normalizeCssColor('#E50000'), '#e50000');
  assert.equal(normalizeCssColor('rgba(1,2,3,0.5)'), 'rgba(1,2,3,0.5)');
  assert.equal(normalizeCssColor('red'), null);
  assert.equal(normalizeCssColor(123), null);
});

test('hexToRgbTriplet: hex to "r,g,b", null otherwise', () => {
  assert.equal(hexToRgbTriplet('#e50000'), '229,0,0');
  assert.equal(hexToRgbTriplet('rgba(1,2,3,1)'), null);
});

test('isUsableAccent: rejects near-black and near-white', () => {
  assert.equal(isUsableAccent('#000000'), false);
  assert.equal(isUsableAccent('#ffffff'), false);
  assert.equal(isUsableAccent('#e50000'), true);   // red
  assert.equal(isUsableAccent('#2563eb'), true);   // blue
  assert.equal(isUsableAccent(null), false);
});

test('colorDistance: 0 for identical, large for opposite', () => {
  assert.equal(colorDistance('#000000', '#000000'), 0);
  assert.ok(colorDistance('#000000', '#ffffff') > 400);
});

test('lighten: moves toward white', () => {
  assert.equal(lighten('#000000', 0.5), '#808080');
  assert.equal(lighten('#e50000', 0), '#e50000');
});

test('getAutoColors: picks the first two readable, distinct team colours', () => {
  const { accent_color, accent_2_color } = getAutoColors({
    team_colors: ['#e50000', '#3b82f6'],
  });
  assert.equal(accent_color, '#e50000');
  assert.equal(accent_2_color, '#3b82f6');
});

test('getAutoColors: skips near-black/near-white kit colours', () => {
  // All-white/black kit -> no usable accent -> keep skin defaults ({}).
  assert.deepEqual(getAutoColors({ team_colors: ['#ffffff', '#000000'] }), {});
  // Black primary, red secondary -> red wins.
  assert.equal(getAutoColors({ team_colors: ['#000000', '#e50000'] }).accent_color, '#e50000');
});

test('getAutoColors: derives a second accent when kit colours are near-identical', () => {
  const res = getAutoColors({ team_colors: ['#2563eb', '#2764ec'] });
  assert.equal(res.accent_color, '#2563eb');
  // Too close -> derived lighter variant, not the near-duplicate.
  assert.notEqual(res.accent_2_color, '#2764ec');
  assert.ok(colorDistance(res.accent_color, res.accent_2_color) > 30);
});

test('getAutoColors: no colours -> empty (skin defaults kept)', () => {
  assert.deepEqual(getAutoColors({}), {});
});
