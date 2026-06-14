import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class SoccerLiveMultiTeamCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entities || !config.entities.length) throw new Error("At least one entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return Math.max(2, (this._config.entities || []).length + 1); }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-multi-team-editor"); }
  static getStubConfig() { return { entities: [] }; }

  _getMatch(stateObj) {
    const matches = stateObj.attributes.matches || [];
    return matches.find(m => m.state === 'in') ||
           matches.find(m => m.state === 'pre') ||
           matches.find(m => m.state === 'post') ||
           matches[0] || null;
  }

  static get styles() {
    return [skinStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 12px; border-radius: 12px; }
      .title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cl-text-2); margin-bottom: 10px; }
      .match-row { display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.07)); gap: 8px; }
      .match-row:last-child { border-bottom: none; }
      .team-block { display: flex; align-items: center; gap: 6px; flex: 1; min-width: 0; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
      .team-name { font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--cl-text); }
      .score-block { text-align: center; min-width: 60px; }
      .score { font-size: 15px; font-weight: 900; color: var(--cl-text); letter-spacing: 2px; }
      .live-dot { display: inline-block; width: 6px; height: 6px; background: #e53935; border-radius: 50%; margin-right: 3px; animation: pulse 1s infinite; }
      .status { font-size: 10px; color: var(--cl-text-2); }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .no-match { font-size: 11px; color: var(--cl-text-2); text-align: center; padding: 4px; }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); }
    `];
  }

  _renderMatch(entityId) {
    const stateObj = this.hass.states[entityId];
    if (!stateObj) return html`<div class="match-row"><div class="no-match">Unknown: ${entityId}</div></div>`;

    const match = this._getMatch(stateObj);
    if (!match) return html`<div class="match-row"><div class="no-match">No data for ${entityId}</div></div>`;

    const isLive = match.state === 'in';
    const isFinished = match.state === 'post';
    const showScore = isLive || isFinished;
    const dateStr = match.date || '';

    return html`
      <div class="match-row">
        <div class="team-block">
          ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="team-name">${match.home_team || '?'}</span>
        </div>

        <div class="score-block">
          ${isLive ? html`<div><span class="live-dot"></span><span class="status">${match.clock || 'LIVE'}</span></div>` : ''}
          ${showScore
            ? html`<div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>`
            : html`<div class="status">${dateStr || 'vs'}</div>`
          }
          ${isFinished ? html`<div class="status">FT</div>` : ''}
        </div>

        <div class="team-block right">
          <span class="team-name">${match.away_team || '?'}</span>
          ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const entities = this._config.entities || [];
    if (!entities.length) return html`<ha-card><div class="empty">No entities configured</div></ha-card>`;

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`<div class="title">${this._config.title || this._t('card.my_teams')}</div>` : ''}
        ${entities.map(e => this._renderMatch(e))}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-multi-team", SoccerLiveMultiTeamCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-multi-team", name: "Soccer Live Multi Team", description: "Shows multiple teams' matches in one card" });
