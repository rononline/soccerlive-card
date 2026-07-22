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

test('updatedMatch finds refreshed data without provider assumptions', () => {
  const fresh = { event_id: '2', detail_loaded: true };
  assert.equal(updatedMatch({ matches: [{ event_id: '1' }, fresh] }, 2), fresh);
});
