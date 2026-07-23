import { LitElement, html, css } from 'lit-element';
import { renderSkinControls } from '../skin-editor.js';
import { t, resolveLang } from '../../i18n.js';
import { normalizeClubSectionOrder } from '../shared-club-model.js';

class SoccerLiveClubEditor extends LitElement {
  static get properties() {
    return { _config: { type: Object }, hass: { type: Object }, entities: { type: Array } };
  }

  constructor() {
    super();
    this.entities = [];
  }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input[type="number"] {
        width: 100%; padding: 10px 12px; font-size: 14px; border-radius: 8px;
        border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color);
      }
      .section-order{display:grid;gap:4px}.section-order div{display:flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--divider-color);border-radius:7px}.section-order span{flex:1;font-size:12px}.section-order button{width:28px;height:26px;border:1px solid var(--divider-color);border-radius:5px;background:var(--secondary-background-color);color:var(--primary-text-color);cursor:pointer}
      h3 { margin: 0; font-size: 15px; }
    `;
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  updated(changedProperties) {
    if (changedProperties.has('hass')) this._fetchEntities();
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id =>
        id.includes('soccerlive_next') || id.includes('soccer_live_next') ||
        id.includes('soccerlive_club') || id.includes('soccer_live_club') ||
        id.includes('soccerlive_all_manual') || id.includes('soccerlive_all_mixed') ||
        id.includes('soccer_live_all_manual') || id.includes('soccer_live_all_mixed') ||
        ['club', 'team_match', 'team_matches_mixed'].includes(this.hass.states[id]?.attributes?.sensor_type))
      .sort();
  }

  _fire(newConfig) {
    this._config = newConfig;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: newConfig }, bubbles: true, composed: true }));
    this.requestUpdate();
  }

  _entityChanged(ev) {
    const value = ev.target.value;
    if (value === this._config.entity) return;
    this._fire({ ...this._config, entity: value });
  }

  _selectChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    if (this._config[configValue] === ev.target.value) return;
    this._fire({ ...this._config, [configValue]: ev.target.value });
  }

  _numberChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    const value = parseInt(ev.target.value, 10);
    if (isNaN(value) || this._config[configValue] === value) return;
    this._fire({ ...this._config, [configValue]: value });
  }

  _switchChanged(ev) {
    const { configValue } = ev.target.dataset;
    if (!configValue) return;
    if (this._config[configValue] === ev.target.checked) return;
    this._fire({ ...this._config, [configValue]: ev.target.checked });
  }

  _moveSection(key, delta) {
    const order = normalizeClubSectionOrder(this._config.section_order);
    const index = order.indexOf(key);
    const next = index + delta;
    if (index < 0 || next < 0 || next >= order.length) return;
    [order[index], order[next]] = [order[next], order[index]];
    this._fire({ ...this._config, section_order: order });
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const current = this._config.entity || '';
    const inList = current && this.entities.includes(current);
    return html`
      <div class="card-config">
        <h3>${this._t('editor.sensor')}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${current}" selected>${current || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === current}>${e}</option>`)}
          </select>
        </div>

        <div class="option">
          <label>${this._t('editor.show_matchday')}</label>
          <ha-switch .checked=${this._config.show_matchday !== false} data-config-value="show_matchday" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_season_progress')}</label>
          <ha-switch .checked=${this._config.show_season_progress !== false} data-config-value="show_season_progress" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_squad')}</label>
          <ha-switch .checked=${this._config.show_squad !== false} data-config-value="show_squad" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_squad_analysis')}</label>
          <ha-switch .checked=${this._config.show_squad_analysis !== false} data-config-value="show_squad_analysis" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_injury_center')}</label>
          <ha-switch .checked=${this._config.show_injuries !== false} data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        ${[
          ['show_availability', 'editor.show_availability', true],
          ['show_prediction', 'editor.show_prediction', true],
          ['show_selection', 'editor.show_selection', true],
          ['show_team_news', 'editor.show_team_news', true],
          ['show_data_quality', 'editor.show_data_quality', true],
          ['show_automations', 'editor.show_automations', false],
        ].map(([field, key, defaultOn]) => html`<div class="option">
          <label>${this._t(key)}</label>
          <ha-switch .checked=${defaultOn ? this._config[field] !== false : this._config[field] === true} data-config-value=${field} @change=${this._switchChanged}></ha-switch>
        </div>`)}
        <div class="option">
          <label>${this._t('editor.show_club_records')}</label>
          <ha-switch .checked=${this._config.show_club_records !== false} data-config-value="show_club_records" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.collapse_club_sections')}</label>
          <ha-switch .checked=${this._config.collapse_sections !== false} data-config-value="collapse_sections" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.club_dashboard_mode')}</label>
          <ha-switch .checked=${this._config.dashboard_mode === true} data-config-value="dashboard_mode" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t('editor.club_section_order')}</label>
          <div class="section-order">${normalizeClubSectionOrder(this._config.section_order).map((key, index, order) => html`<div><span>${this._t(`club.section_${key}`)}</span><button ?disabled=${index === 0} @click=${() => this._moveSection(key, -1)}>↑</button><button ?disabled=${index === order.length - 1} @click=${() => this._moveSection(key, 1)}>↓</button></div>`)}</div>
        </div>
        <div class="option">
          <label>${this._t('editor.show_transfers')}</label>
          <ha-switch .checked=${this._config.show_transfers !== false} data-config-value="show_transfers" @change=${this._switchChanged}></ha-switch>
        </div>
        <div>
          <label class="field-label">${this._t('editor.max_transfers')}</label>
          <input type="number" min="1" max="25" .value=${this._config.max_transfers ?? 8} data-config-value="max_transfers" @change=${this._numberChanged}>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch .checked=${this._config.hide_header === true} data-config-value="hide_header" @change=${this._switchChanged}></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t('editor.skin')}</label>
          ${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('soccer-live-club-editor')) {
  customElements.define('soccer-live-club-editor', SoccerLiveClubEditor);
}
