// Pure, lit-free logic for the Minimal card variants, so live priority, form,
// standings and variant/sensor rules can be unit-tested without rendering.

/** Pick the match to feature: a live one first, then the next upcoming, then a
 * pre match / next_match. Live wins even when upcoming_matches also exists. */
export function pickNextMatch(attrs) {
  const a = attrs || {};
  const all = Array.isArray(a.matches) ? a.matches : [];
  const live = all.find((m) => m && m.state === "in");
  if (live) return live;
  const up = Array.isArray(a.upcoming_matches) ? a.upcoming_matches : [];
  return up[0] || all.find((m) => m && m.state === "pre") || a.next_match || null;
}

/** How to render a featured match's "when": live score, unknown time, a time,
 * or just a date. */
export function nextWhenKind(m) {
  if (!m) return "none";
  if (m.state === "in") return "live";
  if (m.time_tbd) return "tbd";
  const time = (m.date || "").split(" ")[1];
  return time ? "time" : "date";
}

/**
 * Recent W/D/L for the tracked team (newest-first) with a W/D/L summary.
 * Returns null when there's no tracked team (an empty name must not match every
 * team) or no usable finished result.
 */
export function computeForm(attrs, trackedTeam, max = 10) {
  const tracked = (trackedTeam || "").toLowerCase();
  if (!tracked) return null;
  const a = attrs || {};
  const finished = (Array.isArray(a.previous_matches) && a.previous_matches.length)
    ? a.previous_matches
    : (Array.isArray(a.matches) ? a.matches : []).filter((m) => m.state === "post");
  const results = [];
  for (const m of finished) {
    const isHome = (m.home_team || "").toLowerCase().includes(tracked);
    const isAway = (m.away_team || "").toLowerCase().includes(tracked);
    if (!isHome && !isAway) continue;
    const hs = parseInt(m.home_score, 10);
    const as = parseInt(m.away_score, 10);
    if (Number.isNaN(hs) || Number.isNaN(as)) continue;
    results.push(hs === as ? "D" : (((isHome && hs > as) || (isAway && as > hs)) ? "W" : "L"));
    if (results.length >= max) break;
  }
  if (!results.length) return null;
  return {
    results,
    w: results.filter((r) => r === "W").length,
    d: results.filter((r) => r === "D").length,
    l: results.filter((r) => r === "L").length,
  };
}

/** Normalised standings rows (rank, team, played, gd, points), capped. */
export function standingsRows(attrs, max = 20) {
  const a = attrs || {};
  const table = Array.isArray(a.standings) ? a.standings
    : (a.standings_groups && a.standings_groups[0] && a.standings_groups[0].standings) || [];
  return table.slice(0, Math.max(0, max)).map((r, i) => ({
    rank: r.rank != null ? r.rank : i + 1,
    team: r.team_name || r.team || "",
    played: r.played != null ? r.played : ((r.wins || 0) + (r.draws || 0) + (r.losses || 0)),
    gd: r.goal_difference,
    points: r.points,
  }));
}

/** Which variants make sense for a sensor type (a standings sensor has no
 * fixtures for next/form; a today sensor is just a fixtures list). */
export function variantsForSensorType(sensorType) {
  if (sensorType === "standings") return ["standings"];
  if (sensorType === "all_matches_today") return ["fixtures"];
  return ["fixtures", "next", "standings", "form"];
}
