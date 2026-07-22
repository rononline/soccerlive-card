import { LitElement, html, css, render } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState, renderSyncStatusOrEmpty } from '../card-error.js';
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
  squadValueSummary,
  matchdaySummary,
  seasonProgress,
  transferSummary,
} from '../shared-club-model.js';

class SoccerLiveClubCard extends LitElement {
  static get properties() {
    return {
      hass: {}, _config: {}, _isLoading: { type: Boolean },
      _squadExpanded: { type: Boolean }, _transferFilter: { type: String },
      _selectedPlayer: { type: Object },
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    if (this._squadExpanded === undefined) this._squadExpanded = false;
    if (this._transferFilter === undefined) this._transferFilter = 'all';
    this._selectedPlayer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._loadingTimer);
    this._removePlayerPortal();
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') && this.hass && this._config) {
      const stateObj = this.hass.states[this._config.entity];
      if (stateObj && stateObj.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      }
    }
    if (changedProperties.has('_selectedPlayer')) {
      if (this._selectedPlayer) this._openPlayerPortal();
      else this._removePlayerPortal();
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
      return renderSyncStatusOrEmpty(attrs, (k) => this._t(k),
        () => renderInfoState('🏟️', this._t('club.empty'), this._t('club.empty_hint'), ''));
    }
    return this._renderCard(club, attrs);
  }

  _renderCard(club, attrs) {
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
          ${this._config.show_matchday !== false ? this._renderMatchday(attrs) : ''}
          ${this._renderDashboard(club, attrs)}
          ${this._config.show_season_progress !== false ? this._renderSeasonProgress(attrs) : ''}
          ${this._config.show_squad !== false ? this._renderSquad(club.squad || []) : ''}
          ${this._config.show_transfers !== false ? this._renderTransfers(club.transfers || []) : ''}
          <div class="clb-note">${this._t('club.cache_note')}</div>
        </div>
      </ha-card>
    `;
  }

  _renderMatchday(attrs) {
    const summary = matchdaySummary(attrs);
    if (!summary) return '';
    const { match, phase } = summary;
    const phaseLabel = this._t(`club.matchday_${phase}`);
    const score = phase === 'pre' ? (match.clock || match.date || '') : `${match.home_score ?? '–'} – ${match.away_score ?? '–'}`;
    const hasLineup = (match.lineup_home?.length || match.lineup_away?.length || match.formation_home || match.formation_away);
    const hasStats = match.has_stats || Object.keys(match.home_statistics || {}).length || Object.keys(match.away_statistics || {}).length;
    return html`<section class="clb-matchday ${phase}">
      <div class="clb-matchday-head"><span>${this._t('club.matchday')}</span><b>${phaseLabel}</b></div>
      <div class="clb-matchday-fixture">
        <span>${match.home_team || ''}</span><strong>${score}</strong><span>${match.away_team || ''}</span>
      </div>
      ${(match.venue || match.status || hasLineup || hasStats) ? html`<div class="clb-matchday-meta">
        ${match.status ? html`<span>${match.status}</span>` : ''}${match.venue ? html`<span>⌖ ${match.venue}</span>` : ''}
        ${hasLineup ? html`<span>✓ ${this._t('tab.lineup')}</span>` : ''}${hasStats ? html`<span>✓ ${this._t('tab.stats')}</span>` : ''}
      </div>` : ''}
    </section>`;
  }

  _renderSeasonProgress(attrs) {
    const progress = seasonProgress(attrs.previous_matches, attrs.team_id, attrs.team_name, this._config.season_progress_matches ?? 12);
    if (!progress.played) return '';
    const maxPoints = Math.max(3, ...progress.rounds.map(round => round.points));
    const points = progress.rounds.map((round, index) => {
      const x = progress.rounds.length === 1 ? 50 : index / (progress.rounds.length - 1) * 100;
      const y = 36 - (round.points / maxPoints * 32);
      return `${x},${y}`;
    }).join(' ');
    return html`<section class="clb-season">
      <div class="clb-section-head"><div><span>${this._t('club.season_progress')}</span><strong>${progress.points} ${this._t('col.points')}</strong></div><small>${progress.played} ${this._t('club.matches_played')}</small></div>
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" role="img" aria-label="${this._t('club.season_progress')}"><polyline points=${points}></polyline>${progress.rounds.map((round, index) => {
        const x = progress.rounds.length === 1 ? 50 : index / (progress.rounds.length - 1) * 100;
        const y = 36 - (round.points / maxPoints * 32);
        return html`<circle class=${round.result.toLowerCase()} cx=${x} cy=${y} r="1.8"><title>${round.opponent}: ${round.result}, ${round.points}</title></circle>`;
      })}</svg>
      <div class="clb-season-stats"><span>${this._t('club.goals_for')} <b>${progress.goalsFor}</b></span><span>${this._t('club.goals_against')} <b>${progress.goalsAgainst}</b></span><span>${this._t('club.goal_difference')} <b>${progress.goalsFor - progress.goalsAgainst > 0 ? '+' : ''}${progress.goalsFor - progress.goalsAgainst}</b></span></div>
    </section>`;
  }

  _renderDashboard(club, attrs) {
    const squad = club.squad || [];
    const injuries = club.injuries || squad.filter(player => player.injured);
    const transfers = club.transfers || [];
    const previous = (attrs.previous_matches || []).slice(-5).reverse();
    const teamId = String(attrs.team_id ?? '');
    const form = previous.map(match => {
      const home = String(match.home_id ?? '') === teamId;
      const ours = Number(home ? match.home_score : match.away_score);
      const theirs = Number(home ? match.away_score : match.home_score);
      return Number.isFinite(ours) && Number.isFinite(theirs) ? (ours > theirs ? 'W' : ours < theirs ? 'L' : 'D') : null;
    }).filter(Boolean);
    const next = attrs.next_match;
    const values = squadValueSummary(squad);
    if (!next && !squad.length && !injuries.length && !transfers.length && !form.length) return '';
    return html`<div class="clb-dashboard">
      ${next ? html`<div class="clb-next"><span>${this._t('club.next_match')}</span><strong>${next.home_team} – ${next.away_team}</strong><small>${next.date || ''}</small></div>` : ''}
      <div class="clb-kpis">
        <div><strong>${squad.length}</strong><span>${this._t('club.squad')}</span></div>
        <div><strong>${injuries.length}</strong><span>${this._t('club.injuries')}</span></div>
        <div><strong>${transfers.length}</strong><span>${this._t('club.transfers')}</span></div>
      </div>
      ${values.total ? html`<div class="clb-market-summary">
        <div><span>${this._t('club.squad_value')}</span><strong>${this._formatValue(values.total)}</strong></div>
        ${values.average_age != null ? html`<div><span>${this._t('club.average_age')}</span><strong>${values.average_age.toFixed(1)}</strong></div>` : ''}
        <small>${this._t('club.valued_players', { n: values.valued_count })}</small>
      </div>` : ''}
      ${values.total ? this._renderMarketDistribution(squad, values) : ''}
      ${form.length ? html`<div class="clb-form"><span>${this._t('team.form')}</span>${form.map(result => html`<b class=${result.toLowerCase()}>${result}</b>`)}</div>` : ''}
    </div>`;
  }

  _renderMarketDistribution(squad, values) {
    const positions = Object.entries(values.by_position || {}).sort((a, b) => b[1] - a[1]);
    const top = [...squad].filter(player => Number(player.market_value) > 0)
      .sort((a, b) => Number(b.market_value) - Number(a.market_value)).slice(0, 3);
    return html`<div class="clb-market-dist">
      ${positions.map(([position, value]) => html`<div class="clb-market-row"><span>${position}</span><i><b style="width:${Math.round(value / values.total * 100)}%"></b></i><strong>${this._formatValue(value)}</strong></div>`)}
      ${top.length ? html`<div class="clb-top-values">${top.map((player, index) => html`<span>${index + 1}. ${player.name}<b>${this._formatValue(player.market_value)}</b></span>`)}</div>` : ''}
    </div>`;
  }

  _renderPlayerDetail() {
    const player = this._selectedPlayer;
    if (!player) return '';
    const item = (label, value) => value !== null && value !== undefined && value !== '' ? html`<div><span>${label}</span><strong>${value}</strong></div>` : '';
    return html`<div class="clb-player-overlay" @click=${event => { if (event.target === event.currentTarget) this._selectedPlayer = null; }}>
      <section class="clb-player-modal"><button @click=${() => { this._selectedPlayer = null; }}>×</button>
        ${player.photo ? html`<img src=${player.photo} alt="">` : ''}<h3>${player.name}</h3><p>${player.position || ''}</p>
        <div class="clb-player-facts">${item(this._t('club.market_value'), player.market_value ? this._formatValue(player.market_value) : '')}
          ${item(this._t('club.age_label'), player.age)}${item(this._t('club.nationality'), player.nationality)}${item(this._t('club.contract_until'), player.contract_until)}
          ${item(this._t('club.appearances'), player.appearances)}${item(this._t('stat.goals'), player.goals)}${item(this._t('stat.assists'), player.assists)}${item(this._t('club.rating'), player.rating)}
        </div>
      </section>
    </div>`;
  }

  _openPlayerPortal() {
    if (!this._selectedPlayer || !document?.body) return;
    if (!this._playerPortal) {
      this._playerPortal = document.createElement('dialog');
      this._playerPortal.className = 'soccer-live-club-player-portal';
      this._onPlayerPortalCancel = event => {
        event.preventDefault();
        this._selectedPlayer = null;
      };
      this._onPlayerPortalClick = event => {
        if (event.target === this._playerPortal) this._selectedPlayer = null;
      };
      this._playerPortal.addEventListener('cancel', this._onPlayerPortalCancel);
      this._playerPortal.addEventListener('click', this._onPlayerPortalClick);
      document.body.appendChild(this._playerPortal);
    }
    this._copyPlayerPortalThemeVars();
    render(html`${this._renderPlayerPortalStyles()}${this._renderPlayerDetail()}`, this._playerPortal);
    if (!this._playerPortal.open) {
      try { this._playerPortal.showModal(); }
      catch (_error) { this._playerPortal.setAttribute('open', ''); }
    }
  }

  _copyPlayerPortalThemeVars() {
    if (!this._playerPortal || typeof getComputedStyle !== 'function') return;
    const styles = getComputedStyle(this);
    [
      '--cl-bg', '--cl-text', '--cl-text-2', '--cl-divider', '--cl-accent',
      '--cl-accent-soft', '--cl-card-2', '--cl-green', '--cl-live',
    ].forEach(name => {
      const value = styles.getPropertyValue(name);
      if (value) this._playerPortal.style.setProperty(name, value);
    });
  }

  _removePlayerPortal() {
    if (!this._playerPortal) return;
    if (this._playerPortal.open && typeof this._playerPortal.close === 'function') {
      try { this._playerPortal.close(); } catch (_error) { /* already closed */ }
    }
    this._playerPortal.removeEventListener('cancel', this._onPlayerPortalCancel);
    this._playerPortal.removeEventListener('click', this._onPlayerPortalClick);
    render(html``, this._playerPortal);
    this._playerPortal.remove();
    this._playerPortal = null;
  }

  _renderPlayerPortalStyles() {
    return html`<style>
      .soccer-live-club-player-portal {
        border: 0; padding: 0; margin: auto; width: 100vw; height: 100vh;
        max-width: none; max-height: none; overflow: hidden; background: transparent;
        color: var(--cl-text, #e2e8f0);
      }
      .soccer-live-club-player-portal::backdrop {
        background: rgba(0,0,0,.72); backdrop-filter: blur(6px);
      }
      .clb-player-overlay { width:100%; height:100%; display:grid; place-items:center; padding:16px; box-sizing:border-box; }
      .clb-player-modal { position:relative; width:min(360px,100%); box-sizing:border-box; padding:22px; border-radius:18px; background:var(--cl-bg,#111827); border:1px solid var(--cl-divider,rgba(255,255,255,.12)); box-shadow:0 24px 60px rgba(0,0,0,.5); text-align:center; }
      .clb-player-modal>button { position:absolute; right:10px; top:8px; border:0; background:transparent; color:var(--cl-text-2,#94a3b8); font-size:24px; cursor:pointer; }
      .clb-player-modal>img { width:84px; height:84px; border-radius:50%; object-fit:cover; background:rgba(255,255,255,.05); }
      .clb-player-modal h3 { margin:8px 0 2px; color:var(--cl-text,#e2e8f0); }
      .clb-player-modal p { margin:0 0 12px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts { display:grid; grid-template-columns:1fr 1fr; gap:7px; text-align:left; }
      .clb-player-facts div { display:flex; flex-direction:column; padding:8px; border-radius:8px; background:rgba(255,255,255,.04); }
      .clb-player-facts span { font-size:9px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts strong { font-size:12px; color:var(--cl-text,#e2e8f0); }
      @media (max-width: 420px) { .clb-player-facts { grid-template-columns:1fr; } }
    </style>`;
  }

  _formatValue(value) {
    if (!Number.isFinite(Number(value))) return '';
    return new Intl.NumberFormat(resolveLang(this.hass, this._config), {
      style: 'currency', currency: 'EUR', notation: 'compact', maximumFractionDigits: 1,
    }).format(Number(value));
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
                <div class="clb-player" role="button" tabindex="0" @click=${() => { this._selectedPlayer = p; }} @keydown=${event => { if (event.key === 'Enter') this._selectedPlayer = p; }}>
                  <span class="clb-num">${p.number ?? '·'}</span>
                  <span class="clb-pname">${p.name}</span>
                  ${p.age != null ? html`<span class="clb-age">${this._t('club.age', { n: p.age })}</span>` : ''}
                  ${p.market_value ? html`<span class="clb-value">${this._formatValue(p.market_value)}</span>` : ''}
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
    const summary = transferSummary(transfers);
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
        ${(summary.feeCoverage || summary.loans || summary.free) ? html`<div class="clb-transfer-summary">
          ${summary.feeCoverage ? html`<div><span>${this._t('club.spent')}</span><b>${this._formatValue(summary.spent)}</b></div><div><span>${this._t('club.income')}</span><b>${this._formatValue(summary.income)}</b></div><div><span>${this._t('club.balance')}</span><b class=${summary.balance >= 0 ? 'positive' : 'negative'}>${summary.balance > 0 ? '+' : ''}${this._formatValue(summary.balance)}</b></div>` : ''}
          ${summary.loans ? html`<small>${this._t('club.loans')}: ${summary.loans}</small>` : ''}${summary.free ? html`<small>${this._t('club.free_transfers')}: ${summary.free}</small>` : ''}
        </div>` : ''}
        ${Object.keys(summary.windows).length > 1 ? html`<div class="clb-windows">${Object.entries(summary.windows).sort().reverse().map(([window, count]) => {
          const [year, period] = window.split('-');
          return html`<span>${this._t(`club.${period}_window`)} ${year}<b>${count}</b></span>`;
        })}</div>` : ''}
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
      .clb-matchday{margin:2px 14px 10px;padding:11px;border:1px solid var(--cl-divider);border-radius:13px;background:linear-gradient(135deg,var(--cl-accent-soft,rgba(99,102,241,.12)),var(--cl-card-2,rgba(255,255,255,.03)))}
      .clb-matchday.live{border-color:var(--cl-live,#ef4444)}.clb-matchday-head{display:flex;justify-content:space-between;align-items:center;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800}.clb-matchday-head b{padding:3px 7px;border-radius:99px;color:var(--cl-accent);background:var(--cl-accent-soft,rgba(99,102,241,.12))}.clb-matchday.live .clb-matchday-head b{color:var(--cl-live,#ef4444)}
      .clb-matchday-fixture{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:9px;margin-top:10px;color:var(--cl-text);font-size:12px;font-weight:700}.clb-matchday-fixture span:last-child{text-align:right}.clb-matchday-fixture strong{font-size:17px;white-space:nowrap;color:var(--cl-accent)}.clb-matchday-meta{display:flex;flex-wrap:wrap;gap:5px 10px;margin-top:8px;color:var(--cl-text-2);font-size:9px}
      .clb-dashboard { margin:0 14px 8px; padding:10px; border-radius:12px; background:var(--cl-card-2,rgba(255,255,255,.03)); }
      .clb-next { display:grid; grid-template-columns:1fr auto; gap:2px 8px; margin-bottom:9px; font-size:11px; }
      .clb-next span,.clb-next small { color:var(--cl-text-2); }
      .clb-next strong { color:var(--cl-text); }
      .clb-next small { grid-column:1/-1; }
      .clb-kpis { display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
      .clb-kpis div { display:flex; flex-direction:column; align-items:center; padding:7px; border-radius:8px; background:rgba(255,255,255,.035); }
      .clb-kpis strong { color:var(--cl-accent); font-size:17px; }.clb-kpis span { color:var(--cl-text-2); font-size:9px; text-transform:uppercase; }
      .clb-market-summary { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:8px; padding-top:8px; border-top:1px solid var(--cl-divider); }.clb-market-summary div{display:flex;flex-direction:column}.clb-market-summary span,.clb-market-summary small{color:var(--cl-text-2);font-size:9px}.clb-market-summary strong{color:var(--cl-text);font-size:14px}.clb-market-summary small{grid-column:1/-1}
      .clb-market-dist{margin-top:8px;display:grid;gap:5px}.clb-market-row{display:grid;grid-template-columns:65px 1fr auto;gap:6px;align-items:center;font-size:9px;color:var(--cl-text-2)}.clb-market-row i{height:5px;border-radius:99px;background:rgba(148,163,184,.15);overflow:hidden}.clb-market-row i b{display:block;height:100%;background:var(--cl-accent)}.clb-market-row strong{font-size:9px;color:var(--cl-text)}.clb-top-values{display:grid;gap:3px;margin-top:4px}.clb-top-values span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:9px}.clb-top-values b{color:var(--cl-accent)}
      .clb-form { display:flex; align-items:center; gap:5px; margin-top:9px; color:var(--cl-text-2); font-size:10px; }
      .clb-form b { display:grid; place-items:center; width:21px; height:21px; border-radius:50%; color:white; }.clb-form .w{background:#16a34a}.clb-form .d{background:#64748b}.clb-form .l{background:#dc2626}
      .clb-season{margin:8px 14px;padding:11px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-section-head{display:flex;align-items:end;justify-content:space-between}.clb-section-head div{display:flex;flex-direction:column}.clb-section-head span,.clb-section-head small{font-size:9px;color:var(--cl-text-2);text-transform:uppercase;letter-spacing:.06em}.clb-section-head strong{font-size:15px;color:var(--cl-text)}.clb-season svg{display:block;width:100%;height:58px;margin:5px 0;overflow:visible}.clb-season polyline{fill:none;stroke:var(--cl-accent);stroke-width:2;vector-effect:non-scaling-stroke}.clb-season circle{vector-effect:non-scaling-stroke;stroke:var(--cl-bg);stroke-width:1}.clb-season circle.w{fill:#16a34a}.clb-season circle.d{fill:#64748b}.clb-season circle.l{fill:#dc2626}.clb-season-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}.clb-season-stats span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:9px}.clb-season-stats b{font-size:12px;color:var(--cl-text)}
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
      .clb-player { display: flex; align-items: baseline; gap: 8px; padding: 4px 2px; font-size: 12px; border-radius:6px; cursor:pointer; }
      .clb-player:hover,.clb-player:focus{background:rgba(255,255,255,.05);outline:none}
      .clb-num {
        min-width: 20px; text-align: center; font-weight: 800; font-variant-numeric: tabular-nums;
        color: var(--cl-text-2, #94a3b8); font-size: 11px;
      }
      .clb-pname { font-weight: 600; color: var(--cl-text, #e2e8f0); flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .clb-age { font-size: 10px; color: var(--cl-text-2, #94a3b8); }
      .clb-value { min-width:55px; text-align:right; font-size:10px; font-weight:700; color:var(--cl-accent); }
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
      .clb-transfer-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:4px 0 9px}.clb-transfer-summary div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-transfer-summary span,.clb-transfer-summary small{font-size:9px;color:var(--cl-text-2)}.clb-transfer-summary b{font-size:12px;color:var(--cl-text)}.clb-transfer-summary b.positive{color:var(--cl-green,#22c55e)}.clb-transfer-summary b.negative{color:var(--cl-live,#ef4444)}.clb-windows{display:flex;gap:5px;overflow-x:auto;margin-bottom:7px}.clb-windows span{display:inline-flex;gap:6px;white-space:nowrap;padding:4px 7px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text-2);font-size:9px}.clb-windows b{color:var(--cl-accent)}
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
