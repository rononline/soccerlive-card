import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isFriendlyCompetition, displayCompetitionName } from '../../src/cards/shared-competition.js';

test('isFriendlyCompetition: true for club/generic friendly names (any casing/separators)', () => {
  for (const n of ['Club Friendlies', 'club friendly', 'Friendlies Clubs',
                    'Friendly', 'Friendlies', 'CLUB_FRIENDLIES', 'club-friendly']) {
    assert.equal(isFriendlyCompetition(n), true, n);
  }
});

test('isFriendlyCompetition: true for the LOCALISED friendly names', () => {
  // The integration localises league_name for API-Football, so cards can see a
  // translated name (e.g. "Oefenwedstrijd") rather than the English key.
  for (const n of ['Oefenwedstrijd', 'Oefenwedstrijden', 'Amistosos', 'Amistosos de clubes',
                    'Freundschaftsspiele', 'Vereinsfreundschaftsspiele',
                    'Amichevoli', 'Matchs amicaux', 'International Friendly', 'fifa.friendly']) {
    assert.equal(isFriendlyCompetition(n), true, n);
  }
});

test('isFriendlyCompetition: false for real competitions and empties', () => {
  for (const n of ['Eredivisie', 'Champions League', 'FIFA World Cup', '', null, undefined]) {
    assert.equal(isFriendlyCompetition(n), false, String(n));
  }
});

test('displayCompetitionName still localises friendlies (Dutch)', () => {
  assert.equal(displayCompetitionName('Club Friendlies', 'nl'), 'Oefenwedstrijd');
  assert.equal(displayCompetitionName('Friendlies', 'nl'), 'Oefenwedstrijden');
  assert.equal(displayCompetitionName('Eredivisie', 'nl'), 'Eredivisie');
});
