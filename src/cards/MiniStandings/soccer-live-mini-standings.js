import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class SoccerLiveMiniStandingsCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 3; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  static getConfigElement() { return document.createElement("soccer-live-mini-standings-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_classifica_", max_rows: 5 }; }

  static get styles() {
    return [skinStyles, css`
      ha-card { padding: 12px; }
      .header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
      .league-logo { width: 24px; height: 24px; object-fit: contain; }
      .title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary-text-color); }
      table { width: 100%; border-collapse: collapse; font-size: 12px; }
      th { color: var(--secondary-text-color); font-weight: 600; padding: 2px 4px; text-align: center; }
      th.left { text-align: left; }
      td { padding: 5px 4px; text-align: center; color: var(--primary-text-color); border-top: 1px solid var(--divider-color, rgba(255,255,255,0.07)); }
      td.left { text-align: left; }
      .team-row { display: flex; align-items: center; gap: 6px; }
      .team-logo { width: 16px; height: 16px; object-fit: contain; }
      .team-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
      .highlight td { background: var(--primary-color, #03a9f4); color: #fff; border-radius: 4px; }
      .pos { width: 20px; font-weight: 700; color: var(--secondary-text-color); }
      .pts { font-weight: 700; }
      .empty { padding: 16px; text-align: center; color: var(--secondary-text-color); }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</div></ha-card>`;

    const standings = stateObj.attributes.standings || [];
    const maxRows = this._config.max_rows || 5;
    const myTeam = (this._config.highlight_team || '').toLowerCase();
    const leagueName = stateObj.attributes.league_name || '';
    const leagueLogo = stateObj.attributes.league_logo || '';
    const rows = standings.slice(0, maxRows);

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`
          <div class="header">
            ${leagueLogo ? html`<img class="league-logo" src="${leagueLogo}" alt="">` : ''}
            <span class="title">${leagueName || this._t('card.standings')}</span>
          </div>
        ` : ''}
        <table>
          <tr>
            <th class="left" style="width:20px">#</th>
            <th class="left">Team</th>
            <th>P</th>
            ${!this._config.hide_stats ? html`<th>W</th><th>D</th><th>L</th><th>GD</th>` : ''}
            <th class="pts">Pts</th>
          </tr>
          ${rows.map(row => {
            const isHighlight = myTeam && row.team_name && row.team_name.toLowerCase().includes(myTeam);
            return html`
              <tr class="${isHighlight ? 'highlight' : ''}">
                <td class="pos">${row.position || row.rank || ''}</td>
                <td class="left">
                  <div class="team-row">
                    ${row.team_logo ? html`<img class="team-logo" src="${row.team_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                    <span class="team-name">${row.team_name || ''}</span>
                  </div>
                </td>
                <td>${row.played ?? ''}</td>
                ${!this._config.hide_stats ? html`<td>${row.won ?? ''}</td><td>${row.drawn ?? ''}</td><td>${row.lost ?? ''}</td><td>${row.goal_difference ?? ''}</td>` : ''}
                <td class="pts">${row.points ?? ''}</td>
              </tr>
            `;
          })}
        </table>
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-mini-standings", SoccerLiveMiniStandingsCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-mini-standings", name: "Soccer Live Mini Standings", description: "Compact standings table" });
