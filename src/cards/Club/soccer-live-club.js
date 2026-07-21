import { LitElement, html, css } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState, renderSyncStatus } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader } from '../shared-header.js';
import { soccerCardShellStyles } from '../card-shell.js';
import {
  hasClubContent,
  groupSquad,
  collapseGroups,
  visibleTransfers,
  filterTransfers,
  countTransfers,
  transferCounterparty,
  formatTransferDate,
} from '../shared-club-model.js';

class SoccerLiveClubCard extends LitElement {
  static get properties() {
    return {
      hass: {}, _config: {}, _isLoading: { type: Boolean },
      _squadExpanded: { type: Boolean }, _transferFilter: { type: String },
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    if (this._squadExpanded === undefined) this._squadExpanded = false;
    if (this._transferFilter === undefined) this._transferFilter = 'all';
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

  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading('Loading...');
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    let attrs = null;
    if (!stateObj) {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.club) attrs = cached.data;
      else return renderCardError('⚠️', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.club) attrs = cached.data;
      else return renderCardError('📡', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else {
      attrs = stateObj.attributes;
    }

    const club = attrs?.club;
    if (!hasClubContent(club)) {
      if (this._isLoading && !attrs) return renderLoading(this._t('ui.loading'));
      const syncState = attrs && renderSyncStatus(attrs.sync_status, this._t);
      if (syncState) return syncState;
      return renderInfoState('🏟️', this._t('club.empty'), this._t('club.empty_hint'), '');
    }
    return this._renderCard(club);
  }

  _renderCard(club) {
    const profile = club.profile || {};
    const hideHeader = this._config.hide_header === true;
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
          ${!hideHeader ? renderSoccerHeader({
            logo: profile.logo,
            title: profile.name || this._t('card.club'),
            fallbackIcon: '🏟️',
          }) : ''}
          ${this._renderProfile(profile, club.coach)}
          ${this._config.show_squad !== false ? this._renderSquad(club.squad || []) : ''}
          ${this._config.show_transfers !== false ? this._renderTransfers(club.transfers || []) : ''}
          <div class="clb-note">${this._t('club.cache_note')}</div>
        </div>
      </ha-card>
    `;
  }

  _renderProfile(profile, coach) {
    const chip = (icon, text) => text ? html`<span class="clb-chip"><span class="clb-ic">${icon}</span>${text}</span>` : '';
    const venue = profile.venue
      ? `${profile.venue}${profile.venue_city ? ` · ${profile.venue_city}` : ''}`
      : '';
    if (!venue && !profile.founded && !coach) return '';
    return html`
      <div class="clb-profile">
        ${chip('🏟️', venue)}
        ${chip('📅', profile.founded ? this._t('club.founded', { year: profile.founded }) : '')}
        ${chip('👤', coach || '')}
      </div>
    `;
  }

  _renderSquad(squad) {
    const allGroups = groupSquad(squad);
    if (!allGroups.length) return '';
    // Collapsed by default to keep the card short: first N players per position,
    // with an expand toggle. `squad_collapsed: false` shows everyone up front.
    const perPos = this._config.squad_collapsed === false ? 0 : (this._config.squad_preview ?? 3);
    const { groups, hidden } = this._squadExpanded
      ? { groups: allGroups, hidden: 0 }
      : collapseGroups(allGroups, perPos);
    const collapsedHidden = this._squadExpanded ? 0 : collapseGroups(allGroups, perPos).hidden;
    return html`
      <div class="clb-section">
        <div class="clb-title">${this._t('club.squad')}</div>
        ${groups.map(({ key, players }) => {
          return html`
            <div class="clb-pos-group">
              <div class="clb-pos">${this._t(key)}</div>
              ${players.map(p => html`
                <div class="clb-player">
                  <span class="clb-num">${p.number ?? '·'}</span>
                  <span class="clb-pname">${p.name}</span>
                  ${p.age != null ? html`<span class="clb-age">${this._t('club.age', { n: p.age })}</span>` : ''}
                </div>
              `)}
            </div>
          `;
        })}
        ${(collapsedHidden > 0 || this._squadExpanded) && perPos > 0 ? html`
          <button class="clb-more" @click=${() => { this._squadExpanded = !this._squadExpanded; }}>
            ${this._squadExpanded ? this._t('club.show_less') : this._t('club.show_all', { n: collapsedHidden })}
          </button>
        ` : ''}
      </div>
    `;
  }

  _renderTransfers(transfers) {
    const counts = countTransfers(transfers);
    if (!counts.all) return '';
    const filter = ['in', 'out'].includes(this._transferFilter) ? this._transferFilter : 'all';
    const filtered = filterTransfers(transfers, filter);
    const visible = visibleTransfers(filtered, this._config.max_transfers ?? 8);
    const tab = (val, labelKey, count) => html`
      <button class="clb-filter ${filter === val ? 'sel' : ''}" @click=${() => { this._transferFilter = val; }}>
        ${this._t(labelKey)} ${count}
      </button>`;
    return html`
      <div class="clb-section">
        <div class="clb-transfers-head">
          <div class="clb-title">${this._t('club.transfers')}</div>
          ${counts.in && counts.out ? html`
            <div class="clb-filters">
              ${tab('all', 'club.filter_all', counts.all)}
              ${tab('in', 'club.filter_in', counts.in)}
              ${tab('out', 'club.filter_out', counts.out)}
            </div>
          ` : ''}
        </div>
        ${visible.map(tr => html`
          <div class="clb-transfer">
            <span class="clb-dir ${tr.direction}" title="${tr.direction === 'in' ? this._t('club.transfer_in') : this._t('club.transfer_out')}"
                  aria-label="${tr.direction === 'in' ? this._t('club.transfer_in') : this._t('club.transfer_out')}">${tr.direction === 'in' ? '↓' : '↑'}</span>
            <div class="clb-tinfo">
              <span class="clb-tplayer">${tr.player}</span>
              <span class="clb-tclubs">${transferCounterparty(tr)}</span>
            </div>
            <span class="clb-ttype">${tr.type && tr.type !== 'N/A' ? tr.type : ''}</span>
            <span class="clb-tdate">${formatTransferDate(tr.date)}</span>
          </div>
        `)}
      </div>
    `;
  }

  getCardSize() { return 8; }
  static getConfigElement() { return document.createElement('soccer-live-club-editor'); }
  static getStubConfig() { return { entity: 'sensor.soccer_live_next_' }; }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, css`
      .clb-profile { display: flex; flex-wrap: wrap; gap: 8px; padding: 4px 14px 10px; }
      .clb-chip {
        display: inline-flex; align-items: center; gap: 5px;
        font-size: 12px; font-weight: 600; color: var(--cl-text, #e2e8f0);
        background: var(--cl-card-2, rgba(255,255,255,0.03));
        padding: 5px 10px; border-radius: 8px;
      }
      .clb-ic { font-size: 13px; }
      .clb-section { padding: 8px 14px 4px; }
      .clb-title {
        font-size: 10px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.08em; color: var(--cl-text-2, #94a3b8); margin: 8px 0 6px;
      }
      .clb-pos {
        font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;
        color: var(--cl-accent, #6366f1); margin: 8px 0 3px;
      }
      .clb-player { display: flex; align-items: baseline; gap: 8px; padding: 2px 0; font-size: 12px; }
      .clb-num {
        min-width: 20px; text-align: center; font-weight: 800; font-variant-numeric: tabular-nums;
        color: var(--cl-text-2, #94a3b8); font-size: 11px;
      }
      .clb-pname { font-weight: 600; color: var(--cl-text, #e2e8f0); flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .clb-age { font-size: 10px; color: var(--cl-text-2, #94a3b8); }
      .clb-transfer {
        display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 12px;
        border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04));
      }
      .clb-dir { font-size: 14px; font-weight: 900; flex-shrink: 0; width: 14px; text-align: center; }
      .clb-dir.in { color: var(--cl-green, #22c55e); }
      .clb-dir.out { color: var(--cl-live, #ef4444); }
      .clb-tinfo { display: flex; flex-direction: column; flex: 1; min-width: 0; }
      .clb-tplayer { font-weight: 600; color: var(--cl-text, #e2e8f0); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .clb-tclubs { font-size: 10px; color: var(--cl-text-2, #94a3b8); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .clb-ttype { font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8); white-space: nowrap; }
      .clb-tdate { font-size: 10px; color: var(--cl-text-2, #94a3b8); font-variant-numeric: tabular-nums; white-space: nowrap; }
      .clb-more {
        margin: 8px 0 2px; padding: 5px 12px; border-radius: 8px; cursor: pointer;
        border: 1px solid var(--cl-divider, rgba(255,255,255,0.12)); background: transparent;
        color: var(--cl-accent, #6366f1); font-size: 11px; font-weight: 700;
      }
      .clb-transfers-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
      .clb-filters { display: inline-flex; gap: 4px; }
      .clb-filter {
        padding: 3px 8px; border-radius: 6px; cursor: pointer; font-size: 10px; font-weight: 700;
        border: 1px solid var(--cl-divider, rgba(255,255,255,0.12)); background: transparent; color: var(--cl-text-2, #94a3b8);
      }
      .clb-filter.sel { background: var(--cl-accent-soft, rgba(99,102,241,0.12)); color: var(--cl-accent, #6366f1); border-color: var(--cl-accent, #6366f1); }
      .clb-note {
        padding: 8px 14px 12px; font-size: 10px; color: var(--cl-text-2, #94a3b8); opacity: 0.8; text-align: center;
      }
    `];
  }
}

if (!customElements.get('soccer-live-club')) {
  customElements.define('soccer-live-club', SoccerLiveClubCard);
}
