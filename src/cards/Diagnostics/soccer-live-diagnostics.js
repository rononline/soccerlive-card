import { LitElement, html, css } from "lit-element";
import { parseMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError } from "../card-error.js";
import { soccerCardShellStyles } from "../card-shell.js";

class SoccerLiveDiagnosticsCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 2; }
  static getConfigElement() { return document.createElement("soccer-live-diagnostics-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_", card_type: "diagnostics" }; }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 20px;
        overflow: hidden;
      }
      .content { position: relative; z-index: 1; padding: 16px; }
      .header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
      .title { font-size: 15px; font-weight: 900; }
      .status {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 5px 10px; border-radius: 999px;
        font-size: 11px; font-weight: 800; text-transform: uppercase;
        border: 1px solid var(--cl-chip-border);
        background: var(--cl-chip-bg);
      }
      .status.ok { color: var(--cl-green); }
      .status.error { color: var(--cl-live); }
      .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
      .metric {
        min-width: 0; padding: 10px;
        border: 1px solid var(--cl-divider);
        border-radius: 10px;
        background: var(--cl-surface);
      }
      .label { color: var(--cl-text-2); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; }
      .value { margin-top: 4px; color: var(--cl-text); font-size: 13px; font-weight: 800; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .error-box {
        margin-top: 10px; padding: 10px;
        border: 1px solid rgba(239,68,68,0.35);
        border-radius: 10px;
        color: var(--cl-live);
        background: rgba(239,68,68,0.10);
        font-size: 12px;
      }
      .recommendations {
        margin-top: 10px;
        padding: 10px;
        border: 1px solid var(--cl-divider);
        border-radius: 10px;
        background: var(--cl-surface);
      }
      .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 7px;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        min-height: 22px;
        padding: 3px 8px;
        border: 1px solid var(--cl-chip-border);
        border-radius: 999px;
        background: var(--cl-chip-bg);
        color: var(--cl-text);
        font-size: 11px;
        font-weight: 800;
      }
      @media (max-width: 420px) {
        .grid { grid-template-columns: 1fr; }
      }
    `];
  }

  _format(value) {
    if (value === undefined || value === null || value === "") return "-";
    if (Array.isArray(value)) return String(value.length);
    return String(value);
  }

  _age(value) {
    const date = parseMatchDate(value);
    if (!date) return "-";
    const minutes = Math.max(0, Math.round((Date.now() - date.getTime()) / 60000));
    if (minutes < 1) return "now";
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.round(minutes / 60);
    if (hours < 48) return `${hours}h`;
    return `${Math.round(hours / 24)}d`;
  }

  _recommendedCards(sensorType) {
    const map = {
      team_match: ["Team", "Countdown", "Match Center", "Lineup", "Timeline", "Team Form"],
      team_matches: ["Matches", "Ticker", "Live Match", "Team Form"],
      team_matches_mixed: ["Team Competitions", "Season Overview", "Matches", "Ticker", "Team Form"],
      all_matches_today: ["Matches", "Ticker", "Live Match"],
      standings: ["Standings", "Mini Standings"],
      top_scorers: ["Top Scorers"],
      bracket: ["Bracket"],
      news: ["News"],
      commentary: ["Live Commentary", "Timeline"],
    };
    return map[sensorType] || [];
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return renderCardError("!", "Entity not found", this._config.entity, "Select a Soccer Live sensor");
    }

    const attrs = stateObj.attributes || {};
    const apiStatus = attrs.api_status || "unknown";
    const statusClass = apiStatus === "ok" ? "ok" : "error";
    const lastUpdate = attrs.last_successful_update || attrs.last_request_time;
    const sensorType = attrs.sensor_type || "unknown";
    const recommended = this._recommendedCards(sensorType);
    const metrics = [
      ["Sensor", sensorType],
      ["State", stateObj.state],
      ["Matches", attrs.schedule_match_count ?? attrs.total_matches],
      ["Live", attrs.schedule_live_count ?? attrs.live_matches_count],
      ["Upcoming", attrs.schedule_upcoming_count ?? attrs.upcoming_matches_count],
      ["Recent", attrs.schedule_recent_count ?? attrs.finished_matches_count],
      ["Requests", attrs.request_count],
      ["Last update", lastUpdate],
      ["Sensor age", this._age(lastUpdate)],
    ];

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="content">
          <div class="header">
            <div class="title">${this._config.title || "Soccer Live diagnostics"}</div>
            <div class="status ${statusClass}">${apiStatus}</div>
          </div>
          <div class="grid">
            ${metrics.map(([label, value]) => html`
              <div class="metric">
                <div class="label">${label}</div>
                <div class="value" title="${this._format(value)}">${this._format(value)}</div>
              </div>
            `)}
          </div>
          ${recommended.length ? html`
            <div class="recommendations">
              <div class="label">Recommended cards</div>
              <div class="chips">
                ${recommended.map(card => html`<span class="chip">${card}</span>`)}
              </div>
            </div>
          ` : ""}
          ${attrs.last_error ? html`<div class="error-box">${attrs.last_error}</div>` : ""}
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-diagnostics")) {
  customElements.define("soccer-live-diagnostics", SoccerLiveDiagnosticsCard);
}
