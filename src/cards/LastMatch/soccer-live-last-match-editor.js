import { LitElement, html } from 'lit';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, renderLanguageControl, setEditorConfigValue, soccerEntityIds } from '../editor-helper.js';
import { renderSkinControls } from '../skin-editor.js';

class SoccerLiveLastMatchEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } };
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

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = soccerEntityIds(this.hass, {
      sensorTypes: ['team_match', 'team_matches', 'team_matches_mixed'],
      includes: ['soccerlive_next', 'soccer_live_next', 'soccerlive_all', 'soccer_live_all'],
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
          <label class="field-label">Entity (team_match sensor — soccer_live_next_*)</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${cur}" selected>${cur || this._t('editor.select')}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === cur}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t('last_match.editor_hint')}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
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

if (!customElements.get('soccer-live-last-match-editor')) {
  customElements.define('soccer-live-last-match-editor', SoccerLiveLastMatchEditor);
}
