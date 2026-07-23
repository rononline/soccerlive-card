import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  hasClubContent,
  groupSquad,
  collapseGroups,
  visibleTransfers,
  filterTransfers,
  countTransfers,
  transferCounterparty,
  formatTransferDate,
  squadValueSummary,
  matchdaySummary,
  seasonProgress,
  transferSummary,
  usableMatchText,
  squadAnalysis,
  normalizedInjuries,
  playerComparison,
  filterSquad,
  clubRecords,
  normalizeClubSectionOrder,
  availabilityRadar,
  predictedLineup,
  officialSelection,
  teamNews,
} from '../../src/cards/shared-club-model.js';

test('normalizeClubSectionOrder keeps valid unique choices and appends missing sections', () => {
  const order = normalizeClubSectionOrder('favorites,matchday,favorites,unknown');
  assert.deepEqual(order.slice(0, 2), ['favorites', 'matchday']);
  assert.equal(new Set(order).size, order.length);
  assert.ok(order.includes('transfers'));
});

test('filterSquad combines name, position and availability filters', () => {
  const squad = [
    { name: 'Jan Keeper', position: 'Goalkeeper' },
    { name: 'Piet Back', position: 'Defender', injured: true },
    { name: 'Jan Spits', position: 'Attacker' },
  ];
  assert.deepEqual(filterSquad(squad, 'jan').map(item => item.name), ['Jan Keeper', 'Jan Spits']);
  assert.deepEqual(filterSquad(squad, '', 'Defender', 'unavailable').map(item => item.name), ['Piet Back']);
  assert.equal(filterSquad(null).length, 0);
});

test('availability radar and predicted lineup remain derived and capability based', () => {
  const squad = [
    { name: 'K', position: 'Goalkeeper', appearances: 4 },
    ...Array.from({ length: 4 }, (_, i) => ({ name: `D${i}`, position: 'Defender', appearances: i })),
    ...Array.from({ length: 3 }, (_, i) => ({ name: `M${i}`, position: 'Midfielder', appearances: i })),
    ...Array.from({ length: 3 }, (_, i) => ({ name: `A${i}`, position: 'Attacker', appearances: i })),
    { name: 'Injured', position: 'Attacker', injured: true, appearances: 99 },
  ];
  assert.deepEqual(availabilityRadar(squad).find(line => line.position === 'Attacker'), {
    position: 'Attacker', key: 'club.attackers', available: 3, total: 4, thin: false,
  });
  const prediction = predictedLineup(squad);
  assert.equal(prediction.formation, '4-3-3');
  assert.equal(prediction.players.length, 11);
  assert.ok(!prediction.players.some(player => player.name === 'Injured'));
  assert.equal(predictedLineup([]), null);
});

test('official selection only appears with actual lineup data', () => {
  const attrs = { team_id: 10, matches: [{ event_id: 1, state: 'pre', home_id: 10, away_id: 20, lineup_home: [{ name: 'A', starter: true }, { name: 'B', starter: false }] }] };
  const selection = officialSelection(attrs);
  assert.deepEqual(selection.starters.map(player => player.name), ['A']);
  assert.deepEqual(selection.substitutes.map(player => player.name), ['B']);
  assert.equal(officialSelection({ ...attrs, matches: [{ ...attrs.matches[0], lineup_home: [] }] }), null);
});

test('teamNews combines optional changes, injuries and transfers', () => {
  const result = teamNews({ injuries: [{ player: 'A' }], transfers: [{ player: 'B', direction: 'in', date: '2026-07-01' }] }, [{ type: 'player_available', player: 'C' }]);
  assert.deepEqual(result.map(item => item.player), ['C', 'A', 'B']);
});

test('clubRecords derives current streaks, biggest win and home/away PPG', () => {
  const matches = [
    { state: 'post', date_iso: '2026-08-01T12:00:00Z', home_id: 10, away_id: 20, home_team: 'Us', away_team: 'A', home_score: 4, away_score: 0 },
    { state: 'post', date_iso: '2026-08-08T12:00:00Z', home_id: 30, away_id: 10, home_team: 'B', away_team: 'Us', home_score: 1, away_score: 2 },
    { state: 'post', date_iso: '2026-08-15T12:00:00Z', home_id: 10, away_id: 40, home_team: 'Us', away_team: 'C', home_score: 1, away_score: 1 },
  ];
  const records = clubRecords(matches, 10, 'Us');
  assert.equal(records.unbeaten, 3);
  assert.equal(records.winning, 0);
  assert.equal(records.cleanSheets, 0);
  assert.deepEqual(records.biggestWin, { score: '4–0', opponent: 'A' });
  assert.equal(records.home.pointsPerGame, 2);
  assert.equal(records.away.pointsPerGame, 3);
  assert.equal(clubRecords([], 10, 'Us'), null);
});

test('squadAnalysis summarizes positions, ages, value and thin groups', () => {
  const result = squadAnalysis([
    { name: 'Young', position: 'Defender', age: 18, market_value: 5 },
    { name: 'Old', position: 'Defender', age: 34, market_value: 10 },
    { name: 'Mid', position: 'Midfielder', age: 25 },
  ]);
  assert.deepEqual(result.lines[0], { position: 'Defender', count: 2, averageAge: 26, value: 15 });
  assert.equal(result.youngest.name, 'Young');
  assert.equal(result.oldest.name, 'Old');
  assert.deepEqual(result.thin.map(line => line.position), ['Defender', 'Midfielder']);
});

test('normalizedInjuries merges explicit injuries with injured squad players', () => {
  const injuries = normalizedInjuries({
    squad: [{ name: 'A', injured: true, position: 'Defender' }, { name: 'B', injured: true }],
    injuries: [{ player: 'A', type: 'Knee', expected_return: 'August' }],
  });
  assert.equal(injuries.length, 2);
  assert.deepEqual(injuries.find(item => item.player === 'A'), { name: 'A', injured: true, position: 'Defender', player: 'A', type: 'Knee', expected_return: 'August' });
});

test('playerComparison requires two players and keeps only available fields', () => {
  assert.equal(playerComparison([{ name: 'A' }]), null);
  const result = playerComparison([{ name: 'A', age: 20, goals: 2 }, { name: 'B', age: 22 }]);
  assert.deepEqual(result.fields, ['age', 'goals']);
});

test('usableMatchText removes provider placeholders but keeps real values', () => {
  for (const value of [null, undefined, '', 'N/A', 'n/a', 'NA', '-', 'None']) assert.equal(usableMatchText(value), '');
  assert.equal(usableMatchText('26-07-2026 14:00'), '26-07-2026 14:00');
  assert.equal(usableMatchText(0), '0');
});

test('matchdaySummary prefers live, then upcoming, then latest finished', () => {
  const post = { event_id: 1, state: 'post', date_iso: '2026-07-20T12:00:00Z' };
  const pre = { event_id: 2, state: 'pre', date_iso: '2026-07-26T12:00:00Z' };
  const live = { event_id: 3, state: 'in', date_iso: '2026-07-22T12:00:00Z' };
  assert.equal(matchdaySummary({ previous_matches: [post], upcoming_matches: [pre], matches: [live] }).phase, 'live');
  assert.equal(matchdaySummary({ previous_matches: [post], upcoming_matches: [pre] }).match, pre);
  assert.equal(matchdaySummary({ previous_matches: [post] }).phase, 'post');
  assert.equal(matchdaySummary({}), null);
});

test('seasonProgress calculates cumulative points and excludes friendlies', () => {
  const progress = seasonProgress([
    { state: 'post', date_iso: '2026-08-01T12:00:00Z', home_id: 10, away_id: 20, home_team: 'Us', away_team: 'A', home_score: 2, away_score: 0 },
    { state: 'post', date_iso: '2026-08-08T12:00:00Z', home_id: 30, away_id: 10, home_team: 'B', away_team: 'Us', home_score: 1, away_score: 1 },
    { state: 'post', is_friendly: true, date_iso: '2026-08-10T12:00:00Z', home_id: 10, away_id: 40, home_score: 0, away_score: 4 },
  ], 10, 'Us');
  assert.deepEqual(progress.rounds.map(round => [round.result, round.points]), [['W', 3], ['D', 4]]);
  assert.deepEqual({ played: progress.played, points: progress.points, goalsFor: progress.goalsFor, goalsAgainst: progress.goalsAgainst }, { played: 2, points: 4, goalsFor: 3, goalsAgainst: 1 });
});

test('transferSummary reports finances, types and windows without inventing fees', () => {
  const summary = transferSummary([
    { direction: 'in', fee: 10_000_000, date: '2026-07-01', type: 'Permanent' },
    { direction: 'out', fee: 15_000_000, date: '2026-01-10', type: 'Permanent' },
    { direction: 'in', fee: null, date: '2026-07-03', type: 'Loan' },
    { direction: 'out', date: '2026-07-04', fee_text: 'Free transfer' },
    { direction: 'in', date: '2026-07-05', type: '€ 2.5M' },
  ]);
  assert.deepEqual({ incoming: summary.incoming, outgoing: summary.outgoing, spent: summary.spent, income: summary.income, balance: summary.balance }, { incoming: 3, outgoing: 2, spent: 12_500_000, income: 15_000_000, balance: 2_500_000 });
  assert.equal(summary.feeCoverage, 3);
  assert.equal(summary.loans, 1);
  assert.equal(summary.free, 1);
  assert.deepEqual(summary.windows, { '2026-summer': 4, '2026-winter': 1 });
});

test('squadValueSummary totals known values and ages by position', () => {
  const summary = squadValueSummary([
    { position: 'Defender', market_value: 10_000_000, age: 24 },
    { position: 'Defender', market_value: 5_000_000, age: 26 },
    { position: 'Attacker', age: 20 },
  ]);
  assert.equal(summary.total, 15_000_000);
  assert.equal(summary.valued_count, 2);
  assert.equal(summary.by_position.Defender, 15_000_000);
  assert.equal(summary.average_age, 70 / 3);
});

test('collapseGroups: caps players per position and counts hidden', () => {
  const groups = [
    { key: 'club.goalkeepers', players: [{ name: 'A' }, { name: 'B' }, { name: 'C' }] },
    { key: 'club.defenders', players: [{ name: 'D' }, { name: 'E' }] },
  ];
  const { groups: capped, hidden } = collapseGroups(groups, 2);
  assert.equal(capped[0].players.length, 2);
  assert.equal(capped[1].players.length, 2);
  assert.equal(hidden, 1);  // one keeper hidden
  // perPosition < 1 => no cap
  assert.equal(collapseGroups(groups, 0).hidden, 0);
});

test('filterTransfers / countTransfers: by direction', () => {
  const tr = [
    { direction: 'in', player: 'A' }, { direction: 'out', player: 'B' }, { direction: 'in', player: 'C' },
  ];
  assert.deepEqual(countTransfers(tr), { all: 3, in: 2, out: 1 });
  assert.equal(filterTransfers(tr, 'in').length, 2);
  assert.equal(filterTransfers(tr, 'out').length, 1);
  assert.equal(filterTransfers(tr, 'all').length, 3);
  assert.equal(filterTransfers(null, 'in').length, 0);
});

test('hasClubContent: true when profile/coach/non-empty squad/transfers present', () => {
  assert.equal(hasClubContent(null), false);
  assert.equal(hasClubContent({}), false);
  assert.equal(hasClubContent({ squad: [] }), false);      // empty list is not content
  assert.equal(hasClubContent({ transfers: [] }), false);
  assert.equal(hasClubContent({ coach: 'Van Bronckhorst' }), true); // a coach is usable
  assert.equal(hasClubContent({ profile: { name: 'A' } }), true);
  assert.equal(hasClubContent({ squad: [{ name: 'P' }] }), true);
});

test('groupSquad: keeps position order and drops empty groups', () => {
  const squad = [
    { name: 'Keeper', position: 'Goalkeeper' },
    { name: 'Striker', position: 'Attacker' },
    { name: 'Back', position: 'Defender' },
  ];
  const groups = groupSquad(squad);
  assert.deepEqual(groups.map(g => g.pos), ['Goalkeeper', 'Defender', 'Attacker']);
  assert.deepEqual(groups[0].players.map(p => p.name), ['Keeper']);
});

test('groupSquad: tolerates non-array and unknown positions', () => {
  assert.deepEqual(groupSquad(null), []);
  assert.deepEqual(groupSquad([{ name: 'X', position: 'Coach' }]), []);
});

test('visibleTransfers: caps to max most-recent entries', () => {
  const list = Array.from({ length: 12 }, (_, i) => ({ player: `P${i}` }));
  assert.equal(visibleTransfers(list, 8).length, 8);
  assert.equal(visibleTransfers(list, 3)[2].player, 'P2');
  assert.equal(visibleTransfers(null).length, 0);
});

test('transferCounterparty: shows the other club for the direction', () => {
  assert.equal(transferCounterparty({ direction: 'in', from: 'Ajax', to: 'Feyenoord' }), 'Ajax');
  assert.equal(transferCounterparty({ direction: 'out', from: 'Feyenoord', to: 'Ajax' }), 'Ajax');
  assert.equal(transferCounterparty({}), '');
});

test('formatTransferDate: yyyy-mm-dd becomes dd-mm-yyyy', () => {
  assert.equal(formatTransferDate('2025-07-01'), '01-07-2025');
  assert.equal(formatTransferDate(''), '');
});
