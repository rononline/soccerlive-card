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
  if (!domain || !name) return false;
  const serviceData = {
    ...(attrs.detail_service_data || {}),
    match_id: String(match.event_id),
  };
  // Soccer Live's response-enabled service can return details immediately over
  // HA's existing call_service WebSocket command. Third-party providers that
  // only expose a fire-and-refresh service keep using the legacy fallback.
  if (domain === 'soccer_live' && typeof hass?.callWS === 'function') {
    const result = await hass.callWS({
      type: 'call_service',
      domain,
      service: name,
      service_data: serviceData,
      return_response: true,
    });
    const response = result?.response ?? result?.service_response ?? result;
    const loaded = response?.match;
    if (loaded && typeof loaded === 'object') Object.assign(match, loaded);
    return Boolean(loaded);
  }
  if (typeof hass?.callService !== 'function') return false;
  await hass.callService(domain, name, serviceData);
  return true;
}

export function updatedMatch(attrs, eventId) {
  if (!eventId) return null;
  if (String(attrs?.next_match?.event_id) === String(eventId)) return attrs.next_match;
  return (attrs?.matches || []).find(match => String(match.event_id) === String(eventId)) || null;
}
