import { html } from 'lit';
import { APPEARANCE_OPTIONS, PALETTE_OPTIONS, resolveAppearance, resolvePalette } from '../skin-config.js';

// Custom-palette colour fields: [config key, i18n key].
const CUSTOM_SKIN_FIELDS = [
  ['accent_color', 'skin.custom_accent'],
  ['accent_2_color', 'skin.custom_accent_2'],
  ['background_color', 'skin.custom_background'],
  ['text_color', 'skin.custom_text'],
];

const CUSTOM_RESET_KEYS = CUSTOM_SKIN_FIELDS.map(([k]) => k);

function fireConfig(host, next) {
  if (typeof host._fireConfigChanged === 'function') return host._fireConfigChanged(next);
  if (typeof host._fire === 'function') return host._fire(next);
  host._config = next;
  host.dispatchEvent(new CustomEvent('config-changed', {
    detail: { config: next }, bubbles: true, composed: true,
  }));
  host.requestUpdate?.();
}

/**
 * Shared appearance + palette selectors (and, for the custom palette, colour
 * inputs with a reset). `t` localises labels; falls back to the raw key.
 */
export function renderSkinControls(host, config, t) {
  const label = (k) => (typeof t === 'function' ? t(k) : k);
  const appearance = resolveAppearance(config);
  const palette = resolvePalette(config);

  const setField = (key, value) => fireConfig(host, { ...config, [key]: value });

  return html`
    <style>
      .skin-controls { display: grid; gap: 10px; }
      .skin-row { display: grid; gap: 4px; }
      .skin-row label { font-size: 12px; font-weight: 600; color: var(--secondary-text-color); }
      .skin-row select {
        width: 100%; box-sizing: border-box; padding: 8px 9px; border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
        background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff);
        font-size: 13px;
      }
      .custom-skin-fields {
        display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 10px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); border-radius: 8px;
        background: rgba(127,127,127,0.08);
      }
      .custom-skin-field { display: grid; grid-template-columns: auto 34px; gap: 6px; align-items: center; min-width: 0; }
      .custom-skin-field span { grid-column: 1 / -1; font-size: 11px; font-weight: 700; color: var(--secondary-text-color); }
      .custom-skin-field input[type="color"] {
        width: 34px; height: 34px; padding: 0; border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent;
      }
      .custom-skin-field input[type="text"] {
        min-width: 0; width: 100%; box-sizing: border-box; padding: 8px 9px; border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
        background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff); font-size: 13px;
      }
      .custom-skin-reset {
        grid-column: 1 / -1; justify-self: start; margin-top: 2px; padding: 6px 12px; border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent;
        color: var(--primary-text-color, #fff); font-size: 12px; cursor: pointer;
      }
      @media (max-width: 520px) { .custom-skin-fields { grid-template-columns: 1fr; } }
    </style>
    <div class="skin-controls">
      <div class="skin-row">
        <label>${label('skin.appearance')}</label>
        <select data-config-value="appearance" @change=${(e) => setField('appearance', e.target.value)}>
          ${APPEARANCE_OPTIONS.map(([val, key]) => html`<option value="${val}" ?selected=${appearance === val}>${label(key)}</option>`)}
        </select>
      </div>
      <div class="skin-row">
        <label>${label('skin.palette')}</label>
        <select data-config-value="palette" @change=${(e) => setField('palette', e.target.value)}>
          ${PALETTE_OPTIONS.map(([val, key]) => html`<option value="${val}" ?selected=${palette === val}>${label(key)}</option>`)}
        </select>
      </div>
      ${palette === 'custom' ? html`
        <div class="custom-skin-fields">
          ${CUSTOM_SKIN_FIELDS.map(([key, lkey]) => {
            const value = config?.[key] || '';
            const colorValue = /^#[0-9a-f]{6}$/i.test(value) ? value : '#6366f1';
            return html`
              <label class="custom-skin-field">
                <span>${label(lkey)}</span>
                <input type="color" .value=${colorValue} @input=${(ev) => setField(key, ev.target.value)}>
                <input type="text" .value=${value} placeholder="#6366f1" @change=${(ev) => setField(key, ev.target.value)}>
              </label>
            `;
          })}
          <button class="custom-skin-reset" @click=${() => {
            const next = { ...config };
            for (const k of CUSTOM_RESET_KEYS) delete next[k];
            fireConfig(host, next);
          }}>${label('skin.custom_reset')}</button>
        </div>
      ` : ''}
    </div>
  `;
}

// Backwards-compatible name for the previous helper (custom colour block only).
export const renderSkinColorControls = renderSkinControls;
