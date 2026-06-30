import { LitElement, html, css, render } from "lit-element";
import { t, resolveLang, parseMatchDate, formatMatchDate, formatDateOnly } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderWeatherBadge, weatherBadgeStyles } from "../weather-badge.js";
import { renderLoading, spinnerStyles } from "../loading-spinner.js";
import { renderCardError, renderInfoState } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { soccerHeaderStyles } from '../shared-header.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';

/**
 * Soccer Live Team Card
 * Displays current/next match for a team with detailed stats, form, and venue info
 *
 * @class SoccerLiveTeamCard
 * @extends LitElement
 *
 * @property {object} hass - Home Assistant instance
 * @property {object} _config - Card configuration (entity, skin, language, etc.)
 * @property {boolean} _isLoading - Loading state while fetching data
 * @property {boolean} showPopup - Whether to show match details popup
 * @property {object} activeMatch - Currently selected match for popup display
 * @property {Array} _eventSubscriptions - Event listener unsubscribe functions
 * @property {string} _toastMessage - Toast notification message
 * @property {boolean} _toastVisible - Toast visibility state
 * @property {object} _cachedData - Offline cached match data
 *
 * @method render() - Renders the card with match info, stats, and popups
 * @method updated(changedProperties) - Handles property changes, loads weather data
 * @method _getMatch(stateObj) - Extracts primary match from state attributes
 * @method _renderPopup() - Renders detailed match information popup
 * @method _loadWeather(venue) - Fetches and caches weather for stadium
 */
class SoccerLiveTeamCard extends LitElement {
  static get properties() {
    return {
      /** @type {object} Home Assistant instance */
      hass: {},
      /** @type {object} Card configuration object */
      _config: {},
      /** @type {boolean} Loading state while fetching data */
      _isLoading: { type: Boolean },
      showPopup: { type: Boolean },
      activeMatch: { type: Object },
      _eventSubscriptions: { type: Array },
      _toastMessage: { type: String },
      _toastVisible: { type: Boolean },
      _toastVariant: { type: String },
      _weatherBadge: { type: Object },
      _cachedData: { type: Object },
      showEventToasts: { type: Boolean },
      myTeam: { type: String },
      showPreviousMatches: { type: Boolean },
      showFormTrend: { type: Boolean },
      compact: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Entity required");
    }
    this._config = config;
    applySkin(this, config);
    const scoreSize = ['big', 'huge'].includes(config.score_size) ? config.score_size : 'normal';
    this.setAttribute('data-score', scoreSize);
    this._isLoading = true;
    this._loadingStarted = Date.now();
    this._lastWeatherVenue = null;
    this.showPopup = false;
    this.activeMatch = null;
    this.showEventToasts = config.show_event_toasts === true;
    this.myTeam = (config.my_team || '').toLowerCase();
    this.showPreviousMatches = config.show_previous_matches === true;
    this.showFormTrend = config.show_form_trend === true;
    this.compact = config.compact === true;
    this._toastMessage = '';
    this._toastVisible = false;
    this._toastVariant = 'goal';
    this._toastTimer = null;
    if (!this._animationTimers) this._animationTimers = [];
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  _translatePhase(phase) {
    if (!phase) return '';
    const map = {
      'regular-season': this._t('phase.regular_season'),
      'regular season': this._t('phase.regular_season'),
      'group-stage': this._t('phase.group_stage'),
      'group stage': this._t('phase.group_stage'),
      'playoffs': this._t('phase.playoffs'),
    };
    return map[String(phase).toLowerCase()] || phase;
  }

  _shouldShowPhase(phase) {
    if (!phase) return false;
    const lower = String(phase).toLowerCase();
    if (lower === 'regular-season') return false;
    return true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._subscribeToEvents();
    this._countdownInterval = setInterval(() => this.requestUpdate(), 30000);
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }


  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._countdownInterval);
    this._countdownInterval = null;
    clearTimeout(this._loadingTimer);
    this._eventSubscriptionGeneration = (this._eventSubscriptionGeneration || 0) + 1;
    this._eventSubscriptionPromise = null;

    if (this._eventSubscriptions && Array.isArray(this._eventSubscriptions)) {
      this._eventSubscriptions.forEach(unsub => {
        if (typeof unsub === 'function') {
          unsub();
        }
      });
      this._eventSubscriptions = [];
    }

    if (this._escHandler) {
      document.removeEventListener('keydown', this._escHandler);
      this._escHandler = null;
    }
    this._removePopupPortal();

    clearTimeout(this._toastTimer);
    this._toastTimer = null;

    if (this._animationTimers) {
      this._animationTimers.forEach(t => clearTimeout(t));
      this._animationTimers = [];
    }
  }

  _subscribeToEvents() {
    if (!this.hass || !this.hass.connection) return;
    if (this._eventSubscriptionPromise || this._eventSubscriptions?.length) return;

    const generation = this._eventSubscriptionGeneration || 0;
    const handler = this._handleSoccerLiveEvent.bind(this);
    const subscriptionPromise = Promise.allSettled(
      ['soccer_live_goal', 'soccer_live_yellow_card', 'soccer_live_red_card'].map(evt =>
        this.hass.connection.subscribeEvents(handler, evt)
      )
    );
    this._eventSubscriptionPromise = subscriptionPromise;

    subscriptionPromise.then(results => {
      const subscriptions = results
        .filter(result => result.status === 'fulfilled' && typeof result.value === 'function')
        .map(result => result.value);

      if ((this._eventSubscriptionGeneration || 0) !== generation || !this.isConnected) {
        subscriptions.forEach(unsub => unsub());
        return;
      }

      const failed = results.filter(r => r.status === 'rejected');
      if (failed.length > 0) {
        subscriptions.forEach(unsub => unsub());
        this._eventSubscriptions = [];
        failed.forEach(r => console.warn('Soccer Live Team subscription failed:', r.reason));
      } else {
        this._eventSubscriptions = subscriptions;
      }
    }).finally(() => {
      if (this._eventSubscriptionPromise === subscriptionPromise) {
        this._eventSubscriptionPromise = null;
      }
    });
  }

  _eventBelongsToThisCard(eventData) {
    if (!this.hass || !this._config) return false;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return false;
    const matches = stateObj.attributes.matches || [];
    if (matches.length === 0) return false;
    const m = matches[0];
    return m.home_team === eventData.home_team && m.away_team === eventData.away_team;
  }

  _handleSoccerLiveEvent(event) {
    const eventType = event.event_type;
    const eventData = event.data;
    if (!this._eventBelongsToThisCard(eventData)) return;
    if (!this.showEventToasts) return;

    if (eventType === 'soccer_live_goal') {
      const scoringSide = eventData.team === eventData.home_team ? 'home' : 'away';
      requestAnimationFrame(() => this._triggerGoalCelebration(scoringSide, eventData));
    } else {
      this._showEventToast(eventType, eventData);
    }
  }

  _showEventToast(eventType, eventData) {
    let message = '';
    let variant = 'goal';
    if (eventType === 'soccer_live_goal') {
      message = `${this._t('event.goal').toUpperCase()}! ${eventData.player} · ${eventData.home_team} ${eventData.home_score} - ${eventData.away_score} ${eventData.away_team}`;
      variant = 'goal';
    } else if (eventType === 'soccer_live_yellow_card') {
      message = `🟨 ${this._t('event.yellow_card')} · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'yellow';
    } else if (eventType === 'soccer_live_red_card') {
      message = `🟥 ${this._t('event.red_card')} · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'red';
    }
    if (!message) return;
    this._toastMessage = message;
    this._toastVariant = variant;
    this._toastVisible = true;
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this._toastVisible = false;
      this.requestUpdate();
    }, 4000);
    this.requestUpdate();
  }

  _triggerGoalCelebration(scoringSide, eventData) {
    const card = this.shadowRoot && this.shadowRoot.querySelector('ha-card');
    if (!card) return;

    card.querySelectorAll('.confetti, .goal-banner, .goal-flash-overlay').forEach(e => e.remove());
    card.classList.remove('goal-flash');
    void card.offsetWidth;
    card.classList.add('goal-flash');
    this._animationTimers.push(setTimeout(() => card.classList.remove('goal-flash'), 1700));

    const flash = document.createElement('div');
    flash.className = 'goal-flash-overlay';
    card.appendChild(flash);
    this._animationTimers.push(setTimeout(() => flash.remove(), 1000));

    const banner = document.createElement('div');
    banner.className = 'goal-banner';
    const bannerText = document.createElement('div');
    bannerText.className = 'goal-banner-text';
    bannerText.textContent = (this._t('event.goal') || 'GOAL') + '!';
    banner.appendChild(bannerText);
    card.appendChild(banner);
    this._animationTimers.push(setTimeout(() => banner.remove(), 1700));

    const scoreEl = card.querySelector('.score-numbers');
    if (scoreEl) {
      scoreEl.classList.remove('goal-scored');
      void scoreEl.offsetWidth;
      scoreEl.classList.add('goal-scored');
      this._animationTimers.push(setTimeout(() => scoreEl.classList.remove('goal-scored'), 1300));
    }

    const sides = card.querySelectorAll('.team-side .team-logo-big');
    const scorerLogo = scoringSide === 'away' ? sides[1] : sides[0];
    if (scorerLogo) {
      scorerLogo.classList.remove('scorer-bounce');
      void scorerLogo.offsetWidth;
      scorerLogo.classList.add('scorer-bounce');
      this._animationTimers.push(setTimeout(() => scorerLogo.classList.remove('scorer-bounce'), 1300));
    }

    if (navigator.vibrate) navigator.vibrate([180, 80, 180, 80, 280]);

    this._animationTimers.push(setTimeout(() => this._showEventToast('soccer_live_goal', eventData), 600));

    const colors = ['#ec4899', '#6366f1', '#06b6d4', '#fbbf24', '#10b981', '#ef4444'];
    const emojis = ['⚽', '🎉', '✨', '🔥', '⭐'];
    for (let i = 0; i < 36; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      const useEmoji = Math.random() > 0.55;
      if (useEmoji) {
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.fontSize = (14 + Math.random() * 10) + 'px';
        c.style.background = 'transparent';
      } else {
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      }
      const dx = (Math.random() - 0.5) * 380 + 'px';
      const dy = (Math.random() * 240 + 100) + 'px';
      c.style.setProperty('--dx', dx);
      c.style.setProperty('--dy', dy);
      c.style.animationDelay = (Math.random() * 0.3) + 's';
      card.appendChild(c);
      this._animationTimers.push(setTimeout(() => c.remove(), 2000));
    }
  }

  _parseMatchDate(dateStr) {
    return parseMatchDate(dateStr);
  }

  _liveCountdown(match) {
    if (!match || match.state !== 'pre') return null;
    const d = this._parseMatchDate(match.date);
    if (!d) return null;
    const diffMs = d - new Date();
    if (diffMs <= 0 || diffMs > 48 * 3600 * 1000) return null;
    const totalMin = Math.floor(diffMs / 60000);
    if (totalMin < 1) return this._t('time.now');
    if (totalMin < 60) return this._t('time.in_n_min', { n: totalMin });
    const h = Math.floor(totalMin / 60);
    return this._t('time.in_n_h', { n: h });
  }

  getCardSize() { return 4; }
  static getConfigElement() { return document.createElement("soccer-live-team-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_next_", show_event_toasts: false }; }

  showDetails(match) {
    this.activeMatch = match;
    this.showPopup = true;
  }
  closePopup() { this.showPopup = false; }

  separateEvents(details) {
    const goals = [], yellowCards = [], redCards = [];

    details.forEach(event => {
      const raw = String(event || '');

      if ((raw.includes('Goal') && !raw.includes('Disallowed')) || raw.includes('Penalty - Scored')) {
        goals.push(this.formatMatchEvent(raw));
      } else if (raw.includes('Yellow Card')) {
        yellowCards.push(this.formatMatchEvent(raw));
      } else if (raw.includes('Red Card')) {
        redCards.push(this.formatMatchEvent(raw));
      }
    });

    return { goals, yellowCards, redCards };
  }

  formatMatchEvent(event) {
    const tx = (key) => this._t(key);
    let text = String(event || '').trim();

    text = text
      .replace(/^Goal\s*-\s*/i, '')
      .replace(/^Yellow Card\s*-\s*/i, '')
      .replace(/^Red Card\s*-\s*/i, '')
      .replace(/^Penalty - Scored\s*-\s*/i, `${tx('event.penalty')} - `)
      .replace(/^Header\s*-\s*/i, `${tx('event.header')} - `)
      .replace(/^Shot\s*-\s*/i, `${tx('event.shot')} - `)
      .replace(/^Free-kick\s*-\s*/i, `${tx('event.free_kick')} - `)
      .replace(/^Penalty\s*-\s*/i, `${tx('event.penalty')} - `);

    text = text.replace(/^([^:]+):\s*/, '$1 ');

    const eventTypes = [
      tx('event.header'),
      tx('event.shot'),
      tx('event.penalty'),
      tx('event.free_kick'),
    ].map(type => type.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    text = text.replace(
      new RegExp(`^(${eventTypes.join('|')})\\s*-\\s*(.+)$`, 'i'),
      (_, eventType, rest) => `${rest} (${eventType.toLowerCase()})`
    );

    text = text.replace(/\bN\/A\b/g, tx('generic.unknown'));

    return text;
  }

  _renderStatusBadge(match) {
    const state = match.state;
    if (state === 'in') {
      return html`<span class="status-badge live"><span class="dot"></span>${this._t('status.live')}</span>`;
    }
    if (state === 'post') {
      return html`<span class="status-badge finished">${this._t('status.finished')}</span>`;
    }
    return html`<span class="status-badge scheduled">${match.date || this._t('status.scheduled')}</span>`;
  }

  _renderClock(match) {
    const state = match.state;
    if (state === 'in') {
      const detail = match.status_detail && match.status_detail !== 'N/A' ? match.status_detail : '';
      const clk = match.clock && match.clock !== 'N/A' ? match.clock : '';
      const txt = clk || detail || match.status || '';
      return html`<div class="clock"><span class="dot"></span>${txt}</div>`;
    }
    if (state === 'post') {
      return html`<div class="clock finished">${this._t('status.full_time')}</div>`;
    }
    const countdown = this._liveCountdown(match);
    return html`<div class="clock upcoming">${countdown || match.date || ''}</div>`;
  }

  _renderRecord(record) {
    if (!record || record === 'N/A') return '';
    const parts = String(record).split('-');
    if (parts.length === 3) {
      // Verberg pre-seizoen 0-0-0 records
      if (parts.every(p => parseInt(p) === 0)) return '';
      return html`<div class="record">
        <span class="rec rec-w">${parts[0]}${this._t('form.W')}</span>
        <span class="rec rec-d">${parts[1]}${this._t('form.D')}</span>
        <span class="rec rec-l">${parts[2]}${this._t('form.L')}</span>
      </div>`;
    }
    return html`<div class="record"><span class="rec">${record}</span></div>`;
  }

  _renderStandingSummary(summary) {
    return summary && summary !== 'N/A' ? html`<div class="standing-summary">${summary}</div>` : '';
  }

  _hexToRgb(hex) {
    if (!hex || hex === 'N/A') return null;
    const h = String(hex).replace('#', '');
    if (h.length !== 6) return null;
    return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}`;
  }

  _renderTopScorer(scorer) {
    if (!scorer || !scorer.name) return '';
    const name = scorer.short_name || scorer.name;
    const label = this._t('team.top_scorer');
    return html`
      <div class="top-scorer" title="${label}: ${scorer.name} (${scorer.value})">
        <span class="ts-label">⚽ ${label}</span>
        <div class="ts-row">
          <span class="ts-name">${name}</span>
          <span class="ts-val">${scorer.value}<span class="ts-unit">★</span></span>
        </div>
      </div>
    `;
  }

  _renderForm(formStr) {
    if (!formStr || formStr === 'N/A') return '';
    const letters = String(formStr).replace(/[^WLDwld]/g, '').toUpperCase();
    if (letters.length < 2) return '';
    const recent = letters.slice(-5).split('');
    const labelOf = (l) => this._t('form.' + l);
    return html`
      <div class="form-pills">
        ${recent.map(l => html`<div class="form-pill ${l}">${labelOf(l)}</div>`)}
      </div>
    `;
  }

  _renderStatsRow(match) {
    const hs = match.home_statistics || {};
    const as = match.away_statistics || {};
    const stats = [];
    const num = v => {
      const n = parseFloat(v);
      return isNaN(n) ? null : n;
    };
    const pushStat = (label, hKey, aKey, suffix = '') => {
      const h = num(hs[hKey]);
      const a = num(as[aKey]);
      if (h === null || a === null) return;
      stats.push({ label, home: hs[hKey], away: as[aKey], hNum: h, aNum: a, suffix });
    };
    pushStat(this._t('team.possession'), 'possessionPct', 'possessionPct', '%');
    pushStat(this._t('team.shots'), 'totalShots', 'totalShots');
    pushStat(this._t('team.on_target'), 'shotsOnTarget', 'shotsOnTarget');
    if (stats.length === 0) return '';

    return html`
      <div class="stats-row">
        ${stats.map(s => {
          const total = s.hNum + s.aNum;
          const homePct = total > 0 ? (s.hNum / total) * 100 : 50;
          const awayPct = 100 - homePct;
          return html`
            <div class="stat-bar">
              <div class="stat-bar-label">
                <span class="home-val">${s.home}${s.suffix}</span>
                <span class="label-text">${s.label}</span>
                <span class="away-val">${s.away}${s.suffix}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-home" style="width: ${homePct}%;"></div>
                <div class="stat-bar-away" style="width: ${awayPct}%;"></div>
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];
    if (!stateObj) {
      const cached = OfflineCache.get(entityId);
      if (cached && cached.data.matches) {
        this._cachedData = cached.data;
      } else {
        return renderCardError('⚠️', this._t('ui.entity_not_found'), `${this._t('ui.entity_not_found')}: ${entityId}`, this._t('ui.check_entity_config'));
      }
    }
    if (stateObj && stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(entityId);
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
    if (!attributes || !attributes.matches || attributes.matches.length === 0) {
      // Distinguish: wrong entity type vs off-season
      const entityId = this._config.entity || '';
      if (!entityId.includes('soccerlive_next') && !entityId.includes('soccerlive_all_mixed') && !entityId.includes('soccer_live_next') && !entityId.includes('soccer_live_all_mixed'))
        return renderCardError('⚠️', this._t('ui.wrong_entity_type'), entityId, this._t('ui.wrong_entity_type_hint'));
      return renderInfoState('📅', this._t('ui.off_season'), this._t('team.off_season'));
    }

    const match = attributes.matches[0];
    const leagueInfo = attributes.league_info ? attributes.league_info[0] : null;
    const leagueLogo = leagueInfo && leagueInfo.logo_href && leagueInfo.logo_href !== 'N/A' ? leagueInfo.logo_href : null;
    const isLive = match.state === 'in';
    const isFinished = match.state === 'post';
    const showScore = isLive || isFinished;
    const competitionLabel = (leagueInfo && leagueInfo.abbreviation && leagueInfo.abbreviation !== 'N/A')
      ? leagueInfo.abbreviation
      : (match.league_name && match.league_name !== 'N/A'
          ? match.league_name
          : (match.season_info && match.season_info !== 'N/A' && this._shouldShowPhase(match.season_info)
              ? this._translatePhase(match.season_info)
              : ''));

    const homeRgb = this._hexToRgb(match.home_color);
    const awayRgb = this._hexToRgb(match.away_color);
    const heroBgStyle = (homeRgb || awayRgb) ? `background:
      radial-gradient(ellipse at 0% 0%, rgba(${homeRgb || '99,102,241'},0.18), transparent 55%),
      radial-gradient(ellipse at 100% 100%, rgba(${awayRgb || '236,72,153'},0.18), transparent 55%)` : '';
    const myTeam = this.myTeam || (attributes.team_name || '').toLowerCase();
    const homeIsMyTeam = myTeam && match.home_team && match.home_team.toLowerCase().includes(myTeam);
    const awayIsMyTeam = myTeam && match.away_team && match.away_team.toLowerCase().includes(myTeam);

    return html`
      <ha-card class="${isLive ? 'live' : ''} ${this.compact ? 'compact' : ''}">
        <div class="bg-logos">
          ${match.home_logo ? html`<div class="bg-logo home"><img src="${match.home_logo}" alt="" loading="lazy"></div>` : ''}
          ${match.away_logo ? html`<div class="bg-logo away"><img src="${match.away_logo}" alt="" loading="lazy"></div>` : ''}
        </div>
        <div class="hero-bg" style="${heroBgStyle}"></div>

        ${this.showEventToasts && this._toastVisible ? html`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        ` : ''}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">
              ${leagueLogo ? html`<img src="${leagueLogo}" alt="" />` : '⚽'}
            </span>
            <span class="comp-name">${competitionLabel || ' '}</span>
          </div>
          ${this._renderStatusBadge(match)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              ${match.home_logo
                ? html`<img class="team-logo-big" src="${match.home_logo}" alt="${match.home_team}" />`
                : html`<div class="team-logo-fallback">${match.home_abbrev || '?'}</div>`}
            </div>
            <div class="team-name-big ${homeIsMyTeam ? 'my-team' : ''}">${match.home_team}</div>
            ${!isLive ? this._renderStandingSummary(match.home_standing_summary) : ''}
            ${this._renderRecord(match.home_record)}
            ${!isLive ? (this._renderForm(match.last_five_home) || this._renderForm(match.home_form)) : this._renderForm(match.home_form)}
            ${!isLive ? this._renderTopScorer(match.home_top_scorer) : ''}
          </div>

          <div class="score-center">
            ${showScore
              ? html`<div class="score-numbers">${match.home_score} <span class="dash">-</span> ${match.away_score}</div>`
              : html`<div class="score-vs">${this._t('match.vs')}</div>`
            }
            ${this._renderClock(match)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              ${match.away_logo
                ? html`<img class="team-logo-big" src="${match.away_logo}" alt="${match.away_team}" />`
                : html`<div class="team-logo-fallback">${match.away_abbrev || '?'}</div>`}
            </div>
            <div class="team-name-big ${awayIsMyTeam ? 'my-team' : ''}">${match.away_team}</div>
            ${!isLive ? this._renderStandingSummary(match.away_standing_summary) : ''}
            ${this._renderRecord(match.away_record)}
            ${!isLive ? (this._renderForm(match.last_five_away) || this._renderForm(match.away_form)) : this._renderForm(match.away_form)}
            ${!isLive ? this._renderTopScorer(match.away_top_scorer) : ''}
          </div>
        </div>

        ${isLive ? this._renderStatsRow(match) : ''}

        ${renderMatchMeta(match, {
          lang: resolveLang(this.hass, this._config),
          t: k => this._t(k),
          weatherBadge: this._weatherBadge || null,
          showDate: !showScore,
          hideBroadcasts: this._config.hide_broadcasts === true,
        })}
        ${showScore ? html`
          <div class="meta-row details-row">
            <button class="info-btn" @click="${() => this.showDetails(match)}">${this._t('team.details')} ›</button>
          </div>
        ` : ''}

        ${!this.compact && this.showFormTrend ? this._renderFormTrend(attributes.previous_matches, attributes.matches, this.myTeam || attributes.team_name) : ''}
        ${!this.compact && this.showPreviousMatches ? this._renderPreviousMatches(attributes.previous_matches, attributes.matches, this.myTeam || attributes.team_name) : ''}
        ${!this.compact ? this._renderH2H(match.head_to_head, match.home_team) : ''}
        ${!this.compact ? this._renderUpcomingList(attributes.upcoming_matches, attributes.matches, this.myTeam || attributes.team_name) : ''}
      </ha-card>
    `;
  }

  _relativeDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split(' ');
    const [day, month, year] = (parts[0] || '').split(/[-\/]/).map(Number);
    if (!day || !month || !year) return parts[0] || '';
    const match = new Date(year, month - 1, day);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const diff = Math.round((match - today) / 86400000);
    if (diff === 1) return this._t('time.tomorrow');
    if (diff <= 6 && diff > 1) return this._t('time.in_n_d', { n: diff });
    const lang = resolveLang(this.hass, this._config);
    const monthKey = `month.${month}`;
    return `${day} ${this._t(monthKey)}`;
  }

  _teamBadge(abbrev, color) {
    const bg = color && color !== 'N/A' ? `#${color.replace('#', '')}` : 'rgba(var(--cl-accent-rgb),0.25)';
    return html`<span class="abbrev-badge" style="background:${bg}">${abbrev}</span>`;
  }

  _renderFormTrend(previousMatches, fallbackMatches, trackedTeam) {
    const tracked = (trackedTeam || '').toLowerCase();
    // Gebruik previous_matches of filtered fallback
    const finished = previousMatches && previousMatches.length > 0
      ? previousMatches
      : (fallbackMatches || []).filter(m => m.state === 'post').slice(-10).reverse();
    if (finished.length === 0) return '';
    const results = finished.map(m => {
      const isHome = m.home_team && m.home_team.toLowerCase().includes(tracked);
      const hs = parseInt(m.home_score), as_ = parseInt(m.away_score);
      if (isNaN(hs) || isNaN(as_)) return null;
      if (hs === as_) return 'D';
      return ((isHome && hs > as_) || (!isHome && as_ > hs)) ? 'W' : 'L';
    }).filter(Boolean).reverse(); // oudste → nieuwste
    if (results.length < 2) return '';
    const wins = results.filter(r => r === 'W').length;
    const draws = results.filter(r => r === 'D').length;
    const losses = results.filter(r => r === 'L').length;
    return html`
      <div class="form-trend-section">
        <div class="upcoming-list-title">${this._t('team.form_trend') || 'Seizoenvorm'}</div>
        <div class="form-trend-row">
          <div class="form-trend-dots">
            ${results.map(r => html`<span class="ft-dot ${r.toLowerCase()}">${this._t('form.' + r)}</span>`)}
          </div>
          <span class="form-trend-summary">${wins}${this._t('form.W')} ${draws}${this._t('form.D')} ${losses}${this._t('form.L')}</span>
        </div>
      </div>
    `;
  }

  _renderPreviousMatches(previousMatches, fallbackMatches, trackedTeam) {
    const prev = previousMatches && previousMatches.length > 0
      ? previousMatches.filter(m => m.state === 'post' || !m.state)
      : (fallbackMatches ? fallbackMatches.filter(m => m.state === 'post').slice(-3).reverse() : []);
    if (prev.length === 0) return '';
    const tracked = (trackedTeam || '').toLowerCase();
    return html`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t('team.previous_matches')}</div>
        ${prev.map(m => {
          const homeTracked = tracked && m.home_team && m.home_team.toLowerCase().includes(tracked);
          const awayTracked = tracked && m.away_team && m.away_team.toLowerCase().includes(tracked);
          const hs = parseInt(m.home_score), as_ = parseInt(m.away_score);
          const homeWon = !isNaN(hs) && !isNaN(as_) && hs > as_;
          const awayWon = !isNaN(hs) && !isNaN(as_) && as_ > hs;
          const trackedWon = (homeTracked && homeWon) || (awayTracked && awayWon);
          const trackedLost = (homeTracked && awayWon) || (awayTracked && homeWon);
          const scoreClass = (homeTracked || awayTracked)
            ? (trackedWon ? 'tw' : trackedLost ? 'tl' : 'draw')
            : (homeWon ? 'home-win' : awayWon ? 'away-win' : 'draw');
          const compLabel = m.league_abbrev || m.league_abbreviation || m.competition_abbreviation || m.league_name || '';
          return html`
            <div class="upcoming-row">
              <span class="upcoming-date">
                ${formatDateOnly(m.date, resolveLang(this.hass, this._config)) || (m.date ? m.date.split(' ')[0] : '')}
                <span class="upcoming-date-day prev-comp-label">${compLabel}</span>
              </span>
              <span class="upcoming-team home-side ${homeTracked ? 'tracked' : ''}">
                ${m.home_logo ? html`<img src="${m.home_logo}" alt="" />` : ''}
                ${this._teamBadge(m.home_abbrev || '?', m.home_color)}
              </span>
              <span class="prev-score ${scoreClass}">
                ${m.home_score ?? '-'}-${m.away_score ?? '-'}
              </span>
              <span class="upcoming-team away-side ${awayTracked ? 'tracked' : ''}">
                ${this._teamBadge(m.away_abbrev || '?', m.away_color)}
                ${m.away_logo ? html`<img src="${m.away_logo}" alt="" />` : ''}
              </span>
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderUpcomingList(upcomingMatches, fallbackMatches, trackedTeam) {
    const upcoming = upcomingMatches && upcomingMatches.length > 0
      ? upcomingMatches
      : (fallbackMatches && fallbackMatches.length > 1
          ? fallbackMatches.slice(1).filter(m => m.state === 'pre' || m.state === 'in').slice(0, 4)
          : []);
    if (upcoming.length === 0) return '';
    const tracked = (trackedTeam || '').toLowerCase();
    return html`
      <div class="upcoming-list">
        <div class="upcoming-list-title">${this._t('team.upcoming_matches')}</div>
        ${upcoming.map(m => {
          const homeTracked = tracked && m.home_team && m.home_team.toLowerCase().includes(tracked);
          const awayTracked = tracked && m.away_team && m.away_team.toLowerCase().includes(tracked);
          const isLiveRow = m.state === 'in';
          const hasH2H = m.head_to_head && m.head_to_head.length > 0;
          const clickable = hasH2H;
          const oppForm = homeTracked ? (m.away_form || '') : awayTracked ? (m.home_form || '') : '';
          const renderOppDots = (str, side) => {
            if (!str) return '';
            return html`<div class="upl-opp-form ${side}">
              ${str.split('').slice(-5).map(c => {
                const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
                return html`<span class="upl-fd ${cls}"></span>`;
              })}
            </div>`;
          };
          const uplCompLabel = m.league_name || '';
          return html`
            <div class="upcoming-row ${clickable ? 'clickable' : ''}"
                 @click="${clickable ? () => this.showDetails(m) : null}">
              <span class="upcoming-date">
                ${m.date ? m.date.split(' ')[1] || '' : ''}
                <span class="upcoming-date-day">${this._relativeDate(m.date)}</span>
                ${uplCompLabel ? html`<span class="upl-comp-label">${uplCompLabel}</span>` : ''}
              </span>
              <span class="upcoming-team home-side ${homeTracked ? 'tracked' : ''}">
                ${m.home_logo ? html`<img src="${m.home_logo}" alt="" />` : ''}
                ${this._teamBadge(m.home_abbrev || '?', m.home_color)}
              </span>
              ${isLiveRow
                ? html`<span class="upcoming-live-score">${m.home_score}<span class="live-dot">●</span>${m.away_score}</span>`
                : html`<span class="upcoming-vs">-</span>`
              }
              <span class="upcoming-team away-side ${awayTracked ? 'tracked' : ''}">
                ${this._teamBadge(m.away_abbrev || '?', m.away_color)}
                ${m.away_logo ? html`<img src="${m.away_logo}" alt="" />` : ''}
              </span>
              ${renderOppDots(oppForm, homeTracked ? 'side-right' : 'side-left')}
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderH2H(headToHead, homeTeam) {
    if (!headToHead || headToHead.length === 0) return '';
    const homeName = (homeTeam || '').toLowerCase();
    let hw = 0, dr = 0, aw = 0;
    headToHead.forEach(g => {
      const hs = parseInt(g.home_score) || 0;
      const as = parseInt(g.away_score) || 0;
      if (hs === as) { dr++; return; }
      const h2hHomeIsOurs = (g.home_team || '').toLowerCase().includes(homeName) || homeName.includes((g.home_team || '').toLowerCase().split(' ')[0]);
      if (h2hHomeIsOurs ? hs > as : as > hs) hw++; else aw++;
    });
    const total = hw + dr + aw;
    const hPct = total ? Math.round((hw / total) * 100) : 33;
    const dPct = total ? Math.round((dr / total) * 100) : 34;
    const aPct = 100 - hPct - dPct;
    return html`
      <div class="h2h-section">
        <div class="upcoming-list-title">${this._t('team.h2h')}</div>
        <div class="h2h-summary">
          <span class="h2h-summary-num home">${hw}</span>
          <span class="h2h-summary-label">${this._t('match.draw') || 'D'} ${dr}</span>
          <span class="h2h-summary-num away">${aw}</span>
        </div>
        <div class="h2h-bar">
          <div class="h2h-bar-seg home" style="width:${hPct}%"></div>
          <div class="h2h-bar-seg draw" style="width:${dPct}%"></div>
          <div class="h2h-bar-seg away" style="width:${aPct}%"></div>
        </div>
        ${headToHead.slice(0, 5).map(g => {
          const d = g.date ? g.date.split('T')[0].split('-') : [];
          const dateLabel = d.length === 3 ? `${d[2]}/${d[1]}/${d[0].slice(2)}` : '';
          const homeWon = parseInt(g.home_score) > parseInt(g.away_score);
          const awayWon = parseInt(g.away_score) > parseInt(g.home_score);
          return html`
            <div class="h2h-row">
              <span class="h2h-date">${dateLabel}</span>
              <span class="h2h-team ${homeWon ? 'winner' : ''}">${g.home_team || ''}</span>
              <span class="h2h-score">${g.home_score} - ${g.away_score}</span>
              <span class="h2h-team away ${awayWon ? 'winner' : ''}">${g.away_team || ''}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('showPopup') || changedProperties.has('activeMatch')) {
      if (this.showPopup) {
        this._renderPopupPortal();
        if (!this._escHandler) {
          this._escHandler = e => { if (e.key === 'Escape') this.showPopup = false; };
          document.addEventListener('keydown', this._escHandler);
        }
      } else {
        this._removePopupPortal();
        if (this._escHandler) {
          document.removeEventListener('keydown', this._escHandler);
          this._escHandler = null;
        }
      }
    }
    if (changedProperties.has('activeMatch') && this.activeMatch) {
      this._loadWeather(this.activeMatch.venue, this.activeMatch.venue_lat, this.activeMatch.venue_lon);
    }
    // Subscribe to HA events on first hass (connectedCallback fires before hass is set)
    if (changedProperties.has('hass') && this.hass && !this._eventSubscriptions?.length) {
      this._subscribeToEvents();
    }
    // Load weather for main match when hass updates + handle loading state
    if (changedProperties.has('hass') && this.hass && this._config) {
      const stateObj = this.hass.states[this._config.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      }
      if (stateObj && stateObj.attributes.matches && stateObj.attributes.matches[0]) {
        const match = stateObj.attributes.matches[0];
        if (match.venue !== this._lastWeatherVenue) {
          this._loadWeather(match.venue, match.venue_lat, match.venue_lon);
        }
      }
    }
  }

  _copyPopupThemeVars(target) {
    const styles = getComputedStyle(this);
    [
      '--cl-bg',
      '--cl-text',
      '--cl-text-2',
      '--cl-divider',
      '--cl-accent',
      '--cl-accent-2',
    ].forEach(name => {
      const value = styles.getPropertyValue(name);
      if (value) target.style.setProperty(name, value);
    });
  }

  _renderPopupPortal() {
    if (!this.activeMatch) return;
    if (!this._popupPortal) {
      this._popupPortal = document.createElement('dialog');
      this._popupPortal.className = 'soccer-live-popup-portal';
      this._popupCancelHandler = event => {
        event.preventDefault();
        this.showPopup = false;
      };
      this._popupClickHandler = event => {
        if (event.target === this._popupPortal) this.showPopup = false;
      };
      this._popupPortal.addEventListener('cancel', this._popupCancelHandler);
      this._popupPortal.addEventListener('click', this._popupClickHandler);
      document.body.appendChild(this._popupPortal);
    }
    this._copyPopupThemeVars(this._popupPortal);
    render(html`${this._renderPopupPortalStyles()}${this._renderPopup()}`, this._popupPortal);
    if (!this._popupPortal.open) {
      try {
        this._popupPortal.showModal();
      } catch (err) {
        this._popupPortal.setAttribute('open', '');
      }
    }
  }

  _removePopupPortal() {
    if (!this._popupPortal) return;
    if (this._popupPortal.open) {
      this._popupPortal.close();
    }
    if (this._popupCancelHandler) {
      this._popupPortal.removeEventListener('cancel', this._popupCancelHandler);
      this._popupCancelHandler = null;
    }
    if (this._popupClickHandler) {
      this._popupPortal.removeEventListener('click', this._popupClickHandler);
      this._popupClickHandler = null;
    }
    render(html``, this._popupPortal);
    this._popupPortal.remove();
    this._popupPortal = null;
  }

  async _loadWeather(venue, venue_lat = null, venue_lon = null) {
    this._lastWeatherVenue = venue;
    try {
      this._weatherBadge = await renderWeatherBadge(venue, this.hass, this._config, venue_lat, venue_lon);
      this.requestUpdate();
    } catch (e) {
      console.warn('Weather load failed:', e);
    }
  }

  _renderPopup() {
    const m = this.activeMatch;
    return html`
      <div
        class="popup-overlay"
        @click="${e => { if (e.target === e.currentTarget) this.showPopup = false; }}"
      >
        <div class="popup-box" @click="${e => e.stopPropagation()}">
          <h3 class="popup-title">${this._t('popup.match_details')}</h3>
          <div class="popup-score-row">
            <img class="popup-logo" src="${m.home_logo}" alt="" @error="${e => e.target.style.display='none'}">
            <div class="popup-score-center">
              <div class="popup-score">${m.home_score ?? '-'}<span class="popup-score-sep"> - </span>${m.away_score ?? '-'}</div>
              <div class="popup-clock">${m.clock ?? m.status ?? ''}</div>
            </div>
            <img class="popup-logo" src="${m.away_logo}" alt="" @error="${e => e.target.style.display='none'}">
          </div>
          <div class="popup-stats-grid">
            ${this._renderPopupStatBox(m.home_team, m.home_statistics)}
            ${this._renderPopupStatBox(m.away_team, m.away_statistics)}
          </div>
          ${this._renderPopupEventGroups(m)}
          ${this._renderPopupLineup(m)}
          ${this._renderPopupTimeline(m)}
          ${this._renderPopupH2H(m)}
          <button class="popup-close-btn" @click="${() => this.showPopup = false}">${this._t('generic.close')}</button>
        </div>
      </div>
    `;
  }

  _renderPopupPortalStyles() {
    return html`
      <style>
        .soccer-live-popup-portal {
          border: 0;
          padding: 0;
          margin: auto;
          max-width: none;
          max-height: none;
          width: 100vw;
          height: 100vh;
          background: transparent;
          color: inherit;
          overflow: hidden;
        }
        .soccer-live-popup-portal::backdrop {
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(8px);
        }
        .popup-overlay {
          position: fixed;
          inset: 0;
          pointer-events: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: auto;
          padding: 16px;
          box-sizing: border-box;
          font-family: var(--primary-font-family, sans-serif);
        }
        .popup-box {
          background: var(--cl-bg, #1a1f2e);
          border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          color: var(--cl-text, #f8fafc);
          max-height: 85vh;
          max-width: 560px;
          width: 100%;
          overflow-y: auto;
          padding: 24px;
          margin: auto;
          box-sizing: border-box;
        }
        .popup-title {
          margin: 0 0 20px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .popup-score-row { display: flex; justify-content: center; align-items: center; gap: 18px; margin-bottom: 24px; }
        .popup-logo { width: 72px; height: 72px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }
        .popup-score-center { text-align: center; }
        .popup-score { font-size: 42px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
        .popup-score-sep { opacity: 0.4; }
        .popup-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 8px; font-weight: 600; }
        .popup-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 18px; }
        .popup-stat-box { background: rgba(255,255,255,0.04); padding: 14px; border-radius: 14px; }
        .popup-stat-team { font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cl-text-2, #94a3b8); font-weight: 700; margin-bottom: 6px; }
        .popup-stat-row { font-size: 13px; margin-bottom: 2px; }
        .popup-stat-row span { color: var(--cl-text-2, #94a3b8); }
        .popup-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .popup-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
        .popup-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
        .popup-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
        .popup-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .popup-event-group.goal .popup-event-title { color: #6366f1; }
        .popup-event-group.yellow .popup-event-title { color: #f59e0b; }
        .popup-event-group.red .popup-event-title { color: #ef4444; }
        .popup-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
        .popup-event-list li { margin: 4px 0; }
        .popup-section { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .popup-section-lineup { background: rgba(16,185,129,0.08); border-color: #10b981; }
        .popup-section-timeline { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
        .popup-section-h2h { background: rgba(99,102,241,0.08); border-color: var(--cl-accent, #6366f1); }
        .popup-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .popup-section-title.lineup { color: #10b981; }
        .popup-section-title.timeline { color: #fbbf24; }
        .popup-section-title.h2h { color: var(--cl-accent, #6366f1); }
        .popup-lineup-team { margin-bottom: 8px; }
        .popup-lineup-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .popup-lineup-header span:first-child { font-size: 12px; font-weight: 800; color: #fff; }
        .popup-formation { font-size: 10px; font-weight: 700; color: var(--cl-accent, #6366f1); letter-spacing: 0.1em; }
        .popup-lineup-players { font-size: 12px; color: #cbd5e1; line-height: 1.7; }
        .popup-player { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 6px; margin: 2px; }
        .popup-jersey { color: #fbbf24; }
        .popup-timeline-list { margin: 0; padding: 0; list-style: none; }
        .popup-timeline-item { display: flex; gap: 8px; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; color: #cbd5e1; }
        .popup-timeline-item:last-child { border-bottom: none; }
        .popup-tl-clock { min-width: 32px; text-align: right; font-size: 11px; font-weight: 700; color: #94a3b8; font-variant-numeric: tabular-nums; padding-top: 2px; flex-shrink: 0; }
        .popup-tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; margin-top: 1px; }
        .popup-tl-badge.goal   { background: rgba(99,102,241,0.18); color: #6366f1; }
        .popup-tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
        .popup-tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
        .popup-tl-badge.sub    { background: rgba(148,163,184,0.12); color: #94a3b8; }
        .popup-tl-badge.meta   { background: transparent; color: #94a3b8; font-size: 14px; padding: 0 4px; letter-spacing: 0; }
        .popup-tl-text strong { color: #fff; }
        .popup-tl-team { color: #94a3b8; font-size: 11px; }
        .popup-h2h-summary { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-size: 12px; color: #cbd5e1; }
        .popup-h2h-num { color: #fff; font-size: 18px; font-weight: 800; }
        .popup-h2h-draw { color: #94a3b8; }
        .popup-h2h-bar { display: flex; gap: 2px; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 12px; }
        .popup-h2h-seg.home { background: var(--cl-accent, #6366f1); border-radius: 3px 0 0 3px; }
        .popup-h2h-seg.draw { background: #94a3b8; }
        .popup-h2h-seg.away { background: var(--cl-accent-2, #ec4899); border-radius: 0 3px 3px 0; }
        .popup-h2h-list { margin: 0; padding: 0; list-style: none; }
        .popup-h2h-row { display: grid; grid-template-columns: 1fr auto 1fr; gap: 6px; align-items: center; padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; }
        .popup-h2h-team { color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: right; }
        .popup-h2h-team.away { text-align: left; }
        .popup-h2h-team.winner { color: #fff; font-weight: 800; }
        .popup-h2h-score { font-weight: 700; color: #cbd5e1; white-space: nowrap; text-align: center; }
        .popup-h2h-date { text-align: center; padding: 2px 0; font-size: 10px; color: #475569; border-bottom: 1px solid rgba(255,255,255,0.04); list-style: none; }
        .popup-close-btn {
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          margin-top: 20px;
          font-weight: 800;
          width: 100%;
          font-size: 14px;
        }
        @media (max-width: 600px) {
          .popup-box { padding: 16px; }
          .popup-logo { width: 52px; height: 52px; }
          .popup-score { font-size: 32px; }
          .popup-stats-grid { grid-template-columns: 1fr; }
        }
      </style>
    `;
  }

  _renderPopupStatBox(teamName, stats) {
    const s = stats || {};
    const hasStat = Object.keys(s).length > 0;
    if (!hasStat) return html`<div class="popup-stat-box"><div class="popup-stat-team">${teamName}</div></div>`;
    return html`
      <div class="popup-stat-box">
        <div class="popup-stat-team">${teamName}</div>
        <div class="popup-stat-row"><span>${this._t('team.possession')}:</span> <strong>${s.possessionPct ?? '—'}</strong></div>
        <div class="popup-stat-row"><span>${this._t('team.shots')}:</span> <strong>${s.totalShots ?? '—'}</strong></div>
        <div class="popup-stat-row"><span>${this._t('team.on_target')}:</span> <strong>${s.shotsOnTarget ?? '—'}</strong></div>
        <div class="popup-stat-row"><span>${this._t('team.fouls')}:</span> <strong>${s.foulsCommitted ?? '—'}</strong></div>
      </div>
    `;
  }

  _renderPopupEventGroups(m) {
    const { goals, yellowCards, redCards } = this.separateEvents(m.match_details || []);
    if (!goals.length && !yellowCards.length && !redCards.length) return '';
    const group = (title, items, cls) => items.length ? html`
      <div class="popup-event-group ${cls}">
        <h5 class="popup-event-title">${title}</h5>
        <ul class="popup-event-list">${items.map(i => html`<li>${i}</li>`)}</ul>
      </div>` : '';
    return html`
      ${group(this._t('event.goal'), goals, 'goal')}
      ${group(this._t('event.yellow_card'), yellowCards, 'yellow')}
      ${group(this._t('event.red_card'), redCards, 'red')}
    `;
  }

  _renderPopupLineup(m) {
    const lineupHome = m.lineup_home || [];
    const lineupAway = m.lineup_away || [];
    if (!lineupHome.length && !lineupAway.length) return '';
    const teamBlock = (players, formation, label) => {
      const starters = (players || []).filter(p => p.starter);
      if (!starters.length) return '';
      return html`
        <div class="popup-lineup-team">
          <div class="popup-lineup-header">
            <span>${label}</span>
            ${formation ? html`<span class="popup-formation">${formation}</span>` : ''}
          </div>
          <div class="popup-lineup-players">
            ${starters.map(p => html`<span class="popup-player">${p.jersey ? html`<strong class="popup-jersey">${p.jersey}</strong> ` : ''}${p.short_name || p.name}</span>`)}
          </div>
        </div>`;
    };
    return html`
      <div class="popup-section popup-section-lineup">
        <h5 class="popup-section-title lineup">${this._t('popup.lineups')}</h5>
        ${teamBlock(lineupHome, m.formation_home, m.home_team)}
        ${teamBlock(lineupAway, m.formation_away, m.away_team)}
      </div>`;
  }

  _renderPopupTimeline(m) {
    const SKIP = ['delay', 'drink break', 'cooling break', 'video review'];
    const keyEvents = (m.key_events || []).filter(e => {
      const txt = (e.type_text || '').toLowerCase();
      return !SKIP.some(s => txt.includes(s));
    });
    if (!keyEvents.length) return '';
    const EVENT_I18N = {
      'kickoff':'status.kickoff','halftime':'status.halftime','half time':'status.halftime',
      'end of half':'status.halftime','start 2nd half':'status.second_half',
      'second half':'status.second_half','2nd half':'status.second_half',
      'first half':'status.first_half','full time':'status.full_time',
      'final':'status.full_time','end regular time':'status.full_time','end':'status.end',
    };
    const getBadgeType = ev => {
      const ty = (ev.type || '').toLowerCase(), txt = (ev.type_text || '').toLowerCase();
      if (ty === 'goal' || ev.scoring_play) return 'goal';
      if (txt.includes('yellow')) return 'yellow';
      if (txt.includes('red card')) return 'red';
      if (ty === 'substitution' || txt.includes('substitut')) return 'sub';
      return 'meta';
    };
    const getText = ev => {
      const athletes = (ev.athletes || []).filter(Boolean);
      if (athletes.length) return athletes.join(', ');
      const key = EVENT_I18N[(ev.type_text || '').toLowerCase()];
      return key ? this._t(key) : (ev.type_text || ev.short_text || '');
    };
    const badge = btype => {
      const labels = { goal: 'event.goal', yellow: 'event.yellow_card', red: 'event.red_card', sub: 'event.substitution' };
      if (labels[btype]) return html`<span class="popup-tl-badge ${btype}">${this._t(labels[btype])}</span>`;
      return html`<span class="popup-tl-badge meta">·</span>`;
    };
    return html`
      <div class="popup-section popup-section-timeline">
        <h5 class="popup-section-title timeline">${this._t('popup.timeline')}</h5>
        <ul class="popup-timeline-list">
          ${keyEvents.map(e => {
            const btype = getBadgeType(e);
            return html`
              <li class="popup-timeline-item">
                <span class="popup-tl-clock">${e.clock || ''}</span>
                ${badge(btype)}
                <span class="popup-tl-text"><strong>${getText(e)}</strong>${e.team ? html`<br><span class="popup-tl-team">${e.team}</span>` : ''}</span>
              </li>`;
          })}
        </ul>
      </div>`;
  }

  _renderPopupH2H(m) {
    const h2h = m.head_to_head || [];
    if (!h2h.length) return '';
    const homeName = (m.home_team || '').toLowerCase();
    let hw = 0, dr = 0, aw = 0;
    h2h.forEach(g => {
      const hs = parseInt(g.home_score) || 0, as = parseInt(g.away_score) || 0;
      if (hs === as) { dr++; return; }
      const ours = (g.home_team || '').toLowerCase().includes(homeName) || homeName.includes((g.home_team || '').toLowerCase().split(' ')[0]);
      if (ours ? hs > as : as > hs) hw++; else aw++;
    });
    const tot = hw + dr + aw;
    const hPct = tot ? Math.round(hw / tot * 100) : 33;
    const dPct = tot ? Math.round(dr / tot * 100) : 34;
    const aPct = 100 - hPct - dPct;
    const lang = resolveLang(this.hass, this._config);
    return html`
      <div class="popup-section popup-section-h2h">
        <h5 class="popup-section-title h2h">${this._t('popup.h2h')} (${h2h.length})</h5>
        <div class="popup-h2h-summary">
          <span><strong class="popup-h2h-num">${hw}</strong> ${m.home_team || ''}</span>
          <span class="popup-h2h-draw">${dr} ${this._t('match.draw') || 'D'}</span>
          <span>${m.away_team || ''} <strong class="popup-h2h-num">${aw}</strong></span>
        </div>
        <div class="popup-h2h-bar">
          <div class="popup-h2h-seg home" style="width:${hPct}%"></div>
          <div class="popup-h2h-seg draw" style="width:${dPct}%"></div>
          <div class="popup-h2h-seg away" style="width:${aPct}%"></div>
        </div>
        <ul class="popup-h2h-list">
          ${h2h.slice(0, 8).map(g => {
            const hs = parseInt(g.home_score) || 0, as = parseInt(g.away_score) || 0;
            const dt = g.date ? new Date(g.date).toLocaleDateString(lang) : '';
            return html`
              <li class="popup-h2h-row">
                <span class="popup-h2h-team ${hs > as ? 'winner' : ''}">${g.home_team}</span>
                <span class="popup-h2h-score">${g.home_score ?? '-'} - ${g.away_score ?? '-'}</span>
                <span class="popup-h2h-team away ${as > hs ? 'winner' : ''}">${g.away_team}</span>
              </li>
              <li class="popup-h2h-date">${dt}</li>`;
          })}
        </ul>
      </div>`;
  }

  static get styles() {
    return [skinStyles, soccerHeaderStyles, matchMetaStyles, spinnerStyles, weatherBadgeStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }

      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }

      .bg-logos {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }
      .bg-logo {
        width: 60%;
        height: 140%;
        display: flex;
        align-items: center;
        opacity: 0.09;
      }
      .bg-logo.home {
        justify-content: flex-start;
        transform: translateX(-30%);
      }
      .bg-logo.away {
        justify-content: flex-end;
        transform: translateX(30%);
      }
      .bg-logo img {
        width: 100%;
        object-fit: contain;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.20), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.20), transparent 50%);
        pointer-events: none;
        z-index: 1;
      }
      ha-card.live .hero-bg {
        background:
          radial-gradient(ellipse at 0% 0%, rgba(239,68,68,0.25), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.20), transparent 50%);
        animation: hero-pulse 3s ease-in-out infinite;
      }
      @keyframes hero-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }

      .top-bar, .scoreboard, .stats-row, .meta-row {
        position: relative;
        z-index: 2;
      }

      /* .top-bar / .competition / .comp-icon / .comp-name from soccerHeaderStyles */
      /* Team-card top-bar needs z-index due to hero-bg overlay */
      .top-bar { position: relative; z-index: 2; }

      .status-badge {
        flex-shrink: 0;
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .status-badge.live {
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        box-shadow: 0 4px 16px var(--cl-live-glow);
        animation: badge-pulse 2s ease-in-out infinite;
      }
      .status-badge.live .dot {
        width: 6px; height: 6px; border-radius: 50%; background: white;
        animation: pulse-dot 1.2s ease-in-out infinite;
      }
      .status-badge.finished {
        background: linear-gradient(135deg, var(--cl-green), #059669);
        color: white;
      }
      .status-badge.scheduled {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        color: var(--cl-text);
      }
      @keyframes badge-pulse {
        0%, 100% { box-shadow: 0 4px 16px var(--cl-live-glow); }
        50% { box-shadow: 0 4px 24px var(--cl-live-glow), 0 0 32px var(--cl-live-glow); }
      }
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      .scoreboard {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 28px 18px 22px;
      }
      .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
        min-width: 0;
      }
      .team-logo-wrap {
        position: relative;
        width: 80px; height: 80px;
        display: flex; align-items: center; justify-content: center;
      }
      .team-logo-wrap::before {
        content: '';
        position: absolute;
        inset: -8px;
        background: radial-gradient(circle, rgba(var(--cl-accent-rgb),0.22), transparent 70%);
        border-radius: 50%;
        animation: logo-glow 4s ease-in-out infinite;
      }
      .team-logo-big {
        position: relative;
        width: 72px; height: 72px;
        object-fit: contain;
        filter: drop-shadow(0 6px 16px rgba(0,0,0,0.25));
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .team-logo-fallback {
        position: relative;
        display: grid;
        place-items: center;
        width: 72px;
        height: 72px;
        border: 1px solid var(--cl-chip-border);
        border-radius: 50%;
        background: var(--cl-chip-bg);
        color: var(--cl-text);
        font-size: 14px;
        font-weight: 900;
      }
      .team-side:hover .team-logo-big { transform: scale(1.1) rotate(-3deg); }
      @keyframes logo-glow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      .team-name-big {
        font-size: 13px;
        font-weight: 700;
        line-height: 1.2;
        max-width: 110px;
        letter-spacing: -0.01em;
        color: var(--cl-text);
      }
      .form-pills {
        display: flex; gap: 3px;
        padding: 3px 7px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 999px;
      }
      .record {
        display: flex; gap: 4px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.04em;
      }
      .record .rec {
        padding: 2px 6px;
        border-radius: 4px;
        font-variant-numeric: tabular-nums;
      }
      .record .rec-w { background: rgba(16,185,129,0.18); color: var(--cl-green); }
      .record .rec-d { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .record .rec-l { background: rgba(239,68,68,0.18); color: var(--cl-live); }
      .top-scorer {
        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 5px 9px 6px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 10px;
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        max-width: 150px;
      }
      .top-scorer .ts-label {
        font-size: 8px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--cl-gold);
        text-align: center;
        line-height: 1;
      }
      .top-scorer .ts-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .top-scorer .ts-name {
        max-width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--cl-text);
        font-size: 11px;
        font-weight: 700;
      }
      .top-scorer .ts-val {
        display: inline-flex;
        align-items: baseline;
        gap: 1px;
        color: var(--cl-gold);
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        font-size: 12px;
      }
      .top-scorer .ts-unit {
        font-size: 9px;
        opacity: 0.85;
      }
      .form-pill {
        width: 14px; height: 14px;
        border-radius: 4px;
        font-size: 8px;
        font-weight: 800;
        color: white;
        display: flex; align-items: center; justify-content: center;
      }
      .form-pill.W { background: linear-gradient(135deg, #10b981, #059669); }
      .form-pill.L { background: linear-gradient(135deg, #ef4444, #dc2626); }
      .form-pill.D { background: linear-gradient(135deg, #f59e0b, #d97706); }

      .score-center {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 0 4px;
      }
      .score-numbers {
        font-size: 48px;
        font-weight: 900;
        letter-spacing: -0.04em;
        font-variant-numeric: tabular-nums;
        line-height: 0.95;
        background: linear-gradient(180deg, var(--cl-text) 30%, var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: score-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      }
      .score-numbers .dash {
        opacity: 0.4;
        font-weight: 700;
        margin: 0 4px;
      }
      /* score_size: big / huge — enlarges the score display */
      :host([data-score="big"]) .score-numbers { font-size: 68px; }
      :host([data-score="huge"]) .score-numbers { font-size: 92px; }
      :host([data-score="big"]) .score-vs { font-size: 38px; }
      :host([data-score="huge"]) .score-vs { font-size: 48px; }
      .score-vs {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: var(--cl-text-2);
        opacity: 0.6;
      }
      @keyframes score-pop {
        0% { opacity: 0; transform: scale(0.5); }
        70% { transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      .clock {
        font-size: 11px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px;
        border-radius: 999px;
        color: var(--cl-live);
        background: rgba(239,68,68,0.12);
      }
      .clock .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse-dot 1.4s ease-in-out infinite;
      }
      .clock.upcoming {
        color: var(--cl-accent);
        background: rgba(var(--cl-accent-rgb),0.12);
      }
      .clock.upcoming .dot, .clock.finished .dot { animation: none; }
      .clock.finished {
        color: var(--cl-green);
        background: rgba(16,185,129,0.12);
      }

      .stats-row {
        padding: 0 18px 18px;
        display: flex; flex-direction: column; gap: 10px;
      }
      .stat-bar { display: flex; flex-direction: column; gap: 4px; }
      .stat-bar-label {
        display: flex; justify-content: space-between;
        font-size: 11px; font-weight: 700;
      }
      .stat-bar-label .home-val { color: var(--cl-accent); }
      .stat-bar-label .away-val { color: var(--cl-accent-2); }
      .stat-bar-label .label-text {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 9px;
        color: var(--cl-text-2);
      }
      .stat-bar-track {
        height: 6px;
        background: var(--cl-card-2);
        border-radius: 999px;
        overflow: hidden;
        display: flex;
      }
      .stat-bar-home {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent), var(--cl-accent));
        border-radius: 999px 0 0 999px;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .stat-bar-away {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent-2), var(--cl-accent-2));
        margin-left: auto;
        border-radius: 0 999px 999px 0;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .meta-row {
        display: flex; justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px 18px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      /* .venue-item / .meta-item / .extras-row / .extra-chip removed — now .smm-* from matchMetaStyles */
      .info-btn {
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        border: none;
        padding: 7px 14px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(var(--cl-accent-rgb),0.4);
      }
      .info-btn:hover {
        transform: translateY(-1px) scale(1.04);
        box-shadow: 0 8px 20px rgba(99,102,241,0.6);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--cl-toast-bg);
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow:
          0 0 0 2px #f59e0b,
          0 0 0 4px rgba(245, 158, 11, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow:
          0 0 0 2px var(--cl-live),
          0 0 0 4px rgba(239, 68, 68, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }

      .upcoming-list {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 14px;
      }
      .upcoming-list-title {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-text-2);
        margin-bottom: 8px;
      }
      .upcoming-row {
        display: grid;
        grid-template-columns: 52px 1fr 45px 1fr;
        align-items: center;
        gap: 6px;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 12px;
      }
      .upcoming-row:last-child { border-bottom: none; }
      .upcoming-date {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-accent);
        font-variant-numeric: tabular-nums;
        display: flex;
        flex-direction: column;
        line-height: 1.3;
        flex-shrink: 0;
        white-space: nowrap;
        min-width: 52px;
      }
      .upcoming-date-day {
        font-size: 9px;
        font-weight: 600;
        color: var(--cl-text-2);
      }
      .upcoming-team {
        display: flex; align-items: center; gap: 5px;
        font-weight: 600;
        color: var(--cl-text);
        min-width: 0;
        overflow: hidden;
      }
      /* Thuisploeg: rechts uitgelijnd — logo links, badge rechts richting het streepje */
      .upcoming-team.home-side { justify-content: flex-end; }
      /* Uitploeg: links uitgelijnd — badge links richting het streepje, logo rechts */
      .upcoming-team.away-side { justify-content: flex-start; }
      .upcoming-team img { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .upcoming-team.tracked .abbrev-badge { outline: 2px solid rgba(255,255,255,0.5); }
      .upcoming-row.clickable { cursor: pointer; }
      .upcoming-row.clickable:hover { background: var(--cl-card-2); border-radius: 8px; }
      .prev-comp-label { color: var(--cl-accent); opacity: 0.75; font-size: 8px; letter-spacing: 0.04em; text-transform: uppercase; display: block; max-width: 52px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .upl-comp-label { color: var(--cl-text-2); font-size: 8px; letter-spacing: 0.03em; text-transform: uppercase; display: block; max-width: 52px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .upl-opp-form { grid-column: 1 / -1; display: flex; gap: 2px; margin-top: -3px; padding-bottom: 2px; }
      .upl-opp-form.side-right { justify-content: flex-end; }
      .upl-opp-form.side-left { justify-content: flex-start; padding-left: 58px; }
      .upl-fd { width: 5px; height: 5px; border-radius: 50%; }
      .upl-fd.w { background: var(--cl-green); }
      .upl-fd.l { background: var(--cl-live); }
      .upl-fd.d { background: var(--cl-text-2); opacity: 0.6; }
      .form-trend-section {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 8px;
      }
      .form-trend-row {
        display: flex; align-items: center; gap: 10px; margin-top: 6px;
      }
      .form-trend-dots { display: flex; gap: 4px; flex-wrap: wrap; }
      .ft-dot {
        width: 20px; height: 20px; border-radius: 5px;
        display: flex; align-items: center; justify-content: center;
        font-size: 9px; font-weight: 800; color: white; flex-shrink: 0;
      }
      .ft-dot.w { background: var(--cl-green); }
      .ft-dot.d { background: var(--cl-gold); color: rgba(0,0,0,0.7); }
      .ft-dot.l { background: var(--cl-live); }
      .form-trend-summary {
        font-size: 10px; font-weight: 700; color: var(--cl-text-2);
        white-space: nowrap; flex-shrink: 0;
      }
      .prev-score {
        font-size: 12px; font-weight: 900;
        color: var(--cl-text-2);
        text-align: center; min-width: 32px;
        font-variant-numeric: tabular-nums;
      }
      .prev-score.home-win { color: var(--cl-green); }
      .prev-score.away-win { color: var(--cl-live); }
      .prev-score.tw { color: var(--cl-green); }
      .prev-score.tl { color: var(--cl-live); }
      .prev-score.draw { color: var(--cl-text-2); }
      .upcoming-live-score {
        font-size: 12px; font-weight: 900;
        color: var(--cl-live);
        text-align: center; min-width: 16px;
        font-variant-numeric: tabular-nums;
        display: flex; align-items: center; gap: 2px;
      }
      .live-dot { font-size: 7px; animation: live-blink 1s ease-in-out infinite; }
      @keyframes live-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
      .team-name-big.my-team {
        background: linear-gradient(135deg, var(--cl-text), var(--cl-accent));
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .upcoming-vs {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text-2);
        text-align: center;
      }
      .abbrev-badge {
        display: inline-flex; align-items: center; justify-content: center;
        padding: 2px 6px;
        border-radius: 5px;
        font-size: 10px;
        font-weight: 800;
        color: white;
        letter-spacing: 0.03em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        flex-shrink: 0;
      }
      .h2h-section {
        border-top: 1px solid var(--cl-divider);
        padding: 10px 16px 14px;
      }
      .h2h-summary {
        display: flex; justify-content: space-between; align-items: center;
        font-size: 11px; margin-bottom: 6px; color: var(--cl-text-2);
      }
      .h2h-summary-num { font-size: 20px; font-weight: 800; color: var(--cl-text); }
      .h2h-summary-label { font-size: 10px; text-align: center; color: var(--cl-text-2); }
      .h2h-bar {
        display: flex; height: 5px; border-radius: 3px; overflow: hidden; gap: 2px;
        margin-bottom: 10px;
      }
      .h2h-bar-seg.home { background: var(--cl-accent); border-radius: 3px 0 0 3px; }
      .h2h-bar-seg.draw { background: var(--cl-text-2); opacity: 0.4; }
      .h2h-bar-seg.away { background: var(--cl-accent-2); border-radius: 0 3px 3px 0; }
      .h2h-row {
        display: flex; align-items: center; gap: 6px;
        padding: 5px 0;
        border-bottom: 1px solid rgba(255,255,255,0.04);
        font-size: 11px;
      }
      .h2h-row:last-child { border-bottom: none; }
      .h2h-date {
        font-size: 10px; font-weight: 600; color: var(--cl-text-2);
        min-width: 44px; flex-shrink: 0;
      }
      .h2h-team {
        flex: 1; font-weight: 600; color: var(--cl-text-2);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .h2h-team.away { text-align: right; }
      .h2h-team.winner { color: var(--cl-text); font-weight: 800; }
      .h2h-score {
        font-size: 12px; font-weight: 800; color: var(--cl-text);
        flex-shrink: 0; text-align: center; min-width: 36px;
        font-variant-numeric: tabular-nums;
      }

      /* Goal celebration */
      ha-card.goal-flash {
        animation: card-goal-flash 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes card-goal-flash {
        0%   { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
        20%  { box-shadow: 0 0 0 4px var(--cl-accent), 0 0 60px 20px var(--cl-accent), 0 4px 24px rgba(0,0,0,0.15); }
        50%  { box-shadow: 0 0 0 2px var(--cl-accent-2), 0 0 40px 10px var(--cl-accent-2), 0 4px 24px rgba(0,0,0,0.15); }
        100% { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
      }
      .score-numbers.goal-scored {
        animation: score-goal-pop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes score-goal-pop {
        0%   { transform: scale(1); }
        20%  { transform: scale(1.4); filter: drop-shadow(0 0 30px var(--cl-accent)); }
        40%  { transform: scale(0.95); }
        60%  { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      .team-logo-big.scorer-bounce {
        animation: scorer-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes scorer-bounce {
        0%   { transform: scale(1) rotate(0deg); }
        25%  { transform: scale(1.3) rotate(-15deg); }
        50%  { transform: scale(1.1) rotate(10deg); }
        75%  { transform: scale(1.2) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      .goal-banner {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
      }
      .goal-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, var(--cl-overlay-strong) 0%, var(--cl-overlay-soft) 40%, transparent 70%);
        animation: banner-backdrop 1.6s ease-out forwards;
      }
      @keyframes banner-backdrop {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .goal-banner-text {
        position: relative;
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -0.06em;
        color: var(--cl-gold-text);
        -webkit-text-stroke: 2px #1a0f00;
        text-shadow:
          0 0 24px rgba(251, 191, 36, 1),
          0 0 48px rgba(251, 191, 36, 0.7),
          0 6px 0 #b45309,
          0 8px 24px rgba(0, 0, 0, 0.6);
        animation: goal-text-blast 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transform-origin: center;
      }
      @keyframes goal-text-blast {
        0%   { opacity: 0; transform: scale(0.3) rotate(-8deg); }
        20%  { opacity: 1; transform: scale(1.15) rotate(-3deg); }
        40%  { transform: scale(0.95) rotate(2deg); }
        60%  { transform: scale(1.05) rotate(0deg); }
        80%  { opacity: 1; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(1.3) rotate(0deg); }
      }
      .goal-flash-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(251,191,36,0.25), transparent 70%);
        pointer-events: none;
        z-index: 49;
        animation: flash-overlay 1s ease-out forwards;
      }
      @keyframes flash-overlay {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 1.8s ease-out forwards;
      }
      @keyframes confetti-fly {
        0% {
          transform: translate(-50%, 0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg);
          opacity: 0;
        }
      }

      @media (max-width: 600px) {
        ha-card { padding: 12px !important; }
        .hero { padding: 14px 10px 12px !important; }
        .team-logo { width: 40px !important; height: 40px !important; }
        .team-name { font-size: 12px !important; }
        .score { font-size: 32px !important; letter-spacing: 4px !important; }
        .vs-text { font-size: 18px !important; }
        .stat-val { font-size: 11px !important; min-width: 24px !important; }
        .stat-label { font-size: 9px !important; }
        .comp-logo { width: 14px !important; height: 14px !important; }
        .comp-name { font-size: 10px !important; }
        .meta { font-size: 10px !important; padding: 8px 12px !important; }
        .events { max-height: 180px !important; }
        .event-row { padding: 4px 0 !important; font-size: 11px !important; }
        .event-min { font-size: 10px !important; }
        .form-indicator { width: 18px !important; height: 18px !important; font-size: 10px !important; }
      }

      @media (max-width: 400px) {
        .score { font-size: 28px !important; letter-spacing: 2px !important; }
        .team-name { font-size: 11px !important; max-width: 70px !important; }
        .event-icon { font-size: 12px !important; }
      }
      /* Compact mode: smaller scoreboard, hide chips and secondary sections */
      ha-card.compact .team-logo-big { width: 48px !important; height: 48px !important; }
      ha-card.compact .team-name-big { font-size: 12px !important; }
      ha-card.compact .scoreboard { padding: 12px 16px !important; }
      ha-card.compact .score-num { font-size: 36px !important; letter-spacing: 4px !important; }
      ha-card.compact .standing-summary { display: none; }
      ha-card.compact .form-dots-row { display: none; }
      ha-card.compact .top-scorer-row { display: none; }
      ha-card.compact .smm-chips { display: none; }
      ha-card.compact .meta-row { padding: 8px 14px !important; }
    `];
  }
}

if (!customElements.get("soccer-live-team")) {
  customElements.define("soccer-live-team", SoccerLiveTeamCard);
}
