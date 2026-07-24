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
  const time = m.date_iso || (m.date || "").split(" ")[1];
  return time ? "time" : "date";
}

/** Normalise a team name: lowercase, strip accents/punctuation, collapse spaces. */
export function normalizeTeamName(s) {
  return (s || "")
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Whether a team name refers to the tracked team, avoiding substring false
 * positives (e.g. "Inter" vs "Internacional"): exact after normalisation, or
 * one name's whole-word tokens being a subset of the other's (so "Feyenoord"
 * matches "Feyenoord Rotterdam"). Genuinely ambiguous cases like "Inter" vs
 * "Inter Miami" still need an id.
 */
export function teamMatchesName(name, tracked) {
  const a = normalizeTeamName(name);
  const b = normalizeTeamName(tracked);
  if (!a || !b) return false;
  if (a === b) return true;
  const at = a.split(" "), bt = b.split(" ");
  const subset = (x, y) => x.every((t) => y.includes(t));
  return subset(at, bt) || subset(bt, at);
}

/** Whether the given side of a match is the tracked team. Prefers ids. */
export function matchSideIsTeam(match, side, tracked) {
  const id = match && match[side + "_id"];
  if (tracked && tracked.id != null && id != null) return String(id) === String(tracked.id);
  return teamMatchesName(match && match[side + "_team"], tracked && tracked.name);
}

function _toTracked(t) {
  if (t && typeof t === "object") return { name: t.name || "", id: t.id != null ? t.id : null };
  return { name: t || "", id: null };
}

/**
 * Recent W/D/L for the tracked team (newest-first) with a W/D/L summary.
 * `tracked` is a name or `{ name, id }`. Returns null when there's no tracked
 * team (an empty name must not match every team) or no usable finished result.
 */
export function computeForm(attrs, trackedTeam, max = 10) {
  const tracked = _toTracked(trackedTeam);
  if (!tracked.name && tracked.id == null) return null;
  const a = attrs || {};
  const finished = (Array.isArray(a.previous_matches) && a.previous_matches.length)
    ? a.previous_matches
    : (Array.isArray(a.matches) ? a.matches : []).filter((m) => m.state === "post");
  const results = [];
  for (const m of finished) {
    const isHome = matchSideIsTeam(m, "home", tracked);
    const isAway = matchSideIsTeam(m, "away", tracked);
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
  // Only use the direct list when it actually has rows, so an empty standings
  // array doesn't block a populated standings_groups fallback.
  const direct = Array.isArray(a.standings) ? a.standings : [];
  const grouped = a.standings_groups && a.standings_groups[0] && a.standings_groups[0].standings;
  const table = direct.length ? direct : (Array.isArray(grouped) ? grouped : []);
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
