import { LitElement, html, css } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { translateStatKey } from '../shared-stat-labels.js';

const TABS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'stats',     label: 'Stats' },
  { id: 'timeline',  label: 'Timeline' },
  { id: 'lineup',    label: 'Lineup' },
  { id: 'h2h',       label: 'H2H' },
];

class SoccerLiveMatchCenterCard extends LitElement {
  static get properties() {
    return {
      hass:        {},
      _config:     {},
      _activeTab:  { type: String },
      _isLoading:  { type: Boolean },
    };
  }

  constructor() {
    super();
    this._activeTab = 'overview';
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

  render() {
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const s = this.hass.states[entityId];
    let attrs = null;

    if (!s) {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', 'Entity not found', entityId, 'Check entity configuration');
    } else if (s.state === 'unavailable') {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', 'Sensor unavailable', 'Integration may not be running', 'Restart Home Assistant');
    } else {
      attrs = s.attributes;
    }

    if (this._isLoading && !attrs) return renderLoading('Loading match...');
    const match = (attrs?.matches || [])[0];
    if (!match) return renderInfoState('', 'No match data', 'No match available for this entity', '');
    return this._renderCard(match);
  }

  _renderCard(match) {
    const hasStats    = match.home_statistics && Object.keys(match.home_statistics).length > 0;
    const hasTimeline = (match.key_events || []).length > 0;
    const hasLineup   = (match.lineup_home || []).length > 0 || (match.lineup_away || []).length > 0;
    const hasH2H      = (match.head_to_head || []).length > 0;

    const visibleTabs = TABS.filter(tab => {
      if (tab.id === 'stats')    return hasStats;
      if (tab.id === 'timeline') return hasTimeline;
      if (tab.id === 'lineup')   return hasLineup;
      if (tab.id === 'h2h')      return hasH2H;
      return true;
    });

    // Reset active tab if it's no longer visible
    if (!visibleTabs.find(t => t.id === this._activeTab)) {
      this._activeTab = 'overview';
    }

    return html`
      <ha-card>
        ${this._config.hide_header !== true ? this._renderHero(match) : ''}
        <div class="tab-bar">
          ${visibleTabs.map(tab => html`
            <button class="tab ${this._activeTab === tab.id ? 'active' : ''}"
              @click=${() => { this._activeTab = tab.id; }}>
              ${tab.label}
            </button>
          `)}
        </div>
        <div class="tab-content">
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
      ? renderSoccerBadge(`${match.clock ? match.clock + "' " : ''}LIVE`, 'live')
      : isFinished
        ? renderSoccerBadge('FT', 'ft')
        : renderSoccerBadge(match.date || '', 'date');

    return html`
      ${renderSoccerHeader({ logo: match.competition_logo, title: match.competition_name, badge })}

      <div class="scoreboard">
        <div class="mc-team">
          ${match.home_logo ? html`<img class="mc-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="mc-name">${match.home_team || '?'}</span>
        </div>
        <div class="mc-score">
          ${isLive || isFinished
            ? html`<span class="mc-num">${match.home_score ?? 0} – ${match.away_score ?? 0}</span>`
            : html`<span class="mc-vs">vs</span>`}
        </div>
        <div class="mc-team away">
          <span class="mc-name">${match.away_team || '?'}</span>
          ${match.away_logo ? html`<img class="mc-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
        </div>
      </div>
    `;
  }

  _renderOverview(match) {
    const homeRec = match.home_record_summary || match.home_record || '';
    const awayRec = match.away_record_summary || match.away_record || '';
    const homeStd = match.home_standing_summary || '';
    const awayStd = match.away_standing_summary || '';

    return html`
      <div class="ov-section">
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
        ${match.week_label ? html`<div class="ov-meta">📅 ${match.week_label}</div>` : ''}
      </div>
      ${renderMatchMeta(match, {
        lang: resolveLang(this.hass, this._config),
        t: k => this._t(k),
        hideBroadcasts: this._config.hide_broadcasts === true,
      })}
    `;
  }

  _renderStats(match) {
    let stats = [];
    if (match.home_statistics && typeof match.home_statistics === 'object') {
      const homeS = match.home_statistics;
      const awayS = match.away_statistics || {};
      stats = Object.entries(homeS)
        .filter(([k]) => k !== 'Unknown')
        .map(([k, hv]) => ({ label: translateStatKey(k, k2 => this._t(k2)), home: hv, away: awayS[k] ?? 'N/A' }));
    }
    if (!stats.length) return html`<p class="empty">No stats available yet</p>`;
    return html`
      <div class="stats-list">
        ${stats.map(s => {
          const rawH = String(s.home ?? '');
          const rawA = String(s.away ?? '');
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
    const events = match.key_events || [];
    if (!events.length) return html`<p class="empty">No events yet</p>`;
    const icon = type => {
      const s = (type || '').toLowerCase();
      if (s.includes('goal'))   return '⚽';
      if (s.includes('yellow')) return '🟨';
      if (s.includes('red'))    return '🟥';
      if (s.includes('sub'))    return '🔄';
      return '📋';
    };
    return html`
      <div class="tl-list">
        ${events.map(ev => html`
          <div class="tl-row">
            <span class="tl-min">${ev.clock || ev.minute ? `${ev.clock || ev.minute}'` : ''}</span>
            <span class="tl-icon">${icon(ev.type)}</span>
            <div class="tl-text">
              <div>${ev.player_name || ev.player || ev.text || ''}</div>
              ${ev.team ? html`<div class="tl-team">${ev.team}</div>` : ''}
            </div>
          </div>
        `)}
      </div>
    `;
  }

  _renderLineup(match) {
    const home = match.lineup_home || [];
    const away = match.lineup_away || [];
    if (!home.length && !away.length) return html`<p class="empty">No lineup available yet</p>`;
    return html`
      <div class="lu-wrap">
        ${(match.formation_home || match.formation_away) ? html`
          <div class="lu-formation">
            <span>${match.formation_home || '—'}</span>
            <span class="lu-form-label">Formation</span>
            <span>${match.formation_away || '—'}</span>
          </div>
        ` : ''}
        <div class="lu-cols">
          <div class="lu-col">
            <div class="lu-header">${match.home_team || 'Home'}</div>
            ${home.map(p => html`
              <div class="lu-player">
                <span class="lu-shirt">${p.jersey || p.number || ''}</span>
                <span class="lu-name">${p.name || p.display_name || ''}</span>
                ${p.position ? html`<span class="lu-pos">${p.position}</span>` : ''}
              </div>
            `)}
          </div>
          <div class="lu-col right">
            <div class="lu-header">${match.away_team || 'Away'}</div>
            ${away.map(p => html`
              <div class="lu-player">
                ${p.position ? html`<span class="lu-pos">${p.position}</span>` : ''}
                <span class="lu-name">${p.name || p.display_name || ''}</span>
                <span class="lu-shirt">${p.jersey || p.number || ''}</span>
              </div>
            `)}
          </div>
        </div>
      </div>
    `;
  }

  _renderH2H(match) {
    const h2h = match.head_to_head || [];
    if (!h2h.length) return html`<p class="empty">No H2H data available</p>`;
    return html`
      <div class="h2h-list">
        ${h2h.map(m => {
          const hs  = parseInt(m.home_score ?? m.home_goals);
          const as_ = parseInt(m.away_score ?? m.away_goals);
          const hw  = !isNaN(hs) && !isNaN(as_) && hs > as_;
          const aw  = !isNaN(hs) && !isNaN(as_) && as_ > hs;
          return html`
            <div class="h2h-row">
              <span class="h2h-date">${(m.date || '').split(' ')[0]}</span>
              <span class="h2h-team ${hw ? 'win' : ''}">${m.home_team || m.home_abbrev || '?'}</span>
              <span class="h2h-score ${hw ? 'home-win' : aw ? 'away-win' : 'draw'}">${hs ?? '?'}–${as_ ?? '?'}</span>
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
    return [skinStyles, soccerHeaderStyles, matchMetaStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); border-radius: 16px; overflow: hidden; padding: 0; }
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
      .ov-meta { font-size: 12px; color: var(--cl-text-2, #94a3b8); padding: 7px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.05)); }
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
      .tl-list { padding: 4px 16px; }
      .tl-row { display: flex; align-items: flex-start; gap: 10px; padding: 8px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .tl-min { min-width: 30px; font-size: 11px; font-weight: 700; color: var(--cl-text-2, #94a3b8); padding-top: 1px; }
      .tl-icon { font-size: 15px; }
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
      .lu-shirt { font-size: 10px; font-weight: 800; color: var(--cl-accent, #6366f1); min-width: 16px; }
      .lu-pos { font-size: 9px; color: var(--cl-text-2, #94a3b8); }
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
      .h2h-score.draw { color: var(--cl-text-2, #94a3b8); }
      /* Shared */
      .empty { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 12px; padding: 24px 16px; margin: 0; }
    `];
  }
}

if (!customElements.get('soccer-live-match-center')) {
  customElements.define('soccer-live-match-center', SoccerLiveMatchCenterCard);
}
