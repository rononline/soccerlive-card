import { LitElement, html, css } from 'lit';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, renderLanguageControl } from '../editor-helper.js';


class SoccerLiveTeamCompetitionsEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } }; }
  constructor() { super(); this.entities = []; }

  static get styles() {
    return [editorStyles, css`
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `];
  }

  setConfig(config) { this._config = { ...config }; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes('all_mixed'))
      .sort();
  }

  _fire(cfg) {
    this._config = cfg;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true }));
    this.requestUpdate();
  }

  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _numberChanged(ev) { const v = parseInt(ev.target.value, 10); if (!isNaN(v)) this._fire({ ...this._config, [ev.target.dataset.configValue]: v }); }
  _textChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _switchChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.checked }); }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList = current && this.entities.includes(current);

    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <p class="hint">${this._t('editor.hint_team_competitions_sensor')}</p>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || this._t('editor.select')}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t('editor.team_name')}</label>
          <input type="text" .value=${this._config.team_name || ''} data-config-value="team_name" @input=${this._textChanged} placeholder="${this._t('editor.my_team_hint')}">
        </div>
        <div>
          <label class="field-label">${this._t('editor.default_competition')}</label>
          <input type="text" .value=${this._config.default_comp || ''} data-config-value="default_comp" @input=${this._textChanged} placeholder="${this._t('editor.default_competition_hint')}">
        </div>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <h3>${this._t("editor.appearance")}</h3>
        <div>
          <label class="field-label">${this._t('editor.theme')}</label>
          ${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
        <div>
          ${renderLanguageControl(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
      </div>
    `;
  }
}

if (!customElements.get("soccer-live-team-competitions-editor")) {
  customElements.define("soccer-live-team-competitions-editor", SoccerLiveTeamCompetitionsEditor);
}
