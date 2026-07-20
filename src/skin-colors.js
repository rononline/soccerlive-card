// Pure, lit-free colour helpers for the skin system, so the normalisation and
// the contrast-aware auto (team-colour) logic can be unit-tested without a DOM.

/** Normalise a CSS colour to lowercase #rrggbb, or keep a valid rgb()/rgba(),
 * else null. Accepts #rgb, #rrggbb, bare rrggbb and rgb/rgba(). */
export function normalizeCssColor(value) {
  if (typeof value !== 'string') return null;
  const color = value.trim();
  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`.toLowerCase();
  }
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase();
  if (/^[0-9a-f]{6}$/i.test(color)) return `#${color.toLowerCase()}`;
  if (/^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+(?:\s*,\s*(?:0|1|0?\.\d+))?\s*\)$/i.test(color)) return color;
  return null;
}

/** "#rrggbb" -> "r,g,b", or null for non-hex colours. */
export function hexToRgbTriplet(color) {
  if (!/^#[0-9a-f]{6}$/i.test(color)) return null;
  return [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
  ].join(',');
}

function _rgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

/** WCAG relative luminance (0 = black, 1 = white) for a #rrggbb colour. */
export function relativeLuminance(hex) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return null;
  const lin = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  const [r, g, b] = _rgb(hex);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** WCAG contrast ratio (1..21) between two #rrggbb colours, or null if either
 * isn't a hex colour. 4.5 is the AA threshold for normal text, 3 for large. */
export function contrastRatio(a, b) {
  const la = relativeLuminance(a);
  const lb = relativeLuminance(b);
  if (la === null || lb === null) return null;
  const hi = Math.max(la, lb);
  const lo = Math.min(la, lb);
  return (hi + 0.05) / (lo + 0.05);
}

/** Euclidean distance in RGB space between two #rrggbb colours (0..441). */
export function colorDistance(a, b) {
  if (!/^#[0-9a-f]{6}$/i.test(a) || !/^#[0-9a-f]{6}$/i.test(b)) return Infinity;
  const [ar, ag, ab] = _rgb(a);
  const [br, bg, bb] = _rgb(b);
  return Math.sqrt((ar - br) ** 2 + (ag - bg) ** 2 + (ab - bb) ** 2);
}

/**
 * Whether a colour works as an accent on the (dark) card: not near-black and
 * not near-white, so it stays visible and doesn't collide with text. Non-hex
 * colours (e.g. rgba) are accepted as-is since we can't cheaply judge them.
 */
export function isUsableAccent(hex) {
  if (!hex) return false;
  const L = relativeLuminance(hex);
  if (L === null) return true;
  return L > 0.05 && L < 0.92;
}

// The only valid CSS gradient direction keywords (a regex would also accept
// nonsense like "to top bottom").
const GRADIENT_DIRECTIONS = new Set([
  "to top", "to bottom", "to left", "to right",
  "to top left", "to top right", "to bottom left", "to bottom right",
  "to left top", "to right top", "to left bottom", "to right bottom",
]);

/** Normalise a gradient angle to a safe CSS value: a number or "<n>deg" clamped
 * to -360..360, a valid "to <side>" keyword, else the 135deg default. */
export function normalizeGradientAngle(angle) {
  const clamp = (n) => `${Math.max(-360, Math.min(360, n))}deg`;
  if (typeof angle === "number" && Number.isFinite(angle)) return clamp(angle);
  if (typeof angle === "string") {
    const s = angle.trim();
    const m = s.match(/^(-?\d+(?:\.\d+)?)deg$/i);
    if (m) return clamp(parseFloat(m[1]));
    const lower = s.toLowerCase().replace(/\s+/g, " ");
    if (GRADIENT_DIRECTIONS.has(lower)) return lower;
  }
  return "135deg";
}

/** Watermark opacity clamped to 0..1, or null (use the default) for empty/invalid
 * input. Guards against Number('') === 0 hiding the watermark. */
export function clampOpacity(v) {
  if (v === '' || v === null || v === undefined) return null;
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : null;
}

/** A safe background-size value (contain/cover, a percentage or a px length), or
 * null when it isn't one of those. */
export function normalizeWatermarkSize(v) {
  const s = typeof v === 'string' ? v.trim() : '';
  return /^(contain|cover|\d{1,3}%|\d{1,4}px)$/i.test(s) ? s : null;
}

/** Allow only local (/local/…), http(s) and inline data:image watermark URLs,
 * else null — defensive validation of a config-provided URL. */
export function sanitizeWatermarkUrl(v) {
  const s = typeof v === 'string' ? v.trim() : '';
  if (!s) return null;
  return /^(\/local\/|https?:\/\/|data:image\/)/i.test(s) ? s : null;
}

/** A `linear-gradient(angle, from, to)` from two normalised colours, or null if
 * either colour is invalid. The angle is validated (defaults to 135deg). */
export function buildGradient(from, to, angle) {
  const f = normalizeCssColor(from);
  const t = normalizeCssColor(to);
  if (!f || !t) return null;
  return `linear-gradient(${normalizeGradientAngle(angle)}, ${f}, ${t})`;
}

/** Lighten a #rrggbb colour toward white by `amount` (0..1). */
export function lighten(hex, amount) {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) return hex;
  const mix = (c) => Math.round(c + (255 - c) * amount);
  const [r, g, b] = _rgb(hex).map(mix);
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
}

/**
 * Derive contrast-aware accent colours from a team's colours.
 *
 * Skips unusable (near-black/near-white) colours so an all-black or all-white
 * kit can't produce an unreadable card, requires the second accent to be
 * visibly different from the first (else derives a lighter variant), and
 * returns {} when there's no usable colour so the skin's own defaults stay.
 */
export function getAutoColors(config) {
  const raw = Array.isArray(config.team_colors)
    ? config.team_colors
    : [config.team_color, config.home_color, config.away_color, config.primary_color, config.secondary_color];

  const usable = [];
  for (const c of raw) {
    const n = normalizeCssColor(c);
    if (n && isUsableAccent(n) && !usable.includes(n)) usable.push(n);
  }
  const accent = usable[0];
  if (!accent) return {};  // no readable team colour -> keep the skin defaults

  // The second accent must be clearly distinct; otherwise derive one so two
  // near-identical kit colours don't collapse into a flat, low-contrast card.
  let accent2 = usable.slice(1).find((c) => colorDistance(c, accent) > 60);
  if (!accent2) accent2 = lighten(accent, 0.28);
  return { accent_color: accent, accent_2_color: accent2 };
}
