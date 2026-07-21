import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles } from "../card-shell.js";
import { displayCompetitionName } from "../shared-competition.js";
import { renderSyncStatusOrEmpty } from "../card-error.js";
import { renderPitch, pitchStyles } from "../shared-pitch.js";

class SoccerLiveLineupCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this.hideHeader = config.hide_header === true;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  getCardSize() { return 6; }
  static getConfigElement() { return document.createElement("soccer-live-lineup-editor"); }
  static getStubConfig() {
    return { entity: "sensor.soccer_live_next", hide_header: false };
  }

  _starters(players) {
    return (players || []).filter(p => p.starter === true);
  }
  _bench(players) {
    return (players || []).filter(p => !p.starter);
  }

  _renderPlayer(p) {
    const init = (p.short_name || p.name || '').split(' ').map(s => s[0]).slice(0,2).join('');
    return html`
      <div class="player" title="${p.name}">
        <div class="player-card">
          ${p.headshot
            ? html`<img class="player-img" src="${p.headshot}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="player-init" style="display:none;">${init}</div>`
            : html`<div class="player-init">${init}</div>`
          }
          ${p.jersey ? html`<div class="player-num">${p.jersey}</div>` : ''}
        </div>
        <div class="player-name">${p.short_name || p.name}</div>
        ${p.position ? html`<div class="player-pos">${p.position}</div>` : ''}
      </div>
    `;
  }

  _renderPitchScorebar(m, formationHome, formationAway) {
    const isPre = m.state === 'pre';
    const isLive = m.state === 'in';
    const score = s => (s == null || s === '' || s === 'N/A') ? '-' : s;
    const status = isLive
      ? html`<div class="psb-status live">● ${(m.clock && m.clock !== 'N/A') ? m.clock : this._t('status.live')}</div>`
      : (m.state === 'post' ? html`<div class="psb-status">${this._t('status.full_time')}</div>` : '');
    return html`
      <div class="psb">
        <div class="psb-team psb-team--home">
          <img src="${m.home_logo}" alt="" @error="${e => e.target.style.display='none'}">
          <div class="psb-meta">
            <div class="psb-abbr">${m.home_abbrev || m.home_team}</div>
            ${formationHome ? html`<div class="psb-form">${formationHome}</div>` : ''}
          </div>
        </div>
        <div class="psb-center">
          ${isPre
            ? html`<div class="psb-vs">${this._t('status.kickoff')}</div>`
            : html`<div class="psb-score">${score(m.home_score)}<span>-</span>${score(m.away_score)}</div>`}
          ${status}
        </div>
        <div class="psb-team psb-team--away">
          <img src="${m.away_logo}" alt="" @error="${e => e.target.style.display='none'}">
          <div class="psb-meta">
            <div class="psb-abbr">${m.away_abbrev || m.away_team}</div>
            ${formationAway ? html`<div class="psb-form">${formationAway}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  _renderGrid(m, formationHome, formationAway, lineupHome, lineupAway) {
    const startersHome = this._starters(lineupHome);
    const benchHome = this._bench(lineupHome);
    const startersAway = this._starters(lineupAway);
    const benchAway = this._bench(lineupAway);
    return html`
      <div class="teams-row">
        <div class="team-block">
          <div class="team-block-head">
            <img src="${m.home_logo}" alt="${m.home_team}" />
            <div class="team-block-info">
              <div class="team-block-name">${m.home_team}</div>
              ${formationHome ? html`<div class="formation">${formationHome}</div>` : ''}
            </div>
          </div>
          <div class="players-grid">
            ${startersHome.map(p => this._renderPlayer(p))}
          </div>
          ${benchHome.length ? html`
            <div class="bench-label">${this._t('lineup.bench')}</div>
            <div class="players-grid bench">
              ${benchHome.map(p => this._renderPlayer(p))}
            </div>
          ` : ''}
        </div>

        <div class="team-block">
          <div class="team-block-head">
            <img src="${m.away_logo}" alt="${m.away_team}" />
            <div class="team-block-info">
              <div class="team-block-name">${m.away_team}</div>
              ${formationAway ? html`<div class="formation">${formationAway}</div>` : ''}
            </div>
          </div>
          <div class="players-grid">
            ${startersAway.map(p => this._renderPlayer(p))}
          </div>
          ${benchAway.length ? html`
            <div class="bench-label">${this._t('lineup.bench')}</div>
            <div class="players-grid bench">
              ${benchAway.map(p => this._renderPlayer(p))}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;

    const matches = stateObj.attributes.matches || [];
    if (matches.length === 0) return renderSyncStatusOrEmpty(stateObj.attributes, this._t,
      () => html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`);

    const m = matches[0];
    const lineupHome = m.lineup_home || stateObj.attributes.lineup_home || [];
    const lineupAway = m.lineup_away || stateObj.attributes.lineup_away || [];
    const formationHome = m.formation_home || stateObj.attributes.formation_home || '';
    const formationAway = m.formation_away || stateObj.attributes.formation_away || '';

    if (lineupHome.length === 0 && lineupAway.length === 0) {
      // Before kickoff the line-up simply isn't published yet; explain that
      // rather than implying it's unavailable for this match/competition.
      const preMatch = m.state === 'pre' || m.state === 'scheduled';
      return html`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${this._t(preMatch ? 'lineup.pre.title' : 'lineup.empty.title')}</div>
            <div class="empty-sub">${this._t(preMatch ? 'lineup.pre.sub' : 'lineup.empty.sub')}</div>
          </div>
        </ha-card>
      `;
    }

    const header = !this.hideHeader ? renderSoccerHeader({
      logo: m.competition_logo || m.league_logo || stateObj.attributes.league_logo || null,
      title: displayCompetitionName(
        m.competition_name || m.league_name || stateObj.attributes.league_name || this._t('card.lineup'),
        resolveLang(this.hass, this._config)
      ),
      badge: renderSoccerBadge(`${m.home_team} – ${m.away_team}`, 'neutral'),
      fallbackIcon: '👥',
    }) : '';

    // Prefer the shared pitch view; fall back to the player grid when a
    // formation is missing.
    const pitch = renderPitch(m, { t: (k, v) => this._t(k, v) });
    if (pitch) {
      return html`
        <ha-card>
          <div class="hero-bg"></div>
          ${header}
          ${this._renderPitchScorebar(m, formationHome, formationAway)}
          ${pitch}
        </ha-card>
      `;
    }

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        ${header}
        ${this._renderGrid(m, formationHome, formationAway, lineupHome, lineupAway)}
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, pitchStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
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
          radial-gradient(ellipse at 100% 100%, rgba(16,185,129,0.10), transparent 50%);
        pointer-events: none;
      }


      .teams-row {
        position: relative; z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
      }
      .team-block {
        padding: 16px 12px;
        border-right: 1px solid var(--cl-divider);
      }
      .team-block:last-child { border-right: none; }
      .team-block-head {
        display: flex; align-items: center; gap: 10px;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-block-head img {
        width: 32px; height: 32px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-block-info { min-width: 0; flex: 1; }
      .team-block-name {
        font-size: 13px; font-weight: 800;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        color: var(--cl-text);
      }
      .formation {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
        gap: 10px;
      }
      .players-grid.bench { opacity: 0.85; }
      .player {
        display: flex; flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .player-card {
        position: relative;
        width: 48px; height: 48px;
      }
      .player-img {
        width: 48px; height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: var(--cl-card-2);
        border: 2px solid var(--cl-glass-border);
      }
      .player-init {
        width: 48px; height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; font-weight: 800;
        letter-spacing: -0.02em;
      }
      .player-num {
        position: absolute;
        bottom: -3px; right: -4px;
        background: var(--cl-num-bg);
        color: white;
        border: 2px solid var(--cl-bg);
        font-size: 9px; font-weight: 800;
        min-width: 18px; height: 18px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-variant-numeric: tabular-nums;
        padding: 0 3px;
      }
      .player-name {
        font-size: 10px; font-weight: 700;
        line-height: 1.1;
        max-width: 64px;
        color: var(--cl-text);
        word-wrap: break-word;
        text-align: center;
      }
      .player-pos {
        font-size: 8px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--cl-text-2);
        background: var(--cl-card-2);
        padding: 1px 5px;
        border-radius: 4px;
      }
      .bench-label {
        margin-top: 16px; margin-bottom: 8px;
        font-size: 10px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.15em;
        color: var(--cl-text-2);
        display: flex; align-items: center; gap: 8px;
      }
      .bench-label::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }

      @media (max-width: 480px) {
        .teams-row { grid-template-columns: 1fr; }
        .team-block { border-right: none; border-bottom: 1px solid var(--cl-divider); }
        .team-block:last-child { border-bottom: none; }
      }

      /* ---- Pitch scorebar (card chrome above the shared pitch) ---- */
      .psb {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 14px 16px 6px;
      }
      .psb-team { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0; }
      .psb-team--away { flex-direction: row-reverse; text-align: right; }
      .psb-team img { width: 34px; height: 34px; object-fit: contain; flex-shrink: 0; }
      .psb-meta { min-width: 0; }
      .psb-abbr {
        font-size: 14px; font-weight: 800; color: var(--cl-text);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .psb-form {
        font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
        color: var(--cl-accent); font-variant-numeric: tabular-nums; margin-top: 1px;
      }
      .psb-center { flex: 0 0 auto; text-align: center; }
      .psb-score { font-size: 24px; font-weight: 900; letter-spacing: -0.03em; color: var(--cl-text); }
      .psb-score span { opacity: 0.4; margin: 0 4px; }
      .psb-vs { font-size: 12px; font-weight: 700; color: var(--cl-text-2); }
      .psb-status { font-size: 10px; font-weight: 800; color: var(--cl-text-2); margin-top: 2px; text-transform: uppercase; letter-spacing: 0.06em; }
      .psb-status.live { color: #ef4444; }
    `];
  }
}

if (!customElements.get("soccer-live-lineup")) {
  customElements.define("soccer-live-lineup", SoccerLiveLineupCard);
}
