import { LitElement, html, css } from 'lit';
import { t, resolveLang, formatDateOnly } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { soccerCardShellStyles } from '../card-shell.js';
import { renderCardError } from '../card-error.js';
import {
  archiveMatchesFromState,
  archiveModel,
  archiveResult,
  normalizeArchiveMatch,
} from '../shared-archive-model.js';

class SoccerLiveArchiveCard extends LitElement {
  static properties = {
    hass: {},
    _config: {},
    _season: { type: String },
    _competition: { type: String },
    _notice: { type: String },
    _location: { type: String },
    _result: { type: String },
    _opponent: { type: String },
  };

  constructor() {
    super();
    this._season = '';
    this._competition = '';
    this._notice = '';
    this._location = '';
    this._result = '';
    this._opponent = '';
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
      await navigator.clipboard.writeText(JSON.stringify({
        schema: 'soccer_live.archive.v1', version: 1, matches,
      }, null, 2));
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

  async _importArchive(attrs) {
    try {
      const archive = await navigator.clipboard.readText();
      if (!archive) throw new Error('empty');
      await this.hass.callService('soccer_live', 'import_match_archive', {
        ...(attrs.config_entry_id ? { config_entry_id: attrs.config_entry_id } : {}),
        archive,
      });
      this._notice = this._t('archive.imported');
    } catch (_) {
      this._notice = this._t('archive.import_failed');
    }
  }

  _archiveMatches(attrs) {
    const primary = Array.isArray(attrs.match_archive) ? attrs.match_archive : [];
    const externalState = this._config.archive_entity
      ? this.hass.states[this._config.archive_entity]
      : null;
    const external = archiveMatchesFromState(externalState);
    const byId = new Map();
    [...primary, ...(Array.isArray(external) ? external : [])].forEach(rawMatch => {
      const match = normalizeArchiveMatch(rawMatch);
      if (!match || !match.home_team || !match.away_team) return;
      const key = String(match.event_id || [
        match.date_iso || match.date,
        match.home_team,
        match.away_team,
      ].join('|'));
      if (!byId.has(key)) byId.set(key, match);
    });
    return [...byId.values()].sort((a, b) =>
      String(b.date_iso || b.date || '').localeCompare(String(a.date_iso || a.date || '')));
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const state = this.hass.states[this._config.entity];
    if (!state) return renderCardError('!', this._t('ui.entity_not_found'), this._config.entity, this._t('ui.check_entity_config'));
    const attrs = state.attributes || {};
    const allMatches = this._archiveMatches(attrs);
    const team = this._team(allMatches, attrs);
    const model = archiveModel(allMatches, team, this._season, this._competition, {
      location: this._location,
      result: this._result,
      opponent: this._opponent,
    });
    const matches = model.matches.slice(0, Number(this._config.max_matches || 20));
    const stats = model.stats;
    const result = match => archiveResult(match, team)?.code || 'd';
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header><div><small>${this._t('card.archive')}</small><h2>${this._config.title || this._t('archive.personal')}</h2></div><b>${model.matches.length}</b></header>
          ${allMatches.length ? html`<div class="filters">
            <label>${this._t('archive.season')}<select @change=${event => { this._season = event.target.value; }}>
              <option value="">${this._t('archive.all_seasons')}</option>
              ${model.seasons.map(season => html`<option value=${season} ?selected=${season === this._season}>${season}</option>`)}
            </select></label>
            <label>${this._t('archive.competition')}<select @change=${event => { this._competition = event.target.value; }}>
              <option value="">${this._t('archive.all_competitions')}</option>
              ${model.competitions.map(competition => html`<option value=${competition} ?selected=${competition === this._competition}>${competition}</option>`)}
            </select></label>
            <label>${this._t('archive.location')}<select @change=${event => { this._location = event.target.value; }}>
              <option value="">${this._t('archive.all_locations')}</option>
              <option value="home" ?selected=${this._location === 'home'}>${this._t('archive.home')}</option>
              <option value="away" ?selected=${this._location === 'away'}>${this._t('archive.away')}</option>
            </select></label>
            <label>${this._t('archive.result')}<select @change=${event => { this._result = event.target.value; }}>
              <option value="">${this._t('archive.all_results')}</option>
              <option value="w" ?selected=${this._result === 'w'}>${this._t('archive.won')}</option>
              <option value="d" ?selected=${this._result === 'd'}>${this._t('archive.drawn')}</option>
              <option value="l" ?selected=${this._result === 'l'}>${this._t('archive.lost')}</option>
            </select></label>
            <label class="opponent">${this._t('archive.opponent')}<input .value=${this._opponent} @input=${event => { this._opponent = event.target.value; }}></label>
          </div>
          <div class="summary"><span class="w">${stats.won} ${this._t('archive.won')}</span><span class="d">${stats.drawn} ${this._t('archive.drawn')}</span><span class="l">${stats.lost} ${this._t('archive.lost')}</span><span>${stats.win_percentage}%</span></div>` : ''}
          ${this._config.show_archive_stats !== false ? html`<div class="stats">
            <span><b>${stats.goals_for}–${stats.goals_against}</b><small>${this._t('archive.goals')}</small></span>
            <span><b>${stats.clean_sheets}</b><small>${this._t('archive.clean_sheets')}</small></span>
            <span><b>${stats.longest_unbeaten}</b><small>${this._t('archive.unbeaten')}</small></span>
            <span><b>${stats.longest_winning}</b><small>${this._t('archive.winning_streak')}</small></span>
          </div>` : ''}
          ${model.monthly.length > 1 ? html`<div class="trend" aria-label=${this._t('archive.monthly_form')}>
            ${model.monthly.map(month => {
              const total = Math.max(1, month.matches * 3);
              const points = month.won * 3 + month.drawn;
              return html`<span title="${month.month}: ${points}/${total}"><i style="height:${Math.max(8, Math.round((points / total) * 100))}%"></i><small>${month.month.slice(5)}</small></span>`;
            })}
          </div>` : ''}
          ${model.seasonComparison.length > 1 ? html`<div class="season-compare">
            ${model.seasonComparison.map(item => html`<span><b>${item.season}</b><small>${item.win_percentage}% · ${item.goals_for}–${item.goals_against}</small></span>`)}
          </div>` : ''}
          ${this._config.show_season_report !== false && model.stats.matches ? html`
            <div class="report-grid">
              ${model.homeAway.map(item => html`<span><small>${this._t(`archive.${item.location}`)}</small><b>${item.win_percentage}%</b><em>${item.won}-${item.drawn}-${item.lost}</em></span>`)}
              ${model.biggestWin ? html`<span><small>${this._t('archive.biggest_win')}</small><b>${model.biggestWin.result.own}–${model.biggestWin.result.other}</b><em>${model.biggestWin.result.opponent}</em></span>` : ''}
              ${model.biggestLoss ? html`<span><small>${this._t('archive.biggest_loss')}</small><b>${model.biggestLoss.result.own}–${model.biggestLoss.result.other}</b><em>${model.biggestLoss.result.opponent}</em></span>` : ''}
            </div>
            ${model.commonOpponents.length ? html`<div class="opponents"><small>${this._t('archive.common_opponents')}</small>${model.commonOpponents.slice(0, 5).map(item => html`<span>${item.name}<b>${item.matches}</b></span>`)}</div>` : ''}
          ` : ''}
          <div class="actions">
            <button @click=${() => this._copyArchive(allMatches)}>⧉ ${this._t('archive.copy')}</button>
            ${attrs.config_entry_id ? html`
              <button @click=${() => this._importArchive(attrs)}>⇩ ${this._t('archive.import')}</button>
              <button @click=${() => this._callArchiveService('rebuild_match_archive', attrs)}>↻ ${this._t('archive.rebuild')}</button>
              <button class="danger" @click=${() => this._clearArchive(attrs)}>× ${this._t('archive.clear')}</button>
            ` : ''}
          </div>
          ${this._notice ? html`<p class="notice">${this._notice}</p>` : ''}
          ${!allMatches.length ? html`<div class="empty"><b>🗄️ ${this._t('archive.empty')}</b><small>${this._t('archive.empty_hint')}</small></div>` : ''}
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
    .filters{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:12px 0}.filters label{display:grid;gap:3px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}.filters select,.filters input{box-sizing:border-box;min-width:0;width:100%;padding:7px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-surface);color:var(--cl-text);font-size:9px}.filters .opponent{grid-column:1/3}
    .summary{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0}.summary span{padding:5px 8px;border-radius:8px;background:var(--cl-chip-bg);font-size:9px;font-weight:800}.w{color:var(--cl-green)}.l{color:var(--cl-live)}.d{color:var(--cl-text-2)}
    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:10px}.stats span{padding:7px 4px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface);text-align:center}.stats b{display:block;color:var(--cl-accent);font-size:13px}.stats small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}
    .actions{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.actions button{padding:6px 8px;border:1px solid var(--cl-divider);border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font:inherit;font-size:8px;cursor:pointer}.actions button.danger{color:var(--cl-live)}.notice{margin:4px 0 8px;color:var(--cl-accent);font-size:8px}
    .empty{display:grid;gap:5px;padding:18px 10px;text-align:center;color:var(--cl-text-2)}.empty b{color:var(--cl-text);font-size:11px}.empty small{font-size:8px}
    .trend{display:flex;align-items:end;height:58px;gap:5px;margin:10px 0;padding:8px;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface)}.trend span{display:grid;grid-template-rows:1fr auto;align-items:end;flex:1;height:100%;text-align:center}.trend i{display:block;min-height:5px;border-radius:4px 4px 1px 1px;background:linear-gradient(var(--cl-accent),var(--cl-accent-2))}.trend small{font-size:6px;color:var(--cl-text-2)}.season-compare{display:flex;gap:5px;overflow:auto;margin:8px 0}.season-compare span{min-width:86px;padding:7px;border-radius:8px;background:var(--cl-chip-bg)}.season-compare b,.season-compare small{display:block;font-size:8px}.season-compare small{color:var(--cl-text-2);margin-top:2px}
    .report-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:9px 0}.report-grid span{display:grid;grid-template-columns:1fr auto;gap:2px;padding:8px;border:1px solid var(--cl-divider);border-radius:9px;background:var(--cl-surface)}.report-grid small{color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.report-grid b{color:var(--cl-accent);font-size:12px}.report-grid em{grid-column:1/-1;color:var(--cl-text-2);font-size:8px;font-style:normal}.opponents{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}.opponents>small{width:100%;color:var(--cl-text-2);font-size:7px;text-transform:uppercase}.opponents span{padding:5px 7px;border-radius:99px;background:var(--cl-chip-bg);font-size:8px}.opponents b{margin-left:5px;color:var(--cl-accent)}
    section{border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:48px 1fr auto;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider)}
    article time,article small{font-size:8px;color:var(--cl-text-2)}article div{display:grid;gap:2px;font-size:10px}article strong{font-size:12px}article small{grid-column:2/4}
    @media(max-width:380px){.stats{grid-template-columns:repeat(2,1fr)}}
  `];
}

if (!customElements.get('soccer-live-archive')) customElements.define('soccer-live-archive', SoccerLiveArchiveCard);
