import { LitElement, html, css } from 'lit';
import { editorStyles } from '../editor-helper.js';
import { t, resolveLang } from '../../i18n.js';
import { renderSkinControls } from '../skin-editor.js';

class SoccerLiveTeamCardEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
    };
  }

  constructor() {
    super();
    this.entities = [];
  }

  static get styles() {
    return [editorStyles, css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      .tri {
        display: inline-flex; border: 1px solid var(--divider-color, rgba(127,127,127,0.3));
        border-radius: 8px; overflow: hidden; flex-shrink: 0;
      }
      .tri button {
        border: 0; border-right: 1px solid var(--divider-color, rgba(127,127,127,0.3));
        padding: 6px 10px; font-size: 12px; cursor: pointer;
        background: transparent; color: var(--primary-text-color);
      }
      .tri button:last-child { border-right: 0; }
      .tri button.sel { background: var(--primary-color, #3b82f6); color: #fff; }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `];
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }

  get config() { return this._config; }

  updated(changedProperties) {
    if (changedProperties.has('hass')) this._fetchEntities();
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }

  _fireConfigChanged(newConfig) {
    this._config = newConfig;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    }));
    this.requestUpdate();
  }

  _entityChanged(ev) {
    if (!this._config) return;
    const value = ev.target.value;
    if (value === this._config.entity) return;
    this._fireConfigChanged({ ...this._config, entity: value });
  }

  _switchChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (!target.dataset || !target.dataset.configValue) return;
    const key = target.dataset.configValue;
    const value = target.checked;
    if (this._config[key] === value) return;
    this._fireConfigChanged({ ...this._config, [key]: value });
  }

  _selectChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (!target.dataset || !target.dataset.configValue) return;
    const key = target.dataset.configValue;
    const value = target.value;
    if (this._config[key] === value) return;
    this._fireConfigChanged({ ...this._config, [key]: value });
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter((entityId) =>
        entityId.includes('soccerlive_next') || entityId.includes('soccer_live_next') ||
        entityId.includes('soccerlive_all_mixed') || entityId.includes('soccer_live_all_mixed')
      )
      .sort();
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const currentEntity = this._config.entity || '';
    const entityInList = currentEntity && this.entities.includes(currentEntity);
    // Shared compact default from the sensor, for the compact tri-state's "inherit" hint.
    const sharedDefaults = this.hass?.states?.[currentEntity]?.attributes?.card_defaults || {};
    const sharedCompact = sharedDefaults.compact;
    const sharedLang = sharedDefaults.language;
    const compactVal = this._config.compact;

    return html`
      <div class="card-config">
        <h3>${this._t('editor.sensor')}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!entityInList ? html`<option value="${currentEntity}" selected>${currentEntity || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`
              <option value="${e}" ?selected=${e === currentEntity}>${e}</option>
            `)}
          </select>
        </div>

        <h3>${this._t('editor.section_match')}</h3>
        <div>
          <label class="field-label">${this._t('editor.my_team')}</label>
          <input type="text" placeholder="${this._t('editor.my_team_hint')}"
            .value=${this._config.my_team || ''}
            @change=${(e) => this._fireConfigChanged({...this._config, my_team: e.target.value})} />
        </div>
        <div class="option">
          <label>${this._t('editor.show_form_trend')}</label>
          <ha-switch .checked=${this._config.show_form_trend === true}
            data-config-value="show_form_trend" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_previous_matches')}</label>
          <ha-switch .checked=${this._config.show_previous_matches === true}
            data-config-value="show_previous_matches" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_weather')}</label>
          <ha-switch .checked=${this._config.show_weather !== false}
            data-config-value="show_weather" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t('editor.section_prediction')}</h3>
        <div class="option">
          <label>${this._t('editor.show_prediction')}</label>
          <ha-switch .checked=${this._config.show_prediction !== false}
            data-config-value="show_prediction" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_prediction_details')}</label>
          <ha-switch .checked=${this._config.show_prediction_details !== false}
            data-config-value="show_prediction_details" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_odds')}</label>
          <ha-switch .checked=${this._config.show_odds !== false}
            data-config-value="show_odds" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.show_injuries')}</label>
          <ha-switch .checked=${this._config.show_injuries !== false}
            data-config-value="show_injuries" @change=${this._switchChanged}></ha-switch>
        </div>
        <h3>${this._t('editor.section_display')}</h3>
        <div class="option">
          <label>${this._t('editor.show_event_toasts')}</label>
          <ha-switch
            .checked=${this._config.show_event_toasts === true}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_broadcasts')}</label>
          <ha-switch .checked=${this._config.hide_broadcasts === true} data-config-value="hide_broadcasts" @change=${this._switchChanged}></ha-switch>
        </div>
        <div class="option">
          <label>${this._t('editor.compact')}</label>
          <div class="tri" role="group" aria-label=${this._t('editor.compact')}>
            <button type="button" class=${compactVal === undefined ? 'sel' : ''} aria-pressed=${compactVal === undefined}
              @click=${() => { const c = { ...this._config }; delete c.compact; this._fireConfigChanged(c); }}>
              ${this._t('editor.inherit')}${sharedCompact !== undefined ? ` (${sharedCompact ? this._t('editor.on') : this._t('editor.off')})` : ''}
            </button>
            <button type="button" class=${compactVal === true ? 'sel' : ''} aria-pressed=${compactVal === true}
              @click=${() => this._fireConfigChanged({ ...this._config, compact: true })}>${this._t('editor.on')}</button>
            <button type="button" class=${compactVal === false ? 'sel' : ''} aria-pressed=${compactVal === false}
              @click=${() => this._fireConfigChanged({ ...this._config, compact: false })}>${this._t('editor.off')}</button>
          </div>
        </div>
        <h3>${this._t('editor.appearance')}</h3>
        <div>
          ${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}
        </div>
        <div>
          <label class="field-label">${this._t('editor.score_size')}</label>
          <select data-config-value="score_size" @change=${this._selectChanged}>
            <option value="normal" ?selected=${(this._config.score_size || 'normal') === 'normal'}>Normal</option>
            <option value="big" ?selected=${this._config.score_size === 'big'}>Big</option>
            <option value="huge" ?selected=${this._config.score_size === 'huge'}>Huge</option>
          </select>
        </div>
        <div>
          <label class="field-label">${this._t('editor.language')}</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>${sharedLang ? `${sharedLang} · ${this._t('skin.shared')}` : 'Auto (HA locale)'}</option>
            <option value="en" ?selected=${this._config.language === 'en'}>English</option>
            <option value="it" ?selected=${this._config.language === 'it'}>Italiano</option>
            <option value="fr" ?selected=${this._config.language === 'fr'}>Français</option>
            <option value="es" ?selected=${this._config.language === 'es'}>Español</option>
            <option value="nl" ?selected=${this._config.language === 'nl'}>Nederlands</option>
            <option value="de" ?selected=${this._config.language === 'de'}>Deutsch</option>
            <option value="pt" ?selected=${this._config.language === 'pt'}>Português</option>
          </select>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('soccer-live-team-editor')) {
  customElements.define('soccer-live-team-editor', SoccerLiveTeamCardEditor);
}
