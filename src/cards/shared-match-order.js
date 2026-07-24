import { parseMatchTimestamp } from '../i18n.js';

export function isFinishedMatch(match) {
  if (match?.state) return match.state === 'post';
  return ['full time', 'finished', 'final', 'einde wedstrijd']
    .includes(String(match?.status || '').trim().toLowerCase());
}

export function matchTimestamp(match) {
  return parseMatchTimestamp(match?.date_iso) || parseMatchTimestamp(match?.date) || null;
}

export function sortMatchesByStateAndDate(matches) {
  const rank = state => state === 'in' ? 0 : state === 'pre' ? 1 : state === 'post' ? 2 : 3;
  return [...(Array.isArray(matches) ? matches : [])].sort((a, b) => {
    const stateDiff = rank(a?.state) - rank(b?.state);
    if (stateDiff) return stateDiff;
    const aTime = matchTimestamp(a);
    const bTime = matchTimestamp(b);
    if (aTime === null && bTime === null) return 0;
    if (aTime === null) return 1;
    if (bTime === null) return -1;
    return a?.state === 'post' ? bTime - aTime : aTime - bTime;
  });
}
