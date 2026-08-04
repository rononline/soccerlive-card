import test from 'node:test';
import assert from 'node:assert/strict';
import { matchStatRows, translateStatKey } from '../../src/cards/shared-stat-labels.js';

const labels = {
  'stat.touches_opposition_box': 'Balcontacten in strafschopgebied',
  'stat.big_chances': 'Grote kansen',
  'stat.big_chances_missed': 'Grote kansen gemist',
  'stat.accurate_passes': 'Nauwkeurige passes',
  'stat.yellow_cards': 'Gele kaarten',
  'stat.shots_off_target': 'Schoten naast',
  'stat.accurate_crosses': 'Nauwkeurige voorzetten',
  'stat.clearances': 'Weggewerkte ballen',
  'stat.successful_dribbles': 'Geslaagde dribbels',
  'stat.duels_won': 'Duels gewonnen',
  'stat.ground_duels_won': 'Grondduels gewonnen',
  'stat.accurate_long_balls': 'Nauwkeurige lange ballen',
  'stat.opposition_half_passes': 'Passes op helft tegenstander',
  'stat.own_half_passes': 'Passes op eigen helft',
  'stat.throws': 'Inworpen',
  'stat.blocks': 'Blokkades',
  'stat.shots_inside_box': 'Schoten binnen strafschopgebied',
  'stat.shots_outside_box': 'Schoten buiten strafschopgebied',
  'stat.hit_woodwork': 'Raakte het houtwerk',
};
const translate = key => labels[key] || key;

test('translateStatKey normalizes common rich-provider snake_case aliases', () => {
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

test('translateStatKey covers the complete rich-provider match-stat vocabulary', () => {
  const expected = {
    BallPossesion: 'team.possession',
    Offsides: 'stat.offsides',
    ShotsOffTarget: 'stat.shots_off_target',
    ShotsOnTarget: 'team.on_target',
    accurate_crosses: 'stat.accurate_crosses',
    accurate_passes: 'stat.accurate_passes',
    aerials_won: 'stat.aerial_duels_won',
    big_chance: 'stat.big_chances',
    big_chance_missed_title: 'stat.big_chances_missed',
    blocked_shots: 'stat.blocked_shots',
    clearances: 'stat.clearances',
    corners: 'stat.corners',
    dribbles_succeeded: 'stat.successful_dribbles',
    duel_won: 'stat.duels_won',
    fouls: 'team.fouls',
    ground_duels_won: 'stat.ground_duels_won',
    interceptions: 'stat.interceptions',
    keeper_saves: 'stat.saves',
    long_balls_accurate: 'stat.accurate_long_balls',
    'matchstats.headers.tackles': 'stat.tackles',
    opposition_half_passes: 'stat.opposition_half_passes',
    own_half_passes: 'stat.own_half_passes',
    player_throws: 'stat.throws',
    red_cards: 'stat.red_cards',
    shot_blocks: 'stat.blocks',
    shots_inside_box: 'stat.shots_inside_box',
    shots_outside_box: 'stat.shots_outside_box',
    shots_woodwork: 'stat.hit_woodwork',
    total_shots: 'team.shots',
    touches_opp_box: 'stat.touches_opposition_box',
    yellow_cards: 'stat.yellow_cards',
  };
  const keyTranslator = key => `translated:${key}`;

  for (const [raw, key] of Object.entries(expected)) {
    assert.equal(translateStatKey(raw, keyTranslator), `translated:${key}`);
  }
});

test('matchStatRows deduplicates provider aliases and matches away aliases', () => {
  const rows = matchStatRows(
    { foulsCommitted: 12, fouls: 12, saves: 2, appearances: 11 },
    { fouls: 14, foulsCommitted: 14, keeper_saves: 0 },
  );

  assert.deepEqual(rows, [
    { key: 'foulsCommitted', home: 12, away: 14 },
    { key: 'saves', home: 2, away: 0 },
  ]);
});
