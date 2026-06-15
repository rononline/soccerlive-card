import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError } from "../card-error.js";

class SoccerLiveCompetitionScheduleCard extends LitElement {
  static get properties() {
    return { hass: {}, _config: {}, _round: { type: Number } };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this._round = null; // null = auto (current round)
  }

  getCardSize() { return 6; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-competition-schedule-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_", my_team: "" }; }

  _groupByRound(matches) {
    const rounds = new Map();
    const hasWeekNumbers = matches.some(m => m.week_number != null);
    for (const m of matches) {
      const key = hasWeekNumbers ? m.week_number : this._weekFromDate(m.date);
      if (!rounds.has(key)) rounds.set(key, []);
      rounds.get(key).push(m);
    }
    // Sort by key, then re-key sequentially when ESPN has no week numbers
    const sorted = [...rounds.entries()].sort((a, b) => a[0] - b[0]);
    if (!hasWeekNumbers) {
      // Relabel 1, 2, 3... so ISO week numbers don't show as round numbers
      return new Map(sorted.map(([, ms], i) => [i + 1, ms]));
    }
    return new Map(sorted);
  }

  _weekFromDate(dateStr) {
    // Fallback: group by ISO week when ESPN provides no week_number
    if (!dateStr) return 0;
    try {
      const parts = dateStr.split(' ')[0].split(/[-\/]/);
      const [day, month, year] = parts.length === 3 ? parts.map(Number) : [1, 1, 2000];
      const d = new Date(year, month - 1, day);
      const jan1 = new Date(year, 0, 1);
      return Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7);
    } catch { return 0; }
  }

  _currentRoundKey(rounds, matches) {
    // Prefer round containing live or upcoming matches
    for (const [key, ms] of rounds) {
      if (ms.some(m => m.state === 'in')) return key;
    }
    for (const [key, ms] of rounds) {
      if (ms.some(m => m.state === 'pre')) return key;
    }
    // Fall back to last round with finished matches
    const keys = [...rounds.keys()];
    return keys[keys.length - 1] ?? 1;
  }

  _formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      const [datePart] = dateStr.split(' ');
      const parts = datePart.split(/[-\/]/).map(Number);
      if (parts.length !== 3) return datePart;
      const [day, month, year] = parts;
      const d = new Date(year, month - 1, day);
      const dayName = d.toLocaleDateString(resolveLang(this.hass, this._config), { weekday: 'short' });
      const monthName = d.toLocaleDateString(resolveLang(this.hass, this._config), { day: 'numeric', month: 'short' });
      return `${dayName} ${monthName}`;
    } catch { return dateStr; }
  }

  _formatTime(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split(' ');
    return parts[1] || '';
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return renderCardError('⚠️', this._t('ui.unknown_entity'), this._config.entity, this._t('ui.wrong_entity_type_hint'));
    if (stateObj.state === 'unavailable') return renderCardError('📡', this._t('ui.sensor_unavailable'), '', this._t('ui.check_integration'));

    const attrs = stateObj.attributes;
    const allMatches = attrs.matches || [];
    if (!allMatches.length) return renderCardError('📅', this._t('ui.off_season'), this._t('ui.off_season_hint'));

    const leagueInfo = (attrs.league_info || [])[0] || {};
    const leagueName = leagueInfo.name || leagueInfo.abbreviation || stateObj.state;
    const leagueLogo = leagueInfo.logo_href && leagueInfo.logo_href !== 'N/A' ? leagueInfo.logo_href : null;

    const rounds = this._groupByRound(allMatches);
    const roundKeys = [...rounds.keys()];
    const activeKey = this._round ?? this._currentRoundKey(rounds, allMatches);
    const roundIdx = roundKeys.indexOf(activeKey);
    const safeIdx = roundIdx === -1 ? roundKeys.length - 1 : roundIdx;
    const currentKey = roundKeys[safeIdx];
    const matches = rounds.get(currentKey) || [];

    const myTeam = (this._config.my_team || '').toLowerCase();

    const hasPrev = safeIdx > 0;
    const hasNext = safeIdx < roundKeys.length - 1;

    return html`
      <ha-card>
        <div class="header">
          ${leagueLogo ? html`<img class="league-logo" src="${leagueLogo}" alt="">` : html`<div class="list-icon">☰</div>`}
          <span class="league-name">${leagueName}</span>
        </div>

        <div class="nav-row">
          <button class="nav-btn ${hasPrev ? '' : 'disabled'}" ?disabled="${!hasPrev}"
            @click="${() => { if (hasPrev) this._round = roundKeys[safeIdx - 1]; }}">‹</button>
          <div class="round-display">
            <div class="round-label">${this._t('competition.round') || 'Speelronde'}</div>
            <div class="round-number">${currentKey}</div>
          </div>
          <button class="nav-btn ${hasNext ? '' : 'disabled'}" ?disabled="${!hasNext}"
            @click="${() => { if (hasNext) this._round = roundKeys[safeIdx + 1]; }}">›</button>
        </div>

        <div class="match-list">
          ${matches.map(m => {
            const isHome = myTeam && m.home_team && m.home_team.toLowerCase().includes(myTeam);
            const isAway = myTeam && m.away_team && m.away_team.toLowerCase().includes(myTeam);
            const isTracked = isHome || isAway;
            const hasScore = m.state === 'in' || m.state === 'post';
            const score = hasScore ? `${m.home_score ?? '-'} - ${m.away_score ?? '-'}` : '-';
            const isLive = m.state === 'in';
            return html`
              <div class="match-row ${isTracked ? 'tracked' : ''} ${isLive ? 'live' : ''}">
                <span class="match-date">${this._formatDate(m.date)}</span>
                <span class="match-time">${this._formatTime(m.date)}</span>
                <span class="match-teams">${m.home_team} - ${m.away_team}</span>
                <span class="match-score ${isLive ? 'live-score' : ''}">${score}</span>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        border-radius: 12px;
        overflow: hidden;
        padding: 0;
      }
      .header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 14px 16px 10px;
      }
      .league-logo { width: 24px; height: 24px; object-fit: contain; }
      .list-icon { font-size: 18px; opacity: 0.6; }
      .league-name { font-size: 16px; font-weight: 700; color: var(--cl-text); }

      .nav-row {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 8px;
        padding: 0 12px 12px;
        align-items: center;
      }
      .nav-btn {
        background: var(--cl-accent);
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 22px;
        font-weight: 900;
        height: 52px;
        cursor: pointer;
        transition: opacity 0.15s;
      }
      .nav-btn.disabled { opacity: 0.35; cursor: default; }
      .nav-btn:not(.disabled):hover { opacity: 0.85; }

      .round-display {
        background: var(--cl-surface-2, rgba(255,255,255,0.08));
        border-radius: 8px;
        padding: 8px 20px;
        text-align: center;
        min-width: 110px;
      }
      .round-label { font-size: 11px; color: var(--cl-text-2); text-transform: uppercase; letter-spacing: 0.06em; }
      .round-number { font-size: 22px; font-weight: 900; color: var(--cl-text); line-height: 1.1; }

      .match-list { border-top: 1px solid var(--cl-divider); }
      .match-row {
        display: grid;
        grid-template-columns: 90px 55px 1fr auto;
        gap: 8px;
        align-items: center;
        padding: 9px 16px;
        border-bottom: 1px solid var(--cl-divider);
        font-size: 13px;
      }
      .match-row:last-child { border-bottom: none; }
      .match-row.tracked { color: var(--cl-accent); font-weight: 700; }
      .match-row.live { background: rgba(239,68,68,0.06); }
      .match-date { color: var(--cl-text-2); font-size: 12px; white-space: nowrap; }
      .match-time { color: var(--cl-text-2); font-size: 12px; font-variant-numeric: tabular-nums; }
      .match-teams { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .match-score { font-variant-numeric: tabular-nums; text-align: right; color: var(--cl-text-2); min-width: 36px; }
      .match-score.live-score { color: #ef4444; font-weight: 700; }

      @media (max-width: 400px) {
        .match-row { grid-template-columns: 70px 44px 1fr auto; font-size: 12px; padding: 7px 10px; }
        .match-date, .match-time { font-size: 11px; }
      }
    `];
  }
}

customElements.define("soccer-live-competition-schedule", SoccerLiveCompetitionScheduleCard);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "soccer-live-competition-schedule",
  name: "Soccer Live Competition Schedule",
  description: "Matchday-by-matchday schedule for a competition with round navigation"
});
