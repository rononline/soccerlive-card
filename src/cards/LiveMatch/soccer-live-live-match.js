import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderLoading, spinnerStyles } from "../loading-spinner.js";
import { renderCardError, renderInfoState, validateEntity } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { translateStatKey } from '../shared-stat-labels.js';
import { soccerCardShellStyles, renderCardHero } from "../card-shell.js";

/**
 * Soccer Live Match Card
 * Displays live match details with events, statistics, and possession data
 *
 * @class SoccerLiveLiveMatchCard
 * @extends LitElement
 *
 * @property {object} hass - Home Assistant instance
 * @property {object} _config - Card configuration (entity, skin, language, etc.)
 * @property {boolean} _isLoading - Loading state while fetching data
 * @property {object} _cachedData - Offline cached match data
 *
 * @method render() - Renders live match display with events and stats
 * @method updated(changedProperties) - Handles hass updates and caches data
 * @method _getMatch(stateObj) - Extracts primary match from state attributes
 * @method _eventIcon(type) - Returns emoji icon based on event type (goal, card, sub, etc.)
 */
class SoccerLiveLiveMatchCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _isLoading: { type: Boolean }, _cachedData: {} }; }

  constructor() {
    super();
    this._isLoading = true;
    this._loadingStarted = Date.now();
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._loadingTimer);
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-live-match-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_next_" }; }

  _getMatch(stateObj) {
    const matches = stateObj.attributes.matches || [];
    return matches.find(m => m.state === 'in' || m.status === 'live') ||
           matches.find(m => m.state === 'pre' || m.status === 'scheduled') ||
           matches.find(m => m.state === 'post') ||
           matches[0] || null;
  }

  _eventIcon(type) {
    if (!type) return '📋';
    const t = (type || '').toLowerCase();
    if (t.includes('goal') || t.includes('score')) return '⚽';
    if (t.includes('yellow')) return '🟨';
    if (t.includes('red')) return '🟥';
    if (t.includes('sub') || t.includes('substitut')) return '🔄';
    if (t.includes('pen')) return '⚽🎯';
    return '📋';
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, matchMetaStyles, spinnerStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 0; overflow: hidden; border-radius: 20px; }
      .hero { position: relative; padding: 20px 16px 16px; }
      .comp-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 16px; height: 16px; object-fit: contain; }
      .comp-name { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2); font-weight: 600; }
      .teams-row { display: flex; align-items: center; justify-content: space-between; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 54px; height: 54px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; max-width: 100px; color: var(--cl-text); }
      .score-center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .sched-info { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 44px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .vs-text { font-size: 24px; font-weight: 900; color: var(--cl-text-2); padding: 8px 0; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 4px; }
      .divider { height: 1px; background: var(--divider-color, var(--cl-divider)); margin: 0 16px; }
      .events { padding: 12px 16px; max-height: 220px; overflow-y: auto; }
      .event-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 12px; border-bottom: 1px solid var(--divider-color, var(--cl-divider)); }
      .event-row:last-child { border-bottom: none; }
      .event-min { font-weight: 700; color: var(--cl-text-2); min-width: 32px; font-size: 11px; }
      .event-icon { font-size: 14px; min-width: 20px; text-align: center; }
      .event-text { flex: 1; color: var(--cl-text); }
      .event-team { font-size: 10px; color: var(--cl-text-2); }
      .no-events { text-align: center; color: var(--cl-text-2); font-size: 12px; padding: 10px 0; }
      /* .meta removed — now .smm-venue-row / .smm-chips from matchMetaStyles */
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); }
      .stats-row { display: flex; align-items: center; padding: 5px 16px; font-size: 11px; gap: 6px; }
      .stat-val { font-weight: 700; min-width: 32px; text-align: center; color: var(--cl-text); }
      .stat-center { flex: 1; display: flex; flex-direction: column; gap: 3px; }
      .stat-label { text-align: center; color: var(--cl-text-2); font-size: 10px; }
      .stat-bars { display: flex; gap: 2px; height: 4px; border-radius: 2px; overflow: hidden; }
      .stat-bar.home { background: var(--cl-accent); border-radius: 2px 0 0 2px; }
      .stat-bar.away { background: var(--cl-text-2); opacity: 0.4; border-radius: 0 2px 2px 0; }

      @media (max-width: 600px) {
        .hero { padding: 14px 10px 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 18px !important; }
        .minute { font-size: 11px !important; }
        .event-row { padding: 4px 0 !important; font-size: 11px !important; }
        .event-min { font-size: 10px !important; }
        .event-icon { font-size: 12px !important; }
        .stat-val { font-size: 10px !important; min-width: 22px !important; }
        .stat-label { font-size: 9px !important; }
        .meta { font-size: 10px !important; padding: 8px 12px !important; }
      }

      @media (max-width: 400px) {
        .score { font-size: 28px !important; letter-spacing: 2px !important; }
        .team-name { font-size: 11px !important; max-width: 65px !important; }
      }
    `];
  }

  updated(changedProperties) {
    if (changedProperties.has('hass')) {
      const stateObj = this.hass?.states[this._config?.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      }
    }
  }

  render() {
    if (!this.hass || !this._config) return renderLoading('Loading...');

    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      const cached = OfflineCache.get(this._config.entity);
      if (cached) return renderCardError('⏱', this._t('ui.offline_cached'), 'Last update: ' + new Date().toLocaleTimeString(), this._t('ui.waiting_integration'));
      return renderCardError('⚠️', this._t('ui.entity_not_found'), `${this._t('ui.entity_not_found')}: ${this._config.entity}`, this._t('ui.check_entity_config'));
    }
    if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(this._config.entity);
      if (cached && cached.data.matches) {
        this._cachedData = cached.data;
      } else {
        return renderCardError('📡', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
      }
    }
    if (this._isLoading) {
      if (Date.now() - this._loadingStarted > 10000)
        return renderCardError('⏱', this._t('ui.loading_timeout'), `${this._t('ui.entity_not_responding')}: ${this._config.entity}`, this._t('ui.check_integration'));
      return renderLoading(this._t('ui.loading'));
    }

    const attributes = (stateObj && stateObj.state !== 'unavailable') ? stateObj.attributes : this._cachedData;
    const allMatches = attributes?.matches || [];
    const match = this._getMatch({ attributes });
    if (!match) {
      // Sensor has matches but none are live/pre/post yet → off-season or empty
      if (!allMatches.length)
        return renderInfoState('📅', this._t('ui.off_season'), this._t('ui.off_season_hint'));
      // Sensor has data but no suitable match (edge case)
      return renderInfoState('⚽', this._t('ui.no_live_match'), this._t('ui.no_live_match_hint'));
    }

    const isLive = match.state === 'in' || match.status === 'live';
    const isFinished = match.state === 'post';
    const isPre = match.state === 'pre' || match.status === 'scheduled';
    const events = match.key_events || match.events || match.match_events || [];
    const compName = match.competition_name || attributes?.league_name || '';
    const compLogo = match.competition_logo || attributes?.league_logo || '';
    let stats = match.stats || [];
    if (!stats.length && match.home_statistics && typeof match.home_statistics === 'object') {
      const homeS = match.home_statistics;
      const awayS = match.away_statistics || {};
      stats = Object.entries(homeS)
        .filter(([k]) => k !== 'Unknown')
        .map(([k, hv]) => ({ label: translateStatKey(k, k2 => this._t(k2)), home: hv, away: awayS[k] ?? '—' }));
    }

    return html`
      <ha-card>
        ${renderCardHero(match.home_logo, match.away_logo)}
        <div class="card-content">
        <div class="hero">
          ${compName ? html`
            <div class="comp-row">
              ${compLogo ? html`<img class="comp-logo" src="${compLogo}" alt="">` : ''}
              <span class="comp-name">${compName}</span>
            </div>
          ` : ''}

          <div class="teams-row">
            <div class="team">
              ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="team-name">${match.home_team || '?'}</span>
            </div>

            <div class="score-center">
              ${isLive ? html`<div class="live-badge">${this._t('status.live')}</div>` : isFinished ? html`<div class="sched-info">${this._t('status.full_time')}</div>` : html`<div class="sched-info">${match.date || this._t('match.vs')}</div>`}
              ${isLive || isFinished
                ? html`<div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>`
                : html`<div class="vs-text">${this._t('match.vs')}</div>`}
              ${isLive && match.clock ? html`<div class="minute">${match.clock}</div>` : ''}
            </div>

            <div class="team">
              ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="team-name">${match.away_team || '?'}</span>
            </div>
          </div>
        </div>

        ${events.length > 0 ? html`
          <div class="divider"></div>
          <div class="events">
            ${events.map(ev => html`
              <div class="event-row">
                <span class="event-min">${ev.clock || ev.minute ? `${ev.clock || ev.minute}'` : ''}</span>
                <span class="event-icon">${this._eventIcon(ev.type)}</span>
                <div class="event-text">
                  <div>${ev.player_name || ev.player || ev.text || ev.description || ''}</div>
                  ${ev.team ? html`<div class="event-team">${ev.team}</div>` : ''}
                </div>
              </div>
            `)}
          </div>
        ` : isLive ? html`
          <div class="divider"></div>
          <div class="events"><div class="no-events">${this._t('popup.no_events')}</div></div>
        ` : ''}

        ${stats.length > 0 ? html`
          <div class="divider"></div>
          ${stats.map(s => {
            const displayStat = value => value !== null && value !== undefined && value !== '' && value !== 'N/A' ? String(value) : '—';
            const rawH = displayStat(s.home ?? s.homeValue);
            const rawA = displayStat(s.away ?? s.awayValue);
            const hv = parseFloat(rawH) || 0;
            const av = parseFloat(rawA) || 0;
            const total = hv + av;
            const homePct = total > 0 ? Math.round((hv / total) * 100) : 50;
            return html`
              <div class="stats-row">
                <span class="stat-val">${rawH}</span>
                <div class="stat-center">
                  <div class="stat-label">${s.label || s.name || s.type || ''}</div>
                  <div class="stat-bars">
                    <div class="stat-bar home" style="width:${homePct}%"></div>
                    <div class="stat-bar away" style="width:${100 - homePct}%"></div>
                  </div>
                </div>
                <span class="stat-val">${rawA}</span>
              </div>
            `;
          })}
        ` : ''}

        ${renderMatchMeta(match, {
          lang: resolveLang(this.hass, this._config),
          t: k => this._t(k),
          hideBroadcasts: this._config.hide_broadcasts === true,
        })}
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-live-match")) {
  customElements.define("soccer-live-live-match", SoccerLiveLiveMatchCard);
}
