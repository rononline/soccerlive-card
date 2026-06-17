import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError } from "../card-error.js";

class SoccerLiveTeamCompetitionsCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _selectedComp: { type: String } }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    this._selectedComp = config.default_comp || null;
    applySkin(this, config);
  }

  getCardSize() { return 4; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-team-competitions-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_mixed_" }; }

  _selectComp(key) {
    this._selectedComp = key;
    this.requestUpdate();
  }

  // Group matches by league_name
  _groupByCompetition(matches) {
    const groups = {};
    for (const m of matches) {
      const key = m.league_name || m.competition_name || 'Other';
      if (!groups[key]) {
        groups[key] = {
          key,
          name: key,
          logo: m.league_logo || m.competition_logo || '',
          matches: [],
        };
      }
      groups[key].matches.push(m);
    }

    // Per group: pick live > next > last finished
    return Object.values(groups).map(g => {
      const live = g.matches.find(m => m.state === 'in');
      const next = g.matches.find(m => m.state === 'pre');
      const last = [...g.matches].reverse().find(m => m.state === 'post');
      return { ...g, featured: live || next || last || g.matches[0] };
    }).filter(g => g.featured).sort((a, b) => {
      // Live first, then scheduled, then finished
      const aScore = a.featured.state === 'in' ? 0 : a.featured.state === 'pre' ? 1 : 2;
      const bScore = b.featured.state === 'in' ? 0 : b.featured.state === 'pre' ? 1 : 2;
      return aScore - bScore;
    });
  }

  static get styles() {
    return [skinStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 12px;
        overflow: hidden;
      }
      .card-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px 10px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-logo { width: 32px; height: 32px; object-fit: contain; }
      .team-name { font-size: 15px; font-weight: 700; color: var(--cl-text); }
      .comp-tabs {
        display: flex;
        gap: 2px;
        padding: 0 16px 8px;
        overflow-x: auto;
        border-bottom: 1px solid var(--cl-divider);
      }
      .comp-tab {
        font-size: 11px; font-weight: 700; padding: 6px 10px; border-radius: 99px;
        cursor: pointer; white-space: nowrap;
        border: 1px solid var(--cl-divider); background: var(--cl-surface);
        color: var(--cl-text-2);
      }
      .comp-tab.active {
        background: var(--cl-accent); border-color: var(--cl-accent); color: #fff;
      }
      .match-display {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        gap: 10px;
      }
      .comp-logo { width: 24px; height: 24px; object-fit: contain; flex-shrink: 0; }
      .match-block { display: flex; align-items: center; gap: 8px; flex: 1; }
      .team-block { display: flex; align-items: center; gap: 5px; flex: 1; min-width: 0; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .team-name { font-size: 11px; font-weight: 600; color: var(--cl-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .score-block { text-align: center; min-width: 50px; flex-shrink: 0; }
      .score { font-size: 15px; font-weight: 900; color: var(--cl-text); letter-spacing: 1px; }
      .state { font-size: 10px; color: var(--cl-text-2); }
      .live-dot { display: inline-block; width: 5px; height: 5px; background: var(--cl-live, #ef4444); border-radius: 50%; margin-right: 2px; animation: pulse 1s infinite; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return renderCardError('⚠️', 'Entity not found', `Unable to find: ${this._config.entity}`, 'Check the entity configuration');

    const matches = stateObj.attributes.matches || [];
    if (!matches.length) return renderCardError('⚽', 'No match data', 'Unable to find matches', 'Check if the team has scheduled matches');

    const groups = this._groupByCompetition(matches);
    const activeGroup = groups.find(g => g.key === this._selectedComp) || groups[0];
    const teamName = this._config.team_name || stateObj.attributes.team_name || '';
    const teamLogo = stateObj.attributes.team_logo || '';
    const m = activeGroup.featured;

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`
          <div class="card-header">
            ${teamLogo ? html`<img class="team-logo" src="${teamLogo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${teamName || 'Team'}</span>
          </div>
        ` : ''}

        ${groups.length > 1 ? html`
          <div class="comp-tabs">
            ${groups.map(g => html`
              <span
                class="comp-tab ${g.key === activeGroup.key ? 'active' : ''}"
                @click=${() => this._selectComp(g.key)}>
                ${g.name}
              </span>
            `)}
          </div>
        ` : ''}

        ${activeGroup && m ? html`
          <div class="match-display">
            ${activeGroup.logo ? html`<img class="comp-logo" src="${activeGroup.logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}

            <div class="match-block">
              <div class="team-block">
                ${m.home_logo ? html`<img class="team-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                <span class="team-name">${m.home_team || '?'}</span>
              </div>

              <div class="score-block">
                ${m.state === 'in' ? html`
                  <div class="state"><span class="live-dot"></span>${m.clock || 'LIVE'}</div>
                  <div class="score">${m.home_score ?? 0}-${m.away_score ?? 0}</div>
                ` : m.state === 'post' ? html`
                  <div class="state">FT</div>
                  <div class="score">${m.home_score ?? 0}-${m.away_score ?? 0}</div>
                ` : html`
                  <div class="state">${m.date || this._t('match.vs')}</div>
                `}
              </div>

              <div class="team-block right">
                <span class="team-name">${m.away_team || '?'}</span>
                ${m.away_logo ? html`<img class="team-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              </div>
            </div>
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-team-competitions")) {
  customElements.define("soccer-live-team-competitions", SoccerLiveTeamCompetitionsCard);
}
