import { LitElement, html, css } from 'lit-element';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, renderLanguageControl } from '../editor-helper.js';


class SoccerLiveTeamFormEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object } };
  }

  static get styles() { return [editorStyles, css`.option{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;}`]; }

  setConfig(config) { this._config = config; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _fire(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }));
    this.requestUpdate();
  }

  _entityChanged(e) { this._fire({ ...this._config, entity: e.target.value }); }
  _selectChanged(e) { this._fire({ ...this._config, [e.target.dataset.configValue]: e.target.value }); }
  _inputChanged(e)  { this._fire({ ...this._config, [e.target.dataset.configValue]: e.target.value }); }
  _toggleChanged(e) { this._fire({ ...this._config, [e.target.dataset.configValue]: e.target.checked }); }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = Object.keys(this.hass.states).filter(id =>
      id.includes('soccer_live_next') || id.includes('soccerlive_next') ||
      id.includes('soccer_live_all_mixed') || id.includes('soccerlive_all_mixed') ||
      ['team_match', 'team_matches_mixed'].includes(this.hass.states[id]?.attributes?.sensor_type)
    ).sort();
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
