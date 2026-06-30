import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from '../shared-header.js';
import { EVENT_I18N, SKIP } from '../shared-event-i18n.js';
import { soccerCardShellStyles } from "../card-shell.js";

class SoccerLiveTimelineCard extends LitElement {
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
    this.reverseOrder = config.reverse_order === true;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  getCardSize() { return 5; }
  static getConfigElement() { return document.createElement("soccer-live-timeline-editor"); }
  static getStubConfig() {
    return { entity: "sensor.soccer_live_next", hide_header: false, reverse_order: true };
  }

  _getEventInfo(ev) {
    const ty = (ev.type || '').toLowerCase();
    const txt = (ev.type_text || '').toLowerCase();
    if (SKIP.some(s => txt.includes(s))) return null;
    let btype = 'meta';
    if (ty === 'goal' || ev.scoring_play || txt.includes('penalty')) btype = 'goal';
    else if (txt.includes('yellow')) btype = 'yellow';
    else if (txt.includes('red card')) btype = 'red';
    else if (ty === 'substitution' || txt.includes('substitut')) btype = 'sub';
    const athletes = (ev.athletes || []).filter(Boolean);
    const i18nKey = EVENT_I18N[txt];
    const text = athletes.length ? athletes.join(', ') : (i18nKey ? this._t(i18nKey) : (ev.type_text || ev.short_text || ''));
    return { btype, text };
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;

    const matches = stateObj.attributes.matches || [];
    if (matches.length === 0) return html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`;
    const m = matches[0];
    const rawEvents = m.key_events || stateObj.attributes.key_events || [];
    const events = rawEvents.map(e => ({ ev: e, info: this._getEventInfo(e) })).filter(x => x.info !== null);

    if (events.length === 0) {
      return html`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">⏱</div>
            <div class="empty-title">${this._t('timeline.empty.title')}</div>
            <div class="empty-sub">${this._t('timeline.empty.sub')}</div>
          </div>
        </ha-card>
      `;
    }

    const orderedEvents = this.reverseOrder ? [...events].reverse() : events;

    const badge = btype => {
      const labels = { goal: 'event.goal', yellow: 'event.yellow_card', red: 'event.red_card', sub: 'event.substitution' };
      if (labels[btype]) return html`<span class="tl-badge ${btype}">${this._t(labels[btype])}</span>`;
      return html`<span class="tl-badge meta">·</span>`;
    };

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        ${!this.hideHeader ? html`
          ${renderSoccerHeader({
            logo: m.competition_logo || m.league_logo || stateObj.attributes.league_logo || null,
            title: m.competition_name || m.league_name || stateObj.attributes.league_name || this._t('card.timeline'),
            badge: (m.state === 'in' || m.state === 'post')
              ? renderSoccerBadge(`${m.home_score ?? 0}–${m.away_score ?? 0}`, m.state === 'in' ? 'live' : 'ft')
              : renderSoccerBadge(m.date || '', 'date'),
            fallbackIcon: '⏱',
          })}
        ` : ''}

        <div class="tl-body">
          ${orderedEvents.map(({ ev, info }) => html`
            <div class="tl-row">
              <span class="tl-min">${ev.clock || ''}</span>
              ${badge(info.btype)}
              <div class="tl-text">
                <div class="tl-main">${info.text}</div>
                ${ev.team ? html`<div class="tl-team">${ev.team}</div>` : ''}
              </div>
            </div>
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
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
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
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .mini-logo { width: 16px; height: 16px; object-fit: contain; }

      .tl-body {
        position: relative; z-index: 1;
        padding: 4px 16px 16px;
      }
      .tl-row {
        display: flex; align-items: flex-start; gap: 8px;
        padding: 8px 0;
        border-bottom: 1px solid var(--cl-divider, rgba(255,255,255,0.06));
      }
      .tl-row:last-child { border-bottom: none; }
      .tl-min {
        min-width: 28px; text-align: right;
        font-size: 11px; font-weight: 700;
        color: var(--cl-text-2); padding-top: 2px; flex-shrink: 0;
      }
      .tl-badge {
        display: inline-block; font-size: 8px; font-weight: 800;
        padding: 1px 5px; border-radius: 3px;
        text-transform: uppercase; letter-spacing: 0.04em;
        flex-shrink: 0; line-height: 15px; white-space: nowrap;
      }
      .tl-badge.goal   { background: rgba(99,102,241,0.18); color: var(--cl-accent, #6366f1); }
      .tl-badge.yellow { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .tl-badge.red    { background: rgba(239,68,68,0.18); color: #ef4444; }
      .tl-badge.sub    { background: rgba(148,163,184,0.12); color: var(--cl-text-2, #94a3b8); }
      .tl-badge.meta   { background: transparent; color: var(--cl-text-2, #94a3b8); font-size: 14px; padding: 0 4px; letter-spacing: 0; }
      .tl-text { flex: 1; }
      .tl-main { font-size: 12px; font-weight: 600; color: var(--cl-text); }
      .tl-team { font-size: 10px; color: var(--cl-text-2); margin-top: 2px; }
    `];
  }
}

if (!customElements.get("soccer-live-timeline")) {
  customElements.define("soccer-live-timeline", SoccerLiveTimelineCard);
}
