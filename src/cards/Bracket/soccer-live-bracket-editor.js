import { LitElement, html, css } from 'lit';
import { t, resolveLang } from '../../i18n.js';
import { SKIN_OPTIONS, resolveSkin } from '../../skins.js';
import { renderSkinColorControls } from '../skin-editor.js';

class SoccerLiveBracketEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
      standingsEntities: { type: Array },
      matchesEntities: { type: Array },
    };
  }

  constructor() {
    super();
    this.entities = [];
    this.standingsEntities = [];
    this.matchesEntities = [];
  }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input[type="text"] {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
    `;
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
      detail: { config: newConfig }, bubbles: true, composed: true,
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
    if (value === '') {
      const cfg = { ...this._config };
      delete cfg[key];
      this._fireConfigChanged(cfg);
    } else {
      this._fireConfigChanged({ ...this._config, [key]: value });
    }
  }

  _textChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    const key = target.dataset.configValue;
    const value = target.value;
    if (this._config[key] === value) return;
    if (value === '') {
      const cfg = { ...this._config };
      delete cfg[key];
      this._fireConfigChanged(cfg);
    } else {
      this._fireConfigChanged({ ...this._config, [key]: value });
    }
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_bracket') || id.includes('soccer_live_bracket'))
      .sort();
    this.standingsEntities = Object.keys(this.hass.states)
      .filter(id => id.includes('soccerlive_standings') || id.includes('soccer_live_standings'))
      .sort();
    this.matchesEntities = Object.keys(this.hass.states)
      .filter(id => (id.includes('soccerlive_all') || id.includes('soccer_live_all')) &&
                    !id.includes('_mixed'))
      .sort();
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const cur = this._config.entity || '';
    const inList = cur && this.entities.includes(cur);
    return html`
      <div class="card-config">
        <h3>${this._t("editor.sensor")}</h3>
        <div>
          <label class="field-label">${this._t('editor.entity')}</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${cur}" selected>${cur || '— select —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === cur}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">${this._t('editor.hint_bracket_competitions')}</div>
        </div>

        <h3>${this._t("editor.settings")}</h3>
        <div>
          <label class="field-label">${this._t('editor.style')}</label>
          <select data-config-value="style" @change=${this._selectChanged}>
            <option value="list" ?selected=${this._config.style !== 'tree'}>${this._t('editor.style_list')}</option>
            <option value="tree" ?selected=${this._config.style === 'tree'}>${this._t('editor.style_tree')}</option>
          </select>
        </div>
        <div class="option">
          <label>${this._t('editor.hide_header')}</label>
          <ha-switch
            .checked=${this._config.hide_header === true}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        ${this._config.style !== 'tree' ? html`
          <div class="option">
            <label>${this._t('editor.bracket_compact')}</label>
            <ha-switch
              .checked=${this._config.compact === true}
              data-config-value="compact"
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        ` : ''}
        ${this._config.style === 'tree' ? html`
          <div class="option">
            <label>${this._t('editor.tree_playoffs')}</label>
            <ha-switch
              .checked=${this._config.tree_show_playoffs === true}
              data-config-value="tree_show_playoffs"
              @change=${this._switchChanged}
            ></ha-switch>
          </div>
        ` : ''}
        <div>
          <label class="field-label">${this._t('editor.my_team')}</label>
          <input type="text"
            data-config-value="my_team"
            .value=${this._config.my_team || ''}
            placeholder="${this._t('editor.my_team_hint')}"
            @change=${this._textChanged}
          >
        </div>
        <div>
          <label class="field-label">${this._t('editor.groups_entity')}</label>
          <select data-config-value="groups_entity" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.groups_entity}>— None —</option>
            ${this.standingsEntities.map(e => html`<option value="${e}" ?selected=${e === this._config.groups_entity}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top:4px">${this._t('editor.hint_groups_entity')}</div>
        </div>
        <div>
          <label class="field-label">${this._t('editor.matches_entity')}</label>
          <select data-config-value="matches_entity" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.matches_entity}>— None —</option>
            ${this.matchesEntities.map(e => html`<option value="${e}" ?selected=${e === this._config.matches_entity}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top:4px">${this._t('editor.hint_matches_entity')}</div>
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

if (!customElements.get('soccer-live-bracket-editor')) {
  customElements.define('soccer-live-bracket-editor', SoccerLiveBracketEditor);
}
