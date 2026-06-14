import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderWeatherBadge, weatherBadgeStyles } from "../weather-badge.js";
import { renderLoading, spinnerStyles } from "../loading-spinner.js";
import { renderCardError } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";

/**
 * Soccer Live Countdown Card
 * Shows countdown to next match with live score display when match is active
 * @class SoccerLiveCountdownCard
 * @extends LitElement
 */
class SoccerLiveCountdownCard extends LitElement {
  static get properties() {
    return {
      /** @type {object} Home Assistant instance */
      hass: {},
      /** @type {object} Card configuration */
      _config: {},
      /** @type {boolean} Loading state */
      _isLoading: { type: Boolean },
      /** @type {Date} Current time for countdown updates */
      _now: {},
      /** @type {object} Weather badge HTML element */
      _weatherBadge: {},
      /** @type {object} Cached match data for offline display */
      _cachedData: {}
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._now = new Date();
    this._timer = setInterval(() => { this._now = new Date(); this.requestUpdate(); }, 1000);
    this._loadWeather();
  }

  updated(changedProperties) {
    if (changedProperties.has('hass')) {
      const stateObj = this.hass?.states[this._config?.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      }
    }
    if (changedProperties.has('hass') || changedProperties.has('_config')) {
      this._loadWeather();
    }
  }

  async _loadWeather() {
    if (!this.hass || !this._config) return;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj || !stateObj.attributes.matches) return;
    const match = stateObj.attributes.matches[0];
    if (match && match.venue) {
      try {
        this._weatherBadge = await renderWeatherBadge(match.venue, this.hass, this._config);
        this.requestUpdate();
      } catch (e) {
        console.warn('Weather load failed:', e);
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timer);
  }

  getCardSize() { return 3; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-countdown-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_next_" }; }

  _parseDate(dateStr) {
    if (!dateStr || dateStr === 'N/A') return null;
    try {
      const [datePart, timePart] = dateStr.split(' ');
      const parts = datePart.split(/[-\/]/).map(Number);
      const [hours, minutes] = (timePart || '00:00').split(':').map(Number);
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return new Date(year, month - 1, day, hours, minutes);
      }
    } catch (e) {}
    return null;
  }

  _getNextMatch(stateObj) {
    const matches = stateObj.attributes.matches || [];
    return matches.find(m => m.state === 'pre') ||
           matches.find(m => m.state === 'in') ||
           matches.find(m => m.state === 'post') ||
           matches[0] || null;
  }

  _countdown(dateStr) {
    const target = this._parseDate(dateStr);
    if (!target) return null;
    const diff = target - (this._now || new Date());
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  }

  static get styles() {
    return [skinStyles, spinnerStyles, weatherBadgeStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 16px;
        border-radius: 12px;
      }
      .header { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 18px; height: 18px; object-fit: contain; }
      .comp-name { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2); }
      .teams { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 52px; height: 52px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; color: var(--cl-text); }
      .center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: var(--cl-live); color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .ft-badge { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 42px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 2px; }
      .sched-date { font-size: 11px; color: var(--cl-text-2); margin-bottom: 6px; }
      .countdown { display: flex; justify-content: center; gap: 8px; }
      .cd-block { display: flex; flex-direction: column; align-items: center; min-width: 38px; }
      .cd-num { font-size: 30px; font-weight: 900; color: var(--cl-accent); line-height: 1; }
      .cd-label { font-size: 9px; color: var(--cl-text-2); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
      .cd-sep { font-size: 26px; font-weight: 900; color: var(--cl-text-2); align-self: flex-start; padding-top: 2px; }
      .vs-text { font-size: 20px; font-weight: 900; color: var(--cl-text-2); }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 12px; font-size: 11px; color: var(--cl-text-2); }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); }
    `];
  }

  render() {
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      const cached = OfflineCache.get(this._config.entity);
      if (cached) return renderCardError('⏱', 'Offline - showing cached data', 'Last update: ' + new Date().toLocaleTimeString(), 'Waiting for integration to come online');
      return renderCardError('⚠️', 'Entity not found', `Unable to find: ${this._config.entity}`, 'Check the entity configuration');
    }
    if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(this._config.entity);
      if (cached) {
        this._cachedData = cached.data;
      } else {
        return renderCardError('📡', 'Sensor unavailable', 'The integration may not be running', 'Restart Home Assistant or check the integration');
      }
    }
    if (this._isLoading) return renderLoading('Fetching match data...');

    const attributes = stateObj ? stateObj.attributes : this._cachedData;
    const match = this._getNextMatch({ attributes: attributes });
    if (!match) return renderCardError('⚽', 'No match data', 'Unable to find match information', 'Check if the sensor has data');

    const isLive = match.state === 'in';
    const isFinished = match.state === 'post';
    const countdown = (!isLive && !isFinished) ? this._countdown(match.date) : null;
    const compName = match.competition_name || stateObj.attributes.league_name || '';
    const compLogo = match.competition_logo || stateObj.attributes.league_logo || '';
    const venue = match.venue && match.venue !== 'N/A' ? match.venue : '';
    const venueCity = match.venue_city && match.venue_city !== 'N/A' ? match.venue_city : '';

    const lDay = this._t('cd.days') || 'days';
    const lHrs = this._t('cd.hrs') || 'hrs';
    const lMin = this._t('cd.min') || 'min';
    const lSec = this._t('cd.sec') || 'sec';

    return html`
      <ha-card>
        ${!this._config.hide_header && compName ? html`
          <div class="header">
            ${compLogo ? html`<img class="comp-logo" src="${compLogo}" alt="">` : ''}
            <span class="comp-name">${compName}</span>
          </div>
        ` : ''}

        <div class="teams">
          <div class="team">
            ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.home_team || '?'}</span>
          </div>

          <div class="center">
            ${isLive ? html`
              <div class="live-badge">LIVE</div>
              <div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
              ${match.clock ? html`<div class="minute">${match.clock}</div>` : ''}
            ` : isFinished ? html`
              <div class="ft-badge">FT</div>
              <div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
            ` : countdown ? html`
              ${match.date ? html`<div class="sched-date">${match.date}</div>` : ''}
              <div class="countdown">
                ${countdown.days > 0 ? html`
                  <div class="cd-block"><span class="cd-num">${countdown.days}</span><span class="cd-label">${lDay}</span></div>
                  <span class="cd-sep">:</span>
                ` : ''}
                <div class="cd-block"><span class="cd-num">${String(countdown.hours).padStart(2,'0')}</span><span class="cd-label">${lHrs}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(countdown.mins).padStart(2,'0')}</span><span class="cd-label">${lMin}</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(countdown.secs).padStart(2,'0')}</span><span class="cd-label">${lSec}</span></div>
              </div>
            ` : html`
              ${match.date ? html`<div class="sched-date">${match.date}</div>` : ''}
              <div class="vs-text">${this._t('match.vs')}</div>
            `}
          </div>

          <div class="team">
            ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.away_team || '?'}</span>
          </div>
        </div>

        ${venue ? html`
          <div class="meta">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span>🏟 ${venue}${venueCity ? `, ${venueCity}` : ''}</span>
              ${this._weatherBadge ? this._weatherBadge : ''}
            </div>
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-countdown", SoccerLiveCountdownCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-countdown", name: "Soccer Live Match Countdown", description: "Countdown to next match with live score" });
