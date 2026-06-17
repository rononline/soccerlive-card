import { LitElement, html, css } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';

class SoccerLiveTeamFormCard extends LitElement {
  static get properties() {
    return {
      hass:       {},
      _config:    {},
      _isLoading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._isLoading = true;
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
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
      }
    }
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _detectTeam(previousMatches) {
    // Count team name frequency across all previous matches — the one appearing most is ours
    const freq = {};
    (previousMatches || []).forEach(m => {
      [m.home_team, m.away_team].filter(Boolean).forEach(name => {
        freq[name] = (freq[name] || 0) + 1;
      });
    });
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    // Only trust detection when the top team appears in every match (tracked team always present)
    if (sorted.length && sorted[0][1] === previousMatches.length) return sorted[0][0];
    return '';
  }

  render() {
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const s = this.hass.states[entityId];
    let attrs = null;

    if (!s) {
      const c = OfflineCache.get(entityId);
      if (c?.data?.previous_matches) attrs = c.data;
      else return renderCardError('', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (s.state === 'unavailable') {
      const c = OfflineCache.get(entityId);
      if (c?.data?.previous_matches) attrs = c.data;
      else return renderCardError('', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else {
      attrs = s.attributes;
    }

    if (this._isLoading && !attrs) return renderLoading('Loading form...');

    const prev = attrs?.previous_matches || [];
    if (!prev.length) return renderInfoState('', this._t('ui.no_form_data'), this._t('ui.no_form_hint'), '');
    return this._renderCard(attrs);
  }

  _renderCard(attrs) {
    const prev      = attrs.previous_matches || [];
    const next      = (attrs.matches || [])[0];
    // upcoming_matches in the sensor starts at index 1 (next match is already in matches[0]).
    // Prepend matches[0] when it is a future or live match so nothing is skipped.
    const upcomingRaw = attrs.upcoming_matches || [];
    const upcoming = (next && (next.state === 'pre' || next.state === 'in'))
      ? [next, ...upcomingRaw]
      : upcomingRaw;
    // Team detection: prefer explicit config, then sensor attribute, then frequency analysis
    // of previous_matches (the team appearing in every match is the tracked one).
    const team    = this._config.team_name || attrs.team_name || this._detectTeam(prev) || '';
    const tracked = team.toLowerCase();
    // Determine if tracked team is home or away in the next match for correct logo/standing
    const trackedIsHome = tracked && next?.home_team?.toLowerCase().includes(tracked);
    const trackedIsAway = tracked && next?.away_team?.toLowerCase().includes(tracked);
    const logo = attrs.team_logo
      || (trackedIsHome ? next?.home_logo : trackedIsAway ? next?.away_logo : null)
      || next?.home_logo || '';
    const standingSummary = trackedIsHome
      ? (next?.home_standing_summary || '')
      : trackedIsAway
        ? (next?.away_standing_summary || '')
        : (next?.home_standing_summary || '');
    const hideHeader = this._config.hide_header === true;

    // Compute W/D/L per previous match (oldest → newest)
    const results = [...prev].reverse().map(m => {
      const isHome = tracked && m.home_team?.toLowerCase().includes(tracked);
      const hs = parseInt(m.home_score), as_ = parseInt(m.away_score);
      if (isNaN(hs) || isNaN(as_)) return null;
      if (hs === as_) return { r: 'D', m };
      return { r: ((isHome && hs > as_) || (!isHome && as_ > hs)) ? 'W' : 'L', m };
    }).filter(Boolean);

    const wins   = results.filter(r => r.r === 'W').length;
    const draws  = results.filter(r => r.r === 'D').length;
    const losses = results.filter(r => r.r === 'L').length;

    // Goals scored / conceded per match for the trend bars
    const goalData = [...prev].reverse().map(m => {
      const isHome = tracked && m.home_team?.toLowerCase().includes(tracked);
      const hs = parseInt(m.home_score), as_ = parseInt(m.away_score);
      if (isNaN(hs) || isNaN(as_)) return null;
      return { scored: isHome ? hs : as_, conceded: isHome ? as_ : hs };
    }).filter(Boolean);

    // ESPN form strings (last 5)
    const match0     = (attrs.matches || [])[0] || {};
    const homeForm   = match0.last_five_home || match0.home_form || '';
    const awayForm   = match0.last_five_away || match0.away_form || '';
    const homeRecord = match0.home_record_summary || match0.home_record || '';
    const awayRecord = match0.away_record_summary || match0.away_record || '';

    const maxGoals = Math.max(...goalData.map(g => Math.max(g.scored, g.conceded)), 1);

    return html`
      <ha-card>
        ${!hideHeader ? renderSoccerHeader({
          logo,
          title: team || 'Team Form',
          badge: standingSummary ? renderSoccerBadge(standingSummary, 'neutral') : null,
        }) : ''}

        <!-- Form dots -->
        <div class="section">
          <div class="section-label">${this._t('team.form_trend')} (${results.length})</div>
          <div class="form-dots">
            ${results.map(r => html`<span class="dot ${r.r.toLowerCase()}" title="${r.m.home_team} ${r.m.home_score}-${r.m.away_score} ${r.m.away_team}">${r.r}</span>`)}
          </div>
          <div class="wdl-row">
            <span class="wdl w">${wins}${this._t('col.wins')}</span>
            <span class="wdl d">${draws}${this._t('col.draws')}</span>
            <span class="wdl l">${losses}${this._t('col.losses')}</span>
          </div>
        </div>

        <!-- Goals trend bars -->
        ${goalData.length ? html`
          <div class="section">
            <div class="section-label">${this._t('form.goals_per_match')}</div>
            <div class="goal-bars">
              ${goalData.map(g => html`
                <div class="goal-col">
                  <div class="bar-wrap">
                    <div class="bar scored"  style="height:${Math.round((g.scored   / maxGoals) * 48)}px"></div>
                    <div class="bar conceded" style="height:${Math.round((g.conceded / maxGoals) * 48)}px"></div>
                  </div>
                  <div class="goal-nums">${g.scored}-${g.conceded}</div>
                </div>
              `)}
            </div>
            <div class="goal-legend">
              <span class="leg-dot scored"></span>${this._t('form.scored')}
              <span class="leg-dot conceded"></span>${this._t('form.conceded')}
            </div>
          </div>
        ` : ''}

        <!-- Home / Away form -->
        ${(homeForm || awayForm || homeRecord || awayRecord) ? html`
          <div class="section">
            <div class="home-away-grid">
              <div class="ha-col">
                <div class="ha-label">${this._t('form.home')}</div>
                ${homeRecord ? html`<div class="ha-record">${homeRecord}</div>` : ''}
                ${homeForm  ? html`<div class="ha-form">${this._renderFormPills(homeForm)}</div>` : ''}
              </div>
              <div class="ha-divider"></div>
              <div class="ha-col">
                <div class="ha-label">${this._t('form.away')}</div>
                ${awayRecord ? html`<div class="ha-record">${awayRecord}</div>` : ''}
                ${awayForm  ? html`<div class="ha-form">${this._renderFormPills(awayForm)}</div>` : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Previous matches list -->
        <div class="section">
          <div class="section-label">${this._t('team.previous_matches')}</div>
          ${prev.map(m => {
            const isHome = tracked && m.home_team?.toLowerCase().includes(tracked);
            const hs = parseInt(m.home_score), as_ = parseInt(m.away_score);
            const hw = !isNaN(hs) && !isNaN(as_) && hs > as_;
            const aw = !isNaN(hs) && !isNaN(as_) && as_ > hs;
            const scored = isHome ? hs : as_, conceded = isHome ? as_ : hs;
            const res = isNaN(hs) || isNaN(as_) ? null : (scored > conceded ? 'W' : scored < conceded ? 'L' : 'D');
            return html`
              <div class="pm-row">
                <span class="pm-date">${(m.date || '').split(' ')[0]}</span>
                <img class="pm-logo" src="${m.home_logo || ''}" alt="" @error=${e => e.target.style.display='none'}>
                <span class="pm-team ${isHome ? 'tracked' : ''}">${m.home_abbrev || m.home_team || '?'}</span>
                <span class="pm-score ${hw ? 'home-win' : aw ? 'away-win' : 'draw'}">${hs ?? '?'}-${as_ ?? '?'}</span>
                <span class="pm-team right ${!isHome ? 'tracked' : ''}">${m.away_abbrev || m.away_team || '?'}</span>
                <img class="pm-logo" src="${m.away_logo || ''}" alt="" @error=${e => e.target.style.display='none'}>
                ${res ? html`<span class="pm-res ${res.toLowerCase()}">${res}</span>` : ''}
              </div>
            `;
          })}
        </div>

        <!-- Upcoming -->
        ${upcoming.length ? html`
          <div class="section">
            <div class="section-label">${this._t('team.upcoming_matches')}</div>
            ${upcoming.map(m => html`
              <div class="pm-row">
                <span class="pm-date">${(m.date || '').split(' ')[0]}</span>
                <img class="pm-logo" src="${m.home_logo || ''}" alt="" @error=${e => e.target.style.display='none'}>
                <span class="pm-team">${m.home_abbrev || m.home_team || '?'}</span>
                <span class="pm-score draw">vs</span>
                <span class="pm-team right">${m.away_abbrev || m.away_team || '?'}</span>
                <img class="pm-logo" src="${m.away_logo || ''}" alt="" @error=${e => e.target.style.display='none'}>
              </div>
            `)}
          </div>
        ` : ''}
      </ha-card>
    `;
  }

  _renderFormPills(formStr) {
    const letters = String(formStr).replace(/[^WLDwld]/g, '').toUpperCase().split('');
    return html`${letters.map(l => html`<span class="form-pill ${l.toLowerCase()}">${l}</span>`)}`;
  }

  getCardSize() { return 5; }
  static getConfigElement() { return document.createElement('soccer-live-team-form-editor'); }
  static getStubConfig()    { return { entity: '' }; }

  static get styles() {
    return [skinStyles, soccerHeaderStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); border-radius: 16px; overflow: hidden; padding: 0; }
      .section { padding: 12px 16px 4px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .section:last-child { border-bottom: none; }
      .section-label { font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 8px; }
      /* Form dots */
      .form-dots { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 6px; }
      .dot { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 800; cursor: default; }
      .dot.w { background: #22c55e; color: #fff; }
      .dot.d { background: var(--cl-text-2, #64748b); color: #fff; }
      .dot.l { background: #ef4444; color: #fff; }
      .wdl-row { display: flex; gap: 12px; margin-bottom: 6px; font-size: 13px; font-weight: 700; }
      .wdl.w { color: #22c55e; }
      .wdl.d { color: var(--cl-text-2, #94a3b8); }
      .wdl.l { color: #ef4444; }
      /* Goals bars */
      .goal-bars { display: flex; align-items: flex-end; gap: 4px; height: 64px; margin-bottom: 4px; }
      .goal-col { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
      .bar-wrap { display: flex; align-items: flex-end; gap: 2px; height: 48px; }
      .bar { width: 8px; border-radius: 2px 2px 0 0; min-height: 3px; }
      .bar.scored   { background: #22c55e; }
      .bar.conceded { background: #ef4444; opacity: 0.7; }
      .goal-nums { font-size: 9px; color: var(--cl-text-2, #94a3b8); }
      .goal-legend { display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--cl-text-2, #94a3b8); margin-top: 4px; margin-bottom: 6px; }
      .leg-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
      .leg-dot.scored   { background: #22c55e; }
      .leg-dot.conceded { background: #ef4444; opacity: 0.7; }
      /* Home/Away */
      .home-away-grid { display: flex; align-items: flex-start; gap: 8px; padding-bottom: 8px; }
      .ha-col { flex: 1; }
      .ha-divider { width: 1px; background: var(--cl-divider, rgba(255,255,255,0.08)); align-self: stretch; }
      .ha-label { font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; margin-bottom: 4px; }
      .ha-record { font-size: 12px; font-weight: 700; margin-bottom: 4px; }
      .ha-form { display: flex; gap: 3px; flex-wrap: wrap; }
      .form-pill { width: 20px; height: 20px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; }
      .form-pill.w { background: #22c55e; color: #fff; }
      .form-pill.d { background: var(--cl-text-2, #64748b); color: #fff; }
      .form-pill.l { background: #ef4444; color: #fff; }
      /* Previous match rows */
      .pm-row { display: flex; align-items: center; gap: 5px; padding: 6px 0; font-size: 12px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04)); }
      .pm-date { font-size: 10px; color: var(--cl-text-2, #94a3b8); min-width: 42px; }
      .pm-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .pm-team { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .pm-team.right { text-align: right; }
      .pm-team.tracked { font-weight: 700; }
      .pm-score { min-width: 40px; text-align: center; font-weight: 700; font-size: 12px; }
      .pm-score.home-win { color: var(--cl-accent, #6366f1); }
      .pm-score.away-win { color: #f43f5e; }
      .pm-score.draw { color: var(--cl-text-2, #94a3b8); }
      .pm-res { min-width: 18px; height: 18px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 800; flex-shrink: 0; }
      .pm-res.w { background: #22c55e; color: #fff; }
      .pm-res.d { background: var(--cl-text-2, #64748b); color: #fff; }
      .pm-res.l { background: #ef4444; color: #fff; }
    `];
  }
}

if (!customElements.get('soccer-live-team-form')) {
  customElements.define('soccer-live-team-form', SoccerLiveTeamFormCard);
}
