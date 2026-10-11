// Group-stage filtering shared by the Matches, Minimal, Ticker and Last Match
// cards. Point a card at a competition's all_* sensor and keep only the matches
// in a chosen group: a fixed one (`filter_group`), the group(s) your own team
// plays in (`only_my_group` + `my_team`), optionally dropping your team's own
// fixture (`exclude_my_team`) so you see just the rest of the group — e.g. the
// other match on the same matchday.

/** Whether a match's teams include the tracked team (case-insensitive substring,
 * matching the long-standing behaviour of the per-card blocks this replaces). */
function teamIn(match, team) {
  return String(match.home_team || '').toLowerCase().includes(team)
    || String(match.away_team || '').toLowerCase().includes(team);
}

/** Whether any group filter is configured. */
export function groupFilterActive(config) {
  return Boolean(config && (
    config.filter_group
    || config.only_my_group === true
    || config.exclude_my_team === true
  ));
}

/**
 * Apply the configured group filters to a list of full match objects (each
 * carrying `group`, `home_team`, `away_team`). Preserves order; never mutates
 * the input. Needs the full `matches` list — the compact upcoming/previous
 * lists can omit `group`.
 */
export function filterByGroup(matches, config) {
  let out = Array.isArray(matches) ? matches : [];
  if (!config) return out;
  if (config.filter_group) {
    const wanted = String(config.filter_group).toLowerCase();
    out = out.filter(m => String(m.group || '').toLowerCase().includes(wanted));
  }
  const myTeam = String(config.my_team || '').toLowerCase();
  // "Only my team's group": resolve the group(s) my_team plays in, then keep
  // every match in those groups (so you see the rest of the group).
  if (config.only_my_group === true && myTeam) {
    const groups = new Set(
      out
        .filter(m => teamIn(m, myTeam))
        .map(m => String(m.group || '').trim())
        .filter(Boolean),
    );
    if (groups.size) out = out.filter(m => groups.has(String(m.group || '').trim()));
  }
  // Drop my_team's own fixtures — combine with only_my_group to see just the
  // rest of the group (e.g. the other group match, not your team's own).
  if (config.exclude_my_team === true && myTeam) {
    out = out.filter(m => !teamIn(m, myTeam));
  }
  return out;
}

// Sensor types that carry a single team's own fixtures only — on these a group
// filter (especially exclude_my_team) empties the list, because the other teams
// of the group simply aren't in the feed.
const TEAM_SENSOR_TYPES = new Set(['team_match', 'team_matches', 'team_matches_mixed']);

/**
 * Explain why a group filter produced nothing, so a card can show a helpful
 * hint instead of a bare "no matches". Returns:
 *   - `'team_sensor'` — the group filter emptied a single-team feed; the fix is
 *     to point the card at a competition's all-matches sensor.
 *   - `'no_group'`    — a competition feed, but no match survived the filter
 *     (wrong group label, or the competition has no group data).
 *   - `null`          — no group filter active, no source data at all, or the
 *     filter did leave matches (so emptiness is not the filter's doing).
 */
export function groupFilterEmptyReason(rawMatches, config, attrs) {
  if (!groupFilterActive(config)) return null;
  const raw = Array.isArray(rawMatches) ? rawMatches : [];
  if (!raw.length) return null;                        // genuinely no data upstream
  if (filterByGroup(raw, config).length) return null;  // filter left something
  const type = String((attrs && attrs.sensor_type) || '');
  return TEAM_SENSOR_TYPES.has(type) ? 'team_sensor' : 'no_group';
}
