import { css } from "lit-element";

// Beschikbare themes: dark (standaard), light, feyenoord, classic, neon, gold
// Gebruik: skin: feyenoord  in de kaart-YAML

export const skinStyles = css`
  :host {
    /* Accent palette — standaard (dark/light) */
    --cl-accent: #6366f1;
    --cl-accent-2: #ec4899;
    /* RGB-waarden voor gebruik in rgba() */
    --cl-accent-rgb: 99,102,241;
    --cl-accent-2-rgb: 236,72,153;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-green: #10b981;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.4);
    --cl-gold-text: #fde047;
    --cl-cl: #6366f1;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
  }

  /* ---------- DARK (standaard) ---------- */
  :host,
  :host([data-skin="dark"]) {
    --cl-bg: #14182a;
    --cl-surface: rgba(255,255,255,0.05);
    --cl-surface-2: rgba(255,255,255,0.08);
    --cl-card-2: rgba(255,255,255,0.05);
    --cl-divider: rgba(255,255,255,0.08);
    --cl-glass-border: rgba(255,255,255,0.08);
    --cl-text: #f4f6fb;
    --cl-text-2: #aab2c5;
    --cl-shadow: rgba(0,0,0,0.30);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(255,255,255,0.10);
    --cl-chip-border: rgba(255,255,255,0.12);
    --cl-toast-bg: #0b0f1a;
    --cl-num-bg: #0b0f1a;
  }

  /* ---------- LIGHT ---------- */
  :host([data-skin="light"]) {
    --cl-bg: #ffffff;
    --cl-surface: rgba(15,23,42,0.04);
    --cl-surface-2: rgba(15,23,42,0.07);
    --cl-card-2: rgba(15,23,42,0.04);
    --cl-divider: rgba(15,23,42,0.10);
    --cl-glass-border: rgba(15,23,42,0.10);
    --cl-text: #14182a;
    --cl-text-2: #5b6577;
    --cl-shadow: rgba(15,23,42,0.12);
    --cl-overlay-strong: rgba(0,0,0,0.45);
    --cl-overlay-soft: rgba(0,0,0,0.18);
    --cl-chip-bg: rgba(15,23,42,0.06);
    --cl-chip-border: rgba(15,23,42,0.12);
    --cl-toast-bg: #1a1f33;
    --cl-num-bg: #1a1f33;
  }

  /* ---------- FEYENOORD (rood/zwart) ---------- */
  :host([data-skin="red-white"]) {
    --cl-accent: #e50000;
    --cl-accent-2: #ff2222;
    --cl-accent-rgb: 229,0,0;
    --cl-accent-2-rgb: 255,34,34;
    --cl-live: #ff3333;
    --cl-live-glow: rgba(229,0,0,0.65);
    --cl-cl: #e50000;
    --cl-el: #ff5500;
    --cl-rel: #aa0000;
    --cl-conf: #cc2200;
    --cl-gold: #ffd700;
    --cl-gold-glow: rgba(255,215,0,0.4);
    --cl-gold-text: #ffe55c;
    --cl-bg: #0a0000;
    --cl-surface: rgba(229,0,0,0.10);
    --cl-surface-2: rgba(229,0,0,0.18);
    --cl-card-2: rgba(60,0,0,0.85);
    --cl-divider: rgba(229,0,0,0.22);
    --cl-glass-border: rgba(229,0,0,0.25);
    --cl-text: #ffffff;
    --cl-text-2: #c8a0a0;
    --cl-shadow: rgba(0,0,0,0.50);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.35);
    --cl-chip-bg: rgba(229,0,0,0.22);
    --cl-chip-border: rgba(229,0,0,0.35);
    --cl-toast-bg: #0a0000;
    --cl-num-bg: #0a0000;
  }

  /* ---------- CLASSIC (groen/goud — voetbalveld) ---------- */
  :host([data-skin="classic"]) {
    --cl-accent: #16a34a;
    --cl-accent-2: #22c55e;
    --cl-accent-rgb: 22,163,74;
    --cl-accent-2-rgb: 34,197,94;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #16a34a;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #84cc16;
    --cl-bg: #0a120a;
    --cl-surface: rgba(22,163,74,0.07);
    --cl-surface-2: rgba(22,163,74,0.12);
    --cl-card-2: rgba(22,163,74,0.07);
    --cl-divider: rgba(22,163,74,0.18);
    --cl-glass-border: rgba(22,163,74,0.20);
    --cl-text: #f0f4f0;
    --cl-text-2: #8aaa8a;
    --cl-shadow: rgba(0,0,0,0.35);
    --cl-overlay-strong: rgba(0,0,0,0.55);
    --cl-overlay-soft: rgba(0,0,0,0.25);
    --cl-chip-bg: rgba(22,163,74,0.10);
    --cl-chip-border: rgba(22,163,74,0.22);
    --cl-toast-bg: #060d06;
    --cl-num-bg: #060d06;
  }

  /* ---------- NEON (cyberpunk) ---------- */
  :host([data-skin="neon"]) {
    --cl-accent: #00e5ff;
    --cl-accent-2: #ff00aa;
    --cl-accent-rgb: 0,229,255;
    --cl-accent-2-rgb: 255,0,170;
    --cl-live: #ff2d55;
    --cl-live-glow: rgba(255,45,85,0.6);
    --cl-cl: #00e5ff;
    --cl-el: #ff9500;
    --cl-rel: #ff2d55;
    --cl-conf: #bf5af2;
    --cl-gold: #ffd60a;
    --cl-gold-glow: rgba(255,214,10,0.5);
    --cl-gold-text: #ffe55c;
    --cl-bg: #080816;
    --cl-surface: rgba(0,229,255,0.05);
    --cl-surface-2: rgba(0,229,255,0.09);
    --cl-card-2: rgba(0,229,255,0.05);
    --cl-divider: rgba(0,229,255,0.14);
    --cl-glass-border: rgba(0,229,255,0.18);
    --cl-text: #e8f8ff;
    --cl-text-2: #7ab8cc;
    --cl-shadow: rgba(0,0,0,0.45);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.30);
    --cl-chip-bg: rgba(0,229,255,0.08);
    --cl-chip-border: rgba(0,229,255,0.20);
    --cl-toast-bg: #040410;
    --cl-num-bg: #040410;
  }

  /* ---------- GOLD (premium/Champions League) ---------- */
  :host([data-skin="gold"]) {
    --cl-accent: #f59e0b;
    --cl-accent-2: #fcd34d;
    --cl-accent-rgb: 245,158,11;
    --cl-accent-2-rgb: 252,211,77;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #f59e0b;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a855f7;
    --cl-gold: #f59e0b;
    --cl-gold-glow: rgba(245,158,11,0.5);
    --cl-gold-text: #fde047;
    --cl-bg: #0d0900;
    --cl-surface: rgba(245,158,11,0.06);
    --cl-surface-2: rgba(245,158,11,0.11);
    --cl-card-2: rgba(245,158,11,0.06);
    --cl-divider: rgba(245,158,11,0.16);
    --cl-glass-border: rgba(245,158,11,0.20);
    --cl-text: #faf6ed;
    --cl-text-2: #c4a96a;
    --cl-shadow: rgba(0,0,0,0.40);
    --cl-overlay-strong: rgba(0,0,0,0.60);
    --cl-overlay-soft: rgba(0,0,0,0.28);
    --cl-chip-bg: rgba(245,158,11,0.10);
    --cl-chip-border: rgba(245,158,11,0.22);
    --cl-toast-bg: #090600;
    --cl-num-bg: #090600;
  }

  /* ---------- ORANGE (Netherlands / Ajax / Dutch clubs) ---------- */
  :host([data-skin="orange"]) {
    --cl-accent: #f97316;
    --cl-accent-2: #fb923c;
    --cl-accent-rgb: 249,115,22;
    --cl-accent-2-rgb: 251,146,60;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(249,115,22,0.65);
    --cl-cl: #f97316;
    --cl-el: #fbbf24;
    --cl-rel: #dc2626;
    --cl-conf: #f59e0b;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #0d0600;
    --cl-surface: rgba(249,115,22,0.08);
    --cl-surface-2: rgba(249,115,22,0.14);
    --cl-card-2: rgba(249,115,22,0.08);
    --cl-divider: rgba(249,115,22,0.20);
    --cl-glass-border: rgba(249,115,22,0.24);
    --cl-text: #fff8f0;
    --cl-text-2: #c09060;
    --cl-shadow: rgba(0,0,0,0.45);
    --cl-overlay-strong: rgba(0,0,0,0.60);
    --cl-overlay-soft: rgba(0,0,0,0.28);
    --cl-chip-bg: rgba(249,115,22,0.12);
    --cl-chip-border: rgba(249,115,22,0.28);
    --cl-toast-bg: #080400;
    --cl-num-bg: #080400;
  }

  /* ---------- BLUE (Chelsea / PSG / Man City / Inter / Napoli / Lazio) ---------- */
  :host([data-skin="blue"]) {
    --cl-accent: #2563eb;
    --cl-accent-2: #60a5fa;
    --cl-accent-rgb: 37,99,235;
    --cl-accent-2-rgb: 96,165,250;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #2563eb;
    --cl-el: #f97316;
    --cl-rel: #dc2626;
    --cl-conf: #7c3aed;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #00050f;
    --cl-surface: rgba(37,99,235,0.08);
    --cl-surface-2: rgba(37,99,235,0.14);
    --cl-card-2: rgba(37,99,235,0.08);
    --cl-divider: rgba(37,99,235,0.20);
    --cl-glass-border: rgba(37,99,235,0.24);
    --cl-text: #f0f4ff;
    --cl-text-2: #7090c0;
    --cl-shadow: rgba(0,0,0,0.50);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.30);
    --cl-chip-bg: rgba(37,99,235,0.12);
    --cl-chip-border: rgba(37,99,235,0.28);
    --cl-toast-bg: #00030a;
    --cl-num-bg: #00030a;
  }

  /* ---------- BLACK-WHITE (Juventus / Newcastle / Borussia) ---------- */
  :host([data-skin="black-white"]) {
    --cl-accent: #e2e8f0;
    --cl-accent-2: #ffffff;
    --cl-accent-rgb: 226,232,240;
    --cl-accent-2-rgb: 255,255,255;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #e2e8f0;
    --cl-el: #f97316;
    --cl-rel: #ef4444;
    --cl-conf: #a0aec0;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.45);
    --cl-gold-text: #fde68a;
    --cl-bg: #000000;
    --cl-surface: rgba(255,255,255,0.06);
    --cl-surface-2: rgba(255,255,255,0.10);
    --cl-card-2: rgba(255,255,255,0.06);
    --cl-divider: rgba(255,255,255,0.12);
    --cl-glass-border: rgba(255,255,255,0.15);
    --cl-text: #ffffff;
    --cl-text-2: #94a3b8;
    --cl-shadow: rgba(0,0,0,0.70);
    --cl-overlay-strong: rgba(0,0,0,0.70);
    --cl-overlay-soft: rgba(0,0,0,0.40);
    --cl-chip-bg: rgba(255,255,255,0.09);
    --cl-chip-border: rgba(255,255,255,0.18);
    --cl-toast-bg: #000000;
    --cl-num-bg: #000000;
  }

  /* ---------- ARSENAL (cannon red / gold) ---------- */
  :host([data-skin="arsenal"]) {
    --cl-accent: #ef0107;
    --cl-accent-2: #c8a232;
    --cl-accent-rgb: 239,1,7;
    --cl-accent-2-rgb: 200,162,50;
    --cl-live: #ff3333;
    --cl-live-glow: rgba(239,1,7,0.65);
    --cl-cl: #ef0107;
    --cl-el: #c8a232;
    --cl-rel: #990000;
    --cl-conf: #cc0000;
    --cl-gold: #c8a232;
    --cl-gold-glow: rgba(200,162,50,0.45);
    --cl-gold-text: #e8c84a;
    --cl-bg: #0a0000;
    --cl-surface: rgba(239,1,7,0.08);
    --cl-surface-2: rgba(239,1,7,0.14);
    --cl-card-2: rgba(50,0,0,0.90);
    --cl-divider: rgba(239,1,7,0.20);
    --cl-glass-border: rgba(239,1,7,0.25);
    --cl-text: #ffffff;
    --cl-text-2: #c09090;
    --cl-shadow: rgba(0,0,0,0.55);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.35);
    --cl-chip-bg: rgba(239,1,7,0.14);
    --cl-chip-border: rgba(239,1,7,0.30);
    --cl-toast-bg: #050000;
    --cl-num-bg: #050000;
  }

  /* ---------- BARCELONA (blaugrana) ---------- */
  :host([data-skin="barcelona"]) {
    --cl-accent: #004d98;
    --cl-accent-2: #a50044;
    --cl-accent-rgb: 0,77,152;
    --cl-accent-2-rgb: 165,0,68;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(165,0,68,0.65);
    --cl-cl: #004d98;
    --cl-el: #a50044;
    --cl-rel: #7a0033;
    --cl-conf: #0066cc;
    --cl-gold: #fbbf24;
    --cl-gold-glow: rgba(251,191,36,0.40);
    --cl-gold-text: #fde68a;
    --cl-bg: #000510;
    --cl-surface: rgba(0,77,152,0.10);
    --cl-surface-2: rgba(0,77,152,0.18);
    --cl-card-2: rgba(0,10,40,0.90);
    --cl-divider: rgba(0,77,152,0.25);
    --cl-glass-border: rgba(0,77,152,0.30);
    --cl-text: #f0f4ff;
    --cl-text-2: #7a9abf;
    --cl-shadow: rgba(0,0,0,0.55);
    --cl-overlay-strong: rgba(0,0,0,0.65);
    --cl-overlay-soft: rgba(0,0,0,0.32);
    --cl-chip-bg: rgba(0,77,152,0.15);
    --cl-chip-border: rgba(165,0,68,0.35);
    --cl-toast-bg: #000308;
    --cl-num-bg: #000308;
  }

  /* ---------- REAL MADRID (los blancos) ---------- */
  :host([data-skin="real-madrid"]) {
    --cl-accent: #f5f5f5;
    --cl-accent-2: #c8a951;
    --cl-accent-rgb: 245,245,245;
    --cl-accent-2-rgb: 200,169,81;
    --cl-live: #ef4444;
    --cl-live-glow: rgba(239,68,68,0.5);
    --cl-cl: #f5f5f5;
    --cl-el: #c8a951;
    --cl-rel: #ef4444;
    --cl-conf: #b0b8cc;
    --cl-gold: #c8a951;
    --cl-gold-glow: rgba(200,169,81,0.45);
    --cl-gold-text: #e8cc70;
    --cl-bg: #06071a;
    --cl-surface: rgba(245,245,245,0.06);
    --cl-surface-2: rgba(245,245,245,0.10);
    --cl-card-2: rgba(10,12,30,0.90);
    --cl-divider: rgba(245,245,245,0.12);
    --cl-glass-border: rgba(245,245,245,0.16);
    --cl-text: #ffffff;
    --cl-text-2: #8a96b4;
    --cl-shadow: rgba(0,0,0,0.60);
    --cl-overlay-strong: rgba(0,0,0,0.70);
    --cl-overlay-soft: rgba(0,0,0,0.38);
    --cl-chip-bg: rgba(245,245,245,0.09);
    --cl-chip-border: rgba(200,169,81,0.35);
    --cl-toast-bg: #030410;
    --cl-num-bg: #030410;
  }
`;

const VALID_SKINS = ['dark', 'light', 'red-white', 'classic', 'neon', 'gold', 'orange', 'blue', 'black-white', 'arsenal', 'barcelona', 'real-madrid'];

// Aliases: user-facing name -> internal data-skin value
const SKIN_ALIASES = { 'feyenoord': 'red-white' };

export function resolveSkin(config) {
  const s = config && typeof config.skin === 'string' ? config.skin.toLowerCase() : 'dark';
  if (SKIN_ALIASES[s]) return SKIN_ALIASES[s];
  return VALID_SKINS.includes(s) ? s : 'dark';
}

export function applySkin(el, config) {
  const skin = resolveSkin(config);
  if (el && el.setAttribute) el.setAttribute('data-skin', skin);
  return skin;
}
