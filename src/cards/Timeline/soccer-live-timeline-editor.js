import { LitElement, html } from 'lit';
import { editorStyles, renderLanguageControl, setEditorConfigValue, soccerEntityIds } from '../editor-helper.js';
import { t, resolveLang } from '../../i18n.js';
import { renderSkinControls } from '../skin-editor.js';

class SoccerLiveTimelineEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
    };
  }

  constructor() { super(); this.entities = []; }

  static get styles() { return editorStyles; }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  get config() { return this._config; }

  updated(changedProperties) {
    if (changedProperties.has('hass')) this._fetchEntities();
  }

  _entityChanged(ev) { setEditorConfigValue(this, 'entity', ev.target.value); }
  _switchChanged(ev) { setEditorConfigValue(this, ev.target.dataset.configValue, ev.target.checked); }
  _selectChanged(ev) { setEditorConfigValue(this, ev.target.dataset.configValue, ev.target.value, { removeEmpty: true }); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = soccerEntityIds(this.hass, {
      sensorTypes: ['team_match'], includes: ['soccerlive_next', 'soccer_live_next'],
    });
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const cur = this._config.entity || '';
    const inList = cur && this.entities.includes(cur);
    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')} (soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${cur}" selected>${cur || this._t('editor.select')}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === cur}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t('timeline.empty.sub')}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch
            .checked=${this._config.hide_header === true}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.reverse_order')}</label>
          <ha-switch
            .checked=${this._config.reverse_order === true}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t('editor.skin')}</label>
          ${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
        <div>
          ${renderLanguageControl(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('soccer-live-timeline-editor')) {
  customElements.define('soccer-live-timeline-editor', SoccerLiveTimelineEditor);
}
