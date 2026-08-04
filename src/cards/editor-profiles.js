// Opinionated starting points for the wrapper editor. Profiles only replace
// presentation/card-specific fields; source, language and palette choices are
// retained so applying one never disconnects a working dashboard.
export const EDITOR_PROFILES = {
  basic: {
    card_type: 'team',
    show_weather: true,
    show_form_trend: false,
    show_previous_matches: false,
    show_prediction: false,
    show_prediction_details: false,
    show_odds: false,
    show_injuries: false,
  },
  matchday: {
    card_type: 'matchday',
    auto_enrichment: true,
  },
  live: {
    card_type: 'match-center',
    phase_aware: true,
    auto_enrichment: true,
    show_event_toasts: true,
    show_prediction_details: false,
  },
  analysis: {
    card_type: 'match-center',
    auto_enrichment: true,
    show_prediction: true,
    show_prediction_details: true,
    show_odds: true,
    show_injuries: true,
  },
  club: {
    card_type: 'club',
    dashboard_mode: true,
    collapse_sections: true,
    show_matchday: true,
    show_squad_analysis: true,
    show_data_quality: true,
  },
  compact: {
    card_type: 'countdown',
    compact: true,
    hide_header: true,
    hide_broadcasts: true,
  },
};

const PRESERVED_FIELDS = [
  'type', 'entity', 'enrichment_entity', 'supplementary_entities',
  'archive_entity', 'standings_entity', 'language', 'appearance', 'palette',
  'skin', 'accent_color', 'accent_2_color', 'background_color', 'surface_color',
  'card_color', 'text_color', 'secondary_text_color', 'divider_color',
  'chip_color', 'chip_border_color', 'live_color', 'gold_color',
  'gradient_from', 'gradient_to', 'gradient_angle', 'background_image',
  'watermark_opacity', 'watermark_size',
];

export function applyEditorProfile(config, profile) {
  const preset = EDITOR_PROFILES[profile];
  if (!preset) return { ...(config || {}) };
  const next = {};
  for (const field of PRESERVED_FIELDS) {
    if (config?.[field] !== undefined) next[field] = config[field];
  }
  return { ...next, ...preset };
}
