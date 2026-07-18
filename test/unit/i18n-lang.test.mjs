import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveLang } from '../../src/i18n.js';

const hass = (sharedLang, locale) => ({
  states: { 'sensor.x': { attributes: { card_defaults: sharedLang ? { language: sharedLang } : {} } } },
  locale: { language: locale },
});

test('resolveLang: explicit card language wins over shared and locale', () => {
  assert.equal(resolveLang(hass('de', 'fr'), { entity: 'sensor.x', language: 'nl' }), 'nl');
});

test('resolveLang: inherits shared card_defaults.language when card sets none', () => {
  assert.equal(resolveLang(hass('nl', 'fr'), { entity: 'sensor.x' }), 'nl');
});

test('resolveLang: shared beats HA locale but not an explicit card language', () => {
  assert.equal(resolveLang(hass('it', 'de'), { entity: 'sensor.x' }), 'it');
});

test('resolveLang: falls back to HA locale when nothing is shared', () => {
  assert.equal(resolveLang(hass(null, 'de'), { entity: 'sensor.x' }), 'de');
});

test('resolveLang: unsupported shared language falls through to a supported one', () => {
  // 'xx' isn't supported -> skip it and use the locale.
  assert.equal(resolveLang(hass('xx', 'fr'), { entity: 'sensor.x' }), 'fr');
});
