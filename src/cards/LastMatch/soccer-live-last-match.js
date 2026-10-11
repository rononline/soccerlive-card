import { LitElement, html, css, render } from "lit";
import { t, resolveLang, parseMatchDate, formatMatchDateFull } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderInfoState, renderSyncStatusOrEmpty } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { displayCompetitionName, resolveCompetitionLogo } from "../shared-competition.js";
import { renderCardHero } from "../card-shell.js";
import { renderSoccerHeader, renderSoccerBadge, soccerHeaderStyles } from "../shared-header.js";
import { renderMatchMeta, matchMetaStyles } from "../shared-match-meta.js";
import { scoreText } from "../shared-score.js";
import { pickLastMatch, pickLastFromMatches } from "../shared-last-match.js";
import { groupFilterActive, filterByGroup, groupFilterEmptyReason } from "../shared-group-filter.js";
import { renderPopupTimeline, renderPopupLineup, renderPopupSectionStyles } from "../shared-match-sections.js";
import { pitchStyles } from "../shared-pitch.js";
import { matchStatRows, translateStatKey } from "../shared-stat-labels.js";

/**
 * Soccer Live Last Match Card
 * Shows the most recent finished match for a team: competition, teams and the
 * final score, plus a Details button that opens a popup with the full available
 * detail (stats, timeline with goalscorers, ratings, lineup, H2H).
 */
class SoccerLiveLastMatchCard extends LitElement {
  static get properties() {
    return { hass: {}, _config: {}, _cachedData: {}, _showDetails: { type: Boolean } };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    // Opt-in: fill the available height (for use inside a horizontal-stack, so
    // it matches a taller sibling card). Off by default — a plain Sections grid
    // would otherwise inflate a height:100% card via its getCardSize allocation.
    this.toggleAttribute("fill", config.fill_height === true);
  }

  updated(changed) {
    if (changed.has("hass") && this._config) {
      const stateObj = this.hass?.states[this._config.entity];
      if (stateObj && stateObj.state !== "unavailable") {
        this._cachedData = stateObj.attributes;
        OfflineCache.set(this._config.entity, stateObj.attributes);
      } else if (!this._cachedData) {
        this._cachedData = OfflineCache.get(this._config.entity);
      }
    }
    if (changed.has("_showDetails")) {
      if (this._showDetails) this._renderDetailsPortal();
      else this._removeDetailsPortal();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._removeDetailsPortal();
  }

  getCardSize() { return 3; }

  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  _attrs() {
    const stateObj = this.hass?.states[this._config.entity];
    return (stateObj && stateObj.state !== "unavailable") ? stateObj.attributes : this._cachedData;
  }

  render() {
    if (!this._config || !this.hass) return html``;
    applySkin(this, this._config);
    const attrs = this._attrs();
    if (!attrs || (!attrs.matches && !attrs.previous_matches)) {
      return renderSyncStatusOrEmpty(attrs, (k) => this._t(k), () =>
        renderInfoState("📅", this._t("last_match.none"), this._t("last_match.none_hint")));
    }

    // With a group filter, pick the last finished match from the group-filtered
    // full list (so only_my_group + exclude_my_team shows the last result of the
    // other team in your group); otherwise the normal team pick.
    const match = groupFilterActive(this._config)
      ? pickLastFromMatches(filterByGroup(attrs.matches || [], this._config))
      : pickLastMatch(attrs);
    if (!match) {
      // A group filter that emptied the list gets a tailored hint (e.g. "this is
      // a single-team sensor — use a competition's all-matches sensor") instead
      // of the generic "no recent match".
      const reason = groupFilterEmptyReason(attrs.matches, this._config, attrs);
      const title = reason ? this._t("group_filter.empty_title") : this._t("last_match.none");
      const hint = reason === "team_sensor" ? this._t("group_filter.hint_team_sensor")
        : reason === "no_group" ? this._t("group_filter.hint_no_group")
        : this._t("last_match.none_hint");
      return html`<ha-card>${renderInfoState("📅", title, hint)}</ha-card>`;
    }
    // Faint blurred home/away crests in the background, like the Countdown and
    // Team cards (renderCardHero draws .bg-logos + the accent gradient).
    return html`<ha-card class="${this._config.compact ? "compact" : ""}">
      ${renderCardHero(match.home_logo, match.away_logo)}
      <div class="lm-content">${this._renderMatch(match)}</div>
    </ha-card>`;
  }

  _hasDetails(match) {
    return !!(
      (match.key_events && match.key_events.length) ||
      (match.lineup_home && match.lineup_home.length) ||
      (match.lineup_away && match.lineup_away.length) ||
      match.home_statistics ||
      (match.head_to_head && match.head_to_head.length)
    );
  }

  _renderMatch(match) {
    const lang = resolveLang(this.hass, this._config);
    const leagueName = match.league_name && match.league_name !== "N/A" ? match.league_name : "";
    const leagueLogo = resolveCompetitionLogo({
      competitionName: leagueName,
      competitionLogo: match.league_logo,
      fallbackLogo: null,
      isFriendly: match.is_friendly,
    });
    const competition = displayCompetitionName(leagueName, lang);

    const dateObj = parseMatchDate(match.date_iso || match.date);
    // Full weekday + date + kick-off time ("za 10-10-2026 18:45"), matching the
    // Countdown card's date badge; fall back to a short date if the display date
    // isn't in the expected DD-MM-YYYY HH:MM form.
    const dateStr = formatMatchDateFull(match.date, lang)
      || (dateObj ? dateObj.toLocaleDateString(lang, { day: "numeric", month: "short" }) : "");

    const homeGoals = Number(match.home_score);
    const awayGoals = Number(match.away_score);
    const homeWin = Number.isFinite(homeGoals) && Number.isFinite(awayGoals) && homeGoals > awayGoals;
    const awayWin = Number.isFinite(homeGoals) && Number.isFinite(awayGoals) && awayGoals > homeGoals;

    const logoEl = (logo) => logo
      ? html`<img class="lm-logo" src="${logo}" alt="" loading="lazy">`
      : html`<div class="lm-logo placeholder">⚽</div>`;

    return html`
      ${renderSoccerHeader({
        logo: leagueLogo,
        title: competition,
        badge: renderSoccerBadge(this._t("last_match.label"), "date"),
      })}

      <div class="lm-body">
        <div class="lm-score-row">
          <div class="lm-side home">
            ${logoEl(match.home_logo)}
            <span class="lm-team">${(match.home_team || match.home_abbrev) || "?"}</span>
          </div>
          <div class="lm-scoreline">
            <span class="lm-score ${homeWin ? "win" : ""}">${scoreText(match.home_score, "–")}</span>
            <span class="lm-sep">–</span>
            <span class="lm-score ${awayWin ? "win" : ""}">${scoreText(match.away_score, "–")}</span>
          </div>
          <div class="lm-side away">
            <span class="lm-team">${(match.away_team || match.away_abbrev) || "?"}</span>
            ${logoEl(match.away_logo)}
          </div>
        </div>

        ${dateStr ? html`<div class="lm-meta">${dateStr}</div>` : ""}

        <div class="lm-fill-spacer"></div>

        ${renderMatchMeta(match, {
          lang,
          t: (k) => this._t(k),
          weatherBadge: null,     // finished match — no forecast
          hideBroadcasts: this._config.hide_broadcasts === true,
        })}

        ${this._hasDetails(match) ? html`
          <div class="lm-actions">
            <button class="lm-details-btn" @click=${() => { this._showDetails = true; }}>
              ${this._t("last_match.details")} ›
            </button>
          </div>` : ""}
      </div>
    `;
  }

  // ─── Details popup (portal in document.body, so it escapes the card) ────────

  _renderDetailsPortal() {
    const match = pickLastMatch(this._attrs());
    if (!match) { this._showDetails = false; return; }

    if (!this._portal) {
      this._portal = document.createElement("dialog");
      this._portal.className = "soccer-live-last-match-portal";
      this._cancel = (e) => { e.preventDefault(); this._showDetails = false; };
      this._backdrop = (e) => { if (e.target === this._portal) this._showDetails = false; };
      // A document-level Escape handler as well, so ESC closes the popup even
      // when focus isn't inside the dialog (and if showModal fell back to a
      // non-modal open, where the dialog's own cancel event never fires).
      this._escape = (e) => { if (e.key === "Escape") this._showDetails = false; };
      this._portal.addEventListener("cancel", this._cancel);
      this._portal.addEventListener("click", this._backdrop);
      document.addEventListener("keydown", this._escape);
      document.body.appendChild(this._portal);
    }
    this._copyThemeVars(this._portal);
    render(html`${this._portalStyles()}${renderPopupSectionStyles("mp")}${this._renderDetails(match)}`, this._portal);
    if (!this._portal.open) {
      try { this._portal.showModal(); } catch { this._portal.setAttribute("open", ""); }
    }
  }

  _removeDetailsPortal() {
    if (!this._portal) return;
    if (this._portal.open) this._portal.close();
    this._portal.removeEventListener("cancel", this._cancel);
    this._portal.removeEventListener("click", this._backdrop);
    document.removeEventListener("keydown", this._escape);
    render(html``, this._portal);
    this._portal.remove();
    this._portal = null;
  }

  _copyThemeVars(target) {
    const computed = getComputedStyle(this);
    ["--cl-bg", "--cl-text", "--cl-text-2", "--cl-divider", "--cl-accent",
     "--cl-accent-2", "--cl-accent-rgb", "--cl-green", "--cl-live",
     "--cl-win", "--cl-draw", "--cl-loss"]
      .forEach(name => {
        const v = computed.getPropertyValue(name);
        if (v) target.style.setProperty(name, v);
      });
  }

  _renderDetails(match) {
    const lang = resolveLang(this.hass, this._config);
    const translate = (k, v) => this._t(k, v);
    const dateObj = parseMatchDate(match.date_iso || match.date);
    const dateStr = dateObj
      ? dateObj.toLocaleDateString(lang, { weekday: "short", day: "numeric", month: "short" })
      : "";
    const competition = displayCompetitionName(match.league_name, lang);

    return html`
      <div class="lmp-box" role="dialog" aria-modal="true" aria-label="${this._t("popup.match_details")}">
        <button class="lmp-close" aria-label="${this._t("last_match.close")}" @click=${() => { this._showDetails = false; }}>×</button>
        <div class="lmp-score-row">
          <img class="lmp-logo" src="${match.home_logo}" alt="" @error=${e => e.target.style.display = "none"}>
          <div class="lmp-center">
            <div class="lmp-score">${scoreText(match.home_score, "-")}<span> – </span>${scoreText(match.away_score, "-")}</div>
            <div class="lmp-ft">${this._t("status.full_time")}</div>
          </div>
          <img class="lmp-logo" src="${match.away_logo}" alt="" @error=${e => e.target.style.display = "none"}>
        </div>
        <p class="lmp-teams"><strong>${match.home_team}</strong> – <strong>${match.away_team}</strong></p>
        ${competition || dateStr ? html`<p class="lmp-meta">${[competition, dateStr].filter(Boolean).join(" · ")}${match.venue && match.venue !== "N/A" ? ` · ${match.venue}` : ""}</p>` : ""}

        ${this._renderStats(match, translate)}
        ${this._renderRatings(match)}
        ${renderPopupTimeline(match, { translate })}
        ${renderPopupLineup(match, { translate })}
        ${this._renderH2H(match, translate)}

        <button class="lmp-done" @click=${() => { this._showDetails = false; }}>${this._t("last_match.close")}</button>
      </div>
    `;
  }

  _renderStats(match, translate) {
    const rows = matchStatRows(match.home_statistics, match.away_statistics);
    if (!rows.length) return "";
    const num = v => {
      const n = parseFloat(String(v).replace("%", ""));
      return Number.isFinite(n) ? n : 0;
    };
    return html`
      <div class="mp-section">
        <h5 class="mp-section-title">${this._t("tab.stats")}</h5>
        <div class="lmp-stats">
          ${rows.map(r => {
            const h = num(r.home), a = num(r.away);
            const total = h + a;
            const hp = total > 0 ? Math.round((h / total) * 100) : 50;
            return html`
              <div class="lmp-stat">
                <span class="lmp-stat-h">${r.home ?? "-"}</span>
                <span class="lmp-stat-label">${translateStatKey(r.key, translate)}</span>
                <span class="lmp-stat-a">${r.away ?? "-"}</span>
              </div>
              <div class="lmp-bar"><div class="lmp-bar-h" style="width:${hp}%"></div><div class="lmp-bar-a" style="width:${100 - hp}%"></div></div>`;
          })}
        </div>
      </div>`;
  }

  // FotMob-style rating colour: strong green (8+), green (7+), amber (6+), red.
  _ratingChip(rating) {
    const n = parseFloat(rating);
    if (!Number.isFinite(n)) return "";
    const bg = n >= 8 ? "#1f9d55" : n >= 7 ? "#4a9e2f" : n >= 6 ? "#c98a00" : "#c0392b";
    return html`<span class="lmp-rating" style="background:${bg}">${n.toFixed(1)}</span>`;
  }

  _renderRatings(match) {
    const potm = match.player_of_the_match;
    const rated = Array.isArray(match.top_rated_players) ? match.top_rated_players : [];
    if (!potm && !rated.length) return "";
    return html`
      <div class="mp-section">
        <h5 class="mp-section-title">${this._t("popup.ratings")}</h5>
        ${potm && (potm.name || potm.player) ? html`
          <div class="lmp-potm">
            <span class="lmp-potm-label">⭐ ${this._t("popup.player_of_match")}</span>
            <span class="lmp-potm-name">${potm.name || potm.player}</span>
            ${this._ratingChip(potm.rating)}
          </div>` : ""}
        ${rated.length ? html`
          <div class="lmp-ratings">
            ${rated.slice(0, 6).map(p => html`
              <div class="lmp-rated">
                ${p.photo ? html`<img src="${p.photo}" alt="" loading="lazy" @error=${e => e.target.style.display = "none"}>` : ""}
                <span class="lmp-rated-name">${p.short_name || p.name}</span>
                ${p.position ? html`<small class="lmp-rated-pos">${p.position}</small>` : ""}
                ${this._ratingChip(p.rating)}
              </div>`)}
          </div>` : ""}
      </div>`;
  }

  _renderH2H(match, translate) {
    const h2h = Array.isArray(match.head_to_head) ? match.head_to_head : [];
    if (!h2h.length) return "";
    // Colour each result from the followed team's perspective (win/draw/loss).
    const attrs = this._attrs() || {};
    const tracked = (this._config.my_team || this._config.team_name || attrs.team_name
      || match.home_team || "").toLowerCase();
    const outcome = (g) => {
      const hs = parseInt(g.home_score, 10), as_ = parseInt(g.away_score, 10);
      if (!tracked || Number.isNaN(hs) || Number.isNaN(as_)) return "";
      const isHome = (g.home_team || g.home || "").toLowerCase().includes(tracked);
      const isAway = (g.away_team || g.away || "").toLowerCase().includes(tracked);
      if (!isHome && !isAway) return "";
      if (hs === as_) return "draw";
      return ((isHome && hs > as_) || (isAway && as_ > hs)) ? "win" : "loss";
    };
    const lang = resolveLang(this.hass, this._config);
    const dateOf = (g) => {
      const d = parseMatchDate(g.date_iso || g.date);
      return d ? d.toLocaleDateString(lang, { day: "2-digit", month: "short", year: "numeric" }).replace(/\.$/, "") : "";
    };
    return html`
      <div class="mp-section">
        <h5 class="mp-section-title">${translate("popup.h2h")}</h5>
        <div class="lmp-h2h">
          ${h2h.slice(0, 6).map(g => html`
            <div><span>${g.home_team || g.home}</span><div class="lmp-h2h-mid"><b class="lmp-h2h-score ${outcome(g)}">${scoreText(g.home_score, "-")} – ${scoreText(g.away_score, "-")}</b>${dateOf(g) ? html`<small class="lmp-h2h-date">${dateOf(g)}</small>` : ""}</div><span>${g.away_team || g.away}</span></div>`)}
        </div>
      </div>`;
  }

  _portalStyles() {
    return html`<style>
      ${pitchStyles.cssText}
      .mp-section { margin: 12px 0 0; padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,0.045); border-left: 3px solid var(--cl-accent, #6366f1); }
      .mp-section-title { margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; color: var(--cl-text, #f8fafc); }
      .soccer-live-last-match-portal {
        border: 0; padding: 0; margin: auto; max-width: none; max-height: none;
        width: 100vw; height: 100vh; background: transparent; overflow: auto;
        color: var(--cl-text, var(--primary-text-color));
      }
      .soccer-live-last-match-portal::backdrop { background: rgba(0,0,0,0.6); }
      .lmp-box {
        position: relative; box-sizing: border-box;
        max-width: 560px; margin: 5vh auto; padding: 20px 18px 24px;
        background: var(--cl-bg, var(--card-background-color, #1c1c1c));
        color: var(--cl-text, var(--primary-text-color));
        border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
      }
      .lmp-close {
        position: absolute; top: 10px; right: 12px; border: 0; background: transparent;
        color: var(--cl-text-2, var(--secondary-text-color)); font-size: 24px; line-height: 1;
        cursor: pointer; padding: 4px;
      }
      .lmp-score-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 12px; }
      .lmp-logo { width: 48px; height: 48px; object-fit: contain; justify-self: center; }
      .lmp-center { text-align: center; }
      .lmp-score { font-size: 2rem; font-weight: 800; font-variant-numeric: tabular-nums; }
      .lmp-ft { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--cl-text-2, var(--secondary-text-color)); }
      .lmp-teams { text-align: center; margin: 6px 0 2px; }
      .lmp-meta { text-align: center; font-size: 0.82rem; color: var(--cl-text-2, var(--secondary-text-color)); margin: 0 0 4px; }
      .lmp-stats { display: flex; flex-direction: column; gap: 8px; }
      .lmp-stat { display: grid; grid-template-columns: auto 1fr auto; gap: 8px; font-size: 0.85rem; }
      .lmp-stat-label { text-align: center; color: var(--cl-text-2, var(--secondary-text-color)); }
      .lmp-stat-h, .lmp-stat-a { font-weight: 700; font-variant-numeric: tabular-nums; }
      .lmp-stat-a { text-align: right; }
      .lmp-bar { display: flex; height: 5px; border-radius: 3px; overflow: hidden; background: var(--cl-divider, rgba(127,127,127,0.2)); }
      .lmp-bar-h { background: var(--cl-accent, #3b82f6); }
      .lmp-bar-a { background: var(--cl-text-2, #9aa0a6); opacity: 0.6; }
      .lmp-potm { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
      .lmp-potm-label { font-size: 0.78rem; color: var(--cl-text-2, var(--secondary-text-color)); white-space: nowrap; }
      .lmp-potm-name { font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .lmp-rating { margin-left: auto; flex: 0 0 auto; min-width: 34px; text-align: center; font-weight: 700; font-variant-numeric: tabular-nums; color: #fff; border-radius: 5px; padding: 2px 6px; font-size: 0.8rem; }
      .lmp-ratings { display: flex; flex-direction: column; gap: 6px; }
      .lmp-rated { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; }
      .lmp-rated img { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; flex: 0 0 auto; }
      .lmp-rated-name { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .lmp-rated-pos { color: var(--cl-text-2, var(--secondary-text-color)); }
      .lmp-h2h > div { display: grid; grid-template-columns: 1fr auto 1fr; gap: 8px; font-size: 0.85rem; padding: 3px 0; align-items: center; }
      .lmp-h2h > div > span:last-child { text-align: right; }
      .lmp-h2h b { font-variant-numeric: tabular-nums; }
      .lmp-h2h-mid { display: flex; flex-direction: column; align-items: center; gap: 2px; }
      .lmp-h2h-date { color: var(--cl-text-2, var(--secondary-text-color)); font-size: 0.62rem; white-space: nowrap; }
      .lmp-h2h-score { padding: 1px 8px; border-radius: 6px; }
      .lmp-h2h-score.win  { color: #fff; background: var(--cl-win, #22c55e); }
      .lmp-h2h-score.loss { color: #fff; background: var(--cl-loss, #ef4444); }
      .lmp-h2h-score.draw { color: var(--cl-text, #f8fafc); background: var(--cl-divider, rgba(127,127,127,0.28)); }
      .lmp-done {
        margin-top: 20px; width: 100%; padding: 12px 20px; border: 0; border-radius: 12px;
        cursor: pointer; font-weight: 800; font-size: 14px; color: #fff;
        background: linear-gradient(135deg, var(--cl-accent, #6366f1), var(--cl-accent-2, var(--cl-accent, #ec4899)));
      }
      .lmp-done:hover { filter: brightness(1.08); }
    </style>`;
  }

  static get styles() {
    return [skinStyles, soccerHeaderStyles, matchMetaStyles, css`
      :host { display: block; }
      ha-card { position: relative; box-sizing: border-box; padding: 0; overflow: hidden; background: var(--cl-bg); color: var(--cl-text); }
      .lm-body { padding: 16px; }
      /* fill_height (opt-in): fill the container height so, inside a
         horizontal-stack, the card matches its sibling. The fill spacer pushes
         the venue/Details block to the bottom. Inert (0px) when not filling. */
      .lm-fill-spacer { height: 0; }
      :host([fill]) { height: 100%; }
      :host([fill]) ha-card { height: 100%; display: flex; flex-direction: column; }
      :host([fill]) .lm-content { flex: 1 1 auto; display: flex; flex-direction: column; }
      :host([fill]) .lm-body { flex: 1 1 auto; display: flex; flex-direction: column; }
      :host([fill]) .lm-fill-spacer { flex: 1 1 auto; min-height: 8px; }
      /* Faint blurred crests + accent gradient behind the content (renderCardHero). */
      .bg-logos { position: absolute; inset: 0; display: flex; justify-content: space-between; align-items: center; pointer-events: none; overflow: hidden; z-index: 0; }
      .bg-logo { width: 60%; height: 140%; display: flex; align-items: center; opacity: 0.08; }
      .bg-logo.home { justify-content: flex-start; transform: translateX(-30%); }
      .bg-logo.away { justify-content: flex-end; transform: translateX(30%); }
      .bg-logo img { width: 100%; object-fit: contain; }
      .hero-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; background:
        radial-gradient(ellipse at 0% 0%, rgba(var(--cl-accent-rgb),0.18), transparent 55%),
        radial-gradient(ellipse at 100% 100%, rgba(var(--cl-accent-2-rgb),0.14), transparent 55%); }
      .lm-content { position: relative; z-index: 1; }
      /* Match-meta rows fit inside the card's own padding: separate with a top
         divider instead of the component's full-width bottom border, and drop
         the extra horizontal padding (the card already has 16px). */
      .lm-content .smm-venue-row { padding: 10px 0 2px; border-bottom: 0; border-top: 1px solid var(--cl-divider); margin-top: 0; }
      .lm-content .smm-chips { padding: 8px 0 0; border-bottom: 0; }
      .lm-score-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 10px; margin: 14px 0 10px; }
      .lm-side { display: flex; align-items: center; gap: 10px; min-width: 0; }
      .lm-side.away { justify-content: flex-end; }
      .lm-logo { width: 46px; height: 46px; object-fit: contain; flex: 0 0 auto; }
      .lm-logo.placeholder { display: flex; align-items: center; justify-content: center; font-size: 1.4rem; }
      .lm-team { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--cl-text); }
      .lm-scoreline { display: flex; align-items: center; gap: 8px; }
      .lm-score { font-size: 1.9rem; font-weight: 800; font-variant-numeric: tabular-nums; color: var(--cl-text-2); }
      .lm-score.win { color: var(--cl-text); }
      .lm-sep { font-size: 1.1rem; color: var(--cl-text-2); }
      .lm-meta { text-align: center; font-size: 0.8rem; color: var(--cl-text-2); }
      .lm-actions { display: flex; justify-content: center; margin-top: 14px; }
      .lm-details-btn {
        border: 0; cursor: pointer; font-weight: 700; font-size: 0.8rem;
        padding: 6px 16px; border-radius: 99px;
        background: var(--cl-accent); color: #fff;
      }
      .lm-details-btn:hover { filter: brightness(1.08); }

      /* Compact mode (compact: true) — denser, shorter, to match the Countdown
         card's compact layout. */
      ha-card.compact .top-bar { padding: 9px 14px; }
      ha-card.compact .comp-icon { width: 20px; height: 20px; }
      ha-card.compact .lm-body { padding: 10px 14px; }
      ha-card.compact .lm-score-row { margin: 8px 0 6px; }
      ha-card.compact .lm-logo { width: 30px; height: 30px; }
      ha-card.compact .lm-logo.placeholder { font-size: 1.1rem; }
      ha-card.compact .lm-score { font-size: 1.35rem; }
      ha-card.compact .lm-team { font-size: 0.85rem; }
      ha-card.compact .lm-meta { font-size: 0.72rem; }
      ha-card.compact .smm-venue-row { padding: 7px 0 1px; font-size: 10px; }
      ha-card.compact .lm-actions { margin-top: 8px; }
      ha-card.compact .lm-details-btn { padding: 4px 13px; font-size: 0.72rem; }
    `];
  }
}

if (!customElements.get("soccer-live-last-match")) {
  customElements.define("soccer-live-last-match", SoccerLiveLastMatchCard);
}
