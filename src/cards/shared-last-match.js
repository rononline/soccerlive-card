// Pure helpers for the Last Match card: pick the most recent finished match and
// extract its goalscorers. Kept free of Home Assistant / Lit so it can be unit
// tested directly.

// Sortable timestamp from either an ISO `date_iso` or the "DD-MM-YYYY HH:MM"
// display date, so matches from the full and the compact list compare cleanly.
function _dateKey(match) {
  const raw = String(match?.date_iso || match?.date || '');
  const iso = Date.parse(raw);
  if (!Number.isNaN(iso)) return iso;
  const m = raw.match(/^(\d{2})[-/](\d{2})[-/](\d{4})(?:\s+(\d{2}):(\d{2}))?/);
  if (m) return new Date(+m[3], +m[2] - 1, +m[1], +(m[4] || 0), +(m[5] || 0)).getTime();
  return 0;
}

/**
 * Return the most recently finished match, or null.
 *
 * Prefers a finished match from the primary `matches` list because those carry
 * full detail (scorers, statistics) while the integration keeps them around;
 * once they roll off it falls back to the compact `previous_matches` list.
 */
export function pickLastMatch(attributes) {
  const matches = Array.isArray(attributes?.matches) ? attributes.matches : [];
  const previous = Array.isArray(attributes?.previous_matches) ? attributes.previous_matches : [];
  const finished = matches.filter(m => m && m.state === 'post');
  const compact = previous.filter(m => m && (m.state === 'post' || m.state == null));
  const pool = finished.length ? finished : compact;
  if (!pool.length) return null;
  return [...pool].sort((a, b) => _dateKey(b) - _dateKey(a))[0];
}
