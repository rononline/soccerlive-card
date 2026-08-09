import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isFriendlyCompetition, displayCompetitionName, resolveCompetitionLogo, pickLeagueInfo } from '../../src/cards/shared-competition.js';

test('pickLeagueInfo: matches by name instead of taking the first entry', () => {
  // Regression: a team's league_info listed a friendly at index 0 while the
  // live match was an Eredivisie duel, so the card showed the FIFA logo and
  // "Oefenwedstrijd" instead of the league.
  const list = [
    { name: 'Friendlies Clubs', abbreviation: 'Friendlies Clubs', logo_href: 'friendly.png' },
    { name: 'Eredivisie', abbreviation: 'Netherlands', logo_href: 'eredivisie.png' },
  ];
  assert.equal(pickLeagueInfo(list, 'Eredivisie').logo_href, 'eredivisie.png');
  assert.equal(pickLeagueInfo(list, 'eredivisie').name, 'Eredivisie'); // case-insensitive
});

test('pickLeagueInfo: no name match with multiple entries -> null (never a wrong guess)', () => {
  const list = [{ name: 'Friendlies Clubs' }, { name: 'Eredivisie' }];
  assert.equal(pickLeagueInfo(list, 'La Liga'), null);
});

test('pickLeagueInfo: falls back to the sole entry, and tolerates junk input', () => {
  assert.equal(pickLeagueInfo([{ name: 'Premier League' }], 'N/A').name, 'Premier League');
  assert.equal(pickLeagueInfo([{ name: 'Premier League' }], '').name, 'Premier League');
  assert.equal(pickLeagueInfo(null, 'Eredivisie'), null);
  assert.equal(pickLeagueInfo([], 'Eredivisie'), null);
});

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

test('resolveCompetitionLogo: friendly -> fallback; otherwise the competition logo', () => {
  // Non-friendly returns the competition logo.
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Eredivisie', competitionLogo: 'ere.png', fallbackLogo: 'team.png',
  }), 'ere.png');
  // Friendly (by name) returns the fallback (team logo or null).
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Oefenwedstrijd', competitionLogo: 'fifa.png', fallbackLogo: 'team.png',
  }), 'team.png');
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Club Friendlies', competitionLogo: 'fifa.png', fallbackLogo: null,
  }), null);
  // 'N/A' / empty competition logo falls back too.
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Eredivisie', competitionLogo: 'N/A', fallbackLogo: 'team.png',
  }), 'team.png');
});

test('resolveCompetitionLogo: the is_friendly flag wins over the name heuristic', () => {
  // Provider says friendly even though the name isn't recognised -> fallback.
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Mystery Cup', competitionLogo: 'fifa.png', fallbackLogo: null, isFriendly: true,
  }), null);
  // Provider says NOT friendly even though the name looks friendly -> keep logo
  // (no false positive from the heuristic).
  assert.equal(resolveCompetitionLogo({
    competitionName: 'Friendly Cup', competitionLogo: 'cup.png', fallbackLogo: null, isFriendly: false,
  }), 'cup.png');
});

test('displayCompetitionName still localises friendlies (Dutch)', () => {
  assert.equal(displayCompetitionName('Club Friendlies', 'nl'), 'Oefenwedstrijd');
  assert.equal(displayCompetitionName('Friendlies', 'nl'), 'Oefenwedstrijden');
  assert.equal(displayCompetitionName('Eredivisie', 'nl'), 'Eredivisie');
});
