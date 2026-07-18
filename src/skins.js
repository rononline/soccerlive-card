import { css } from "lit-element";
import { normalizeCssColor, hexToRgbTriplet, getAutoColors } from "./skin-colors.js";
import { resolveAppearance, resolvePalette, paletteUsesCustomColors } from "./skin-config.js";

// Two independent axes drive the look:
//   data-appearance = dark | light | ha  -> neutrals (background, text, surfaces)
//   data-palette    = purple | red-white | ... | team | custom -> accent hue
// Surfaces are tinted with rgba(var(--cl-accent-rgb), a) so any palette works on
// any appearance (e.g. a light red-white card) without hardcoding combinations.

export const skinStyles = css`
  :host {
    /* Semantic, skin-independent colours. */
    --cl-green: #10b981;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.4);
    --cl-gold-text: #fde047;
    --cl-cl: var(--cl-accent);
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
    /* W/D/L stays green/grey/red on every skin. */
    --cl-win: #22c55e;
    --cl-draw: #94a3b8;
    --cl-loss: #ef4444;
    /* Accent-tinted soft fill (favourite highlight) follows the palette. */
    --cl-accent-soft: rgba(var(--cl-accent-rgb),0.12);
  }

  /* ============================ PALETTES (accent hue) ============================ */
  :host,
  :host([data-palette="purple"]),
  :host([data-palette="custom"]),
  :host([data-palette="team"]) {
    --cl-accent: #6366f1;
    --cl-accent-2: #ec4899;
    --cl-accent-rgb: 99,102,241;
    --cl-accent-2-rgb: 236,72,153;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
  }
  :host([data-palette="red-white"]) {
    --cl-accent: #e50000; --cl-accent-2: #ff4444;
    --cl-accent-rgb: 229,0,0; --cl-accent-2-rgb: 255,68,68;
    --cl-live: #ff3b3b; --cl-live-glow: rgba(229,0,0,0.60);
    --cl-cl: #e50000; --cl-rel: #aa0000;
  }
  :host([data-palette="red-gold"]) {
    --cl-accent: #ef0107; --cl-accent-2: #c8a232;
    --cl-accent-rgb: 239,1,7; --cl-accent-2-rgb: 200,162,50;
    --cl-live: #ff3333; --cl-live-glow: rgba(239,1,7,0.60);
    --cl-cl: #ef0107; --cl-rel: #990000;
  }
  :host([data-palette="blue-red"]) {
    --cl-accent: #004d98; --cl-accent-2: #a50044;
    --cl-accent-rgb: 0,77,152; --cl-accent-2-rgb: 165,0,68;
    --cl-live: #ef4444; --cl-live-glow: rgba(165,0,68,0.60);
    --cl-cl: #004d98; --cl-rel: #7a0033;
  }
  :host([data-palette="white-gold"]) {
    --cl-accent: #e2e8f0; --cl-accent-2: #c8a951;
    --cl-accent-rgb: 226,232,240; --cl-accent-2-rgb: 200,169,81;
    --cl-live: #ef4444; --cl-live-glow: rgba(239,68,68,0.50);
    --cl-cl: #e2e8f0;
  }
  :host([data-palette="classic"]) {
    --cl-accent: #16a34a; --cl-accent-2: #22c55e;
    --cl-accent-rgb: 22,163,74; --cl-accent-2-rgb: 34,197,94;
    --cl-live: #ef4444; --cl-live-glow: rgba(239,68,68,0.50);
    --cl-cl: #16a34a;
  }
  :host([data-palette="neon"]) {
    --cl-accent: #00e5ff; --cl-accent-2: #ff00aa;
    --cl-accent-rgb: 0,229,255; --cl-accent-2-rgb: 255,0,170;
    --cl-live: #ff2d55; --cl-live-glow: rgba(255,45,85,0.60);
    --cl-cl: #00e5ff;
  }
  :host([data-palette="gold"]) {
    --cl-accent: #f59e0b; --cl-accent-2: #fcd34d;
    --cl-accent-rgb: 245,158,11; --cl-accent-2-rgb: 252,211,77;
    --cl-live: #ef4444; --cl-live-glow: rgba(239,68,68,0.50);
    --cl-cl: #f59e0b; --cl-gold: #f59e0b; --cl-gold-glow: rgba(245,158,11,0.50);
  }
  :host([data-palette="orange"]) {
    --cl-accent: #f97316; --cl-accent-2: #fb923c;
    --cl-accent-rgb: 249,115,22; --cl-accent-2-rgb: 251,146,60;
    --cl-live: #ef4444; --cl-live-glow: rgba(249,115,22,0.60);
    --cl-cl: #f97316;
  }
  :host([data-palette="blue"]) {
    --cl-accent: #2563eb; --cl-accent-2: #60a5fa;
    --cl-accent-rgb: 37,99,235; --cl-accent-2-rgb: 96,165,250;
    --cl-live: #ef4444; --cl-live-glow: rgba(239,68,68,0.50);
    --cl-cl: #2563eb;
  }
  :host([data-palette="black-white"]) {
    --cl-accent: #e2e8f0; --cl-accent-2: #ffffff;
    --cl-accent-rgb: 226,232,240; --cl-accent-2-rgb: 255,255,255;
    --cl-live: #ef4444; --cl-live-glow: rgba(239,68,68,0.50);
    --cl-cl: #e2e8f0;
  }

  /* ============================ APPEARANCES (neutrals) ============================ */
  :host,
  :host([data-appearance="dark"]) {
    --cl-bg: #12141f;
    --cl-surface: rgba(var(--cl-accent-rgb),0.07);
    --cl-surface-2: rgba(var(--cl-accent-rgb),0.12);
    --cl-card-2: rgba(var(--cl-accent-rgb),0.07);
    --cl-divider: rgba(var(--cl-accent-rgb),0.16);
    --cl-glass-border: rgba(var(--cl-accent-rgb),0.20);
    --cl-text: #f4f6fb;
    --cl-text-2: #aab2c5;
    --cl-shadow: rgba(0,0,0,0.35);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(var(--cl-accent-rgb),0.11);
    --cl-chip-border: rgba(var(--cl-accent-rgb),0.24);
    --cl-toast-bg: #0b0f1a;
    --cl-num-bg: #0b0f1a;
  }
  :host([data-appearance="light"]) {
    --cl-bg: #f6f8fc;
    --cl-surface: rgba(var(--cl-accent-rgb),0.08);
    --cl-surface-2: rgba(var(--cl-accent-rgb),0.14);
    --cl-card-2: rgba(255,255,255,0.75);
    --cl-divider: rgba(15,23,42,0.12);
    --cl-glass-border: rgba(var(--cl-accent-rgb),0.18);
    --cl-text: #0f172a;
    --cl-text-2: #5a6472;
    --cl-shadow: rgba(15,23,42,0.14);
    --cl-overlay-strong: rgba(0,0,0,0.45);
    --cl-overlay-soft: rgba(15,23,42,0.10);
    --cl-chip-bg: rgba(var(--cl-accent-rgb),0.10);
    --cl-chip-border: rgba(var(--cl-accent-rgb),0.22);
    --cl-toast-bg: #0f172a;
    --cl-num-bg: #ffffff;
  }
  :host([data-appearance="ha"]) {
    --cl-bg: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --cl-surface: rgba(var(--cl-accent-rgb),0.08);
    --cl-surface-2: rgba(var(--cl-accent-rgb),0.14);
    --cl-card-2: var(--secondary-background-color, rgba(127,127,127,0.10));
    --cl-divider: var(--divider-color, rgba(127,127,127,0.20));
    --cl-glass-border: var(--divider-color, rgba(127,127,127,0.22));
    --cl-text: var(--primary-text-color, #e1e1e1);
    --cl-text-2: var(--secondary-text-color, #9b9b9b);
    --cl-shadow: rgba(0,0,0,0.30);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(var(--cl-accent-rgb),0.10);
    --cl-chip-border: var(--divider-color, rgba(127,127,127,0.22));
    --cl-toast-bg: var(--card-background-color, #1c1c1c);
    --cl-num-bg: var(--card-background-color, #1c1c1c);
  }
`;

export function applySkin(el, config) {
  const appearance = resolveAppearance(config);
  const palette = resolvePalette(config);
  if (el && el.setAttribute) {
    el.setAttribute('data-appearance', appearance);
    el.setAttribute('data-palette', palette);
    applyCustomPaletteVars(el, config, palette);
  }
  return { appearance, palette };
}

const CUSTOM_COLOR_KEYS = [
  ['accent_color', '--cl-accent', '--cl-accent-rgb'],
  ['accent_2_color', '--cl-accent-2', '--cl-accent-2-rgb'],
  ['secondary_color', '--cl-accent-2', '--cl-accent-2-rgb'],
  ['live_color', '--cl-live', null],
  ['gold_color', '--cl-gold', null],
  ['background_color', '--cl-bg', null],
  ['surface_color', '--cl-surface', null],
  ['surface_2_color', '--cl-surface-2', null],
  ['card_color', '--cl-card-2', null],
  ['text_color', '--cl-text', null],
  ['secondary_text_color', '--cl-text-2', null],
  ['divider_color', '--cl-divider', null],
  ['chip_color', '--cl-chip-bg', null],
  ['chip_border_color', '--cl-chip-border', null],
];

const CUSTOM_COLOR_VARS = new Set(CUSTOM_COLOR_KEYS.flatMap(([, colorVar, rgbVar]) => rgbVar ? [colorVar, rgbVar] : [colorVar]));

function applyCustomPaletteVars(el, config, palette) {
  for (const cssVar of CUSTOM_COLOR_VARS) el.style.removeProperty(cssVar);
  if (!config || !paletteUsesCustomColors(palette)) return;

  const entityAttrs = getEntityAttributes(el, config);
  const sourceConfig = { ...entityAttrs, ...config };
  const autoColors = palette === 'team' ? getAutoColors(sourceConfig) : {};
  const mergedConfig = { ...autoColors, ...sourceConfig };

  for (const [key, colorVar, rgbVar] of CUSTOM_COLOR_KEYS) {
    const color = normalizeCssColor(mergedConfig[key]);
    if (!color) continue;

    el.style.setProperty(colorVar, color);
    const rgb = rgbVar ? hexToRgbTriplet(color) : null;
    if (rgb) el.style.setProperty(rgbVar, rgb);
  }
}

function getEntityAttributes(el, config) {
  const entityId = config?.entity || config?.entities?.[0];
  if (!entityId || !el?.hass?.states) return {};
  const attrs = el.hass.states[entityId]?.attributes || {};
  const match = attrs.next_match || attrs.matches?.[0] || {};
  return {
    ...attrs,
    home_color: attrs.home_color || attrs.next_match_home_color || match.home_color,
    away_color: attrs.away_color || attrs.next_match_away_color || match.away_color,
    team_color: attrs.team_color || attrs.primary_color || match.team_color,
    team_colors: attrs.team_colors || [attrs.home_color || attrs.next_match_home_color || match.home_color, attrs.away_color || attrs.next_match_away_color || match.away_color].filter(Boolean),
  };
}
