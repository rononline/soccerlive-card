import test from 'node:test';
import assert from 'node:assert/strict';
import { matchHasDetails, requestMatchDetails, updatedMatch } from '../../src/cards/shared-detail-loader.js';

test('matchHasDetails remains false for a standalone base fixture', () => {
  assert.equal(matchHasDetails({ event_id: '1', key_events: [], home_statistics: {} }), false);
  assert.equal(matchHasDetails({ event_id: '1', detail_loaded: true }), true);
});

test('requestMatchDetails is a no-op without an optional service', async () => {
  let calls = 0;
  const hass = { callService: async () => { calls += 1; } };
  assert.equal(await requestMatchDetails(hass, {}, { event_id: '1' }), false);
  assert.equal(calls, 0);
});

test('requestMatchDetails forwards generic service data', async () => {
  let call;
  const hass = { callService: async (...args) => { call = args; } };
  const requested = await requestMatchDetails(hass, {
    detail_service: 'custom_provider.load_details',
    detail_service_data: { team_id: 10 },
  }, { event_id: 99 });
  assert.equal(requested, true);
  assert.deepEqual(call, ['custom_provider', 'load_details', { team_id: 10, match_id: '99' }]);
});

test('requestMatchDetails consumes Soccer Live response data immediately', async () => {
  let command;
  const match = { event_id: 99 };
  const hass = {
    callWS: async payload => {
      command = payload;
      return { response: { match: { event_id: '99', detail_loaded: true, key_events: [{ type: 'goal' }] } } };
    },
  };
  const loaded = await requestMatchDetails(hass, {
    detail_service: 'soccer_live.get_match_details',
    detail_service_data: { config_entry_id: 'entry-1' },
  }, match);
  assert.equal(loaded, true);
  assert.equal(match.detail_loaded, true);
  assert.equal(match.key_events.length, 1);
  assert.deepEqual(command, {
    type: 'call_service',
    domain: 'soccer_live',
    service: 'get_match_details',
    service_data: { config_entry_id: 'entry-1', match_id: '99' },
    return_response: true,
  });
});

test('updatedMatch finds refreshed data without provider assumptions', () => {
  const fresh = { event_id: '2', detail_loaded: true };
  assert.equal(updatedMatch({ matches: [{ event_id: '1' }, fresh] }, 2), fresh);
});
