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
