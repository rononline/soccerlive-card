import { LitElement, html } from 'lit';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, renderLanguageControl, setEditorConfigValue, soccerEntityIds } from '../editor-helper.js';


class SoccerLiveTeamFormEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object } };
  }

  static get styles() { return editorStyles; }

  setConfig(config) { this._config = config; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _entityChanged(e) { setEditorConfigValue(this, 'entity', e.target.value); }
  _selectChanged(e) { setEditorConfigValue(this, e.target.dataset.configValue, e.target.value, { removeEmpty: true }); }
  _inputChanged(e)  { setEditorConfigValue(this, e.target.dataset.configValue, e.target.value, { removeEmpty: true }); }
  _toggleChanged(e) { setEditorConfigValue(this, e.target.dataset.configValue, e.target.checked); }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = soccerEntityIds(this.hass, {
      sensorTypes: ['team_match', 'team_matches_mixed'],
      includes: ['soccer_live_next', 'soccerlive_next', 'soccer_live_all_mixed', 'soccerlive_all_mixed'],
    });
    const current = this._config.entity || '';
    return html`
      <div class="card-config">
        <h3>${this._t('editor.sensor')}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!entities.includes(current) ? html`<option value="${current}" selected>${current || this._t('editor.select')}</option>` : ''}
            ${entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>

        <h3>${this._t('editor.settings')}</h3>
        <div>
          <label class="field-label">${this._t('editor.team_name')}</label>
          <label class="field-hint">${this._t('editor.my_team_hint')}</label>
          <input type="text" data-config-value="team_name" .value=${this._config.team_name || ''} @input=${this._inputChanged} placeholder=${this._t('editor.my_team_hint')}>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t('editor.appearance')}</h3>
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

if (!customElements.get('soccer-live-team-form-editor')) {
  customElements.define('soccer-live-team-form-editor', SoccerLiveTeamFormEditor);
}
