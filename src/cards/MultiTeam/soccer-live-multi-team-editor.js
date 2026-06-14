import { LitElement, html, css } from 'lit';

const SKINS = ['dark', 'light', 'feyenoord', 'classic', 'neon', 'gold'];
const LANGS = ['auto', 'en', 'nl', 'de', 'pt', 'fr', 'es', 'it'];

class SoccerLiveMultiTeamEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, _allEntities: { type: Array } }; }
  constructor() { super(); this._allEntities = []; }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input { width: 100%; padding: 10px 12px; font-size: 14px; border-radius: 8px; border: 1px solid var(--divider-color, rgba(0,0,0,0.12)); background: var(--card-background-color, #fff); color: var(--primary-text-color, #000); box-sizing: border-box; }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .entity-list { display: flex; flex-direction: column; gap: 8px; }
      .entity-row { display: flex; gap: 8px; align-items: center; }
      .entity-row select { flex: 1; }
      .remove-btn { background: none; border: 1px solid var(--error-color, #e53935); color: var(--error-color, #e53935); border-radius: 6px; padding: 6px 10px; cursor: pointer; font-size: 13px; }
      .add-btn { background: var(--primary-color, #03a9f4); color: #fff; border: none; border-radius: 8px; padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; width: 100%; }
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `;
  }

  setConfig(config) { this._config = { ...config, entities: [...(config.entities || [])] }; }
  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this._allEntities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_next') || id.includes('soccerlive_all_mixed'))
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
        <h3>Teams</h3>
        <p class="hint">Add one soccerlive_next_* or soccerlive_all_mixed_* sensor per team</p>
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
        <button class="add-btn" @click=${this._addEntity}>+ Add team</button>

        <h3>Settings</h3>
        <div>
          <label class="field-label">Card title</label>
          <input type="text" .value=${this._config.title || ''} data-config-value="title" @input=${this._textChanged} placeholder="My Teams">
        </div>
        <div class="option">
          <label>Hide header</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>Appearance</h3>
        <div>
          <label class="field-label">Theme</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${SKINS.map(s => html`<option value="${s}" ?selected=${(this._config.skin || 'dark') === s}>${s}</option>`)}
          </select>
        </div>
        <div>
          <label class="field-label">Language</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            ${LANGS.map(l => html`<option value="${l === 'auto' ? '' : l}" ?selected=${(this._config.language || '') === (l === 'auto' ? '' : l)}>${l}</option>`)}
          </select>
        </div>
      </div>
    `;
  }
}

customElements.define("soccer-live-multi-team-editor", SoccerLiveMultiTeamEditor);
