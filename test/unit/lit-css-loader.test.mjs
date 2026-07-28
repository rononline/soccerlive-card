import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { minifyCss, minifyLitCss } = require('../../scripts/minify-lit-css-loader.cjs');

test('minifies static Lit CSS while preserving meaningful quoted whitespace', () => {
  const input = `
    /* formatting comment */
    .item > span {
      content: "a  b";
      width: calc(100% - 2px);
      color: var(--cl-text);
    }
  `;
  assert.equal(
    minifyCss(input),
    '.item>span{content:"a  b";width:calc(100% - 2px);color:var(--cl-text);}',
  );
});

test('only rewrites css tagged templates', () => {
  const source = 'const a = css` .x { color: red; } `; const b = ` keep  me `;';
  assert.equal(
    minifyLitCss(source),
    'const a = css`.x{color:red;}`; const b = ` keep  me `;',
  );
});
