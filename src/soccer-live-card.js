import { LitElement, html, css } from 'lit';
import { t, resolveLang } from './i18n.js';
import { blendHassSources } from "./cards/shared-source-blend.js";
import { applyEditorProfile, EDITOR_PROFILES } from './cards/editor-profiles.js';
// Card elements stay eagerly registered for backwards-compatible direct YAML
// (`custom:soccer-live-team`, etc.). Home Assistant may call setConfig
// immediately after creating such an element, before an async import settles.
// Editors are safe to load on demand through getConfigElement().
import './cards/Team/soccer-live-team.js';
import './cards/Standings/soccer-live-standings.js';
import './cards/Tutte/soccer-live-matches.js';
import './cards/Countdown/soccer-live-countdown.js';
import './cards/News/soccer-live-news.js';
import './cards/Bracket/soccer-live-bracket.js';
import './cards/MiniStandings/soccer-live-mini-standings.js';
import './cards/Scorers/soccer-live-scorers.js';
import './cards/MultiTeam/soccer-live-multi-team.js';
import './cards/TeamCompetitions/soccer-live-team-competitions.js';
import './cards/MatchCenter/soccer-live-match-center.js';
import './cards/TeamForm/soccer-live-team-form.js';
import './cards/Club/soccer-live-club.js';
import './cards/Diagnostics/soccer-live-diagnostics.js';
import './cards/Ticker/soccer-live-ticker.js';
import './cards/Lineup/soccer-live-lineup.js';
import './cards/Timeline/soccer-live-timeline.js';
import './cards/Schedule/soccer-live-schedule.js';
import './cards/Matchday/soccer-live-matchday.js';
import './cards/Archive/soccer-live-archive.js';
import './cards/LastMatch/soccer-live-last-match.js';

// ─── Card type registry (single source of truth) ─────────────────────────────

const CARD_MODULES = {
  team: {
    editor: () => import('./cards/Team/soccer-live-team-editor.js'),
  },
  standings: {
    editor: () => import('./cards/Standings/soccer-live-standings-editor.js'),
  },
  matches: {
    editor: () => import('./cards/Tutte/soccer-live-matches-editor.js'),
  },
  countdown: {
    editor: () => import('./cards/Countdown/soccer-live-countdown-editor.js'),
  },
  news: {
    editor: () => import('./cards/News/soccer-live-news-editor.js'),
  },
  bracket: {
    editor: () => import('./cards/Bracket/soccer-live-bracket-editor.js'),
  },
  'mini-standings': {
    editor: () => import('./cards/MiniStandings/soccer-live-mini-standings-editor.js'),
  },
  scorers: {
    editor: () => import('./cards/Scorers/soccer-live-scorers-editor.js'),
  },
  'multi-team': {
    editor: () => import('./cards/MultiTeam/soccer-live-multi-team-editor.js'),
  },
  'team-competitions': {
    editor: () => import('./cards/TeamCompetitions/soccer-live-team-competitions-editor.js'),
  },
  'match-center': {
    editor: () => import('./cards/MatchCenter/soccer-live-match-center-editor.js'),
  },
  hub: {
    editor: () => import('./cards/MatchCenter/soccer-live-match-center-editor.js'),
  },
  race: {
    editor: () => import('./cards/Standings/soccer-live-standings-editor.js'),
  },
  'team-form': {
    editor: () => import('./cards/TeamForm/soccer-live-team-form-editor.js'),
  },
  club: {
    editor: () => import('./cards/Club/soccer-live-club-editor.js'),
  },
  diagnostics: {
    editor: () => import('./cards/Diagnostics/soccer-live-diagnostics-editor.js'),
  },
  ticker: {
    editor: () => import('./cards/Ticker/soccer-live-ticker-editor.js'),
  },
  lineup: {
    editor: () => import('./cards/Lineup/soccer-live-lineup-editor.js'),
  },
  timeline: {
    editor: () => import('./cards/Timeline/soccer-live-timeline-editor.js'),
  },
  minimal: {
    editor: () => import('./cards/Schedule/soccer-live-schedule-editor.js'),
  },
  matchday: {
    editor: () => import('./cards/Insights/soccer-live-insights-editor.js'),
  },
  archive: {
    editor: () => import('./cards/Insights/soccer-live-insights-editor.js'),
  },
  'last-match': {
    editor: () => import('./cards/LastMatch/soccer-live-last-match-editor.js'),
  },
};

const MODULE_PROMISES = new Map();
function loadCardModule(type, kind) {
  const normalized = type === 'schedule' ? 'minimal' : type;
  const loader = CARD_MODULES[normalized]?.[kind];
  if (!loader) return Promise.resolve();
  const key = `${normalized}:${kind}`;
  if (!MODULE_PROMISES.has(key)) MODULE_PROMISES.set(key, loader());
  return MODULE_PROMISES.get(key);
}

const CARD_REGISTRY = [
  { value: 'team',              element: 'soccer-live-team',              editor: 'soccer-live-team-editor',              label: 'Team',              description: 'Live score, form, lineup, weather for one team', sensorTypes: ['team_match'] },
  { value: 'standings',         element: 'soccer-live-standings',         editor: 'soccer-live-standings-editor',         label: 'Standings',         description: 'League table with coloured zones', sensorTypes: ['standings'] },
  { value: 'matches',           element: 'soccer-live-matches',           editor: 'soccer-live-matches-editor',           label: 'Matches',           description: 'Day-grouped match list with live highlighting', sensorTypes: ['team_matches', 'team_matches_mixed', 'all_matches_today'] },
  { value: 'countdown',         element: 'soccer-live-countdown',         editor: 'soccer-live-countdown-editor',         label: 'Countdown',         description: 'Countdown timer to next match with live score', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'news',              element: 'soccer-live-news',              editor: 'soccer-live-news-editor',              label: 'News',              description: 'Article feed with images and timestamps', sensorTypes: ['news'] },
  { value: 'bracket',           element: 'soccer-live-bracket',           editor: 'soccer-live-bracket-editor',           label: 'Bracket',           description: 'Knockout bracket (list or tournament tree)', sensorTypes: ['bracket'] },
  { value: 'mini-standings',    element: 'soccer-live-mini-standings',    editor: 'soccer-live-mini-standings-editor',    label: 'Mini Standings',    description: 'Compact standings with configurable rows', sensorTypes: ['standings'] },
  { value: 'scorers',           element: 'soccer-live-scorers',           editor: 'soccer-live-scorers-editor',           label: 'Top Scorers',       description: 'Top scorers list with photo and goal tally', sensorTypes: ['top_scorers'] },
  { value: 'multi-team',        element: 'soccer-live-multi-team',        editor: 'soccer-live-multi-team-editor',        label: 'Multi Team',        description: 'Multiple teams in one compact card', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'team-competitions', element: 'soccer-live-team-competitions', editor: 'soccer-live-team-competitions-editor', label: 'Team Competitions', description: 'All competitions for a team with tab selector', sensorTypes: ['team_matches_mixed'] },
  { value: 'match-center',      element: 'soccer-live-match-center',      editor: 'soccer-live-match-center-editor',      label: 'Match Center',      description: 'Tabbed match view: overview, stats, timeline, lineup, H2H', sensorTypes: ['team_match'] },
  { value: 'hub',               element: 'soccer-live-match-center',      editor: 'soccer-live-match-center-editor',      label: 'Match Hub',         description: 'Phase-aware match view that follows preview, live play and review', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'race',              element: 'soccer-live-standings',         editor: 'soccer-live-standings-editor',         label: 'Competition Race',  description: 'Title, Europe and relegation gaps with table trajectory', sensorTypes: ['standings'] },
  { value: 'team-form',         element: 'soccer-live-team-form',         editor: 'soccer-live-team-form-editor',         label: 'Team Form',         description: 'Form trend, W/D/L dots, goals chart, home/away split', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'club',              element: 'soccer-live-club',              editor: 'soccer-live-club-editor',              label: 'Club',              description: 'Club profile, matchday, season progress, squad and transfers', sensorTypes: ['club', 'team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'diagnostics',       element: 'soccer-live-diagnostics',       editor: 'soccer-live-diagnostics-editor',       label: 'Diagnostics',       description: 'Sensor health, update status and schedule counters', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed', 'all_matches_today', 'standings', 'top_scorers', 'bracket', 'news'] },
  { value: 'ticker',            element: 'soccer-live-ticker',            editor: 'soccer-live-ticker-editor',            label: 'Ticker',            description: "Horizontal scrollable strip of today's matches", sensorTypes: ['all_matches_today', 'team_matches', 'team_matches_mixed'] },
  { value: 'lineup',            element: 'soccer-live-lineup',            editor: 'soccer-live-lineup-editor',            label: 'Lineup',            description: 'Starting eleven for both teams', sensorTypes: ['team_match'] },
  { value: 'timeline',          element: 'soccer-live-timeline',          editor: 'soccer-live-timeline-editor',          label: 'Timeline',          description: 'Minute-by-minute match events', sensorTypes: ['team_match'] },
  { value: 'minimal',           element: 'soccer-live-schedule',          editor: 'soccer-live-schedule-editor',          label: 'Minimal',           description: 'Minimalist text views: fixtures, next match, standings or form', sensorTypes: ['team_matches', 'team_matches_mixed', 'team_match', 'all_matches_today', 'standings'] },
  { value: 'matchday',          element: 'soccer-live-matchday',          editor: 'soccer-live-insights-editor',          label: 'Matchday',          description: 'One matchday with status, fixtures and data completeness', sensorTypes: ['team_matches', 'team_matches_mixed', 'match_day', 'all_matches_today'] },
  { value: 'archive',           element: 'soccer-live-archive',           editor: 'soccer-live-insights-editor',          label: 'Archive',           description: 'Personal locally stored history of finished matches', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'last-match',        element: 'soccer-live-last-match',         editor: 'soccer-live-last-match-editor',        label: 'Last Match',        description: 'Most recent finished match: teams, final score and scorers', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
];

// Hub and Race remain accepted for existing YAML, but new configurations use
// a mode on Match Center or Standings. This keeps the picker compact without
// removing any public card type.
const LEGACY_VARIANT_TYPES = new Set(['hub', 'race']);
const CARD_CATEGORIES = [
  ['editor.category_primary', ['team', 'matches', 'match-center', 'standings', 'club']],
  ['editor.category_compact', ['countdown', 'last-match', 'mini-standings', 'multi-team', 'ticker', 'minimal']],
  ['editor.category_content', ['news', 'bracket', 'scorers', 'team-competitions']],
  ['editor.category_advanced', ['team-form', 'lineup', 'timeline', 'diagnostics', 'matchday', 'archive']],
];

// Derived lookups (never edit these manually — edit CARD_REGISTRY above)
const TYPE_TO_ELEMENT = Object.fromEntries(CARD_REGISTRY.map(c => [c.value, c.element]));
const LEGACY_ELEMENTS = new Set(CARD_REGISTRY.map(c => c.element));
const CARD_TYPES      = CARD_REGISTRY.map(({ value, label, description }) => ({ value, label, description }));
const CARD_EDITORS    = Object.fromEntries(CARD_REGISTRY.filter(c => c.editor).map(c => [c.value, c.editor]));

// Backwards-compatible card_type aliases (renamed types).
const CARD_TYPE_ALIASES = { schedule: 'minimal' };
function normalizeCardType(cardType) {
  return CARD_TYPE_ALIASES[cardType] || cardType;
}

// Resolve card_type (short, alias, or known legacy long) → element name
function resolveElement(cardType) {
  const t = normalizeCardType(cardType);
  return TYPE_TO_ELEMENT[t] || (LEGACY_ELEMENTS.has(t) ? t : null);
}

// Shared config fields preserved when switching card type
const SHARED_FIELDS = ['entity', 'enrichment_entity', 'supplementary_entities', 'auto_enrichment', 'archive_entity', 'standings_entity', 'skin', 'language', 'show_event_toasts'];

const WRAPPER_TYPE = 'custom:soccer-live-card';

// ─── Wrapper card ─────────────────────────────────────────────────────────────

class SoccerLiveCard extends HTMLElement {
  constructor() {
    super();
    this._hass = null;
    this._config = {};
    this._child = null;
    this._childType = null;
  }

  set hass(hass) {
    this._hass = hass;
    if (this._child) this._child.hass = blendHassSources(hass, this._config);
  }

  setConfig(config) {
    this._config = config || {};
    const type = this._config.card_type;
    const element = type ? resolveElement(type) : null;

    if (!element) {
      this._destroyChild();
      this.innerHTML = '';
      this.appendChild(type ? this._errorCard(this._t('ui.unknown_card_type', { type })) : this._placeholder());
      return;
    }

    if (!customElements.get(element)) {
      this._destroyChild();
      this.innerHTML = '';
      // Card modules are eager for direct-YAML compatibility. A missing
      // registration is a real load failure, not an async module to retry.
      this.appendChild(this._errorCard(this._t('ui.unknown_card_type', { type })));
      return;
    }

    // (Re)create child only when the element type changes
    if (this._childType !== element) {
      this._destroyChild();
      this._child = document.createElement(element);
      this._childType = element;
      this.innerHTML = '';
      this.appendChild(this._child);
    }

    try {
      this._child.setConfig(this._config);
    } catch (e) {
      if (this._config.entity) console.warn(`SoccerLiveCard: setConfig failed for ${this._childType}:`, e);
    }
    if (this._hass) this._child.hass = blendHassSources(this._hass, this._config);
  }

  _destroyChild() {
    if (this._child) {
      this._child = null;
      this._childType = null;
    }
  }

  _placeholder() {
    const el = document.createElement('ha-card');
    el.style.cssText = 'padding:24px;text-align:center;color:#94a3b8;font-size:13px;';
    const lang = this._hass ? (this._hass.language || 'en').split('-')[0] : 'en';
    el.textContent = t('ui.open_editor_to_configure', lang);
    return el;
  }

  _t(key, vars) {
    return t(key, resolveLang(this._hass, this._config), vars);
  }

  _errorCard(message) {
    const el = document.createElement('ha-card');
    el.style.cssText = 'padding:24px;text-align:center;color:#ef4444;font-size:13px;border:1px solid rgba(239,68,68,0.3);';
    el.textContent = message;
    return el;
  }

  getCardSize() {
    return this._child?.getCardSize?.() ?? 1;
  }

  getGridOptions() {
    return this._child?.getGridOptions?.();
  }

  static getConfigElement() {
    return document.createElement('soccer-live-card-editor');
  }

  static getStubConfig() {
    return {};
  }
}

if (!customElements.get('soccer-live-card')) {
  customElements.define('soccer-live-card', SoccerLiveCard);
}

// ─── Wrapper editor ───────────────────────────────────────────────────────────

class SoccerLiveCardEditor extends LitElement {
  static get properties() {
    return {
      hass:    { type: Object },
      _config: { type: Object },
    };
  }

  constructor() {
    super();
    this._config = {};
    this._subEditor = null;
    this._subEditorType = null;
    this._configByType = {};  // remembers per-type config when switching
  }

  setConfig(config) {
    this._config = { ...(config || {}) };
    this.requestUpdate();
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  // Pass hass through to sub-editor whenever it changes
  updated(changedProps) {
    if (changedProps.has('hass') && this._subEditor) {
      this._subEditor.hass = this.hass;
    }
    if (changedProps.has('_config')) {
      this._syncSubEditor();
    }
  }

  _syncSubEditor() {
    const container = this.shadowRoot?.getElementById('sub-editor');
    if (!container) return;
    const raw = normalizeCardType(this._config.card_type);
    // Normalize legacy long names to short key for editor lookup
    const type = CARD_EDITORS[raw]
      ? raw
      : (Object.entries(TYPE_TO_ELEMENT).find(([, el]) => el === raw)?.[0] || raw);
    const editorName = CARD_EDITORS[type];

    if (!type || !editorName) {
      container.innerHTML = '';
      this._subEditor = null;
      this._subEditorType = null;
      return;
    }

    if (!customElements.get(editorName)) {
      const token = `${type}:${Date.now()}`;
      this._editorLoadToken = token;
      container.textContent = this._t('ui.loading');
      loadCardModule(type, 'editor').then(() => {
        if (this._editorLoadToken === token) this._syncSubEditor();
      }).catch(error => {
        if (this._editorLoadToken === token) container.textContent = String(error);
      });
      return;
    }

    if (this._subEditorType === type) {
      // Same type: just push updated config
      try { this._subEditor.setConfig(this._config); } catch (e) { if (this._config.entity) console.warn('SoccerLiveCardEditor: sub-editor setConfig failed:', e); }
      return;
    }

    // Type changed: recreate the sub-editor
    {
      container.innerHTML = '';
      this._subEditor = document.createElement(editorName);
      this._subEditorType = type;
      this._subEditor.hass = this.hass;
      this._subEditor.addEventListener('config-changed', e => {
        // Regular sub-editors cannot accidentally change type. The two legacy
        // variants may intentionally migrate themselves to their canonical
        // card plus a mode flag when that mode selector is edited.
        const requestedType = e.detail.config?.card_type;
        const nextType = LEGACY_VARIANT_TYPES.has(type) && requestedType && requestedType !== type
          ? requestedType
          : type;
        this._dispatch({ ...e.detail.config, card_type: nextType });
      });
      container.appendChild(this._subEditor);
    }

    try { this._subEditor.setConfig(this._config); } catch (e) { /* entity not yet set */ }
  }

  _typeChanged(e) {
    const type = e.target.value;
    if (!type) return;
    // Save current type-specific config before switching
    const currentType = this._config.card_type;
    if (currentType) this._configByType[currentType] = { ...this._config };
    // Restore previous config for new type, or start with shared fields only
    const prev = this._configByType[type];
    if (prev) {
      this._dispatch({ ...prev, card_type: type });
    } else {
      const shared = {};
      for (const f of SHARED_FIELDS) {
        if (this._config[f] !== undefined) shared[f] = this._config[f];
      }
      this._dispatch({ ...shared, card_type: type });
    }
  }

  _profileChanged(e) {
    const profile = e.target.value;
    if (!EDITOR_PROFILES[profile]) return;
    this._dispatch(applyEditorProfile(this._config, profile));
    e.target.value = '';
  }

  _dispatch(config) {
    const nextConfig = {
      ...config,
      type: WRAPPER_TYPE,  // always last — sub-editors must never override this
    };
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: nextConfig },
      bubbles: true,
      composed: true,
    }));
  }

  _sensorHint(meta) {
    if (!meta || !this._config?.entity || !this.hass?.states) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<div class="editor-warning">Entity not found: ${this._config.entity}</div>`;
    const sensorType = stateObj.attributes?.sensor_type;
    if (!sensorType || !meta.sensorTypes?.length) return html``;
    if (meta.sensorTypes.includes(sensorType)) {
      return html`<div class="editor-info">Sensor type: ${sensorType}</div>`;
    }
    return html`
      <div class="editor-warning">
        This card usually expects ${meta.sensorTypes.join(', ')}. Selected sensor is ${sensorType}.
      </div>
    `;
  }

  render() {
    const raw = this._config?.card_type || '';
    const selected = CARD_TYPES.find(t => t.value === raw)
      ? raw
      : (Object.entries(TYPE_TO_ELEMENT).find(([, el]) => el === raw)?.[0] || raw);
    const meta = CARD_TYPES.find(t => t.value === selected);
    const legacySelected = LEGACY_VARIANT_TYPES.has(selected) ? meta : null;
    return html`
      <div class="picker-wrap">
        <label class="picker-label">${this._t('editor.profile')}</label>
        <select class="profile-picker" @change=${event => this._profileChanged(event)}>
          <option value="">— ${this._t('editor.choose_profile')} —</option>
          ${Object.keys(EDITOR_PROFILES).map(profile => html`
            <option value=${profile}>${this._t(`editor.profile_${profile}`)}</option>
          `)}
        </select>
        <p class="picker-desc profile-desc">${this._t('editor.profile_hint')}</p>
        <label class="picker-label">${this._t('editor.card_type')}</label>
        <select class="type-picker" @change=${event => this._typeChanged(event)}>
          <option value="" ?selected=${!selected}>— ${this._t('editor.choose_card_type')} —</option>
          ${legacySelected ? html`
            <optgroup label=${this._t('editor.category_legacy')}>
              <option value=${legacySelected.value} selected>${legacySelected.label}</option>
            </optgroup>
          ` : ''}
          ${CARD_CATEGORIES.map(([label, values]) => html`
            <optgroup label=${this._t(label)}>
              ${values.map(value => {
                const item = CARD_TYPES.find(type => type.value === value);
                return item ? html`<option value=${value} ?selected=${value === selected}>${item.label}</option>` : '';
              })}
            </optgroup>
          `)}
        </select>
        ${meta ? html`<p class="picker-desc">${meta.description}</p>` : ''}
        ${this._sensorHint(meta)}
        <label class="enrichment-picker">
          <span>${t('editor.enrichment_entity', resolveLang(this.hass, this._config))}</span>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.enrichment_entity || ''}
            .includeDomains=${['sensor']}
            allow-custom-entity
            @value-changed=${event => {
              const value = event.detail?.value || '';
              if (value === (this._config.enrichment_entity || '')) return;
              const next = { ...this._config };
              if (value) next.enrichment_entity = value;
              else delete next.enrichment_entity;
              this._dispatch(next);
            }}
          ></ha-entity-picker>
          <small>${t('editor.enrichment_entity_hint', resolveLang(this.hass, this._config))}</small>
        </label>
        <label class="enrichment-picker">
          <span>${t('editor.supplementary_entities', resolveLang(this.hass, this._config))}</span>
          <input
            .value=${(this._config.supplementary_entities || []).join(', ')}
            placeholder="sensor.source_1, sensor.source_2"
            @change=${event => {
              const values = event.target.value.split(',').map(value => value.trim()).filter(Boolean);
              const next = { ...this._config };
              if (values.length) next.supplementary_entities = values;
              else delete next.supplementary_entities;
              this._dispatch(next);
            }}
          >
          <small>${t('editor.supplementary_entities_hint', resolveLang(this.hass, this._config))}</small>
        </label>
        <label class="enrichment-auto">
          <span>${t('editor.auto_enrichment', resolveLang(this.hass, this._config))}</span>
          <ha-switch
            .checked=${this._config.auto_enrichment === true}
            @change=${event => this._dispatch({ ...this._config, auto_enrichment: event.target.checked })}
          ></ha-switch>
          <small>${t('editor.auto_enrichment_hint', resolveLang(this.hass, this._config))}</small>
        </label>
      </div>
      <details class="sub-editor-details" open>
        <summary>Card settings</summary>
        <div id="sub-editor"></div>
      </details>
    `;
  }

  static get styles() {
    return css`
      .picker-wrap {
        padding: 12px 0 4px;
        border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        margin-bottom: 16px;
      }
      .picker-desc {
        margin: 6px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .picker-label { display:block; margin-bottom:6px; color:var(--secondary-text-color); font-size:12px; }
      .type-picker,.profile-picker { box-sizing:border-box; width:100%; padding:12px; border:1px solid var(--divider-color); border-radius:8px; background:var(--card-background-color); color:var(--primary-text-color); font-size:16px; }
      .profile-desc { margin-bottom: 14px; }
      .enrichment-picker input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}
      .enrichment-auto{display:grid;grid-template-columns:1fr auto;gap:4px 10px;align-items:center;margin:10px 0}.enrichment-auto small{grid-column:1/3;color:var(--secondary-text-color);font-size:12px}
      .editor-info,
      .editor-warning {
        margin-top: 8px;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 12px;
      }
      .enrichment-picker {
        display: grid;
        gap: 6px;
        margin-top: 12px;
        color: var(--primary-text-color);
        font-size: 12px;
        font-weight: 600;
      }
      .enrichment-picker small {
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 400;
      }
      .editor-info {
        color: var(--primary-text-color);
        background: rgba(33,150,243,0.10);
        border: 1px solid rgba(33,150,243,0.22);
      }
      .editor-warning {
        color: var(--primary-text-color);
        background: rgba(255,152,0,0.12);
        border: 1px solid rgba(255,152,0,0.28);
      }
      .sub-editor-details summary {
        cursor: pointer;
        margin-bottom: 12px;
        color: var(--secondary-text-color);
        font-size: 13px;
        font-weight: 700;
      }
    `;
  }
}

if (!customElements.get('soccer-live-card-editor')) {
  customElements.define('soccer-live-card-editor', SoccerLiveCardEditor);
}

// ─── Single customCards entry ─────────────────────────────────────────────────

window.customCards = window.customCards || [];
if (!window.customCards.some(c => c.type === 'soccer-live-card')) {
  window.customCards.push({
    type: 'soccer-live-card',
    name: 'Soccer Live Card',
    description: 'Live football scores, standings, lineup, countdown, news and more.',
    preview: false,
    documentationURL: 'https://github.com/rononline/soccerlive-card',
  });
}
