import { test } from 'node:test';
import assert from 'node:assert/strict';
import { syncStatusInfo } from '../../src/cards/sync-status.js';

test('syncStatusInfo: first-load states map to an info card with fetching text', () => {
  for (const s of ['initializing', 'fetching']) {
    const info = syncStatusInfo(s);
    assert.equal(info.kind, 'info');
    assert.equal(info.title, 'ui.sync_fetching');
    assert.equal(info.sub, 'ui.sync_fetching_hint');
  }
});

test('syncStatusInfo: rate limit is an info card, not an error', () => {
  const info = syncStatusInfo('rate_limited');
  assert.equal(info.kind, 'info');
  assert.equal(info.title, 'ui.sync_rate_limited');
});

test('syncStatusInfo: auth and provider failures are error cards', () => {
  assert.equal(syncStatusInfo('authentication_failed').kind, 'error');
  assert.equal(syncStatusInfo('authentication_failed').title, 'ui.sync_auth_failed');
  assert.equal(syncStatusInfo('provider_unavailable').kind, 'error');
  assert.equal(syncStatusInfo('provider_unavailable').title, 'ui.sync_provider_unavailable');
});

test('syncStatusInfo: ready/unknown/missing return null so the card falls through', () => {
  assert.equal(syncStatusInfo('ready'), null);
  assert.equal(syncStatusInfo(undefined), null);
  assert.equal(syncStatusInfo('something_else'), null);
});
