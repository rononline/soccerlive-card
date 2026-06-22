import { LitElement, html, css } from "lit-element";
import { t, resolveLang, formatMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { OfflineCache } from '../offline-cache.js';
import { renderCardError } from "../card-error.js";

class SoccerLiveTickerCard extends LitElement {
  static get properties() { return { hass: {}, _config: {}, _sel: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this._sel = null;
  }

  getCardSize() { return 1; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-ticker-editor"); }
  static getStubConfig() { return { entity: "sensor.soccer_live_all_today", card_type: "ticker" }; }

  _formatMatchTime(dateStr) {
    return formatMatchDate(dateStr, resolveLang(this.hass, this._config)) || 'vs';
  }

  _isSel(m) {
    return this._sel && this._sel.home_team === m.home_team && this._sel.away_team === m.away_team;
  }

  _toggleSel(m) {
    this._sel = this._isSel(m) ? null : m;
  }

  _renderItem(m) {
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    const sel    = this._isSel(m);
    const league = m.league_name && m.league_name !== 'N/A' ? m.league_name : null;
    return html`
      <div class="tick-item ${isLive ? 'live' : ''} ${isFt ? 'ft' : ''} ${sel ? 'selected' : ''}"
           @click=${() => this._toggleSel(m)}>
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
        ${league ? html`<div class="tick-comp">${league}</div>` : ''}
      </div>
    `;
  }

  _renderDetail() {
    const m = this._sel;
    if (!m) return '';
    const isLive = m.state === 'in';
    const isFt   = m.state === 'post';
    const league = m.league_name && m.league_name !== 'N/A' ? m.league_name : null;
    return html`
      <div class="tick-detail">
        <div class="td-row">
          <div class="td-side">
            ${m.home_logo ? html`<img class="td-logo" src="${m.home_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
            <span class="td-name">${m.home_team || '?'}</span>
          </div>
          <div class="td-center">
            ${isLive ? html`
              <span class="td-live"><span class="live-dot"></span>${m.clock || ''}</span>
              <span class="td-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>
            ` : isFt ? html`
              <span class="td-score">${m.home_score ?? 0}–${m.away_score ?? 0}</span>
              <span class="td-ft">FT</span>
            ` : html`
              <span class="td-time">${this._formatMatchTime(m.date)}</span>
            `}
          </div>
          <div class="td-side right">
            <span class="td-name">${m.away_team || '?'}</span>
            ${m.away_logo ? html`<img class="td-logo" src="${m.away_logo}" alt="" @error=${e => e.target.style.display='none'}>` : ''}
          </div>
        </div>
        ${league ? html`<div class="td-comp">${league}</div>` : ''}
        <button class="td-close" @click=${() => this._sel = null} aria-label="close">
          <svg viewBox="0 0 14 14" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="1" y1="1" x2="13" y2="13"/><line x1="13" y1="1" x2="1" y2="13"/></svg>
        </button>
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

    if (!visible.length) {
      if (this._config.hide_when_empty) return html`<style>:host{display:none!important}</style>`;
      return html`<ha-card><div class="empty">${this._t('ui.no_live_match')}</div></ha-card>`;
    }

    const autoScroll = this._config.auto_scroll && visible.length > 1;
    const speed = this._config.scroll_speed || 'normal';
    const pxPerSec = { slow: 28, normal: 55, fast: 110 }[speed] ?? 55;
    const duration = Math.round(visible.length * 176 / pxPerSec);
    const items = autoScroll ? [...visible, ...visible] : visible;

    return html`
      <ha-card>
        <div class="ticker-wrap ${autoScroll ? 'auto' : ''} ${this._sel ? 'paused' : ''}">
          <div class="ticker-scroll" style="${autoScroll ? `animation-duration:${duration}s` : ''}">
            ${items.map(m => this._renderItem(m))}
          </div>
        </div>
        ${this._renderDetail()}
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
      .ticker-wrap.auto:hover .ticker-scroll,
      .ticker-wrap.paused .ticker-scroll {
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
        cursor: pointer;
        transition: border-color 0.15s, background 0.15s;
      }
      .tick-item:hover { border-color: var(--cl-accent, #60a5fa); }
      .tick-item.selected { border-color: var(--cl-accent, #60a5fa); background: rgba(96,165,250,0.08); }
      .tick-item.live {
        border-color: rgba(239,68,68,0.5);
        background: rgba(239,68,68,0.07);
      }
      .tick-item.live.selected { border-color: var(--cl-live, #ef4444); background: rgba(239,68,68,0.14); }
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
      .tick-comp {
        font-size: 8px; color: var(--cl-text-2);
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        margin-top: 1px;
        opacity: 0.7;
      }

      /* Detail strip */
      .tick-detail {
        position: relative;
        padding: 8px 12px 10px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-surface);
      }
      .td-row {
        display: flex; align-items: center; gap: 8px;
      }
      .td-side {
        flex: 1; display: flex; align-items: center; gap: 6px; min-width: 0;
      }
      .td-side.right { flex-direction: row-reverse; }
      .td-logo { width: 20px; height: 20px; object-fit: contain; flex-shrink: 0; }
      .td-name {
        font-size: 12px; font-weight: 700;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        min-width: 0;
      }
      .td-side.right .td-name { text-align: right; }
      .td-center {
        display: flex; flex-direction: column; align-items: center; gap: 1px;
        flex-shrink: 0;
      }
      .td-score {
        font-size: 18px; font-weight: 900; letter-spacing: 1px;
        color: var(--cl-text);
      }
      .td-live {
        font-size: 9px; font-weight: 700; color: var(--cl-live, #ef4444);
        display: flex; align-items: center; gap: 3px;
      }
      .td-ft {
        font-size: 8px; font-weight: 700; color: var(--cl-text-2);
        text-transform: uppercase; letter-spacing: 0.5px;
      }
      .td-time { font-size: 12px; font-weight: 700; color: var(--cl-accent, #60a5fa); }
      .td-comp {
        font-size: 10px; color: var(--cl-text-2); text-align: center;
        margin-top: 4px; opacity: 0.7;
      }
      .td-close {
        position: absolute; top: 6px; right: 8px;
        background: none; border: none; cursor: pointer;
        font-size: 12px; color: var(--cl-text-2); line-height: 1;
        padding: 2px 4px; border-radius: 4px;
        transition: color 0.1s;
      }
      .td-close:hover { color: var(--cl-text); }

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
