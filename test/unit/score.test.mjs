import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreText } from '../../src/cards/shared-score.js';

test('scoreText: scalars pass through unchanged', () => {
  assert.equal(scoreText('2'), '2');
  assert.equal(scoreText(0), 0);
  assert.equal(scoreText('N/A'), 'N/A');
});

test('scoreText: object score is flattened to displayValue / value', () => {
  assert.equal(scoreText({ value: 2, displayValue: '2' }), '2');
  assert.equal(scoreText({ value: 3 }), '3');
});

test('scoreText: null / undefined use the fallback', () => {
  assert.equal(scoreText(null), '0');
  assert.equal(scoreText(undefined), '0');
  assert.equal(scoreText(null, '-'), '-');
  assert.equal(scoreText({}, '-'), '-');
});
