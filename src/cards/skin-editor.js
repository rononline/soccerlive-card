import { html } from 'lit';
import {
  APPEARANCE_OPTIONS, PALETTE_OPTIONS, PALETTE_SWATCHES,
  resolveAppearance, resolvePalette, mergeCardDefaults,
} from '../skin-config.js';
import { normalizeCssColor, contrastRatio } from '../skin-colors.js';

// Default background / text per appearance, so the contrast check can fill the
// colour the user didn't customise (ha uses theme colours, unknown at edit time).
const APPEARANCE_BG = { dark: '#12141f', light: '#f6f8fc' };
const APPEARANCE_TEXT = { dark: '#f4f6fb', light: '#0f172a' };
const APPEARANCE_TEXT2 = { dark: '#aab2c5', light: '#5a6472' };
const CUSTOM_DEFAULT_ACCENT = '#6366f1';

// Custom-palette colour fields, split into a simple set and an advanced set.
const SIMPLE_FIELDS = [
  ['accent_color', 'skin.custom_accent'],
  ['accent_2_color', 'skin.custom_accent_2'],
  ['background_color', 'skin.custom_background'],
  ['text_color', 'skin.custom_text'],
];
const ADVANCED_FIELDS = [
  ['live_color', 'skin.custom_live'],
  ['gold_color', 'skin.custom_gold'],
  ['surface_color', 'skin.custom_surface'],
  ['card_color', 'skin.custom_card'],
  ['secondary_text_color', 'skin.custom_text_2'],
  ['divider_color', 'skin.custom_divider'],
  ['chip_color', 'skin.custom_chip'],
];
const RESET_KEYS = [...SIMPLE_FIELDS, ...ADVANCED_FIELDS].map(([k]) => k);

// WCAG AA: 4.5 for normal text, 3 for large text / UI accents.
const MIN_TEXT_CONTRAST = 4.5;
const MIN_UI_CONTRAST = 3;

function fireConfig(host, next) {
  if (typeof host._fireConfigChanged === 'function') return host._fireConfigChanged(next);
  if (typeof host._fire === 'function') return host._fire(next);
  host._config = next;
  host.dispatchEvent(new CustomEvent('config-changed', {
    detail: { config: next }, bubbles: true, composed: true,
  }));
  host.requestUpdate?.();
}

function colorField(config, key, lkey, label, setField) {
  const value = config?.[key] || '';
  const colorValue = /^#[0-9a-f]{6}$/i.test(value) ? value : '#6366f1';
  return html`
    <label class="custom-skin-field">
      <span>${label(lkey)}</span>
      <input type="color" .value=${colorValue} @input=${(ev) => setField(key, ev.target.value)}>
      <input type="text" .value=${value} placeholder="#6366f1" @change=${(ev) => setField(key, ev.target.value)}>
    </label>
  `;
}

/**
 * Shared appearance + palette picker. `t` localises labels (falls back to the
 * raw key). The palette is chosen from colour swatches; the custom palette adds
 * simple + advanced colour inputs, a contrast warning and a reset.
 */
export function renderSkinControls(host, config, t) {
  const label = (k) => (typeof t === 'function' ? t(k) : k);
  const setField = (key, value) => fireConfig(host, { ...config, [key]: value });
  const clearField = (key) => { const next = { ...config }; delete next[key]; fireConfig(host, next); };

  // Shared per-sensor defaults, so the editor shows the EFFECTIVE look (what the
  // card actually renders, including inherited values) rather than the local
  // fallback.
  const entityId = config?.entity || (config?.entities && config.entities[0]);
  const shared = (entityId && host?.hass?.states?.[entityId]?.attributes?.card_defaults) || {};
  const effective = mergeCardDefaults(config, shared);
  const appearance = resolveAppearance(effective);
  const palette = resolvePalette(effective);
  const appearanceSet = typeof config?.appearance === 'string';
  const paletteSet = typeof config?.palette === 'string';
  // Legacy skin fixes both axes, so "inherit" isn't meaningful then.
  const legacySkin = typeof config?.skin === 'string';
  const inheritLabel = (sharedVal, options) => {
    if (!sharedVal) return label('skin.default');
    const opt = options.find(([v]) => v === sharedVal);
    return `${opt ? label(opt[1]) : sharedVal} · ${label('skin.shared')}`;
  };

  // Contrast check for a custom palette: warn if text, secondary text or the
  // accent doesn't stand out against the background. Missing colours are filled
  // from the chosen appearance, so a change to only the text OR the background is
  // still checked. (ha appearance uses theme colours we can't know here.)
  let contrastWarn = false;
  if (palette === 'custom') {
    const bg = normalizeCssColor(config?.background_color) || APPEARANCE_BG[appearance];
    if (bg) {
      const low = (key, fallback, min) => {
        const c = normalizeCssColor(config?.[key]) || fallback;
        const r = c ? contrastRatio(bg, c) : null;
        return r !== null && r < min;
      };
      contrastWarn = low('text_color', APPEARANCE_TEXT[appearance], MIN_TEXT_CONTRAST)
        || low('secondary_text_color', APPEARANCE_TEXT2[appearance], MIN_TEXT_CONTRAST)
        || low('accent_color', CUSTOM_DEFAULT_ACCENT, MIN_UI_CONTRAST);
    }
  }

  return html`
    <style>
      .skin-controls { display: grid; gap: 12px; }
      .skin-row > .skin-label { font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin-bottom: 6px; }
      .skin-seg { display: inline-flex; border: 1px solid var(--divider-color, rgba(255,255,255,0.14)); border-radius: 8px; overflow: hidden; }
      .skin-seg button {
        border: 0; padding: 7px 12px; font-size: 12px; cursor: pointer;
        background: transparent; color: var(--primary-text-color, #fff);
        border-right: 1px solid var(--divider-color, rgba(255,255,255,0.14));
      }
      .skin-seg button:last-child { border-right: 0; }
      .skin-seg button.sel { background: var(--primary-color, #3b82f6); color: #fff; }
      .skin-swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(84px, 1fr)); gap: 8px; }
      .skin-swatch {
        display: flex; align-items: center; gap: 7px; padding: 6px 8px; cursor: pointer;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.14)); border-radius: 8px;
        background: transparent; color: var(--primary-text-color, #fff); font-size: 11px; text-align: left;
      }
      .skin-swatch.sel { border-color: var(--primary-color, #3b82f6); box-shadow: 0 0 0 1px var(--primary-color, #3b82f6); }
      .skin-swatch .dot {
        width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
        border: 1px solid rgba(127,127,127,0.4);
      }
      .skin-swatch span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .custom-skin-fields {
        display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding: 10px;
        border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); border-radius: 8px; background: rgba(127,127,127,0.08);
      }
      .custom-skin-field { display: grid; grid-template-columns: auto 34px; gap: 6px; align-items: center; min-width: 0; }
      .custom-skin-field span { grid-column: 1 / -1; font-size: 11px; font-weight: 700; color: var(--secondary-text-color); }
      .custom-skin-field input[type="color"] { width: 34px; height: 34px; padding: 0; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent; }
      .custom-skin-field input[type="text"] { min-width: 0; width: 100%; box-sizing: border-box; padding: 8px 9px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff); font-size: 13px; }
      .skin-adv { margin-top: 8px; }
      .skin-adv summary { cursor: pointer; font-size: 12px; font-weight: 600; color: var(--secondary-text-color); margin: 4px 0 8px; }
      .skin-warn { display: flex; gap: 6px; align-items: center; margin-top: 8px; font-size: 12px; color: var(--warning-color, #f59e0b); }
      .skin-reset { margin-top: 10px; justify-self: start; padding: 6px 12px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent; color: var(--primary-text-color, #fff); font-size: 12px; cursor: pointer; }
      @media (max-width: 520px) { .custom-skin-fields { grid-template-columns: 1fr; } }
    </style>
    <div class="skin-controls">
      <div class="skin-row">
        <div class="skin-label">${label('skin.appearance')}</div>
        <div class="skin-seg" role="group" aria-label=${label('skin.appearance')}>
          ${!legacySkin ? html`
            <button type="button" class=${!appearanceSet ? 'sel' : ''} aria-pressed=${!appearanceSet} @click=${() => clearField('appearance')}>${inheritLabel(shared.appearance, APPEARANCE_OPTIONS)}</button>
          ` : ''}
          ${APPEARANCE_OPTIONS.map(([val, key]) => html`
            <button type="button" class=${config?.appearance === val ? 'sel' : ''} aria-pressed=${config?.appearance === val} @click=${() => setField('appearance', val)}>${label(key)}</button>
          `)}
        </div>
      </div>
      <div class="skin-row">
        <div class="skin-label">${label('skin.palette')}</div>
        <div class="skin-swatches" role="group" aria-label=${label('skin.palette')}>
          ${!legacySkin ? html`
            <button type="button" class="skin-swatch ${!paletteSet ? 'sel' : ''}" aria-pressed=${!paletteSet} @click=${() => clearField('palette')}>
              <span class="dot" style="background:${shared.palette && PALETTE_SWATCHES[shared.palette]
                ? `linear-gradient(135deg, ${PALETTE_SWATCHES[shared.palette][0]} 50%, ${PALETTE_SWATCHES[shared.palette][1]} 50%)`
                : 'repeating-linear-gradient(135deg,#888 0 4px,#aaa 4px 8px)'}"></span>
              <span>${inheritLabel(shared.palette, PALETTE_OPTIONS)}</span>
            </button>
          ` : ''}
          ${PALETTE_OPTIONS.map(([val, key]) => {
            const [c1, c2] = PALETTE_SWATCHES[val] || ['#6366f1', '#ec4899'];
            return html`
              <button type="button" class="skin-swatch ${config?.palette === val ? 'sel' : ''}" aria-pressed=${config?.palette === val} title=${label(key)} @click=${() => setField('palette', val)}>
                <span class="dot" style="background:linear-gradient(135deg, ${c1} 50%, ${c2} 50%)"></span>
                <span>${label(key)}</span>
              </button>
            `;
          })}
        </div>
      </div>
      ${palette === 'custom' ? html`
        <div>
          <div class="custom-skin-fields">
            ${SIMPLE_FIELDS.map(([key, lkey]) => colorField(config, key, lkey, label, setField))}
          </div>
          ${contrastWarn ? html`<div class="skin-warn">⚠️ ${label('skin.contrast_warning')}</div>` : ''}
          <details class="skin-adv">
            <summary>${label('skin.advanced')}</summary>
            <div class="custom-skin-fields">
              ${ADVANCED_FIELDS.map(([key, lkey]) => colorField(config, key, lkey, label, setField))}
            </div>
          </details>
          <button type="button" class="skin-reset" @click=${() => {
            const next = { ...config };
            for (const k of RESET_KEYS) delete next[k];
            fireConfig(host, next);
          }}>${label('skin.custom_reset')}</button>
        </div>
      ` : ''}
    </div>
  `;
}
