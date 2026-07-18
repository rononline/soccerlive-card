// Pure, lit-free computation for the pre-match prediction and odds sections,
// so the decision logic can be unit-tested without rendering.

const _num = v => (typeof v === 'number' && isFinite(v)) ? v : null;

// Strength-comparison metrics we surface, in display order.
const COMPARISON_METRICS = ['form', 'att', 'def', 'total'];

/**
 * Home-vs-away strength comparison rows from the prediction's `comparison`
 * block. Each row keeps the raw percentages and derives normalized bar widths.
 * Returns [] when there's nothing to compare.
 */
export function comparisonModel(prediction) {
  const c = (prediction && prediction.comparison) || {};
  const rows = [];
  for (const key of COMPARISON_METRICS) {
    const pair = c[key];
    if (!pair) continue;
    const home = _num(pair.home);
    const away = _num(pair.away);
    if (home === null && away === null) continue;
    const total = (home || 0) + (away || 0);
    rows.push({
      key,
      home, away,
      wHome: total > 0 ? ((home || 0) / total) * 100 : 50,
      wAway: total > 0 ? ((away || 0) / total) * 100 : 50,
    });
  }
  return rows;
}

/** Predicted goal lines (provider thresholds) from the prediction, or null. */
export function expectedGoals(prediction) {
  const p = prediction || {};
  const home = p.goals_home || '';
  const away = p.goals_away || '';
  const line = p.under_over || '';
  if (!home && !away && !line) return null;
  return { home, away, line };
}

/** Cap a list to `max` items, reporting how many are hidden (for "+N more"). */
export function capList(list, max) {
  const arr = Array.isArray(list) ? list : [];
  return { shown: arr.slice(0, max), extra: Math.max(0, arr.length - max) };
}

/**
 * Model for the prediction win-probability bar.
 * Keeps the raw percentages for the labels, and derives normalized widths so
 * the bar always fills its track even when the percentages don't add up to 100.
 */
export function predictionModel(prediction) {
  const p = prediction || {};
  const home = _num(p.percent_home);
  const draw = _num(p.percent_draw);
  const away = _num(p.percent_away);
  const hasBar = home !== null || draw !== null || away !== null;
  const total = (home || 0) + (draw || 0) + (away || 0);
  const width = v => (total > 0 && v !== null) ? (v / total) * 100 : 0;
  return {
    hasBar,
    home, draw, away,
    wHome: width(home), wDraw: width(draw), wAway: width(away),
  };
}

/**
 * Model for the 1X2 odds section. Determines whether a favourite should be
 * highlighted (at least two odds present and one uniquely the lowest) and
 * whether the bookmaker count is singular.
 */
export function oddsModel(odds) {
  const o = odds || {};
  const home = _num(o.home);
  const draw = _num(o.draw);
  const away = _num(o.away);
  const present = [home, draw, away].filter(v => v !== null);
  const min = present.length ? Math.min(...present) : null;
  const showFav = present.length >= 2 && present.filter(v => v === min).length === 1;
  const count = (typeof o.bookmaker_count === 'number' && o.bookmaker_count > 0) ? o.bookmaker_count : null;
  const live = o.live === true;
  return {
    present: present.length > 0,
    home, draw, away,
    min, showFav,
    // Live in-play odds come from a single feed, so there's no bookmaker count.
    count: live ? null : count,
    singular: count === 1,
    live,
  };
}
