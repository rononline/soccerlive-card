import { LitElement, html, svg, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles } from "../card-shell.js";

class SoccerLiveBracketCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _compact: { type: Boolean },
      _cardStyle: { type: String },
      _hideHeader: { type: Boolean },
      _treeShowPlayoffs: { type: Boolean },
      _myTeam: { type: String },
      _activeTab: { type: String },
      _matchesEntity: { type: String },
      _collapsedRounds: { type: Object },
      _expandedRounds: { type: Object },
      _schedFilter: { type: String },
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this._hideHeader = config.hide_header === true;
    this._compact = config.compact === true;
    this._cardStyle = config.style === 'tree' ? 'tree' : 'list';
    this._treeShowPlayoffs = config.tree_show_playoffs === true;
    this._myTeam = config.my_team || '';
    this._matchesEntity = config.matches_entity || '';
    this._activeTab = 'bracket';
    this._collapsedRounds = new Set();
    this._expandedRounds = new Set();
    this._schedFilter = 'auto';
  }

  updated(changedProps) {
    super.updated?.(changedProps);
    if (changedProps.has('_activeTab') && this._activeTab === 'schedule') {
      this._scrollScheduleAfterRender();
    }
  }

  _scrollScheduleAfterRender() {
    requestAnimationFrame(() => {
      const tz = this.hass?.config?.time_zone;
      let target = null;
      if (this._schedScrollToDate) {
        target = this.shadowRoot?.querySelector(`.sched-day[data-date="${this._schedScrollToDate}"]`);
        this._schedScrollToDate = null;
      }
      if (!target) {
        const todayKey = new Date().toLocaleDateString('en-CA', tz ? { timeZone: tz } : {});
        target = this.shadowRoot?.querySelector(`.sched-day[data-date="${todayKey}"]`);
      }
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  _formatDate(iso) {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      const month = this._t('month.' + (d.getMonth() + 1));
      return `${d.getDate()} ${month}`;
    } catch (e) { return ''; }
  }

  _localizeRoundName(round) {
    const map = {
      'Final': 'round.final',
      'Semifinals': 'round.semifinals',
      'Quarterfinals': 'round.quarterfinals',
      'Round of 16': 'round.r16',
      'Round of 32': 'round.r32',
      'Round of 64': 'round.r64',
      'Third Place': 'round.third_place',
      'Knockout Playoffs': 'round.knockout_playoffs',
      'Preliminary Round': 'round.preliminary',
    };
    const key = map[round.name];
    return key ? this._t(key) : round.name;
  }

  _formatSeasonInfo(s) {
    if (!s) return '';
    const map = {
      'round-of-32': 'round.r32',
      'round-of-16': 'round.r16',
      'quarterfinals': 'round.quarterfinals',
      'semifinals': 'round.semifinals',
      'final': 'round.final',
      'third-place': 'round.third_place',
      'group-stage': null,
    };
    if (s in map) {
      if (!map[s]) return '';
      return this._t(map[s]);
    }
    return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  _matchesMyTeam(name) {
    if (!this._myTeam || !name) return false;
    return name.toLowerCase().includes(this._myTeam.toLowerCase());
  }

  _tieHasMyTeam(tie) {
    return this._matchesMyTeam((tie.team_a || {}).name) || this._matchesMyTeam((tie.team_b || {}).name);
  }

  _getBracketSide(earlyRounds, qfSplit, sfSplit) {
    if (!this._myTeam) return null;
    for (const tie of sfSplit.left) { if (this._tieHasMyTeam(tie)) return 'left'; }
    for (const tie of sfSplit.right) { if (this._tieHasMyTeam(tie)) return 'right'; }
    for (const tie of qfSplit.left) { if (this._tieHasMyTeam(tie)) return 'left'; }
    for (const tie of qfSplit.right) { if (this._tieHasMyTeam(tie)) return 'right'; }
    for (const round of earlyRounds) {
      const ties = round.ties || [];
      const mid = Math.ceil(ties.length / 2);
      for (let i = 0; i < ties.length; i++) {
        if (this._tieHasMyTeam(ties[i])) return i < mid ? 'left' : 'right';
      }
    }
    return null;
  }

  _isCollapsed(round) {
    const allDone = round.ties.length > 0 && round.ties.every(t => t.completed);
    if (allDone) return !this._expandedRounds.has(round.name);
    return this._collapsedRounds.has(round.name);
  }

  _toggleRound(round) {
    const allDone = round.ties.length > 0 && round.ties.every(t => t.completed);
    if (allDone) {
      const s = new Set(this._expandedRounds);
      if (s.has(round.name)) s.delete(round.name); else s.add(round.name);
      this._expandedRounds = s;
    } else {
      const s = new Set(this._collapsedRounds);
      if (s.has(round.name)) s.delete(round.name); else s.add(round.name);
      this._collapsedRounds = s;
    }
  }

  _roundProgress(round) {
    const total = round.ties.length;
    if (!total) return null;
    const done = round.ties.filter(t => t.completed).length;
    const live = round.ties.filter(t =>
      (t.single && t.single.state === 'in') ||
      (t.leg1 && t.leg1.state === 'in') ||
      (t.leg2 && t.leg2.state === 'in')
    ).length;
    return { total, done, live };
  }

  _formatTime(iso) {
    if (!iso) return '';
    try {
      const tz = this.hass?.config?.time_zone;
      return new Date(iso).toLocaleTimeString([], {
        hour: '2-digit', minute: '2-digit',
        ...(tz ? { timeZone: tz } : {}),
      });
    } catch (e) { return ''; }
  }

  _renderMyNextMatch(scheduleMatches) {
    if (!this._myTeam || !scheduleMatches?.length) return '';
    const now = Date.now();
    const next = scheduleMatches.find(m => {
      if (!(this._matchesMyTeam(m.home_team) || this._matchesMyTeam(m.away_team))) return false;
      if (m.state === 'in') return true;
      if (m.state === 'pre' && m.date) return new Date(m.date).getTime() > now;
      return false;
    });
    if (!next) return '';
    const isLive = next.state === 'in';
    const round = next.season_info ? this._formatSeasonInfo(next.season_info) : '';
    return html`
      <div class="my-next-banner ${isLive ? 'live' : ''}">
        <div class="mnb-teams">
          ${next.home_logo ? html`<img src="${next.home_logo}" class="mnb-logo">` : ''}
          <span class="mnb-name">${next.home_team}</span>
          ${isLive
            ? html`<span class="mnb-score">${next.home_score ?? 0} – ${next.away_score ?? 0}</span>`
            : html`<span class="mnb-vs">vs</span>`}
          <span class="mnb-name away">${next.away_team}</span>
          ${next.away_logo ? html`<img src="${next.away_logo}" class="mnb-logo">` : ''}
        </div>
        <div class="mnb-meta">
          ${round ? html`<span class="mnb-round-tag">${round}</span>` : ''}
          ${!isLive && next.date ? (() => {
            const diff = new Date(next.date).getTime() - now;
            if (diff > 0 && diff < 24 * 3600 * 1000) {
              const h = Math.floor(diff / 3600000);
              const m = Math.floor((diff % 3600000) / 60000);
              return html`<span class="mnb-countdown">⏱ ${h > 0 ? `${h}u ${m}m` : `${m}m`}</span>`;
            }
            return html`<span class="mnb-date">${this._formatDate(next.date)} · ${this._formatTime(next.date)}</span>`;
          })() : ''}
          ${next.venue ? html`<span class="mnb-venue">📍 ${next.venue}</span>` : ''}
        </div>
      </div>
    `;
  }

  _renderSchedule(matches) {
    if (!matches || !matches.length) {
      return html`<div class="sched-empty">${this._t('generic.no_match')}</div>`;
    }
    const now = Date.now();
    const maxFuture = now + 45 * 24 * 3600 * 1000;
    const tz = this.hass?.config?.time_zone;

    // Base filter: hide ESPN placeholder dates (post=must be past, pre=within 45 days)
    const relevant = matches.filter(m => {
      if (!m.date) return false;
      const d = new Date(m.date).getTime();
      if (m.state === 'in') return true;
      if (m.state === 'post') return d <= now;
      return d >= now && d <= maxFuture;
    });
    const base = [...(relevant.length ? relevant : matches)]
      .sort((a, b) => (a.date || '') < (b.date || '') ? -1 : 1);

    // Precompute chip counts
    const todayKey = new Date().toLocaleDateString('en-CA', tz ? { timeZone: tz } : {});
    const liveCount = base.filter(m => m.state === 'in').length;
    const todayCount = base.filter(m => m.date
      ? new Date(m.date).toLocaleDateString('en-CA', tz ? { timeZone: tz } : {}) === todayKey
      : false).length;
    const myTeamCount = this._myTeam
      ? base.filter(m => this._matchesMyTeam(m.home_team) || this._matchesMyTeam(m.away_team)).length
      : 0;

    // Resolve auto filter
    let effectiveFilter = this._schedFilter;
    if (effectiveFilter === 'auto') {
      effectiveFilter = liveCount > 0 ? 'live' : todayCount > 0 ? 'today' : 'all';
    }

    // Apply filter
    const displayed = effectiveFilter === 'live'
      ? base.filter(m => m.state === 'in')
      : effectiveFilter === 'my-team'
        ? base.filter(m => this._matchesMyTeam(m.home_team) || this._matchesMyTeam(m.away_team))
        : effectiveFilter === 'today'
          ? base.filter(m => m.date
              ? new Date(m.date).toLocaleDateString('en-CA', tz ? { timeZone: tz } : {}) === todayKey
              : false)
          : base;

    const byDate = {};
    for (const m of displayed) {
      const key = m.date ? new Date(m.date).toLocaleDateString('en-CA', tz ? { timeZone: tz } : {}) : '';
      if (!byDate[key]) byDate[key] = [];
      byDate[key].push(m);
    }

    return html`
      <div class="sched-view">
        <div class="sched-filters">
          ${[
            ['all', this._t('editor.all_groups'), base.length],
            ['live', this._t('status.live'), liveCount],
            ['today', this._t('time.today'), todayCount],
            ...(this._myTeam ? [['my-team', this._myTeam, myTeamCount]] : []),
          ].map(([f, label, count]) => html`
            <span class="sched-chip ${effectiveFilter === f ? 'active' : ''} ${!count && f !== 'all' ? 'empty' : ''}"
                  @click=${() => { this._schedFilter = f; }}>
              ${label}${count > 0 ? html`<span class="chip-count">${count}</span>` : ''}
            </span>
          `)}
        </div>
        ${!displayed.length ? html`<div class="sched-empty">${this._t('generic.no_match')}</div>` : ''}
        ${Object.entries(byDate).map(([key, ms]) => html`
          <div class="sched-day" data-date=${key}>
            <div class="sched-day-label">
              ${ms[0].season_info ? (() => { const r = this._formatSeasonInfo(ms[0].season_info); return r ? html`<span class="sched-round-chip">${r}</span>` : ''; })() : ''}
              <span>${this._formatDate(ms[0].date)}</span>
            </div>
            <div class="sched-matches">
              ${ms.map(m => {
                const isLive = m.state === 'in';
                const isDone = m.state === 'post';
                const homeName = m.home_team || 'TBD';
                const awayName = m.away_team || 'TBD';
                const matchMyTeam = this._matchesMyTeam(homeName) || this._matchesMyTeam(awayName);
                const scoreOrTime = (isDone || isLive)
                  ? `${m.home_score ?? '-'} – ${m.away_score ?? '-'}`
                  : this._formatTime(m.date);
                return html`
                  <div class="sched-match ${isLive ? 'live' : ''} ${isDone ? 'done' : ''} ${matchMyTeam && this._myTeam ? 'my-team' : ''}">
                    <div class="sched-team">
                      ${m.home_logo ? html`<img class="sched-logo" src="${m.home_logo}" alt="">` : ''}
                      <span class="sched-name">${homeName}</span>
                    </div>
                    <div class="sched-score">
                      ${isLive ? html`<span class="dot"></span>` : ''}
                      <span>${scoreOrTime}</span>
                      ${isLive && m.clock ? html`<span class="sched-clock">${m.clock}'</span>` : ''}
                    </div>
                    <div class="sched-team away">
                      ${m.away_logo ? html`<img class="sched-logo" src="${m.away_logo}" alt="">` : ''}
                      <span class="sched-name">${awayName}</span>
                    </div>
                  </div>
                `;
              })}
            </div>
          </div>
        `)}
      </div>
    `;
  }

  getCardSize() { return 6; }
  static getConfigElement() { return document.createElement("soccer-live-bracket-editor"); }
  static getStubConfig() {
    return { entity: "sensor.soccer_live_bracket", hide_header: false, compact: false, style: 'list' };
  }

  _formatScore(s) {
    if (s === null || s === undefined) return '-';
    return String(s);
  }

  _renderTie(tie) {
    const a = tie.team_a || {};
    const b = tie.team_b || {};
    const leg1 = tie.leg1;
    const leg2 = tie.leg2;
    const single = tie.single;
    const winner = tie.winner_team;
    const isAWinner = winner && a.name && winner === a.name;
    const isBWinner = winner && b.name && winner === b.name;

    // Determine scores for team_a and team_b per leg (teams may switch home/away between legs)
    const scoreFor = (leg, team) => {
      if (!leg || !team || !team.name) return null;
      if (leg.home_team === team.name) return leg.home_score;
      if (leg.away_team === team.name) return leg.away_score;
      return null;
    };

    const aL1 = scoreFor(leg1, a);
    const bL1 = scoreFor(leg1, b);
    const aL2 = scoreFor(leg2, a);
    const bL2 = scoreFor(leg2, b);
    const aSingle = scoreFor(single, a);
    const bSingle = scoreFor(single, b);

    const isLive = (leg1 && leg1.state === 'in') || (leg2 && leg2.state === 'in') || (single && single.state === 'in');
    const isPending = !leg1 && !single;

    const hasMyTeam = this._myTeam ? this._tieHasMyTeam(tie) : null;
    return html`
      <div class="tie ${isLive ? 'live' : ''} ${tie.completed ? 'done' : ''} ${hasMyTeam === true ? 'my-team' : ''} ${hasMyTeam === false ? 'other-team' : ''}">
        <div class="tie-row ${isAWinner ? 'winner' : ''} ${isBWinner ? 'loser' : ''}">
          <img src="${a.logo}" alt="${a.name}" />
          <span class="tname">${a.name || 'TBD'}</span>
          <span class="legs">
            ${single ? html`<span class="leg">${this._formatScore(aSingle)}</span>` : html`
              <span class="leg">${this._formatScore(aL1)}</span>
              <span class="leg">${this._formatScore(aL2)}</span>
            `}
          </span>
        </div>
        <div class="tie-row ${isBWinner ? 'winner' : ''} ${isAWinner ? 'loser' : ''}">
          <img src="${b.logo}" alt="${b.name}" />
          <span class="tname">${b.name || 'TBD'}</span>
          <span class="legs">
            ${single ? html`<span class="leg">${this._formatScore(bSingle)}</span>` : html`
              <span class="leg">${this._formatScore(bL1)}</span>
              <span class="leg">${this._formatScore(bL2)}</span>
            `}
          </span>
        </div>
        <div class="tie-foot">
          ${isLive ? html`<span class="live-badge"><span class="dot"></span>${this._t('status.live')}</span>` : ''}
          ${tie.aggregate ? html`<span class="agg">${this._t('bracket.agg')} ${tie.aggregate}</span>` : ''}
          ${tie.tied ? html`<span class="agg tied">${this._t('bracket.tied_agg')}</span>` : ''}
          ${!tie.completed && !isLive && tie.first_leg_date ? html`<span class="date">${this._formatDate(tie.first_leg_date)}</span>` : ''}
          ${isPending ? html`<span class="date pending">${this._t('bracket.tbd')}</span>` : ''}
          ${tie.completed && hasMyTeam
            ? this._matchesMyTeam(tie.winner_team)
              ? html`<span class="my-result won">✓ ${this._t('bracket.won')}</span>`
              : html`<span class="my-result lost">✗ ${this._t('bracket.eliminated')}</span>`
            : ''}
        </div>
      </div>
    `;
  }

  _aggregateFor(tie, team) {
    if (!team || !team.name) return null;
    const scoreFor = (leg, t) => {
      if (!leg || !t || !t.name) return null;
      if (leg.home_team === t.name) return leg.home_score;
      if (leg.away_team === t.name) return leg.away_score;
      return null;
    };
    if (tie.single) return scoreFor(tie.single, team);
    let total = 0; let any = false;
    const v1 = scoreFor(tie.leg1, team);
    const v2 = scoreFor(tie.leg2, team);
    if (v1 !== null && v1 !== undefined) { total += v1; any = true; }
    if (v2 !== null && v2 !== undefined) { total += v2; any = true; }
    return any ? total : null;
  }

  _renderMiniTie(tie) {
    const a = tie.team_a || {};
    const b = tie.team_b || {};
    const aAgg = this._aggregateFor(tie, a);
    const bAgg = this._aggregateFor(tie, b);
    const winner = tie.winner_team;
    const isAW = winner && a.name && winner === a.name;
    const isBW = winner && b.name && winner === b.name;
    const isLive = (tie.leg1 && tie.leg1.state === 'in') || (tie.leg2 && tie.leg2.state === 'in') || (tie.single && tie.single.state === 'in');
    const liveLeg = (tie.leg1?.state === 'in' ? tie.leg1 : null) ||
                   (tie.leg2?.state === 'in' ? tie.leg2 : null) ||
                   (tie.single?.state === 'in' ? tie.single : null);
    const liveClock = liveLeg?.clock || '';
    const isPending = !tie.leg1 && !tie.single;
    const abbrA = a.abbrev || (a.name ? a.name.substring(0, 3).toUpperCase() : 'TBD');
    const abbrB = b.abbrev || (b.name ? b.name.substring(0, 3).toUpperCase() : 'TBD');

    const hasMyTeam = this._myTeam ? this._tieHasMyTeam(tie) : null;
    const tieDate = tie.leg1?.date || tie.leg2?.date || tie.single?.date || tie.first_leg_date || null;
    const canNavSched = !!(this._matchesEntity && tieDate);
    return html`
      <div class="mini-tie ${isLive ? 'live' : ''} ${tie.completed ? 'done' : ''} ${isPending ? 'pending' : ''} ${hasMyTeam === true ? 'my-team' : ''} ${hasMyTeam === false ? 'other-team' : ''} ${canNavSched ? 'sched-link' : ''}"
        @click=${canNavSched ? () => {
          const tz = this.hass?.config?.time_zone;
          this._schedScrollToDate = new Date(tieDate).toLocaleDateString('en-CA', tz ? { timeZone: tz } : {});
          this._schedFilter = 'all';
          this._activeTab = 'schedule';
        } : null}>
        <div class="mini-team ${isAW ? 'winner' : ''} ${isBW ? 'loser' : ''}">
          ${a.logo ? html`<img src="${a.logo}" alt="${a.name}" />` : html`<div class="logo-ph"></div>`}
          <span class="abbr">${abbrA}</span>
          <span class="agg-num">${aAgg !== null ? aAgg : '-'}</span>
        </div>
        <div class="mini-team ${isBW ? 'winner' : ''} ${isAW ? 'loser' : ''}">
          ${b.logo ? html`<img src="${b.logo}" alt="${b.name}" />` : html`<div class="logo-ph"></div>`}
          <span class="abbr">${abbrB}</span>
          <span class="agg-num">${bAgg !== null ? bAgg : '-'}</span>
        </div>
        ${isLive ? html`
          <div class="mini-clock">
            <span class="dot"></span>
            ${liveClock ? html`<span class="mini-clock-text">${liveClock}</span>` : ''}
          </div>
        ` : ''}
        ${isPending && tie.first_leg_date ? html`<div class="mini-date">${this._formatDate(tie.first_leg_date)}</div>` : ''}
        ${tie.completed && hasMyTeam
          ? html`<div class="mini-result ${this._matchesMyTeam(tie.winner_team) ? 'won' : 'lost'}">${this._matchesMyTeam(tie.winner_team) ? '✓' : '✗'}</div>`
          : ''}
      </div>
    `;
  }

  _renderTreeRound(ties, labelKey) {
    return html`
      <div class="tree-col">
        <div class="tree-col-label">
          <span class="tree-col-label-en">${this._t(labelKey)}</span>
        </div>
        <div class="tree-col-ties">
          ${ties.map(t => this._renderMiniTie(t))}
        </div>
      </div>
    `;
  }

  _renderArrows(outputCount, direction) {
    // Bracket connectors: for each tie in the next round, draw a bracket connecting
    // two ties from the previous round. SVG with % coordinates.
    if (outputCount <= 0) return '';
    const inputCount = outputCount * 2;
    const parts = [];
    const isLeft = direction === 'left';
    const markerId = `arrow-${direction}`;

    for (let j = 0; j < outputCount; j++) {
      const yTop = ((2 * j + 0.5) / inputCount) * 100;
      const yBot = ((2 * j + 1.5) / inputCount) * 100;
      const yMid = ((j + 0.5) / outputCount) * 100;
      if (isLeft) {
        // 2 horizontal lines (from the two source ties toward the right)
        parts.push(svg`<line x1="0" y1="${yTop}%" x2="50%" y2="${yTop}%" stroke-linecap="round" />`);
        parts.push(svg`<line x1="0" y1="${yBot}%" x2="50%" y2="${yBot}%" stroke-linecap="round" />`);
        // verticale
        parts.push(svg`<line x1="50%" y1="${yTop}%" x2="50%" y2="${yBot}%" />`);
        // final horizontal line toward the right (with arrowhead marker)
        parts.push(svg`<line x1="50%" y1="${yMid}%" x2="100%" y2="${yMid}%" marker-end="url(#${markerId})" />`);
      } else {
        parts.push(svg`<line x1="100%" y1="${yTop}%" x2="50%" y2="${yTop}%" stroke-linecap="round" />`);
        parts.push(svg`<line x1="100%" y1="${yBot}%" x2="50%" y2="${yBot}%" stroke-linecap="round" />`);
        parts.push(svg`<line x1="50%" y1="${yTop}%" x2="50%" y2="${yBot}%" />`);
        parts.push(svg`<line x1="50%" y1="${yMid}%" x2="0" y2="${yMid}%" marker-end="url(#${markerId})" />`);
      }
    }

    // Two fixed markers (no orient="auto" which misbehaves with marker-end on lines
    // going leftward). Explicit path per direction.
    const marker = isLeft
      ? svg`<marker id="${markerId}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M0,0 L10,5 L0,10 z" fill="var(--cl-accent)" /></marker>`
      : svg`<marker id="${markerId}" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M10,0 L0,5 L10,10 z" fill="var(--cl-accent)" /></marker>`;

    return html`
      <div class="tree-arrows ${direction}">
        <svg class="connector-svg ${direction}" preserveAspectRatio="none">
          <defs>${marker}</defs>
          ${parts}
        </svg>
      </div>
    `;
  }

  _renderTree(rounds) {
    const findRound = (targetSize) => {
      const candidates = rounds.filter(r => r.size === targetSize);
      if (candidates.length === 0) return null;
      const exact = candidates.find(r => r.name !== 'Knockout Playoffs' && r.name !== 'Preliminary Round' && r.name !== 'Third Place');
      return exact || candidates[candidates.length - 1];
    };
    const playoffsRound = rounds.find(r => r.name === 'Knockout Playoffs');
    const thirdPlaceRound = rounds.find(r => r.name === 'Third Place');
    const r32 = findRound(16);
    const r16 = findRound(8);
    const qf = findRound(4);
    const sf = findRound(2);
    const finalRound = rounds.find(r => r.name === 'Final') || findRound(1);

    // When QF+SF are both present, move R32 and R16 to the early-rounds grid below the
    // tree so the tree shows only QF → SF → Final (max 2 columns per side).
    const fullBracket = !!(qf && sf);
    const r32InEarly = !!(r32 && fullBracket);
    const r16InEarly = !!(r16 && fullBracket);

    // Early rounds shown below tree: R64+ always, R32/R16 when full bracket present
    const earlyRounds = rounds.filter(r => {
      if (r.name === 'Third Place' || r.name === 'Final' || r.name === 'Knockout Playoffs') return false;
      if (r.size > 16) return true;
      if (r.size === 16 && r32InEarly) return true;
      if (r.size === 8 && r16InEarly) return true;
      return false;
    });

    const split = (round) => {
      if (!round) return { left: [], right: [] };
      const ties = round.ties || [];
      const mid = Math.ceil(ties.length / 2);
      return { left: ties.slice(0, mid), right: ties.slice(mid) };
    };
    const r32Split = split(r32InEarly ? null : r32);
    const r16Split = split(r16InEarly ? null : r16);
    const qfSplit = split(qf);
    const sfSplit = split(sf);
    const playoffsSplit = this._treeShowPlayoffs ? split(playoffsRound) : null;
    const finalTie = finalRound ? finalRound.ties[0] : null;
    const thirdPlaceTie = thirdPlaceRound ? thirdPlaceRound.ties[0] : null;
    const hasSides = r32Split.left.length || r16Split.left.length || qfSplit.left.length || sfSplit.left.length;

    // Outermost left/right column count (for playoff arrows)
    const outerLeft = r32Split.left.length || r16Split.left.length;
    const outerRight = r32Split.right.length || r16Split.right.length;

    const pathSide = this._getBracketSide(earlyRounds, qfSplit, sfSplit);

    return html`
      <div class="tree-wrap ${earlyRounds.length ? 'has-early' : ''}">
        <div class="tree ${!hasSides ? 'tree-center-only' : ''} ${r32InEarly ? 'no-r32' : ''} ${r16InEarly ? 'no-r16' : ''}">
          <div class="tree-half left ${pathSide === 'left' ? 'path-my-team' : pathSide ? 'path-other' : ''}">
            ${playoffsSplit && playoffsSplit.left.length ? html`
              ${this._renderTreeRound(playoffsSplit.left, 'round.knockout_playoffs')}
              ${outerLeft ? this._renderArrows(outerLeft, 'left') : ''}
            ` : ''}
            ${r32Split.left.length ? this._renderTreeRound(r32Split.left, 'round.r32') : ''}
            ${r32Split.left.length && r16Split.left.length ? this._renderArrows(r16Split.left.length, 'left') : ''}
            ${r16Split.left.length ? this._renderTreeRound(r16Split.left, 'round.r16') : ''}
            ${r16Split.left.length && qfSplit.left.length ? this._renderArrows(qfSplit.left.length, 'left') : ''}
            ${qfSplit.left.length ? this._renderTreeRound(qfSplit.left, 'round.quarterfinals') : ''}
            ${qfSplit.left.length && sfSplit.left.length ? this._renderArrows(sfSplit.left.length, 'left') : ''}
            ${sfSplit.left.length ? this._renderTreeRound(sfSplit.left, 'round.semifinals') : ''}
            ${sfSplit.left.length ? this._renderArrows(1, 'left') : ''}
          </div>

          <div class="tree-center">
            <div class="trophy">🏆</div>
            <div class="trophy-label">${this._t('round.final')}</div>
            ${finalTie
              ? html`<div class="final-tie-wrap">${this._renderMiniTie(finalTie)}</div>`
              : html`<div class="final-placeholder">${this._t('bracket.tbd')}</div>`
            }
            ${(() => {
              const champion = finalTie?.completed && finalTie?.winner_team
                ? [finalTie.team_a, finalTie.team_b].find(t => t?.name === finalTie.winner_team)
                : null;
              return champion ? html`
                <div class="champion-banner">
                  ${champion.logo ? html`<img class="champion-logo" src="${champion.logo}" alt="">` : ''}
                  <span class="champion-crown">👑</span>
                  <span class="champion-name">${champion.name}</span>
                </div>
              ` : '';
            })()}
            ${thirdPlaceTie ? html`
              <div class="third-place-wrap">
                <div class="third-place-label">🥉 ${this._t('round.third_place')}</div>
                <div class="final-tie-wrap third">${this._renderMiniTie(thirdPlaceTie)}</div>
              </div>
            ` : ''}
            ${!hasSides && !earlyRounds.length
              ? html`<div class="tree-pending">${this._t('bracket.empty.sub')}</div>`
              : ''}
          </div>

          <div class="tree-half right ${pathSide === 'right' ? 'path-my-team' : pathSide ? 'path-other' : ''}">
            ${sfSplit.right.length ? this._renderArrows(1, 'right') : ''}
            ${sfSplit.right.length ? this._renderTreeRound(sfSplit.right, 'round.semifinals') : ''}
            ${sfSplit.right.length && qfSplit.right.length ? this._renderArrows(sfSplit.right.length, 'right') : ''}
            ${qfSplit.right.length ? this._renderTreeRound(qfSplit.right, 'round.quarterfinals') : ''}
            ${qfSplit.right.length && r16Split.right.length ? this._renderArrows(qfSplit.right.length, 'right') : ''}
            ${r16Split.right.length ? this._renderTreeRound(r16Split.right, 'round.r16') : ''}
            ${r16Split.right.length && r32Split.right.length ? this._renderArrows(r16Split.right.length, 'right') : ''}
            ${r32Split.right.length ? this._renderTreeRound(r32Split.right, 'round.r32') : ''}
            ${playoffsSplit && playoffsSplit.right.length ? html`
              ${outerRight ? this._renderArrows(outerRight, 'right') : ''}
              ${this._renderTreeRound(playoffsSplit.right, 'round.knockout_playoffs')}
            ` : ''}
          </div>
        </div>

        ${earlyRounds.map(round => {
          const collapsed = this._isCollapsed(round);
          const prog = this._roundProgress(round);
          const allDone = prog && prog.done === prog.total && prog.total > 0;
          const roundDates = round.ties.map(t => t.first_leg_date).filter(Boolean).sort();
          const dateRange = roundDates.length
            ? (roundDates[0] === roundDates[roundDates.length - 1]
                ? this._formatDate(roundDates[0])
                : `${this._formatDate(roundDates[0])} – ${this._formatDate(roundDates[roundDates.length - 1])}`)
            : '';
          return html`
            <div class="early-round-section ${collapsed ? 'collapsed' : ''}">
              <div class="early-round-label" @click=${() => this._toggleRound(round)}>
                <span class="early-round-name">
                  ${this._localizeRoundName(round)}
                  ${dateRange ? html`<span class="early-date-range"> · ${dateRange}</span>` : ''}
                </span>
                ${prog ? html`
                  <span class="round-prog ${allDone ? 'done' : prog.live ? 'live' : ''}">
                    ${allDone ? '✓' : prog.live ? html`<span class="dot"></span>` : ''}
                    ${prog.done}/${prog.total}
                  </span>
                ` : ''}
                ${this._matchesEntity ? html`
                  <span class="early-sched-btn" title="View in schedule" @click=${e => {
                    e.stopPropagation();
                    this._schedScrollToDate = roundDates[0] || null;
                    this._schedFilter = 'all';
                    this._activeTab = 'schedule';
                  }}>📅</span>
                ` : ''}
                <span class="round-chevron">${collapsed ? '›' : '‹' }</span>
              </div>
              ${collapsed ? '' : html`
                <div class="early-round-ties">
                  ${round.ties.map(tie => this._renderTie(tie))}
                </div>
              `}
            </div>
          `;
        })}
      </div>
    `;
  }

  _renderGroups(groups) {
    return html`
      <div class="groups-view">
        ${groups.map(g => html`
          <div class="group-block">
            <div class="group-title">${g.name}</div>
            <div class="group-header-row">
              <span class="gh-name"></span>
              <span class="gh-stat">P</span>
              <span class="gh-stat">W</span>
              <span class="gh-stat">D</span>
              <span class="gh-stat">L</span>
              <span class="gh-stat">GD</span>
              <span class="gh-pts">Pts</span>
            </div>
            ${g.standings.map((row, i) => html`
              <div class="group-row ${this._matchesMyTeam(row.team_name) ? 'my-team' : ''} ${i < 2 ? 'qualify' : ''}">
                <span class="g-rank">${row.rank}</span>
                ${row.team_logo && row.team_logo !== 'N/A'
                  ? html`<img class="g-logo" src="${row.team_logo}" alt="" @error=${e => e.target.style.display='none'}>`
                  : html`<div class="g-logo-ph"></div>`}
                <span class="g-name">${row.team_name}</span>
                <span class="g-stat">${row.games_played}</span>
                <span class="g-stat">${row.wins}</span>
                <span class="g-stat">${row.draws}</span>
                <span class="g-stat">${row.losses}</span>
                <span class="g-stat g-gd ${Number(row.goal_difference) > 0 ? 'pos' : Number(row.goal_difference) < 0 ? 'neg' : ''}">${row.goal_difference}</span>
                <span class="g-pts">${row.points}</span>
              </div>
            `)}
          </div>
        `)}
      </div>
    `;
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;

    const rounds = stateObj.attributes.rounds || [];

    const groupsEntityId = this._config.groups_entity;
    const groupsStateObj = groupsEntityId ? this.hass.states[groupsEntityId] : null;
    const groupsData = (groupsStateObj?.attributes?.standings_groups || []).filter(g => g.standings?.length);
    const hasGroups = groupsData.length > 0;

    const matchesEntityId = this._config.matches_entity || this._matchesEntity;
    const matchesStateObj = matchesEntityId ? this.hass.states[matchesEntityId] : null;
    const scheduleMatches = matchesStateObj?.attributes?.matches || [];
    const hasSchedule = scheduleMatches.length > 0;

    if (rounds.length === 0 && !hasGroups && !hasSchedule) {
      return html`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">🏆</div>
            <div class="empty-title">${this._t('bracket.empty.title')}</div>
            <div class="empty-sub">${this._t('bracket.empty.sub')}</div>
          </div>
        </ha-card>
      `;
    }

    const lastRound = rounds[rounds.length - 1];
    const badgeLabel = lastRound ? this._localizeRoundName(lastRound) : stateObj.state;

    return html`
      <ha-card class="${this._compact ? 'compact' : ''} style-${this._cardStyle}">
        <div class="hero-bg"></div>
        ${!this._hideHeader ? html`
          ${renderSoccerHeader({
            logo: stateObj.attributes.league_logo || (stateObj.attributes.league_info || [])[0]?.logo_href || null,
            title: stateObj.attributes.league_name || this._t('card.bracket'),
            badge: renderSoccerBadge(badgeLabel, 'neutral'),
            fallbackIcon: '🏆',
          })}
        ` : ''}

        ${this._renderMyNextMatch(scheduleMatches)}

        ${(hasGroups || hasSchedule) ? html`
          <div class="bracket-tabs">
            <span class="bracket-tab ${this._activeTab === 'bracket' ? 'active' : ''}"
                  @click=${() => { this._activeTab = 'bracket'; }}>
              🏆 ${this._t('bracket.tab_bracket')}
            </span>
            ${hasGroups ? html`
              <span class="bracket-tab ${this._activeTab === 'groups' ? 'active' : ''}"
                    @click=${() => { this._activeTab = 'groups'; }}>
                📊 ${this._t('bracket.tab_groups')}
              </span>
            ` : ''}
            ${hasSchedule ? html`
              <span class="bracket-tab ${this._activeTab === 'schedule' ? 'active' : ''}"
                    @click=${() => { this._activeTab = 'schedule'; }}>
                📅 ${this._t('bracket.tab_schedule')}
              </span>
            ` : ''}
          </div>
        ` : ''}

        ${this._activeTab === 'groups' && hasGroups
          ? this._renderGroups(groupsData)
          : this._activeTab === 'schedule' && hasSchedule
            ? this._renderSchedule(scheduleMatches)
            : this._cardStyle === 'tree'
            ? this._renderTree(rounds)
            : html`
              <div class="rounds-container"
                   style="${this._compact ? 'flex-direction:column;overflow-x:visible;' : ''}">
                ${rounds.map(round => html`
                  <div class="round"
                       style="${this._compact ? 'flex:none;min-width:0;' : ''}">
                    <div class="round-name">
                      <span class="round-name-en">${this._localizeRoundName(round)}</span>
                    </div>
                    <div class="round-ties"
                         style="${this._compact ? 'display:grid;grid-template-columns:1fr 1fr;gap:8px;' : ''}">
                      ${round.ties.map(tie => this._renderTie(tie))}
                    </div>
                  </div>
                `)}
              </div>
            `
        }
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--cl-text); }
      .empty-sub { font-size: 12px; color: var(--cl-text-2); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }


      .rounds-container {
        position: relative; z-index: 1;
        display: flex;
        gap: 16px;
        padding: 18px;
        overflow-x: auto;
      }
      .round {
        flex: 1 0 240px;
        min-width: 240px;
        display: flex; flex-direction: column;
        gap: 8px;
        justify-content: space-around;
      }
      .round-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        text-align: center;
        padding: 6px 12px;
        border-radius: 12px;
        background: rgba(var(--cl-accent-rgb),0.12);
        align-self: center;
        margin-bottom: 4px;
      }
      .round-name-en {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .round-ties {
        display: flex; flex-direction: column;
        gap: 12px;
        justify-content: space-around;
        flex: 1;
      }

      .tie {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 10px 12px;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }
      .tie:hover {
        border-color: var(--cl-accent);
        transform: translateY(-2px);
      }
      .tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      @keyframes tie-pulse {
        0%, 100% { box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow); }
        50% { box-shadow: 0 0 0 2px var(--cl-live), 0 0 30px var(--cl-live-glow); }
      }
      .tie.done {
        border-color: rgba(16,185,129,0.3);
      }

      .tie-row {
        display: grid;
        grid-template-columns: 22px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 5px 0;
      }
      .tie-row + .tie-row {
        border-top: 1px solid var(--cl-divider);
      }
      .tie-row img {
        width: 22px; height: 22px;
        object-fit: contain;
      }
      .tie-row .tname {
        font-size: 13px;
        font-weight: 600;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .tie-row.winner .tname { font-weight: 800; }
      .tie-row.loser .tname { color: var(--cl-text-2); }
      .tie-row.loser img { opacity: 0.55; }

      .legs {
        display: inline-flex;
        gap: 4px;
      }
      .leg {
        min-width: 22px;
        text-align: center;
        font-size: 13px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255,255,255,0.06);
        color: var(--cl-text);
      }
      .tie-row.winner .leg {
        background: rgba(16,185,129,0.2);
        color: var(--cl-green);
      }
      .tie-row.loser .leg {
        opacity: 0.5;
      }

      .tie-foot {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed var(--cl-divider);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .agg {
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--cl-green);
        padding: 2px 8px;
        background: rgba(16,185,129,0.12);
        border-radius: 6px;
      }
      .agg.tied {
        color: var(--cl-gold);
        background: rgba(251,191,36,0.12);
      }
      .date {
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .date.pending {
        color: var(--cl-accent);
      }
      .my-result {
        font-size: 9px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.08em; padding: 2px 7px; border-radius: 6px;
      }
      .my-result.won { color: var(--cl-green); background: rgba(16,185,129,0.12); }
      .my-result.lost { color: var(--cl-live); background: rgba(239,68,68,0.08); }
      .live-badge {
        display: inline-flex; align-items: center; gap: 5px;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .live-badge .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: white;
        animation: dot-pulse 1.2s ease-in-out infinite;
      }
      @keyframes dot-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      /* Team highlight */
      .tie.my-team { border-color: var(--cl-green) !important; box-shadow: 0 0 16px rgba(16,185,129,0.25); }
      .tie.other-team { opacity: 0.45; }
      .mini-tie.my-team { border-color: var(--cl-green) !important; box-shadow: 0 0 12px rgba(16,185,129,0.3); }
      .mini-tie.other-team { opacity: 0.38; filter: grayscale(0.3); }

      /* Tab bar */
      .bracket-tabs {
        position: relative; z-index: 1;
        display: flex; gap: 6px; padding: 0 16px 12px;
      }
      .bracket-tab {
        font-size: 11px; font-weight: 700; padding: 5px 14px; border-radius: 99px;
        cursor: pointer; white-space: nowrap;
        border: 1px solid var(--cl-divider); background: var(--cl-surface); color: var(--cl-text-2);
        transition: background 0.15s;
        user-select: none;
      }
      .bracket-tab.active { background: var(--cl-accent); border-color: var(--cl-accent); color: #fff; }

      /* Groups view */
      .groups-view {
        position: relative; z-index: 1;
        padding: 0 14px 18px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 12px;
      }
      .group-block {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        overflow: hidden;
      }
      .group-title {
        font-size: 10px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.12em; color: var(--cl-accent);
        padding: 7px 10px;
        background: rgba(var(--cl-accent-rgb),0.08);
        border-bottom: 1px solid var(--cl-divider);
      }
      .group-header-row {
        display: grid;
        grid-template-columns: 20px 20px 1fr repeat(5, 26px) 28px;
        align-items: center;
        gap: 2px;
        padding: 4px 8px 3px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .gh-name { grid-column: span 3; }
      .gh-stat, .gh-pts {
        font-size: 9px; font-weight: 700; color: var(--cl-text-2);
        text-align: center; text-transform: uppercase;
      }
      .gh-pts { color: var(--cl-accent); }
      .group-row {
        display: grid;
        grid-template-columns: 20px 20px 1fr repeat(5, 26px) 28px;
        align-items: center;
        gap: 2px;
        padding: 5px 8px;
        border-bottom: 1px solid rgba(255,255,255,0.03);
        transition: background 0.15s;
      }
      .group-row:last-child { border-bottom: none; }
      .group-row.qualify { background: rgba(var(--cl-accent-rgb),0.04); }
      .group-row.my-team {
        background: rgba(16,185,129,0.08);
        border-left: 2px solid var(--cl-green);
      }
      .g-rank { font-size: 10px; font-weight: 700; color: var(--cl-text-2); text-align: center; }
      .g-logo { width: 18px; height: 18px; object-fit: contain; display: block; }
      .g-logo-ph { width: 18px; height: 18px; border-radius: 50%; background: var(--cl-card-2); }
      .g-name { font-size: 11px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .group-row.my-team .g-name { font-weight: 800; color: var(--cl-green); }
      .g-stat { font-size: 11px; font-weight: 600; color: var(--cl-text-2); text-align: center; font-variant-numeric: tabular-nums; }
      .g-gd.pos { color: var(--cl-green); }
      .g-gd.neg { color: var(--cl-live); }
      .g-pts { font-size: 12px; font-weight: 800; color: var(--cl-text); text-align: center; font-variant-numeric: tabular-nums; }
      .group-row.my-team .g-pts { color: var(--cl-green); }

      /* ============== SCHEDULE TAB ============== */
      .sched-view { padding: 8px 16px 16px; }
      .sched-empty { padding: 32px; text-align: center; color: var(--cl-text-2); font-size: 13px; }
      .sched-day { margin-bottom: 16px; }
      .sched-day-label {
        font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--cl-accent); padding: 4px 8px; margin-bottom: 6px;
        background: rgba(var(--cl-accent-rgb),0.10); border-radius: 6px; display: inline-block;
      }
      .sched-matches { display: flex; flex-direction: column; gap: 4px; }
      .sched-match {
        display: grid; grid-template-columns: 1fr auto 1fr;
        align-items: center; gap: 8px;
        background: var(--cl-card-2); border-radius: 8px; padding: 7px 10px;
        border: 1px solid var(--cl-glass-border);
      }
      .sched-match.live { border-color: var(--cl-live); box-shadow: 0 0 12px var(--cl-live-glow); }
      .sched-match.my-team { border-color: var(--cl-green); }
      .sched-team {
        display: flex; align-items: center; gap: 6px;
        overflow: hidden;
      }
      .sched-team.away { justify-content: flex-end; text-align: right; flex-direction: row-reverse; }
      .sched-logo { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
      .sched-name { font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .sched-score {
        display: flex; align-items: center; gap: 4px; justify-content: center;
        font-size: 13px; font-weight: 800; white-space: nowrap; font-variant-numeric: tabular-nums;
        min-width: 56px; text-align: center;
      }
      .sched-match.live .sched-score { color: var(--cl-live); }
      .sched-clock { font-size: 9px; font-weight: 700; color: var(--cl-text-2); opacity: 0.8; }
      .sched-score .dot {
        width: 7px; height: 7px; border-radius: 50%; background: var(--cl-live); flex-shrink: 0;
        animation: pulse 1.2s ease-in-out infinite;
      }

      /* Compact mode (vertical, single column per round) */
      .rounds-container.compact {
        flex-direction: column;
        overflow-x: visible;
      }
      .rounds-container.compact .round {
        flex: none;
        min-width: 0;
      }

      @media (max-width: 600px) {
        ha-card.style-list .rounds-container {
          flex-direction: column;
        }
        ha-card.style-list .round {
          flex: none;
          min-width: 0;
        }
      }

      /* ============== STYLE: TREE ============== */
      .tree-wrap {
        position: relative;
        z-index: 1;
        overflow-x: auto;
        padding: 24px 12px 24px;
      }
      .tree {
        display: flex;
        align-items: stretch;
        justify-content: center;
        min-height: 480px;
        gap: 0;
        min-width: max-content;
      }
      .tree-half {
        flex: 1 0 auto;
        display: flex;
        align-items: stretch;
      }
      .tree-half.path-my-team {
        background: rgba(16, 185, 129, 0.05);
        border-radius: 12px;
        outline: 1px solid rgba(16, 185, 129, 0.15);
      }
      .tree-half.path-other {
        opacity: 0.55;
        filter: saturate(0.6);
      }
      /* No row-reverse: the right side's mirror effect is achieved by rendering
         children directly in SF→QF→R16 order (see _renderTree). */

      .tree-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 6px;
        min-width: 110px;
        max-width: 140px;
      }
      .tree-col-label {
        text-align: center;
        padding: 4px 8px;
        background: rgba(var(--cl-accent-rgb),0.12);
        border-radius: 8px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
      }
      .tree-col-label-en {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .tree-col-ties {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 6px;
        position: relative;
      }

      /* SVG bracket arrow connectors — wider columns, arrows always visible */
      .tree-arrows {
        flex: 0 0 36px;
        min-width: 36px;
        display: flex;
        align-items: stretch;
        padding-top: 44px; /* offset for round labels */
        padding-bottom: 0;
      }
      .connector-svg {
        width: 100%;
        height: 100%;
        stroke: var(--cl-accent);
        stroke-width: 2;
        fill: none;
        overflow: visible;
        display: block;
      }
      .connector-svg .arrow-head {
        fill: var(--cl-accent);
        stroke: none;
      }

      /* Mini tie card */
      .mini-tie {
        background: var(--cl-bg);
        border: 1.5px solid var(--cl-accent);
        border-radius: 10px;
        padding: 7px 9px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        box-shadow: 0 2px 8px rgba(var(--cl-accent-rgb),0.15);
      }
      .mini-tie.sched-link { cursor: pointer; }
      .mini-tie.sched-link:hover { border-color: var(--cl-accent) !important; box-shadow: 0 0 10px rgba(var(--cl-accent-rgb),0.25); }
      .mini-tie:hover {
        border-color: var(--cl-accent);
        transform: scale(1.04);
        z-index: 5;
      }
      .mini-tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 16px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      .mini-tie.done {
        border-color: rgba(16,185,129,0.3);
      }
      .mini-tie.pending {
        opacity: 0.55;
        background: transparent;
        border-style: dashed;
      }
      .mini-team {
        display: grid;
        grid-template-columns: 18px 1fr auto;
        align-items: center;
        gap: 6px;
        padding: 2px 0;
      }
      .mini-team img {
        width: 18px; height: 18px;
        object-fit: contain;
      }
      .mini-team .logo-ph {
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--cl-card-2);
      }
      .mini-team .abbr {
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .mini-team .agg-num {
        font-size: 12px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 14px;
        text-align: right;
        color: var(--cl-text-2);
      }
      .mini-team.winner .abbr {
        font-weight: 800;
      }
      .mini-team.winner .agg-num {
        color: var(--cl-green);
      }
      .mini-team.loser .abbr {
        color: var(--cl-text-2);
      }
      .mini-team.loser img {
        opacity: 0.5;
      }
      .mini-team.loser .agg-num {
        opacity: 0.55;
      }
      .mini-clock {
        display: flex; align-items: center; gap: 4px;
        padding: 3px 6px 0;
      }
      .mini-clock .dot {
        width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
        background: var(--cl-live);
        box-shadow: 0 0 6px var(--cl-live-glow);
        animation: dot-pulse 1.2s ease-in-out infinite;
      }
      .mini-clock-text {
        font-size: 9px; font-weight: 700; color: var(--cl-live);
        font-variant-numeric: tabular-nums;
      }

      /* Tree center (trophy + final) */
      .tree-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 16px;
        gap: 14px;
        min-width: 200px;
        flex: 0 0 200px;
        position: relative;
      }
      .tree-center::before {
        content: '';
        position: absolute;
        inset: 20% 8%;
        background:
          radial-gradient(circle at center, rgba(251,191,36,0.20), transparent 65%);
        pointer-events: none;
        border-radius: 50%;
      }
      .trophy {
        position: relative;
        font-size: 64px;
        line-height: 1;
        filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7));
        animation: trophy-shine 4s ease-in-out infinite;
        z-index: 2;
      }
      @keyframes trophy-shine {
        0%, 100% { filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7)); transform: scale(1); }
        50% { filter: drop-shadow(0 4px 36px rgba(251,191,36,1)) drop-shadow(0 0 12px #fbbf24); transform: scale(1.04); }
      }
      .trophy-label {
        position: relative;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        z-index: 2;
      }
      .champion-banner {
        display: flex; align-items: center; justify-content: center; gap: 6px;
        margin-top: 8px; padding: 5px 10px; border-radius: 10px;
        background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.3);
      }
      .champion-logo { width: 18px; height: 18px; object-fit: contain; }
      .champion-crown { font-size: 13px; }
      .champion-name { font-size: 10px; font-weight: 800; color: var(--cl-gold, #fbbf24); text-transform: uppercase; letter-spacing: 0.08em; }
      .final-tie-wrap {
        position: relative;
        width: 100%;
        max-width: 170px;
        z-index: 2;
      }
      .final-tie-wrap .mini-tie {
        background: linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.4);
        box-shadow: 0 4px 16px rgba(251,191,36,0.2);
      }
      .final-tie-wrap .mini-team.winner .agg-num {
        color: var(--cl-gold);
      }
      .final-placeholder {
        position: relative;
        font-size: 11px;
        font-weight: 800;
        color: var(--cl-text-2);
        padding: 8px 14px;
        background: var(--cl-card-2);
        border: 1px dashed var(--cl-glass-border);
        border-radius: 8px;
        letter-spacing: 0.1em;
      }

      .third-place-wrap {
        position: relative;
        width: 100%;
        max-width: 170px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }
      .third-place-label {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-text-2);
        text-align: center;
        opacity: 0.8;
      }
      .final-tie-wrap.third .mini-tie {
        background: linear-gradient(135deg, rgba(var(--cl-accent-rgb),0.08), transparent);
        border-color: rgba(var(--cl-accent-rgb),0.3);
        box-shadow: none;
      }
      .final-tie-wrap.third .mini-team.winner .agg-num {
        color: var(--cl-accent);
      }
      .tree-pending {
        font-size: 11px;
        font-weight: 600;
        color: var(--cl-text-2);
        text-align: center;
        padding: 6px 12px;
        border-radius: 8px;
        background: var(--cl-card-2);
        border: 1px dashed var(--cl-glass-border);
        max-width: 160px;
        line-height: 1.4;
      }
      .tree.tree-center-only {
        justify-content: center;
        min-height: 0;
      }
      .tree.tree-center-only .tree-half {
        display: none;
      }
      .tree.tree-center-only .tree-center {
        flex: 0 0 auto;
        min-width: 0;
        padding: 16px 24px;
      }

      /* Mobile per tree */
      @media (max-width: 720px) {
        ha-card.style-tree .tree-col {
          min-width: 100px;
        }
        ha-card.style-tree .tree-center {
          min-width: 140px;
        }
        ha-card.style-tree .trophy {
          font-size: 56px;
        }
      }
      @media (max-width: 520px) {
        ha-card.style-tree .tree {
          flex-direction: column;
          min-height: 0;
          min-width: 0;
          width: 100%;
        }
        ha-card.style-tree .tree-half {
          flex: 1 1 auto;
          flex-direction: row;
        }
        ha-card.style-tree .tree-half.right {
          flex-direction: row;
        }
        ha-card.style-tree .tree-center {
          order: -1;
          padding: 12px;
        }
      }

      /* Early rounds below tree (e.g. Round of 64 for WK 2026) */
      .tree-wrap.has-early {
        padding-bottom: 0;
      }
      .early-round-section {
        padding: 0 18px 18px;
      }
      .early-round-label {
        display: flex; align-items: center; justify-content: space-between;
        gap: 8px; cursor: pointer; user-select: none;
        font-size: 11px; font-weight: 800; text-transform: uppercase;
        letter-spacing: 0.12em; color: var(--cl-accent);
        padding: 8px 12px; margin-bottom: 12px;
        background: rgba(var(--cl-accent-rgb),0.10);
        border-radius: 10px; transition: background 0.15s;
      }
      .early-round-label:hover { background: rgba(var(--cl-accent-rgb),0.18); }
      .early-round-name { flex: 1; }
      .early-date-range { font-size: 9px; font-weight: 400; opacity: 0.65; letter-spacing: 0; }
      .round-prog {
        font-size: 10px; font-weight: 700; letter-spacing: 0.05em;
        display: flex; align-items: center; gap: 4px;
        color: var(--cl-text-2);
      }
      .round-prog.done { color: var(--cl-green); }
      .round-prog.live { color: var(--cl-live); }
      .round-prog .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--cl-live); animation: pulse 1.2s ease-in-out infinite; }
      .round-chevron { font-size: 14px; font-weight: 400; color: var(--cl-text-2); transform: rotate(90deg); display: inline-block; transition: transform 0.2s; }
      .early-round-section.collapsed .round-chevron { transform: rotate(-90deg); }
      .early-round-section.collapsed { padding-bottom: 0; }
      .early-round-section.collapsed .early-round-label { margin-bottom: 0; }
      .early-round-ties {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
      @media (max-width: 480px) {
        .early-round-ties {
          grid-template-columns: 1fr;
        }
      }
      /* Schedule filter chips */
      .sched-filters {
        display: flex; gap: 8px; padding: 0 0 12px; flex-wrap: wrap;
      }
      .sched-chip {
        font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px;
        cursor: pointer; user-select: none; transition: background 0.15s, color 0.15s;
        background: rgba(var(--cl-accent-rgb),0.10); color: var(--cl-accent);
        border: 1px solid rgba(var(--cl-accent-rgb),0.2);
      }
      .sched-chip.active {
        background: var(--cl-accent); color: #fff; border-color: transparent;
      }
      .sched-chip:hover:not(.active) { background: rgba(var(--cl-accent-rgb),0.20); }
      .sched-chip.empty { opacity: 0.45; }

      /* My next match banner */
      .my-next-banner {
        position: relative; z-index: 1;
        margin: 0 14px 12px;
        padding: 10px 14px;
        background: rgba(var(--cl-accent-rgb),0.07);
        border: 1px solid rgba(var(--cl-accent-rgb),0.18);
        border-radius: 12px;
      }
      .my-next-banner.live {
        background: rgba(239,68,68,0.07);
        border-color: rgba(239,68,68,0.25);
      }
      .mnb-teams {
        display: flex; align-items: center; gap: 8px;
      }
      .mnb-logo { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .mnb-name { font-size: 13px; font-weight: 700; flex: 1; min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .mnb-name.away { text-align: right; }
      .mnb-vs { font-size: 11px; font-weight: 600; color: var(--cl-text-2); padding: 0 2px; flex-shrink: 0; }
      .mnb-score { font-size: 17px; font-weight: 900; color: var(--cl-live); font-variant-numeric: tabular-nums; padding: 0 4px; flex-shrink: 0; }
      .mnb-meta { display: flex; align-items: center; gap: 8px; margin-top: 6px; flex-wrap: wrap; }
      .mnb-round-tag {
        font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--cl-accent); background: rgba(var(--cl-accent-rgb),0.12);
        padding: 2px 7px; border-radius: 6px;
      }
      .mnb-date { font-size: 11px; font-weight: 600; color: var(--cl-text-2); }
      .mnb-countdown { font-size: 12px; font-weight: 800; color: var(--cl-accent); }
      .mnb-venue { font-size: 10px; color: var(--cl-text-2); opacity: 0.65; }

      /* Schedule round chip in day header */
      .sched-day-label { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
      .sched-round-chip {
        font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em;
        color: var(--cl-accent); background: rgba(var(--cl-accent-rgb),0.12);
        padding: 2px 7px; border-radius: 6px; flex-shrink: 0;
      }

      .mini-result { font-size: 9px; font-weight: 900; text-align: center; padding: 2px 0 1px; line-height: 1; }
      .mini-result.won { color: var(--cl-green); }
      .mini-result.lost { color: var(--cl-live); }
      .early-sched-btn {
        font-size: 12px; opacity: 0.45; cursor: pointer; padding: 2px 5px;
        border-radius: 4px; transition: opacity 0.15s; flex-shrink: 0;
      }
      .early-sched-btn:hover { opacity: 1; background: rgba(var(--cl-accent-rgb),0.15); }

      /* Pending mini-tie date */
      .mini-date {
        font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
        color: var(--cl-text-2); text-align: center; padding: 3px 0 0; opacity: 0.8;
      }
      .chip-count {
        display: inline-flex; align-items: center; justify-content: center;
        font-size: 9px; font-weight: 800; padding: 1px 5px;
        background: rgba(0,0,0,0.18); border-radius: 10px; margin-left: 4px;
      }
      .sched-chip.active .chip-count { background: rgba(255,255,255,0.30); }
    `];
  }
}

if (!customElements.get("soccer-live-bracket")) {
  customElements.define("soccer-live-bracket", SoccerLiveBracketCard);
}
