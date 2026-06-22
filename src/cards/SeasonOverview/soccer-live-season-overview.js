import { LitElement, html, css } from "lit-element";
import { t, resolveLang, formatMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { OfflineCache } from '../offline-cache.js';
import { renderCardError } from "../card-error.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';

class SoccerLiveSeasonOverviewCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 2; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-season-overview-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_mixed_feyenoord_rotterdam", card_type: "season-overview" }; }

  _formatTime(dateStr) {
    return formatMatchDate(dateStr, resolveLang(this.hass, this._config));
  }

  _featuredMatch(matches) {
    const live = matches.find(m => m.state === 'in');
    if (live) return { m: live, type: 'live' };
    const stateOrder = m => m.state === 'pre' ? 0 : m.state === 'post' ? 1 : 2;
    const sorted = [...matches].sort((a, b) => {
      if (stateOrder(a) !== stateOrder(b)) return stateOrder(a) - stateOrder(b);
      // upcoming: earliest first; past: most recent first
      if (a.state === 'post' && b.state === 'post') {
        return (b._ts || 0) - (a._ts || 0);
      }
      return (a._ts || 0) - (b._ts || 0);
    });
    const next = sorted[0];
    if (!next) return null;
    return { m: next, type: next.state };
  }

  _parseTs(dateStr) {
    if (!dateStr) return 0;
    const m = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2})$/);
    if (!m) return 0;
    return new Date(+m[3], +m[2] - 1, +m[1], +m[4], +m[5]).getTime();
  }

  _renderCompRow(comp) {
    const { name, logo, featured } = comp;
    if (!featured) return '';
    const { m, type } = featured;
    const isLive = type === 'live';
    const isPre  = type === 'pre';
    const isFt   = type === 'post';

    return html`
      <div class="comp-row ${isLive ? 'live' : ''}">
        <div class="comp-info">
          ${logo ? html`<img class="comp-logo" src="${logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="comp-name">${name}</span>
        </div>
        <div class="comp-match">
          <div class="cm-teams">
            <div class="cm-team">
              ${m.home_logo ? html`<img class="cm-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="cm-name">${m.home_team || '?'}</span>
            </div>
            <div class="cm-sep">
              ${isLive ? html`
                <span class="cm-score live-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>
                <span class="cm-clock"><span class="live-dot"></span>${m.clock || ''}</span>
              ` : isFt ? html`
                <span class="cm-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>
                <span class="cm-ft">FT</span>
              ` : html`
                <span class="cm-time">${this._formatTime(m.date)}</span>
              `}
            </div>
            <div class="cm-team">
              ${m.away_logo ? html`<img class="cm-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="cm-name">${m.away_team || '?'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    let attrs = null;
    if (!stateObj) {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.matches) attrs = cached.data;
      else return renderCardError('⚠️', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.matches) attrs = cached.data;
      else return renderCardError('📡', this._t('ui.sensor_unavailable'), '', this._t('ui.restart_ha'));
    } else {
      attrs = stateObj.attributes;
      OfflineCache.set(entityId, attrs);
    }

    const rawMatches = (attrs.matches || []).map(m => ({ ...m, _ts: this._parseTs(m.date) }));
    if (!rawMatches.length) return html`<ha-card><div class="empty">${this._t('ui.no_match_data')}</div></ha-card>`;

    // Group by competition
    const byComp = new Map();
    rawMatches.forEach(m => {
      const key = m.league_name && m.league_name !== 'N/A' ? m.league_name : 'Other';
      if (!byComp.has(key)) byComp.set(key, { name: key, logo: m.league_logo || m.competition_logo || null, matches: [] });
      byComp.get(key).matches.push(m);
    });

    const comps = [...byComp.values()].map(c => ({ ...c, featured: this._featuredMatch(c.matches) }));

    // Sort: live first, then upcoming, then finished
    comps.sort((a, b) => {
      const rank = c => !c.featured ? 3 : c.featured.type === 'live' ? 0 : c.featured.type === 'pre' ? 1 : 2;
      if (rank(a) !== rank(b)) return rank(a) - rank(b);
      if (a.featured?.type === 'pre' && b.featured?.type === 'pre') return (a.featured.m._ts || 0) - (b.featured.m._ts || 0);
      return 0;
    });

    const liveCount = rawMatches.filter(m => m.state === 'in').length;
    const teamName = this._config.team_name || (attrs.team_name !== 'N/A' ? attrs.team_name : '') || '';
    const headerTitle = teamName || 'Season Overview';
    const rawLogo = attrs.team_logo;
    const teamLogo = rawLogo && rawLogo !== 'N/A' ? rawLogo : null;

    return html`
      <ha-card>
        ${!this._config.hide_header ? renderSoccerHeader({
          logo: teamLogo,
          title: headerTitle,
          badge: renderSoccerBadge(
            liveCount > 0 ? `${liveCount} live` : `${comps.length} comps`,
            liveCount > 0 ? 'live' : 'neutral'
          ),
        }) : ''}
        <div class="overview-list">
          ${comps.map(c => this._renderCompRow(c))}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, soccerHeaderStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 16px;
        overflow: hidden;
      }
      .overview-list { padding: 4px 0 8px; }
      .comp-row {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 8px 14px;
        border-bottom: 1px solid var(--cl-divider);
        transition: background 0.15s;
      }
      .comp-row:last-child { border-bottom: none; }
      .comp-row.live { background: rgba(239,68,68,0.05); }
      .comp-info {
        display: flex; align-items: center; gap: 8px; min-width: 0;
      }
      .comp-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .comp-name {
        font-size: 12px; font-weight: 700;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        color: var(--cl-text-2);
      }
      .comp-row.live .comp-name { color: var(--cl-text); }

      .comp-match { flex-shrink: 0; }
      .cm-teams {
        display: flex; align-items: center; gap: 6px;
      }
      .cm-team {
        display: flex; align-items: center; gap: 4px;
        max-width: 90px; min-width: 0;
      }
      .cm-team:last-child { flex-direction: row-reverse; }
      .cm-logo { width: 14px; height: 14px; object-fit: contain; flex-shrink: 0; }
      .cm-name {
        font-size: 11px; font-weight: 700;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        min-width: 0;
      }
      .cm-team:last-child .cm-name { text-align: right; }
      .cm-sep {
        display: flex; flex-direction: column; align-items: center; gap: 1px;
        flex-shrink: 0; min-width: 52px;
      }
      .cm-score {
        font-size: 14px; font-weight: 900; letter-spacing: 0.5px;
        color: var(--cl-text);
      }
      .cm-score.live-score { color: var(--cl-live, #ef4444); }
      .cm-clock {
        font-size: 9px; font-weight: 700; color: var(--cl-live, #ef4444);
        display: flex; align-items: center; gap: 2px;
      }
      .live-dot {
        width: 4px; height: 4px; border-radius: 50%;
        background: var(--cl-live, #ef4444);
        animation: pulse 1s infinite;
      }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .cm-ft {
        font-size: 8px; font-weight: 700; color: var(--cl-text-2);
        text-transform: uppercase; letter-spacing: 0.5px;
      }
      .cm-time { font-size: 11px; font-weight: 700; color: var(--cl-accent, #60a5fa); }
      .empty {
        padding: 14px 16px; color: var(--cl-text-2);
        font-size: 13px; text-align: center;
      }
    `];
  }
}

if (!customElements.get("soccer-live-season-overview")) {
  customElements.define("soccer-live-season-overview", SoccerLiveSeasonOverviewCard);
}
