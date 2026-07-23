import { LitElement, html, css, render } from "lit-element";
import { t, resolveLang, formatMatchDate, parseMatchDate } from "../../i18n.js";
import { scoreText } from "../shared-score.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { EVENT_I18N, SKIP, isGoalEvent, translateMatchStatus } from '../shared-event-i18n.js';
import { soccerCardShellStyles } from "../card-shell.js";
import { displayCompetitionName, resolveCompetitionLogo } from '../shared-competition.js';
import { renderPitch, pitchStyles } from '../shared-pitch.js';
import { matchHasDetails, requestMatchDetails, updatedMatch } from '../shared-detail-loader.js';
import { renderSyncStatusOrEmpty } from '../card-error.js';
import { renderPrediction, renderOdds, renderInjuries, prematchStyles } from '../shared-prematch.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { standingText } from '../shared-standing.js';
import { kickoffMinutes, kickoffDurationParts, prematchContext, reviewContext, predictionOutcome, derivedMatchStory } from '../shared-match-popup-model.js';
import { isFinishedMatch } from '../shared-match-order.js';

class SoccerLiveMatchesCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      showPopup: { type: Boolean },
      activeMatch: { type: Object },
      _eventSubscriptions: { type: Array },
      _recentEventMatches: { type: Object },
      _toastMessage: { type: String },
      _toastVisible: { type: Boolean },
      _toastVariant: { type: String },
      _detailsLoading: { type: Boolean },
      _detailsError: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._recentEventMatches = new Map();
    this._eventSubscriptions = [];
    this._cleanupTimers = [];
    this._toastMessage = '';
    this._toastVisible = false;
    this._toastVariant = 'goal';
    this._toastTimer = null;
    this._detailsLoading = false;
    this._detailsError = false;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Entity required");
    }
    this._config = config;
    applySkin(this, config);
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 5;
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 50;
    this.showFinishedMatches = config.show_finished_matches !== undefined ? config.show_finished_matches : true;
    this.hideHeader = config.hide_header !== undefined ? config.hide_header : false;
    this.hidePastDays = config.hide_past_days !== undefined ? config.hide_past_days : 0;
    this.reverseOrder = config.reverse_order === true;
    this.showEventToasts = config.show_event_toasts === true;
    this.myTeam = (config.my_team || '').toLowerCase();
    this.showLiveTicker = config.show_live_ticker !== false;
    this.activeMatch = null;
    this.showPopup = false;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  connectedCallback() {
    super.connectedCallback();
    this._subscribeToEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._toastTimer) clearTimeout(this._toastTimer);
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

    this._cleanupTimers.forEach(t => clearTimeout(t));
    this._cleanupTimers = [];
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
        failed.forEach(r => console.warn('Soccer Live Matches subscription failed:', r.reason));
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
    return matches.some(m => m.home_team === eventData.home_team && m.away_team === eventData.away_team);
  }

  _handleSoccerLiveEvent(event) {
    const eventType = event.event_type;
    const eventData = event.data;
    if (!this._eventBelongsToThisCard(eventData)) return;

    const matchKey = `${eventData.home_team}_${eventData.away_team}`;
    this._recentEventMatches.set(matchKey, eventType === 'soccer_live_goal' ? 'goal' : 'card');
    this.requestUpdate();
    this._cleanupTimers.push(setTimeout(() => {
      this._recentEventMatches.delete(matchKey);
      this.requestUpdate();
    }, 5000));

    if (eventType === 'soccer_live_goal') {
      requestAnimationFrame(() => this._triggerGoalCelebration());
    }

    if (this.showEventToasts) {
      this._showEventToast(eventType, eventData);
    }
  }

  _triggerGoalCelebration() {
    const card = this.shadowRoot && this.shadowRoot.querySelector('ha-card');
    if (!card) return;
    card.querySelectorAll('.confetti').forEach(e => e.remove());
    const colors = ['#ec4899', '#6366f1', '#06b6d4', '#fbbf24', '#10b981', '#ef4444'];
    const emojis = ['⚽', '🎉', '✨', '🔥', '⭐'];
    for (let i = 0; i < 28; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      if (Math.random() > 0.55) {
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.fontSize = (12 + Math.random() * 10) + 'px';
        c.style.background = 'transparent';
      } else {
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      }
      c.style.setProperty('--dx', (Math.random() - 0.5) * 380 + 'px');
      c.style.setProperty('--dy', (Math.random() * 200 + 80) + 'px');
      c.style.animationDelay = (Math.random() * 0.4) + 's';
      card.appendChild(c);
      setTimeout(() => c.remove(), 2200);
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

  getCardSize() { return 4; }
  static getConfigElement() { return document.createElement("soccer-live-matches-editor"); }
  static getStubConfig() {
    return {
      entity: "sensor.soccer_live_all_",
      max_events_visible: 5,
      max_events_total: 50,
      hide_past_days: 0,
      show_finished_matches: true,
      hide_header: false,
      show_event_toasts: false,
    };
  }

  _parseMatchDate(dateStr) {
    return parseMatchDate(dateStr);
  }

  _matchTimeLabel(match) {
    if (match.state === 'in') return match.clock && match.clock !== 'N/A' ? match.clock : this._t('status.live');
    if (match.state === 'post') return this._t('status.full_time');
    if (match.date) {
      const parts = match.date.split(' ');
      return parts[1] || parts[0];
    }
    return '—';
  }

  _matchScore(match, side) {
    if (match.state === 'pre') return '-';
    const score = match[side === 'home' ? 'home_score' : 'away_score'];
    if (score === null || score === undefined || score === 'N/A') return '-';
    return score;
  }

  _displayCompetitionName(name) {
    return displayCompetitionName(name, resolveLang(this.hass, this._config));
  }

  _isWinner(match, side) {
    if (match.state === 'pre') return null;
    const h = parseInt(match.home_score);
    const a = parseInt(match.away_score);
    if (isNaN(h) || isNaN(a) || h === a) return null;
    return side === 'home' ? h > a : a > h;
  }

  _dayKey(match) {
    if (!match.date) return '—';
    const d = this._parseMatchDate(match.date);
    if (!d) return match.date.split(' ')[0] || '—';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const matchDay = new Date(d);
    matchDay.setHours(0, 0, 0, 0);
    const diff = Math.round((matchDay - today) / (24 * 3600 * 1000));
    if (diff === 0) return '⚡ ' + this._t('time.today');
    if (diff === -1) return this._t('time.yesterday');
    if (diff === 1) return this._t('time.tomorrow');
    const month = this._t('month.' + (matchDay.getMonth() + 1));
    return `${matchDay.getDate()} ${month}`;
  }

  async showDetails(match) {
    this.activeMatch = match;
    this.showPopup = true;
    const attrs = this.hass?.states?.[this._config.entity]?.attributes;
    if (!attrs?.detail_service || matchHasDetails(match)) return;
    this._detailsLoading = true;
    this._detailsError = false;
    try {
      await requestMatchDetails(this.hass, attrs, match);
    } catch (_) {
      this._detailsError = true;
    } finally {
      this._detailsLoading = false;
      this.requestUpdate();
    }
  }
  closePopup() { this.showPopup = false; }

  separateEvents(details) {
    const goals = [], yellowCards = [], redCards = [];

    details.forEach(event => {
      const raw = String(event || '');

      if (raw.includes('Goal') || raw.includes('Penalty - Scored')) {
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

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${entityId}</ha-card>`;

    let matches = stateObj.attributes.matches || [];
    const leagueInfo = stateObj.attributes.league_info ? stateObj.attributes.league_info[0] : null;
    const teamName = stateObj.attributes.team_name && stateObj.attributes.team_name !== 'N/A'
      ? stateObj.attributes.team_name
      : null;
    const teamLogo = stateObj.attributes.team_logo || null;

    if (this._config.filter_competition) matches = matches.filter(match => match.league_name === this._config.filter_competition);
    if (this._config.filter_season) matches = matches.filter(match => match.season_label === this._config.filter_season);
    if (this._config.filter_state) matches = matches.filter(match => match.state === this._config.filter_state);
    if (this._config.filter_venue === 'home' && stateObj.attributes.team_id) matches = matches.filter(match => String(match.home_id) === String(stateObj.attributes.team_id));
    if (this._config.filter_venue === 'away' && stateObj.attributes.team_id) matches = matches.filter(match => String(match.away_id) === String(stateObj.attributes.team_id));

    if (!this.showFinishedMatches) {
      matches = matches.filter((m) => !isFinishedMatch(m));
    }
    const smartOrder = this._config.smart_order === true ||
      (this._config.smart_order === undefined && stateObj.attributes.recommended_match_order === 'smart');
    // Smart order keeps the actionable part of a mixed-season team feed at
    // the top: live, upcoming ascending, then results newest-first.
    matches = matches.slice().sort((a, b) => {
      const da = this._parseMatchDate(a.date) || new Date(0);
      const db = this._parseMatchDate(b.date) || new Date(0);
      if (smartOrder) {
        const rank = state => state === 'in' ? 0 : state === 'pre' ? 1 : state === 'post' ? 2 : 3;
        const stateDiff = rank(a.state) - rank(b.state);
        if (stateDiff) return stateDiff;
        return a.state === 'post' ? db - da : da - db;
      }
      return this.reverseOrder ? db - da : da - db;
    });

    if (this.hidePastDays > 0) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - this.hidePastDays);
      matches = matches.filter((m) => {
        const d = this._parseMatchDate(m.date);
        return d ? d >= cutoff : true;
      });
    }
    const limited = matches.slice(0, this.maxEventsTotal);

    if (limited.length === 0) {
      return renderSyncStatusOrEmpty(stateObj.attributes, (k) => this._t(k),
        () => html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`);
    }

    const liveCount = limited.filter(m => m.state === 'in').length;
    const uniqueLeagues = new Set(limited.map(m => m.league_name).filter(l => l && l !== 'N/A'));
    const isMultiLeague = uniqueLeagues.size > 1;
    const groupBy = this._config.group_by || 'day';

    let grouped = [];
    if (groupBy === 'competition') {
      const byComp = new Map();
      limited.forEach(m => {
        const key = m.league_name && m.league_name !== 'N/A' ? this._displayCompetitionName(m.league_name) : '—';
        const compLogo = resolveCompetitionLogo({
          competitionName: m.league_name,
          competitionLogo: m.league_logo || m.competition_logo,
          fallbackLogo: null,
          isFriendly: m.is_friendly,
        });
        if (!byComp.has(key)) byComp.set(key, { key, logo: compLogo, dayDiff: null, matches: [] });
        byComp.get(key).matches.push(m);
      });
      // Sort competitions: those with live matches first
      grouped = [...byComp.values()].sort((a, b) => {
        const aLive = a.matches.some(m => m.state === 'in') ? 0 : a.matches.some(m => m.state === 'pre') ? 1 : 2;
        const bLive = b.matches.some(m => m.state === 'in') ? 0 : b.matches.some(m => m.state === 'pre') ? 1 : 2;
        return aLive - bLive;
      });
    } else {
      let currentKey = null;
      let currentSeason = null;
      limited.forEach(m => {
        const key = this._dayKey(m);
        if (key !== currentKey) {
          currentKey = key;
          const d = this._parseMatchDate(m.date);
          let dayDiff = null;
          if (d) {
            const today = new Date(); today.setHours(0, 0, 0, 0);
            const md = new Date(d); md.setHours(0, 0, 0, 0);
            dayDiff = Math.round((md - today) / 86400000);
          }
          const season = m.season_label || null;
          const seasonBreak = Boolean(smartOrder && currentSeason && season && season !== currentSeason);
          if (season) currentSeason = season;
          grouped.push({ key, dayDiff, matches: [m], season, seasonBreak });
        } else {
          grouped[grouped.length - 1].matches.push(m);
        }
      });
    }

    const scrollHeight = Math.max(this.maxEventsVisible * 80, 240);

    // Live ticker content
    const liveMatches = limited.filter(m => m.state === 'in');
    const tickerText = liveMatches.map(m =>
      `${m.home_abbrev || m.home_team}  ${scoreText(m.home_score, '-')} - ${scoreText(m.away_score, '-')}  ${m.away_abbrev || m.away_team}`
    ).join('     ·     ');

    return html`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts && this._toastVisible ? html`
          <div class="event-toast variant-${this._toastVariant}" .textContent=${this._toastMessage}></div>
        ` : ''}

        ${this.showLiveTicker && liveMatches.length > 0 ? html`
          <div class="live-ticker">
            <span class="ticker-badge">${this._t('status.live')}</span>
            <div class="ticker-track">
              <span class="ticker-content">${tickerText}</span>
              <span class="ticker-content" aria-hidden="true">${tickerText}</span>
            </div>
          </div>
        ` : ''}

        ${!this.hideHeader ? (() => {
          // Header is league-level; on this team-focused card fall back to the
          // team logo for a friendly instead of badging it with FIFA.
          const _logo  = resolveCompetitionLogo({
            competitionName: (leagueInfo && leagueInfo.name) || '',
            competitionLogo: leagueInfo && leagueInfo.logo_href,
            fallbackLogo: teamLogo || null,
          });
          const leagueTitle = leagueInfo && leagueInfo.abbreviation && leagueInfo.abbreviation !== 'World'
            ? leagueInfo.abbreviation
            : (leagueInfo && leagueInfo.name ? this._displayCompetitionName(leagueInfo.name) : null);
          const _title = teamName || leagueTitle || stateObj.state || 'Soccer Live';
          const _total    = stateObj.attributes.total_matches || stateObj.attributes.matches?.length || 0;
          const _finished = stateObj.attributes.finished_matches_count
            ?? (stateObj.attributes.matches || []).filter(m => m.state === 'post').length;
          const _badgeText = liveCount > 0
            ? `${liveCount} ${this._t('status.live')}`
            : _total > 0 ? `${_finished} / ${_total}` : '';
          return renderSoccerHeader({
            logo: _logo,
            title: _title,
            badge: renderSoccerBadge(_badgeText, liveCount > 0 ? 'live' : 'neutral'),
          });
        })() : ''}

        <div class="scroll-content" style="max-height: ${scrollHeight}px;">
          ${grouped.map(group => html`
            ${group.seasonBreak ? html`<div class="season-divider">${group.season}</div>` : ''}
            <div class="day-divider ${groupBy === 'competition' ? 'comp' : (group.dayDiff === 0 ? 'today' : group.dayDiff === -1 ? 'yesterday' : group.dayDiff === 1 ? 'tomorrow' : '')}">
              ${groupBy === 'competition' && group.logo ? html`<img class="comp-divider-logo" src="${group.logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              ${group.key}
              ${groupBy !== 'competition' && group.dayDiff !== null && group.dayDiff > 1 ? html`<span class="day-rel">· over ${group.dayDiff} d</span>` : ''}
            </div>
            ${group.matches.map(match => {
              const matchKey = `${match.home_team}_${match.away_team}`;
              const isLive = match.state === 'in';
              const recent = this._recentEventMatches.get(matchKey);
              const homeWinner = this._isWinner(match, 'home');
              const awayWinner = this._isWinner(match, 'away');
              const broadcast = match.broadcast && match.broadcast !== '' && match.broadcast !== 'N/A' ? match.broadcast : '';
              const isUpcoming = match.state === 'pre';
              const homeMyTeam = this.myTeam && match.home_team && match.home_team.toLowerCase().includes(this.myTeam);
              const awayMyTeam = this.myTeam && match.away_team && match.away_team.toLowerCase().includes(this.myTeam);
              const detailCaps = match.detail_capabilities || [];
              return html`
                <div class="match-row ${isLive ? 'live' : ''} ${recent === 'goal' ? 'goal-pulse' : ''} ${recent === 'card' ? 'card-pulse' : ''}"
                     @click="${() => this.showDetails(match)}">
                  <div class="match-time ${isLive ? 'live-time' : ''} ${match.state === 'post' ? 'ft' : ''}">
                    ${this._matchTimeLabel(match)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${match.home_logo}" alt="${match.home_team}" />
                      <span class="name ${homeWinner === true ? 'winner' : (homeWinner === false ? 'loser' : '')} ${homeMyTeam ? 'my-team-name' : ''}">${match.home_team}</span>
                      <span class="score ${homeWinner === true ? 'winner' : (homeWinner === false ? 'loser' : '')}">${this._matchScore(match, 'home')}</span>
                    </div>
                    <div class="match-team">
                      <img src="${match.away_logo}" alt="${match.away_team}" />
                      <span class="name ${awayWinner === true ? 'winner' : (awayWinner === false ? 'loser' : '')} ${awayMyTeam ? 'my-team-name' : ''}">${match.away_team}</span>
                      <span class="score ${awayWinner === true ? 'winner' : (awayWinner === false ? 'loser' : '')}">${this._matchScore(match, 'away')}</span>
                    </div>
                    ${(broadcast && isUpcoming) || detailCaps.length || (isMultiLeague && match.league_name && match.league_name !== 'N/A') ? html`
                      <div class="row-extras">
                        ${isMultiLeague && match.league_name && match.league_name !== 'N/A' ? html`
                          <span class="league-chip">${this._displayCompetitionName(match.league_name)}</span>
                        ` : ''}
                        ${broadcast && isUpcoming && !this._config.hide_broadcasts ? html`
                          <span class="tv-chip" title="Live TV">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                            ${broadcast}
                          </span>
                        ` : ''}
                        ${detailCaps.includes('statistics') ? html`<span class="detail-cap" title="Stats">▥</span>` : ''}
                        ${detailCaps.includes('lineups') ? html`<span class="detail-cap" title="${this._t('popup.lineups')}">♟</span>` : ''}
                        ${detailCaps.includes('shotmap') ? html`<span class="detail-cap" title="${this._t('popup.shotmap')}">◉</span>` : ''}
                      </div>
                    ` : ''}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `;
            })}
          `)}
        </div>
      </ha-card>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') && this.hass && !this._eventSubscriptions?.length) {
      this._subscribeToEvents();
    }
    if (changedProperties.has('hass') && this.activeMatch) {
      const attrs = this.hass?.states?.[this._config.entity]?.attributes;
      const fresh = updatedMatch(attrs, this.activeMatch.event_id);
      if (fresh && fresh !== this.activeMatch) this.activeMatch = fresh;
    }

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
  }

  _copyPopupThemeVars(target) {
    const computed = getComputedStyle(this);
    [
      '--cl-bg',
      '--cl-text',
      '--cl-text-2',
      '--cl-divider',
      '--cl-accent',
      '--cl-accent-2',
      '--cl-accent-rgb',
      '--cl-accent-2-rgb',
    ].forEach(name => {
      const value = computed.getPropertyValue(name);
      if (value) target.style.setProperty(name, value);
    });
  }

  _renderPopupPortal() {
    if (!this.activeMatch) return;

    if (!this._popupPortal) {
      this._popupPortal = document.createElement('dialog');
      this._popupPortal.className = 'soccer-live-matches-popup-portal';

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

  _renderPopupPortalStyles() {
    return html`
      <style>
        ${pitchStyles.cssText}
        ${prematchStyles.cssText}
        ${matchMetaStyles.cssText}
        .soccer-live-matches-popup-portal {
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
        .soccer-live-matches-popup-portal::backdrop {
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(8px);
        }
        .mp-overlay {
          position: fixed; inset: 0;
          display: flex; justify-content: center; align-items: center;
          overflow: auto; -webkit-overflow-scrolling: touch; padding: 16px;
        }
        .mp-box {
          background: var(--cl-bg, #1a1f2e);
          border: 1px solid var(--cl-divider, rgba(255,255,255,0.08));
          border-radius: 20px; box-shadow: 0 24px 64px rgba(0,0,0,0.6);
          color: var(--cl-text, #f8fafc);
          max-height: 85vh; max-width: 560px; width: 100%;
          overflow-y: auto; -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain; padding: 24px; margin: auto;
        }
        .mp-title {
          margin: 0 0 20px; font-size: 22px; font-weight: 800; letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .mp-score-row { display: flex; justify-content: center; align-items: center; gap: 18px; margin-bottom: 16px; }
        .mp-logo { width: 64px; height: 64px; object-fit: contain; }
        .mp-score-center { text-align: center; }
        .mp-score { font-size: 38px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
        .mp-score.live { color: var(--cl-live, #ef4444); }
        .mp-sep { opacity: 0.4; }
        .mp-clock { font-size: 12px; color: var(--cl-text-2, #94a3b8); margin-top: 6px; font-weight: 600; }
        .mp-clock.live { color: var(--cl-live, #ef4444); }
        .mp-kickoff { font-size: 26px; font-weight: 800; color: var(--cl-accent, #60a5fa); letter-spacing: 0.5px; line-height: 1; }
        .mp-kickoff-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin-top: 6px; }
        .mp-teams { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 14px; margin: 0 0 20px; }
        .mp-event-group { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .mp-event-group.goal { background: rgba(99,102,241,0.1); border-color: #6366f1; }
        .mp-event-group.yellow { background: rgba(245,158,11,0.1); border-color: #f59e0b; }
        .mp-event-group.red { background: rgba(239,68,68,0.1); border-color: #ef4444; }
        .mp-event-title { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .mp-event-group.goal .mp-event-title { color: #6366f1; }
        .mp-event-group.yellow .mp-event-title { color: #f59e0b; }
        .mp-event-group.red .mp-event-title { color: #ef4444; }
        .mp-event-list { margin: 0; padding-left: 18px; font-size: 13px; color: #cbd5e1; }
        .mp-event-list li { margin: 4px 0; }
        .mp-no-events { text-align: center; color: #94a3b8; font-size: 13px; }
        .mp-detail-state { text-align:center; color:var(--cl-accent,#6366f1); font-size:12px; font-weight:700; }
        .mp-detail-state.error { color:#ef4444; }
        .mp-capabilities { display:flex; flex-wrap:wrap; justify-content:center; gap:5px; margin:-10px 0 16px; }
        .mp-capabilities span { padding:3px 7px; border-radius:999px; background:rgba(148,163,184,.12); color:#94a3b8; font-size:9px; text-transform:uppercase; letter-spacing:.06em; }
        .mp-prematch { display:grid; gap:10px; margin-bottom:14px; }
        .mp-context { display:flex; flex-wrap:wrap; justify-content:center; gap:6px; }
        .mp-context span { padding:5px 8px; border-radius:8px; background:rgba(148,163,184,.10); color:var(--cl-text-2,#94a3b8); font-size:10px; }
        .mp-countdown { text-align:center; color:var(--cl-accent,#6366f1); font-size:12px; font-weight:800; }
        .mp-form-grid,.mp-standing-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .mp-form-team,.mp-standing-grid>div { padding:9px; border-radius:9px; background:rgba(255,255,255,.04); }
        .mp-form-team>strong,.mp-standing-grid strong { display:block; margin-bottom:6px; color:var(--cl-text,#f8fafc); font-size:10px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .mp-form-dots { display:flex; gap:4px; }.mp-form-dots b { display:grid; place-items:center; width:21px; height:21px; border-radius:50%; color:white; font-size:9px; background:#64748b; }.mp-form-dots b.W{background:#10b981}.mp-form-dots b.L{background:#ef4444}
        .mp-standing-grid span { color:var(--cl-accent,#6366f1); font-size:12px; font-weight:800; }
        .mp-h2h-list { display:grid; gap:5px; }.mp-h2h-list>div { display:grid; grid-template-columns:1fr auto 1fr; gap:7px; padding:6px 8px; border-radius:7px; background:rgba(255,255,255,.035); color:var(--cl-text-2,#94a3b8); font-size:10px; }.mp-h2h-list span:last-child{text-align:right}.mp-h2h-list b{color:var(--cl-text,#f8fafc)}
        .mp-coverage { display:flex; justify-content:space-between; align-items:center; padding:7px 9px; border-radius:8px; background:rgba(148,163,184,.08); color:var(--cl-text-2,#94a3b8); font-size:9px; }.mp-coverage b{color:var(--cl-text,#f8fafc)}
        .mp-review-grid { display:grid; grid-template-columns:1fr 1fr; gap:7px; }.mp-review-grid>div { padding:9px; border-radius:8px; background:rgba(255,255,255,.04); }.mp-review-grid small{display:block;color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-review-grid strong{color:var(--cl-text,#f8fafc);font-size:12px}
        .mp-box .pred,.mp-box .odds,.mp-box .inj { margin:0; }
        /* Lineup & Timeline sections */
        .mp-section { margin-bottom: 14px; padding: 14px; border-radius: 10px; border-left: 3px solid; }
        .mp-section-lineup { background: rgba(16,185,129,0.08); border-color: #10b981; }
        .mp-section-timeline { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
        .mp-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }
        .mp-section-title.lineup { color: #10b981; }
        .mp-section-title.timeline { color: #fbbf24; }
        .mp-lineup-team { margin-bottom: 10px; }
        .mp-lineup-team:last-child { margin-bottom: 0; }
        .mp-lineup-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .mp-lineup-header span:first-child { font-size: 12px; font-weight: 800; color: #fff; }
        .mp-formation { font-size: 10px; font-weight: 700; color: var(--cl-accent, #6366f1); letter-spacing: 0.1em; }
        .mp-lineup-players { font-size: 12px; color: #cbd5e1; line-height: 1.7; }
        .mp-player { display: inline-block; padding: 2px 8px; background: rgba(255,255,255,0.05); border-radius: 6px; margin: 2px; }
        .mp-jersey { color: #fbbf24; font-weight: 800; }
        .mp-timeline-list { margin: 0; padding: 0; list-style: none; }
        .mp-timeline-item { display: flex; gap: 8px; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 12px; color: #cbd5e1; }
        .mp-timeline-item:last-child { border-bottom: none; }
        .mp-tl-clock { min-width: 32px; text-align: right; font-size: 11px; font-weight: 700; color: #94a3b8; font-variant-numeric: tabular-nums; padding-top: 2px; flex-shrink: 0; }
        .mp-momentum { width:100%; height:90px; overflow:visible; }
        .mp-momentum line { stroke:rgba(148,163,184,.3); stroke-width:1; }
        .mp-momentum path { fill:none; stroke:var(--cl-accent,#6366f1); stroke-width:3; vector-effect:non-scaling-stroke; }
        .mp-shotmap { position:relative; height:190px; border:1px solid rgba(255,255,255,.3); border-radius:8px; background:linear-gradient(90deg,rgba(16,185,129,.12),rgba(16,185,129,.05)); }
        .mp-shotmap::after { content:''; position:absolute; left:50%; top:0; bottom:0; border-left:1px solid rgba(255,255,255,.25); }
        .mp-shot { position:absolute; width:9px; height:9px; border-radius:50%; background:#f8fafc; border:2px solid #64748b; transform:translate(-50%,-50%); z-index:1; }
        .mp-shot.goal { background:#10b981; border-color:#d1fae5; width:12px; height:12px; }
        .mp-ratings { display:grid; gap:6px; }
        .mp-ratings div { display:flex; justify-content:space-between; padding:7px 9px; border-radius:7px; background:rgba(255,255,255,.05); font-size:12px; }
        .mp-ratings strong { color:#fbbf24; }
        .mp-insight{border-left-color:var(--cl-accent,#6366f1);background:rgba(99,102,241,.07)}.mp-story{display:grid;gap:7px}.mp-story>div{display:grid;grid-template-columns:30px 1fr;gap:8px}.mp-story>div>b{color:var(--cl-accent,#6366f1)}.mp-story span{display:flex;flex-direction:column}.mp-story strong{color:var(--cl-text,#f8fafc);font-size:11px}.mp-story small{color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;color:var(--cl-text-2,#94a3b8);font-size:9px}.mp-outcome span{display:flex;flex-direction:column}.mp-outcome span:last-child{text-align:right}.mp-outcome span b{color:var(--cl-text,#f8fafc);font-size:11px}.mp-outcome>strong{color:var(--cl-accent,#6366f1);font-size:18px}.mp-outcome-xg{text-align:center;margin-top:7px;color:var(--cl-text-2,#94a3b8);font-size:10px}.mp-outcome-xg b{color:var(--cl-text,#f8fafc)}
        .mp-tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; margin-top: 1px; }
        .mp-tl-badge.goal   { background: rgba(99,102,241,0.18); color: #6366f1; }
        .mp-tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
        .mp-tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
        .mp-tl-badge.sub    { background: rgba(148,163,184,0.12); color: #94a3b8; }
        .mp-tl-badge.meta   { background: transparent; color: #94a3b8; font-size: 14px; padding: 0 4px; letter-spacing: 0; }
        .mp-tl-text strong { color: #fff; }
        .mp-tl-team { color: #94a3b8; font-size: 11px; }
        .mp-close {
          background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, #ec4899));
          color: white; padding: 12px 20px; border: none; border-radius: 12px;
          cursor: pointer; margin-top: 20px; font-weight: 800; width: 100%; font-size: 14px;
        }
      </style>
    `;
  }

  _renderPopup() {
    const m = this.activeMatch;
    const isPre  = m.state === 'pre';
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    const score = s => (s === '' || s === 'N/A') ? '-' : scoreText(s, '-');
    const clock = !isPre && ((m.clock && m.clock !== 'N/A') ? m.clock : translateMatchStatus(m.status, key => this._t(key)));

    const kickoffLabel = formatMatchDate(m.date, resolveLang(this.hass, this._config)) || '—';

    const { goals, yellowCards, redCards } = this.separateEvents(m.match_details || []);
    const group = (title, items, cls) => items.length ? html`
      <div class="mp-event-group ${cls}">
        <h5 class="mp-event-title">${title}</h5>
        <ul class="mp-event-list">${items.map(i => html`<li>${i}</li>`)}</ul>
      </div>` : '';
    const hasEvents = goals.length || yellowCards.length || redCards.length;
    return html`
      <div class="mp-overlay" @click="${e => { if (e.target === e.currentTarget) this.showPopup = false; }}">
        <div class="mp-box" @click="${e => e.stopPropagation()}">
          <h3 class="mp-title">${this._t('popup.match_details')}</h3>
          <div class="mp-score-row">
            <img class="mp-logo" src="${m.home_logo}" alt="" @error="${e => e.target.style.display='none'}">
            <div class="mp-score-center">
              ${isPre ? html`
                <div class="mp-kickoff">${kickoffLabel}</div>
                <div class="mp-kickoff-label">${this._t('status.kickoff')}</div>
              ` : html`
                <div class="mp-score ${isLive ? 'live' : ''}">${score(m.home_score)}<span class="mp-sep"> – </span>${score(m.away_score)}</div>
                ${isLive && clock ? html`<div class="mp-clock live">${clock}</div>` : ''}
                ${isFt ? html`<div class="mp-clock">${this._t('status.full_time')}</div>` : ''}
              `}
            </div>
            <img class="mp-logo" src="${m.away_logo}" alt="" @error="${e => e.target.style.display='none'}">
          </div>
          <p class="mp-teams"><strong>${m.home_team}</strong> – <strong>${m.away_team}</strong></p>
          ${this._detailsLoading ? html`<p class="mp-detail-state">${this._t('ui.loading')}</p>` : ''}
          ${this._detailsError ? html`<p class="mp-detail-state error">${this._t('ui.provider_unavailable')}</p>` : ''}
          ${this._renderDetailCapabilities(m)}
          ${isPre || isLive ? this._renderPopupPrematch(m) : ''}
          ${!isPre ? html`
            ${group(this._t('event.goal'), goals, 'goal')}
            ${group(this._t('event.yellow_card'), yellowCards, 'yellow')}
            ${group(this._t('event.red_card'), redCards, 'red')}
            ${!hasEvents ? html`<p class="mp-no-events">${this._t('popup.no_events')}</p>` : ''}
          ` : ''}
          ${this._renderPopupLineup(m)}
          ${this._renderPopupTimeline(m)}
          ${this._renderMomentum(m)}
          ${this._renderShotmap(m)}
          ${this._renderRatings(m)}
          ${isLive || isFt ? this._renderPopupStory(m) : ''}
          ${isFt ? this._renderPopupOutcome(m) : ''}
          ${isFt ? this._renderPopupReview(m) : ''}
          <button class="mp-close" @click="${() => this.showPopup = false}">${this._t('generic.close')}</button>
        </div>
      </div>
    `;
  }

  _renderPopupPrematch(m) {
    const context = prematchContext(m);
    const lang = resolveLang(this.hass, this._config);
    const minutes = kickoffMinutes(m);
    const standing = side => standingText(m, side, (key, vars) => this._t(key, vars));
    const form = (team, results) => results.length ? html`<div class="mp-form-team"><strong>${team}</strong><div class="mp-form-dots">${results.map(result => html`<b class=${result}>${result}</b>`)}</div></div>` : '';
    const weather = m.weather && typeof m.weather === 'object'
      ? [m.weather.icon, m.weather.temperature != null ? `${m.weather.temperature}°` : '', m.weather.wind].filter(Boolean).join(' ')
      : '';
    const hasContext = context.competition || context.round !== '' || minutes != null || m.venue || weather || (m.broadcasts || []).length;
    const durationParts = kickoffDurationParts(minutes);
    const duration = durationParts.map(({ unit, value }) => this._t(
      `popup.duration_${unit}${value === 1 ? '' : 's'}`,
      { n: value },
    ));
    const countdown = duration.length > 1
      ? `${duration.slice(0, -1).join(', ')} ${this._t('popup.duration_and')} ${duration.at(-1)}`
      : duration[0];
    return html`<div class="mp-prematch">
      ${countdown ? html`<div class="mp-countdown">${this._t('popup.kickoff_in', { value: countdown })}</div>` : ''}
      ${hasContext ? html`<div class="mp-context">
        ${context.competition ? html`<span>🏆 ${this._displayCompetitionName(context.competition)}</span>` : ''}
        ${context.round !== '' ? html`<span>№ ${this._t('popup.round')} ${context.round}</span>` : ''}
        ${weather ? html`<span>${weather}</span>` : ''}
      </div>${renderMatchMeta(m, { lang, t: (key, vars) => this._t(key, vars), showDate: true })}` : ''}
      ${context.homeForm.length || context.awayForm.length ? html`<div class="mp-section"><h5 class="mp-section-title">${this._t('team.form')}</h5><div class="mp-form-grid">${form(m.home_team, context.homeForm)}${form(m.away_team, context.awayForm)}</div></div>` : ''}
      ${context.hasStandings ? html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.standings')}</h5><div class="mp-standing-grid"><div><strong>${m.home_team}</strong><span>${standing('home')}</span></div><div><strong>${m.away_team}</strong><span>${standing('away')}</span></div></div></div>` : ''}
      ${this._renderTeamMetrics(m)}
      ${renderPrediction(m, { t: (key, vars) => this._t(key, vars), lang, showDetails: true })}
      ${renderOdds(m, { t: (key, vars) => this._t(key, vars) })}
      ${renderInjuries(m, { t: (key, vars) => this._t(key, vars) })}
      ${this._renderPopupH2H(m, context)}
      ${this._renderExpectedLineup(m)}
      ${this._renderCoverage(m)}
    </div>`;
  }

  _renderTeamMetrics(m) {
    const value = (side, kind) => [
      m[`${side}_average_goals_${kind}`], m[`${side}_goals_${kind}_avg`],
      m[`${side}_avg_goals_${kind}`],
    ].find(item => item !== null && item !== undefined && item !== '' && item !== 'N/A');
    const hf = value('home', 'for'), ha = value('home', 'against');
    const af = value('away', 'for'), aa = value('away', 'against');
    if ([hf, ha, af, aa].every(item => item === undefined)) return '';
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.team_averages')}</h5><div class="mp-standing-grid">
      <div><strong>${m.home_team}</strong><span>${this._t('popup.goals_for')} ${hf ?? '–'} · ${this._t('popup.goals_against')} ${ha ?? '–'}</span></div>
      <div><strong>${m.away_team}</strong><span>${this._t('popup.goals_for')} ${af ?? '–'} · ${this._t('popup.goals_against')} ${aa ?? '–'}</span></div>
    </div></div>`;
  }

  _renderPopupH2H(m, context = prematchContext(m)) {
    if (!context.h2h.length && !context.h2hCount) return '';
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.h2h')}</h5>
      ${context.h2h.length ? html`<div class="mp-h2h-list">${context.h2h.map(match => html`<div><span>${match.home_team || match.home}</span><b>${scoreText(match.home_score, '–')} – ${scoreText(match.away_score, '–')}</b><span>${match.away_team || match.away}</span></div>`)}</div>` : html`<p class="mp-no-events">${this._t('popup.h2h_available', { n: context.h2hCount })}</p>`}
    </div>`;
  }

  _renderExpectedLineup(m) {
    const home = m.predicted_lineup_home || m.expected_lineup_home || [];
    const away = m.predicted_lineup_away || m.expected_lineup_away || [];
    if (!home.length && !away.length) return '';
    const team = (name, players) => players.length ? html`<div class="mp-lineup-team"><div class="mp-lineup-header"><span>${name}</span></div><div class="mp-lineup-players">${players.map(player => html`<span class="mp-player">${player.name || player}</span>`)}</div></div>` : '';
    return html`<div class="mp-section mp-section-lineup"><h5 class="mp-section-title lineup">${this._t('popup.expected_lineup')}</h5><p class="mp-no-events">${this._t('popup.expected_lineup_note')}</p>${team(m.home_team, home)}${team(m.away_team, away)}</div>`;
  }

  _renderCoverage(m) {
    const attrs = this.hass?.states?.[this._config.entity]?.attributes || {};
    const provider = attrs.provider === 'fotmob_private' ? 'FotMob' : (attrs.provider || 'Soccer Live');
    const capabilities = m.detail_capabilities || [];
    const state = this.hass?.states?.[this._config.entity];
    const age = state?.last_updated ? Math.max(0, Math.round((Date.now() - new Date(state.last_updated).getTime()) / 60000)) : null;
    return html`<div class="mp-coverage"><span>${this._t('popup.data_source')}${age != null ? ` · ${this._t('popup.updated_minutes', { n: age })}` : ''}</span><b>${provider}${capabilities.length ? ` · ${capabilities.length} ${this._t('popup.parts')}` : ''}</b></div>`;
  }

  _renderPopupReview(m) {
    const review = reviewContext(m);
    if (!review.present) return '';
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.review')}</h5><div class="mp-review-grid">
      ${review.playerOfMatch ? html`<div><small>${this._t('popup.player_of_match')}</small><strong>${review.playerOfMatch.name || review.playerOfMatch.player}</strong></div>` : ''}
      ${review.expectedGoals ? html`<div><small>xG</small><strong>${review.expectedGoals.home ?? '–'} – ${review.expectedGoals.away ?? '–'}</strong></div>` : ''}
      ${review.standout ? html`<div><small>${review.standout.key}</small><strong>${review.standout.home} – ${review.standout.away}</strong></div>` : ''}
      ${review.scorers.length ? html`<div><small>${this._t('event.goal')}</small><strong>${review.scorers.map(item => `${item.player} ${item.minute}'`).join(' · ')}</strong></div>` : ''}
    </div></div>`;
  }

  _renderPopupStory(m) {
    const story = derivedMatchStory(m);
    if (!story.length) return '';
    const labels = { opening_goal: 'story.opening_goal', equalizer: 'story.equalizer', decisive_goal: 'story.decisive_goal', red_card: 'story.red_card' };
    return html`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t('match.story')}</h5>
      <div class="mp-story">${story.map(item => html`<div><b>${item.minute ? `${item.minute}'` : '·'}</b><span><strong>${this._t(labels[item.type] || 'match.event')}</strong><small>${item.player || item.athletes?.[0] || ''}${item.team ? ` · ${item.team}` : ''}</small></span></div>`)}</div>
    </div>`;
  }

  _renderPopupOutcome(m) {
    const outcome = predictionOutcome(m);
    if (!outcome) return '';
    const side = value => this._t(`match.outcome_${value}`);
    return html`<div class="mp-section mp-insight"><h5 class="mp-section-title">${this._t('match.expectation_reality')}</h5>
      <div class="mp-outcome"><span>${this._t('match.expected')}<b>${side(outcome.predicted)}${outcome.predictedPercent != null ? ` · ${outcome.predictedPercent}%` : ''}</b></span><strong>${outcome.correct ? '✓' : '↯'}</strong><span>${this._t('match.actual')}<b>${side(outcome.actual)}</b></span></div>
      ${outcome.xg ? html`<div class="mp-outcome-xg">xG <b>${outcome.xg.home ?? '—'} – ${outcome.xg.away ?? '—'}</b></div>` : ''}
    </div>`;
  }

  _renderDetailCapabilities(m) {
    const caps = m.detail_capabilities || [];
    if (!caps.length) return '';
    return html`<div class="mp-capabilities">${caps.map(cap => html`<span>${cap}</span>`)}</div>`;
  }

  _renderMomentum(m) {
    const points = m.momentum || [];
    if (!points.length) return '';
    const width = 300, height = 90, mid = height / 2;
    const max = Math.max(1, ...points.map(point => Math.abs(Number(point.value) || 0)));
    const path = points.map((point, index) => {
      const x = points.length === 1 ? 0 : index * width / (points.length - 1);
      const y = mid - ((Number(point.value) || 0) / max) * (mid - 8);
      return `${index ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.momentum')}</h5>
      <svg class="mp-momentum" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
        <line x1="0" y1="${mid}" x2="${width}" y2="${mid}"></line><path d="${path}"></path>
      </svg></div>`;
  }

  _renderShotmap(m) {
    const shots = m.shotmap || [];
    if (!shots.length) return '';
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.shotmap')}</h5>
      <div class="mp-shotmap">${shots.map(shot => {
        const x = Math.max(2, Math.min(98, Number(shot.x) || 50));
        const y = Math.max(2, Math.min(98, Number(shot.y) || 50));
        const goal = String(shot.outcome || '').toLowerCase().includes('goal');
        return html`<span class="mp-shot ${goal ? 'goal' : ''}" style="left:${x}%;top:${100-y}%" title="${shot.player || ''} · ${shot.minute || ''}' · xG ${shot.xg ?? '—'}"></span>`;
      })}</div></div>`;
  }

  _renderRatings(m) {
    const players = m.top_rated_players || [];
    if (!players.length && !m.player_of_the_match) return '';
    return html`<div class="mp-section"><h5 class="mp-section-title">${this._t('popup.ratings')}</h5>
      <div class="mp-ratings">${players.map(player => html`<div><span>${player.name}</span><strong>${player.rating}</strong></div>`)}</div>
    </div>`;
  }

  _renderPopupLineup(m) {
    const lineupHome = m.lineup_home || [];
    const lineupAway = m.lineup_away || [];
    if (!lineupHome.length && !lineupAway.length) return '';
    const pitch = renderPitch(m, { t: (k, v) => this._t(k, v) });
    if (pitch) {
      return html`
        <div class="mp-section mp-section-lineup">
          <h5 class="mp-section-title lineup">${this._t('popup.lineups')}</h5>
          ${pitch}
        </div>`;
    }
    const teamBlock = (players, formation, label) => {
      const hasFlags = players.some(p => p.starter === true || p.starter === false);
      const starters = hasFlags ? players.filter(p => p.starter === true) : players;
      const substitutes = hasFlags ? players.filter(p => p.starter === false) : [];
      if (!starters.length) return '';
      return html`
        <div class="mp-lineup-team">
          <div class="mp-lineup-header">
            <span>${label}</span>
            ${formation ? html`<span class="mp-formation">${formation}</span>` : ''}
          </div>
          <div class="mp-lineup-players">
            ${starters.map(p => html`<span class="mp-player">${p.jersey ? html`<strong class="mp-jersey">${p.jersey}</strong> ` : ''}${p.short_name || p.name || ''}</span>`)}
          </div>
          ${substitutes.length ? html`<div class="mp-lineup-header"><span>${this._t('popup.substitutes')}</span></div><div class="mp-lineup-players">${substitutes.map(p => html`<span class="mp-player">${p.jersey ? html`<strong class="mp-jersey">${p.jersey}</strong> ` : ''}${p.short_name || p.name || ''}</span>`)}</div>` : ''}
        </div>`;
    };
    return html`
      <div class="mp-section mp-section-lineup">
        <h5 class="mp-section-title lineup">${this._t('popup.lineups')}</h5>
        ${teamBlock(lineupHome, m.formation_home, m.home_team)}
        ${teamBlock(lineupAway, m.formation_away, m.away_team)}
      </div>`;
  }

  _renderPopupTimeline(m) {
    const keyEvents = (m.key_events || []).filter(e => !SKIP.some(s => (e.type_text || '').toLowerCase().includes(s)));
    if (!keyEvents.length) return '';
    const getBadgeType = ev => {
      const ty = (ev.type || '').toLowerCase(), txt = (ev.type_text || '').toLowerCase();
      if (isGoalEvent(ev)) return 'goal';
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
      if (labels[btype]) return html`<span class="mp-tl-badge ${btype}">${this._t(labels[btype])}</span>`;
      return html`<span class="mp-tl-badge meta">·</span>`;
    };
    return html`
      <div class="mp-section mp-section-timeline">
        <h5 class="mp-section-title timeline">${this._t('popup.timeline')}</h5>
        <ul class="mp-timeline-list">
          ${keyEvents.map(e => {
            const btype = getBadgeType(e);
            return html`
              <li class="mp-timeline-item">
                <span class="mp-tl-clock">${e.clock || ''}</span>
                ${badge(btype)}
                <span class="mp-tl-text"><strong>${getText(e)}</strong>${e.team ? html`<br><span class="mp-tl-team">${e.team}</span>` : ''}</span>
              </li>`;
          })}
        </ul>
      </div>`;
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
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
      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.10), transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
      .live-ticker {
        display: flex; align-items: center; gap: 10px;
        background: rgba(239,68,68,0.08);
        border-bottom: 1px solid rgba(239,68,68,0.15);
        padding: 6px 14px;
        overflow: hidden;
        position: relative; z-index: 1;
      }
      .ticker-badge {
        flex-shrink: 0;
        background: var(--cl-live);
        color: white;
        font-size: 9px; font-weight: 800;
        padding: 2px 7px;
        border-radius: 4px;
        letter-spacing: 0.08em;
        box-shadow: 0 0 8px var(--cl-live-glow);
      }
      .ticker-track {
        flex: 1; overflow: hidden;
        display: flex; gap: 60px;
      }
      .ticker-content {
        white-space: nowrap; flex-shrink: 0;
        font-size: 11px; font-weight: 700;
        color: var(--cl-text);
        animation: ticker-scroll 18s linear infinite;
      }
      @keyframes ticker-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(calc(-100% - 60px)); }
      }
      /* .matches-header / .league-logo / .league-info / .league-name / .league-dates removed — now .top-bar from soccerHeaderStyles */
      .live-counter {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        box-shadow: 0 2px 12px var(--cl-live-glow);
      }
      .scroll-content {
        position: relative;
        z-index: 1;
        overflow-y: auto;
        padding: 4px 4px 12px;
      }
      .day-divider {
        padding: 12px 12px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--cl-text-2);
        font-weight: 800;
        display: flex; align-items: center; gap: 8px;
      }
      .season-divider {
        margin: 14px 12px 2px;
        padding: 7px 10px;
        border: 1px solid var(--cl-divider);
        border-radius: 999px;
        color: var(--cl-text-2);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-align: center;
      }
      .day-divider::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }
      .day-divider.today { color: var(--cl-accent); }
      .day-divider.today::after {
        background: linear-gradient(90deg, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .day-rel {
        font-size: 9px; font-weight: 600;
        color: var(--cl-text-2); opacity: 0.55;
        text-transform: none; letter-spacing: 0;
        flex-shrink: 0;
      }
      .day-divider.tomorrow { color: var(--cl-accent-2); opacity: 0.9; }
      .day-divider.tomorrow::after {
        background: linear-gradient(90deg, var(--cl-accent-2), transparent);
        opacity: 0.3;
      }
      .day-divider.yesterday { opacity: 0.55; }
      .day-divider.comp { color: var(--cl-text); font-size: 11px; letter-spacing: 0.05em; }
      .comp-divider-logo { width: 14px; height: 14px; object-fit: contain; flex-shrink: 0; }

      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 2s ease-out forwards;
      }
      @keyframes confetti-fly {
        0%   { transform: translate(-50%, 0) rotate(0deg); opacity: 1; }
        100% { transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg); opacity: 0; }
      }

      .match-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 4px;
        position: relative;
      }
      .match-row:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .match-row.live {
        background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%);
        animation: live-row-glow 3s ease-in-out infinite;
      }
      .match-row.live::before {
        content: '';
        position: absolute;
        left: -2px; top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(180deg, var(--cl-live), #f97316);
        border-radius: 0 4px 4px 0;
        box-shadow: 0 0 12px var(--cl-live-glow);
      }
      @keyframes live-row-glow {
        0%, 100% { background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%); }
        50% { background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05) 60%); }
      }
      .match-row.goal-pulse {
        animation: goal-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes goal-pulse {
        0%   { box-shadow: none; transform: scale(1); }
        20%  { box-shadow: 0 0 0 3px var(--cl-gold), 0 0 24px var(--cl-gold); transform: scale(1.02); }
        100% { box-shadow: none; transform: scale(1); }
      }
      .match-row.card-pulse {
        animation: card-pulse-row 1s ease-out;
      }
      @keyframes card-pulse-row {
        0%   { box-shadow: none; }
        30%  { box-shadow: 0 0 0 2px #f59e0b; }
        100% { box-shadow: none; }
      }

      .match-time {
        font-size: 11px;
        color: var(--cl-text-2);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 44px;
        text-align: center;
        padding: 6px 8px;
        background: var(--cl-card-2);
        border-radius: 8px;
      }
      .match-time.live-time {
        background: rgba(239,68,68,0.15);
        color: var(--cl-live);
      }
      .match-time.ft {
        background: rgba(16,185,129,0.12);
        color: var(--cl-green);
      }
      .match-teams {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .match-team {
        display: flex; align-items: center; gap: 10px;
      }
      .match-team img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .match-team .name {
        font-size: 13px;
        font-weight: 600;
        flex: 1;
        letter-spacing: -0.01em;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .match-team .name.winner { font-weight: 800; }
      .match-team .name.loser { color: var(--cl-text-2); }
      .match-team .name.my-team-name { font-weight: 800; color: var(--cl-accent); }
      .match-team .score {
        font-size: 14px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 22px;
        text-align: right;
        color: var(--cl-text);
      }
      .match-team .score.winner { color: var(--cl-accent); }
      .match-team .score.loser { color: var(--cl-text-2); opacity: 0.6; }
      .row-extras {
        display: flex;
        gap: 6px;
        margin-top: 4px;
      }
      .tv-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        background: rgba(var(--cl-accent-rgb),0.12);
        border: 1px solid rgba(var(--cl-accent-rgb),0.25);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .tv-chip svg { width: 10px; height: 10px; }
      .league-chip {
        display: inline-flex;
        align-items: center;
        padding: 2px 7px;
        background: rgba(var(--cl-accent-2-rgb),0.10);
        border: 1px solid rgba(var(--cl-accent-2-rgb),0.22);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent-2);
        letter-spacing: 0.03em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 140px;
      }
      .detail-cap { color:var(--cl-text-2); opacity:.7; font-size:10px; }
      .match-status-icon {
        color: var(--cl-text-2);
        font-size: 18px;
        opacity: 0.5;
        transition: all 0.2s;
      }
      .match-row:hover .match-status-icon {
        color: var(--cl-accent);
        opacity: 1;
        transform: translateX(3px);
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
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `];
  }
}

if (!customElements.get("soccer-live-matches")) {
  customElements.define("soccer-live-matches", SoccerLiveMatchesCard);
}
