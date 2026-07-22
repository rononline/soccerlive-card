export function matchHasDetails(match) {
  return match?.detail_loaded === true || Boolean(
    match?.key_events?.length || match?.lineup_home?.length || match?.lineup_away?.length ||
    Object.keys(match?.home_statistics || {}).length || match?.momentum?.length || match?.shotmap?.length
  );
}

export async function requestMatchDetails(hass, attrs, match) {
  const service = attrs?.detail_service;
  if (!service || !match?.event_id || matchHasDetails(match)) return false;
  const [domain, name] = String(service).split('.', 2);
  if (!domain || !name || typeof hass?.callService !== 'function') return false;
  await hass.callService(domain, name, {
    ...(attrs.detail_service_data || {}),
    match_id: String(match.event_id),
  });
  return true;
}

export function updatedMatch(attrs, eventId) {
  if (!eventId) return null;
  if (String(attrs?.next_match?.event_id) === String(eventId)) return attrs.next_match;
  return (attrs?.matches || []).find(match => String(match.event_id) === String(eventId)) || null;
}
