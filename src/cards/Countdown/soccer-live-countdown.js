import { LitElement, html, css } from "lit-element";
import { t, resolveLang, parseMatchDate } from "../../i18n.js";
import { scoreText } from "../shared-score.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderWeatherBadge, weatherBadgeStyles } from "../weather-badge.js";
import { renderLoading, spinnerStyles } from "../loading-spinner.js";
import { renderCardError, renderInfoState, renderSyncStatusOrEmpty } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { soccerCardShellStyles, renderCardHero } from "../card-shell.js";
import { displayCompetitionName, resolveCompetitionLogo } from "../shared-competition.js";

/**
 * Soccer Live Countdown Card
 * Shows countdown timer to next match with live score display when match is active
 *
 * @class SoccerLiveCountdownCard
 * @extends LitElement
 *
 * @property {object} hass - Home Assistant instance
 * @property {object} _config - Card configuration (entity, skin, language, etc.)
 * @property {boolean} _isLoading - Loading state while fetching data
 * @property {Date} _now - Current time for countdown calculations (updates every second)
 * @property {object} _weatherBadge - Rendered weather badge HTML element
 * @property {object} _cachedData - Offline cached match data
 *
 * @method render() - Renders countdown timer or live score
 * @method updated(changedProperties) - Handles hass updates and loads weather
 * @method _getNextMatch(stateObj) - Extracts next match in priority order (live → pre → post)
 * @method _countdown(dateStr) - Calculates time remaining to match (days:hours:mins:secs)
 * @method _parseDate(dateStr) - Parses DD/MM/YYYY HH:MM format into Date object
 * @method _loadWeather(venue) - Fetches venue weather conditions via Open-Meteo API
 */
class SoccerLiveCountdownCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _isLoading: { type: Boolean },
      _now: {},
      _weatherBadge: {},
      _cachedData: {}
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    this._loadingStarted = Date.now();
    this._lastWeatherVenue = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._now = new Date();
    // Tick every second, but only re-render while an upcoming match is actually
    // counting down — no point repainting a finished or live match every second
    // on an always-on dashboard.
    if (this._counting === undefined) this._counting = true;
    clearInterval(this._timer);
    this._timer = setInterval(() => {
      this._now = new Date();
      if (this._counting) this.requestUpdate();
    }, 1000);
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
      const stateObj = this.hass?.states[this._config?.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        const match = this._getNextMatch(stateObj);
        // Only an upcoming match drives the per-second countdown repaint.
        this._counting = !!match && match.state === 'pre';
        const venue = match?.venue;
        if (venue && venue !== this._lastWeatherVenue) {
          this._loadWeather();
        }
      }
    }
  }

  async _loadWeather() {
    if (!this.hass || !this._config) return;
    const stateObj = this.hass.states[this._config.entity];
    const attrs = (stateObj && stateObj.state !== 'unavailable') ? stateObj.attributes : this._cachedData;
    if (!attrs?.matches) return;
    const match = this._getNextMatch({ attributes: attrs });
    if (match && match.venue) {
      this._lastWeatherVenue = match.venue;
      try {
        this._weatherBadge = await renderWeatherBadge(match.venue, this.hass, this._config, match.venue_lat, match.venue_lon, match.date_iso);
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

  getCardSize() {
    const stateObj = this.hass?.states[this._config?.entity];
    const match = stateObj ? this._getNextMatch(stateObj) : null;
    return (match?.state === 'in' || match?.state === 'post') ? 1 : 3;
  }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-countdown-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_next_" }; }

  _parseDate(dateStr) {
    return parseMatchDate(dateStr);
  }

  _getNextMatch(stateObj) {
    let matches = stateObj.attributes.matches || [];
    const filter = this._config?.competition_filter?.toLowerCase();
    if (filter) {
      const filtered = matches.filter(m =>
        (m.competition_name || m.league_name || '').toLowerCase().includes(filter)
      );
      if (filtered.length) matches = filtered;
    }
    return matches.find(m => m.state === 'in') ||
           matches.find(m => m.state === 'pre') ||
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
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, matchMetaStyles, spinnerStyles, weatherBadgeStyles, css`
      :host {
        display: block;
        container-type: inline-size;
      }
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 20px;
        overflow: hidden;
      }
      .cd-body { padding: 16px; }
      /* .top-bar / .competition / .comp-icon from soccerHeaderStyles */
      /* Compact mode */
      ha-card.compact .cd-body { padding: 10px 14px; }
      ha-card.compact .team-logo { width: 32px !important; height: 32px !important; }
      ha-card.compact .team-name { font-size: 11px !important; }
      ha-card.compact .cd-num { font-size: 22px !important; }
      ha-card.compact .cd-sep { font-size: 18px !important; }
      ha-card.compact .cd-label { font-size: 8px !important; }
      ha-card.compact .sched-date { font-size: 10px !important; margin-bottom: 4px !important; }
      ha-card.compact .score { font-size: 30px !important; letter-spacing: 3px !important; }
      ha-card.compact .smm-venue-row,
      ha-card.compact .smm-chips { padding: 6px 14px !important; font-size: 10px !important; }
      ha-card.compact .cd-form,
      ha-card.compact .cd-h2h { display: none; }
      .teams { display: flex; align-items: center; justify-content: space-between; min-width: 0; margin-bottom: 16px; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1 1 0; min-width: 0; }
      .team-logo { width: 52px; height: 52px; object-fit: contain; }
      .team-name { max-width: 100%; font-size: 13px; font-weight: 700; text-align: center; color: var(--cl-text); overflow-wrap: anywhere; }
      .center { min-width: 0; text-align: center; flex: 0 1 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: var(--cl-live); color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .ft-badge { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 42px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 2px; }
      .sched-date { font-size: 11px; color: var(--cl-text-2); margin-bottom: 6px; }
      .countdown { display: flex; max-width: 100%; justify-content: center; gap: clamp(3px, 1.5cqi, 8px); }
      .cd-block { display: flex; flex-direction: column; align-items: center; min-width: 0; }
      .cd-num { font-size: 30px; font-weight: 900; color: var(--cl-accent); line-height: 1; }
      .cd-label { font-size: 9px; color: var(--cl-text-2); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 2px; }
      .cd-sep { font-size: 26px; font-weight: 900; color: var(--cl-text-2); align-self: flex-start; padding-top: 2px; }
      .vs-text { font-size: 20px; font-weight: 900; color: var(--cl-text-2); }
      /* .meta removed — now .smm-venue-row / .smm-chips from matchMetaStyles */
      .cd-h2h { font-size: 10px; color: var(--cl-text-2); text-align: center; margin-top: 10px; padding: 5px 12px; background: rgba(255,255,255,0.04); border-radius: 8px; }
      .cd-h2h strong { color: var(--cl-text); }
      .cd-h2h strong.hw { color: var(--cl-green); }
      .cd-h2h strong.aw { color: var(--cl-live); }
      .cd-h2h-date { opacity: 0.55; margin-left: 4px; }
      .cd-form { display: flex; gap: 3px; justify-content: center; margin-top: 4px; }
      .cd-fd { width: 6px; height: 6px; border-radius: 50%; }
      .cd-fd.w { background: var(--cl-green, #10b981); }
      .cd-fd.l { background: var(--cl-live, #ef4444); }
      .cd-fd.d { background: var(--cl-text-2, #94a3b8); opacity: 0.5; }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); }
      /* Compact live strip (shown instead of score when match is in progress) */
      .cd-live-strip {
        display: flex; align-items: center; gap: 8px;
        padding: 14px 16px; font-size: 12px;
      }
      .cd-live-dot {
        width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
        background: var(--cl-live, #ef4444);
        animation: cd-pulse 1.5s ease-in-out infinite;
      }
      @keyframes cd-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      .cd-live-label {
        font-size: 10px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.08em; color: var(--cl-live, #ef4444);
      }
      .cd-ft-dot { font-size: 12px; color: var(--cl-text-2); line-height: 1; }
      .cd-ft-label {
        font-size: 10px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.08em; color: var(--cl-text-2);
      }
      .cd-live-sep { color: var(--cl-text-2); }
      .cd-live-teams { font-weight: 600; flex: 1; }
      .cd-live-clock { font-size: 12px; font-weight: 800; color: var(--cl-text); }
      .cd-live-min { font-size: 10px; font-weight: 400; color: var(--cl-text-2); }

      @container (max-width: 600px) {
        .cd-body { padding: 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 16px !important; }
        .cd-num { font-size: 24px !important; }
        .cd-label { font-size: 8px !important; }
        .cd-sep { font-size: 20px !important; }
        .sched-date { font-size: 10px !important; }
        .meta { font-size: 10px !important; padding: 10px 12px !important; gap: 4px !important; }
        .comp-name { font-size: 10px !important; }
      }

      /* On narrow screens: teams on top row, countdown below */
      @container (max-width: 480px) {
        .teams { flex-wrap: wrap; justify-content: space-between; margin-bottom: 8px; }
        .team { flex: 0 1 auto; flex-direction: row; align-items: center; gap: 6px; }
        .team:first-child { order: 1; }
        .team:last-child  { order: 2; }
        .center { order: 3; flex: 0 0 100%; padding: 8px 0 0; }
        .team-logo { width: 32px !important; height: 32px !important; }
        .team-name { font-size: 11px !important; text-align: left !important; }
        .cd-num { font-size: 28px !important; }
        .cd-sep { font-size: 22px !important; }
        .countdown { gap: 6px !important; }
        .score { font-size: 32px !important; letter-spacing: 3px !important; }
        .sched-date { font-size: 11px !important; margin-bottom: 8px; }
      }

      @container (max-width: 360px) {
        .cd-num { font-size: 22px !important; min-width: 28px !important; }
        .cd-sep { font-size: 16px !important; }
        .countdown { gap: 3px !important; }
      }
    `];
  }

  render() {
    this.style.display = '';
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading(this._t('ui.loading'));
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      const cached = OfflineCache.get(this._config.entity);
      if (cached && cached.data.matches) {
        this._cachedData = cached.data;
      } else {
        return renderCardError('⚠️', this._t('ui.entity_not_found'), `${this._t('ui.entity_not_found')}: ${this._config.entity}`, this._t('ui.check_entity_config'));
      }
    }
    if (stateObj && stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(this._config.entity);
      if (cached && cached.data.matches) {
        this._cachedData = cached.data;
      } else {
        return renderCardError('📡', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
      }
    }
    if (stateObj && this._isLoading) {
      if (Date.now() - this._loadingStarted > 10000)
        return renderCardError('⏱', this._t('ui.loading_timeout'), `${this._t('ui.entity_not_responding')}: ${this._config.entity}`, this._t('ui.check_integration'));
      return renderLoading(this._t('ui.loading'));
    }

    const attributes = (stateObj && stateObj.state !== 'unavailable') ? stateObj.attributes : this._cachedData;
    const match = this._getNextMatch({ attributes: attributes });
    if (!match) {
      return renderSyncStatusOrEmpty(attributes, (k) => this._t(k),
        () => renderInfoState('📅', this._t('ui.off_season'), this._t('ui.off_season_hint')));
    }

    const isLive     = match.state === 'in';
    const isFinished = match.state === 'post';
    const leagueInfo = attributes?.league_info?.[0];
    const rawComp    = match.competition_name || leagueInfo?.name || leagueInfo?.abbreviation || attributes?.league_name || '';
    const compName   = displayCompetitionName(rawComp, resolveLang(this.hass, this._config));
    const compLogo   = resolveCompetitionLogo({
      competitionName: rawComp,
      competitionLogo: match.competition_logo || leagueInfo?.logo_href || attributes?.league_logo,
      fallbackLogo: null,
      isFriendly: match.is_friendly,
    });

    // Live or finished: hide entirely or show a compact one-line strip
    if (isLive || isFinished) {
      if (this._config.hide_when_live) {
        this.style.display = 'none';
        return html``;
      }
      return html`
        <ha-card>
          <div class="cd-live-strip">
            ${isLive
              ? html`<span class="cd-live-dot"></span>
                     <span class="cd-live-label">${this._t('status.live')}</span>`
              : html`<span class="cd-ft-dot">✓</span>
                     <span class="cd-ft-label">${this._t('status.full_time')}</span>`}
            <span class="cd-live-sep">·</span>
            <span class="cd-live-teams">${match.home_team || '?'} – ${match.away_team || '?'}</span>
            ${isLive
              ? html`<span class="cd-live-clock">${scoreText(match.home_score)}–${scoreText(match.away_score)}${match.clock ? html`<span class="cd-live-min"> ${match.clock}'</span>` : ''}</span>`
              : isFinished
                ? html`<span class="cd-live-clock">${scoreText(match.home_score)}–${scoreText(match.away_score)}</span>`
                : ''}
          </div>
        </ha-card>
      `;
    }

    const countdown = this._countdown(match.date);
    const lDay = this._t('cd.days') || 'days';
    const lHrs = this._t('cd.hrs') || 'hrs';
    const lMin = this._t('cd.min') || 'min';
    const lSec = this._t('cd.sec') || 'sec';

    const renderForm = (formStr) => {
      if (!formStr) return '';
      return html`<div class="cd-form">${formStr.split('').map(c => {
        const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
        return html`<span class="cd-fd ${cls}"></span>`;
      })}</div>`;
    };

    return html`
      <ha-card class="${this._config.compact ? 'compact' : ''}">
        ${renderCardHero(match.home_logo, match.away_logo)}
        <div class="card-content">
        ${!this._config.hide_header ? renderSoccerHeader({
          logo: compLogo || null,
          title: compName,
          badge: renderSoccerBadge(match.date || '', 'date'),
        }) : ''}

        <div class="cd-body">
        <div class="teams">
          <div class="team">
            ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.home_team || '?'}</span>
            ${renderForm(match.home_form)}
          </div>

          <div class="center">
            ${countdown ? html`
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
            ${renderForm(match.away_form)}
          </div>
        </div>
        ${(() => {
          const last = (match.head_to_head || [])[0];
          if (!last || last.home_score === undefined) return '';
          const hs = parseInt(last.home_score), as_ = parseInt(last.away_score);
          const hw = !isNaN(hs) && !isNaN(as_) && hs > as_;
          const aw = !isNaN(hs) && !isNaN(as_) && as_ > hs;
          // Fall back to a dash rather than rendering "NaN" for a non-numeric score.
          const hd = Number.isFinite(hs) ? hs : '-';
          const ad = Number.isFinite(as_) ? as_ : '-';
          return html`<div class="cd-h2h">
            ${last.home_team} <strong class="${hw ? 'hw' : aw ? 'aw' : ''}">${hd}–${ad}</strong> ${last.away_team}
            ${last.date ? html`<span class="cd-h2h-date">${last.date.split(' ')[0]}</span>` : ''}
          </div>`;
        })()}

        </div>
        ${renderMatchMeta(match, {
          lang: resolveLang(this.hass, this._config),
          t: k => this._t(k),
          weatherBadge: this._weatherBadge || null,
          hideBroadcasts: this._config.hide_broadcasts === true,
        })}
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-countdown")) {
  customElements.define("soccer-live-countdown", SoccerLiveCountdownCard);
}
