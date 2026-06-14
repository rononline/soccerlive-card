import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class SoccerLiveLiveMatchCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-live-match-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_next_" }; }

  _getMatch(stateObj) {
    const matches = stateObj.attributes.matches || [];
    return matches.find(m => m.state === 'in' || m.status === 'live') ||
           matches.find(m => m.state === 'pre' || m.status === 'scheduled') ||
           matches.find(m => m.state === 'post') ||
           matches[0] || null;
  }

  _eventIcon(type) {
    if (!type) return '📋';
    const t = (type || '').toLowerCase();
    if (t.includes('goal') || t.includes('score')) return '⚽';
    if (t.includes('yellow')) return '🟨';
    if (t.includes('red')) return '🟥';
    if (t.includes('sub') || t.includes('substitut')) return '🔄';
    if (t.includes('pen')) return '⚽🎯';
    return '📋';
  }

  static get styles() {
    return [skinStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); padding: 0; overflow: hidden; border-radius: 12px; }
      .hero { position: relative; padding: 20px 16px 16px; }
      .bg-logo { position: absolute; opacity: 0.06; width: 110px; height: 110px; object-fit: contain; top: 0; }
      .bg-logo.home { left: -10px; }
      .bg-logo.away { right: -10px; }
      .comp-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 16px; height: 16px; object-fit: contain; }
      .comp-name { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cl-text-2); font-weight: 600; }
      .teams-row { display: flex; align-items: center; justify-content: space-between; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 54px; height: 54px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; max-width: 100px; color: var(--cl-text); }
      .score-center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .sched-info { font-size: 11px; color: var(--cl-text-2); margin-bottom: 4px; }
      .score { font-size: 44px; font-weight: 900; letter-spacing: 6px; color: var(--cl-text); line-height: 1; }
      .vs-text { font-size: 24px; font-weight: 900; color: var(--cl-text-2); padding: 8px 0; }
      .minute { font-size: 12px; color: var(--cl-text-2); margin-top: 4px; }
      .divider { height: 1px; background: var(--divider-color, var(--cl-divider)); margin: 0 16px; }
      .events { padding: 12px 16px; max-height: 220px; overflow-y: auto; }
      .event-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 12px; border-bottom: 1px solid var(--divider-color, var(--cl-divider)); }
      .event-row:last-child { border-bottom: none; }
      .event-min { font-weight: 700; color: var(--cl-text-2); min-width: 32px; font-size: 11px; }
      .event-icon { font-size: 14px; min-width: 20px; text-align: center; }
      .event-text { flex: 1; color: var(--cl-text); }
      .event-team { font-size: 10px; color: var(--cl-text-2); }
      .no-events { text-align: center; color: var(--cl-text-2); font-size: 12px; padding: 10px 0; }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; font-size: 11px; color: var(--cl-text-2); }
      .empty { padding: 20px; text-align: center; color: var(--cl-text-2); }
      .stats-row { display: flex; align-items: center; padding: 5px 16px; font-size: 11px; gap: 6px; }
      .stat-val { font-weight: 700; min-width: 28px; text-align: center; color: var(--cl-text); }
      .stat-bars { flex: 1; display: flex; gap: 2px; align-items: center; height: 4px; }
      .stat-bar { height: 4px; border-radius: 2px; background: var(--cl-accent); }
      .stat-label { flex: 1; text-align: center; color: var(--cl-text-2); font-size: 10px; }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">Unknown entity: ${this._config.entity}</div></ha-card>`;

    const match = this._getMatch(stateObj);
    if (!match) return html`<ha-card><div class="empty">No match data</div></ha-card>`;

    const isLive = match.state === 'in' || match.status === 'live';
    const isFinished = match.state === 'post';
    const isPre = match.state === 'pre' || match.status === 'scheduled';
    const events = match.key_events || match.events || match.match_events || [];
    const compName = match.competition_name || stateObj.attributes.league_name || '';
    const compLogo = match.competition_logo || stateObj.attributes.league_logo || '';
    const venue = match.venue && match.venue !== 'N/A' ? match.venue : '';
    const venueCity = match.venue_city && match.venue_city !== 'N/A' ? match.venue_city : '';
    const stats = match.stats || match.statistics || [];

    return html`
      <ha-card>
        <div class="hero">
          ${match.home_logo ? html`<img class="bg-logo home" src="${match.home_logo}" alt="">` : ''}
          ${match.away_logo ? html`<img class="bg-logo away" src="${match.away_logo}" alt="">` : ''}

          ${compName ? html`
            <div class="comp-row">
              ${compLogo ? html`<img class="comp-logo" src="${compLogo}" alt="">` : ''}
              <span class="comp-name">${compName}</span>
            </div>
          ` : ''}

          <div class="teams-row">
            <div class="team">
              ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="team-name">${match.home_team || '?'}</span>
            </div>

            <div class="score-center">
              ${isLive ? html`<div class="live-badge">LIVE</div>` : isFinished ? html`<div class="sched-info">FT</div>` : html`<div class="sched-info">${match.date || this._t('match.vs')}</div>`}
              ${isLive || isFinished
                ? html`<div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>`
                : html`<div class="vs-text">${this._t('match.vs')}</div>`}
              ${isLive && match.clock ? html`<div class="minute">${match.clock}</div>` : ''}
            </div>

            <div class="team">
              ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
              <span class="team-name">${match.away_team || '?'}</span>
            </div>
          </div>
        </div>

        ${events.length > 0 ? html`
          <div class="divider"></div>
          <div class="events">
            ${events.map(ev => html`
              <div class="event-row">
                <span class="event-min">${ev.clock || ev.minute ? `${ev.clock || ev.minute}'` : ''}</span>
                <span class="event-icon">${this._eventIcon(ev.type)}</span>
                <div class="event-text">
                  <div>${ev.player_name || ev.player || ev.text || ev.description || ''}</div>
                  ${ev.team ? html`<div class="event-team">${ev.team}</div>` : ''}
                </div>
              </div>
            `)}
          </div>
        ` : isLive ? html`
          <div class="divider"></div>
          <div class="events"><div class="no-events">No events yet</div></div>
        ` : ''}

        ${stats.length > 0 ? html`
          <div class="divider"></div>
          ${stats.slice(0, this._config.max_stats || 4).map(s => {
            const hv = parseFloat(s.home ?? s.homeValue ?? 0) || 0;
            const av = parseFloat(s.away ?? s.awayValue ?? 0) || 0;
            const total = hv + av;
            const homePct = total > 0 ? Math.round((hv / total) * 100) : 50;
            return html`
              <div class="stats-row">
                <span class="stat-val">${s.home ?? s.homeValue ?? ''}</span>
                <div class="stat-label">${s.label || s.name || s.type || ''}</div>
                <span class="stat-val">${s.away ?? s.awayValue ?? ''}</span>
              </div>
            `;
          })}
        ` : ''}

        ${venue ? html`
          <div class="divider"></div>
          <div class="meta">🏟 ${venue}${venueCity ? `, ${venueCity}` : ''}</div>
        ` : ''}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-live-match", SoccerLiveLiveMatchCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-live-match", name: "Soccer Live Match Card", description: "Live match details with events and stats" });
