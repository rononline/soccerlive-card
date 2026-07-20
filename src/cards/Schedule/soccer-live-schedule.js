import { LitElement, html, css } from "lit-element";
import { t, resolveLang, parseMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError, renderInfoState } from "../card-error.js";
import { renderLoading } from "../loading-spinner.js";
import { soccerCardShellStyles } from "../card-shell.js";
import { displayCompetitionName } from "../shared-competition.js";

// Minimalist fixtures list: date · time · home – away · competition, as a plain
// zebra-striped text table (no logos or colours).
class SoccerLiveScheduleCard extends LitElement {
  static get properties() { return { hass: {}, _config: {} }; }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
  }

  getCardSize() { return 5; }
  _t(key, vars) { return t(key, resolveLang(this.hass, this._config), vars); }
  static getConfigElement() { return document.createElement("soccer-live-schedule-editor"); }
  static getStubConfig() { return { entity: "", max_matches: 15 }; }

  _rows(attrs) {
    const show = this._config.show || "upcoming"; // upcoming | previous | all
    const up = attrs.upcoming_matches || [];
    const prev = attrs.previous_matches || [];
    const all = attrs.matches || [];
    if (show === "previous") return prev.length ? prev : all.filter((m) => m.state === "post");
    if (show === "all") return all.length ? all : [...prev, ...up];
    return up.length ? up : all.filter((m) => m.state === "pre" || m.state === "in");
  }

  render() {
    applySkin(this, this._config);
    if (!this.hass || !this._config) return renderLoading("Loading...");
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return renderCardError("⚠️", this._t("ui.entity_not_found"), this._config.entity, this._t("ui.check_entity_config"));
    }
    const attrs = stateObj.attributes || {};
    const lang = resolveLang(this.hass, this._config);
    const rows = this._rows(attrs).slice(0, this._config.max_matches ?? 15);
    if (!rows.length) return renderInfoState("📅", this._t("schedule.empty"), "", "");

    const hideHeader = this._config.hide_header === true;
    const showComp = this._config.show_competition !== false;
    const dateFmt = new Intl.DateTimeFormat(lang, { weekday: "short", day: "2-digit", month: "short" });

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="sch ${showComp ? "" : "no-comp"}">
          ${!hideHeader ? html`
            <div class="sch-title">
              ${displayCompetitionName(attrs.league_name || attrs.team_name || "", lang) || this._t("card.schedule")}
            </div>` : ""}
          ${rows.map((m, i) => this._row(m, i, dateFmt, showComp))}
        </div>
      </ha-card>
    `;
  }

  _row(m, i, dateFmt, showComp) {
    const d = parseMatchDate(m.date);
    const dateLabel = (d ? dateFmt.format(d) : (m.date ? m.date.split(" ")[0] : "")).replace(/\.$/, "");
    const my = (this._config.my_team || "").toLowerCase();
    const isHome = my && (m.home_team || "").toLowerCase().includes(my);
    const isAway = my && (m.away_team || "").toLowerCase().includes(my);
    return html`
      <div class="sch-row ${i % 2 ? "odd" : ""}">
        <span class="sch-date">${dateLabel}</span>
        <span class="sch-time ${m.time_tbd ? "tbd" : ""} ${m.state === "in" ? "live" : ""}">${this._timeLabel(m)}</span>
        <span class="sch-home ${isHome ? "mine" : ""}">${m.home_team}</span>
        <span class="sch-sep">-</span>
        <span class="sch-away ${isAway ? "mine" : ""}">${m.away_team}</span>
        ${showComp ? html`<span class="sch-comp">${this._compTag(m)}</span>` : ""}
      </div>
    `;
  }

  _timeLabel(m) {
    if (m.state === "in") return this._t("status.live");
    if (m.state === "post") {
      const hs = m.home_score, as = m.away_score;
      if (hs != null && as != null && hs !== "N/A" && as !== "N/A") return `${hs}-${as}`;
      return this._t("status.full_time");
    }
    if (m.time_tbd) return this._t("generic.unknown");
    const time = (m.date || "").split(" ")[1];
    return time || this._t("generic.unknown");
  }

  _compTag(m) {
    const clean = (v) => (v && v !== "N/A") ? v : "";
    return clean(m.league_abbrev) || clean(m.league_abbreviation) || clean(m.competition_abbreviation)
      || (clean(m.league_name) ? m.league_name.charAt(0).toUpperCase() : "");
  }

  static get styles() {
    return [skinStyles, soccerCardShellStyles, css`
      ha-card { background: var(--cl-bg); color: var(--cl-text); border-radius: 16px; overflow: hidden; padding: 0; }
      .sch { position: relative; z-index: 1; padding: 6px 0; font-variant-numeric: tabular-nums; }
      .sch-title {
        font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;
        color: var(--cl-text-2, #94a3b8); padding: 8px 14px 6px;
      }
      .sch-row {
        display: grid;
        grid-template-columns: minmax(72px, auto) minmax(52px, auto) 1fr auto 1fr auto;
        align-items: baseline; gap: 10px;
        padding: 7px 14px; font-size: 14px;
      }
      .sch.no-comp .sch-row { grid-template-columns: minmax(72px, auto) minmax(52px, auto) 1fr auto 1fr; }
      .sch-row.odd { background: var(--cl-surface, rgba(255,255,255,0.04)); }
      .sch-date { color: var(--cl-text-2, #94a3b8); white-space: nowrap; }
      .sch-time { color: var(--cl-text-2, #94a3b8); white-space: nowrap; }
      .sch-time.tbd { font-style: italic; opacity: 0.75; }
      .sch-time.live { color: var(--cl-live, #ef4444); font-weight: 700; }
      .sch-home { text-align: right; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .sch-away { text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .sch-sep { color: var(--cl-text-2, #94a3b8); }
      .sch-home.mine, .sch-away.mine { font-weight: 800; }
      .sch-comp { color: var(--cl-text-2, #94a3b8); text-align: right; white-space: nowrap; min-width: 14px; }
    `];
  }
}

if (!customElements.get("soccer-live-schedule")) {
  customElements.define("soccer-live-schedule", SoccerLiveScheduleCard);
}
