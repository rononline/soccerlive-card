import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderLoading, spinnerStyles } from "../loading-spinner.js";
import { renderCardError } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { soccerCardShellStyles } from "../card-shell.js";

/**
 * Soccer Live Multi Team Card
 * Shows multiple teams' matches in one compact card with auto-grouping
 *
 * @class SoccerLiveMultiTeamCard
 * @extends LitElement
 *
 * @property {object} hass - Home Assistant instance
 * @property {object} _config - Card configuration with entities array
 * @property {boolean} _isLoading - Loading state while fetching data
 * @property {object} _cachedData - Offline cached match data
 *
 * @method render() - Renders all team matches in compact row format
 * @method updated(changedProperties) - Handles hass updates and caches data
 * @method _getMatch(stateObj) - Extracts best match per team (live → next → last)
 * @method _renderMatch(entityId) - Renders single match row for team
 */
class SoccerLiveMultiTeamCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _isLoading: { type: Boolean }, _cachedData: {} }; }

  setConfig(config) {
    if (!config.entities || !config.entities.length) throw new Error("At least one entity required");
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    this._loadingStarted = Date.now();
    this._lastWeatherVenue = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._loadingTimer);
  }

  updated(changedProperties) {
    if (changedProperties.has('hass')) {
      const entities = this._config?.entities || [];
      const allAvailable = entities.every(e => {
        const stateObj = this.hass?.states[e];
        return stateObj && stateObj.state !== 'unavailable';
      });
      if (allAvailable) {
        this._isLoading = false;
        entities.forEach(e => {
          const stateObj = this.hass?.states[e];
          if (stateObj) OfflineCache.set(e, stateObj.attributes);
        });
      }
    }
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
    return [skinStyles, soccerCardShellStyles, spinnerStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 12px; border-radius: 20px; overflow: hidden; }
      .title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cl-text-2); margin-bottom: 10px; }
      .match-row { position: relative; z-index: 1; display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.07)); gap: 8px; }
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
    if (!stateObj) return html`<div class="match-row"><div class="no-match">${this._t('team.unknown_entity')}: ${entityId}</div></div>`;

    const match = this._getMatch(stateObj);
    if (!match) return html`<div class="match-row"><div class="no-match">${this._t('team.no_match')} (${entityId})</div></div>`;

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
          ${isLive ? html`<div><span class="live-dot"></span><span class="status">${match.clock || this._t('status.live')}</span></div>` : ''}
          ${showScore
            ? html`<div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>`
            : html`<div class="status">${dateStr || this._t('match.vs')}</div>`
          }
          ${isFinished ? html`<div class="status">${this._t('status.full_time')}</div>` : ''}
        </div>

        <div class="team-block right">
          <span class="team-name">${match.away_team || '?'}</span>
          ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
        </div>
      </div>
    `;
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entities = this._config.entities || [];
    if (!entities.length) return renderCardError('⚽', this._t('ui.no_entities_configured'), '', this._t('ui.add_team_entity'));
    if (this._isLoading) {
      if (Date.now() - this._loadingStarted > 10000)
        return renderCardError('⏱', this._t('ui.loading_timeout'), this._t('ui.entity_not_responding'), this._t('ui.check_integration'));
      return renderLoading(this._t('ui.loading'));
    }

    const missingEntities = entities.filter(e => !this.hass.states[e]);
    const hasAnyUnavailable = entities.some(e => this.hass.states[e]?.state === 'unavailable');
    if (missingEntities.length > 0 && !hasAnyUnavailable) {
      const cached = OfflineCache.get(entities[0]);
      if (cached) return renderCardError('⏱', this._t('ui.offline_cached'), 'Last update: ' + new Date().toLocaleTimeString(), this._t('ui.waiting_integration'));
      return renderCardError('⚠️', this._t('ui.entity_not_found'), `${this._t('ui.entity_not_found')}: ${missingEntities[0]}`, this._t('ui.check_entity_config'));
    }

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${!this._config.hide_header ? html`<div class="title">${this._config.title || this._t('card.my_teams')}</div>` : ''}
        ${entities.map(e => this._renderMatch(e))}
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-multi-team")) {
  customElements.define("soccer-live-multi-team", SoccerLiveMultiTeamCard);
}
