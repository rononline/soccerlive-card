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

test('uses the supplementary live core when its clock has progressed further', () => {
  const result = blendAttributes(
    {
      provider: 'fotmob_private',
      matches: [match({
        state: 'in', status: 'Live', period: '1H', clock: '1',
        home_score: 1, away_score: 0,
      })],
    },
    {
      provider: 'espn',
      matches: [match({
        event_id: 'espn-1', state: 'in', status: 'In Progress', period: '1H',
        clock: '45+12', home_score: 1, away_score: 1,
      })],
    },
  );
  const live = result.matches[0];
  assert.equal(live.clock, '45+12');
  assert.equal(live.home_score, 1);
  assert.equal(live.away_score, 1);
  assert.equal(live.source_provenance.clock, 'espn');
  assert.equal(live.source_provenance.away_score, 'espn');
});

test('keeps a more advanced primary live clock authoritative', () => {
  const result = blendAttributes(
    {
      provider: 'api_football',
      matches: [match({ state: 'in', clock: '67', home_score: 2, away_score: 1 })],
    },
    {
      provider: 'espn',
      matches: [match({ event_id: 'espn-1', state: 'in', clock: '61', home_score: 2, away_score: 1 })],
    },
  );
  assert.equal(result.matches[0].clock, '67');
  assert.equal(result.matches[0].source_provenance.clock, undefined);
});

test('accepts a newer score without moving the live clock backwards', () => {
  const result = blendAttributes(
    {
      provider: 'api_football',
      matches: [match({ state: 'in', clock: '67', home_score: 1, away_score: 0 })],
    },
    {
      provider: 'espn',
      matches: [match({ event_id: 'espn-1', state: 'in', clock: '66', home_score: 1, away_score: 1 })],
    },
  );
  assert.equal(result.matches[0].clock, '67');
  assert.equal(result.matches[0].away_score, 1);
  assert.equal(result.matches[0].source_provenance.clock, undefined);
  assert.equal(result.matches[0].source_provenance.away_score, 'espn');
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

test('combines multiple supplementary entities in order', () => {
  const hass = {
    states: {
      'sensor.primary': {
        state: '1',
        attributes: { provider: 'espn', matches: [match()] },
      },
      'sensor.lineup': {
        state: '1',
        attributes: { provider: 'lineup', matches: [match({ event_id: 'l', lineup_home: [{ name: 'A' }] })] },
      },
      'sensor.stats': {
        state: '1',
        attributes: { provider: 'stats', matches: [match({ event_id: 's', home_statistics: { shots: 8 } })] },
      },
    },
  };
  const blended = blendHassSources(hass, {
    entity: 'sensor.primary',
    supplementary_entities: ['sensor.lineup', 'sensor.stats'],
  });
  const attrs = blended.states['sensor.primary'].attributes;
  assert.equal(attrs.matches[0].lineup_home[0].name, 'A');
  assert.equal(attrs.matches[0].home_statistics.shots, 8);
  assert.deepEqual(attrs.source_blend.supplementary_entities, ['sensor.lineup', 'sensor.stats']);
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
