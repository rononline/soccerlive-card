import { LitElement, html, css } from 'lit';
import { editorStyles } from '../editor-helper.js';

const SKINS = ['dark', 'light', 'red-white', 'classic', 'neon', 'gold'];
const LANGS = ['auto', 'en', 'nl', 'de', 'pt', 'fr', 'es', 'it'];

class SoccerLiveLiveCommentaryEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } }; }
  constructor() { super(); this.entities = []; }

  static get styles() {
    return [editorStyles, css`
      .hint { font-size: 11px; color: var(--secondary-text-color); }
    `];
  }

  setConfig(config) { this._config = { ...config }; }
  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_commentary') || id.includes('soccer_live_commentary'))
      .sort();
  }

  _fire(cfg) {
    this._config = cfg;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true }));
    this.requestUpdate();
  }

  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _switchChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.checked }); }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList = current && this.entities.includes(current);

    return html`
      <div class="card-config">
        <h3>Sensor</h3>
        <p class="hint">Select a live commentary sensor</p>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>

        <h3>Settings</h3>
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

customElements.define("soccer-live-live-commentary-editor", SoccerLiveLiveCommentaryEditor);
