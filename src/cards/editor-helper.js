import { html, css } from 'lit';

export const editorStyles = css`
  .editor-section { margin-bottom: 20px; }
  .editor-section h3 { margin: 12px 0 8px; font-size: 13px; text-transform: uppercase; color: var(--secondary-text-color); }
  .editor-field { margin-bottom: 12px; }
  .field-label { display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color); }
  .field-hint { display: block; font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
  select, input, ha-entity-picker { width: 100%; }
  .field-info { background: rgba(33, 150, 243, 0.1); border-left: 3px solid var(--primary-color); padding: 8px 12px; border-radius: 2px; font-size: 12px; margin-top: 8px; }
  .field-warning { background: rgba(255, 152, 0, 0.1); border-left: 3px solid #ff9800; padding: 8px 12px; border-radius: 2px; font-size: 12px; margin-top: 8px; }
`;

// Languages offered by the cards (besides "" = inherit / HA locale).
const LANGUAGE_CODES = ['en', 'nl', 'de', 'pt', 'fr', 'es', 'it'];

function _fireConfig(host, next) {
  if (typeof host._fireConfigChanged === 'function') return host._fireConfigChanged(next);
  if (typeof host._fire === 'function') return host._fire(next);
  host._config = next;
  host.dispatchEvent(new CustomEvent('config-changed', { detail: { config: next }, bubbles: true, composed: true }));
  host.requestUpdate?.();
}

/**
 * Shared language selector. The empty option inherits the language (the sensor's
 * shared card_defaults.language if set, else the HA locale) and shows that
 * explicitly, e.g. "nl · shared", consistently across every card editor.
 */
export function renderLanguageControl(host, config, t) {
  const label = (k) => (typeof t === 'function' ? t(k) : k);
  const entityId = config?.entity || (config?.entities && config.entities[0]);
  const sharedLang = entityId && host?.hass?.states?.[entityId]?.attributes?.card_defaults?.language;
  const current = config?.language || '';
  const autoLabel = sharedLang ? `${sharedLang} · ${label('skin.shared')}` : label('lang.auto');
  return html`
    <label class="field-label">${label('editor.language')}</label>
    <select @change=${(e) => _fireConfig(host, { ...config, language: e.target.value })}>
      <option value="" ?selected=${!current}>${autoLabel}</option>
      ${LANGUAGE_CODES.map((l) => html`<option value="${l}" ?selected=${current === l}>${l}</option>`)}
    </select>
  `;
}

export const renderFieldGroup = (label, hint, content) => html`
  <div class="editor-field">
    <label class="field-label">${label}</label>
    ${content}
    ${hint ? html`<span class="field-hint">${hint}</span>` : ''}
  </div>
`;

export const renderEntitySelector = (label, hint, currentValue, callback, filterFn = null) => html`
  <div class="editor-field">
    <label class="field-label">${label}</label>
    <select @change=${(e) => callback(e.target.value)}>
      ${!currentValue ? html`<option value="">— select —</option>` : ''}
      <option value="${currentValue}" selected>${currentValue || 'Select entity'}</option>
    </select>
    ${hint ? html`<span class="field-hint">${hint}</span>` : ''}
  </div>
`;

export const renderSelector = (label, hint, options, currentValue, callback, infoText = null) => html`
  <div class="editor-field">
    <label class="field-label">${label}</label>
    <select @change=${(e) => callback(e.target.value)}>
      ${options.map(opt => html`<option value="${opt}" ?selected=${opt === currentValue}>${opt}</option>`)}
    </select>
    ${hint ? html`<span class="field-hint">${hint}</span>` : ''}
    ${infoText ? html`<div class="field-info">ℹ️ ${infoText}</div>` : ''}
  </div>
`;

export const renderToggle = (label, hint, checked, callback, warningText = null) => html`
  <div class="editor-field">
    <label style="display: flex; align-items: center; gap: 8px;">
      <input type="checkbox" .checked=${checked} @change=${(e) => callback(e.target.checked)} />
      <span class="field-label" style="margin: 0;">${label}</span>
    </label>
    ${hint ? html`<span class="field-hint">${hint}</span>` : ''}
    ${warningText ? html`<div class="field-warning">⚠️ ${warningText}</div>` : ''}
  </div>
`;

export const renderNumberInput = (label, hint, min, max, value, callback, infoText = null) => html`
  <div class="editor-field">
    <label class="field-label">${label}</label>
    <input type="number" min="${min}" max="${max}" .value=${value} @change=${(e) => callback(parseInt(e.target.value, 10))} />
    ${hint ? html`<span class="field-hint">${hint}</span>` : ''}
    ${infoText ? html`<div class="field-info">ℹ️ ${infoText}</div>` : ''}
  </div>
`;

export const renderSection = (title, ...fields) => html`
  <div class="editor-section">
    <h3>${title}</h3>
    ${fields}
  </div>
`;
