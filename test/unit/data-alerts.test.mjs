import test from 'node:test';
import assert from 'node:assert/strict';
import { alertsForMatch } from '../../src/cards/shared-data-alerts.js';

test('alertsForMatch keeps global and matching fixture alerts', () => {
  const alerts = [
    { code: 'provider_error' },
    { code: 'live_data_stale', event_id: '10' },
    { code: 'match_cancelled', event_id: '20' },
    { code: 'source_conflict', canonical_id: 'fixture-a' },
  ];
  assert.deepEqual(
    alertsForMatch(alerts, { event_id: '10', canonical_id: 'fixture-a' }).map(item => item.code),
    ['provider_error', 'live_data_stale', 'source_conflict'],
  );
});

test('alertsForMatch handles malformed provider data', () => {
  assert.deepEqual(alertsForMatch(null, {}), []);
  assert.deepEqual(alertsForMatch([null, 'bad'], {}), []);
});

test('alertsForMatch suppresses a stale lineup warning when both lineups exist', () => {
  const alerts = [
    { code: 'live_lineup_missing', event_id: '10' },
    { code: 'live_data_stale', event_id: '10' },
  ];
  const match = {
    event_id: '10',
    lineup_home: [{ name: 'Home keeper' }],
    lineup_away: [{ name: 'Away keeper' }],
  };

  assert.deepEqual(alertsForMatch(alerts, match).map(item => item.code), ['live_data_stale']);
});

test('alertsForMatch retains a lineup warning for partial lineup data', () => {
  const alerts = [{ code: 'live_lineup_missing', event_id: '10' }];
  const match = { event_id: '10', lineup_home: [{ name: 'Home keeper' }], lineup_away: [] };

  assert.deepEqual(alertsForMatch(alerts, match).map(item => item.code), ['live_lineup_missing']);
});
