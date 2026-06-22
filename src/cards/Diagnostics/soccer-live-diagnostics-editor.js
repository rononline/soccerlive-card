import { LitElement, html, css } from "lit";
import { SKIN_OPTIONS, resolveSkin } from "../../skins.js";
import { renderSkinColorControls } from "../skin-editor.js";
import { editorStyles } from "../editor-helper.js";

class SoccerLiveDiagnosticsEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
    };
  }

  constructor() {
    super();
    this.entities = [];
  }

  static get styles() {
    return [editorStyles, css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      select, input {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      .hint {
        padding: 10px 12px;
        border: 1px solid rgba(33,150,243,0.24);
        border-radius: 8px;
        background: rgba(33,150,243,0.10);
        color: var(--primary-text-color);
        font-size: 12px;
        line-height: 1.45;
      }
    `];
  }

  setConfig(config) { this._config = { ...config }; }
  updated(changed) { if (changed.has("hass")) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes("soccer_live") || id.includes("soccerlive"))
      .sort();
  }

  _fire(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
    this.requestUpdate();
  }

  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _textChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }

  _recommendedCards(sensorType) {
    const map = {
      team_match: "Team, Countdown, Match Center, Lineup, Timeline, Team Form",
      team_matches: "Matches, Ticker, Live Match, Team Form",
      team_matches_mixed: "Team Competitions, Season Overview, Matches, Ticker, Team Form",
      all_matches_today: "Matches, Ticker, Live Match",
      standings: "Standings, Mini Standings",
      top_scorers: "Top Scorers",
      bracket: "Bracket",
      news: "News",
      commentary: "Live Commentary, Timeline",
    };
    return map[sensorType] || "";
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || "";
    const inList = current && this.entities.includes(current);
    const sensorType = this.hass.states[current]?.attributes?.sensor_type || "";
    const recommended = this._recommendedCards(sensorType);
    return html`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || "- select -"}</option>` : ""}
            ${this.entities.map(entity => html`<option value="${entity}" ?selected=${entity === current}>${entity}</option>`)}
          </select>
        </div>
        ${sensorType ? html`
          <div class="hint">
            <strong>Sensor type:</strong> ${sensorType}
            ${recommended ? html`<br><strong>Recommended cards:</strong> ${recommended}` : ""}
          </div>
        ` : ""}
        <div>
          <label class="field-label">Title</label>
          <input type="text" .value=${this._config.title || ""} data-config-value="title" @input=${this._textChanged} placeholder="Soccer Live diagnostics">
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${SKIN_OPTIONS.map(([val, label]) => html`<option value="${val}" ?selected=${resolveSkin(this._config) === val}>${label}</option>`)}
          </select>
        </div>
        ${renderSkinColorControls(this, this._config)}
      </div>
    `;
  }
}

if (!customElements.get("soccer-live-diagnostics-editor")) {
  customElements.define("soccer-live-diagnostics-editor", SoccerLiveDiagnosticsEditor);
}
