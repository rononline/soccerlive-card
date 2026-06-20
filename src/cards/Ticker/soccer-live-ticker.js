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

  _renderItem(m) {
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    return html`
      <div class="tick-item ${isLive ? 'live' : ''}">
        <div class="tick-team">
          ${m.home_logo ? html`<img class="tick-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          <span class="tick-name">${m.home_team || '?'}</span>
        </div>
        <div class="tick-mid">
          ${isLive ? html`<span class="tick-live"><span class="live-dot"></span>${m.clock || ''}</span>` : ''}
          ${isLive || isFt
            ? html`<span class="tick-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>`
            : html`<span class="tick-time">${m.date || 'vs'}</span>`}
          ${isFt ? html`<span class="tick-ft">${this._t('status.full_time')}</span>` : ''}
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

    const autoScroll = this._config.auto_scroll;
    const speed = this._config.scroll_speed || 'normal';
    const duration = { slow: 60, normal: 30, fast: 15 }[speed] ?? 30;
    // Duplicate items for seamless loop; only worth it with enough items
    const items = autoScroll && visible.length > 1 ? [...visible, ...visible] : visible;

    return html`
      <ha-card>
        <div class="ticker-wrap ${autoScroll ? 'auto' : ''}">
          <div class="ticker-scroll" style="${autoScroll ? `animation-duration:${duration * visible.length}s` : ''}">
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
        padding: 8px 12px;
      }
      .ticker-wrap::-webkit-scrollbar { display: none; }
      .ticker-wrap.auto {
        overflow-x: hidden;
      }
      .ticker-scroll {
        display: flex;
        gap: 8px;
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
        gap: 3px;
        padding: 8px 12px;
        background: var(--cl-surface);
        border: 1px solid var(--cl-divider);
        border-radius: 12px;
        width: 160px;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      .tick-item.live {
        border-color: rgba(239,68,68,0.5);
        background: rgba(239,68,68,0.07);
      }
      .tick-team {
        display: flex; align-items: center; gap: 6px;
        min-width: 0;
      }
      .tick-logo { width: 16px; height: 16px; object-fit: contain; flex-shrink: 0; }
      .tick-name {
        font-size: 12px; font-weight: 700;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        flex: 1; min-width: 0;
      }
      .tick-mid {
        display: flex; align-items: center; gap: 5px;
        padding: 1px 0;
      }
      .tick-score {
        font-size: 14px; font-weight: 900; letter-spacing: 0.5px;
        color: var(--cl-text);
      }
      .tick-time { font-size: 10px; color: var(--cl-text-2); }
      .tick-ft { font-size: 9px; font-weight: 700; color: var(--cl-text-2); text-transform: uppercase; }
      .tick-live {
        font-size: 9px; font-weight: 700; color: var(--cl-live, #ef4444);
        display: flex; align-items: center; gap: 3px;
      }
      .live-dot {
        width: 5px; height: 5px;
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
