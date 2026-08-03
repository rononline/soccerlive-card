const seenByCard = new WeakMap();

export function claimLiveEvent(card, data, ttl = 120000) {
  const uid = data?.event_uid;
  if (!uid) return true;
  const now = Date.now();
  const seen = seenByCard.get(card) || new Map();
  for (const [key, timestamp] of seen) {
    if (now - timestamp > ttl) seen.delete(key);
  }
  if (seen.has(uid)) return false;
  seen.set(uid, now);
  seenByCard.set(card, seen);
  return true;
}

export function liveEventToast(translate, eventType, data) {
  if (eventType === 'soccer_live_goal') return {
    message: `${translate('event.goal').toUpperCase()}! ${data.player || ''} · ${data.home_team} ${data.home_score} - ${data.away_score} ${data.away_team}`,
    variant: 'goal',
  };
  if (eventType === 'soccer_live_goal_cancelled') return {
    message: `↩ ${translate('event.goal_cancelled')} · ${data.home_team} ${data.home_score} - ${data.away_score} ${data.away_team}`,
    variant: 'red',
  };
  if (eventType === 'soccer_live_yellow_card' || eventType === 'soccer_live_red_card') {
    const red = eventType.includes('red');
    return {
      message: `${red ? '🟥' : '🟨'} ${translate(red ? 'event.red_card' : 'event.yellow_card')} · ${data.player || ''}${data.minute ? ` (${data.minute}')` : ''}`,
      variant: red ? 'red' : 'yellow',
    };
  }
  if (eventType === 'soccer_live_match_finished') return {
    message: `${translate('status.finished')}! ${data.home_team} ${data.home_score} - ${data.away_score} ${data.away_team}`,
    variant: 'finished',
  };
  if (eventType.endsWith('_changed')) return {
    message: `🗓 ${translate('event.fixture_changed')} · ${data.home_team} – ${data.away_team}`,
    variant: 'yellow',
  };
  return null;
}
