import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeCssColor,
  hexToRgbTriplet,
  isUsableAccent,
  colorDistance,
  lighten,
  getAutoColors,
  contrastRatio,
  buildGradient,
  normalizeGradientAngle,
  clampOpacity,
  normalizeWatermarkSize,
  sanitizeWatermarkUrl,
} from '../../src/skin-colors.js';

test('buildGradient: composes a linear-gradient, default 135deg, null on bad input', () => {
  assert.equal(buildGradient('#8e0e00', '#1f1c18'), 'linear-gradient(135deg, #8e0e00, #1f1c18)');
  assert.equal(buildGradient('#8e0e00', '#1f1c18', '90deg'), 'linear-gradient(90deg, #8e0e00, #1f1c18)');
  assert.equal(buildGradient('#8e0e00', 'notacolor'), null);
  assert.equal(buildGradient('', '#1f1c18'), null);
});

test('contrastRatio: 21 for black/white, low for similar, null for non-hex', () => {
  assert.equal(Math.round(contrastRatio('#000000', '#ffffff')), 21);
  assert.ok(contrastRatio('#ffffff', '#f5f5f5') < 1.2);   // near-identical -> ~1
  assert.equal(contrastRatio('#000000', 'rgba(1,2,3,1)'), null);
});

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

test('normalizeGradientAngle: numbers, deg strings clamped, keywords, default', () => {
  assert.equal(normalizeGradientAngle(90), '90deg');
  assert.equal(normalizeGradientAngle('45deg'), '45deg');
  assert.equal(normalizeGradientAngle(999), '360deg');      // clamped
  assert.equal(normalizeGradientAngle(-999), '-360deg');    // clamped
  assert.equal(normalizeGradientAngle('to bottom right'), 'to bottom right');
  assert.equal(normalizeGradientAngle('junk'), '135deg');   // default
  assert.equal(normalizeGradientAngle(undefined), '135deg');
  // Invalid direction combinations must be rejected (not passed through).
  assert.equal(normalizeGradientAngle('to top bottom'), '135deg');
  assert.equal(normalizeGradientAngle('to left right'), '135deg');
  assert.equal(normalizeGradientAngle('to top top'), '135deg');
});

test('clampOpacity: clamps 0..1, null for empty/invalid', () => {
  assert.equal(clampOpacity(0.5), 0.5);
  assert.equal(clampOpacity('0.12'), 0.12);
  assert.equal(clampOpacity(2), 1);
  assert.equal(clampOpacity(-1), 0);
  assert.equal(clampOpacity(''), null);      // empty -> use default, not 0
  assert.equal(clampOpacity('x'), null);
  assert.equal(clampOpacity(undefined), null);
});

test('normalizeWatermarkSize: only safe values', () => {
  assert.equal(normalizeWatermarkSize('80%'), '80%');
  assert.equal(normalizeWatermarkSize('contain'), 'contain');
  assert.equal(normalizeWatermarkSize('120px'), '120px');
  assert.equal(normalizeWatermarkSize('url(x)'), null);
  assert.equal(normalizeWatermarkSize(''), null);
});

test('sanitizeWatermarkUrl: only /local, http(s), data:image', () => {
  assert.equal(sanitizeWatermarkUrl('/local/crest.png'), '/local/crest.png');
  assert.equal(sanitizeWatermarkUrl('https://x/y.png'), 'https://x/y.png');
  assert.equal(sanitizeWatermarkUrl('data:image/svg+xml,<svg/>'), 'data:image/svg+xml,<svg/>');
  assert.equal(sanitizeWatermarkUrl('javascript:alert(1)'), null);
  assert.equal(sanitizeWatermarkUrl('data:text/html,x'), null);
  assert.equal(sanitizeWatermarkUrl(''), null);
});

