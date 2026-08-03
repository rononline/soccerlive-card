import test from 'node:test';
import assert from 'node:assert/strict';
import { claimLiveEvent, liveEventToast } from '../../src/cards/shared-live-event.js';

const translate = key => ({
  'event.goal': 'Doelpunt',
  'event.goal_cancelled': 'Doelpunt afgekeurd',
  'event.yellow_card': 'Gele kaart',
  'event.red_card': 'Rode kaart',
  'event.fixture_changed': 'Wedstrijd gewijzigd',
  'status.finished': 'Einde wedstrijd',
}[key] || key);

test('provider-neutral event uid suppresses a duplicate toast per card', () => {
  const card = {};
  assert.equal(claimLiveEvent(card, { event_uid: 'sl-one' }), true);
  assert.equal(claimLiveEvent(card, { event_uid: 'sl-one' }), false);
  assert.equal(claimLiveEvent({}, { event_uid: 'sl-one' }), true);
});

test('VAR correction gets a clear translated toast', () => {
  const toast = liveEventToast(translate, 'soccer_live_goal_cancelled', {
    home_team: 'Feyenoord', away_team: 'Atalanta', home_score: 1, away_score: 1,
  });
  assert.equal(toast.variant, 'red');
  assert.match(toast.message, /Doelpunt afgekeurd/);
  assert.match(toast.message, /1 - 1/);
});
