import { css, html } from 'lit';

const ICONS = {
  error: '!',
  warning: '⚠',
  info: 'ⓘ',
};

export function alertsForMatch(alerts, match) {
  if (!Array.isArray(alerts)) return [];
  const eventId = String(match?.event_id || '');
  const canonicalId = String(match?.canonical_id || '');
  return alerts.filter(alert => {
    if (!alert || typeof alert !== 'object') return false;
    if (!alert.event_id && !alert.canonical_id) return true;
    return (eventId && String(alert.event_id) === eventId)
      || (canonicalId && String(alert.canonical_id) === canonicalId);
  });
}

export function renderDataAlerts(alerts, { t, compact = false } = {}) {
  if (!Array.isArray(alerts) || !alerts.length) return '';
  return html`
    <section class="data-alerts ${compact ? 'compact' : ''}" role="status" aria-live="polite">
      ${alerts.map(alert => {
        const severity = ['error', 'warning', 'info'].includes(alert.severity)
          ? alert.severity : 'warning';
        return html`
          <div class="data-alert ${severity}">
            <b aria-hidden="true">${ICONS[severity]}</b>
            <span>${t?.(`alert.${alert.code}`, alert) || alert.code}</span>
          </div>
        `;
      })}
    </section>
  `;
}

export const dataAlertStyles = css`
  .data-alerts {
    display: grid;
    gap: 6px;
    margin: 10px 12px;
  }
  .data-alert {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid color-mix(in srgb, currentColor 28%, transparent);
    border-radius: 10px;
    background: color-mix(in srgb, currentColor 9%, transparent);
    color: var(--cl-warning, #f59e0b);
    font-size: 11px;
    line-height: 1.35;
  }
  .data-alert.error { color: var(--cl-live, #ef4444); }
  .data-alert.info { color: var(--cl-accent, #6366f1); }
  .data-alert b { flex: 0 0 14px; text-align: center; }
  .data-alerts.compact { margin: 10px 0 0; }
`;
