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
    const attrs = stateObj.attributes;
    const all = attrs.matches || attrs.all_matches || [];
    // Prefer live match, then latest
    return all.find(m => m.status === 'live' || m.status === 'in') || all[0] || (attrs.home_team ? attrs : null);
  }

  static get styles() {
    return [skinStyles, css`
      ha-card { padding: 0; overflow: hidden; }
      .hero { position: relative; padding: 20px 16px 16px; }
      .bg-logo { position: absolute; opacity: 0.06; width: 120px; height: 120px; object-fit: contain; }
      .bg-logo.home { left: -10px; top: 0; }
      .bg-logo.away { right: -10px; top: 0; }
      .comp-row { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 16px; height: 16px; object-fit: contain; }
      .comp-name { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--secondary-text-color); font-weight: 600; }
      .teams-row { display: flex; align-items: center; justify-content: space-between; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 56px; height: 56px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; max-width: 100px; }
      .score-center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .sched-badge { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 4px; }
      .score { font-size: 44px; font-weight: 900; letter-spacing: 6px; color: var(--primary-text-color); line-height: 1; }
      .minute { font-size: 12px; color: var(--secondary-text-color); margin-top: 4px; }
      .divider { height: 1px; background: var(--divider-color, rgba(255,255,255,0.08)); margin: 0 16px; }
      .events { padding: 12px 16px; max-height: 220px; overflow-y: auto; }
      .event-row { display: flex; align-items: center; gap: 8px; padding: 5px 0; font-size: 12px; border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.05)); }
      .event-row:last-child { border-bottom: none; }
      .event-min { font-weight: 700; color: var(--secondary-text-color); min-width: 30px; }
      .event-icon { font-size: 14px; min-width: 20px; text-align: center; }
      .event-text { flex: 1; color: var(--primary-text-color); }
      .event-team { font-size: 10px; color: var(--secondary-text-color); }
      .no-events { text-align: center; color: var(--secondary-text-color); font-size: 12px; padding: 12px 0; }
      .meta { display: flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 16px; font-size: 11px; color: var(--secondary-text-color); }
      .empty { padding: 20px; text-align: center; color: var(--secondary-text-color); }
      .stats-row { display: flex; align-items: center; padding: 6px 16px; font-size: 11px; }
      .stat-val { font-weight: 700; min-width: 36px; text-align: center; }
      .stat-bar-wrap { flex: 1; display: flex; gap: 4px; align-items: center; }
      .stat-bar { height: 4px; border-radius: 2px; background: var(--primary-color, #03a9f4); }
      .stat-label { flex: 1; text-align: center; color: var(--secondary-text-color); }
    `];
  }

  _eventIcon(type) {
    if (!type) return '⚽';
    const t = type.toLowerCase();
    if (t.includes('goal')) return '⚽';
    if (t.includes('yellow')) return '🟨';
    if (t.includes('red')) return '🟥';
    if (t.includes('sub')) return '🔄';
    if (t.includes('pen')) return '⚽';
    return '📋';
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</div></ha-card>`;

    const match = this._getMatch(stateObj);
    if (!match) return html`<ha-card><div class="empty">No match data</div></ha-card>`;

    const isLive = match.status === 'live' || match.status === 'in';
    const isFinished = match.status === 'post' || match.status === 'finished' || match.status === 'final';
    const events = match.events || match.match_events || [];
    const compName = match.competition_name || match.league || stateObj.attributes.league_name || '';
    const compLogo = match.competition_logo || stateObj.attributes.league_logo || '';
    const venue = match.venue && match.venue !== 'N/A' ? match.venue : '';
    const stats = match.stats || [];

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
              ${isLive ? html`<div class="live-badge">LIVE</div>` : isFinished ? html`<div class="sched-badge">FT</div>` : html`<div class="sched-badge">${match.date ? new Date(match.date).toLocaleDateString() : 'vs'}</div>`}
              <div class="score">${isLive || isFinished ? `${match.home_score ?? 0} - ${match.away_score ?? 0}` : 'vs'}</div>
              ${(isLive && (match.clock || match.status_detail)) ? html`<div class="minute">${match.clock || match.status_detail}</div>` : ''}
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
                <span class="event-min">${ev.clock || ev.minute || ''}${ev.clock ? "'" : ''}</span>
                <span class="event-icon">${this._eventIcon(ev.type)}</span>
                <div class="event-text">
                  <div>${ev.player || ev.text || ev.description || ''}</div>
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
            const total = (s.home || 0) + (s.away || 0);
            const homePct = total > 0 ? Math.round((s.home / total) * 100) : 50;
            return html`
              <div class="stats-row">
                <span class="stat-val">${s.home ?? ''}</span>
                <div class="stat-bar-wrap">
                  <div class="stat-bar" style="width:${homePct}%; margin-left:auto;"></div>
                  <span class="stat-label">${s.label || s.name}</span>
                  <div class="stat-bar" style="width:${100-homePct}%;"></div>
                </div>
                <span class="stat-val">${s.away ?? ''}</span>
              </div>
            `;
          })}
        ` : ''}

        ${venue ? html`
          <div class="divider"></div>
          <div class="meta">🏟 ${venue}${match.venue_city && match.venue_city !== 'N/A' ? `, ${match.venue_city}` : ''}</div>
        ` : ''}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-live-match", SoccerLiveLiveMatchCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-live-match", name: "Soccer Live Match Card", description: "Live match details with events and stats" });
