import { test } from 'node:test';
import assert from 'node:assert/strict';
import { translateAdvice } from '../../src/cards/shared-advice.js';

test('translateAdvice: Combo Winner (nl) keeps team + goals', () => {
  assert.equal(
    translateAdvice('Combo Winner : Feyenoord and +2.5 goals', 'nl'),
    'Combi winnaar : Feyenoord en +2.5 doelpunten',
  );
});

test('translateAdvice: Double chance (nl)', () => {
  assert.equal(
    translateAdvice('Double chance : Feyenoord or draw', 'nl'),
    'Dubbele kans : Feyenoord of gelijkspel',
  );
});

test('translateAdvice: Combo Double chance handled before Double chance / Winner', () => {
  assert.equal(
    translateAdvice('Combo Double chance : Ajax or draw and -3.5 goals', 'nl'),
    'Combi dubbele kans : Ajax of gelijkspel en -3.5 doelpunten',
  );
});

test('translateAdvice: German', () => {
  assert.equal(
    translateAdvice('Combo Winner : Feyenoord and +2.5 goals', 'de'),
    'Kombi Sieger : Feyenoord und +2.5 Tore',
  );
});

test('translateAdvice: no predictions available', () => {
  assert.equal(translateAdvice('No predictions available', 'nl'), 'Geen voorspelling beschikbaar');
});

test('translateAdvice: regional language code (nl-NL) resolves to nl', () => {
  assert.equal(
    translateAdvice('Winner : Feyenoord', 'nl-NL'),
    'Winnaar : Feyenoord',
  );
});

test('translateAdvice: English and unknown languages pass through unchanged', () => {
  const s = 'Combo Winner : Feyenoord and +2.5 goals';
  assert.equal(translateAdvice(s, 'en'), s);
  assert.equal(translateAdvice(s, 'xx'), s);
});

test('translateAdvice: empty / nullish input', () => {
  assert.equal(translateAdvice('', 'nl'), '');
  assert.equal(translateAdvice(null, 'nl'), '');
  assert.equal(translateAdvice(undefined, 'nl'), '');
});
