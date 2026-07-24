import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  pickNextMatch, nextWhenKind, computeForm, standingsRows, variantsForSensorType,
  teamMatchesName, matchSideIsTeam,
} from '../../src/cards/shared-minimal-model.js';

test('teamMatchesName: exact, subset, but not substring false positives', () => {
  assert.equal(teamMatchesName('Feyenoord', 'Feyenoord'), true);
  assert.equal(teamMatchesName('Feyenoord Rotterdam', 'Feyenoord'), true);   // subset
  assert.equal(teamMatchesName('Feyenoord', 'Feyenoord Rotterdam'), true);   // subset (reverse)
  assert.equal(teamMatchesName('Internacional', 'Inter'), false);            // was a substring false positive
  assert.equal(teamMatchesName('Atlético', 'Atletico'), true);              // accent-insensitive
  assert.equal(teamMatchesName('', 'Inter'), false);
});

test('matchSideIsTeam: prefers ids over names', () => {
  const m = { home_id: 209, home_team: 'Feyenoord', away_id: 194, away_team: 'Ajax' };
  assert.equal(matchSideIsTeam(m, 'home', { id: 209 }), true);
  assert.equal(matchSideIsTeam(m, 'home', { id: 999, name: 'Feyenoord' }), false); // id wins
  assert.equal(matchSideIsTeam(m, 'away', { name: 'Ajax' }), true);                 // name fallback
});

test('standingsRows: empty direct list falls back to standings_groups', () => {
  const rows = standingsRows({ standings: [], standings_groups: [{ standings: [{ rank: 1, team_name: 'A' }] }] });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].team, 'A');
});

test('pickNextMatch: a live match wins over upcoming_matches', () => {
  const attrs = {
    upcoming_matches: [{ state: 'pre', home_team: 'A', away_team: 'B' }],
    matches: [{ state: 'in', home_team: 'X', away_team: 'Y' }, { state: 'pre' }],
  };
  assert.equal(pickNextMatch(attrs).home_team, 'X');   // live, not the upcoming A
});

test('pickNextMatch: falls back to upcoming, then pre, then next_match', () => {
  assert.equal(pickNextMatch({ upcoming_matches: [{ home_team: 'U' }] }).home_team, 'U');
  assert.equal(pickNextMatch({ matches: [{ state: 'post' }, { state: 'pre', home_team: 'P' }] }).home_team, 'P');
  assert.equal(pickNextMatch({ next_match: { home_team: 'N' } }).home_team, 'N');
  assert.equal(pickNextMatch({}), null);
});

test('nextWhenKind: live / tbd / time / date', () => {
  assert.equal(nextWhenKind({ state: 'in' }), 'live');
  assert.equal(nextWhenKind({ state: 'pre', time_tbd: true, date: '22-11-2026 12:00' }), 'tbd');
  assert.equal(nextWhenKind({ state: 'pre', date: '16-08-2026 20:00' }), 'time');
  assert.equal(nextWhenKind({ state: 'pre', date: '16-08-2026' }), 'date');
  assert.equal(nextWhenKind(null), 'none');
});

test('nextWhenKind recognizes an ISO-only kickoff time', () => {
  assert.equal(nextWhenKind({ state: 'pre', date_iso: '2026-08-01T12:00:00Z' }), 'time');
});

test('computeForm: requires a tracked team (empty must not match all)', () => {
  const attrs = { previous_matches: [{ state: 'post', home_team: 'Feyenoord', away_team: 'Ajax', home_score: '2', away_score: '0' }] };
  assert.equal(computeForm(attrs, ''), null);
  assert.equal(computeForm(attrs, undefined), null);
});

test('computeForm: W/D/L newest-first with summary', () => {
  const attrs = { previous_matches: [
    { state: 'post', home_team: 'Feyenoord', away_team: 'Ajax', home_score: '3', away_score: '1' }, // W
    { state: 'post', home_team: 'PSV', away_team: 'Feyenoord', home_score: '2', away_score: '0' },   // L
    { state: 'post', home_team: 'Feyenoord', away_team: 'AZ', home_score: '1', away_score: '1' },     // D
    { state: 'post', home_team: 'Utrecht', away_team: 'Sparta', home_score: '1', away_score: '0' },   // not Feyenoord -> skip
  ]};
  const f = computeForm(attrs, 'Feyenoord');
  assert.deepEqual(f.results, ['W', 'L', 'D']);
  assert.deepEqual([f.w, f.d, f.l], [1, 1, 1]);
});

test('standingsRows: computes played and normalises fields', () => {
  const attrs = { standings: [
    { rank: 1, team_name: 'PSV', wins: 3, draws: 0, losses: 0, points: '9', goal_difference: 7 },
    { rank: 2, team: 'Feyenoord', played: 3, points: '7', goal_difference: 5 },
  ]};
  const rows = standingsRows(attrs, 10);
  assert.equal(rows[0].played, 3);          // derived from w+d+l
  assert.equal(rows[1].played, 3);          // explicit played kept
  assert.equal(rows[1].team, 'Feyenoord');  // team fallback
  assert.equal(rows[0].points, '9');
});

test('standingsRows: reads standings_groups fallback and empty', () => {
  assert.equal(standingsRows({ standings_groups: [{ standings: [{ rank: 1, team_name: 'A' }] }] })[0].team, 'A');
  assert.deepEqual(standingsRows({}), []);
});

test('variantsForSensorType: standings/today are restricted', () => {
  assert.deepEqual(variantsForSensorType('standings'), ['standings']);
  assert.deepEqual(variantsForSensorType('all_matches_today'), ['fixtures']);
  assert.deepEqual(variantsForSensorType('team_matches'), ['fixtures', 'next', 'standings', 'form']);
});
