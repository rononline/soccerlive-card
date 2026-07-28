import { LitElement, html, css } from 'lit';
import { t, resolveLang, formatDateOnly } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { soccerCardShellStyles } from '../card-shell.js';
import { renderCardError, renderInfoState } from '../card-error.js';

class SoccerLiveArchiveCard extends LitElement {
  static properties = { hass: {}, _config: {} };

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

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const state = this.hass.states[this._config.entity];
    if (!state) return renderCardError('!', this._t('ui.entity_not_found'), this._config.entity, this._t('ui.check_entity_config'));
    const attrs = state.attributes || {};
    const matches = (attrs.match_archive || []).slice(0, Number(this._config.max_matches || 20));
    if (!matches.length) return renderInfoState('🗄️', this._t('archive.empty'), this._t('archive.empty_hint'), '');
    const team = this._team(matches, attrs).toLowerCase();
    const result = match => {
      const homeName = (match.home_team || '').toLowerCase();
      const home = homeName === team || homeName.includes(team) || team.includes(homeName);
      const own = Number(home ? match.home_score : match.away_score);
      const other = Number(home ? match.away_score : match.home_score);
      return own > other ? 'w' : own < other ? 'l' : 'd';
    };
    const stats = matches.reduce((out, match) => ({ ...out, [result(match)]: out[result(match)] + 1 }), { w: 0, d: 0, l: 0 });
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header><div><small>${this._t('card.archive')}</small><h2>${this._config.title || this._t('archive.personal')}</h2></div><b>${matches.length}</b></header>
          <div class="summary"><span class="w">${stats.w} ${this._t('archive.won')}</span><span class="d">${stats.d} ${this._t('archive.drawn')}</span><span class="l">${stats.l} ${this._t('archive.lost')}</span></div>
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
    .summary{display:flex;gap:6px;margin:12px 0}.summary span{padding:5px 8px;border-radius:8px;background:var(--cl-chip-bg);font-size:9px;font-weight:800}.w{color:var(--cl-green)}.l{color:var(--cl-live)}.d{color:var(--cl-text-2)}
    section{border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:48px 1fr auto;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--cl-divider)}
    article time,article small{font-size:8px;color:var(--cl-text-2)}article div{display:grid;gap:2px;font-size:10px}article strong{font-size:12px}article small{grid-column:2/4}
  `];
}

if (!customElements.get('soccer-live-archive')) customElements.define('soccer-live-archive', SoccerLiveArchiveCard);
