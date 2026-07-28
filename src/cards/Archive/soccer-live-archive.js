import { LitElement, html, css } from 'lit';
import { t, resolveLang, formatDateOnly } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { soccerCardShellStyles } from '../card-shell.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { archiveModel, archiveResult } from '../shared-archive-model.js';

class SoccerLiveArchiveCard extends LitElement {
  static properties = {
    hass: {},
    _config: {},
    _season: { type: String },
    _competition: { type: String },
    _notice: { type: String },
  };

  constructor() {
    super();
    this._season = '';
    this._competition = '';
    this._notice = '';
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
  }

  static getConfigElement() { return document.createElement('soccer-live-insights-editor'); }
  static getStubConfig() { return { entity: 'sensor.soccer_live_', card_type: 'archive' }; }
  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  _team(matches, attrs) {
    if (this._config.team_name || attrs.team_name) return this._config.team_name || attrs.team_name;
    const counts = {};
    matches.forEach(m => [m.home_team, m.away_team].filter(Boolean).forEach(name => counts[name] = (counts[name] || 0) + 1));
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || '';
  }

  async _copyArchive(matches) {
    try {
      await navigator.clipboard.writeText(JSON.stringify({ version: 1, matches }, null, 2));
      this._notice = this._t('archive.copied');
    } catch (_) {
      this._notice = this._t('archive.copy_failed');
    }
  }

  async _callArchiveService(service, attrs) {
    if (!this.hass?.callService) return;
    await this.hass.callService('soccer_live', service, {
      ...(attrs.config_entry_id ? { config_entry_id: attrs.config_entry_id } : {}),
    });
    this._notice = this._t(`archive.${service === 'rebuild_match_archive' ? 'rebuilt' : 'cleared'}`);
  }

  async _clearArchive(attrs) {
    if (!window.confirm(this._t('archive.clear_confirm'))) return;
    await this._callArchiveService('clear_match_archive', attrs);
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const state = this.hass.states[this._config.entity];
    if (!state) return renderCardError('!', this._t('ui.entity_not_found'), this._config.entity, this._t('ui.check_entity_config'));
    const attrs = state.attributes || {};
    const allMatches = attrs.match_archive || [];
    if (!allMatches.length) return renderInfoState('🗄️', this._t('archive.empty'), this._t('archive.empty_hint'), '');
    const team = this._team(allMatches, attrs);
    const model = archiveModel(allMatches, team, this._season, this._competition);
    const matches = model.matches.slice(0, Number(this._config.max_matches || 20));
    const stats = model.stats;
    const result = match => archiveResult(match, team)?.code || 'd';
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header><div><small>${this._t('card.archive')}</small><h2>${this._config.title || this._t('archive.personal')}</h2></div><b>${model.matches.length}</b></header>
          <div class="filters">
            <label>${this._t('archive.season')}<select @change=${event => { this._season = event.target.value; }}>
              <option value="">${this._t('archive.all_seasons')}</option>
              ${model.seasons.map(season => html`<option value=${season} ?selected=${season === this._season}>${season}</option>`)}
            </select></label>
            <label>${this._t('archive.competition')}<select @change=${event => { this._competition = event.target.value; }}>
              <option value="">${this._t('archive.all_competitions')}</option>
              ${model.competitions.map(competition => html`<option value=${competition} ?selected=${competition === this._competition}>${competition}</option>`)}
            </select></label>
          </div>
          <div class="summary"><span class="w">${stats.won} ${this._t('archive.won')}</span><span class="d">${stats.drawn} ${this._t('archive.drawn')}</span><span class="l">${stats.lost} ${this._t('archive.lost')}</span><span>${stats.win_percentage}%</span></div>
          ${this._config.show_archive_stats !== false ? html`<div class="stats">
            <span><b>${stats.goals_for}–${stats.goals_against}</b><small>${this._t('archive.goals')}</small></span>
            <span><b>${stats.clean_sheets}</b><small>${this._t('archive.clean_sheets')}</small></span>
            <span><b>${stats.longest_unbeaten}</b><small>${this._t('archive.unbeaten')}</small></span>
            <span><b>${stats.longest_winning}</b><small>${this._t('archive.winning_streak')}</small></span>
          </div>` : ''}
          <div class="actions">
            <button @click=${() => this._copyArchive(allMatches)}>⧉ ${this._t('archive.copy')}</button>
            ${attrs.config_entry_id ? html`
              <button @click=${() => this._callArchiveService('rebuild_match_archive', attrs)}>↻ ${this._t('archive.rebuild')}</button>
              <button class="danger" @click=${() => this._clearArchive(attrs)}>× ${this._t('archive.clear')}</button>
            ` : ''}
          </div>
          ${this._notice ? html`<p class="notice">${this._notice}</p>` : ''}
          <section>${matches.map(match => html`
            <article>
              <time>${formatDateOnly(match.date || match.date_iso, resolveLang(this.hass, this._config))}</time>
              <div><span>${match.home_team}</span><span>${match.away_team}</span></div>
              <strong class=${result(match)}>${match.home_score ?? '-'}–${match.away_score ?? '-'}</strong>
              <small>${match.competition_name || match.league_name || match.provider || ''}</small>
            </article>
          `)}</section>
        </main>
      </ha-card>
    `;
  }

  static styles = [skinStyles, soccerCardShellStyles, css`
    ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}main{position:relative;z-index:1;padding:16px}
    header{display:flex;justify-content:space-between;align-items:center}header small{color:var(--cl-text-2);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}
    header b{display:grid;place-items:center;min-width:32px;height:32px;border-radius:50%;background:var(--cl-accent-soft);color:var(--cl-accent)}
    .filters{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:12px 0}.filters label{display:grid;gap:3px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.filters select{min-width:0;padding:7px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-surface);color:var(--cl-text);font-size:9px}
    .summary{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.summary span{padding:5px 8px;border-radius:8px;background:var(--cl-chip-bg);font-size:9px;font-weight:800}.w{color:var(--cl-green)}.l{color:var(--cl-live)}.d{color:var(--cl-text-2)}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}.stats span{padding:7px 4px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);text-align:center}.stats b{display:block;color:var(--cl-accent);font-size:13px}.stats small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}
    .actions{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.actions button{padding:6px 8px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font:inherit;font-size:8px;cursor:pointer}.actions button.danger{color:var(--cl-live)}.notice{margin:4px 0 8px;color:var(--cl-accent);font-size:8px}
    section{border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:48px 1fr auto;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider)}
    article time,article small{font-size:8px;color:var(--cl-text-2)}article div{display:grid;gap:2px;font-size:10px}article strong{font-size:12px}article small{grid-column:2/4}
    @media(max-width:380px){.stats{grid-template-columns:repeat(2,1fr)}}
  `];
}

if (!customElements.get('soccer-live-archive')) customElements.define('soccer-live-archive', SoccerLiveArchiveCard);
