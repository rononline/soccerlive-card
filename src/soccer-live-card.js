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

// ─── Card type registry (single source of truth) ─────────────────────────────

const CARD_REGISTRY = [
  { value: 'team',              element: 'soccer-live-team',              editor: 'soccer-live-team-editor',              label: 'Team',              description: 'Live score, form, lineup, weather for one team' },
  { value: 'standings',         element: 'soccer-live-standings',         editor: 'soccer-live-standings-editor',         label: 'Standings',         description: 'League table with coloured zones' },
  { value: 'matches',           element: 'soccer-live-matches',           editor: 'soccer-live-matches-editor',           label: 'Matches',           description: 'Day-grouped match list with live highlighting' },
  { value: 'countdown',         element: 'soccer-live-countdown',         editor: 'soccer-live-countdown-editor',         label: 'Countdown',         description: 'Countdown timer to next match with live score' },
  { value: 'live-match',        element: 'soccer-live-live-match',        editor: 'soccer-live-live-match-editor',        label: 'Live Match',        description: 'Current match with events, possession and shots' },
  { value: 'news',              element: 'soccer-live-news',              editor: 'soccer-live-news-editor',              label: 'News',              description: 'Article feed with images and timestamps' },
  { value: 'lineup',            element: 'soccer-live-lineup',            editor: 'soccer-live-lineup-editor',            label: 'Lineup',            description: 'Starting eleven for both teams' },
  { value: 'timeline',          element: 'soccer-live-timeline',          editor: 'soccer-live-timeline-editor',          label: 'Timeline',          description: 'Minute-by-minute match events' },
  { value: 'bracket',           element: 'soccer-live-bracket',           editor: 'soccer-live-bracket-editor',           label: 'Bracket',           description: 'Knockout bracket (list or tournament tree)' },
  { value: 'mini-standings',    element: 'soccer-live-mini-standings',    editor: 'soccer-live-mini-standings-editor',    label: 'Mini Standings',    description: 'Compact standings with configurable rows' },
  { value: 'scorers',           element: 'soccer-live-scorers',           editor: 'soccer-live-scorers-editor',           label: 'Top Scorers',       description: 'Top scorers list with photo and goal tally' },
  { value: 'multi-team',        element: 'soccer-live-multi-team',        editor: 'soccer-live-multi-team-editor',        label: 'Multi Team',        description: 'Multiple teams in one compact card' },
  { value: 'team-competitions', element: 'soccer-live-team-competitions', editor: 'soccer-live-team-competitions-editor', label: 'Team Competitions', description: 'All competitions for a team with tab selector' },
  { value: 'live-commentary',   element: 'soccer-live-live-commentary',   editor: 'soccer-live-live-commentary-editor',   label: 'Live Commentary',   description: 'Real-time play-by-play commentary' },
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

  _haSelectChanged(e) {
    const type = e.detail?.value;
    if (!type || type === (this._config?.card_type || '')) return;
    this._typeChanged({ target: { value: type } });
  }

  render() {
    const raw = this._config?.card_type || '';
    const selected = CARD_TYPES.find(t => t.value === raw)
      ? raw
      : (Object.entries(TYPE_TO_ELEMENT).find(([, el]) => el === raw)?.[0] || raw);
    const meta = CARD_TYPES.find(t => t.value === selected);
    return html`
      <div class="picker-wrap">
        <ha-select
          label="Card type"
          .value=${selected}
          @value-changed=${this._haSelectChanged}
          @closed=${e => e.stopPropagation()}
          fixedMenuPosition
        >
          <ha-list-item value="">— Choose a card type —</ha-list-item>
          ${CARD_TYPES.map(t => html`
            <ha-list-item value="${t.value}">${t.label}</ha-list-item>
          `)}
        </ha-select>
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
      ha-select {
        width: 100%;
        display: block;
      }
      .picker-desc {
        margin: 6px 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
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
