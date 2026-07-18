import { test } from 'node:test';
import assert from 'node:assert/strict';
import { predictionModel, oddsModel, capList } from '../../src/cards/shared-prematch-model.js';

test('capList: caps the list and reports the hidden count', () => {
  const list = Array.from({ length: 11 }, (_, i) => i);
  const { shown, extra } = capList(list, 6);
  assert.equal(shown.length, 6);
  assert.equal(extra, 5);
});

test('capList: short lists are unchanged with no extra', () => {
  const { shown, extra } = capList([1, 2], 6);
  assert.deepEqual(shown, [1, 2]);
  assert.equal(extra, 0);
});

test('capList: non-array input is handled', () => {
  const { shown, extra } = capList(undefined, 6);
  assert.deepEqual(shown, []);
  assert.equal(extra, 0);
});

test('predictionModel: normalizes bar widths to fill the track', () => {
  const m = predictionModel({ percent_home: 50, percent_draw: 30, percent_away: 20 });
  assert.equal(m.hasBar, true);
  assert.equal(m.home, 50);
  // widths sum to 100
  assert.ok(Math.abs(m.wHome + m.wDraw + m.wAway - 100) < 1e-9);
  assert.equal(m.wHome, 50);
});

test('predictionModel: percentages not summing to 100 are normalized', () => {
  const m = predictionModel({ percent_home: 40, percent_draw: 30, percent_away: 20 }); // sum 90
  assert.ok(Math.abs(m.wHome + m.wDraw + m.wAway - 100) < 1e-9);
  assert.ok(Math.abs(m.wHome - (40 / 90) * 100) < 1e-9);
});

test('predictionModel: missing percentages keep null labels and 0 width', () => {
  const m = predictionModel({ percent_home: 60, percent_draw: null, percent_away: 40 });
  assert.equal(m.draw, null);
  assert.equal(m.wDraw, 0);
  assert.ok(Math.abs(m.wHome + m.wAway - 100) < 1e-9);
});

test('predictionModel: no data -> hasBar false, zero widths', () => {
  const m = predictionModel({});
  assert.equal(m.hasBar, false);
  assert.deepEqual([m.wHome, m.wDraw, m.wAway], [0, 0, 0]);
});

test('oddsModel: three odds -> unique lowest is the favourite', () => {
  const m = oddsModel({ home: 1.39, draw: 5.0, away: 5.73, bookmaker_count: 8 });
  assert.equal(m.present, true);
  assert.equal(m.min, 1.39);
  assert.equal(m.showFav, true);
  assert.equal(m.count, 8);
  assert.equal(m.singular, false);
});

test('oddsModel: a single available odd is never a favourite', () => {
  const m = oddsModel({ home: 1.5, draw: null, away: null });
  assert.equal(m.present, true);
  assert.equal(m.showFav, false);
});

test('oddsModel: a tie for lowest is not marked as favourite', () => {
  const m = oddsModel({ home: 2.0, draw: 2.0, away: 4.0 });
  assert.equal(m.min, 2.0);
  assert.equal(m.showFav, false);
});

test('oddsModel: single bookmaker -> singular', () => {
  const m = oddsModel({ home: 1.5, draw: 4.0, away: 6.0, bookmaker_count: 1 });
  assert.equal(m.singular, true);
});

test('oddsModel: no bookmaker_count -> count null, not singular', () => {
  const m = oddsModel({ home: 1.5, draw: 4.0, away: 6.0 });
  assert.equal(m.count, null);
  assert.equal(m.singular, false);
});

test('oddsModel: no odds -> not present', () => {
  assert.equal(oddsModel({}).present, false);
  assert.equal(oddsModel({ home: null, draw: null, away: null }).present, false);
});

test('oddsModel: live odds set the live flag and drop the bookmaker count', () => {
  const m = oddsModel({ home: 2.5, draw: 3.1, away: 2.7, live: true });
  assert.equal(m.live, true);
  assert.equal(m.count, null);
  assert.equal(m.present, true);
});

test('oddsModel: pre-match odds are not flagged live', () => {
  assert.equal(oddsModel({ home: 1.5, draw: 4.0, away: 6.0, bookmaker_count: 3 }).live, false);
});
