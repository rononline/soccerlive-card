import { LitElement, html, css } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles } from '../card-shell.js';
import { displayCompetitionName } from '../shared-competition.js';
import { rankScorers } from '../shared-scorers.js';

class SoccerLiveScorersCard extends LitElement {
  static get properties() {
    return {
      hass:       {},
      _config:    {},
      _isLoading: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._loadingTimer);
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') && this.hass && this._config) {
      const stateObj = this.hass.states[this._config.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      }
    }
  }

  _t(key) {
    return t(key, resolveLang(this.hass, this._config));
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    let attrs = null;
    if (!stateObj) {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.scorers) attrs = cached.data;
      else return renderCardError('⚠️', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.scorers) attrs = cached.data;
      else return renderCardError('📡', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else if (stateObj.state === 'Not available') {
      return renderInfoState('📊', this._t('ui.endpoint_unsupported'), this._t('ui.endpoint_unsupported_hint'), '');
    } else {
      attrs = stateObj.attributes;
    }

    if (this._isLoading && !attrs) return renderLoading(this._t('ui.loading'));
    return this._renderCard(attrs || {});
  }

  _renderCard(attrs) {
    const ranking = ['assists', 'yellow_cards', 'red_cards'].includes(this._config.ranking)
      ? this._config.ranking : 'goals';
    const max = this._config.max_items ?? 10;
    const hideHeader = this._config.hide_header === true;
    // Assists use the real top-assists ranking (a separate sensor attribute),
    // not the top scorers re-sorted by their assists.
    const source = ranking === 'assists' ? (attrs.assists || []) : (attrs.scorers || []);
    const visible = rankScorers(source, ranking).slice(0, max);

    if (!visible.length) {
      return renderInfoState('🥇', this._t('scorers.empty'), '', '');
    }

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
        ${!hideHeader ? renderSoccerHeader({
          logo: attrs.league_logo,
          title: displayCompetitionName(attrs.league_name, resolveLang(this.hass, this._config)) || this._t(ranking === 'assists' ? 'card.assists' : 'card.scorers'),
          badge: renderSoccerBadge(`${visible.length}`, 'neutral'),
          fallbackIcon: '🥇',
        }) : ''}
        <div class="slc-list">
          ${visible.map((s, i) => html`
            <div class="slc-row ${i % 2 === 0 ? 'even' : ''}">
              <span class="slc-rank">${s.rank ?? i + 1}</span>
              ${s.headshot
                ? html`<img class="slc-headshot" src="${s.headshot}" alt="" @error="${e => e.target.style.display='none'}">`
                : html`<div class="slc-headshot placeholder"></div>`}
              <div class="slc-info">
                <span class="slc-name">${s.player || s.short_name || '—'}</span>
                <span class="slc-team">${s.team_name || ''}</span>
              </div>
              ${s.team_logo
                ? html`<img class="slc-team-logo" src="${s.team_logo}" alt="" @error="${e => e.target.style.display='none'}">`
                : ''}
              <span class="slc-goals">${s.value}</span>
            </div>
          `)}
        </div>
        </div>
      </ha-card>
    `;
  }

  static getConfigElement() {
    return document.createElement('soccer-live-scorers-editor');
  }

  static getStubConfig() {
    return { entity: '', max_items: 10 };
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
      ha-card {
        background: var(--cl-bg); color: var(--cl-text);
        border-radius: 20px; overflow: hidden; padding: 0;
      }
      .slc-list { padding: 4px 0; }
      .slc-row {
        display: flex; align-items: center; gap: 10px;
        padding: 8px 16px; font-size: 13px;
      }
      .slc-row.even { background: rgba(255,255,255,0.02); }
      .slc-rank {
        min-width: 20px; text-align: center;
        font-weight: 700; color: var(--cl-text-2, #94a3b8); font-size: 12px;
      }
      .slc-headshot {
        width: 32px; height: 32px; border-radius: 50%;
        object-fit: cover; flex-shrink: 0;
        background: var(--cl-surface, rgba(255,255,255,0.05));
      }
      .slc-headshot.placeholder { background: var(--cl-surface, rgba(255,255,255,0.05)); }
      .slc-info {
        flex: 1; min-width: 0;
        display: flex; flex-direction: column; gap: 2px;
      }
      .slc-name {
        font-weight: 600; white-space: nowrap;
        overflow: hidden; text-overflow: ellipsis;
      }
      .slc-team {
        font-size: 11px; color: var(--cl-text-2, #94a3b8);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .slc-team-logo { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .slc-goals {
        font-weight: 800; font-size: 16px;
        color: var(--cl-accent, #6366f1);
        min-width: 28px; text-align: right;
      }
    `];
  }
}

if (!customElements.get('soccer-live-scorers')) {
  customElements.define('soccer-live-scorers', SoccerLiveScorersCard);
}
