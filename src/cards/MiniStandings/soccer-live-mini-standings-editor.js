import { LitElement, html, css } from 'lit';

const SKINS = ['dark', 'light', 'red-white', 'classic', 'neon', 'gold'];
const LANGS = ['auto', 'en', 'nl', 'de', 'pt', 'fr', 'es', 'it'];

class SoccerLiveMiniStandingsEditor extends LitElement {
  static get properties() { return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } }; }
  constructor() { super(); this.entities = []; }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input { width: 100%; padding: 10px 12px; font-size: 14px; border-radius: 8px; border: 1px solid var(--divider-color, rgba(0,0,0,0.12)); background: var(--card-background-color, #fff); color: var(--primary-text-color, #000); box-sizing: border-box; }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
    `;
  }

  setConfig(config) { this._config = { ...config }; }
  updated(p) { if (p.has('hass')) this._fetchEntities(); }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states).filter(id => id.includes('soccerlive_classifica')).sort();
  }

  _fire(cfg) { this._config = cfg; this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: cfg }, bubbles: true, composed: true })); this.requestUpdate(); }
  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _numberChanged(ev) { const v = parseInt(ev.target.value, 10); if (!isNaN(v)) this._fire({ ...this._config, [ev.target.dataset.configValue]: v }); }
  _switchChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.checked }); }
  _textChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList = current && this.entities.includes(current);
    return html`
      <div class="card-config">
        <h3>Sensor</h3>
        <div>
          <label class="field-label">Standings entity</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>
        <h3>Settings</h3>
        <div>
          <label class="field-label">Max rows (default 5)</label>
          <input type="number" min="1" max="20" .value=${this._config.max_rows ?? 5} data-config-value="max_rows" @change=${this._numberChanged}>
        </div>
        <div>
          <label class="field-label">Highlight team (partial name)</label>
          <input type="text" .value=${this._config.highlight_team || ''} data-config-value="highlight_team" @input=${this._textChanged}>
        </div>
        <div class="option">
          <label>Hide W/D/L/GD columns</label>
          <ha-switch .checked=${this._config.hide_stats === true} data-config-value="hide_stats" @change=${this._switchChanged}></ha-switch>
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

customElements.define("soccer-live-mini-standings-editor", SoccerLiveMiniStandingsEditor);
