import { LitElement, html } from 'lit';
import { editorStyles, renderLanguageControl, setEditorConfigValue, soccerEntityIds } from '../editor-helper.js';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';


class SoccerLiveScorersEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass:    { type: Object },
      entities: { type: Array },
    };
  }

  constructor() {
    super();
    this.entities = [];
  }

  static get styles() { return editorStyles; }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }


  updated(changedProperties) {
    if (changedProperties.has('hass')) {
      this._fetchEntities();
    }
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = soccerEntityIds(this.hass, { includes: ['soccerlive_scorers', 'soccer_live_scorers'] });
  }

  _entityChanged(ev) { setEditorConfigValue(this, 'entity', ev.target.value); }

  _selectChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    setEditorConfigValue(this, configValue, ev.target.value, { removeEmpty: true });
  }

  _numberChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    const value = parseInt(ev.target.value, 10);
    if (!isNaN(value)) setEditorConfigValue(this, configValue, value);
  }

  _switchChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    setEditorConfigValue(this, configValue, ev.target.checked);
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList  = current && this.entities.includes(current);

    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || this._t('editor.select')}</option>` : ''}
            ${this.entities.map(e => html`
              <option value="${e}" ?selected=${e === current}>${e}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t('editor.ranking')}</label>
          <select data-config-value="ranking" @change=${this._selectChanged}>
            ${[['goals', this._t('card.scorers')], ['assists', this._t('card.assists')]].map(
              ([val, label]) => html`<option value="${val}" ?selected=${(this._config.ranking || 'goals') === val}>${label}</option>`
            )}
          </select>
        </div>

        <div>
          <label class="field-label">${this._t('editor.max_items')}</label>
          <input type="number" min="1" max="25"
            .value=${this._config.max_items ?? 10}
            data-config-value="max_items"
            @change=${this._numberChanged}>
        </div>

        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch
            .checked=${this._config.hide_header === true}
            data-config-value="hide_header"
            @change=${this._switchChanged}>
          </ha-switch>
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

if (!customElements.get("soccer-live-scorers-editor")) {
  customElements.define("soccer-live-scorers-editor", SoccerLiveScorersEditor);
}
