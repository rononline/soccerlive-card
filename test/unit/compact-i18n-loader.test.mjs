import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const { compactI18n } = require('../../scripts/compact-i18n-loader.cjs');

test('packs repeated translation keys into one indexed dictionary', () => {
  const source = `
    const TRANSLATIONS = {
      en: { 'hello': 'Hello {name}', 'bye': 'Bye' },
      nl: { 'hello': 'Hallo {name}', 'bye': 'Dag' },
    };
    export function t(key, lang, vars) {
      let str = (TRANSLATIONS[lang] || TRANSLATIONS.en)[key];
      return str;
    }
  `;
  const packed = compactI18n(source);
  assert.match(packed, /const TRANSLATION_INDEX=\{"hello":0,"bye":1\}/);
  assert.match(packed, /"nl":\["Hallo \{name\}","Dag"\]/);
  assert.doesNotMatch(packed, /'hello':/);
  assert.match(packed, /TRANSLATION_INDEX\[key\]/);
});

test('keeps missing translations as fallback slots', () => {
  const source = `
    const TRANSLATIONS = { en: { a: 'A' }, nl: { b: 'B' } };
    export function t(key) { return TRANSLATIONS.en[key]; }
  `;
  const packed = compactI18n(source);
  assert.match(packed, /"en":\["A",null\]/);
  assert.match(packed, /"nl":\[null,"B"\]/);
  assert.match(packed, /if \(str == null\) str = TRANSLATIONS\.en\[index\]/);
});

test('packed production translations preserve localization and English fallback', () => {
  const source = readFileSync(new URL('../../src/i18n.js', import.meta.url), 'utf8');
  const packed = compactI18n(source).replaceAll('export ', '');
  const context = {};
  vm.runInNewContext(
    `${packed};globalThis.results=[
      t('archive.clear','nl'),
      t('archive.clear','de'),
      t('archive.clear','fr'),
      t('club.cache_note','it'),
      t('missing.key','nl')
    ];`,
    context,
  );
  assert.deepEqual(
    Array.from(context.results),
    ['Wissen', 'Löschen', 'Effacer', 'Club data refreshes about once a day', 'missing.key'],
  );
});
