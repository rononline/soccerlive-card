import { parseMatchTimestamp } from '../i18n.js';

export function isFinishedMatch(match) {
  if (match?.state) return match.state === 'post';
  return ['full time', 'finished', 'final', 'einde wedstrijd']
    .includes(String(match?.status || '').trim().toLowerCase());
}

export function sortMatchesByStateAndDate(matches) {
  const rank = state => state === 'in' ? 0 : state === 'pre' ? 1 : state === 'post' ? 2 : 3;
  const time = match => parseMatchTimestamp(match?.date_iso) || parseMatchTimestamp(match?.date);
  return [...(Array.isArray(matches) ? matches : [])].sort((a, b) => {
    const stateDiff = rank(a?.state) - rank(b?.state);
    if (stateDiff) return stateDiff;
    return a?.state === 'post' ? time(b) - time(a) : time(a) - time(b);
  });
}
