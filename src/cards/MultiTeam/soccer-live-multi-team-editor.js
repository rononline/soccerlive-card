import { LitElement, html, css } from 'lit';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles, renderLanguageControl } from '../editor-helper.js';


class SoccerLiveMultiTeamEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, _allEntities: { type: Array } }; }
  constructor() { super(); this._allEntities = []; }

  static get styles() {
    return [editorStyles, css`
      .entity-list { display: flex; flex-direction: column; gap: 8px; }
      .entity-row { display: flex; gap: 8px; align-items: center; }
      .entity-row select { flex: 1; }
      .remove-btn { background: none; border: 1px solid var(--error-color, #e53935); color: var(--error-color, #e53935); border-radius: 6px; padding: 6px 10px; cursor: pointer; font-size: 13px; }
      .add-btn { background: var(--primary-color, #03a9f4); color: #fff; border: none; border-radius: 8px; padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; width: 100%; }
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `];
  }

  setConfig(config) { this._config = { ...config, entities: [...(config.entities || [])] }; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this._allEntities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_next') || id.includes('soccer_live_next') || id.includes('all_mixed') ||
        ['team_match', 'team_matches_mixed'].includes(this.hass.states[id]?.attributes?.sensor_type))
      .sort();
  }

  _fire(cfg) { this._config = cfg; this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true })); this.requestUpdate(); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _switchChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.checked }); }
  _textChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }

  _entityChanged(ev, idx) {
    const entities = [...(this._config.entities || [])];
    entities[idx] = ev.target.value;
    this._fire({ ...this._config, entities });
  }

  _removeEntity(idx) {
    const entities = [...(this._config.entities || [])];
    entities.splice(idx, 1);
    this._fire({ ...this._config, entities });
  }

  _addEntity() {
    const entities = [...(this._config.entities || []), ''];
    this._fire({ ...this._config, entities });
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = this._config.entities || [];
    return html`
      <div class="card-config">
        <h3>${this._t("editor.teams")}</h3>
        <p class="hint">${this._t('editor.hint_multi_team_sensor')}</p>
        <div class="entity-list">
          ${entities.map((e, i) => html`
            <div class="entity-row">
              <select @change=${ev => this._entityChanged(ev, i)}>
                ${!e || !this._allEntities.includes(e) ? html`<option value="${e}" selected>${e || '— select —'}</option>` : ''}
                ${this._allEntities.map(opt => html`<option value="${opt}" ?selected=${opt === e}>${opt}</option>`)}
              </select>
              <button class="remove-btn" @click=${() => this._removeEntity(i)}>✕</button>
            </div>
          `)}
        </div>
        <button class="add-btn" @click=${this._addEntity}>+ ${this._t('editor.teams')}</button>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t('editor.card_title')}</label>
          <input type="text" .value=${this._config.title || ''} data-config-value="title" @input=${this._textChanged} placeholder="${this._t('card.my_teams')}">
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

if (!customElements.get("soccer-live-multi-team-editor")) {
  customElements.define("soccer-live-multi-team-editor", SoccerLiveMultiTeamEditor);
}
