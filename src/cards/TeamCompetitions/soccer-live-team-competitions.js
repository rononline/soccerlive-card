import { LitElement, html, css } from "lit-element";
import { t, resolveLang, parseMatchTimestamp } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState } from "../card-error.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles, renderCardHero } from "../card-shell.js";

class SoccerLiveTeamCompetitionsCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _selectedComp: { type: String } }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    this._selectedComp = config.default_comp || null;
    applySkin(this, config);
  }

  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-team-competitions-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_mixed_" }; }

  _selectComp(key) { this._selectedComp = key; this.requestUpdate(); }

  _validText(value) {
    return value && value !== 'N/A' ? value : '';
  }

  _parseTs(dateStr) {
    return parseMatchTimestamp(dateStr);
  }

  _sortByDateAsc(a, b) {
    const ta = this._parseTs(a.date) || Infinity;
    const tb = this._parseTs(b.date) || Infinity;
    return ta - tb;
  }

  _groupByCompetition(matches) {
    const groups = {};
    for (const m of matches) {
      const key = this._validText(m.league_name) || this._validText(m.competition_name) || 'Other';
      if (!groups[key]) {
        groups[key] = {
          key,
          name: key,
          logo: this._validText(m.league_logo) || this._validText(m.competition_logo),
          all: [],
        };
      }
      const dup = groups[key].all.some(x => x.date === m.date && x.home_team === m.home_team);
      if (!dup) groups[key].all.push(m);
    }

    return Object.values(groups).map(g => {
      const live     = g.all.find(m => m.state === 'in');
      const nextM    = g.all.filter(m => m.state === 'pre').sort((a, b) => this._sortByDateAsc(a, b))[0];
      const finished = g.all.filter(m => m.state === 'post').sort((a, b) => this._sortByDateAsc(a, b));
      const last     = finished[finished.length - 1];
      const featured = live || nextM || last || g.all[0];
      const upcoming = g.all.filter(m => m.state === 'pre').sort((a, b) => this._sortByDateAsc(a, b));
      return { ...g, featured, previous: finished, upcoming };
    }).filter(g => g.featured).sort((a, b) => {
      const score = m => m.featured.state === 'in' ? 0 : m.featured.state === 'pre' ? 1 : 2;
      return score(a) - score(b);
    });
  }

  _computeForm(matches, teamName) {
    if (!teamName) return [];
    const tn = teamName.toLowerCase();
    return matches
      .filter(m => m.state === 'post')
      .sort((a, b) => this._sortByDateAsc(a, b))
      .slice(-5)
      .map(m => {
        const isHome = m.home_team?.toLowerCase().includes(tn) || m.home_team?.toLowerCase() === tn;
        const hs = parseInt(m.home_score) ?? 0;
        const as_ = parseInt(m.away_score) ?? 0;
        if (isHome) return hs > as_ ? 'W' : hs < as_ ? 'L' : 'D';
        return as_ > hs ? 'W' : as_ < hs ? 'L' : 'D';
      });
  }

  _getStanding(m, teamName) {
    if (!m || !teamName) return '';
    const tn = teamName.toLowerCase();
    const isHome = m.home_team?.toLowerCase().includes(tn);
    const standing = isHome ? m.home_standing_summary : m.away_standing_summary;
    return standing && standing !== 'N/A' ? standing : '';
  }

  _renderForm(form) {
    if (!form.length) return '';
    const cls = { W: 'form-w', D: 'form-d', L: 'form-l' };
    return html`<div class="form-row">${form.map(r => html`<span class="form-dot ${cls[r]}">${r}</span>`)}</div>`;
  }

  _renderMatch(m, label) {
    if (!m) return '';
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    return html`
      <div class="match-row">
        ${label ? html`<span class="match-label">${label}</span>` : ''}
        <div class="match-teams">
          <div class="team-side">
            ${m.home_logo ? html`<img class="tm-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="tm-name">${m.home_team || '?'}</span>
          </div>
          <div class="match-score">
            ${isLive ? html`<span class="live-badge"><span class="live-dot"></span>${m.clock || this._t('status.live')}</span>` : ''}
            ${isLive || isFt
              ? html`<span class="score-text">${m.home_score ?? 0}–${m.away_score ?? 0}</span>`
              : html`<span class="date-text">${m.date || this._t('match.vs')}</span>`}
            ${isFt ? html`<span class="ft-badge">${this._t('status.full_time')}</span>` : ''}
          </div>
          <div class="team-side right">
            <span class="tm-name">${m.away_team || '?'}</span>
            ${m.away_logo ? html`<img class="tm-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    applySkin(this, this._config);
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
      else return renderCardError('📡', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else {
      attrs = stateObj.attributes;
      OfflineCache.set(entityId, attrs);
    }

    const matches = attrs.matches || [];
    if (!matches.length) return renderInfoState('🗂️', this._t('ui.no_competition_data'), this._t('ui.no_competition_hint'), '');

    const groups     = this._groupByCompetition(matches);
    const active     = groups.find(g => g.key === this._selectedComp) || groups[0];
    const teamName   = this._config.team_name || attrs.team_name || '';
    const teamLogo   = attrs.team_logo && attrs.team_logo !== 'N/A' ? attrs.team_logo : null;

    const featured   = active.featured;
    const form       = this._computeForm(active.all, teamName);
    const standing   = this._getStanding(active.previous[active.previous.length - 1] || featured, teamName);
    const prevMatch  = active.previous[active.previous.length - 1];
    const nextMatch  = active.upcoming[0];

    return html`
      <ha-card>
        ${renderCardHero(featured.home_logo, featured.away_logo)}
        <div class="card-content">
        ${!this._config.hide_header ? renderSoccerHeader({
          logo: teamLogo,
          title: teamName || 'Team',
          badge: groups.length > 1 ? renderSoccerBadge(`${groups.length}`, 'neutral') : null,
          fallbackIcon: '🗂️',
        }) : ''}

        ${groups.length > 1 ? html`
          <div class="comp-tabs">
            ${groups.map(g => html`
              <span class="comp-tab ${g.key === active.key ? 'active' : ''}" @click=${() => this._selectComp(g.key)}>
                ${g.logo ? html`<img class="tab-logo" src="${g.logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                ${g.name}
              </span>
            `)}
          </div>
        ` : ''}

        <div class="comp-body">
          ${active.name !== 'Other' || active.logo || standing ? html`
            <div class="comp-header">
              ${active.logo ? html`<img class="comp-icon" src="${active.logo}" alt="">` : ''}
              ${active.name !== 'Other' ? html`<span class="comp-name">${active.name}</span>` : ''}
              ${standing ? html`<span class="standing-pill">${standing}</span>` : ''}
            </div>
          ` : ''}

          ${featured.state === 'in' || featured.state === 'post'
            ? this._renderMatch(featured, null)
            : this._renderMatch(featured, this._t('team.next_match'))}

          ${form.length ? this._renderForm(form) : ''}

          ${(featured.state === 'in' || featured.state === 'pre') && prevMatch ? html`
            <div class="divider"></div>
            ${this._renderMatch(prevMatch, this._t('status.finished'))}
          ` : ''}

          ${(featured.state === 'post' || featured.state === 'in') && nextMatch ? html`
            <div class="divider"></div>
            ${this._renderMatch(nextMatch, this._t('team.next_match'))}
          ` : ''}
        </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 0; border-radius: 20px; overflow: hidden; }

      .comp-tabs {
        display: flex; gap: 4px; padding: 8px 12px;
        overflow-x: auto; border-bottom: 1px solid var(--cl-divider);
        scrollbar-width: none;
      }
      .comp-tabs::-webkit-scrollbar { display: none; }
      .comp-tab {
        display: flex; align-items: center; gap: 5px;
        font-size: 11px; font-weight: 700; padding: 5px 10px; border-radius: 99px;
        cursor: pointer; white-space: nowrap; flex-shrink: 0;
        border: 1px solid var(--cl-divider); background: var(--cl-surface); color: var(--cl-text-2);
        transition: background 0.15s;
      }
      .comp-tab.active { background: var(--cl-accent); border-color: var(--cl-accent); color: #fff; }
      .tab-logo { width: 14px; height: 14px; object-fit: contain; }

      .comp-body { padding: 12px 16px; display: flex; flex-direction: column; gap: 10px; }

      .comp-header { display: flex; align-items: center; gap: 8px; }
      .comp-icon { width: 20px; height: 20px; object-fit: contain; }
      .comp-name { font-size: 12px; font-weight: 700; color: var(--cl-text-2); flex: 1; }
      .standing-pill {
        font-size: 10px; font-weight: 700; padding: 2px 8px;
        border-radius: 99px; background: var(--cl-surface); color: var(--cl-text-2);
      }

      .match-row { display: flex; flex-direction: column; gap: 4px; }
      .match-label { font-size: 10px; font-weight: 700; color: var(--cl-text-2); text-transform: uppercase; letter-spacing: 0.05em; }
      .match-teams { display: flex; align-items: center; gap: 8px; }
      .team-side { display: flex; align-items: center; gap: 5px; flex: 1; min-width: 0; }
      .team-side.right { flex-direction: row-reverse; }
      .tm-logo { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
      .tm-name { font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .match-score { display: flex; flex-direction: column; align-items: center; min-width: 64px; flex-shrink: 0; gap: 1px; }
      .score-text { font-size: 16px; font-weight: 900; color: var(--cl-text); letter-spacing: 1px; }
      .date-text { font-size: 11px; color: var(--cl-text-2); text-align: center; }
      .ft-badge { font-size: 9px; font-weight: 700; color: var(--cl-text-2); text-transform: uppercase; }
      .live-badge { font-size: 9px; font-weight: 700; color: var(--cl-live, #ef4444); display: flex; align-items: center; gap: 3px; }
      .live-dot { width: 5px; height: 5px; background: var(--cl-live, #ef4444); border-radius: 50%; animation: pulse 1s infinite; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

      .form-row { display: flex; gap: 4px; justify-content: center; }
      .form-dot { width: 22px; height: 22px; border-radius: 50%; font-size: 10px; font-weight: 800; display: flex; align-items: center; justify-content: center; }
      .form-w { background: var(--cl-win, #22c55e); color: #fff; }
      .form-d { background: var(--cl-draw, #94a3b8); color: #fff; }
      .form-l { background: var(--cl-loss, #ef4444); color: #fff; }

      .divider { height: 1px; background: var(--cl-divider); margin: 0 -4px; }
    `];
  }
}

if (!customElements.get("soccer-live-team-competitions")) {
  customElements.define("soccer-live-team-competitions", SoccerLiveTeamCompetitionsCard);
}
