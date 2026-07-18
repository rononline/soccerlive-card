// Pure, lit-free skin configuration: the two independent axes (appearance and
// palette), their options, and how a config resolves to them — including the
// backwards-compatible mapping from the old single `skin` field.

export const APPEARANCES = ['dark', 'light', 'ha'];

export const PALETTES = [
  'purple', 'red-white', 'red-gold', 'blue-red', 'white-gold',
  'classic', 'neon', 'gold', 'orange', 'blue', 'black-white',
  'team', 'custom',
];

// Editor option lists: [value, i18n-key]. Labels are localised in the editor.
export const APPEARANCE_OPTIONS = [
  ['dark', 'skin.appearance_dark'],
  ['light', 'skin.appearance_light'],
  ['ha', 'skin.appearance_ha'],
];

export const PALETTE_OPTIONS = [
  ['purple', 'skin.palette_purple'],
  ['red-white', 'skin.palette_red_white'],
  ['red-gold', 'skin.palette_red_gold'],
  ['blue-red', 'skin.palette_blue_red'],
  ['white-gold', 'skin.palette_white_gold'],
  ['blue', 'skin.palette_blue'],
  ['orange', 'skin.palette_orange'],
  ['black-white', 'skin.palette_black_white'],
  ['classic', 'skin.palette_classic'],
  ['neon', 'skin.palette_neon'],
  ['gold', 'skin.palette_gold'],
  ['team', 'skin.palette_team'],
  ['custom', 'skin.palette_custom'],
];

// Club-name aliases kept working: they map to the old single skin value.
const SKIN_ALIASES = {
  feyenoord: 'red-white',
  arsenal: 'red-gold',
  barcelona: 'blue-red',
  'real-madrid': 'white-gold',
};

// Old single `skin` value -> the {appearance, palette} pair it now means.
const LEGACY_SKIN_MAP = {
  dark: { appearance: 'dark', palette: 'purple' },
  light: { appearance: 'light', palette: 'purple' },
  auto: { appearance: 'dark', palette: 'team' },
  custom: { appearance: 'dark', palette: 'custom' },
  'red-white': { appearance: 'dark', palette: 'red-white' },
  'red-gold': { appearance: 'dark', palette: 'red-gold' },
  'blue-red': { appearance: 'dark', palette: 'blue-red' },
  'white-gold': { appearance: 'dark', palette: 'white-gold' },
  classic: { appearance: 'dark', palette: 'classic' },
  neon: { appearance: 'dark', palette: 'neon' },
  gold: { appearance: 'dark', palette: 'gold' },
  orange: { appearance: 'dark', palette: 'orange' },
  blue: { appearance: 'dark', palette: 'blue' },
  'black-white': { appearance: 'dark', palette: 'black-white' },
};

function legacyPair(config) {
  const raw = config && typeof config.skin === 'string' ? config.skin.toLowerCase() : '';
  const skin = SKIN_ALIASES[raw] || raw;
  return LEGACY_SKIN_MAP[skin] || null;
}

/** Resolve the appearance axis (dark/light/ha) from config. Prefers the new
 * `appearance` field, else derives it from the legacy `skin`, else 'dark'. */
export function resolveAppearance(config) {
  const a = config && typeof config.appearance === 'string' ? config.appearance.toLowerCase() : '';
  if (APPEARANCES.includes(a)) return a;
  const legacy = legacyPair(config);
  return legacy ? legacy.appearance : 'dark';
}

/** Resolve the palette axis from config. Prefers the new `palette` field, else
 * derives it from the legacy `skin`, else 'purple'. */
export function resolvePalette(config) {
  const p = config && typeof config.palette === 'string' ? config.palette.toLowerCase() : '';
  if (PALETTES.includes(p)) return p;
  const legacy = legacyPair(config);
  return legacy ? legacy.palette : 'purple';
}

/** Palettes whose accent colours come from config/entity rather than CSS. */
export function paletteUsesCustomColors(palette) {
  return palette === 'custom' || palette === 'team';
}
