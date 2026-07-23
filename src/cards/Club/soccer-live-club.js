import { LitElement, html, css, render } from 'lit-element';
import { t, resolveLang } from '../../i18n.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState, renderSyncStatusOrEmpty } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader } from '../shared-header.js';
import { EVENT_I18N } from '../shared-event-i18n.js';
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
  usableMatchText,
  squadAnalysis,
  normalizedInjuries,
  playerComparison,
  filterSquad,
  clubRecords,
  normalizeClubSectionOrder,
  availabilityRadar,
  predictedLineup,
  officialSelection,
  teamNews,
  selectionImpact,
} from '../shared-club-model.js';

class SoccerLiveClubCard extends LitElement {
  static get properties() {
    return {
      hass: {}, _config: {}, _isLoading: { type: Boolean },
      _squadExpanded: { type: Boolean }, _transferFilter: { type: String },
      _selectedPlayer: { type: Object }, _selectedTransfer: { type: Object },
      _comparisonPlayers: { type: Array },
      _squadQuery: { type: String }, _positionFilter: { type: String },
      _availabilityFilter: { type: String }, _favoriteIds: { type: Array },
      _sectionState: { type: Object },
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    const entityChanged = this._config?.entity !== config.entity;
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    if (this._squadExpanded === undefined) this._squadExpanded = false;
    if (this._transferFilter === undefined) this._transferFilter = 'all';
    if (!Array.isArray(this._comparisonPlayers)) this._comparisonPlayers = [];
    if (this._squadQuery === undefined) this._squadQuery = '';
    if (this._positionFilter === undefined) this._positionFilter = 'all';
    if (this._availabilityFilter === undefined) this._availabilityFilter = 'all';
    if (entityChanged || !Array.isArray(this._favoriteIds)) this._loadClubPreferences();
    this._selectedPlayer = null;
    this._selectedTransfer = null;
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
    if (changedProperties.has('_selectedPlayer') || changedProperties.has('_selectedTransfer')) {
      if (this._selectedPlayer || this._selectedTransfer) this._openPlayerPortal();
      else this._removePlayerPortal();
    }
  }

  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  _selectPlayer(player, trigger = null) {
    this._portalReturnFocus = trigger || document?.activeElement || null;
    this._portalReturnFocusKey = trigger?.dataset?.focusKey || '';
    this._selectedPlayer = player;
  }

  _selectTransfer(transfer, trigger = null) {
    this._portalReturnFocus = trigger || document?.activeElement || null;
    this._portalReturnFocusKey = trigger?.dataset?.focusKey || '';
    this._selectedTransfer = transfer;
  }

  _detailFocusKey(kind, item) {
    return `${kind}:${item?.id ?? item?.player_id ?? item?.name ?? item?.player ?? ''}:${item?.date ?? ''}:${item?.direction ?? ''}`;
  }

  _closePlayerDetail() {
    this._selectedPlayer = null;
    this._selectedTransfer = null;
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading(this._t('ui.loading'));
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
    this._clubAttrs = attrs;
    const profile = club.profile || {};
    const hideHeader = this._config.hide_header === true;
    const dashboardMode = this._config.dashboard_mode === true;
    const sections = {
      profile: () => this._renderProfile(profile, club.coach),
      matchday: () => this._config.show_matchday !== false ? this._renderMatchday(attrs) : '',
      dashboard: () => dashboardMode ? '' : this._renderDashboard(club, attrs),
      quality: () => this._config.show_data_quality !== false ? this._renderDataQuality(attrs) : '',
      availability: () => this._config.show_availability !== false ? this._renderAvailability(club.squad || []) : '',
      selection: () => this._config.show_selection !== false ? this._renderSelection(attrs) : '',
      prediction: () => this._config.show_prediction !== false ? this._renderPrediction(club.squad || [], club.transfers || []) : '',
      news: () => this._config.show_team_news !== false ? this._renderTeamNews(club, attrs.club_changes || club.changes) : '',
      season: () => !dashboardMode && this._config.show_season_progress !== false ? this._renderSeasonProgress(attrs) : '',
      changes: () => this._renderClubChanges(attrs.club_changes || club.changes),
      favorites: () => this._renderFavorites(club.squad || []),
      records: () => dashboardMode ? '' : this._renderClubRecords(attrs),
      analysis: () => !dashboardMode && this._config.show_squad_analysis !== false ? this._renderCollapsible('analysis', this._t('club.squad_analysis'), this._renderSquadAnalysis(club.squad || []), true) : '',
      injuries: () => this._config.show_injuries !== false ? this._renderCollapsible('injuries', this._t('club.injury_center'), this._renderInjuryCenter(club), true) : '',
      comparison: () => dashboardMode ? '' : this._renderPlayerComparison(),
      squad: () => !dashboardMode && this._config.show_squad !== false ? this._renderCollapsible('squad', this._t('club.squad'), this._renderSquad(club.squad || []), false) : '',
      transfers: () => this._config.show_transfers !== false ? (dashboardMode ? this._renderTransfers(club.transfers || [], 1) : this._renderCollapsible('transfers', this._t('club.transfers'), this._renderTransfers(club.transfers || []), false)) : '',
      automations: () => this._config.show_automations === true ? this._renderAutomations() : '',
    };
    const order = normalizeClubSectionOrder(this._config.section_order);
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="card-content">
          ${!hideHeader ? renderSoccerHeader({
            logo: profile.logo,
            title: profile.name || this._t('card.club'),
            fallbackIcon: '🏟️',
          }) : ''}
          ${order.map(key => sections[key]())}
          <div class="clb-note">${this._t('club.cache_note')}</div>
        </div>
      </ha-card>
    `;
  }

  _renderDataQuality(attrs) {
    const provider = attrs.provider === 'fotmob_private' ? 'FotMob' : (attrs.provider || 'Soccer Live');
    const status = attrs.sync_status || 'ready';
    const state = this.hass?.states?.[this._config.entity];
    const updated = state?.last_updated ? new Date(state.last_updated) : null;
    const age = updated ? Math.max(0, Math.round((Date.now() - updated.getTime()) / 60000)) : null;
    return html`<section class="clb-quality ${status}"><span>${status === 'ready' ? '●' : '▲'} ${provider}</span><small>${age == null ? this._t('club.freshness_unknown') : age < 1 ? this._t('club.just_updated') : this._t('club.updated_minutes', { n: age })}</small></section>`;
  }

  _renderAvailability(squad) {
    const lines = availabilityRadar(squad);
    if (!lines.length) return '';
    return html`<section class="clb-section clb-availability"><div class="clb-title">${this._t('club.availability_radar')}</div><div class="clb-radar">${lines.map(line => html`<div class=${line.thin ? 'thin' : ''}><span>${this._t(line.key)}</span><i><b style="width:${line.total ? line.available / line.total * 100 : 0}%"></b></i><strong>${line.available}/${line.total}</strong>${line.thin ? html`<em>⚠</em>` : ''}</div>`)}</div></section>`;
  }

  _renderPrediction(squad, transfers) {
    const prediction = predictedLineup(squad, transfers);
    if (!prediction) return '';
    return this._renderCollapsible('prediction', this._t('club.predicted_lineup'), html`<section class="clb-section clb-lineup"><small>${this._t('club.prediction_disclaimer')} · ${prediction.formation}</small>${prediction.lines.map(line => html`<div>${line.map(player => html`<button data-focus-key=${this._detailFocusKey('player', player)} @click=${event => this._selectPlayer(player, event.currentTarget)}>${player.name}</button>`)}</div>`)}</section>`, false);
  }

  _renderSelection(attrs) {
    const selection = officialSelection(attrs);
    if (!selection) return '';
    return this._renderCollapsible('selection', this._t('club.official_selection'), html`<section class="clb-section clb-selection"><div><strong>${this._t('club.starting_players')}</strong>${selection.starters.map(player => html`<span>${player.name || player.player}</span>`)}</div>${selection.substitutes.length ? html`<div><strong>${this._t('club.substitutes')}</strong>${selection.substitutes.map(player => html`<span>${player.name || player.player}</span>`)}</div>` : ''}</section>`, true);
  }

  _renderTeamNews(club, changes) {
    const items = teamNews(club, changes);
    if (!items.length) return '';
    const icon = type => ({ transfer_added: '↔', injury_added: '✚', player_available: '✓', coach_changed: '👤', squad_added: '+', squad_removed: '−', market_value_changed: '€' }[type] || '•');
    return this._renderCollapsible('news', this._t('club.team_news'), html`<section class="clb-section clb-news">${items.map(item => html`<div><b>${icon(item.type)}</b><span><strong>${item.player || item.name || this._t(`club.change_${item.type}`)}</strong><small>${this._teamNewsDetail(item)}</small></span><time>${formatTransferDate(item.date)}</time></div>`)}</section>`, true);
  }

  _teamNewsDetail(item) {
    if (item.source === 'injury') return this._returnLabel(item.detail);
    if (item.source === 'transfer' || item.type === 'transfer_added') {
      if (item.detail === 'in') return this._t('club.transfer_in');
      if (item.detail === 'out') return this._t('club.transfer_out');
      return this._transferTypeLabel(item.detail);
    }
    return item.detail || (item.type ? this._t(`club.change_${item.type}`) : '');
  }

  _automationYaml(event, label) {
    return `alias: ${label}\ntrigger:\n  - platform: event\n    event_type: ${event}\naction:\n  - service: notify.notify\n    data:\n      message: "${label}"`;
  }

  _renderAutomations() {
    const examples = [['soccer_live_lineup_available', 'club.automation_lineup'], ['soccer_live_injury_added', 'club.automation_injury'], ['soccer_live_player_available', 'club.automation_available'], ['soccer_live_transfer_added', 'club.automation_transfer'], ['soccer_live_match_started', 'club.automation_started'], ['soccer_live_goal', 'club.automation_goal']];
    return this._renderCollapsible('automations', this._t('club.automation_examples'), html`<section class="clb-section clb-automations">${examples.map(([event, key]) => { const label = this._t(key); return html`<div><span><strong>${label}</strong><small>${event}</small></span><button @click=${() => navigator.clipboard?.writeText(this._automationYaml(event, label))}>${this._t('club.copy_yaml')}</button></div>`; })}</section>`, false);
  }

  _renderClubChanges(changes) {
    const items = Array.isArray(changes) ? changes : [];
    if (!items.length) return '';
    const icon = type => ({ transfer_added: '↔', injury_added: '✚', player_available: '✓', coach_changed: '👤', squad_added: '+', squad_removed: '−', market_value_changed: '€' }[type] || '•');
    return html`<section class="clb-changes"><div class="clb-title">${this._t('club.since_update')}</div><div>${items.slice(0, 6).map(item => html`<span class=${item.type || ''}><b>${icon(item.type)}</b>${item.player || item.name || this._t(`club.change_${item.type}`)}${item.delta != null ? html`<small>${Number(item.delta) > 0 ? '+' : ''}${item.type === 'market_value_changed' ? this._formatValue(item.delta) : item.delta}</small>` : ''}</span>`)}</div></section>`;
  }

  _preferenceKey() { return `soccer-live-club:${this._config?.entity || 'default'}`; }

  _loadClubPreferences() {
    let stored = {};
    try { stored = JSON.parse(localStorage.getItem(this._preferenceKey()) || '{}'); } catch (_error) { /* storage unavailable */ }
    this._favoriteIds = Array.isArray(stored.favorites) ? stored.favorites : [];
    this._sectionState = stored.sections && typeof stored.sections === 'object' ? stored.sections : {};
  }

  _saveClubPreferences() {
    try { localStorage.setItem(this._preferenceKey(), JSON.stringify({ favorites: this._favoriteIds || [], sections: this._sectionState || {} })); } catch (_error) { /* storage unavailable */ }
  }

  _renderCollapsible(key, label, content, defaultOpen) {
    if (!content) return '';
    if (this._config.collapse_sections === false) return content;
    const open = this._sectionState?.[key] ?? defaultOpen;
    return html`<details class="clb-collapse clb-collapse-${key}" ?open=${open} @toggle=${event => {
      this._sectionState = { ...(this._sectionState || {}), [key]: event.currentTarget.open };
      this._saveClubPreferences();
    }}><summary>${label}<span>${open ? '−' : '+'}</span></summary>${content}</details>`;
  }

  _playerKey(player) { return String(player?.id ?? player?.name ?? ''); }

  _toggleFavorite(player) {
    const key = this._playerKey(player);
    if (!key) return;
    const favorites = this._favoriteIds || [];
    this._favoriteIds = favorites.includes(key) ? favorites.filter(id => id !== key) : [...favorites, key];
    this._saveClubPreferences();
  }

  _renderFavorites(squad) {
    const favorites = (squad || []).filter(player => this._favoriteIds?.includes(this._playerKey(player)));
    if (!favorites.length) return '';
    return html`<section class="clb-favorites"><div class="clb-title">★ ${this._t('club.favorites')}</div><div class="clb-favorite-grid">${favorites.map(player => html`<button data-focus-key=${this._detailFocusKey('player', player)} @click=${event => this._selectPlayer(player, event.currentTarget)}>${player.photo ? html`<img src=${player.photo} alt="">` : html`<span>${player.number ?? '★'}</span>`}<strong>${player.name}</strong><small>${player.injured ? this._t('club.unavailable') : [player.goals != null ? `${player.goals} G` : '', player.assists != null ? `${player.assists} A` : '', player.rating || ''].filter(Boolean).join(' · ') || player.position || ''}</small></button>`)}</div></section>`;
  }

  _renderClubRecords(attrs) {
    if (this._config.show_club_records === false) return '';
    const records = clubRecords(attrs.previous_matches, attrs.team_id, attrs.team_name);
    if (!records) return '';
    const content = html`<section class="clb-records"><div class="clb-record-grid">
      <div><strong>${records.unbeaten}</strong><span>${this._t('club.unbeaten')}</span></div>
      <div><strong>${records.winning}</strong><span>${this._t('club.winning_streak')}</span></div>
      <div><strong>${records.cleanSheets}</strong><span>${this._t('club.clean_sheet_streak')}</span></div>
      <div><strong>${records.averageGoals.toFixed(1)}</strong><span>${this._t('club.average_goals')}</span></div>
    </div>${records.biggestWin ? html`<div class="clb-biggest"><span>${this._t('club.biggest_win')}</span><b>${records.biggestWin.score} · ${records.biggestWin.opponent}</b></div>` : ''}
    ${(records.home.pointsPerGame != null || records.away.pointsPerGame != null) ? html`<div class="clb-split"><span>${this._t('club.home_ppg')} <b>${records.home.pointsPerGame?.toFixed(2) ?? '–'}</b></span><span>${this._t('club.away_ppg')} <b>${records.away.pointsPerGame?.toFixed(2) ?? '–'}</b></span></div>` : ''}</section>`;
    return this._renderCollapsible('records', this._t('club.records'), content, true);
  }

  _renderMatchday(attrs) {
    const summary = matchdaySummary(attrs);
    if (!summary) return '';
    const { match, phase } = summary;
    const phaseLabel = this._t(`club.matchday_${phase}`);
    const score = phase === 'pre'
      ? (usableMatchText(match.clock) || usableMatchText(match.date) || this._t('status.scheduled'))
      : `${usableMatchText(match.home_score) || '–'} – ${usableMatchText(match.away_score) || '–'}`;
    const rawStatus = usableMatchText(match.status);
    const statusKey = EVENT_I18N[String(rawStatus || '').trim().toLowerCase()];
    const status = phase === 'pre'
      ? this._t('status.scheduled')
      : phase === 'post' ? this._t('status.full_time') : (statusKey ? this._t(statusKey) : rawStatus);
    const venue = usableMatchText(match.venue);
    const hasLineup = (match.lineup_home?.length || match.lineup_away?.length || match.formation_home || match.formation_away);
    const hasStats = match.has_stats || Object.keys(match.home_statistics || {}).length || Object.keys(match.away_statistics || {}).length;
    const impact = selectionImpact(attrs.club);
    return html`<section class="clb-matchday ${phase}">
      <div class="clb-matchday-head"><span>${this._t('club.matchday')}</span><b>${phaseLabel}</b></div>
      <div class="clb-matchday-fixture">
        <span>${match.home_team || ''}</span><strong>${score}</strong><span>${match.away_team || ''}</span>
      </div>
      ${(venue || status || hasLineup || hasStats) ? html`<div class="clb-matchday-meta">
        ${status ? html`<span>${status}</span>` : ''}${venue ? html`<span>⌖ ${venue}</span>` : ''}
        ${hasLineup ? html`<span>✓ ${this._t('tab.lineup')}</span>` : ''}${hasStats ? html`<span>✓ ${this._t('tab.stats')}</span>` : ''}
      </div>` : ''}
      ${impact ? html`<div class="clb-impact">
        <span><b>${impact.count}</b>${this._t('club.unavailable_players')}</span>
        ${impact.loadPercent != null ? html`<span><b>${impact.loadPercent}%</b>${this._t('club.missing_load')}</span>` : ''}
        ${(impact.goals || impact.assists) ? html`<span><b>${impact.goals}G · ${impact.assists}A</b>${this._t('club.missing_output')}</span>` : ''}
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
    const injuries = normalizedInjuries(club);
    const transfers = club.transfers || [];
    const previous = (attrs.previous_matches || []).slice(-5).reverse();
    const teamId = String(attrs.team_id ?? '');
    const form = previous.map(match => {
      const home = String(match.home_id ?? '') === teamId;
      const ours = Number(home ? match.home_score : match.away_score);
      const theirs = Number(home ? match.away_score : match.home_score);
      return Number.isFinite(ours) && Number.isFinite(theirs) ? (ours > theirs ? 'W' : ours < theirs ? 'L' : 'D') : null;
    }).filter(Boolean);
    // The matchday panel already presents the featured upcoming fixture.
    const next = this._config.show_matchday === false ? attrs.next_match : null;
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

  _renderSquadAnalysis(squad) {
    const analysis = squadAnalysis(squad);
    if (!analysis.lines.length) return '';
    return html`<section class="clb-analysis">
      <div class="clb-title">${this._t('club.squad_analysis')}</div>
      <div class="clb-analysis-grid">${analysis.lines.map(line => html`<div><strong>${line.count}</strong><span>${this._t(`club.${String(line.position).toLowerCase()}s`)}</span>${line.averageAge != null ? html`<small>Ø ${line.averageAge.toFixed(1)} ${this._t('club.years_short')}</small>` : ''}${line.value ? html`<small>${this._formatValue(line.value)}</small>` : ''}</div>`)}</div>
      ${(analysis.youngest || analysis.oldest) ? html`<div class="clb-age-extremes">
        ${analysis.youngest ? html`<span>${this._t('club.youngest')}<b>${analysis.youngest.name} · ${analysis.youngest.age}</b></span>` : ''}
        ${analysis.oldest ? html`<span>${this._t('club.oldest')}<b>${analysis.oldest.name} · ${analysis.oldest.age}</b></span>` : ''}
      </div>` : ''}
      ${analysis.thin.length ? html`<small class="clb-thin">⚠ ${this._t('club.thin_positions')}: ${analysis.thin.map(line => this._t(`club.${String(line.position).toLowerCase()}s`)).join(', ')}</small>` : ''}
    </section>`;
  }

  _renderInjuryCenter(club) {
    const injuries = normalizedInjuries(club);
    if (!injuries.length) return '';
    return html`<section class="clb-section clb-injuries">
      <div class="clb-title">${this._t('club.injury_center')} <b>${injuries.length}</b></div>
      ${injuries.map(injury => html`<div class="clb-injury">
        <span class="clb-injury-icon">✚</span><div><strong>${injury.player}</strong><small>${this._positionLabel(injury.position) || injury.type || this._t('club.unavailable')}</small></div>
        ${injury.expected_return ? html`<span class="clb-return"><small>${this._t('club.expected_return')}</small>${this._returnLabel(injury.expected_return)}</span>` : ''}
      </div>`)}
    </section>`;
  }

  _toggleComparison(player) {
    const key = String(player?.id ?? player?.name ?? '');
    const selected = this._comparisonPlayers || [];
    const exists = selected.some(item => String(item?.id ?? item?.name ?? '') === key);
    this._comparisonPlayers = exists ? selected.filter(item => String(item?.id ?? item?.name ?? '') !== key) : [...selected.slice(-1), player];
  }

  _renderPlayerComparison() {
    const selected = this._comparisonPlayers || [];
    if (!selected.length) return '';
    const comparison = playerComparison(selected);
    return html`<section class="clb-comparison">
      <div class="clb-comparison-head"><div class="clb-title">${this._t('club.player_comparison')}</div><button @click=${() => { this._comparisonPlayers = []; }}>${this._t('club.clear')}</button></div>
      ${!comparison ? html`<div class="clb-compare-pick"><span>${selected[0].name}</span><small>${this._t('club.select_second_player')}</small></div>` : html`
        <div class="clb-compare-names"><strong>${comparison.players[0].name}</strong><span>vs</span><strong>${comparison.players[1].name}</strong></div>
        ${comparison.fields.map(field => html`<div class="clb-compare-row"><b>${this._comparisonValue(field, comparison.players[0][field])}</b><span>${this._t(field === 'age' ? 'club.age_label' : field === 'market_value' ? 'club.market_value' : field === 'appearances' ? 'club.appearances' : field === 'rating' ? 'club.rating' : `stat.${field}`)}</span><b>${this._comparisonValue(field, comparison.players[1][field])}</b></div>`)}
      `}
    </section>`;
  }

  _comparisonValue(field, value) {
    if (value === null || value === undefined || value === '') return '–';
    return field === 'market_value' ? this._formatValue(value) : value;
  }

  _positionLabel(value) {
    const key = String(value || '').trim().toLowerCase();
    const positions = { goalkeeper: 'goalkeeper', defender: 'defender', midfielder: 'midfielder', attacker: 'attacker', forward: 'attacker' };
    return positions[key] ? this._t(`club.position_${positions[key]}`) : (value || '');
  }

  _returnLabel(value) {
    const text = String(value || '').trim();
    const simple = { 'day to day': 'day_to_day', 'about a week': 'about_week', 'a few days': 'few_days' };
    if (simple[text.toLowerCase()]) return this._t(`club.return_${simple[text.toLowerCase()]}`);
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const match = text.match(/^(early|mid|late)\s+([a-z]+)(?:\s+(\d{4}))?$/i);
    if (!match) return text;
    const month = months.indexOf(match[2].toLowerCase()) + 1;
    if (!month) return text;
    const date = `${this._t(`month.${month}`)}${match[3] ? ` ${match[3]}` : ''}`;
    return this._t(`club.return_${match[1].toLowerCase()}`).replace('{date}', date);
  }

  _transferTypeLabel(value) {
    const key = String(value || '').trim().toLowerCase();
    if (['loan', 'on loan', 'loan transfer'].includes(key)) return this._t('club.transfer_loan');
    if (['free', 'free transfer'].includes(key)) return this._t('club.transfer_free');
    if (key === 'permanent') return this._t('club.transfer_permanent');
    if (key === 'contract') return this._t('club.transfer_contract');
    return value || '';
  }

  _clubNameLabel(value) {
    const key = String(value || '').trim().toLowerCase();
    return ['free agent', 'without club', 'no club'].includes(key) ? this._t('club.free_agent') : (value || '');
  }

  _transferFee(transfer) {
    if (transfer.fee != null && transfer.fee !== '') return this._formatValue(transfer.fee);
    const text = String(transfer.fee_text || '').trim();
    return /[€£$]|\d/.test(text) ? text : '';
  }

  _renderPlayerDetail() {
    const player = this._selectedPlayer;
    const transfer = this._selectedTransfer;
    const item = (label, value) => value !== null && value !== undefined && value !== '' ? html`<div><span>${label}</span><strong>${value}</strong></div>` : '';
    if (transfer) return html`<div class="clb-player-overlay" @click=${event => { if (event.target === event.currentTarget) this._closePlayerDetail(); }}>
      <section class="clb-player-modal" role="dialog" aria-modal="true" aria-label=${transfer.player || this._t('club.transfers')}><button aria-label=${this._t('generic.close')} title=${this._t('generic.close')} @click=${() => this._closePlayerDetail()}>×</button>
        ${transfer.photo ? html`<img src=${transfer.photo} alt="">` : html`<div class="clb-transfer-avatar">${transfer.direction === 'in' ? '↓' : '↑'}</div>`}<h3>${transfer.player}</h3><p>${transfer.direction === 'in' ? this._t('club.transfer_in') : this._t('club.transfer_out')}</p>
        <div class="clb-player-facts">${item(this._t('club.from'), this._clubNameLabel(transfer.from))}${item(this._t('club.to'), this._clubNameLabel(transfer.to))}${item(this._t('club.transfer_date'), formatTransferDate(transfer.date))}${item(this._t('club.transfer_type'), this._transferTypeLabel(transfer.type))}${item(this._t('club.transfer_fee'), this._transferFee(transfer))}</div>
      </section></div>`;
    if (!player) return '';
    return html`<div class="clb-player-overlay" @click=${event => { if (event.target === event.currentTarget) this._closePlayerDetail(); }}>
      <section class="clb-player-modal" role="dialog" aria-modal="true" aria-label=${player.name}><button aria-label=${this._t('generic.close')} title=${this._t('generic.close')} @click=${() => this._closePlayerDetail()}>×</button>
        ${player.photo ? html`<img src=${player.photo} alt="">` : ''}<h3>${player.name}</h3><p>${this._positionLabel(player.position)}</p>
        <div class="clb-player-facts">${item(this._t('club.market_value'), player.market_value ? this._formatValue(player.market_value) : '')}
          ${item(this._t('club.age_label'), player.age)}${item(this._t('club.shirt_number'), player.number)}${item(this._t('club.nationality'), player.nationality)}${item(this._t('club.contract_until'), player.contract_until)}
          ${item(this._t('club.appearances'), player.appearances)}${item(this._t('club.starts'), player.starts)}${item(this._t('stat.goals'), player.goals)}${item(this._t('stat.assists'), player.assists)}${item(this._t('club.rating'), player.rating)}${item(this._t('club.availability'), player.injured ? this._t('club.unavailable') : this._t('club.available'))}
        </div>
        ${Array.isArray(player.recent_matches) && player.recent_matches.length ? html`<div class="clb-player-recent">
          <h4>${this._t('club.recent_matches')}</h4>
          ${player.recent_matches.slice(0, 5).map(match => html`<div class="clb-recent-row">
            <i class=${match.starter ? 'starter' : 'substitute'} aria-hidden="true">${match.starter ? 'XI' : '↥'}</i>
            <span><strong>${match.opponent || match.name}</strong><small>${match.starter ? this._t('club.starting_player') : this._t('club.substitute')}</small></span>
            <b class=${Number(match.rating) >= 7 ? 'good' : ''}>${match.rating || match.minutes || '–'}</b>
          </div>`)}
        </div>` : ''}
      </section>
    </div>`;
  }

  _openPlayerPortal() {
    if ((!this._selectedPlayer && !this._selectedTransfer) || !document?.body) return;
    if (!this._playerPortal) {
      this._playerPortal = document.createElement('dialog');
      this._playerPortal.className = 'soccer-live-club-player-portal';
      this._onPlayerPortalCancel = event => {
        event.preventDefault();
        this._closePlayerDetail();
      };
      this._onPlayerPortalKeydown = event => {
        if (event.key === 'Escape') {
          event.preventDefault();
          this._closePlayerDetail();
        }
      };
      this._onPlayerPortalClick = event => {
        if (event.target === this._playerPortal) {
          this._closePlayerDetail();
        }
      };
      this._playerPortal.addEventListener('cancel', this._onPlayerPortalCancel);
      this._playerPortal.addEventListener('keydown', this._onPlayerPortalKeydown);
      this._playerPortal.addEventListener('click', this._onPlayerPortalClick);
      document.body.appendChild(this._playerPortal);
    }
    this._copyPlayerPortalThemeVars();
    render(html`${this._renderPlayerPortalStyles()}${this._renderPlayerDetail()}`, this._playerPortal);
    if (!this._playerPortal.open) {
      try { this._playerPortal.showModal(); }
      catch (_error) { this._playerPortal.setAttribute('open', ''); }
    }
    requestAnimationFrame(() => this._playerPortal?.querySelector('.clb-player-modal > button')?.focus());
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
    this._playerPortal.removeEventListener('keydown', this._onPlayerPortalKeydown);
    this._playerPortal.removeEventListener('click', this._onPlayerPortalClick);
    render(html``, this._playerPortal);
    const returnFocus = this._portalReturnFocus;
    const returnFocusKey = this._portalReturnFocusKey;
    this._portalReturnFocus = null;
    this._portalReturnFocusKey = '';
    this._playerPortal.remove();
    this._playerPortal = null;
    setTimeout(() => {
      const currentTrigger = returnFocus?.isConnected
        ? returnFocus
        : [...(this.shadowRoot?.querySelectorAll('[data-focus-key]') || [])]
          .find(element => element.dataset.focusKey === returnFocusKey);
      if (typeof currentTrigger?.focus === 'function') currentTrigger.focus();
    }, 0);
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
      .clb-transfer-avatar { display:grid; place-items:center; width:84px; height:84px; margin:auto; border-radius:50%; background:var(--cl-accent-soft,rgba(99,102,241,.12)); color:var(--cl-accent,#6366f1); font-size:38px; font-weight:900; }
      .clb-player-modal h3 { margin:8px 0 2px; color:var(--cl-text,#e2e8f0); }
      .clb-player-modal p { margin:0 0 12px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts { display:grid; grid-template-columns:1fr 1fr; gap:7px; text-align:left; }
      .clb-player-facts div { display:flex; flex-direction:column; padding:8px; border-radius:8px; background:rgba(255,255,255,.04); }
      .clb-player-facts span { font-size:9px; color:var(--cl-text-2,#94a3b8); }
      .clb-player-facts strong { font-size:12px; color:var(--cl-text,#e2e8f0); }
      .clb-player-recent { margin-top:14px; text-align:left; }
      .clb-player-recent h4 { margin:0 0 6px; color:var(--cl-text-2,#94a3b8); font-size:10px; line-height:1.2; text-transform:uppercase; letter-spacing:.08em; }
      .clb-recent-row { display:grid; grid-template-columns:24px minmax(0,1fr) 34px; gap:8px; align-items:center; padding:7px 8px; border-top:1px solid var(--cl-divider,rgba(255,255,255,.1)); }
      .clb-recent-row>i { display:grid; place-items:center; width:22px; height:22px; border-radius:7px; background:rgba(148,163,184,.12); color:var(--cl-text-2,#94a3b8); font-size:9px; font-style:normal; font-weight:800; }
      .clb-recent-row>i.starter { background:rgba(16,185,129,.14); color:#34d399; }
      .clb-recent-row>span { min-width:0; display:flex; flex-direction:column; }
      .clb-recent-row>span strong { overflow:hidden; color:var(--cl-text,#e2e8f0); font-size:11px; line-height:1.25; text-overflow:ellipsis; white-space:nowrap; }
      .clb-recent-row>span small { color:var(--cl-text-2,#94a3b8); font-size:8px; }
      .clb-recent-row>b { justify-self:end; min-width:28px; padding:4px 3px; border-radius:7px; background:rgba(148,163,184,.12); color:var(--cl-text,#e2e8f0); font-size:11px; text-align:center; }
      .clb-recent-row>b.good { background:rgba(16,185,129,.14); color:#34d399; }
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
    const sourceGroups = groupSquad(squad);
    if (!sourceGroups.length) return '';
    const filteredSquad = filterSquad(squad, this._squadQuery, this._positionFilter, this._availabilityFilter);
    const allGroups = groupSquad(filteredSquad);
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
        <div class="clb-squad-tools">
          <input type="search" placeholder=${this._t('club.search_players')} .value=${this._squadQuery} @input=${event => { this._squadQuery = event.target.value; }}>
          <select .value=${this._positionFilter} @change=${event => { this._positionFilter = event.target.value; }}><option value="all">${this._t('club.all_positions')}</option>${sourceGroups.map(group => html`<option value=${group.pos}>${this._t(group.key)}</option>`)}</select>
          <select .value=${this._availabilityFilter} @change=${event => { this._availabilityFilter = event.target.value; }}><option value="all">${this._t('club.all_availability')}</option><option value="available">${this._t('club.available')}</option><option value="unavailable">${this._t('club.unavailable')}</option></select>
        </div>
        ${!allGroups.length ? html`<div class="clb-no-results">${this._t('club.no_players_found')}</div>` : ''}
        ${groups.map(({ key, players }) => {
          return html`
            <div class="clb-pos-group">
              <div class="clb-pos">${this._t(key)}</div>
              ${players.map(p => html`
                <div class="clb-player" role="button" tabindex="0" data-focus-key=${this._detailFocusKey('player', p)} @click=${event => this._selectPlayer(p, event.currentTarget)} @keydown=${event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this._selectPlayer(p, event.currentTarget); } }}>
                  <span class="clb-num">${p.number ?? '·'}</span>
                  <span class="clb-pname">${p.name}</span>
                  ${p.age != null ? html`<span class="clb-age">${this._t('club.age', { n: p.age })}</span>` : ''}
                  ${p.market_value ? html`<span class="clb-value">${this._formatValue(p.market_value)}</span>` : ''}
                  <button class="clb-favorite-toggle ${this._favoriteIds.includes(this._playerKey(p)) ? 'sel' : ''}" title=${this._t('club.favorite')} aria-label=${this._t('club.favorite')} @click=${event => { event.stopPropagation(); this._toggleFavorite(p); }}>★</button>
                  <button class="clb-compare-toggle ${this._comparisonPlayers.some(item => String(item?.id ?? item?.name) === String(p?.id ?? p?.name)) ? 'sel' : ''}" title=${this._t('club.compare')} aria-label=${this._t('club.compare')} @click=${event => { event.stopPropagation(); this._toggleComparison(p); }}>⇄</button>
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

  _renderTransfers(transfers, maxOverride = null) {
    const counts = countTransfers(transfers);
    if (!counts.all) return '';
    const filter = ['in', 'out'].includes(this._transferFilter) ? this._transferFilter : 'all';
    const filtered = filterTransfers(transfers, filter);
    const visible = visibleTransfers(filtered, maxOverride ?? this._config.max_transfers ?? 8);
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
          <div class="clb-transfer" role="button" tabindex="0" data-focus-key=${this._detailFocusKey('transfer', tr)} @click=${event => this._selectTransfer(tr, event.currentTarget)} @keydown=${event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this._selectTransfer(tr, event.currentTarget); } }}>
            <span class="clb-dir ${tr.direction}" title="${tr.direction === 'in' ? this._t('club.transfer_in') : this._t('club.transfer_out')}"
                  aria-label="${tr.direction === 'in' ? this._t('club.transfer_in') : this._t('club.transfer_out')}">${tr.direction === 'in' ? '↓' : '↑'}</span>
            <div class="clb-tinfo">
              <span class="clb-tplayer">${tr.player}</span>
              <span class="clb-tclubs">${this._clubNameLabel(transferCounterparty(tr))}</span>
            </div>
            <span class="clb-ttype">${tr.type && tr.type !== 'N/A' ? this._transferTypeLabel(tr.type) : ''}</span>
            <span class="clb-tdate">${formatTransferDate(tr.date)}</span>
            <span class="clb-open">›</span>
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
      .clb-quality{display:flex;justify-content:space-between;margin:0 14px 8px;padding:5px 9px;border-radius:8px;background:var(--cl-card-2,rgba(255,255,255,.03));font-size:9px;color:var(--cl-text-2)}.clb-quality span{color:var(--cl-success,#10b981)}.clb-quality:not(.ready) span{color:var(--cl-warning,#f59e0b)}
      .clb-radar{display:grid;gap:7px}.clb-radar>div{display:grid;grid-template-columns:78px 1fr 32px 15px;align-items:center;gap:7px;font-size:10px;color:var(--cl-text-2)}.clb-radar i{height:7px;border-radius:9px;background:rgba(148,163,184,.18);overflow:hidden}.clb-radar i b{display:block;height:100%;background:var(--cl-success,#10b981)}.clb-radar .thin i b{background:var(--cl-warning,#f59e0b)}.clb-radar strong{color:var(--cl-text);text-align:right}.clb-radar em{font-style:normal}
      .clb-lineup>small{display:block;text-align:center;color:var(--cl-text-2);margin-bottom:8px}.clb-lineup>div{display:flex;justify-content:center;gap:5px;margin:6px 0}.clb-lineup button{border:1px solid var(--cl-divider);border-radius:10px;padding:5px 7px;background:var(--cl-card-2);color:var(--cl-text);font-size:9px;cursor:pointer}
      .clb-selection{display:grid;grid-template-columns:1fr 1fr;gap:12px}.clb-selection>div{display:flex;flex-direction:column;gap:4px}.clb-selection strong{color:var(--cl-accent);font-size:10px}.clb-selection span{font-size:10px;color:var(--cl-text)}
      .clb-news{display:grid;gap:0}.clb-news>div{display:grid;grid-template-columns:24px 1fr auto;align-items:center;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-news>div:last-child{border:0}.clb-news b{color:var(--cl-accent)}.clb-news span{display:flex;flex-direction:column}.clb-news strong{font-size:10px;color:var(--cl-text)}.clb-news small,.clb-news time{font-size:8px;color:var(--cl-text-2)}
      .clb-automations{display:grid;gap:5px}.clb-automations>div{display:flex;justify-content:space-between;align-items:center;padding:6px;border-radius:8px;background:var(--cl-card-2)}.clb-automations span{display:flex;flex-direction:column}.clb-automations strong{font-size:10px;color:var(--cl-text)}.clb-automations small{font-size:8px;color:var(--cl-text-2)}.clb-automations button{border:1px solid var(--cl-accent);border-radius:7px;background:transparent;color:var(--cl-accent);font-size:9px;padding:4px 7px;cursor:pointer}.clb-player-recent{display:grid;gap:4px;margin-top:10px}.clb-player-recent>strong{color:var(--cl-text-2);font-size:10px;text-transform:uppercase}.clb-player-recent span{display:flex;justify-content:space-between;color:var(--cl-text);font-size:10px}
      .clb-collapse{margin:8px 14px;border:1px solid var(--cl-divider);border-radius:12px;overflow:hidden}.clb-collapse>summary{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;cursor:pointer;list-style:none;color:var(--cl-text-2);font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.clb-collapse>summary::-webkit-details-marker{display:none}.clb-collapse>summary span{font-size:16px;color:var(--cl-accent)}.clb-collapse[open]>summary{border-bottom:1px solid var(--cl-divider)}.clb-collapse>.clb-section,.clb-collapse>.clb-analysis,.clb-collapse>.clb-records{margin:0;padding:8px 12px 10px;background:transparent}.clb-collapse .clb-title{display:none}
      .clb-matchday{margin:2px 14px 10px;padding:11px;border:1px solid var(--cl-divider);border-radius:13px;background:linear-gradient(135deg,var(--cl-accent-soft,rgba(99,102,241,.12)),var(--cl-card-2,rgba(255,255,255,.03)))}
      .clb-matchday.live{border-color:var(--cl-live,#ef4444)}.clb-matchday-head{display:flex;justify-content:space-between;align-items:center;color:var(--cl-text-2);font-size:9px;text-transform:uppercase;letter-spacing:.08em;font-weight:800}.clb-matchday-head b{padding:3px 7px;border-radius:99px;color:var(--cl-accent);background:var(--cl-accent-soft,rgba(99,102,241,.12))}.clb-matchday.live .clb-matchday-head b{color:var(--cl-live,#ef4444)}
      .clb-matchday-fixture{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:9px;margin-top:10px;color:var(--cl-text);font-size:12px;font-weight:700}.clb-matchday-fixture span:last-child{text-align:right}.clb-matchday-fixture strong{font-size:17px;white-space:nowrap;color:var(--cl-accent)}.clb-matchday-meta{display:flex;flex-wrap:wrap;gap:5px 10px;margin-top:8px;color:var(--cl-text-2);font-size:9px}
      .clb-impact{display:grid;grid-template-columns:repeat(auto-fit,minmax(80px,1fr));gap:5px;margin-top:9px;padding-top:8px;border-top:1px solid var(--cl-divider)}.clb-impact span{display:flex;flex-direction:column;color:var(--cl-text-2);font-size:8px}.clb-impact b{color:var(--cl-text);font-size:11px}
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
      .clb-analysis,.clb-comparison{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-analysis-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-analysis-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-analysis-grid strong{font-size:16px;color:var(--cl-accent)}.clb-analysis-grid span,.clb-analysis-grid small{font-size:8px;color:var(--cl-text-2);overflow:hidden;text-overflow:ellipsis}.clb-age-extremes{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:7px}.clb-age-extremes span{display:flex;flex-direction:column;font-size:8px;color:var(--cl-text-2)}.clb-age-extremes b{font-size:10px;color:var(--cl-text)}.clb-thin{display:block;margin-top:7px;color:var(--cl-text-2);font-size:8px}
      .clb-record-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}.clb-record-grid div{display:flex;flex-direction:column;padding:7px;border-radius:8px;background:rgba(255,255,255,.035)}.clb-record-grid strong{font-size:16px;color:var(--cl-accent)}.clb-record-grid span{font-size:8px;color:var(--cl-text-2)}.clb-biggest,.clb-split{display:flex;justify-content:space-between;gap:8px;margin-top:7px;color:var(--cl-text-2);font-size:9px}.clb-biggest b,.clb-split b{color:var(--cl-text)}
      .clb-favorites{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-favorite-grid{display:flex;gap:6px;overflow-x:auto}.clb-favorite-grid button{display:grid;grid-template-columns:30px minmax(70px,1fr);grid-template-rows:auto auto;gap:0 6px;align-items:center;min-width:145px;padding:7px;border:1px solid var(--cl-divider);border-radius:9px;background:rgba(255,255,255,.025);color:var(--cl-text);text-align:left;cursor:pointer}.clb-favorite-grid img,.clb-favorite-grid button>span{grid-row:1/3;width:30px;height:30px;border-radius:50%;object-fit:cover;display:grid;place-items:center;background:var(--cl-accent-soft);color:var(--cl-accent)}.clb-favorite-grid strong{font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.clb-favorite-grid small{font-size:8px;color:var(--cl-text-2)}
      .clb-changes{margin:8px 14px;padding:10px;border-radius:12px;background:var(--cl-card-2,rgba(255,255,255,.03))}.clb-changes>div:last-child{display:flex;flex-wrap:wrap;gap:5px}.clb-changes span{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border:1px solid var(--cl-divider);border-radius:99px;color:var(--cl-text);font-size:9px}.clb-changes span b{color:var(--cl-accent);font-size:12px}.clb-changes span.injury_added b{color:var(--cl-live,#ef4444)}.clb-changes span.player_available b{color:var(--cl-green,#22c55e)}.clb-changes small{color:var(--cl-text-2)}
      .clb-injuries .clb-title b{display:inline-grid;place-items:center;min-width:17px;height:17px;margin-left:4px;border-radius:50%;background:rgba(239,68,68,.15);color:var(--cl-live,#ef4444)}.clb-injury{display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid var(--cl-divider)}.clb-injury-icon{color:var(--cl-live,#ef4444)}.clb-injury>div{display:flex;flex:1;min-width:0;flex-direction:column}.clb-injury strong{font-size:11px;color:var(--cl-text)}.clb-injury small{font-size:9px;color:var(--cl-text-2)}.clb-return{display:flex;flex-direction:column;text-align:right;color:var(--cl-text);font-size:9px}
      .clb-comparison-head{display:flex;align-items:center;justify-content:space-between}.clb-comparison-head button{border:0;background:transparent;color:var(--cl-text-2);font-size:9px;cursor:pointer}.clb-compare-pick{display:flex;justify-content:space-between;padding:8px;border-radius:8px;background:rgba(255,255,255,.035);color:var(--cl-text);font-size:10px}.clb-compare-pick small{color:var(--cl-text-2)}.clb-compare-names,.clb-compare-row{display:grid;grid-template-columns:1fr 60px 1fr;gap:5px;align-items:center;text-align:center}.clb-compare-names{margin-bottom:6px;color:var(--cl-text);font-size:11px}.clb-compare-names span{color:var(--cl-text-2);font-size:8px}.clb-compare-row{padding:4px;border-top:1px solid var(--cl-divider)}.clb-compare-row b{color:var(--cl-text);font-size:10px}.clb-compare-row span{color:var(--cl-text-2);font-size:8px}
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
      .clb-squad-tools{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:5px;margin-bottom:7px}.clb-squad-tools input,.clb-squad-tools select{min-width:0;padding:6px;border:1px solid var(--cl-divider);border-radius:7px;background:var(--cl-card-2,rgba(255,255,255,.03));color:var(--cl-text);font-size:9px}.clb-no-results{padding:14px;text-align:center;color:var(--cl-text-2);font-size:10px}.clb-favorite-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-favorite-toggle.sel{border-color:#f59e0b;color:#f59e0b;background:rgba(245,158,11,.12)}
      .clb-compare-toggle{display:grid;place-items:center;width:22px;height:22px;padding:0;border:1px solid var(--cl-divider);border-radius:50%;background:transparent;color:var(--cl-text-2);cursor:pointer}.clb-compare-toggle.sel{border-color:var(--cl-accent);background:var(--cl-accent-soft);color:var(--cl-accent)}
      .clb-transfer {
        display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 12px;
        border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04)); cursor:pointer;
      }
      .clb-transfer:hover,.clb-transfer:focus{background:rgba(255,255,255,.035);outline:none}.clb-open{color:var(--cl-text-2);font-size:17px}
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
      @media(max-width:420px){.clb-analysis-grid,.clb-record-grid{grid-template-columns:repeat(2,1fr)}.clb-age-extremes{grid-template-columns:1fr}.clb-ttype{display:none}.clb-squad-tools{grid-template-columns:1fr 1fr}.clb-squad-tools input{grid-column:1/-1}}
    `];
  }
}

if (!customElements.get('soccer-live-club')) {
  customElements.define('soccer-live-club', SoccerLiveClubCard);
}
