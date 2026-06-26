import { LitElement, html, css } from 'lit-element';

import "./cards/Standings/soccer-live-standings.js";
import "./cards/Standings/soccer-live-standings-editor.js";
import "./cards/Tutte/soccer-live-matches.js";
import "./cards/Tutte/soccer-live-matches-editor.js";
import "./cards/Team/soccer-live-team.js";
import "./cards/Team/soccer-live-team-editor.js";
import "./cards/News/soccer-live-news.js";
import "./cards/News/soccer-live-news-editor.js";
import "./cards/Bracket/soccer-live-bracket.js";
import "./cards/Bracket/soccer-live-bracket-editor.js";
import "./cards/Scorers/soccer-live-scorers.js";
import "./cards/Scorers/soccer-live-scorers-editor.js";
import "./cards/MiniStandings/soccer-live-mini-standings.js";
import "./cards/MiniStandings/soccer-live-mini-standings-editor.js";
import "./cards/Countdown/soccer-live-countdown.js";
import "./cards/Countdown/soccer-live-countdown-editor.js";
import "./cards/MultiTeam/soccer-live-multi-team.js";
import "./cards/MultiTeam/soccer-live-multi-team-editor.js";
import "./cards/TeamCompetitions/soccer-live-team-competitions.js";
import "./cards/TeamCompetitions/soccer-live-team-competitions-editor.js";
import "./cards/MatchCenter/soccer-live-match-center.js";
import "./cards/MatchCenter/soccer-live-match-center-editor.js";
import "./cards/TeamForm/soccer-live-team-form.js";
import "./cards/TeamForm/soccer-live-team-form-editor.js";
import "./cards/Diagnostics/soccer-live-diagnostics.js";
import "./cards/Diagnostics/soccer-live-diagnostics-editor.js";
import "./cards/Ticker/soccer-live-ticker.js";
import "./cards/Ticker/soccer-live-ticker-editor.js";

// ─── Card type registry (single source of truth) ─────────────────────────────

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
  { value: 'team-form',         element: 'soccer-live-team-form',         editor: 'soccer-live-team-form-editor',         label: 'Team Form',         description: 'Form trend, W/D/L dots, goals chart, home/away split', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'] },
  { value: 'diagnostics',       element: 'soccer-live-diagnostics',       editor: 'soccer-live-diagnostics-editor',       label: 'Diagnostics',       description: 'Sensor health, update status and schedule counters', sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed', 'all_matches_today', 'standings', 'top_scorers', 'bracket', 'news', 'commentary'] },
  { value: 'ticker',            element: 'soccer-live-ticker',            editor: 'soccer-live-ticker-editor',            label: 'Ticker',            description: "Horizontal scrollable strip of today's matches", sensorTypes: ['all_matches_today', 'team_matches', 'team_matches_mixed'] },
];

// Derived lookups (never edit these manually — edit CARD_REGISTRY above)
const TYPE_TO_ELEMENT = Object.fromEntries(CARD_REGISTRY.map(c => [c.value, c.element]));
const LEGACY_ELEMENTS = new Set(CARD_REGISTRY.map(c => c.element));
const CARD_TYPES      = CARD_REGISTRY.map(({ value, label, description }) => ({ value, label, description }));
const CARD_EDITORS    = Object.fromEntries(CARD_REGISTRY.filter(c => c.editor).map(c => [c.value, c.editor]));

// Resolve card_type (short or known legacy long) → element name
function resolveElement(cardType) {
  return TYPE_TO_ELEMENT[cardType] || (LEGACY_ELEMENTS.has(cardType) ? cardType : null);
}

// Shared config fields preserved when switching card type
const SHARED_FIELDS = ['entity', 'skin', 'language', 'show_event_toasts'];

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
    if (this._child) this._child.hass = hass;
  }

  setConfig(config) {
    this._config = config || {};
    const type = this._config.card_type;
    const element = type ? resolveElement(type) : null;

    if (!element) {
      this._destroyChild();
      this.innerHTML = '';
      this.appendChild(type ? this._errorCard(`Unknown card_type: "${type}"`) : this._placeholder());
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
    if (this._hass) this._child.hass = this._hass;
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
    el.textContent = 'Soccer Live — open the editor to choose a card type.';
    return el;
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
    const raw = this._config.card_type;
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
        // Preserve card_type when sub-editor fires changes
        this._dispatch({ ...e.detail.config, card_type: type });
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
    const schema = [{
      name: 'card_type',
      selector: {
        select: {
          mode: 'dropdown',
          options: [
            { value: '', label: '— Choose a card type —' },
            ...CARD_TYPES.map(t => ({ value: t.value, label: t.label })),
          ],
        },
      },
    }];
    return html`
      <div class="picker-wrap">
        <ha-form
          .hass=${this.hass}
          .data=${{ card_type: selected }}
          .schema=${schema}
          .computeLabel=${() => 'Card type'}
          @value-changed=${(e) => {
            const type = e.detail.value?.card_type;
            if (!type || type === (this._config?.card_type || '')) return;
            this._typeChanged({ target: { value: type } });
          }}
        ></ha-form>
        ${meta ? html`<p class="picker-desc">${meta.description}</p>` : ''}
        ${this._sensorHint(meta)}
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
      .editor-info,
      .editor-warning {
        margin-top: 8px;
        padding: 8px 10px;
        border-radius: 6px;
        font-size: 12px;
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
