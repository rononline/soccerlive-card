import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError, renderInfoState } from "../card-error.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles, renderCardHero } from "../card-shell.js";

class SoccerLiveLiveCommentaryCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-live-commentary-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_commentary_" }; }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      /* .top-bar from soccerHeaderStyles */
      .match-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 8px;
      }
      .team-block { display: flex; align-items: center; gap: 8px; flex: 1; }
      .team-block.right { flex-direction: row-reverse; }
      .team-logo { width: 24px; height: 24px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 600; color: var(--cl-text); }
      .score-block {
        text-align: center;
        flex: 0 0 auto;
        min-width: 70px;
      }
      .score { font-size: 20px; font-weight: 900; color: var(--cl-text); letter-spacing: 2px; }
      .clock {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
      }
      .live-badge {
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #e53935;
        border-radius: 50%;
        margin-right: 4px;
        animation: pulse 1s infinite;
      }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .comp-name {
        font-size: 11px;
        color: var(--cl-text-2);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .commentary-list {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column-reverse;
        padding: 0;
      }
      .event {
        display: flex;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        font-size: 12px;
      }
      .event:first-child { border-top: none; }
      .event-min {
        font-weight: 700;
        color: var(--cl-accent);
        min-width: 36px;
        font-size: 13px;
      }
      .event-icon {
        font-size: 16px;
        min-width: 20px;
        text-align: center;
        flex-shrink: 0;
      }
      .event-content { flex: 1; }
      .event-text { color: var(--cl-text); margin-bottom: 2px; font-weight: 600; }
      .event-desc { font-size: 11px; color: var(--cl-text-2); }
      .no-commentary { text-align: center; padding: 24px 16px; color: var(--cl-text-2); }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); }
    `];
  }

  _getEventIcon(eventType) {
    if (!eventType) return '📋';
    const t = eventType.toLowerCase();
    if (t.includes('goal')) return '⚽';
    if (t.includes('yellow')) return '🟨';
    if (t.includes('red')) return '🟥';
    if (t.includes('substitut') || t.includes('sub')) return '🔄';
    if (t.includes('penaalty') || t.includes('pen')) return '⚽';
    if (t.includes('own goal')) return '🔴';
    return '📋';
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return renderCardError('⚠️', this._t('ui.unknown_entity'), `${this._config.entity}`, this._t('ui.wrong_entity_type_hint'));
    if (stateObj.state === 'unavailable') return renderCardError('📡', this._t('ui.sensor_unavailable'), '', this._t('ui.check_integration'));

    const commentary = stateObj.attributes.commentary || [];
    const liveMatches = stateObj.attributes.matches || [];
    const liveMatch = liveMatches.find(m => m.state === 'in');

    if (!liveMatch && !commentary.length)
      return renderInfoState('🎙️', this._t('ui.no_live_match'), this._t('ui.no_live_match_hint'));

    const homeTeam = liveMatch?.home_team || stateObj.attributes.home_team || '?';
    const awayTeam = liveMatch?.away_team || stateObj.attributes.away_team || '?';
    const homeScore = liveMatch?.home_score ?? stateObj.attributes.home_score ?? 0;
    const awayScore = liveMatch?.away_score ?? stateObj.attributes.away_score ?? 0;
    const matchStatus = stateObj.attributes.match_status || '';
    const leagueInfo = (stateObj.attributes.league_info || [{}])[0];
    const leagueName = leagueInfo.name || leagueInfo.abbreviation || stateObj.attributes.league_name || '';

    const isLive = matchStatus === 'in' || (liveMatch && liveMatch.state === 'in');
    const clock = liveMatch ? liveMatch.clock : '';
    const homeLogo = liveMatch ? liveMatch.home_logo : '';
    const awayLogo = liveMatch ? liveMatch.away_logo : '';

    return html`
      <ha-card>
        ${renderCardHero(homeLogo, awayLogo)}
        <div class="card-content">
        ${!this._config.hide_header ? renderSoccerHeader({
          logo: liveMatch?.competition_logo || liveMatch?.league_logo || stateObj.attributes.league_logo || null,
          title: leagueName || this._t('card.live_commentary'),
          badge: isLive
            ? renderSoccerBadge(`${clock ? clock + "' " : ''}${this._t('status.live')}`, 'live')
            : renderSoccerBadge(`${homeScore}–${awayScore}`, 'ft'),
          fallbackIcon: '🎙️',
        }) : ''}
        <div class="match-header">
            <div class="team-block">
              ${homeLogo ? html`<img class="team-logo" src="${homeLogo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="team-name">${homeTeam}</span>
            </div>

            <div class="score-block">
              <div class="score">${homeScore} - ${awayScore}</div>
              <div class="clock">
                ${isLive ? html`<span class="live-badge"></span>` : ''}
                ${clock || '—'}
              </div>
            </div>

            <div class="team-block right">
              <span class="team-name">${awayTeam}</span>
              ${awayLogo ? html`<img class="team-logo" src="${awayLogo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            </div>
          </div>
        </div>

        ${commentary.length > 0 ? html`
          <div class="commentary-list">
            ${commentary.map(ev => html`
              <div class="event">
                <span class="event-min">${ev.clock || '—'}'</span>
                <span class="event-icon">${this._getEventIcon(ev.type)}</span>
                <div class="event-content">
                  <div class="event-text">${ev.text || ev.description || this._t('timeline.event')}</div>
                  ${ev.home_score !== undefined && ev.away_score !== undefined ? html`
                    <div class="event-desc">${ev.home_score}-${ev.away_score}</div>
                  ` : ''}
                </div>
              </div>
            `)}
          </div>
        ` : html`
          <div class="no-commentary">${this._t('commentary.empty')}</div>
        `}
        </div>
      </ha-card>
    `;
  }
}

if (!customElements.get("soccer-live-live-commentary")) {
  customElements.define("soccer-live-live-commentary", SoccerLiveLiveCommentaryCard);
}
