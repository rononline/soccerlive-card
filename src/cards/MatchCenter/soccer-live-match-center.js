import { LitElement, html, css } from 'lit';
import { t, resolveLang, formatMatchDateFull, formatDateOnly } from '../../i18n.js';
import { scoreText } from '../shared-score.js';
import { skinStyles, applySkin } from '../../skins.js';
import { OfflineCache } from '../offline-cache.js';
import { renderCardError, renderInfoState, renderSyncStatusOrEmpty } from '../card-error.js';
import { renderLoading } from '../loading-spinner.js';
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { renderMatchMeta, matchMetaStyles } from '../shared-match-meta.js';
import { renderPrediction, renderOdds, renderInjuries, prematchStyles } from '../shared-prematch.js';
import { standingText } from '../shared-standing.js';
import { timelineEventKind, timelineEventText, visibleTimelineEvents } from '../shared-match-sections.js';
import { matchStatRows, translateStatKey } from '../shared-stat-labels.js';
import { soccerCardShellStyles, renderCardHero } from '../card-shell.js';
import { renderWeatherBadge, weatherBadgeStyles } from '../weather-badge.js';
import { displayCompetitionName, resolveCompetitionLogo } from '../shared-competition.js';
import { renderPitch, pitchStyles } from '../shared-pitch.js';
import { matchHasDetails, requestMatchDetails } from '../shared-detail-loader.js';
import { predictionOutcome, derivedMatchStory, matchNarrative, prematchContext, reviewContext } from '../shared-match-popup-model.js';
import { sortMatchesByStateAndDate } from '../shared-match-order.js';
import { h2hResult } from '../shared-h2h-model.js';
import { readinessStyles, renderReadiness } from '../shared-readiness.js';
import { renderSourceSections, sourceStatusStyles } from '../shared-source-status.js';
import { alertsForMatch, dataAlertStyles, renderDataAlerts } from '../shared-data-alerts.js';
import { archiveMatchesFromState, historicalH2H } from '../shared-archive-model.js';
import { standingsForMatch, virtualStandingsImpact } from '../shared-race-model.js';
import { analysisStyles, renderMomentumAnalysis } from '../shared-analysis.js';

const TAB_IDS = ['overview', 'stats', 'timeline', 'lineup', 'h2h'];
const PREVIEW_COVERAGE_KEYS = {
  overview: 'tab.overview',
  stats: 'tab.stats',
  timeline: 'tab.timeline',
  lineup: 'tab.lineup',
  lineups: 'tab.lineup',
  h2h: 'tab.h2h',
};

function formatPreviewCoverage(item, t) {
  const raw = String(item || '').trim();
  const key = PREVIEW_COVERAGE_KEYS[raw.toLowerCase()];
  if (key) return t(key);
  return raw
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, ch => ch.toUpperCase());
}

export class SoccerLiveMatchCenterCard extends LitElement {
  static get properties() {
    return {
      hass:          {},
      _config:       {},
      _activeTab:    { type: String },
      _tlFilter:     { type: String },
      _isLoading:    { type: Boolean },
      _weatherBadge: { type: Object },
      _selectedEventId: { type: String },
      _detailsLoading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._activeTab = 'overview';
    this._tlFilter = 'all';
    this._isLoading = true;
    this._weatherBadge = null;
    this._lastWeatherVenue = null;
    this._lastMatchState = null;
    this._selectedEventId = null;
    this._detailsLoading = false;
    this._detailRequests = new Set();
    this._manualTab = false;
  }

  setConfig(config) {
    if (!config.entity) throw new Error('Entity required');
    this._config = config;
    applySkin(this, config);
    this._isLoading = true;
    this._manualTab = false;
    try {
      const saved = sessionStorage.getItem(`soccer-mc-tab:${config.entity}`);
      if (saved && TAB_IDS.includes(saved)) this._activeTab = saved;
    } catch (_) { /* storage blocked in private/restricted contexts */ }
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadingTimer = setTimeout(() => this.requestUpdate(), 10000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._loadingTimer);
  }

  _selectMatch(attrs) {
    const selected = (attrs?.matches || []).find(match => String(match.event_id) === String(this._selectedEventId));
    if (selected) return selected;
    if (attrs?.next_match) return attrs.next_match;
    return sortMatchesByStateAndDate(attrs?.matches)[0];
  }

  _orderedMatches(attrs) {
    return sortMatchesByStateAndDate(attrs?.matches);
  }

  async _chooseMatch(eventId, attrs) {
    this._selectedEventId = String(eventId);
    const match = (attrs?.matches || []).find(item => String(item.event_id) === String(eventId));
    await this._loadMatchDetails(match, attrs);
  }

  async _loadMatchDetails(match, attrs) {
    const eventId = String(match?.event_id || '');
    if (
      !eventId || !attrs?.detail_service || matchHasDetails(match)
      || this._detailRequests.has(eventId)
    ) return;
    this._detailRequests.add(eventId);
    this._detailsLoading = true;
    try {
      if (!await requestMatchDetails(this.hass, attrs, match)) this._detailRequests.delete(eventId);
    } catch (_) {
      this._detailRequests.delete(eventId);
    } finally {
      this._detailsLoading = false;
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') && this.hass && this._config) {
      const s = this.hass.states[this._config.entity];
      if (s && s.state !== 'unavailable') {
        this._isLoading = false;
        OfflineCache.set(this._config.entity, s.attributes);
        const match = this._selectMatch(s.attributes);
        if (match?.venue && match.venue !== this._lastWeatherVenue) {
          this._loadWeather(match.venue, match.venue_lat, match.venue_lon, match.date_iso);
        }
        if (this._pinnedTab) {
          this._activeTab = this._pinnedTab;
        } else if ((this._config.card_type === 'hub' || this._config.phase_aware === true) && !this._manualTab) {
          this._activeTab = match?.state === 'in' ? 'timeline' : 'overview';
        } else if (this._lastMatchState === 'pre' && match?.state === 'in' && this._activeTab === 'overview') {
          this._activeTab = 'timeline';
        }
        this._lastMatchState = match?.state ?? this._lastMatchState;
      }
    }
  }

  async _loadWeather(venue, venue_lat = null, venue_lon = null, kickoffISO = null) {
    this._lastWeatherVenue = venue;
    try {
      this._weatherBadge = await renderWeatherBadge(venue, this.hass, this._config, venue_lat, venue_lon, kickoffISO);
    } catch (_) {
      this._weatherBadge = null;
    }
  }

  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  // When used as the consolidated `timeline` / `lineup` card, Match Center pins
  // itself to that single tab and hides the tab bar (the legacy standalone
  // cards were exactly these tabs).
  get _pinnedTab() {
    const type = this._config?.card_type;
    return (type === 'timeline' || type === 'lineup') ? type : null;
  }

  _selectTab(id, manual = true) {
    this._activeTab = id;
    if (manual) this._manualTab = true;
    this._tlFilter = 'all';
    if (id !== 'overview') {
      const attrs = this.hass?.states?.[this._config.entity]?.attributes;
      this._loadMatchDetails(this._selectMatch(attrs), attrs);
    }
    try { sessionStorage.setItem(`soccer-mc-tab:${this._config.entity}`, id); } catch (_) {}
  }

  _onTabKeydown(event, id) {
    const index = TAB_IDS.indexOf(id);
    const direction = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0
      : event.key === 'End' ? TAB_IDS.length - 1
        : (index + direction + TAB_IDS.length) % TAB_IDS.length;
    this._selectTab(TAB_IDS[next], true);
    this.updateComplete.then(() => this.renderRoot.querySelector(`#mc-tab-${TAB_IDS[next]}`)?.focus());
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading(this._t('ui.loading'));
    const entityId = this._config.entity;
    const s = this.hass.states[entityId];
    let attrs = null;

    if (!s) {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (s.state === 'unavailable') {
      const c = OfflineCache.get(entityId);
      if (c?.data?.matches) attrs = c.data;
      else return renderCardError('', this._t('ui.sensor_unavailable'), this._t('ui.sensor_unavailable_hint'), this._t('ui.restart_ha'));
    } else {
      attrs = s.attributes;
    }

    if (this._isLoading && !attrs) return renderLoading(this._t('ui.loading'));
    const rawMatch = this._selectMatch(attrs);
    if (!rawMatch) {
      return renderSyncStatusOrEmpty(attrs, (k) => this._t(k),
        () => renderInfoState('', this._t('ui.no_match_data'), this._t('ui.no_match_hint'), ''));
    }
    // Inject sensor-level logo/name as fallback (parser stores these on attrs, not per-match)
    const leagueInfo = (attrs.league_info || [])[0] || {};
    const leagueName = rawMatch.league_name || leagueInfo.name || leagueInfo.abbreviation || attrs.league_name || '';
    const match = {
      ...rawMatch,
      league_logo: resolveCompetitionLogo({
        competitionName: leagueName,
        competitionLogo: rawMatch.league_logo || leagueInfo.logo_href || attrs.league_logo,
        fallbackLogo: null,
        isFriendly: rawMatch.is_friendly,
      }),
      league_name: leagueName,
    };
    return this._renderCard(match, attrs);
  }

  _renderCard(match, attrs) {
    const pinned = this._pinnedTab;
    const activeTab = pinned || this._activeTab;
    const tabs = TAB_IDS.map(id => ({ id, label: this._t('tab.' + id) }));
    const ordered = this._orderedMatches(attrs);

    return html`
      <ha-card>
        ${ordered.length > 1 ? html`<div class="mc-picker">
          <select @change=${event => this._chooseMatch(event.target.value, attrs)}>
            ${ordered.map(item => html`<option value=${item.event_id} ?selected=${String(item.event_id) === String(match.event_id)}>${formatDateOnly(item.date, resolveLang(this.hass, this._config)) || item.date} · ${item.home_team} – ${item.away_team}</option>`) }
          </select>
          ${this._detailsLoading ? html`<span>${this._t('ui.loading')}</span>` : ''}
        </div>` : ''}
        <div class="mc-hero-section">
          ${renderCardHero(match.home_logo, match.away_logo)}
          <div class="card-content">
            ${this._config.hide_header !== true ? this._renderHero(match) : ''}
          </div>
        </div>
        ${pinned ? '' : html`
        <div class="tab-bar" role="tablist" aria-label=${this._t('card.match_center')}>
          ${tabs.map(tab => html`
            <button class="tab ${activeTab === tab.id ? 'active' : ''}"
              id="mc-tab-${tab.id}" role="tab"
              aria-selected=${activeTab === tab.id ? 'true' : 'false'}
              aria-controls="mc-panel-${tab.id}"
              tabindex=${activeTab === tab.id ? '0' : '-1'}
              @keydown=${event => this._onTabKeydown(event, tab.id)}
              @click=${() => this._selectTab(tab.id)}>
              ${tab.label}
            </button>
          `)}
        </div>`}
        <div class="tab-content${activeTab === 'lineup' ? ' lineup' : ''}"
          id="mc-panel-${activeTab}" role="tabpanel"
          aria-labelledby="mc-tab-${activeTab}">
          ${activeTab === 'overview'  ? this._renderOverview(match, attrs) : ''}
          ${activeTab === 'stats'     ? this._renderStats(match)    : ''}
          ${activeTab === 'timeline'  ? this._renderTimeline(match) : ''}
          ${activeTab === 'lineup'    ? this._renderLineup(match)   : ''}
          ${activeTab === 'h2h'       ? this._renderH2H(match, attrs) : ''}
        </div>
      </ha-card>
    `;
  }

  _renderHero(match) {
    const isLive     = match.state === 'in';
    const isFinished = match.state === 'post';
    const badge = isLive
      ? renderSoccerBadge(`${match.clock ? match.clock + "' " : ''}${this._t('status.live')}`, 'live')
      : isFinished
        ? renderSoccerBadge(this._t('status.full_time'), 'ft')
        : renderSoccerBadge(formatMatchDateFull(match.date, resolveLang(this.hass, this._config)) || match.date || '', 'date');

    const compName = displayCompetitionName(
      match.competition_name || match.league_name || '',
      resolveLang(this.hass, this._config)
    );
    const compLogo = match.competition_logo || match.league_logo || null;

    return html`
      ${renderSoccerHeader({ logo: compLogo, title: compName, badge })}

      <div class="scoreboard" aria-live="polite" aria-atomic="true">
        <div class="mc-team">
          ${match.home_logo ? html`<img class="mc-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="mc-name">${match.home_team || '?'}</span>
        </div>
        <div class="mc-score">
          ${isLive || isFinished
            ? html`<span class="mc-num">${scoreText(match.home_score)} – ${scoreText(match.away_score)}</span>`
            : html`<span class="mc-vs">${this._t('match.vs')}</span>`}
        </div>
        <div class="mc-team away">
          <span class="mc-name">${match.away_team || '?'}</span>
          ${match.away_logo ? html`<img class="mc-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
        </div>
      </div>
    `;
  }

  _renderOverview(match, attrs) {
    const clean = value => value && value !== 'N/A' ? value : '';
    const homeRec = clean(match.home_record_summary || match.home_record);
    const awayRec = clean(match.away_record_summary || match.away_record);
    const homeStd = standingText(match, 'home', k => this._t(k));
    const awayStd = standingText(match, 'away', k => this._t(k));
    const homeForm = clean(match.home_form || match.last_five_home);
    const awayForm = clean(match.away_form || match.last_five_away);
    const formDots = str => str ? html`<div class="ov-form-dots">${str.split('').slice(-5).map(c => {
      const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
      return html`<span class="ov-fd ${cls}"></span>`;
    })}</div>` : html`<div class="ov-form-dots"></div>`;
    const standings = standingsForMatch(this.hass, this._config, match);
    const impact = virtualStandingsImpact(
      standings,
      match,
      this._config.team_name || attrs.team_name || '',
    );

    return html`
      ${renderDataAlerts(alertsForMatch(attrs?.data_alerts, match), {
        t: (key, vars) => this._t(key, vars),
      })}
      ${renderReadiness(match, key => this._t(key))}
      ${renderSourceSections(match, {
        t: (key, vars) => this._t(key, vars),
        provider: this.hass?.states?.[this._config.entity]?.attributes?.provider,
        updatedAt: this.hass?.states?.[this._config.entity]?.attributes?.last_successful_update,
      })}
      <div class="ov-section">
        ${(homeForm || awayForm) ? html`
          <div class="ov-row">
            ${formDots(homeForm)}
            <span class="ov-label">${this._t('team.form') || 'Form'}</span>
            <div class="ov-form-dots right">${awayForm ? awayForm.split('').slice(-5).map(c => {
              const cls = c === 'W' ? 'w' : (c === 'L' || c === 'V') ? 'l' : 'd';
              return html`<span class="ov-fd ${cls}"></span>`;
            }) : ''}</div>
          </div>
        ` : ''}
        ${(homeRec || awayRec) ? html`
          <div class="ov-row">
            <span class="ov-val">${homeRec || '—'}</span>
            <span class="ov-label">${this._t('match.record')}</span>
            <span class="ov-val right">${awayRec || '—'}</span>
          </div>
        ` : ''}
        ${(homeStd || awayStd) ? html`
          <div class="ov-row">
            <span class="ov-val small">${homeStd || '—'}</span>
            <span class="ov-label">${this._t('match.standing')}</span>
            <span class="ov-val right small">${awayStd || '—'}</span>
          </div>
        ` : ''}
        ${match.week_label ? html`<div class="ov-meta"><span class="ov-cal">◈</span> ${match.week_label}</div>` : ''}
      </div>
      ${this._renderPreview(match)}
      ${impact ? html`<section class="brief-card impact">
        <h4>${this._t('race.standings_impact')}</h4>
        <div class="impact-row"><strong>${impact.team}</strong><b>${impact.previous_rank} → ${impact.rank}</b><span>${impact.change > 0 ? `▲ ${impact.change}` : impact.change < 0 ? `▼ ${Math.abs(impact.change)}` : '–'} · ${impact.points} ${this._t('col.points')}</span></div>
      </section>` : ''}
      ${this._renderReview(match)}
      ${this._renderStructuredSummary(
        match.review && Object.keys(match.review).length ? null : match.match_summary
      )}
      ${this._renderPredictionOutcome(match)}
      ${this._renderMatchStory(derivedMatchStory(match), matchNarrative(match))}
      ${this._renderTeamOfMatch(match.team_of_the_match)}
      ${renderMatchMeta(match, {
        lang: resolveLang(this.hass, this._config),
        t: k => this._t(k),
        weatherBadge: this._weatherBadge || null,
        hideBroadcasts: this._config.hide_broadcasts === true,
      })}
      ${this._config.show_prediction !== false ? renderPrediction(match, { t: k => this._t(k), lang: resolveLang(this.hass, this._config), showDetails: this._config.show_prediction_details !== false }) : ''}
      ${this._config.show_odds !== false ? renderOdds(match, { t: (k, v) => this._t(k, v) }) : ''}
      ${this._config.show_injuries !== false ? renderInjuries(match, { t: (k, v) => this._t(k, v) }) : ''}
    `;
  }

  _renderPreview(match) {
    const preview = match?.preview || {};
    const context = prematchContext(match);
    if (!context.homeForm.length && !context.awayForm.length && !context.h2hCount && !context.hasStandings && !context.absences && !context.featured) return '';
    const form = value => value ? html`<div class="brief-form">${String(value).split('').map(result => html`<b class=${result.toLowerCase()}>${result}</b>`)}</div>` : html`<span>—</span>`;
    return html`<section class="brief-card preview">
      <h4>${this._t('match.preview')}</h4>
      ${(context.homeForm.length || context.awayForm.length) ? html`<div class="brief-form-row">${form(context.homeForm.join(''))}<span>${this._t('team.form')}</span>${form(context.awayForm.join(''))}</div>` : ''}
      ${context.h2hCount ? html`<p>${this._t('match.h2h_available', { n: context.h2hCount })}</p>` : ''}
      ${context.hasStandings ? html`<p>${this._t('match.standings_context')}: <strong>${context.standings.home ?? '—'} – ${context.standings.away ?? '—'}</strong></p>` : ''}
      ${context.absences ? html`<p>${this._t('match.absence_context')}: <strong>${context.absences.home ?? 0} – ${context.absences.away ?? 0}</strong></p>` : ''}
      ${context.featured ? html`<p>⭐ ${this._t('match.player_to_watch')}: <strong>${context.featured.name || context.featured}</strong></p>` : ''}
      ${preview.coverage?.length ? html`<div class="brief-chips">${preview.coverage.map(item => html`<span>${formatPreviewCoverage(item, key => this._t(key))}</span>`)}</div>` : ''}
    </section>`;
  }

  _renderReview(match) {
    const review = reviewContext(match);
    if (!review.present) return '';
    const xg = review.expectedGoals || {};
    const standout = review.standout;
    return html`<section class="brief-card review">
      <h4>${this._t('match.review')}</h4>
      ${review.scorers.length ? html`<div class="brief-scorers">${review.scorers.map(item => html`<span>⚽ ${item.player || '?'} ${item.minute ? `${item.minute}'` : ''}</span>`)}</div>` : ''}
      ${review.playerOfMatch ? html`<p>⭐ <strong>${review.playerOfMatch.name || review.playerOfMatch.player || review.playerOfMatch}</strong>${review.playerOfMatch.rating ? ` · ${review.playerOfMatch.rating}` : ''}</p>` : ''}
      ${(xg.home != null || xg.away != null) ? html`<p>xG <strong>${xg.home ?? '—'} – ${xg.away ?? '—'}</strong></p>` : ''}
      ${standout ? html`<p>${translateStatKey(standout.key, key => this._t(key))}: <strong>${standout.home} – ${standout.away}</strong></p>` : ''}
      ${review.turningPoint ? html`<p>${this._t('story.turning_point')}: <strong>${review.turningPoint.player || review.turningPoint.team || '—'}${review.turningPoint.minute != null ? ` · ${review.turningPoint.minute}'` : ''}</strong></p>` : ''}
      ${review.rated.length ? html`<div class="brief-ratings">${review.rated.map(player => html`<span>${player.name}<b>${player.rating}</b></span>`)}</div>` : ''}
    </section>`;
  }

  _renderStructuredSummary(summary) {
    if (!summary) return '';
    return html`<section class="brief-card review">
      <h4>${this._t('match.summary')}</h4>
      <p><strong>${this._t(`match.outcome_${summary.outcome}`)}</strong> · ${summary.score}</p>
      ${summary.goal_scorers?.length ? html`<div class="brief-scorers">${summary.goal_scorers.map(player => html`<span>⚽ ${player}</span>`)}</div>` : ''}
      ${(summary.home_xg != null || summary.away_xg != null) ? html`<p>xG <strong>${summary.home_xg ?? '—'} – ${summary.away_xg ?? '—'}</strong></p>` : ''}
      ${summary.player_of_the_match ? html`<p>⭐ <strong>${summary.player_of_the_match.name || summary.player_of_the_match}</strong></p>` : ''}
    </section>`;
  }

  _renderPredictionOutcome(match) {
    const outcome = predictionOutcome(match);
    if (!outcome) return '';
    const side = value => this._t(`match.outcome_${value}`);
    return html`<section class="brief-card outcome ${outcome.correct ? 'correct' : 'surprise'}">
      <h4>${this._t('match.expectation_reality')}</h4>
      <div class="outcome-grid">
        <span><small>${this._t('match.expected')}</small><strong>${side(outcome.predicted)}${outcome.predictedPercent != null ? ` · ${outcome.predictedPercent}%` : ''}</strong></span>
        <b>${outcome.correct ? '✓' : '↯'}</b>
        <span><small>${this._t('match.actual')}</small><strong>${side(outcome.actual)}</strong></span>
      </div>
      ${outcome.xg ? html`<p>xG <strong>${outcome.xg.home ?? '—'} – ${outcome.xg.away ?? '—'}</strong></p>` : ''}
    </section>`;
  }

  _renderMatchStory(story, narrative = []) {
    if ((!Array.isArray(story) || !story.length) && !narrative.length) return '';
    const labels = { opening_goal: 'story.opening_goal', equalizer: 'story.equalizer', decisive_goal: 'story.decisive_goal', red_card: 'story.red_card' };
    return html`<section class="brief-card story"><h4>${this._t('match.story')}</h4><div class="story-line">
      ${story.map(item => html`<div><b>${item.minute ? `${item.minute}'` : '·'}</b><i></i><span><strong>${this._t(labels[item.type] || 'match.event')}</strong><small>${item.player || ''}${item.team ? ` · ${item.team}` : ''}</small></span></div>`)}
    </div>${narrative.length ? html`<ul class="story-summary">${narrative.map(item => html`<li>${this._t(item.key, item.vars)}</li>`)}</ul>` : ''}</section>`;
  }

  _renderTeamOfMatch(players) {
    if (!Array.isArray(players) || players.length < 5) return '';
    const order = { GK: 0, DEF: 1, MID: 2, FWD: 3 };
    const sorted = [...players].sort((a, b) => (order[a.position] ?? 4) - (order[b.position] ?? 4));
    return html`<section class="brief-card best-xi"><h4>${this._t('match.team_of_match')}</h4><div class="best-xi-grid">
      ${sorted.map(player => html`<div class=${player.side || ''}>${player.photo ? html`<img src=${player.photo} alt="">` : ''}<span>${player.short_name || player.name}</span><b>${player.rating}</b><small>${player.position || ''}</small></div>`)}
    </div></section>`;
  }

  _renderStats(match) {
    const stats = matchStatRows(match.home_statistics, match.away_statistics)
      .map(row => ({ ...row, label: translateStatKey(row.key, key => this._t(key)) }));
    const momentum = renderMomentumAnalysis(match, { t: key => this._t(key) });
    if (!stats.length && !momentum) return html`<p class="empty">${this._t('ui.no_stats_yet')}</p>`;
    return html`
      <div class="stats-list">
        ${stats.map(s => {
          const displayStat = value => value !== null && value !== undefined && value !== '' && value !== 'N/A' ? String(value) : '—';
          const rawH = displayStat(s.home);
          const rawA = displayStat(s.away);
          const hv = parseFloat(rawH) || 0;
          const av = parseFloat(rawA) || 0;
          const total = hv + av;
          const homePct = total > 0 ? Math.round((hv / total) * 100) : 50;
          return html`
            <div class="stat-row">
              <span class="stat-val">${rawH}</span>
              <div class="stat-center">
                <div class="stat-label">${s.label}</div>
                <div class="stat-bars">
                  <div class="stat-bar home" style="width:${homePct}%"></div>
                  <div class="stat-bar away" style="width:${100 - homePct}%"></div>
                </div>
              </div>
              <span class="stat-val right">${rawA}</span>
            </div>
          `;
        })}
      </div>
      ${momentum}
    `;
  }

  _renderTimeline(match) {
    const allEvents = visibleTimelineEvents(match);
    if (!allEvents.length) return html`<p class="empty">${this._t('ui.no_events_yet')}</p>`;
    const badge = btype => {
      if (btype === 'goal')   return html`<span class="tl-badge goal">${this._t('event.goal')}</span>`;
      if (btype === 'yellow') return html`<span class="tl-badge yellow">${this._t('event.yellow_card')}</span>`;
      if (btype === 'red')    return html`<span class="tl-badge red">${this._t('event.red_card')}</span>`;
      if (btype === 'sub')    return html`<span class="tl-badge sub">${this._t('event.substitution')}</span>`;
      return html`<span class="tl-badge meta">·</span>`;
    };
    const events = this._tlFilter === 'goals'
      ? allEvents.filter(e => timelineEventKind(e) === 'goal')
      : this._tlFilter === 'cards'
        ? allEvents.filter(e => ['yellow', 'red'].includes(timelineEventKind(e)))
        : allEvents;
    const hasGoals = allEvents.some(e => timelineEventKind(e) === 'goal');
    const hasCards = allEvents.some(e => ['yellow', 'red'].includes(timelineEventKind(e)));
    return html`
      <div class="tl-filters">
        <button class="tl-chip ${this._tlFilter === 'all' ? 'active' : ''}" @click=${() => { this._tlFilter = 'all'; }}>${this._t('filter.all') || 'Alles'}</button>
        ${hasGoals ? html`<button class="tl-chip ${this._tlFilter === 'goals' ? 'active' : ''}" @click=${() => { this._tlFilter = 'goals'; }}>⚽ ${this._t('event.goal')}</button>` : ''}
        ${hasCards ? html`<button class="tl-chip ${this._tlFilter === 'cards' ? 'active' : ''}" @click=${() => { this._tlFilter = 'cards'; }}>🟨 ${this._t('event.cards') || this._t('event.yellow_card')}</button>` : ''}
      </div>
      <div class="tl-list">
        ${events.length ? events.map(ev => {
          const btype = timelineEventKind(ev);
          return html`
            <div class="tl-row">
              <span class="tl-min">${ev.clock || ev.minute ? `${ev.clock || ev.minute}'` : ''}</span>
              ${badge(btype)}
              <div class="tl-text">
                <div>${timelineEventText(ev, key => this._t(key))}</div>
                ${ev.team ? html`<div class="tl-team">${ev.team}</div>` : ''}
              </div>
            </div>
          `;
        }) : html`<p class="empty">${this._t('ui.no_events_yet')}</p>`}
      </div>
    `;
  }

  _renderLineup(match) {
    const home = match.lineup_home || [];
    const away = match.lineup_away || [];
    if (!home.length && !away.length) return html`<p class="empty">${this._t('ui.no_lineup_yet')}</p>`;

    const pitch = renderPitch(match, { t: (k, v) => this._t(k, v) });
    if (pitch) return pitch;

    // No formation available — fall back to the plain list.
    const hasFlags = arr => arr.some(p => p.starter === true || p.starter === false);
    const homeStart = hasFlags(home) ? home.filter(p => p.starter === true)  : home;
    const homeBench = hasFlags(home) ? home.filter(p => p.starter === false) : [];
    const awayStart = hasFlags(away) ? away.filter(p => p.starter === true)  : away;
    const awayBench = hasFlags(away) ? away.filter(p => p.starter === false) : [];
    return this._renderLineupList(match, homeStart, homeBench, awayStart, awayBench);
  }

  _renderLineupList(match, homeStart, homeBench, awayStart, awayBench) {
    const playerRow = (p, isRight = false, isBench = false) => html`
      <div class="lu-player ${isBench ? 'bench' : ''}">
        ${!isRight ? html`<span class="lu-shirt">${p.jersey || p.number || ''}</span>` : ''}
        <span class="lu-name">${p.name || p.display_name || ''}</span>
        ${p.position ? html`<span class="lu-pos">${p.position}</span>` : ''}
        ${isRight ? html`<span class="lu-shirt">${p.jersey || p.number || ''}</span>` : ''}
      </div>
    `;
    return html`
      <div class="lu-wrap">
        <div class="lu-cols">
          <div class="lu-col">
            <div class="lu-header">${match.home_team || this._t('generic.home')}</div>
            ${homeStart.map(p => playerRow(p, false))}
            ${homeBench.length ? html`
              <div class="lu-bench-label">${this._t('lineup.bench')}</div>
              ${homeBench.map(p => playerRow(p, false, true))}
            ` : ''}
          </div>
          <div class="lu-col right">
            <div class="lu-header">${match.away_team || this._t('generic.away')}</div>
            ${awayStart.map(p => playerRow(p, true))}
            ${awayBench.length ? html`
              <div class="lu-bench-label">${this._t('lineup.bench')}</div>
              ${awayBench.map(p => playerRow(p, true, true))}
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _renderH2H(match, attrs = {}) {
    const archiveState = this._config.archive_entity
      ? this.hass?.states?.[this._config.archive_entity]
      : null;
    const historical = historicalH2H(
      archiveMatchesFromState(archiveState),
      match.home_team,
      match.away_team,
    );
    const merged = new Map();
    [...(match.head_to_head || []), ...historical].forEach(item => {
      const key = String(item.event_id || [
        String(item.date_iso || item.date || '').slice(0, 10),
        item.home_team,
        item.away_team,
      ].join('|'));
      if (!merged.has(key)) merged.set(key, item);
    });
    const h2h = [...merged.values()].sort((a, b) =>
      String(b.date_iso || b.date || '').localeCompare(String(a.date_iso || a.date || '')));
    const reportedCount = Number(match.preview?.h2h_count || 0);
    if (!h2h.length) {
      return html`<p class="empty">${reportedCount
        ? this._t('match.h2h_available', { n: reportedCount })
        : this._t('ui.no_h2h_yet')}</p>`;
    }
    const tracked = {
      id: attrs.team_id ?? null,
      name: this._config.team_name || this._config.my_team || attrs.team_name || '',
    };
    return html`
      <div class="h2h-list">
        ${historical.length ? html`<p class="h2h-source">${this._t('match.historical_h2h', { n: historical.length })}</p>` : ''}
        ${h2h.map(m => {
          const result = h2hResult(m, tracked);
          return html`
            <div class="h2h-row">
              <span class="h2h-date">${formatDateOnly(
                m.date || m.date_iso,
                resolveLang(this.hass, this._config),
              ) || String(m.date || m.date_iso || '').split('T')[0]}</span>
              <span class="h2h-team ${result.homeWon ? 'win' : ''}">${m.home_team || m.home_abbrev || '?'}</span>
              <span class="h2h-score ${result.scoreClass}">${Number.isFinite(result.homeScore) ? result.homeScore : '?'}–${Number.isFinite(result.awayScore) ? result.awayScore : '?'}</span>
              <span class="h2h-team right ${result.awayWon ? 'win' : ''}">${m.away_team || m.away_abbrev || '?'}</span>
            </div>
          `;
        })}
      </div>
    `;
  }

  getCardSize() { return 6; }
  static getConfigElement() { return document.createElement('soccer-live-match-center-editor'); }
  static getStubConfig()    { return { entity: '' }; }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, matchMetaStyles, weatherBadgeStyles, pitchStyles, prematchStyles, readinessStyles, sourceStatusStyles, dataAlertStyles, analysisStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); border-radius: 20px; overflow: hidden; padding: 0; }
      /* Hero wrapper: scopes bg-logos to the header+scoreboard area only */
      .mc-hero-section { position: relative; overflow: hidden; }
      /* Scoreboard */
      .scoreboard { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px 12px; }
      .mc-team { display: flex; flex-direction: column; align-items: center; gap: 6px; flex: 1; }
      .mc-team.away { align-items: center; }
      .mc-logo { width: 48px; height: 48px; object-fit: contain; }
      .mc-name { font-size: 12px; font-weight: 700; text-align: center; max-width: 90px; }
      .mc-score { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .mc-num { font-size: 34px; font-weight: 900; letter-spacing: 4px; }
      .mc-vs  { font-size: 18px; font-weight: 700; color: var(--cl-text-2, #94a3b8); }
      /* Tabs */
      .tab-bar { display: flex; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.08)); overflow-x: auto; scrollbar-width: none; }
      .tab-bar::-webkit-scrollbar { display: none; }
      .tab { flex: 1; min-width: 56px; padding: 9px 4px; background: none; border: none; border-bottom: 2px solid transparent; color: var(--cl-text-2, #94a3b8); font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase; letter-spacing: 0.06em; transition: color 0.15s; }
      .tab.active { color: var(--cl-accent, #6366f1); border-bottom-color: var(--cl-accent, #6366f1); }
      .mc-picker { position:relative; z-index:3; display:flex; align-items:center; gap:8px; padding:10px 14px; background:var(--cl-bg); border-bottom:1px solid var(--cl-divider); }
      .mc-picker select { min-width:0; flex:1; padding:7px 9px; border-radius:8px; border:1px solid var(--cl-divider); background:rgba(255,255,255,.06); color:var(--cl-text); }
      .mc-picker span { color:var(--cl-accent); font-size:11px; }
      .brief-card { margin:8px 12px; padding:11px; border-radius:12px; border:1px solid var(--cl-divider); background:rgba(255,255,255,.025); }
      .readiness { margin:10px 12px; }
      .brief-card h4 { margin:0 0 9px; color:var(--cl-accent); font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
      .brief-card p { margin:7px 0; color:var(--cl-text-2); font-size:11px; }.brief-card strong{color:var(--cl-text)}
      .brief-form-row { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:8px; color:var(--cl-text-2); font-size:10px; }
      .brief-form { display:flex; gap:3px; }.brief-form-row>.brief-form:last-child{justify-content:flex-end}.brief-form b{display:grid;place-items:center;width:19px;height:19px;border-radius:50%;color:white;font-size:9px}.brief-form .w{background:#16a34a}.brief-form .d{background:#64748b}.brief-form .l{background:#dc2626}
      .brief-chips,.brief-scorers { display:flex; flex-wrap:wrap; gap:5px; margin-top:8px; }.brief-chips span,.brief-scorers span{padding:4px 7px;border-radius:999px;background:rgba(148,163,184,.1);color:var(--cl-text-2);font-size:9px}
      .brief-ratings { display:grid; gap:4px; }.brief-ratings span{display:flex;justify-content:space-between;color:var(--cl-text-2);font-size:10px}.brief-ratings b{color:#fbbf24}
      .impact-row{display:grid;grid-template-columns:1fr auto;gap:4px;align-items:center}.impact-row strong{font-size:11px}.impact-row b{color:var(--cl-accent);font-size:15px}.impact-row span{grid-column:1/-1;color:var(--cl-text-2);font-size:9px}
      .outcome-grid{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}.outcome-grid span{display:flex;flex-direction:column}.outcome-grid span:last-child{text-align:right}.outcome-grid small{color:var(--cl-text-2);font-size:9px}.outcome-grid strong{color:var(--cl-text);font-size:11px}.outcome-grid>b{color:var(--cl-success,#10b981);font-size:18px}.outcome.surprise .outcome-grid>b{color:var(--cl-warning,#f59e0b)}.outcome>p{margin:8px 0 0;text-align:center;color:var(--cl-text-2);font-size:10px}
      .story-line{display:grid}.story-line>div{display:grid;grid-template-columns:32px 12px 1fr;align-items:stretch;min-height:42px}.story-line>div>b{color:var(--cl-accent);font-size:10px;padding-top:3px}.story-line i{position:relative;border-left:2px solid var(--cl-divider)}.story-line i::before{content:'';position:absolute;left:-5px;top:3px;width:8px;height:8px;border-radius:50%;background:var(--cl-accent)}.story-line span{display:flex;flex-direction:column;padding-bottom:8px}.story-line span strong{font-size:10px}.story-line span small{color:var(--cl-text-2);font-size:9px}
      .story-summary{display:grid;gap:5px;margin:7px 0 0;padding:8px 8px 8px 22px;border-radius:8px;background:var(--cl-chip-bg);color:var(--cl-text-2);font-size:9px}
      .best-xi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}.best-xi-grid>div{display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:5px;padding:6px;border-radius:8px;background:rgba(255,255,255,.04);min-width:0}.best-xi-grid img{width:28px;height:28px;border-radius:50%;object-fit:cover}.best-xi-grid span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--cl-text);font-size:9px}.best-xi-grid b{color:#fbbf24;font-size:10px}.best-xi-grid small{grid-column:2/-1;color:var(--cl-text-2);font-size:8px}.best-xi-grid .away{box-shadow:inset 2px 0 var(--cl-accent-2)}.best-xi-grid .home{box-shadow:inset 2px 0 var(--cl-accent)}
      .tab-content { min-height: 80px; }
      /* Overview */
      .ov-section { padding: 4px 16px 8px; }
      .ov-row { display: flex; align-items: center; padding: 9px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .ov-val { flex: 1; font-weight: 700; font-size: 13px; }
      .ov-val.right { text-align: right; }
      .ov-val.small { font-size: 11px; }
      .ov-label { flex: 0 0 70px; text-align: center; font-size: 10px; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; }
      .ov-meta { font-size: 12px; color: var(--cl-text-2, #94a3b8); padding: 7px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.05)); display: flex; align-items: center; gap: 5px; }
      .ov-cal { font-size: 10px; color: var(--cl-accent, #6366f1); }
      .ov-form-dots { flex: 1; display: flex; gap: 3px; align-items: center; }
      .ov-form-dots.right { justify-content: flex-end; }
      .ov-fd { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
      .ov-fd.w { background: var(--cl-green, #10b981); }
      .ov-fd.l { background: var(--cl-live, #ef4444); }
      .ov-fd.d { background: var(--cl-text-2, #94a3b8); opacity: 0.5; }
      /* Stats */
      .stats-list { padding: 4px 0; }
      .stat-row { display: flex; align-items: center; padding: 6px 16px; gap: 8px; }
      .stat-val { min-width: 34px; font-weight: 700; font-size: 13px; }
      .stat-val.right { text-align: right; }
      .stat-center { flex: 1; display: flex; flex-direction: column; gap: 3px; }
      .stat-label { text-align: center; font-size: 10px; color: var(--cl-text-2, #94a3b8); }
      .stat-bars { display: flex; height: 4px; border-radius: 2px; overflow: hidden; }
      .stat-bar.home { background: var(--cl-accent, #6366f1); }
      .stat-bar.away { background: var(--cl-text-2, #94a3b8); opacity: 0.4; }
      /* Timeline */
      .tl-filters { display: flex; gap: 6px; padding: 8px 16px 4px; }
      .tl-chip { background: var(--cl-card-2, rgba(255,255,255,0.05)); border: 1px solid var(--cl-divider, rgba(255,255,255,0.08)); border-radius: 99px; color: var(--cl-text-2, #94a3b8); font-size: 10px; font-weight: 700; padding: 3px 10px; cursor: pointer; }
      .tl-chip.active { background: var(--cl-accent, #6366f1); border-color: var(--cl-accent, #6366f1); color: #fff; }
      .tab-content { min-height: 80px; max-height: 380px; overflow-y: auto; -webkit-overflow-scrolling: touch; }
      .tab-content.lineup { max-height: none; overflow-y: visible; }
      .tl-list { padding: 4px 16px; }
      .tl-row { display: flex; align-items: flex-start; gap: 8px; padding: 8px 0; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .tl-min { min-width: 28px; font-size: 11px; font-weight: 700; color: var(--cl-text-2, #94a3b8); padding-top: 2px; }
      .tl-badge { display: inline-block; font-size: 8px; font-weight: 800; padding: 1px 5px; border-radius: 3px; text-transform: uppercase; letter-spacing: 0.04em; flex-shrink: 0; line-height: 15px; white-space: nowrap; }
      .tl-badge.goal   { background: rgba(99,102,241,0.18); color: var(--cl-accent, #6366f1); }
      .tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
      .tl-badge.sub    { background: rgba(148,163,184,0.12); color: var(--cl-text-2, #94a3b8); }
      .tl-badge.meta   { background: transparent; color: var(--cl-text-2, #94a3b8); font-size: 14px; padding: 0 4px; letter-spacing: 0; }
      .tl-text { flex: 1; font-size: 12px; }
      .tl-team { font-size: 10px; color: var(--cl-text-2, #94a3b8); margin-top: 2px; }
      /* Lineup */
      .lu-wrap { padding: 8px 16px; }
      .lu-formation { display: flex; align-items: center; justify-content: space-between; padding: 6px 0 10px; font-size: 20px; font-weight: 900; }
      .lu-form-label { font-size: 10px; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; }
      .lu-cols { display: flex; gap: 12px; }
      .lu-col { flex: 1; }
      .lu-col.right .lu-player { flex-direction: row-reverse; }
      .lu-header { font-size: 10px; font-weight: 700; color: var(--cl-text-2, #94a3b8); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
      .lu-player { display: flex; align-items: center; gap: 5px; padding: 4px 0; font-size: 11px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.04)); }
      .lu-player.bench { opacity: 0.65; font-size: 10.5px; }
      .lu-shirt { font-size: 10px; font-weight: 800; color: var(--cl-accent, #6366f1); min-width: 16px; }
      .lu-pos { font-size: 9px; color: var(--cl-text-2, #94a3b8); }
      .lu-bench-label {
        font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--cl-text-2, #94a3b8); margin: 8px 0 2px;
        display: flex; align-items: center; gap: 6px;
      }
      .lu-bench-label::after {
        content: ''; flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider, rgba(255,255,255,0.08)), transparent);
      }
      /* H2H */
      .h2h-list { padding: 4px 16px; }
      .h2h-row { display: flex; align-items: center; gap: 6px; padding: 8px 0; font-size: 12px; border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06)); }
      .h2h-date { font-size: 10px; color: var(--cl-text-2, #94a3b8); min-width: 46px; }
      .h2h-team { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .h2h-team.right { text-align: right; }
      .h2h-team.win { font-weight: 700; }
      .h2h-score { min-width: 46px; text-align: center; font-weight: 700; }
      .h2h-score.our-win { color: var(--cl-green); }
      .h2h-score.our-loss { color: var(--cl-live); }
      .h2h-score.draw { color: var(--cl-text-2, #94a3b8); }
      .h2h-score.neutral { color: var(--cl-text); }
      .h2h-source{margin:5px 0 8px;color:var(--cl-text-2);font-size:9px}
      /* Shared */
      .empty { text-align: center; color: var(--cl-text-2, #94a3b8); font-size: 12px; padding: 24px 16px; margin: 0; }
    `];
  }
}

if (!customElements.get('soccer-live-match-center')) {
  customElements.define('soccer-live-match-center', SoccerLiveMatchCenterCard);
}
