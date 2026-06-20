import { LitElement, html, css } from "lit";
import { SKIN_OPTIONS } from '../../skins.js';
import { renderSkinColorControls } from '../skin-editor.js';
import { editorStyles } from '../editor-helper.js';

class SoccerLiveTickerEditor extends LitElement {
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
    `];
  }

  setConfig(config) { this._config = { ...config }; }

  updated(changed) {
    if (changed.has("hass")) this._fetchEntities();
  }

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
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }

  render() {
    if (!this._config) return html``;
    return html`
      <div class="card-config">
        <label>Entity (all_matches_today or team sensor)</label>
        <select @change=${this._entityChanged}>
          <option value="">— Select entity —</option>
          ${this.entities.map(e => html`
            <option value="${e}" ?selected=${this._config.entity === e}>${e}</option>
          `)}
        </select>

        <label>Show</label>
        <select data-config-value="filter" @change=${this._selectChanged}>
          <option value="" ?selected=${!this._config.filter}>All matches</option>
          <option value="live" ?selected=${this._config.filter === 'live'}>Live only</option>
        </select>

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

if (!customElements.get("soccer-live-ticker-editor")) {
  customElements.define("soccer-live-ticker-editor", SoccerLiveTickerEditor);
}
