import { LitElement, html, css } from 'lit';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles } from '../editor-helper.js';
import { SKIN_OPTIONS, resolveSkin } from '../../skins.js';
import { renderSkinColorControls } from '../skin-editor.js';

class SoccerLiveMatchesEditor extends LitElement {
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
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
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
      .hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: -4px;
      }
    `];
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }

  _t(key) { return t(key, resolveLang(this.hass, this._config)); }


  get config() { return this._config; }

  updated(changedProperties) {
    if (changedProperties.has('hass')) this._fetchEntities();
  }

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

  _numberChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (!target.dataset || !target.dataset.configValue) return;
    const key = target.dataset.configValue;
    const value = parseInt(target.value, 10);
    if (isNaN(value)) return;
    if (this._config[key] === value) return;
    this._fireConfigChanged({ ...this._config, [key]: value });
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter((entityId) => entityId.includes('soccerlive_all') || entityId.includes('soccer_live_all'))
      .sort();
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const currentEntity = this._config.entity || '';
    const entityInList = currentEntity && this.entities.includes(currentEntity);

    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!entityInList ? html`<option value="${currentEntity}" selected>${currentEntity || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`
              <option value="${e}" ?selected=${e === currentEntity}>${e}</option>
            `)}
          </select>
        </div>

        <h3>${this._t("editor.settings")}</h3>

        <div>
          <label class="field-label">${this._t('editor.my_team')}</label>
          <input type="text" placeholder="bijv. Feyenoord Rotterdam"
            .value=${this._config.my_team || ''}
            @change=${(e) => this._fireConfigChanged({...this._config, my_team: e.target.value})} />
        </div>

        <div class="option">
          <label>${this._t('editor.show_live_ticker')}</label>
          <ha-switch .checked=${this._config.show_live_ticker !== false}
            data-config-value="show_live_ticker" @change=${this._switchChanged}></ha-switch>
        </div>

        <div class="option">
          <label>${this._t('editor.show_finished')}</label>
          <ha-switch
            .checked=${this._config.show_finished_matches !== false}
            data-config-value="show_finished_matches"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch
            .checked=${this._config.hide_header === true}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t('editor.hide_broadcasts')}</label>
          <ha-switch
            .checked=${this._config.hide_broadcasts === true}
            data-config-value="hide_broadcasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t('editor.newest_first')}</label>
          <ha-switch
            .checked=${this._config.reverse_order === true}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>${this._t('editor.show_event_toasts')}</label>
          <ha-switch
            .checked=${this._config.show_event_toasts === true}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">${this._t('editor.max_events_visible')}</label>
          <input
            type="number"
            min="1"
            max="100"
            .value=${this._config.max_events_visible || 5}
            data-config-value="max_events_visible"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">${this._t('editor.max_events_total')}</label>
          <input
            type="number"
            min="1"
            max="500"
            .value=${this._config.max_events_total || 50}
            data-config-value="max_events_total"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">${this._t('editor.group_by')}</label>
          <select data-config-value="group_by" @change=${this._selectChanged}>
            <option value="day" ?selected=${!this._config.group_by || this._config.group_by === 'day'}>${this._t('editor.group_by_date')}</option>
            <option value="competition" ?selected=${this._config.group_by === 'competition'}>${this._t('editor.group_by_competition')}</option>
          </select>
        </div>

        <div>
          <label class="field-label">${this._t('editor.hide_older_than_days')}</label>
          <input
            type="number"
            min="0"
            max="365"
            .value=${this._config.hide_past_days || 0}
            data-config-value="hide_past_days"
            @change=${this._numberChanged}
          />
          <div class="hint">${this._t('editor.hint_older_than_days')}</div>
        </div>
        <div>
          <label class="field-label">${this._t('editor.skin')}</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            ${SKIN_OPTIONS.map(([val, label]) => html`<option value="${val}" ?selected=${resolveSkin(this._config) === val}>${label}</option>`)}
          </select>
        </div>
        ${renderSkinColorControls(this, this._config)}
        <div>
          <label class="field-label">${this._t('editor.language')}</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
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

if (!customElements.get('soccer-live-matches-editor')) {
  customElements.define('soccer-live-matches-editor', SoccerLiveMatchesEditor);
}
