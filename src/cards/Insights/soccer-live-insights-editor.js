import { LitElement, html, css } from 'lit';
import { t, resolveLang } from '../../i18n.js';
import { editorStyles } from '../editor-helper.js';
import { renderSkinControls } from '../skin-editor.js';

class SoccerLiveInsightsEditor extends LitElement {
  static properties = { hass: {}, _config: {}, entities: { type: Array } };

  constructor() {
    super();
    this.entities = [];
  }

  setConfig(config) { this._config = { ...config }; }
  _t(key) { return t(key, resolveLang(this.hass, this._config)); }
  updated(changed) {
    if (changed.has('hass') && this.hass) {
      this.entities = Object.keys(this.hass.states)
        .filter(id => id.includes('soccer_live') || id.includes('soccerlive'))
        .sort();
    }
  }
  _set(key, value) {
    const config = { ...this._config, [key]: value };
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config }, bubbles: true, composed: true }));
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const archive = this._config.card_type === 'archive';
    return html`<div class="card-config">
      <h3>${this._t('editor.sensor')}</h3>
      <label>${this._t('editor.entity')}<select @change=${e => this._set('entity', e.target.value)}>
        ${this.entities.map(id => html`<option value=${id} ?selected=${id === this._config.entity}>${id}</option>`)}
      </select></label>
      <label>${this._t('editor.card_title')}<input .value=${this._config.title || ''} @input=${e => this._set('title', e.target.value)}></label>
      ${archive ? html`
        <label>${this._t('editor.team_name')}<input .value=${this._config.team_name || ''} @input=${e => this._set('team_name', e.target.value)}></label>
        <label>${this._t('editor.max_matches')}<select @change=${e => this._set('max_matches', Number(e.target.value))}>
          ${[10,20,30,50,100].map(n => html`<option value=${n} ?selected=${Number(this._config.max_matches || 20) === n}>${n}</option>`)}
        </select></label>
        <label class="switch"><span>${this._t('editor.show_archive_stats')}</span><ha-switch
          .checked=${this._config.show_archive_stats !== false}
          @change=${event => this._set('show_archive_stats', event.target.checked)}
        ></ha-switch></label>
      ` : ''}
      <h3>${this._t('editor.appearance')}</h3>
      ${renderSkinControls(this, this._config, key => this._t(key))}
    </div>`;
  }

  static styles = [editorStyles, css`
    .card-config{display:flex;flex-direction:column;gap:14px}label{display:grid;gap:5px;font-size:12px}
    select,input{box-sizing:border-box;width:100%;padding:10px;border:1px solid var(--divider-color);border-radius:8px;background:var(--card-background-color);color:var(--primary-text-color)}
    label.switch{display:flex;align-items:center;justify-content:space-between}
  `];
}

if (!customElements.get('soccer-live-insights-editor')) customElements.define('soccer-live-insights-editor', SoccerLiveInsightsEditor);
