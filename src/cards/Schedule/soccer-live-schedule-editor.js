import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { editorStyles, renderLanguageControl } from "../editor-helper.js";
import { renderSkinControls } from "../skin-editor.js";
import { variantsForSensorType } from "../shared-minimal-model.js";

class SoccerLiveScheduleEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object } }; }

  static get styles() {
    return [editorStyles, css`
      .card-config { display: flex; flex-direction: column; gap: 14px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      select, input { width: 100%; box-sizing: border-box; padding: 9px 10px; border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12)); background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000); font-size: 14px; }
      h3 { margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
    `];
  }

  setConfig(config) { this._config = { ...config }; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _fireConfigChanged(next) {
    this._config = next;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: next }, bubbles: true, composed: true }));
    this.requestUpdate();
  }
  _set(key, value) { this._fireConfigChanged({ ...this._config, [key]: value }); }
  _selectChanged(e) { this._set(e.target.dataset.configValue, e.target.value); }
  _numberChanged(e) { this._set(e.target.dataset.configValue, Number(e.target.value)); }
  _toggleChanged(e) { this._set(e.target.dataset.configValue, e.target.checked); }

  _entities() {
    if (!this.hass) return [];
    return Object.keys(this.hass.states)
      .filter((id) => id.includes("soccerlive_") || id.includes("soccer_live_"))
      .sort();
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = this._entities();
    const current = this._config.entity || "";
    const show = this._config.show || "upcoming";
    const variant = this._config.variant || "fixtures";
    // Offer only variants that make sense for the selected sensor (a standings
    // sensor has no fixtures for next/form); keep the current one if it's set.
    const sensorType = this.hass?.states?.[current]?.attributes?.sensor_type;
    const allowed = variantsForSensorType(sensorType);
    const variantOpts = allowed.includes(variant) ? allowed : [variant, ...allowed];
    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t("editor.entity")}</label>
          <select data-config-value="entity" @change=${this._selectChanged}>
            ${!entities.includes(current) ? html`<option value="${current}" selected>${current || "— select —"}</option>` : ""}
            ${entities.map((e) => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t("minimal.variant")}</label>
          <select data-config-value="variant" @change=${this._selectChanged}>
            ${variantOpts.map((v) => html`
              <option value="${v}" ?selected=${variant === v}>${this._t("minimal.variant_" + v)}</option>`)}
          </select>
        </div>
        ${variant === "fixtures" ? html`
        <div>
          <label class="field-label">${this._t("schedule.show")}</label>
          <select data-config-value="show" @change=${this._selectChanged}>
            <option value="upcoming" ?selected=${show === "upcoming"}>${this._t("schedule.show_upcoming")}</option>
            <option value="previous" ?selected=${show === "previous"}>${this._t("schedule.show_previous")}</option>
            <option value="all" ?selected=${show === "all"}>${this._t("schedule.show_all")}</option>
          </select>
        </div>` : ""}
        ${variant !== "next" ? html`
        <div>
          <label class="field-label">${this._t("editor.max_matches")}</label>
          <input type="number" min="1" max="50" data-config-value="max_matches"
            .value=${this._config.max_matches ?? 15} @change=${this._numberChanged} />
        </div>` : ""}
        <div>
          <label class="field-label">${this._t("editor.text_size")}</label>
          <select data-config-value="text_size" @change=${this._selectChanged}>
            ${["xs", "small", "normal", "large"].map((s) => html`
              <option value="${s}" ?selected=${(this._config.text_size || "normal") === s}>${this._t("schedule.size_" + s)}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t("editor.my_team")}</label>
          <input type="text" placeholder="${this._t("editor.my_team_hint")}"
            .value=${this._config.my_team || ""} @change=${(e) => this._set("my_team", e.target.value)} />
        </div>
        ${variant === "fixtures" ? html`
        <div class="option">
          <label>${this._t("schedule.show_competition")}</label>
          <ha-switch .checked=${this._config.show_competition !== false} data-config-value="show_competition" @change=${this._toggleChanged}></ha-switch>
        </div>` : ""}
        <div class="option">
          <label>${this._t("editor.hide_header")}</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}</div>
        <div>${renderLanguageControl(this, this._config, (k) => (this._t ? this._t(k) : k))}</div>
      </div>
    `;
  }
}

if (!customElements.get("soccer-live-schedule-editor")) {
  customElements.define("soccer-live-schedule-editor", SoccerLiveScheduleEditor);
}
