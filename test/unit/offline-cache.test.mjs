import assert from 'node:assert/strict';
import test from 'node:test';

import { OfflineCache } from '../../src/cards/offline-cache.js';

class StorageMock {
  constructor() {
    this.items = new Map();
  }

  get length() {
    return this.items.size;
  }

  key(index) {
    return [...this.items.keys()][index] ?? null;
  }

  getItem(key) {
    return this.items.get(String(key)) ?? null;
  }

  setItem(key, value) {
    this.items.set(String(key), String(value));
  }

  removeItem(key) {
    this.items.delete(String(key));
  }
}

test.beforeEach(() => {
  globalThis.localStorage = new StorageMock();
  OfflineCache.clearAll();
});

test('clear allows unchanged data to be cached again', () => {
  const data = { matches: [{ event_id: '1' }] };
  OfflineCache.set('sensor.team', data);
  OfflineCache.clear('sensor.team');
  OfflineCache.set('sensor.team', data);

  assert.deepEqual(OfflineCache.get('sensor.team')?.data, data);
});

test('pruning removes expired, malformed and excess entries', () => {
  localStorage.setItem(
    'soccer_live_cache_expired',
    JSON.stringify({ timestamp: Date.now() - 25 * 60 * 60 * 1000, data: {} }),
  );
  localStorage.setItem('soccer_live_cache_broken', '{');
  for (let index = 0; index < 55; index += 1) {
    OfflineCache.set(`sensor.team_${index}`, { index });
  }

  assert.equal(localStorage.getItem('soccer_live_cache_expired'), null);
  assert.equal(localStorage.getItem('soccer_live_cache_broken'), null);
  assert.ok(localStorage.length <= 50);
});

test('clearAll removes every Soccer Live cache entry', () => {
  OfflineCache.set('sensor.one', { value: 1 });
  OfflineCache.set('sensor.two', { value: 2 });
  localStorage.setItem('unrelated', 'keep');

  OfflineCache.clearAll();

  assert.equal(OfflineCache.get('sensor.one'), null);
  assert.equal(OfflineCache.get('sensor.two'), null);
  assert.equal(localStorage.getItem('unrelated'), 'keep');
});
