import { LitElement, html, css } from 'lit-element';

class SoccerLiveMatchCenterEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object } };
  }

  setConfig(config) { this._config = config; }

  _fire(config) {
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }));
  }

  _entityChanged(e) {
    const value = e.target.value;
    if (value === this._config.entity) return;
    this._fire({ ...this._config, entity: value });
  }

  _toggleChanged(e) {
    const key = e.target.dataset.configValue;
    this._fire({ ...this._config, [key]: e.target.checked });
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const entities = Object.keys(this.hass.states).filter(id =>
      id.includes('soccer_live_next') || id.includes('soccerlive_next') ||
      id.includes('soccer_live_all_mixed') || id.includes('soccerlive_all_mixed')
    ).sort();
    const current = this._config.entity || '';
    return html`
      <div class="card-config">
        <div class="field">
          <label class="field-label">Entity (next_* or all_mixed_* sensor)</label>
          <select @change=${this._entityChanged}>
            ${!entities.includes(current) ? html`<option value="${current}" selected>${current || '— select —'}</option>` : ''}
            ${entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>
        <div class="option">
          <label>Hide header</label>
          <input type="checkbox" data-config-value="hide_header" ?checked=${this._config.hide_header === true} @change=${this._toggleChanged}>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 14px; }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); font-weight: 600; margin-bottom: 4px; }
      select { width: 100%; padding: 8px 10px; font-size: 14px; border-radius: 8px; border: 1px solid var(--divider-color, rgba(0,0,0,0.12)); background: var(--card-background-color, #fff); color: var(--primary-text-color); }
      .option { display: flex; align-items: center; justify-content: space-between; font-size: 14px; }
    `;
  }
}

if (!customElements.get('soccer-live-match-center-editor')) {
  customElements.define('soccer-live-match-center-editor', SoccerLiveMatchCenterEditor);
}
