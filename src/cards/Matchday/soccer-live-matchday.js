import { LitElement, html, css } from 'lit';
import { t, resolveLang, formatMatchDate } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { soccerCardShellStyles } from '../card-shell.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { readinessStyles, renderReadiness } from '../shared-readiness.js';

class SoccerLiveMatchdayCard extends LitElement {
  static properties = { hass: {}, _config: {} };

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
  }

  static getConfigElement() { return document.createElement('soccer-live-insights-editor'); }
  static getStubConfig() { return { entity: 'sensor.soccer_live_', card_type: 'matchday' }; }
  getCardSize() { return 4; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const state = this.hass.states[this._config.entity];
    if (!state) return renderCardError('!', this._t('ui.entity_not_found'), this._config.entity, this._t('ui.check_entity_config'));
    const attrs = state.attributes || {};
    const summary = attrs.matchday;
    const matches = summary?.matches || attrs.matches || [];
    if (!matches.length) return renderInfoState('📅', this._t('matchday.empty'), this._t('matchday.empty_hint'), '');
    const phase = summary?.phase || (matches.some(m => m.state === 'in') ? 'live' : matches.some(m => m.state === 'pre') ? 'upcoming' : 'finished');
    const focus = matches.find(match => String(match.event_id) === String(summary?.focus_event_id))
      || matches.find(match => match.state === 'pre');
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <main>
          <header>
            <div><small>${this._t('card.matchday')}</small><h2>${summary?.competition || matches[0]?.competition_name || matches[0]?.league_name || ''}</h2></div>
            <span class=${phase}>${this._t(`matchday.${phase}`)}</span>
          </header>
          <div class="counters">
            <b>${summary?.total ?? matches.length}<small>${this._t('matchday.matches')}</small></b>
            <b>${summary?.live ?? matches.filter(m => m.state === 'in').length}<small>${this._t('matchday.live')}</small></b>
            <b>${summary?.upcoming ?? matches.filter(m => m.state === 'pre').length}<small>${this._t('matchday.upcoming')}</small></b>
          </div>
          ${renderReadiness(focus, key => this._t(key), { compact: true })}
          <section>
            ${matches.map(match => html`
              <article class=${match.state || ''}>
                <time>${formatMatchDate(match.date, resolveLang(this.hass, this._config))}</time>
                <div><span>${match.home_team}</span><span>${match.away_team}</span></div>
                <strong>${match.state === 'pre' ? (match.date || '').slice(-5) : `${match.home_score ?? '-'}–${match.away_score ?? '-'}`}</strong>
                ${match.data_completeness ? html`<i title=${this._t('quality.completeness')}>${match.data_completeness.score}%</i>` : ''}
              </article>
            `)}
          </section>
        </main>
      </ha-card>
    `;
  }

  static styles = [skinStyles, soccerCardShellStyles, readinessStyles, css`
    ha-card{position:relative;overflow:hidden;border-radius:20px;background:var(--cl-bg);color:var(--cl-text)}
    main{position:relative;z-index:1;padding:16px} header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
    header small{color:var(--cl-text-2);font-weight:800;text-transform:uppercase;letter-spacing:.08em}h2{margin:3px 0 0;font-size:17px}
    header>span{padding:5px 9px;border-radius:99px;background:var(--cl-chip-bg);color:var(--cl-accent);font-size:10px;font-weight:900;text-transform:uppercase}
    header>span.live{color:var(--cl-live)}.counters{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:12px}
    .counters b{padding:9px;text-align:center;border:1px solid var(--cl-divider);border-radius:10px;background:var(--cl-surface);font-size:17px;color:var(--cl-accent)}
    .counters small{display:block;margin-top:2px;color:var(--cl-text-2);font-size:8px;text-transform:uppercase}
    section{margin-top:10px;border-top:1px solid var(--cl-divider)}article{display:grid;grid-template-columns:55px 1fr auto auto;gap:8px;align-items:center;padding:10px 2px;border-bottom:1px solid var(--cl-divider)}
    article time{font-size:9px;color:var(--cl-text-2)}article div{display:grid;gap:3px;font-size:11px}article strong{font-size:13px}article.live strong{color:var(--cl-live)}
    article i{min-width:28px;padding:3px;border-radius:6px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:8px;font-style:normal;text-align:center}
    @media(max-width:380px){article{grid-template-columns:45px 1fr auto}article i{display:none}}
  `];
}

if (!customElements.get('soccer-live-matchday')) customElements.define('soccer-live-matchday', SoccerLiveMatchdayCard);
