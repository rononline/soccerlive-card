import test from 'node:test';
import assert from 'node:assert/strict';
import { sourceSectionModel } from '../../src/cards/shared-source-status.js';


test('maps explicit section provenance, freshness and enrichment', () => {
  const model = sourceSectionModel({
    source_sections: {
      schedule: {
        available: true,
        provider: 'api_football',
        updated_at: '2026-07-29T10:00:00Z',
      },
      lineup: {
        available: true,
        provider: 'fotmob',
        updated_at: '2026-07-29T10:05:00Z',
        enriched: true,
      },
      review: { available: false },
    },
  }, '', '2026-07-29T10:00:00Z');

  assert.deepEqual(model.map(item => [
    item.section,
    item.available,
    item.provider,
    item.enriched,
  ]), [
    ['schedule', true, 'api_football', false],
    ['lineup', true, 'fotmob', true],
    ['review', false, '', false],
  ]);
});
