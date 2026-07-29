import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blendAttributes,
  blendHassSources,
  findEnrichmentEntity,
  sameFixture,
} from '../../src/cards/shared-source-blend.js';

const match = overrides => ({
  event_id: 'primary-1',
  date_iso: '2026-08-09T12:15:00+00:00',
  home_team: 'Sparta Rotterdam',
  away_team: 'Feyenoord',
  state: 'pre',
  ...overrides,
});

test('matches fixtures across provider IDs and common club suffixes', () => {
  assert.equal(sameFixture(
    match(),
    match({ event_id: 'fotmob-9', home_team: 'Sparta', away_team: 'Feyenoord Rotterdam' }),
  ), true);
});

test('enriches missing fields but keeps primary conflicts authoritative', () => {
  const result = blendAttributes(
    { provider: 'api_football', matches: [match({ venue: '' })] },
    {
      provider: 'fotmob',
      matches: [match({
        event_id: 'fotmob-9',
        venue: 'Het Kasteel',
        home_score: 2,
        lineup_home: [{ name: 'Keeper' }],
      })],
    },
  );
  assert.equal(result.matches[0].venue, 'Het Kasteel');
  assert.deepEqual(result.matches[0].lineup_home, [{ name: 'Keeper' }]);
  assert.equal(result.matches[0].home_score, 2);
  assert.equal(result.matches[0].source_provenance.venue, 'fotmob');
});

test('does not append secondary-only previous-season fixtures', () => {
  const result = blendAttributes(
    { matches: [match()] },
    { matches: [match({ event_id: 'old', date_iso: '2025-05-01T12:00:00+00:00' })] },
  );
  assert.equal(result.matches.length, 1);
  assert.equal(result.matches[0].event_id, 'primary-1');
});

test('creates a non-mutating hass view for the selected card', () => {
  const hass = {
    states: {
      'sensor.primary': { state: '1', attributes: { matches: [match()] } },
      'sensor.secondary': {
        state: '1',
        attributes: { provider: 'fotmob', matches: [match({ event_id: 'other', venue: 'De Kuip' })] },
      },
    },
  };
  const blended = blendHassSources(hass, {
    entity: 'sensor.primary',
    enrichment_entity: 'sensor.secondary',
  });
  assert.equal(blended.states['sensor.primary'].attributes.matches[0].venue, 'De Kuip');
  assert.equal(hass.states['sensor.primary'].attributes.matches[0].venue, undefined);
});

test('automatically selects a richer overlapping provider', () => {
  const hass = {
    states: {
      'sensor.primary': {
        attributes: { provider: 'api_football', matches: [match()] },
      },
      'sensor.unrelated': {
        attributes: {
          provider: 'fotmob',
          matches: [match({ home_team: 'Ajax', away_team: 'PSV' })],
        },
      },
      'sensor.richer': {
        attributes: {
          provider: 'fotmob',
          matches: [match({
            event_id: 'fotmob-1',
            lineup_home: [{ name: 'Keeper' }],
            home_statistics: { shots: 10 },
          })],
        },
      },
    },
  };
  assert.equal(
    findEnrichmentEntity(hass, { entity: 'sensor.primary' }),
    'sensor.richer',
  );
  const blended = blendHassSources(hass, {
    entity: 'sensor.primary',
    auto_enrichment: true,
  });
  const enriched = blended.states['sensor.primary'].attributes.matches[0];
  assert.equal(enriched.source_sections.lineup.provider, 'fotmob');
  assert.equal(enriched.source_sections.schedule.provider, 'api_football');
});
