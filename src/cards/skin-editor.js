import { html } from 'lit';
import {
  APPEARANCE_OPTIONS, PALETTE_OPTIONS, PALETTE_SWATCHES,
  resolveAppearance, resolvePalette, mergeCardDefaults,
  buildMigratedConfig, nextRadioIndex,
} from '../skin-config.js';
import { normalizeCssColor, contrastRatio } from '../skin-colors.js';
import { sharedVia } from './editor-helper.js';

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
// Background gradient + crest watermark (a club-branded look).
const BACKGROUND_KEYS = ['gradient_from', 'gradient_to', 'gradient_angle', 'background_image', 'watermark_opacity', 'watermark_size'];
const RESET_KEYS = [...SIMPLE_FIELDS, ...ADVANCED_FIELDS].map(([k]) => k).concat(BACKGROUND_KEYS);

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
  // Set a key, or remove it when the value is empty (keeps the config clean).
  const setOrClear = (key, value) => {
    const next = { ...config };
    if (value === '' || value === null || value === undefined) delete next[key];
    else next[key] = value;
    fireConfig(host, next);
  };

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
  const via = sharedVia(host, config, label);
  const inheritLabel = (sharedVal, options) => {
    if (!sharedVal) return label('skin.default');
    const opt = options.find(([v]) => v === sharedVal);
    return `${opt ? label(opt[1]) : sharedVal} · ${label('skin.shared')}${via}`;
  };
  // With a legacy skin, config.appearance/palette are absent, so highlight the
  // effective (resolved) values instead — otherwise nothing looks selected.
  const selectedAppearance = legacySkin ? appearance : config?.appearance;
  const selectedPalette = legacySkin ? palette : config?.palette;
  // Picking a value on a legacy-skin card migrates it to explicit appearance +
  // palette and drops `skin`, so the new fields aren't shadowed by the old one.
  const migrateFromSkin = (over) => fireConfig(host, buildMigratedConfig(config, appearance, palette, over));
  const pickAppearance = (val) => (legacySkin ? migrateFromSkin({ appearance: val }) : setField('appearance', val));
  const pickPalette = (val) => (legacySkin ? migrateFromSkin({ palette: val }) : setField('palette', val));
  // Arrow-key navigation across a radiogroup: move focus and select the sibling.
  const onGroupKeydown = (e) => {
    const btns = [...e.currentTarget.querySelectorAll('button')];
    const cur = btns.indexOf(e.target);
    const idx = nextRadioIndex(cur, btns.length, e.key);
    if (idx === cur) return;
    e.preventDefault();
    btns[idx].focus();
    btns[idx].click();
  };

  // Contrast check for a custom palette: warn if text, secondary text or the
  // accent doesn't stand out against the background. Missing colours are filled
  // from the chosen appearance, so a change to only the text OR the background is
  // still checked. (ha appearance uses theme colours we can't know here.)
  const contrastIssues = [];
  if (palette === 'custom') {
    // Check against both gradient endpoints when a gradient is set, else the
    // flat background / appearance default.
    const gFrom = normalizeCssColor(config?.gradient_from);
    const gTo = normalizeCssColor(config?.gradient_to);
    const bgs = (gFrom && gTo)
      ? [gFrom, gTo]
      : [normalizeCssColor(config?.background_color) || APPEARANCE_BG[appearance]].filter(Boolean);
    if (bgs.length) {
      const low = (key, fallback, min) => {
        const c = normalizeCssColor(config?.[key]) || fallback;
        if (!c) return false;
        return bgs.some((bg) => { const r = contrastRatio(bg, c); return r !== null && r < min; });
      };
      if (low('text_color', APPEARANCE_TEXT[appearance], MIN_TEXT_CONTRAST)) contrastIssues.push('skin.custom_text');
      if (low('secondary_text_color', APPEARANCE_TEXT2[appearance], MIN_TEXT_CONTRAST)) contrastIssues.push('skin.custom_text_2');
      if (low('accent_color', CUSTOM_DEFAULT_ACCENT, MIN_UI_CONTRAST)) contrastIssues.push('skin.custom_accent');
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
      .skin-bg-title { font-size: 11px; font-weight: 700; color: var(--secondary-text-color); margin: 10px 0 6px; }
      .skin-bg-field { display: grid; gap: 4px; margin-top: 8px; }
      .skin-bg-field span { font-size: 11px; font-weight: 600; color: var(--secondary-text-color); }
      .skin-bg-field input, .skin-bg-field select { padding: 8px 9px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color, #fff); font-size: 13px; box-sizing: border-box; }
      .skin-hint { font-size: 10px; color: var(--secondary-text-color); opacity: 0.8; }
      .skin-reset { margin-top: 10px; justify-self: start; padding: 6px 12px; border-radius: 6px; border: 1px solid var(--divider-color, rgba(255,255,255,0.12)); background: transparent; color: var(--primary-text-color, #fff); font-size: 12px; cursor: pointer; }
      @media (max-width: 520px) { .custom-skin-fields { grid-template-columns: 1fr; } }
    </style>
    <div class="skin-controls">
      <div class="skin-row">
        <div class="skin-label">${label('skin.appearance')}</div>
        <div class="skin-seg" role="radiogroup" aria-label=${label('skin.appearance')} @keydown=${onGroupKeydown}>
          ${!legacySkin ? html`
            <button type="button" role="radio" class=${!appearanceSet ? 'sel' : ''} aria-checked=${!appearanceSet} tabindex=${!appearanceSet ? '0' : '-1'} @click=${() => clearField('appearance')}>${inheritLabel(shared.appearance, APPEARANCE_OPTIONS)}</button>
          ` : ''}
          ${APPEARANCE_OPTIONS.map(([val, key]) => html`
            <button type="button" role="radio" class=${selectedAppearance === val ? 'sel' : ''} aria-checked=${selectedAppearance === val} tabindex=${selectedAppearance === val ? '0' : '-1'} @click=${() => pickAppearance(val)}>${label(key)}</button>
          `)}
        </div>
      </div>
      <div class="skin-row">
        <div class="skin-label">${label('skin.palette')}</div>
        <div class="skin-swatches" role="radiogroup" aria-label=${label('skin.palette')} @keydown=${onGroupKeydown}>
          ${!legacySkin ? html`
            <button type="button" role="radio" class="skin-swatch ${!paletteSet ? 'sel' : ''}" aria-checked=${!paletteSet} tabindex=${!paletteSet ? '0' : '-1'} @click=${() => clearField('palette')}>
              <span class="dot" style="background:${shared.palette && PALETTE_SWATCHES[shared.palette]
                ? `linear-gradient(135deg, ${PALETTE_SWATCHES[shared.palette][0]} 50%, ${PALETTE_SWATCHES[shared.palette][1]} 50%)`
                : 'repeating-linear-gradient(135deg,#888 0 4px,#aaa 4px 8px)'}"></span>
              <span>${inheritLabel(shared.palette, PALETTE_OPTIONS)}</span>
            </button>
          ` : ''}
          ${PALETTE_OPTIONS.map(([val, key]) => {
            const [c1, c2] = PALETTE_SWATCHES[val] || ['#6366f1', '#ec4899'];
            return html`
              <button type="button" role="radio" class="skin-swatch ${selectedPalette === val ? 'sel' : ''}" aria-checked=${selectedPalette === val} tabindex=${selectedPalette === val ? '0' : '-1'} title=${label(key)} @click=${() => pickPalette(val)}>
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
          ${contrastIssues.length ? html`<div class="skin-warn">⚠️ ${label('skin.contrast_warning')}: ${contrastIssues.map((k) => label(k)).join(', ')}</div>` : ''}
          <details class="skin-adv">
            <summary>${label('skin.advanced')}</summary>
            <div class="custom-skin-fields">
              ${ADVANCED_FIELDS.map(([key, lkey]) => colorField(config, key, lkey, label, setField))}
            </div>
            <div class="skin-bg-title">${label('skin.background')}</div>
            <div class="custom-skin-fields">
              ${colorField(config, 'gradient_from', 'skin.gradient_from', label, setField)}
              ${colorField(config, 'gradient_to', 'skin.gradient_to', label, setField)}
            </div>
            <label class="skin-bg-field">
              <span>${label('skin.gradient_angle')}</span>
              <input type="number" min="0" max="360" step="5" .value=${config?.gradient_angle ?? ''} placeholder="135"
                @change=${(e) => setOrClear('gradient_angle', e.target.value === '' ? '' : Number(e.target.value))}>
            </label>
            <label class="skin-bg-field">
              <span>${label('skin.watermark_url')}</span>
              <input type="text" .value=${config?.background_image || ''} placeholder="/local/crest.png"
                title=${label('skin.watermark_url_hint')}
                @change=${(e) => setOrClear('background_image', e.target.value.trim())}>
              <span class="skin-hint">${label('skin.watermark_url_hint')}</span>
            </label>
            <label class="skin-bg-field">
              <span>${label('skin.watermark_opacity')}</span>
              <input type="number" min="0" max="1" step="0.01" .value=${config?.watermark_opacity ?? ''} placeholder="0.07"
                @change=${(e) => setOrClear('watermark_opacity', e.target.value === '' ? '' : Number(e.target.value))}>
            </label>
            <label class="skin-bg-field">
              <span>${label('skin.watermark_size')}</span>
              <select @change=${(e) => setOrClear('watermark_size', e.target.value)}>
                ${['', '40%', '60%', '80%', 'contain'].map((s) => html`
                  <option value="${s}" ?selected=${(config?.watermark_size || '') === s}>${s || label('skin.default')}</option>`)}
              </select>
            </label>
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
