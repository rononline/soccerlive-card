import test from 'node:test';
import assert from 'node:assert/strict';
import { readinessModel } from '../../src/cards/shared-readiness.js';

test('calculates provider-neutral prematch readiness from available fields', () => {
  const model = readinessModel({
    date_iso: '2026-08-09T12:15:00+00:00',
    competition_name: 'Eredivisie',
    venue: 'Het Kasteel',
    head_to_head: [{ event_id: 'old-1' }],
    prediction: { winner_name: 'Feyenoord' },
    lineup_home: [{ name: 'Keeper' }],
  });

  assert.equal(model.score, 70);
  assert.equal(model.level, 'good');
  assert.deepEqual(
    model.available,
    ['kickoff', 'competition', 'venue', 'head_to_head', 'prediction', 'lineup'],
  );
  assert.ok(model.missing.includes('odds'));
});

test('uses the integration-provided readiness model when available', () => {
  const published = {
    score: 88,
    level: 'ready',
    available: ['kickoff', 'lineup'],
    missing: [],
  };
  assert.equal(readinessModel({ match_readiness: published }), published);
});

test('concrete lineup data repairs a stale integration-provided readiness model', () => {
  const model = readinessModel({
    lineup_home: [{ name: 'Home keeper' }],
    lineup_away: [{ name: 'Away keeper' }],
    match_readiness: {
      score: 50,
      level: 'building',
      available: ['kickoff'],
      missing: ['lineup', 'odds'],
    },
  });

  assert.equal(model.score, 65);
  assert.equal(model.level, 'good');
  assert.deepEqual(model.available, ['kickoff', 'lineup']);
  assert.deepEqual(model.missing, ['odds']);
});

test('does not count provider placeholder strings', () => {
  const model = readinessModel({
    date: 'N/A',
    competition_name: 'unknown',
    venue: '-',
  });
  assert.equal(model.score, 0);
  assert.equal(model.level, 'early');
});
