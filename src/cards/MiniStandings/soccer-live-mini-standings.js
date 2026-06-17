import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError } from "../card-error.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';

class SoccerLiveMiniStandingsCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _selectedGroup: { type: String } }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    this._selectedGroup = config.default_group || null;
    applySkin(this, config);
  }

  getCardSize() { return 3; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-mini-standings-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_standings_", max_rows: 5 }; }

  _selectGroup(name) {
    this._selectedGroup = name;
    this.requestUpdate();
  }

  static get styles() {
    return [skinStyles, soccerHeaderStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 12px;
        border-radius: 12px;
      }
      .header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
      .league-logo { width: 22px; height: 22px; object-fit: contain; }
      .title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--cl-text); flex: 1; }
      .groups { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
      .group-btn {
        font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 99px; cursor: pointer;
        border: 1px solid var(--cl-divider); background: var(--cl-surface);
        color: var(--cl-text-2); white-space: nowrap;
      }
      .group-btn.active {
        background: var(--cl-accent); border-color: var(--cl-accent); color: #fff;
      }
      table { width: 100%; border-collapse: collapse; font-size: 12px; }
      th { color: var(--cl-text-2); font-weight: 600; padding: 2px 4px; text-align: center; font-size: 11px; }
      th.left { text-align: left; }
      td { padding: 5px 4px; text-align: center; color: var(--cl-text); border-top: 1px solid var(--cl-divider); }
      td.left { text-align: left; }
      .team-row { display: flex; align-items: center; gap: 6px; }
      .team-logo { width: 16px; height: 16px; object-fit: contain; }
      .team-name { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 110px; }
      .hl td { background: rgba(var(--cl-accent-rgb), 0.2) !important; }
      .pos { width: 22px; font-weight: 700; color: var(--cl-text-2); }
      .pts { font-weight: 700; color: var(--cl-accent); }
      .empty { padding: 16px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return renderCardError('⚠️', 'Entity not found', `Unable to find: ${this._config.entity}`, 'Check the entity configuration');

    const groups = stateObj.attributes.standings_groups || [];
    if (!groups.length) return renderCardError('⚽', 'No standings data', 'Unable to fetch league standings', 'Check if the league has started');

    // Find active group
    const activeGroup = groups.find(g => g.name === this._selectedGroup) || groups[0];
    let standings = activeGroup ? (activeGroup.standings || []) : [];

    // Sort by points (desc), then wins (desc), then goal difference (desc)
    standings = standings.sort((a, b) => {
      const ptsA = parseInt(a.pts || a.points || 0);
      const ptsB = parseInt(b.pts || b.points || 0);
      if (ptsA !== ptsB) return ptsB - ptsA;

      const wA = parseInt(a.W || a.wins || 0);
      const wB = parseInt(b.W || b.wins || 0);
      if (wA !== wB) return wB - wA;

      const gdA = parseInt(a.GD || a.goal_difference || 0);
      const gdB = parseInt(b.GD || b.goal_difference || 0);
      return gdB - gdA;
    });

    const maxRows = this._config.max_rows || standings.length;
    const myTeam = (this._config.highlight_team || '').toLowerCase();
    const leagueName = stateObj.attributes.league_name || stateObj.attributes.league_abbreviation || '';
    const leagueLogo = stateObj.attributes.league_logo || '';
    const rows = standings.slice(0, maxRows);
    const multiGroup = groups.length > 1;

    return html`
      <ha-card>
        ${!this._config.hide_header ? html`
          ${renderSoccerHeader({
            logo: leagueLogo || null,
            title: (activeGroup && multiGroup) ? activeGroup.name : leagueName,
          })}
        ` : ''}

        ${multiGroup ? html`
          <div class="groups">
            ${groups.map(g => html`
              <span
                class="group-btn ${g.name === activeGroup.name ? 'active' : ''}"
                @click=${() => this._selectGroup(g.name)}>
                ${g.name}
              </span>
            `)}
          </div>
        ` : ''}

        <table>
          <tr>
            <th class="left" style="width:22px">#</th>
            <th class="left">Team</th>
            <th>P</th>
            ${!this._config.hide_stats ? html`<th>W</th><th>D</th><th>L</th><th>GD</th>` : ''}
            <th>Pts</th>
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
                <td>${played || 0}</td>
                ${!this._config.hide_stats ? html`<td>${row.wins ?? 0}</td><td>${row.draws ?? 0}</td><td>${row.losses ?? 0}</td><td>${row.goal_difference != null ? gdLabel : 0}</td>` : ''}
                <td class="pts">${row.points ?? 0}</td>
              </tr>
            `;
          })}
        </table>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-mini-standings")) {
  customElements.define("soccer-live-mini-standings", SoccerLiveMiniStandingsCard);
}
