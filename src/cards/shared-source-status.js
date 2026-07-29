import { html, css } from 'lit';

const LABELS = {
  schedule: 'card.schedule',
  preview: 'match.preview',
  lineup: 'tab.lineup',
  timeline: 'tab.timeline',
  statistics: 'tab.stats',
  review: 'match.review',
};

function ageMinutes(value, now = Date.now()) {
  const timestamp = value ? new Date(value).getTime() : NaN;
  return Number.isFinite(timestamp)
    ? Math.max(0, Math.round((now - timestamp) / 60000))
    : null;
}

export function sourceSectionModel(match, fallbackProvider = '', fallbackUpdated = null) {
  const explicit = match?.source_sections;
  if (explicit && typeof explicit === 'object') {
    return Object.entries(explicit).map(([section, item]) => ({
      section,
      label: LABELS[section] || 'popup.parts',
      available: item.available === true,
      provider: item.provider || fallbackProvider,
      age: ageMinutes(item.updated_at || fallbackUpdated),
      enriched: item.enriched === true,
    }));
  }
  const available = match?.detail_capabilities || [];
  return Object.keys(LABELS).map(section => ({
    section,
    label: LABELS[section],
    available: section === 'schedule' || available.includes(section),
    provider: fallbackProvider,
    age: ageMinutes(fallbackUpdated),
    enriched: false,
  }));
}

export function renderSourceSections(match, options = {}) {
  const model = sourceSectionModel(match, options.provider, options.updatedAt);
  if (!model.some(item => item.available) || !model.some(item => item.enriched || !item.available)) return '';
  const t = options.t || (key => key);
  return html`<section class="source-status">
    <h5>${t('source.sections')}</h5>
    <div>${model.map(item => html`<span class="${item.available ? 'ok' : 'missing'} ${item.enriched ? 'enriched' : ''}">
      <b>${t(item.label)}</b>
      <small>${item.available
        ? `${item.provider || '—'}${item.age != null ? ` · ${t('popup.updated_minutes', { n: item.age })}` : ''}`
        : t('source.not_available')}</small>
    </span>`)}</div>
  </section>`;
}

export const sourceStatusStyles = css`
  .source-status{margin:10px 0;padding:10px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}
  .source-status h5{margin:0 0 7px;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em}
  .source-status>div{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}
  .source-status span{min-width:0;padding:6px;border-radius:7px;background:var(--cl-chip-bg)}
  .source-status span.enriched{box-shadow:inset 2px 0 var(--cl-accent)}
  .source-status span.missing{opacity:.58}
  .source-status b,.source-status small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  .source-status b{font-size:8px}.source-status small{margin-top:2px;color:var(--cl-text-2);font-size:7px}
  @media(max-width:380px){.source-status>div{grid-template-columns:repeat(2,minmax(0,1fr))}}
`;
