import { LitElement, html } from 'lit';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, fireEditorConfig, renderLanguageControl, setEditorConfigValue, soccerEntityIds } from '../editor-helper.js';


class SoccerLiveMatchCenterEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object } };
  }

  static get styles() { return editorStyles; }

  setConfig(config) { this._config = config; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _entityChanged(e) { setEditorConfigValue(this, 'entity', e.target.value); }
  _selectChanged(e) { setEditorConfigValue(this, e.target.dataset.configValue, e.target.value, { removeEmpty: true }); }
  _toggleChanged(e) { setEditorConfigValue(this, e.target.dataset.configValue, e.target.checked); }
  _modeChanged(e) {
    const next = { ...this._config };
    if (e.target.value === 'phase') next.phase_aware = true;
    else delete next.phase_aware;
    // Once edited, legacy Hub becomes the regular Match Center plus its mode.
    if (next.card_type === 'hub') next.card_type = 'match-center';
    fireEditorConfig(this, next);
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = soccerEntityIds(this.hass, {
      sensorTypes: ['team_match', 'team_matches_mixed'],
      includes: ['soccer_live_next', 'soccerlive_next', 'soccer_live_all_mixed', 'soccerlive_all_mixed'],
    });
    const current = this._config.entity || '';
    const sensors = Object.keys(this.hass.states).filter(id => id.startsWith('sensor.')).sort();
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

        <h3>${this._t('editor.section_display')}</h3>
        <div>
          <label class="field-label">${this._t('editor.match_center_mode')}</label>
          <select @change=${this._modeChanged}>
            <option value="tabs" ?selected=${this._config.card_type !== 'hub' && this._config.phase_aware !== true}>${this._t('editor.match_center_tabs')}</option>
            <option value="phase" ?selected=${this._config.card_type === 'hub' || this._config.phase_aware === true}>${this._t('editor.match_center_phase')}</option>
          </select>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t('editor.archive_entity')}</label>
          <select data-config-value="archive_entity" @change=${this._selectChanged}>
            <option value="">—</option>
            ${sensors.map(id => html`<option value=${id} ?selected=${id === this._config.archive_entity}>${id}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">${this._t('editor.standings_entity')}</label>
          <select data-config-value="standings_entity" @change=${this._selectChanged}>
            <option value="">${this._t('editor.automatic')}</option>
            ${sensors.filter(id => this.hass.states[id]?.attributes?.standings_groups).map(id => html`<option value=${id} ?selected=${id === this._config.standings_entity}>${id}</option>`)}
          </select>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_broadcasts')}</label>
          <ha-switch .checked=${this._config.hide_broadcasts === true} data-config-value="hide_broadcasts" @change=${this._toggleChanged}></ha-switch>
        </div>

        <h3>${this._t('editor.section_prediction')}</h3>
        <div class="option">
          <label>${this._t('editor.show_prediction')}</label>
          <ha-switch .checked=${this._config.show_prediction !== false} data-config-value="show_prediction" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_prediction_details')}</label>
          <ha-switch .checked=${this._config.show_prediction_details !== false} data-config-value="show_prediction_details" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_odds')}</label>
          <ha-switch .checked=${this._config.show_odds !== false} data-config-value="show_odds" @change=${this._toggleChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_injuries')}</label>
          <ha-switch .checked=${this._config.show_injuries !== false} data-config-value="show_injuries" @change=${this._toggleChanged}></ha-switch>
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

if (!customElements.get('soccer-live-match-center-editor')) {
  customElements.define('soccer-live-match-center-editor', SoccerLiveMatchCenterEditor);
}
