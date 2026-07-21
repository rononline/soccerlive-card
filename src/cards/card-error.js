import { html } from 'lit-element';
import { syncStatusInfo } from './sync-status.js';

// For real errors: wrong entity, integration down, timeout (red accent)
export const renderCardError = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 20px 18px; text-align: center; color: var(--cl-live, var(--error-color, #ef5350)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(239,68,68,0.24)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.24));">
    <div style="font-size: 26px; margin-bottom: 10px;">${icon}</div>
    <div style="font-size: 14px; font-weight: 800; margin-bottom: 5px; color: var(--cl-text, var(--primary-text-color));">${title}</div>
    <div style="font-size: 12px; color: var(--cl-text-2, var(--secondary-text-color)); margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-surface, rgba(0,0,0,0.1)); border: 1px solid var(--cl-divider, transparent); padding: 8px; border-radius: 8px; margin-top: 8px;">${hint}</div>` : ''}
  </ha-card>
`;

// Render the integration's sync_status (first fetch / rate limit / auth / provider
// down) as a state card, or null when the status is "ready"/unknown so the card
// falls through to its own empty handling. `t` is the card's translate function.
export const renderSyncStatus = (syncStatus, t) => {
  const info = syncStatusInfo(syncStatus);
  if (!info) return null;
  const title = t(info.title);
  const sub = t(info.sub);
  return info.kind === 'error'
    ? renderCardError(info.icon, title, sub, t('ui.check_integration'))
    : renderInfoState(info.icon, title, sub);
};

// For expected empty states: off-season, no live match, endpoint not supported (neutral)
export const renderInfoState = (icon, title, message, hint = null) => html`
  <ha-card style="padding: 26px 18px; text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); background: var(--cl-bg, var(--card-background-color)); border: 1px solid var(--cl-glass-border, rgba(255,255,255,0.10)); border-radius: 18px; box-shadow: 0 4px 24px var(--cl-shadow, rgba(0,0,0,0.20));">
    <div style="font-size: 32px; margin-bottom: 12px; opacity: 0.55;">${icon}</div>
    <div style="font-size: 13px; font-weight: 800; margin-bottom: 4px; color: var(--cl-text, var(--primary-text-color));">${title}</div>
    <div style="font-size: 12px; opacity: 0.78; margin-bottom: 8px;">${message}</div>
    ${hint ? html`<div style="font-size: 11px; opacity: 0.62; margin-top: 8px;">${hint}</div>` : ''}
  </ha-card>
`;

