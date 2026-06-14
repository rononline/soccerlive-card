import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class SoccerLiveTeamCompetitionsCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 4; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-team-competitions-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_all_mixed_" }; }

  // Group matches by competition, pick next/live match per competition
  _groupByCompetition(matches) {
    const groups = {};
    for (const m of matches) {
      const key = m.competition_code || m.league_name || 'unknown';
      if (!groups[key]) {
        groups[key] = {
          name: m.league_name || m.competition_name || key,
          logo: m.league_logo || m.competition_logo || '',
          code: key,
          matches: [],
        };
      }
      groups[key].matches.push(m);
    }

    // Per group: pick live > next scheduled > last finished
    return Object.values(groups).map(g => {
      const live = g.matches.find(m => m.state === 'in');
      const next = g.matches.find(m => m.state === 'pre');
      const last = [...g.matches].reverse().find(m => m.state === 'post');
      return { ...g, featured: live || next || last || g.matches[0] };
    }).filter(g => g.featured);
  }

  _stateLabel(match) {
    if (!match) return '';
    if (match.state === 'in') return 'LIVE';
    if (match.state === 'post') return 'FT';
    return match.date || '';
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
      .comp-row {
        display: flex;
        align-items: center;
        padding: 10px 16px;
        border-bottom: 1px solid var(--cl-divider);
        gap: 10px;
        cursor: default;
      }
      .comp-row:last-child { border-bottom: none; }
      .comp-logo { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .comp-logo-placeholder { width: 22px; height: 22px; flex-shrink: 0; }
      .comp-name { font-size: 12px; font-weight: 600; color: var(--cl-text-2); flex: 1; text-transform: uppercase; letter-spacing: 0.04em; }
      .match-info { display: flex; align-items: center; gap: 8px; }
      .team-block { display: flex; align-items: center; gap: 5px; max-width: 100px; }
      .team-block.right { flex-direction: row-reverse; }
      .match-team-logo { width: 18px; height: 18px; object-fit: contain; flex-shrink: 0; }
      .match-team-name { font-size: 11px; font-weight: 600; color: var(--cl-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 80px; }
      .score-block { text-align: center; min-width: 52px; }
      .score { font-size: 14px; font-weight: 900; color: var(--cl-text); letter-spacing: 1px; }
      .live-badge { display: inline-block; background: var(--cl-live, #ef4444); color: #fff; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 99px; }
      .state-label { font-size: 10px; color: var(--cl-text-2); }
      .live-dot { display: inline-block; width: 5px; height: 5px; background: var(--cl-live, #ef4444); border-radius: 50%; margin-right: 2px; animation: pulse 1s infinite; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
      .no-match { font-size: 11px; color: var(--cl-text-2); }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">Unknown entity: ${this._config.entity}</div></ha-card>`;

    const matches = stateObj.attributes.matches || [];
    if (!matches.length) return html`<ha-card><div class="empty">No match data</div></ha-card>`;

    const groups = this._groupByCompetition(matches);
    const teamName = this._config.team_name || stateObj.attributes.team_name || '';
    const teamLogo = stateObj.attributes.team_logo || '';
    const maxComps = this._config.max_competitions || 10;

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`
          <div class="card-header">
            ${teamLogo ? html`<img class="team-logo" src="${teamLogo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${teamName || 'Team'}</span>
          </div>
        ` : ''}

        ${groups.slice(0, maxComps).map(g => {
          const m = g.featured;
          const isLive = m && m.state === 'in';
          const isFinished = m && m.state === 'post';
          const showScore = isLive || isFinished;

          return html`
            <div class="comp-row">
              ${g.logo
                ? html`<img class="comp-logo" src="${g.logo}" alt="" @error=${e => e.target.style.display='none'}>`
                : html`<div class="comp-logo-placeholder"></div>`}
              <span class="comp-name">${g.name}</span>

              ${m ? html`
                <div class="match-info">
                  <div class="team-block">
                    ${m.home_logo ? html`<img class="match-team-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                    <span class="match-team-name">${m.home_team || '?'}</span>
                  </div>

                  <div class="score-block">
                    ${isLive ? html`
                      <div><span class="live-dot"></span><span class="state-label">${m.clock || 'LIVE'}</span></div>
                      <div class="score">${m.home_score ?? 0} - ${m.away_score ?? 0}</div>
                    ` : showScore ? html`
                      <div class="state-label">FT</div>
                      <div class="score">${m.home_score ?? 0} - ${m.away_score ?? 0}</div>
                    ` : html`
                      <div class="state-label">${m.date || 'vs'}</div>
                    `}
                  </div>

                  <div class="team-block right">
                    <span class="match-team-name">${m.away_team || '?'}</span>
                    ${m.away_logo ? html`<img class="match-team-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                  </div>
                </div>
              ` : html`<span class="no-match">No matches</span>`}
            </div>
          `;
        })}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-team-competitions", SoccerLiveTeamCompetitionsCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "soccer-live-team-competitions",
  name: "Soccer Live Team Competitions",
  description: "Shows all competitions for one team in a single card"
});
