import { LitElement, html, css } from 'lit-element';

import "./cards/Standings/soccer-live-standings.js";
import "./cards/Standings/soccer-live-standings-editor.js";
import "./cards/Tutte/soccer-live-matches.js";
import "./cards/Tutte/soccer-live-matches-editor.js";
import "./cards/Team/soccer-live-team.js";
import "./cards/Team/soccer-live-team-editor.js";
import "./cards/News/soccer-live-news.js";
import "./cards/News/soccer-live-news-editor.js";
import "./cards/Lineup/soccer-live-lineup.js";
import "./cards/Lineup/soccer-live-lineup-editor.js";
import "./cards/Timeline/soccer-live-timeline.js";
import "./cards/Timeline/soccer-live-timeline-editor.js";
import "./cards/Bracket/soccer-live-bracket.js";
import "./cards/Bracket/soccer-live-bracket-editor.js";
import "./cards/Scorers/soccer-live-scorers.js";
import "./cards/Scorers/soccer-live-scorers-editor.js";
import "./cards/MiniStandings/soccer-live-mini-standings.js";
import "./cards/MiniStandings/soccer-live-mini-standings-editor.js";
import "./cards/Countdown/soccer-live-countdown.js";
import "./cards/Countdown/soccer-live-countdown-editor.js";
import "./cards/LiveMatch/soccer-live-live-match.js";
import "./cards/LiveMatch/soccer-live-live-match-editor.js";
import "./cards/MultiTeam/soccer-live-multi-team.js";
import "./cards/MultiTeam/soccer-live-multi-team-editor.js";
import "./cards/TeamCompetitions/soccer-live-team-competitions.js";
import "./cards/TeamCompetitions/soccer-live-team-competitions-editor.js";
import "./cards/LiveCommentary/soccer-live-live-commentary.js";
import "./cards/LiveCommentary/soccer-live-live-commentary-editor.js";

// ─── Card type registry ───────────────────────────────────────────────────────

// Short card_type values used in YAML; mapped to the custom element name.
// Long names (soccer-live-team etc.) are also accepted for backward compat.
const TYPE_TO_ELEMENT = {
  'team':              'soccer-live-team',
  'standings':         'soccer-live-standings',
  'matches':           'soccer-live-matches',
  'countdown':         'soccer-live-countdown',
  'live-match':        'soccer-live-live-match',
  'news':              'soccer-live-news',
  'lineup':            'soccer-live-lineup',
  'timeline':          'soccer-live-timeline',
  'bracket':           'soccer-live-bracket',
  'mini-standings':    'soccer-live-mini-standings',
  'scorers':           'soccer-live-scorers',
  'multi-team':        'soccer-live-multi-team',
  'team-competitions': 'soccer-live-team-competitions',
  'live-commentary':   'soccer-live-live-commentary',
};

// All known legacy long element names (used in old YAML configs)
const LEGACY_ELEMENTS = new Set(Object.values(TYPE_TO_ELEMENT));

// Resolve card_type (short or known legacy long) → element name
function resolveElement(cardType) {
  return TYPE_TO_ELEMENT[cardType] || (LEGACY_ELEMENTS.has(cardType) ? cardType : null);
}

const CARD_TYPES = [
  { value: 'team',              label: 'Team',              description: 'Live score, form, lineup, weather for one team' },
  { value: 'standings',         label: 'Standings',         description: 'League table with coloured zones' },
  { value: 'matches',           label: 'Matches',           description: 'Day-grouped match list with live highlighting' },
  { value: 'countdown',         label: 'Countdown',         description: 'Countdown timer to next match with live score' },
  { value: 'live-match',        label: 'Live Match',        description: 'Current match with events, possession and shots' },
  { value: 'news',              label: 'News',              description: 'Article feed with images and timestamps' },
  { value: 'lineup',            label: 'Lineup',            description: 'Starting eleven for both teams' },
  { value: 'timeline',          label: 'Timeline',          description: 'Minute-by-minute match events' },
  { value: 'bracket',           label: 'Bracket',           description: 'Knockout bracket (list or tournament tree)' },
  { value: 'mini-standings',    label: 'Mini Standings',    description: 'Compact standings with configurable rows' },
  { value: 'scorers',           label: 'Top Scorers',       description: 'Top scorers list with photo and goal tally' },
  { value: 'multi-team',        label: 'Multi Team',        description: 'Multiple teams in one compact card' },
  { value: 'team-competitions', label: 'Team Competitions', description: 'All competitions for a team with tab selector' },
  { value: 'live-commentary',   label: 'Live Commentary',   description: 'Real-time play-by-play commentary' },
];

// Which card types have a visual editor (short key)
const CARD_EDITORS = {
  'team':              'soccer-live-team-editor',
  'standings':         'soccer-live-standings-editor',
  'matches':           'soccer-live-matches-editor',
  'countdown':         'soccer-live-countdown-editor',
  'live-match':        'soccer-live-live-match-editor',
  'news':              'soccer-live-news-editor',
  'lineup':            'soccer-live-lineup-editor',
  'timeline':          'soccer-live-timeline-editor',
  'bracket':           'soccer-live-bracket-editor',
  'mini-standings':    'soccer-live-mini-standings-editor',
  'scorers':           'soccer-live-scorers-editor',
  'multi-team':        'soccer-live-multi-team-editor',
  'team-competitions': 'soccer-live-team-competitions-editor',
  'live-commentary':   'soccer-live-live-commentary-editor',
};

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
      this.appendChild(this._placeholder());
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

customElements.define('soccer-live-card', SoccerLiveCard);

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

  render() {
    const raw = this._config?.card_type || '';
    // Normalize legacy long names (soccer-live-team → team) for the dropdown
    const selected = CARD_TYPES.find(t => t.value === raw)
      ? raw
      : (Object.entries(TYPE_TO_ELEMENT).find(([, el]) => el === raw)?.[0] || raw);
    const meta = CARD_TYPES.find(t => t.value === selected);
    return html`
      <div class="picker-wrap">
        <label class="picker-label">Card type</label>
        <select class="picker-select" @change=${this._typeChanged}>
          <option value="" ?selected=${!selected}>— Choose a card type —</option>
          ${CARD_TYPES.map(t => html`
            <option value="${t.value}" ?selected=${t.value === selected}>${t.label}</option>
          `)}
        </select>
        ${meta ? html`<p class="picker-desc">${meta.description}</p>` : ''}
      </div>
      <div id="sub-editor"></div>
    `;
  }

  static get styles() {
    return css`
      .picker-wrap {
        padding: 12px 0 4px;
        border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        margin-bottom: 16px;
      }
      .picker-label {
        display: block;
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 6px;
      }
      .picker-select {
        width: 100%;
        padding: 8px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 14px;
        cursor: pointer;
      }
      .picker-desc {
        margin: 6px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `;
  }
}

customElements.define('soccer-live-card-editor', SoccerLiveCardEditor);

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
