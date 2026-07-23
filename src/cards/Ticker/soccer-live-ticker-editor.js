import { LitElement, html, css } from "lit";
import { renderSkinControls } from '../skin-editor.js';
import { editorStyles } from '../editor-helper.js';
import { t, resolveLang } from '../../i18n.js';

class SoccerLiveTickerEditor extends LitElement {
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
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      select, input:not([type=checkbox]) {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      .toggle-row {
        display: flex; align-items: center; gap: 10px;
        font-size: 14px; cursor: pointer;
      }
      .toggle-row input[type=checkbox] {
        width: 16px; height: 16px; cursor: pointer; flex-shrink: 0;
      }
    `];
  }

  setConfig(config) { this._config = { ...config }; }

  updated(changed) {
    if (changed.has("hass")) this._fetchEntities();
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.includes("soccer_live") || id.includes("soccerlive"))
      .sort();
  }

  _fire(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config },
      bubbles: true,
      composed: true,
    }));
    this.requestUpdate();
  }

  _entityChanged(ev) { this._fire({ ...this._config, entity: ev.target.value }); }
  _selectChanged(ev) { this._fire({ ...this._config, [ev.target.dataset.configValue]: ev.target.value }); }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  render() {
    if (!this._config) return html``;
    return html`
      <div class="card-config">
        <label>${this._t('editor.entity')}</label>
        <select @change=${this._entityChanged}>
          <option value="">— ${this._t('editor.select_entity')} —</option>
          ${this.entities.map(e => html`
            <option value="${e}" ?selected=${this._config.entity === e}>${e}</option>
          `)}
        </select>

        <label>${this._t('editor.show')}</label>
        <select data-config-value="filter" @change=${this._selectChanged}>
          <option value="" ?selected=${!this._config.filter}>${this._t('editor.all_matches')}</option>
          <option value="live" ?selected=${this._config.filter === 'live'}>${this._t('editor.live_only')}</option>
        </select>

        <label>${this._t('editor.competition_filter_optional')}</label>
        <input type="text"
          .value=${this._config.competition_filter || ''}
          placeholder=${this._t('editor.competition_filter_example')}
          @change=${e => {
            const v = e.target.value.trim();
            const cfg = { ...this._config };
            if (v) cfg.competition_filter = v; else delete cfg.competition_filter;
            this._fire(cfg);
          }}>

        <label class="toggle-row">
          <input type="checkbox" ?checked=${!!this._config.hide_when_empty}
            @change=${e => this._fire({ ...this._config, hide_when_empty: e.target.checked })}>
          ${this._t('editor.hide_when_empty')}
        </label>

        <label class="toggle-row">
          <input type="checkbox" ?checked=${!!this._config.auto_scroll}
            @change=${e => this._fire({ ...this._config, auto_scroll: e.target.checked })}>
          ${this._t('editor.auto_scroll')}
        </label>

        ${this._config.auto_scroll ? html`
          <label>${this._t('editor.scroll_speed')}</label>
          <select data-config-value="scroll_speed" @change=${this._selectChanged}>
            <option value="slow"   ?selected=${this._config.scroll_speed === 'slow'}>${this._t('editor.speed_slow')}</option>
            <option value="normal" ?selected=${!this._config.scroll_speed || this._config.scroll_speed === 'normal'}>${this._t('editor.speed_normal')}</option>
            <option value="fast"   ?selected=${this._config.scroll_speed === 'fast'}>${this._t('editor.speed_fast')}</option>
          </select>
        ` : ''}

        ${renderSkinControls(this, this._config, (k) => (this._t ? this._t(k) : k))}
      </div>
    `;
  }
}

if (!customElements.get("soccer-live-ticker-editor")) {
  customElements.define("soccer-live-ticker-editor", SoccerLiveTickerEditor);
}
