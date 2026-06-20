import { LitElement, html, css } from "lit";
import { SKIN_OPTIONS } from '../../skins.js';
import { renderSkinColorControls } from '../skin-editor.js';
import { editorStyles } from '../editor-helper.js';

class SoccerLiveSeasonOverviewEditor extends LitElement {
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
      select, input:not([type=checkbox]) {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      .toggle-row {
        display: flex; align-items: center; gap: 10px;
        font-size: 14px; cursor: pointer;
      }
      .toggle-row input[type=checkbox] { width: 16px; height: 16px; cursor: pointer; flex-shrink: 0; }
      label { font-size: 14px; color: var(--primary-text-color); display: block; margin-bottom: 4px; }
    `];
  }

  setConfig(config) { this._config = { ...config }; }

  updated(changed) {
    if (changed.has("hass")) this._fetchEntities();
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => (id.includes("soccer_live") || id.includes("soccerlive")) && id.includes("mixed"))
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

  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }

  render() {
    if (!this._config) return html``;
    return html`
      <div class="card-config">
        <label>Entity (all_mixed sensor)</label>
        <select @change=${e => this._fire({ ...this._config, entity: e.target.value })}>
          <option value="">— Select entity —</option>
          ${this.entities.map(e => html`
            <option value="${e}" ?selected=${this._config.entity === e}>${e}</option>
          `)}
        </select>

        <label>Team naam (optioneel — override header)</label>
        <input type="text" placeholder="bijv. Feyenoord"
          .value=${this._config.team_name || ''}
          @change=${e => this._fire({ ...this._config, team_name: e.target.value })}>

        <label class="toggle-row">
          <input type="checkbox" ?checked=${!!this._config.hide_header}
            @change=${e => this._fire({ ...this._config, hide_header: e.target.checked })}>
          Header verbergen
        </label>

        <label>Skin</label>
        <select data-config-value="skin" @change=${this._selectChanged}>
          ${SKIN_OPTIONS.map(([v, l]) => html`
            <option value="${v}" ?selected=${this._config.skin === v}>${l}</option>
          `)}
        </select>

        ${renderSkinColorControls(this._config, (k, v) => this._fire({ ...this._config, [k]: v }))}
      </div>
    `;
  }
}

if (!customElements.get("soccer-live-season-overview-editor")) {
  customElements.define("soccer-live-season-overview-editor", SoccerLiveSeasonOverviewEditor);
}
