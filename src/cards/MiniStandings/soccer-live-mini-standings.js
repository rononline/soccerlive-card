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
      .league-logo { width: 22px; height: 22px; object-fit: contain; }
      .title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--primary-text-color); }
      table { width: 100%; border-collapse: collapse; font-size: 12px; }
      th { color: var(--secondary-text-color); font-weight: 600; padding: 2px 4px; text-align: center; font-size: 11px; }
      th.left { text-align: left; }
      td { padding: 5px 4px; text-align: center; color: var(--primary-text-color); border-top: 1px solid var(--divider-color, rgba(255,255,255,0.07)); }
      td.left { text-align: left; }
      .team-row { display: flex; align-items: center; gap: 6px; }
      .team-logo { width: 16px; height: 16px; object-fit: contain; }
      .team-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
      .hl td { background: var(--primary-color, #03a9f4) !important; color: #fff !important; border-radius: 4px; }
      .pos { width: 22px; font-weight: 700; color: var(--secondary-text-color); }
      .pts { font-weight: 700; }
      .empty { padding: 16px; text-align: center; color: var(--secondary-text-color); font-size: 13px; }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">Unknown entity: ${this._config.entity}</div></ha-card>`;

    const groups = stateObj.attributes.standings_groups || [];
    const standings = groups.length > 0 ? (groups[0].standings || []) : [];
    const maxRows = this._config.max_rows || 5;
    const myTeam = (this._config.highlight_team || '').toLowerCase();
    const leagueName = stateObj.attributes.league_name || stateObj.attributes.league_abbreviation || '';
    const leagueLogo = stateObj.attributes.league_logo || '';
    const rows = standings.slice(0, maxRows);

    if (!rows.length) return html`<ha-card><div class="empty">No standings data</div></ha-card>`;

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`
          <div class="header">
            ${leagueLogo ? html`<img class="league-logo" src="${leagueLogo}" alt="">` : ''}
            <span class="title">${leagueName}</span>
          </div>
        ` : ''}
        <table>
          <tr>
            <th class="left" style="width:22px">#</th>
            <th class="left">Team</th>
            <th>P</th>
            ${!this._config.hide_stats ? html`<th>W</th><th>D</th><th>L</th><th>GD</th>` : ''}
            <th class="pts">Pts</th>
          </tr>
          ${rows.map(row => {
            const isHl = myTeam && row.team_name && row.team_name.toLowerCase().includes(myTeam);
            const played = (parseInt(row.wins)||0) + (parseInt(row.draws)||0) + (parseInt(row.losses)||0);
            const gd = parseInt(row.goal_difference) || 0;
            const gdLabel = gd > 0 ? `+${gd}` : `${gd}`;
            return html`
              <tr class="${isHl ? 'hl' : ''}">
                <td class="pos">${row.rank ?? ''}</td>
                <td class="left">
                  <div class="team-row">
                    ${row.team_logo ? html`<img class="team-logo" src="${row.team_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
                    <span class="team-name">${row.team_name || ''}</span>
                  </div>
                </td>
                <td>${played || ''}</td>
                ${!this._config.hide_stats ? html`<td>${row.wins ?? ''}</td><td>${row.draws ?? ''}</td><td>${row.losses ?? ''}</td><td>${row.goal_difference != null ? gdLabel : ''}</td>` : ''}
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
