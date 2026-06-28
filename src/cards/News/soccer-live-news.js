import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { soccerCardShellStyles } from "../card-shell.js";

class SoccerLiveNewsCard extends LitElement {
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
    this.maxArticles = config.max_articles ? config.max_articles : 5;
    this.hideHeader = config.hide_header === true;
    this.hideImages = config.hide_images === true;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  getCardSize() { return 4; }
  static getConfigElement() { return document.createElement("soccer-live-news-editor"); }
  static getStubConfig() {
    return {
      entity: "sensor.soccer_live_news",
      max_articles: 5,
      hide_header: false,
      hide_images: false,
    };
  }

  _formatDate(iso) {
    if (!iso) return '';
    try {
      const d = new Date(iso);
      const now = new Date();
      const diff = (now - d) / 1000;
      if (diff < 60) return this._t('time.now');
      if (diff < 3600) return this._t('time.n_min_ago', { n: Math.floor(diff/60) });
      if (diff < 86400) return this._t('time.n_h_ago', { n: Math.floor(diff/3600) });
      if (diff < 604800) return this._t('time.n_d_ago', { n: Math.floor(diff/86400) });
      const month = this._t('month.' + (d.getMonth() + 1));
      return `${d.getDate()} ${month}`;
    } catch (e) { return ''; }
  }

  _openLink(url) {
    if (!url || !/^https?:\/\//i.test(url)) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;
    const articles = (stateObj.attributes.articles || []).slice(0, this.maxArticles);
    if (articles.length === 0) return html`
      <ha-card class="empty">
        <div style="font-size:38px; opacity:0.25; margin-bottom:10px;">📰</div>
        <div style="font-weight:700;">${this._t('news.empty')}</div>
      </ha-card>`;

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        ${!this.hideHeader ? renderSoccerHeader({
          logo: stateObj.attributes.league_logo || (stateObj.attributes.league_info || [])[0]?.logo_href || null,
          title: stateObj.attributes.league_name || this._t('card.news'),
          badge: renderSoccerBadge(stateObj.state, 'neutral'),
          fallbackIcon: '📰',
        }) : ''}
        <div class="news-list">
          ${articles.map(a => html`
            <article class="news-item ${this.hideImages || !a.image ? 'no-img' : ''}" @click="${() => this._openLink(a.link)}">
              ${!this.hideImages && a.image ? html`
                <div class="news-img" style="background-image: url('${a.image}');"></div>
              ` : ''}
              <div class="news-body">
                <div class="news-meta">
                  ${a.premium ? html`<span class="cat premium">${this._t('news.premium')}</span>` : (a.category ? html`<span class="cat">${a.category}</span>` : '')}
                  <span class="date">${this._formatDate(a.published)}</span>
                </div>
                <div class="news-headline">${a.headline}</div>
                ${a.description ? html`<div class="news-desc">${a.description}</div>` : ''}
                ${a.byline ? html`<div class="news-byline">✍ ${a.byline}</div>` : ''}
                ${a.tags && a.tags.length > 1 ? html`<div class="news-tags">${a.tags.slice(0,4).map(tag => html`<span class="news-tag">${tag}</span>`)}</div>` : ''}
              </div>
            </article>
          `)}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, soccerHeaderStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
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
      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(236,72,153,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.10), transparent 50%);
        pointer-events: none;
      }
      /* .top-bar / .competition / .comp-icon come from soccerHeaderStyles */

      .news-list {
        position: relative; z-index: 1;
        display: flex; flex-direction: column;
        padding: 6px;
      }
      .news-item {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 14px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .news-item.no-img {
        grid-template-columns: 1fr;
      }
      .news-item:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .news-img {
        width: 96px;
        height: 72px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-color: var(--cl-card-2);
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      }
      .news-body {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .news-meta {
        display: flex; gap: 8px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--cl-text-2);
      }
      .news-meta .cat {
        background: rgba(99,102,241,0.15);
        color: var(--cl-accent);
        border-radius: 4px;
        padding: 2px 7px;
        font-size: 10px;
        font-weight: 600;
      }
      .news-meta .cat.premium {
        background: rgba(251,191,36,0.18);
        color: var(--cl-gold, #fbbf24);
      }
      .news-meta .date::before {
        content: '·';
        margin-right: 8px;
        opacity: 0.4;
      }
      .news-meta .cat + .date::before { content: '·'; }
      .news-byline {
        font-size: 10px;
        color: var(--cl-text-2);
        margin-top: 4px;
        opacity: 0.7;
      }
      .news-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 6px;
      }
      .news-tag {
        font-size: 10px;
        background: rgba(255,255,255,0.06);
        color: var(--cl-text-2);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 4px;
        padding: 2px 6px;
        white-space: nowrap;
      }
      .news-headline {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.3;
        color: var(--cl-text);
        letter-spacing: -0.01em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .news-desc {
        font-size: 12px;
        font-weight: 500;
        color: var(--cl-text-2);
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `];
  }
}

if (!customElements.get("soccer-live-news")) {
  customElements.define("soccer-live-news", SoccerLiveNewsCard);
}
