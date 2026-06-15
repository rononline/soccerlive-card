import { LitElement, html, css } from 'lit';
import { editorStyles } from '../editor-helper.js';

const SKINS = ['dark', 'light', 'red-white', 'classic', 'neon', 'gold'];
const LANGS = ['auto', 'en', 'nl', 'de', 'pt', 'fr', 'es', 'it'];

class SoccerLiveLiveMatchEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } }; }
  constructor() { super(); this.entities = []; }

  static get styles() {
    return [editorStyles, css``];
  }

  setConfig(config) { this._config = { ...config }; }
  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_next') || id.includes('soccer_live_next') || id.includes('soccerlive_all') || id.includes('soccer_live_all'))
      .sort();
  }

  _fire(cfg) { this._config = cfg; this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true })); this.requestUpdate(); }
  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _numberChanged(ev) { const v = parseInt(ev.target.value, 10); if (!isNaN(v)) this._fire({ ...this._config, [ev.target.dataset.configValue]: v }); }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList = current && this.entities.includes(current);
    return html`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Team sensor</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>
        <h3>Settings</h3>
        <div>
          <label class="field-label">Max stats shown (default 4)</label>
          <input type="number" min="0" max="10" .value=${this._config.max_stats ?? 4} data-config-value="max_stats" @change=${this._numberChanged}>
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

customElements.define("soccer-live-live-match-editor", SoccerLiveLiveMatchEditor);
