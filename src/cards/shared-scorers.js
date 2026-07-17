// Pure ranking helper for the Scorers card, so one card can rank by goals or
// assists (and later cards) instead of needing separate near-identical cards.
const _num = v => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : 0;
};

// Ranking key -> the scorer field that holds its count.
const RANKING_FIELD = {
  goals: 'goals',
  assists: 'assists',
  yellow_cards: 'yellow_cards',
  red_cards: 'red_cards',
};

export function rankingField(ranking) {
  return RANKING_FIELD[ranking] || RANKING_FIELD.goals;
}

/**
 * Return the scorers annotated with `value` (the count for the chosen ranking).
 * For `goals` the provider order/rank is kept; for other rankings the list is
 * re-sorted by the value and re-ranked 1..n.
 */
export function rankScorers(scorers, ranking = 'goals') {
  const field = rankingField(ranking);
  const list = (Array.isArray(scorers) ? scorers : []).map(s => ({ ...s, value: _num(s[field]) }));
  if (ranking === 'goals') return list; // already ranked by the provider
  list.sort((a, b) => b.value - a.value);
  return list.map((s, i) => ({ ...s, rank: i + 1 }));
}
