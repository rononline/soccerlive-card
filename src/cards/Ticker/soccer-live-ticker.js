import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { OfflineCache } from '../offline-cache.js';
import { renderCardError } from "../card-error.js";

class SoccerLiveTickerCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 1; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-ticker-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_today", card_type: "ticker" }; }

  _formatMatchTime(dateStr) {
    if (!dateStr) return 'vs';
    const m = dateStr.match(/^(\d{2})-(\d{2})-(\d{4})\s+(\d{2}:\d{2})$/);
    if (!m) return dateStr;
    const [, dd, mm, yyyy, time] = m;
    const now = new Date();
    if (
      parseInt(dd) === now.getDate() &&
      parseInt(mm) === now.getMonth() + 1 &&
      parseInt(yyyy) === now.getFullYear()
    ) return time;
    return `${parseInt(dd)}/${parseInt(mm)} ${time}`;
  }

  _renderItem(m) {
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    return html`
      <div class="tick-item ${isLive ? 'live' : ''} ${isFt ? 'ft' : ''}">
        <div class="tick-team">
          ${m.home_logo ? html`<img class="tick-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="tick-name">${m.home_team || '?'}</span>
        </div>
        <div class="tick-mid">
          ${isLive ? html`<span class="tick-live"><span class="live-dot"></span>${m.clock || ''}</span>` : ''}
          ${isLive || isFt
            ? html`<span class="tick-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>`
            : html`<span class="tick-time">${this._formatMatchTime(m.date)}</span>`}
          ${isFt ? html`<span class="tick-ft">FT</span>` : ''}
        </div>
        <div class="tick-team">
          ${m.away_logo ? html`<img class="tick-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="tick-name">${m.away_team || '?'}</span>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    let attrs = null;
    if (!stateObj) {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.matches) attrs = cached.data;
      else return renderCardError('⚠️', this._t('ui.entity_not_found'), entityId, this._t('ui.check_entity_config'));
    } else if (stateObj.state === 'unavailable') {
      const cached = OfflineCache.get(entityId);
      if (cached?.data?.matches) attrs = cached.data;
      else return renderCardError('📡', this._t('ui.sensor_unavailable'), '', this._t('ui.restart_ha'));
    } else {
      attrs = stateObj.attributes;
      OfflineCache.set(entityId, attrs);
    }

    const matches = attrs.matches || [];
    if (!matches.length) return html`<ha-card><div class="empty">${this._t('ui.no_match_data')}</div></ha-card>`;

    const sorted = [...matches].sort((a, b) => {
      const order = { in: 0, pre: 1, post: 2 };
      return (order[a.state] ?? 3) - (order[b.state] ?? 3);
    });

    const filter = this._config.filter;
    const visible = filter === 'live' ? sorted.filter(m => m.state === 'in') : sorted;

    if (!visible.length) return html`<ha-card><div class="empty">${this._t('ui.no_live_match')}</div></ha-card>`;

    const autoScroll = this._config.auto_scroll && visible.length > 1;
    const speed = this._config.scroll_speed || 'normal';
    // Pixel-rate based: duration scales with item count, speed stays consistent
    const pxPerSec = { slow: 28, normal: 55, fast: 110 }[speed] ?? 55;
    const duration = Math.round(visible.length * 176 / pxPerSec);
    const items = autoScroll ? [...visible, ...visible] : visible;

    return html`
      <ha-card>
        <div class="ticker-wrap ${autoScroll ? 'auto' : ''}">
          <div class="ticker-scroll" style="${autoScroll ? `animation-duration:${duration}s` : ''}">
            ${items.map(m => this._renderItem(m))}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, css`
      ha-card {
        background: var(--cl-bg);
        color: var(--cl-text);
        padding: 0;
        border-radius: 16px;
        overflow: hidden;
      }
      .ticker-wrap {
        overflow-x: auto;
        scrollbar-width: none;
        padding: 5px 6px;
      }
      .ticker-wrap::-webkit-scrollbar { display: none; }
      .ticker-wrap.auto { overflow-x: hidden; }
      .ticker-scroll {
        display: flex;
        gap: 6px;
        width: max-content;
      }
      .ticker-wrap.auto .ticker-scroll {
        animation: ticker-slide linear infinite;
      }
      .ticker-wrap.auto:hover .ticker-scroll {
        animation-play-state: paused;
      }
      @keyframes ticker-slide {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .tick-item {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 5px 8px;
        background: var(--cl-surface);
        border: 1px solid var(--cl-divider);
        border-radius: 10px;
        width: 155px;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      .tick-item.live {
        border-color: rgba(239,68,68,0.5);
        background: rgba(239,68,68,0.07);
      }
      .tick-item.ft { opacity: 0.72; }
      .tick-team {
        display: flex; align-items: center; gap: 5px;
        min-width: 0;
      }
      .tick-logo { width: 14px; height: 14px; object-fit: contain; flex-shrink: 0; }
      .tick-name {
        font-size: 11px; font-weight: 700;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        flex: 1; min-width: 0;
      }
      .tick-mid {
        display: flex; align-items: center; justify-content: center; gap: 4px;
        padding: 1px 0;
      }
      .tick-score {
        font-size: 13px; font-weight: 900; letter-spacing: 0.5px;
        color: var(--cl-text);
      }
      .tick-item.live .tick-score { color: var(--cl-live, #ef4444); }
      .tick-time { font-size: 10px; font-weight: 600; color: var(--cl-accent, #60a5fa); }
      .tick-ft {
        font-size: 8px; font-weight: 700; color: var(--cl-text-2);
        text-transform: uppercase; letter-spacing: 0.5px;
        border: 1px solid var(--cl-divider); border-radius: 3px;
        padding: 0 2px;
      }
      .tick-live {
        font-size: 8px; font-weight: 700; color: var(--cl-live, #ef4444);
        display: flex; align-items: center; gap: 2px;
      }
      .live-dot {
        width: 4px; height: 4px;
        background: var(--cl-live, #ef4444);
        border-radius: 50%;
        animation: pulse 1s infinite;
      }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      .empty {
        padding: 14px 16px;
        color: var(--cl-text-2);
        font-size: 13px;
        text-align: center;
      }
    `];
  }
}

if (!customElements.get("soccer-live-ticker")) {
  customElements.define("soccer-live-ticker", SoccerLiveTickerCard);
}
