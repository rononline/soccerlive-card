import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class SoccerLiveCountdownCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _now: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  connectedCallback() {
    super.connectedCallback();
    this._now = new Date();
    this._timer = setInterval(() => { this._now = new Date(); this.requestUpdate(); }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timer);
  }

  getCardSize() { return 3; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-countdown-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_next_" }; }

  // Sensor date format: "DD/MM/YYYY HH:MM" or "DD-MM-YYYY HH:MM"
  _parseDate(dateStr) {
    if (!dateStr || dateStr === 'N/A') return null;
    try {
      const [datePart, timePart] = dateStr.split(' ');
      const parts = datePart.split(/[-\/]/).map(Number);
      const [hours, minutes] = (timePart || '00:00').split(':').map(Number);
      // day/month/year format
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return new Date(year, month - 1, day, hours, minutes);
      }
    } catch (e) {}
    return null;
  }

  _getNextMatch(stateObj) {
    const attrs = stateObj.attributes;
    const matches = attrs.matches || [];
    return matches.find(m => m.state === 'pre' || m.status === 'scheduled') ||
           matches.find(m => m.state === 'in' || m.status === 'live') ||
           matches[0] || null;
  }

  _countdown(dateStr) {
    const target = this._parseDate(dateStr);
    if (!target) return null;
    const now = this._now || new Date();
    const diff = target - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return { days, hours, mins, secs };
  }

  static get styles() {
    return [skinStyles, css`
      ha-card { padding: 16px; }
      .header { display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 14px; }
      .comp-logo { width: 18px; height: 18px; object-fit: contain; }
      .comp-name { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--secondary-text-color); }
      .teams { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 52px; height: 52px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; color: var(--primary-text-color); }
      .center { text-align: center; flex: 0 0 auto; padding: 0 8px; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 99px; margin-bottom: 4px; }
      .ft-badge { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 4px; }
      .score { font-size: 42px; font-weight: 900; letter-spacing: 6px; color: var(--primary-text-color); line-height: 1; }
      .minute { font-size: 12px; color: var(--secondary-text-color); margin-top: 2px; }
      .countdown { display: flex; justify-content: center; gap: 8px; margin: 4px 0; }
      .cd-block { display: flex; flex-direction: column; align-items: center; min-width: 36px; }
      .cd-num { font-size: 30px; font-weight: 900; color: var(--primary-color, #03a9f4); line-height: 1; }
      .cd-label { font-size: 9px; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.05em; }
      .cd-sep { font-size: 26px; font-weight: 900; color: var(--secondary-text-color); align-self: flex-start; padding-top: 2px; }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 12px; font-size: 11px; color: var(--secondary-text-color); }
      .empty { padding: 16px; text-align: center; color: var(--secondary-text-color); }
      .vs-text { font-size: 20px; font-weight: 900; color: var(--secondary-text-color); }
      .sched-date { font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">Unknown entity: ${this._config.entity}</div></ha-card>`;

    const match = this._getNextMatch(stateObj);
    if (!match) return html`<ha-card><div class="empty">No match data</div></ha-card>`;

    const isLive = match.state === 'in' || match.status === 'live';
    const isFinished = match.state === 'post' || match.status === 'finished' || match.status === 'final';
    const countdown = (!isLive && !isFinished) ? this._countdown(match.date) : null;
    const compName = match.competition_name || stateObj.attributes.league_name || '';
    const compLogo = match.competition_logo || stateObj.attributes.league_logo || '';
    const venue = match.venue && match.venue !== 'N/A' ? match.venue : '';
    const venueCity = match.venue_city && match.venue_city !== 'N/A' ? match.venue_city : '';

    return html`
      <ha-card>
        ${!this._config.hide_header && compName ? html`
          <div class="header">
            ${compLogo ? html`<img class="comp-logo" src="${compLogo}" alt="">` : ''}
            <span class="comp-name">${compName}</span>
          </div>
        ` : ''}

        <div class="teams">
          <div class="team">
            ${match.home_logo ? html`<img class="team-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.home_team || '?'}</span>
          </div>

          <div class="center">
            ${isLive ? html`
              <div class="live-badge">LIVE</div>
              <div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
              ${match.clock ? html`<div class="minute">${match.clock}</div>` : ''}
            ` : isFinished ? html`
              <div class="ft-badge">FT</div>
              <div class="score">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
            ` : countdown ? html`
              ${match.date ? html`<div class="sched-date">${match.date}</div>` : ''}
              <div class="countdown">
                ${countdown.days > 0 ? html`
                  <div class="cd-block"><span class="cd-num">${countdown.days}</span><span class="cd-label">days</span></div>
                  <span class="cd-sep">:</span>
                ` : ''}
                <div class="cd-block"><span class="cd-num">${String(countdown.hours).padStart(2,'0')}</span><span class="cd-label">hrs</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(countdown.mins).padStart(2,'0')}</span><span class="cd-label">min</span></div>
                <span class="cd-sep">:</span>
                <div class="cd-block"><span class="cd-num">${String(countdown.secs).padStart(2,'0')}</span><span class="cd-label">sec</span></div>
              </div>
            ` : html`
              ${match.date ? html`<div class="sched-date">${match.date}</div>` : ''}
              <div class="vs-text">vs</div>
            `}
          </div>

          <div class="team">
            ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.away_team || '?'}</span>
          </div>
        </div>

        ${venue ? html`
          <div class="meta">
            🏟 <span>${venue}${venueCity ? `, ${venueCity}` : ''}</span>
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-countdown", SoccerLiveCountdownCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-countdown", name: "Soccer Live Match Countdown", description: "Countdown to next match with live score" });
