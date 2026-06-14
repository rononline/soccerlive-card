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
    this._timer = setInterval(() => { this._now = new Date(); }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timer);
  }

  getCardSize() { return 3; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-countdown-editor"); }
  static getStubConfig() { return { entity: "sensor.soccerlive_next_" }; }

  _getNextMatch(stateObj) {
    const attrs = stateObj.attributes;
    // Look for next scheduled match
    const all = attrs.matches || attrs.all_matches || [];
    const next = all.find(m => m.status === 'scheduled' || m.status === 'pre') || all[0];
    if (next) return next;
    // Fallback: single match in attributes
    if (attrs.home_team) return attrs;
    return null;
  }

  _countdown(dateStr) {
    if (!dateStr) return null;
    const target = new Date(dateStr);
    const now = this._now || new Date();
    const diff = target - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return { days, hours, mins, secs, diff };
  }

  static get styles() {
    return [skinStyles, css`
      ha-card { padding: 16px; }
      .header { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
      .comp-logo { width: 20px; height: 20px; object-fit: contain; }
      .comp-name { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .teams { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
      .team { display: flex; flex-direction: column; align-items: center; gap: 8px; flex: 1; }
      .team-logo { width: 52px; height: 52px; object-fit: contain; }
      .team-name { font-size: 13px; font-weight: 700; text-align: center; color: var(--primary-text-color); }
      .vs { font-size: 18px; font-weight: 900; color: var(--secondary-text-color); padding: 0 12px; }
      .live-score { text-align: center; }
      .live-badge { display: inline-block; background: #e53935; color: #fff; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 99px; margin-bottom: 6px; }
      .score-big { font-size: 42px; font-weight: 900; color: var(--primary-text-color); letter-spacing: 4px; }
      .minute { font-size: 13px; color: var(--secondary-text-color); }
      .countdown { display: flex; justify-content: center; gap: 12px; margin-top: 4px; }
      .countdown-block { display: flex; flex-direction: column; align-items: center; }
      .countdown-num { font-size: 32px; font-weight: 900; color: var(--primary-color, #03a9f4); line-height: 1; }
      .countdown-label { font-size: 10px; color: var(--secondary-text-color); text-transform: uppercase; letter-spacing: 0.05em; }
      .countdown-sep { font-size: 28px; font-weight: 900; color: var(--secondary-text-color); align-self: flex-start; padding-top: 4px; }
      .meta { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 14px; font-size: 11px; color: var(--secondary-text-color); }
      .meta-icon { font-size: 13px; }
      .finished-badge { text-align: center; font-size: 13px; color: var(--secondary-text-color); padding: 8px 0; }
      .empty { padding: 16px; text-align: center; color: var(--secondary-text-color); }
    `];
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card><div class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</div></ha-card>`;

    const match = this._getNextMatch(stateObj);
    if (!match) return html`<ha-card><div class="empty">No match data available</div></ha-card>`;

    const isLive = match.status === 'live' || match.status === 'in';
    const isFinished = match.status === 'post' || match.status === 'finished' || match.status === 'final';
    const countdown = !isLive && !isFinished ? this._countdown(match.date || match.match_date) : null;
    const compName = match.competition_name || match.league || stateObj.attributes.league_name || '';
    const compLogo = match.competition_logo || match.league_logo || stateObj.attributes.league_logo || '';
    const venue = match.venue && match.venue !== 'N/A' ? match.venue : '';

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

          ${isLive ? html`
            <div class="live-score">
              <div class="live-badge">LIVE</div>
              <div class="score-big">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
              ${match.clock || match.status_detail ? html`<div class="minute">${match.clock || match.status_detail}</div>` : ''}
            </div>
          ` : isFinished ? html`
            <div class="live-score">
              <div class="finished-badge">FT</div>
              <div class="score-big">${match.home_score ?? 0} - ${match.away_score ?? 0}</div>
            </div>
          ` : countdown ? html`
            <div class="countdown">
              ${countdown.days > 0 ? html`
                <div class="countdown-block"><span class="countdown-num">${countdown.days}</span><span class="countdown-label">days</span></div>
                <span class="countdown-sep">:</span>
              ` : ''}
              <div class="countdown-block"><span class="countdown-num">${String(countdown.hours).padStart(2,'0')}</span><span class="countdown-label">hrs</span></div>
              <span class="countdown-sep">:</span>
              <div class="countdown-block"><span class="countdown-num">${String(countdown.mins).padStart(2,'0')}</span><span class="countdown-label">min</span></div>
              <span class="countdown-sep">:</span>
              <div class="countdown-block"><span class="countdown-num">${String(countdown.secs).padStart(2,'0')}</span><span class="countdown-label">sec</span></div>
            </div>
          ` : html`<span class="vs">vs</span>`}

          <div class="team">
            ${match.away_logo ? html`<img class="team-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="team-name">${match.away_team || '?'}</span>
          </div>
        </div>

        ${venue ? html`
          <div class="meta">
            <span class="meta-icon">🏟</span>
            <span>${venue}${match.venue_city && match.venue_city !== 'N/A' ? `, ${match.venue_city}` : ''}</span>
          </div>
        ` : ''}
      </ha-card>
    `;
  }
}

customElements.define("soccer-live-countdown", SoccerLiveCountdownCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: "soccer-live-countdown", name: "Soccer Live Match Countdown", description: "Countdown to next match with live score" });
