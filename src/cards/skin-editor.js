import { html } from 'lit';
import { resolveSkin } from '../skins.js';

const CUSTOM_SKIN_FIELDS = [
  ['accent_color', 'Accent'],
  ['accent_2_color', 'Accent 2'],
  ['background_color', 'Background'],
  ['text_color', 'Text'],
];

export function renderSkinColorControls(host, config) {
  if (resolveSkin(config) !== 'custom') return html``;

  const update = (key, value) => {
    const next = { ...config, [key]: value };
    if (typeof host._fireConfigChanged === 'function') {
      host._fireConfigChanged(next);
    } else if (typeof host._fire === 'function') {
      host._fire(next);
    } else {
      host._config = next;
      host.dispatchEvent(new CustomEvent('config-changed', {
        detail: { config: next },
        bubbles: true,
        composed: true,
      }));
      host.requestUpdate?.();
    }
  };

  return html`
    <style>
      .custom-skin-fields {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 8px;
        padding: 10px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
        border-radius: 8px;
        background: rgba(127,127,127,0.08);
      }
      .custom-skin-field {
        display: grid;
        grid-template-columns: auto 34px;
        gap: 6px;
        align-items: center;
        min-width: 0;
      }
      .custom-skin-field span {
        grid-column: 1 / -1;
        font-size: 11px;
        font-weight: 700;
        color: var(--secondary-text-color);
      }
      .custom-skin-field input[type="color"] {
        width: 34px;
        height: 34px;
        padding: 0;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
        border-radius: 6px;
        background: transparent;
      }
      .custom-skin-field input[type="text"] {
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
        padding: 8px 9px;
        border-radius: 6px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12));
        background: var(--card-background-color, #1c1c1c);
        color: var(--primary-text-color, #fff);
        font-size: 13px;
      }
      @media (max-width: 520px) {
        .custom-skin-fields { grid-template-columns: 1fr; }
      }
    </style>
    <div class="custom-skin-fields">
      ${CUSTOM_SKIN_FIELDS.map(([key, label]) => {
        const value = config?.[key] || '';
        const colorValue = /^#[0-9a-f]{6}$/i.test(value) ? value : '#6366f1';
        return html`
          <label class="custom-skin-field">
            <span>${label}</span>
            <input
              type="color"
              .value=${colorValue}
              @input=${(ev) => update(key, ev.target.value)}
            >
            <input
              type="text"
              .value=${value}
              placeholder="#6366f1"
              @change=${(ev) => update(key, ev.target.value)}
            >
          </label>
        `;
      })}
    </div>
  `;
}
