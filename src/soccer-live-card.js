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

// ─── Card type registry ───────────────────────────────────────────────────────

const CARD_TYPES = [
  { value: 'soccer-live-team',              label: '⚽ Team',              description: 'Live score, form, lineup, weather for one team' },
  { value: 'soccer-live-standings',         label: '🏅 Standings',         description: 'League table with coloured zones' },
  { value: 'soccer-live-matches',           label: '📋 Matches',           description: 'Day-grouped match list with live highlighting' },
  { value: 'soccer-live-countdown',         label: '⏳ Countdown',         description: 'Countdown timer to next match with live score' },
  { value: 'soccer-live-live-match',        label: '⚽ Live Match',        description: 'Current match with events, possession and shots' },
  { value: 'soccer-live-news',              label: '📰 News',              description: 'Article feed with images and timestamps' },
  { value: 'soccer-live-lineup',            label: '👥 Lineup',            description: 'Starting eleven for both teams' },
  { value: 'soccer-live-timeline',          label: '⏱ Timeline',          description: 'Minute-by-minute match events' },
  { value: 'soccer-live-bracket',           label: '🏆 Bracket',           description: 'Knockout bracket (list or tournament tree)' },
  { value: 'soccer-live-mini-standings',    label: '🏆 Mini Standings',    description: 'Compact standings with configurable rows' },
  { value: 'soccer-live-multi-team',        label: '🔄 Multi Team',        description: 'Multiple teams in one compact card' },
  { value: 'soccer-live-team-competitions', label: '🗂️ Team Competitions', description: 'All competitions for a team with tab selector' },
  { value: 'soccer-live-live-commentary',   label: '💬 Live Commentary',   description: 'Real-time play-by-play commentary' },
];

// Which card types have a visual editor element
const CARD_EDITORS = {
  'soccer-live-standings':         'soccer-live-standings-editor',
  'soccer-live-matches':           'soccer-live-matches-editor',
  'soccer-live-team':              'soccer-live-team-editor',
  'soccer-live-news':              'soccer-live-news-editor',
  'soccer-live-lineup':            'soccer-live-lineup-editor',
  'soccer-live-timeline':          'soccer-live-timeline-editor',
  'soccer-live-bracket':           'soccer-live-bracket-editor',
  'soccer-live-mini-standings':    'soccer-live-mini-standings-editor',
  'soccer-live-countdown':         'soccer-live-countdown-editor',
  'soccer-live-live-match':        'soccer-live-live-match-editor',
  'soccer-live-multi-team':        'soccer-live-multi-team-editor',
  'soccer-live-team-competitions': 'soccer-live-team-competitions-editor',
};

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

    if (!type) {
      this._destroyChild();
      this.innerHTML = '';
      this.appendChild(this._placeholder());
      return;
    }

    if (!CARD_TYPES.find(t => t.value === type)) {
      throw new Error(`Soccer Live Card: unknown card_type "${type}"`);
    }

    // (Re)create child only when the type changes
    if (this._childType !== type) {
      this._destroyChild();
      this._child = document.createElement(type);
      this._childType = type;
      this.innerHTML = '';
      this.appendChild(this._child);
    }

    try {
      this._child.setConfig(this._config);
    } catch (e) {
      // Sub-card may require entity; safe to ignore until user sets one
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
    const type = this._config.card_type;
    const editorName = CARD_EDITORS[type];

    if (!type || !editorName) {
      container.innerHTML = '';
      this._subEditor = null;
      this._subEditorType = null;
      return;
    }

    if (this._subEditorType === type) {
      // Same type: just push updated config
      try { this._subEditor.setConfig(this._config); } catch (e) { /* entity not yet set */ }
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
    // Stub config: keep only card_type (drop old sub-card config)
    this._dispatch({ card_type: type });
  }

  _dispatch(config) {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const selected = this._config?.card_type || '';
    return html`
      <div class="picker-wrap">
        <label class="picker-label">Card type</label>
        <select class="picker-select" @change=${this._typeChanged}>
          <option value="" ?selected=${!selected}>— Choose a card type —</option>
          ${CARD_TYPES.map(t => html`
            <option value="${t.value}" ?selected=${t.value === selected}>${t.label}</option>
          `)}
        </select>
        ${selected ? html`<p class="picker-desc">${CARD_TYPES.find(t => t.value === selected)?.description || ''}</p>` : ''}
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
window.customCards.push({
  type: 'soccer-live-card',
  name: 'Soccer Live Card',
  description: 'Live football scores, standings, lineup, countdown, news and more.',
  preview: false,
  documentationURL: 'https://github.com/rononline/soccerlive-card',
});
