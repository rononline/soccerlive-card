import test from 'node:test';
import assert from 'node:assert/strict';
import { translateStatKey } from '../../src/cards/shared-stat-labels.js';

const labels = {
  'stat.touches_opposition_box': 'Balcontacten in strafschopgebied',
  'stat.big_chances': 'Grote kansen',
  'stat.big_chances_missed': 'Grote kansen gemist',
  'stat.accurate_passes': 'Nauwkeurige passes',
  'stat.yellow_cards': 'Gele kaarten',
  'stat.shots_off_target': 'Schoten naast',
};
const translate = key => labels[key] || key;

test('translateStatKey normalizes common FotMob snake_case aliases', () => {
  assert.equal(translateStatKey('touches_opp_box', translate), labels['stat.touches_opposition_box']);
  assert.equal(translateStatKey('big_chance', translate), labels['stat.big_chances']);
  assert.equal(translateStatKey('big_chance_missed_title', translate), labels['stat.big_chances_missed']);
  assert.equal(translateStatKey('accurate_passes', translate), labels['stat.accurate_passes']);
  assert.equal(translateStatKey('yellow_cards', translate), labels['stat.yellow_cards']);
  assert.equal(translateStatKey('Shots Off Target', translate), labels['stat.shots_off_target']);
});

test('translateStatKey makes unknown snake_case keys human-readable', () => {
  assert.equal(translateStatKey('progressive_passes', translate), 'Progressive passes');
});
