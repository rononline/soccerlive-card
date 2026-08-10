import { LitElement, html, css } from "lit";
import { t, resolveLang, parseMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderInfoState, renderSyncStatusOrEmpty } from "../card-error.js";
import { OfflineCache } from "../offline-cache.js";
import { displayCompetitionName, resolveCompetitionLogo } from "../shared-competition.js";
import { scoreText } from "../shared-score.js";
import { pickLastMatch, lastMatchGoals } from "../shared-last-match.js";

/**
 * Soccer Live Last Match Card
 * Shows the most recent finished match for a team: competition, teams, final
 * score and (when available) the goalscorers. Reads the same team_match sensor
 * as the Team card; it prefers a just-finished match kept in `matches` (full
 * detail) and falls back to the compact `previous_matches` list.
 */
class SoccerLiveLastMatchCard extends LitElement {
  static get properties() {
    return { hass: {}, _config: {}, _cachedData: {} };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
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
  }

  getCardSize() { return 3; }

  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }

  render() {
    if (!this._config || !this.hass) return html``;
    applySkin(this, this._config);
    const stateObj = this.hass.states[this._config.entity];
    const attrs = (stateObj && stateObj.state !== "unavailable") ? stateObj.attributes : this._cachedData;
    if (!attrs || (!attrs.matches && !attrs.previous_matches)) {
      return renderSyncStatusOrEmpty(attrs, (k) => this._t(k), () =>
        renderInfoState("📅", this._t("last_match.none"), this._t("last_match.none_hint")));
    }

    const match = pickLastMatch(attrs);
    if (!match) {
      return html`<ha-card>${renderInfoState("📅", this._t("last_match.none"), this._t("last_match.none_hint"))}</ha-card>`;
    }
    return html`<ha-card>${this._renderMatch(match)}</ha-card>`;
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
    const dateStr = dateObj
      ? dateObj.toLocaleDateString(lang, { day: "numeric", month: "short" })
      : "";

    const homeGoals = Number(match.home_score);
    const awayGoals = Number(match.away_score);
    const homeWin = Number.isFinite(homeGoals) && Number.isFinite(awayGoals) && homeGoals > awayGoals;
    const awayWin = Number.isFinite(homeGoals) && Number.isFinite(awayGoals) && awayGoals > homeGoals;

    const goals = lastMatchGoals(match);

    const side = (logo, name, score, win) => html`
      <div class="lm-side ${win ? "win" : ""}">
        ${logo ? html`<img class="lm-logo" src="${logo}" alt="" loading="lazy">` : html`<div class="lm-logo placeholder">⚽</div>`}
        <span class="lm-team">${name || "?"}</span>
        <span class="lm-score">${scoreText(score, "–")}</span>
      </div>`;

    return html`
      <div class="lm-head">
        <span class="lm-comp">
          ${leagueLogo ? html`<img src="${leagueLogo}" alt="">` : html`<span>⚽</span>`}
          ${competition || html`<span>&nbsp;</span>`}
        </span>
        <span class="lm-label">${this._t("last_match.label")}</span>
      </div>

      <div class="lm-score-row">
        ${side(match.home_logo, match.home_team || match.home_abbrev, match.home_score, homeWin)}
        <span class="lm-sep">–</span>
        ${side(match.away_logo, match.away_team || match.away_abbrev, match.away_score, awayWin)}
      </div>

      ${dateStr || competition ? html`<div class="lm-meta">${[competition, dateStr].filter(Boolean).join(" · ")}</div>` : ""}

      ${goals.length ? html`
        <div class="lm-goals">
          ${goals.map(g => html`<span class="lm-goal">⚽ ${g.player}${g.minute ? html` <em>${g.minute}'</em>` : ""}</span>`)}
        </div>` : ""}
    `;
  }

  static get styles() {
    return [skinStyles, css`
      :host { display: block; }
      ha-card { padding: 14px 16px; overflow: hidden; }
      .lm-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .lm-comp { display: inline-flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--secondary-text-color); min-width: 0; }
      .lm-comp img { width: 18px; height: 18px; object-fit: contain; }
      .lm-comp { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .lm-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--primary-color); white-space: nowrap; }
      .lm-score-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 10px; margin: 12px 0 6px; }
      .lm-side { display: flex; align-items: center; gap: 8px; min-width: 0; }
      .lm-side:last-child { flex-direction: row-reverse; }
      .lm-logo { width: 34px; height: 34px; object-fit: contain; flex: 0 0 auto; }
      .lm-logo.placeholder { display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
      .lm-team { font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .lm-score { font-size: 1.6rem; font-weight: 800; font-variant-numeric: tabular-nums; }
      .lm-side.win .lm-team, .lm-side.win .lm-score { color: var(--primary-text-color); }
      .lm-side:not(.win) .lm-score { color: var(--secondary-text-color); }
      .lm-sep { font-size: 1.1rem; color: var(--secondary-text-color); }
      .lm-meta { text-align: center; font-size: 0.8rem; color: var(--secondary-text-color); }
      .lm-goals { display: flex; flex-wrap: wrap; gap: 6px 12px; justify-content: center; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--divider-color, rgba(127,127,127,0.2)); }
      .lm-goal { font-size: 0.82rem; }
      .lm-goal em { color: var(--secondary-text-color); font-style: normal; }
    `];
  }
}

if (!customElements.get("soccer-live-last-match")) {
  customElements.define("soccer-live-last-match", SoccerLiveLastMatchCard);
}
