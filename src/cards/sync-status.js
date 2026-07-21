// Maps the integration's `sync_status` attribute to a card state descriptor, so
// a card can show concrete text during the first fetch (or on a provider/auth
// problem) instead of an empty card that looks like a misconfiguration.
//
// Pure and lit-free so it can be unit-tested without a DOM. Returns null for
// "ready" and unknown values, so the card falls through to its normal handling.
export function syncStatusInfo(syncStatus) {
  switch (syncStatus) {
    case 'initializing':
    case 'fetching':
      return { kind: 'info', icon: '⏳', title: 'ui.sync_fetching', sub: 'ui.sync_fetching_hint' };
    case 'rate_limited':
      return { kind: 'info', icon: '⏱', title: 'ui.sync_rate_limited', sub: 'ui.sync_rate_limited_hint' };
    case 'authentication_failed':
      return { kind: 'error', icon: '🔑', title: 'ui.sync_auth_failed', sub: 'ui.sync_auth_failed_hint' };
    case 'provider_unavailable':
      return { kind: 'error', icon: '📡', title: 'ui.sync_provider_unavailable', sub: 'ui.sync_provider_unavailable_hint' };
    default:
      return null;
  }
}
