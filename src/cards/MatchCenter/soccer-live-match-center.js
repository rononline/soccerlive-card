import { LitElement, html, css } from 'lit-element';
import { t, resolveLang, formatMatchDateFull, formatDateOnly } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { EVENT_I18N, SKIP, isGoalEvent } from '../shared-event-i18n.js';
import { translateStatKey } from '../shared-stat-labels.js';
import { soccerCardShellStyles, renderCardHero } from '../card-shell.js';
import { renderWeatherBadge, weatherBadgeStyles } from '../weather-badge.js';
import { displayCompetitionName } from '../shared-competition.js';
import { renderPitch, pitchStyles } from '../shared-pitch.js';

const TAB_IDS = ['overview', 'stats', 'timeline', 'lineup', 'h2h'];

class SoccerLiveMatchCenterCard extends LitElement {
  static get properties() {
    return {
      hass:          {},
      _config:       {},
      _activeTab:    { type: String },
      _tlFilter:     { type: String },
      _isLoading:    { type: Boolean },
      _weatherBadge: { type: Object },
    };
  }

  constructor() {
    super();
    this._activeTab = 'overview';
    this._tlFilter = 'all';
    this._isLoading = true;
    this._weatherBadge = null;
    this._lastWeatherVenue = null;
    this._lastMatchState = null;
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    try {
      const saved = sessionStorage.getItem(`soccer-mc-tab:${config.entity}`);
      if (saved && TAB_IDS.includes(saved)) this._activeTab = saved;
    } catch (_) { /* storage blocked in private/restricted contexts */ }
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
    if (changedProperties.has('hass') && this.hass && this._config) {
      const s = this.hass.states[this._config.entity];
      if (s && s.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, s.attributes);
        const match = (s.attributes.matches || [])[0];
        if (match?.venue && match.venue !== this._lastWeatherVenue) {
          this._loadWeather(match.venue, match.venue_lat, match.venue_lon);
        }
        if (this._lastMatchState === 'pre' && match?.state === 'in' && this._activeTab === 'overview') {
          this._activeTab = 'timeline';
        }
        this._lastMatchState = match?.state ?? this._lastMatchState;
      }
    }
  }

  async _loadWeather(venue, venue_lat = null, venue_lon = null) {
    this._lastWeatherVenue = venue;
    try {
      this._weatherBadge = await renderWeatherBadge(venue, this.hass, this._config, venue_lat, venue_lon);
    } catch (_) {
      this._weatherBadge = null;
    }
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const s = this.hass.states[entityId];
    let attrs = null;

    if (!s) {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (s.state === 'unavailable') {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else {
      attrs = s.attributes;
    }

    if (this._isLoading && !attrs) return renderLoading(this._t('ui.loading'));
    const rawMatch = (attrs?.matches || [])[0];
    if (!rawMatch) return renderInfoState('', this._t('ui.no_match_data'), this._t('ui.no_match_hint'), '');
    // Inject sensor-level logo/name as fallback (parser stores these on attrs, not per-match)
    const leagueInfo = (attrs.league_info || [])[0] || {};
    const match = {
      ...rawMatch,
      league_logo: rawMatch.league_logo || leagueInfo.logo_href || attrs.league_logo || null,
      league_name: rawMatch.league_name || leagueInfo.name || leagueInfo.abbreviation || attrs.league_name || '',
    };
    return this._renderCard(match);
  }

  _renderCard(match) {
    const tabs = TAB_IDS.map(id => ({ id, label: this._t('tab.' + id) }));

    return html`
      <ha-card>
        <div class="mc-hero-section">
          ${renderCardHero(match.home_logo, match.away_logo)}
          <div class="card-content">
            ${this._config.hide_header !== true ? this._renderHero(match) : ''}
          </div>
        </div>
        <div class="tab-bar">
          ${tabs.map(tab => html`
            <button class="tab ${this._activeTab === tab.id ? 'active' : ''}"
              @click=${() => { this._activeTab = tab.id; this._tlFilter = 'all'; try { sessionStorage.setItem(`soccer-mc-tab:${this._config.entity}`, tab.id); } catch (_) {} }}>
              ${tab.label}
            </button>
          `)}
        </div>
        <div class="tab-content${this._activeTab === 'lineup' ? ' lineup' : ''}">
          ${this._activeTab === 'overview'  ? this._renderOverview(match) : ''}
          ${this._activeTab === 'stats'     ? this._renderStats(match)    : ''}
          ${this._activeTab === 'timeline'  ? this._renderTimeline(match) : ''}
          ${this._activeTab === 'lineup'    ? this._renderLineup(match)   : ''}
          ${this._activeTab === 'h2h'       ? this._renderH2H(match)      : ''}
        </div>
      </ha-card>
    `;
  }

  _renderHero(match) {
    const isLive     = match.state === 'in';
    const isFinished = match.state === 'post';
    const badge = isLive
      ? renderSoccerBadge(`${match.clock ? match.clock + "' " : ''}${this._t('status.live')}`, 'live')
      : isFinished
        ? renderSoccerBadge(this._t('status.full_time'), 'ft')
        : renderSoccerBadge(formatMatchDateFull(match.date, resolveLang(this.hass, this._config)) || match.date || '', 'date');

    const compName = displayCompetitionName(
      match.competition_name || match.league_name || '',
      resolveLang(this.hass, this._config)
    );
    const compLogo = match.competition_logo || match.league_logo || null;

    return html`
      ${renderSoccerHeader({ logo: compLogo, title: compName, badge })}

      <div class="scoreboard">
        <div class="mc-team">
          ${match.home_logo ? html`<img class="mc-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="mc-name">${match.home_team || '?'}</span>
        </div>
        <div class="mc-score">
          ${isLive || isFinished
            ? html`<span class="mc-num">${match.home_score ?? 0} – ${match.away_score ?? 0}</span>`
            : html`<span class="mc-vs">${this._t('match.vs')}</span>`}
        </div>
        <div class="mc-team away">
          <span class="mc-name">${match.away_team || '?'}</span>
          ${match.away_logo ? html`<img class="mc-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
        </div>
      </div>
    `;
  }

  _renderOverview(match) {
    const clean = value => value && value !== 'N/A' ? value : '';
    const homeRec = clean(match.home_record_summary || match.home_record);
    const awayRec = clean(match.away_record_summary || match.away_record);
    const homeStd = clean(match.home_standing_summary);
    const awayStd = clean(match.away_standing_summary);
    const homeForm = clean(match.home_form || match.last_five_home);
    const awayForm = clean(match.away_form || match.last_five_away);
    const formDots = str => str ? html`<div class="ov-form-dots">${str.split('').slice(-5).map(c => {
      const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
      return html`<span class="ov-fd ${cls}"></span>`;
    })}</div>` : html`<div class="ov-form-dots"></div>`;

    return html`
      <div class="ov-section">
        ${(homeForm || awayForm) ? html`
          <div class="ov-row">
            ${formDots(homeForm)}
            <span class="ov-label">${this._t('team.form') || 'Form'}</span>
            <div class="ov-form-dots right">${awayForm ? awayForm.split('').slice(-5).map(c => {
              const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
              return html`<span class="ov-fd ${cls}"></span>`;
            }) : ''}</div>
          </div>
        ` : ''}
        ${(homeRec || awayRec) ? html`
          <div class="ov-row">
            <span class="ov-val">${homeRec || '—'}</span>
            <span class="ov-label">${this._t('match.record')}</span>
            <span class="ov-val right">${awayRec || '—'}</span>
          </div>
        ` : ''}
        ${(homeStd || awayStd) ? html`
          <div class="ov-row">
            <span class="ov-val small">${homeStd || '—'}</span>
            <span class="ov-label">${this._t('match.standing')}</span>
            <span class="ov-val right small">${awayStd || '—'}</span>
          </div>
        ` : ''}
        ${match.week_label ? html`<div class="ov-meta"><span class="ov-cal">◈</span> ${match.week_label}</div>` : ''}
      </div>
      ${renderMatchMeta(match, {
        lang: resolveLang(this.hass, this._config),
        t: k => this._t(k),
        weatherBadge: this._weatherBadge || null,
        hideBroadcasts: this._config.hide_broadcasts === true,
      })}
    `;
  }

  _renderStats(match) {
    let stats = [];
    if (match.home_statistics && typeof match.home_statistics === 'object') {
      const homeS = match.home_statistics;
      const awayS = match.away_statistics || {};
      const MATCH_STAT_EXCLUDE = new Set(['appearances']);
      stats = Object.entries(homeS)
        .filter(([k]) => k !== 'Unknown' && !MATCH_STAT_EXCLUDE.has(k))
        .map(([k, hv]) => ({ label: translateStatKey(k, k2 => this._t(k2)), home: hv, away: awayS[k] ?? '—' }));
    }
    if (!stats.length) return html`<p class="empty">${this._t('ui.no_stats_yet')}</p>`;
    return html`
      <div class="stats-list">
        ${stats.map(s => {
          const displayStat = value => value !== null && value !== undefined && value !== '' && value !== 'N/A' ? String(value) : '—';
          const rawH = displayStat(s.home);
          const rawA = displayStat(s.away);
          const hv = parseFloat(rawH) || 0;
          const av = parseFloat(rawA) || 0;
          const total = hv + av;
          const homePct = total > 0 ? Math.round((hv / total) * 100) : 50;
          return html`
            <div class="stat-row">
              <span class="stat-val">${rawH}</span>
              <div class="stat-center">
                <div class="stat-label">${s.label}</div>
                <div class="stat-bars">
                  <div class="stat-bar home" style="width:${homePct}%"></div>
                  <div class="stat-bar away" style="width:${100 - homePct}%"></div>
                </div>
              </div>
              <span class="stat-val right">${rawA}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderTimeline(match) {
    const allEvents = (match.key_events || []).filter(e => {
      const txt = (e.type_text || '').toLowerCase();
      return !SKIP.some(s => txt.includes(s));
    });
    if (!allEvents.length) return html`<p class="empty">${this._t('ui.no_events_yet')}</p>`;
    const getBadgeType = ev => {
      const ty = (ev.type || '').toLowerCase();
      const txt = (ev.type_text || '').toLowerCase();
      if (isGoalEvent(ev)) return 'goal';
      if (txt.includes('yellow')) return 'yellow';
      if (txt.includes('red card')) return 'red';
      if (ty === 'substitution' || txt.includes('substitut')) return 'sub';
      return 'meta';
    };
    const badge = btype => {
      if (btype === 'goal')   return html`<span class="tl-badge goal">${this._t('event.goal')}</span>`;
      if (btype === 'yellow') return html`<span class="tl-badge yellow">${this._t('event.yellow_card')}</span>`;
      if (btype === 'red')    return html`<span class="tl-badge red">${this._t('event.red_card')}</span>`;
      if (btype === 'sub')    return html`<span class="tl-badge sub">${this._t('event.substitution')}</span>`;
      return html`<span class="tl-badge meta">·</span>`;
    };
    const getText = ev => {
      const athletes = (ev.athletes || []).filter(Boolean);
      if (athletes.length) return athletes.join(', ');
      const i18nKey = EVENT_I18N[(ev.type_text || '').toLowerCase()];
      return i18nKey ? this._t(i18nKey) : (ev.type_text || ev.short_text || '');
    };
    const events = this._tlFilter === 'goals'
      ? allEvents.filter(e => getBadgeType(e) === 'goal')
      : this._tlFilter === 'cards'
        ? allEvents.filter(e => ['yellow', 'red'].includes(getBadgeType(e)))
        : allEvents;
    const hasGoals = allEvents.some(e => getBadgeType(e) === 'goal');
    const hasCards = allEvents.some(e => ['yellow', 'red'].includes(getBadgeType(e)));
    return html`
      <div class="tl-filters">
        <button class="tl-chip ${this._tlFilter === 'all' ? 'active' : ''}" @click=${() => { this._tlFilter = 'all'; }}>${this._t('filter.all') || 'Alles'}</button>
        ${hasGoals ? html`<button class="tl-chip ${this._tlFilter === 'goals' ? 'active' : ''}" @click=${() => { this._tlFilter = 'goals'; }}>⚽ ${this._t('event.goal')}</button>` : ''}
        ${hasCards ? html`<button class="tl-chip ${this._tlFilter === 'cards' ? 'active' : ''}" @click=${() => { this._tlFilter = 'cards'; }}>🟨 ${this._t('event.cards') || this._t('event.yellow_card')}</button>` : ''}
      </div>
      <div class="tl-list">
        ${events.length ? events.map(ev => {
          const btype = getBadgeType(ev);
          return html`
            <div class="tl-row">
              <span class="tl-min">${ev.clock || ev.minute ? `${ev.clock || ev.minute}'` : ''}</span>
              ${badge(btype)}
              <div class="tl-text">
                <div>${getText(ev)}</div>
                ${ev.team ? html`<div class="tl-team">${ev.team}</div>` : ''}
              </div>
            </div>
          `;
        }) : html`<p class="empty">${this._t('ui.no_events_yet')}</p>`}
      </div>
    `;
  }

  _renderLineup(match) {
    const home = match.lineup_home || [];
    const away = match.lineup_away || [];
    if (!home.length && !away.length) return html`<p class="empty">${this._t('ui.no_lineup_yet')}</p>`;

    const pitch = renderPitch(match, { t: (k, v) => this._t(k, v) });
    if (pitch) return pitch;

    // No formation available — fall back to the plain list.
    const hasFlags = arr => arr.some(p => p.starter === true || p.starter === false);
    const homeStart = hasFlags(home) ? home.filter(p => p.starter === true)  : home;
    const homeBench = hasFlags(home) ? home.filter(p => p.starter === false) : [];
    const awayStart = hasFlags(away) ? away.filter(p => p.starter === true)  : away;
    const awayBench = hasFlags(away) ? away.filter(p => p.starter === false) : [];
    return this._renderLineupList(match, homeStart, homeBench, awayStart, awayBench);
  }

  _renderLineupList(match, homeStart, homeBench, awayStart, awayBench) {
    const playerRow = (p, isRight = false, isBench = false) => html`
      <div class="lu-player ${isBench ? 'bench' : ''}">
        ${!isRight ? html`<span class="lu-shirt">${p.jersey || p.number || ''}</span>` : ''}
        <span class="lu-name">${p.name || p.display_name || ''}</span>
        ${p.position ? html`<span class="lu-pos">${p.position}</span>` : ''}
        ${isRight ? html`<span class="lu-shirt">${p.jersey || p.number || ''}</span>` : ''}
      </div>
    `;
    return html`
      <div class="lu-wrap">
        <div class="lu-cols">
          <div class="lu-col">
            <div class="lu-header">${match.home_team || this._t('generic.home')}</div>
            ${homeStart.map(p => playerRow(p, false))}
            ${homeBench.length ? html`
              <div class="lu-bench-label">${this._t('lineup.bench')}</div>
              ${homeBench.map(p => playerRow(p, false, true))}
            ` : ''}
          </div>
          <div class="lu-col right">
            <div class="lu-header">${match.away_team || this._t('generic.away')}</div>
            ${awayStart.map(p => playerRow(p, true))}
            ${awayBench.length ? html`
              <div class="lu-bench-label">${this._t('lineup.bench')}</div>
              ${awayBench.map(p => playerRow(p, true, true))}
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _renderH2H(match) {
    const h2h = match.head_to_head || [];
    if (!h2h.length) return html`<p class="empty">${this._t('ui.no_h2h_yet')}</p>`;
    const currentHome = (match.home_team || '').toLowerCase();
    return html`
      <div class="h2h-list">
        ${h2h.map(m => {
          const hs  = parseInt(m.home_score ?? m.home_goals);
          const as_ = parseInt(m.away_score ?? m.away_goals);
          const hw  = !isNaN(hs) && !isNaN(as_) && hs > as_;
          const aw  = !isNaN(hs) && !isNaN(as_) && as_ > hs;
          const h2hHomeIsOurs = currentHome && m.home_team && m.home_team.toLowerCase().includes(currentHome);
          const ourWon  = h2hHomeIsOurs ? hw : aw;
          const ourLost = h2hHomeIsOurs ? aw : hw;
          const scoreClass = currentHome ? (ourWon ? 'our-win' : ourLost ? 'our-loss' : 'draw') : (hw ? 'home-win' : aw ? 'away-win' : 'draw');
          return html`
            <div class="h2h-row">
              <span class="h2h-date">${formatDateOnly(m.date, resolveLang(this.hass, this._config)) || (m.date || '').split('T')[0]}</span>
              <span class="h2h-team ${hw ? 'win' : ''}">${m.home_team || m.home_abbrev || '?'}</span>
              <span class="h2h-score ${scoreClass}">${hs ?? '?'}–${as_ ?? '?'}</span>
              <span class="h2h-team right ${aw ? 'win' : ''}">${m.away_team || m.away_abbrev || '?'}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  getCardSize() { return 6; }
  static getConfigElement() { return document.createElement('soccer-live-match-center-editor'); }
  static getStubConfig()    { return { entity: '' }; }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, matchMetaStyles, weatherBadgeStyles, pitchStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); border-radius: 20px; overflow: hidden; padding: 0; }
      /* Hero wrapper: scopes bg-logos to the header+scoreboard area only */
      .mc-hero-section { position: relative; overflow: hidden; }
      /* Scoreboard */
      .scoreboard { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px 12px; }
      .mc-team { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; }
      .mc-team.away { align-items: center; }
      .mc-logo { width: 48px; height: 48px; object-fit: contain; }
      .mc-name { font-size: 12px; font-weight: 700; text-align: center; max-width: 90px; }
      .mc-score { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .mc-num { font-size: 34px; font-weight: 900; letter-spacing: 4px; }
      .mc-vs  { font-size: 18px; font-weight: 700; color: var(--cl-text-2, #94a3b8); }
      /* Tabs */
      .tab-bar { display: flex; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.08)); overflow-x: auto; scrollbar-width: none; }
      .tab-bar::-webkit-scrollbar { display: none; }
      .tab { flex: 1; min-width: 56px; padding: 9px 4px; background: none; border: none; border-bottom: 2px solid transparent; color: var(--cl-text-2, #94a3b8); font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 0.06em; transition: color 0.15s; }
      .tab.active { color: var(--cl-accent, #6366f1); border-bottom-color: var(--cl-accent, #6366f1); }
      .tab-content { min-height: 80px; }
      /* Overview */
      .ov-section { padding: 4px 16px 8px; }
      .ov-row { display: flex; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .ov-val { flex: 1; font-weight: 700; font-size: 13px; }
      .ov-val.right { text-align: right; }
      .ov-val.small { font-size: 11px; }
      .ov-label { flex: 0 0 70px; text-align: center; font-size: 10px; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; }
      .ov-meta { font-size: 12px; color: var(--cl-text-2, #94a3b8); padding: 7px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.05)); display: flex; align-items: center; gap: 5px; }
      .ov-cal { font-size: 10px; color: var(--cl-accent, #6366f1); }
      .ov-form-dots { flex: 1; display: flex; gap: 3px; align-items: center; }
      .ov-form-dots.right { justify-content: flex-end; }
      .ov-fd { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
      .ov-fd.w { background: var(--cl-green, #10b981); }
      .ov-fd.l { background: var(--cl-live, #ef4444); }
      .ov-fd.d { background: var(--cl-text-2, #94a3b8); opacity: 0.5; }
      /* Stats */
      .stats-list { padding: 4px 0; }
      .stat-row { display: flex; align-items: center; padding: 6px 16px; gap: 8px; }
      .stat-val { min-width: 34px; font-weight: 700; font-size: 13px; }
      .stat-val.right { text-align: right; }
      .stat-center { flex: 1; display: flex; flex-direction: column; gap: 3px; }
      .stat-label { text-align: center; font-size: 10px; color: var(--cl-text-2, #94a3b8); }
      .stat-bars { display: flex; height: 4px; border-radius: 2px; overflow: hidden; }
      .stat-bar.home { background: var(--cl-accent, #6366f1); }
      .stat-bar.away { background: var(--cl-text-2, #94a3b8); opacity: 0.4; }
      /* Timeline */
      .tl-filters { display: flex; gap: 6px; padding: 8px 16px 4px; }
      .tl-chip { background: var(--cl-card-2, rgba(255,255,255,0.05)); border: 1px solid var(--cl-divider, rgba(255,255,255,0.08)); border-radius: 99px; color: var(--cl-text-2, #94a3b8); font-size: 10px; font-weight: 700; padding: 3px 10px; cursor: pointer; }
      .tl-chip.active { background: var(--cl-accent, #6366f1); border-color: var(--cl-accent, #6366f1); color: #fff; }
      .tab-content { min-height: 80px; max-height: 380px; overflow-y: auto; -webkit-overflow-scrolling: touch; }
      .tab-content.lineup { max-height: none; overflow-y: visible; }
      .tl-list { padding: 4px 16px; }
      .tl-row { display: flex; align-items: flex-start; gap: 8px; padding: 8px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .tl-min { min-width: 28px; font-size: 11px; font-weight: 700; color: var(--cl-text-2, #94a3b8); padding-top: 2px; }
      .tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; }
      .tl-badge.goal   { background: rgba(99,102,241,0.18); color: var(--cl-accent, #6366f1); }
      .tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
      .tl-badge.sub    { background: rgba(148,163,184,0.12); color: var(--cl-text-2, #94a3b8); }
      .tl-badge.meta   { background: transparent; color: var(--cl-text-2, #94a3b8); font-size: 14px; padding: 0 4px; letter-spacing: 0; }
      .tl-text { flex: 1; font-size: 12px; }
      .tl-team { font-size: 10px; color: var(--cl-text-2, #94a3b8); margin-top: 2px; }
      /* Lineup */
      .lu-wrap { padding: 8px 16px; }
      .lu-formation { display: flex; align-items: center; justify-content: space-between; padding: 6px 0 10px; font-size: 20px; font-weight: 900; }
      .lu-form-label { font-size: 10px; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; }
      .lu-cols { display: flex; gap: 12px; }
      .lu-col { flex: 1; }
      .lu-col.right .lu-player { flex-direction: row-reverse; }
      .lu-header { font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
      .lu-player { display: flex; align-items: center; gap: 5px; padding: 4px 0; font-size: 11px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04)); }
      .lu-player.bench { opacity: 0.65; font-size: 10.5px; }
      .lu-shirt { font-size: 10px; font-weight: 800; color: var(--cl-accent, #6366f1); min-width: 16px; }
      .lu-pos { font-size: 9px; color: var(--cl-text-2, #94a3b8); }
      .lu-bench-label {
        font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--cl-text-2, #94a3b8); margin: 8px 0 2px;
        display: flex; align-items: center; gap: 6px;
      }
      .lu-bench-label::after {
        content: ''; flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider, rgba(255,255,255,0.08)), transparent);
      }
      /* H2H */
      .h2h-list { padding: 4px 16px; }
      .h2h-row { display: flex; align-items: center; gap: 6px; padding: 8px 0; font-size: 12px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .h2h-date { font-size: 10px; color: var(--cl-text-2, #94a3b8); min-width: 46px; }
      .h2h-team { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .h2h-team.right { text-align: right; }
      .h2h-team.win { font-weight: 700; }
      .h2h-score { min-width: 46px; text-align: center; font-weight: 700; }
      .h2h-score.home-win { color: var(--cl-accent, #6366f1); }
      .h2h-score.away-win { color: #f43f5e; }
      .h2h-score.our-win { color: var(--cl-green); }
      .h2h-score.our-loss { color: var(--cl-live); }
      .h2h-score.draw { color: var(--cl-text-2, #94a3b8); }
      /* Shared */
      .empty { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 12px; padding: 24px 16px; margin: 0; }
    `];
  }
}

if (!customElements.get('soccer-live-match-center')) {
  customElements.define('soccer-live-match-center', SoccerLiveMatchCenterCard);
}
