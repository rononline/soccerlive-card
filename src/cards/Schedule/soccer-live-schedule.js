import { LitElement, html, css } from "lit-element";
import { t, resolveLang, parseMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError, renderInfoState } from "../card-error.js";
import { renderLoading } from "../loading-spinner.js";
import { soccerCardShellStyles } from "../card-shell.js";
import { displayCompetitionName } from "../shared-competition.js";
import { pickNextMatch, nextWhenKind, computeForm, standingsRows, teamMatchesName, matchSideIsTeam } from "../shared-minimal-model.js";

// Text-size presets -> [font-size px, vertical row padding px].
const TEXT_SIZES = { xs: [11, 3], small: [12.5, 5], normal: [14, 7], large: [16, 9] };

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
    if (!this.hass || !this._config) return renderLoading(this._t("ui.loading"));
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) {
      return renderCardError("⚠️", this._t("ui.entity_not_found"), this._config.entity, this._t("ui.check_entity_config"));
    }
    const attrs = stateObj.attributes || {};
    const lang = resolveLang(this.hass, this._config);
    const variant = this._config.variant || "fixtures"; // fixtures | next | standings | form
    const showComp = this._config.show_competition !== false;

    // Text size: a preset (xs/small/normal/large) or a raw font-size in px.
    const ts = this._config.text_size;
    const [fs, pad] = typeof ts === "number"
      ? [ts, Math.max(2, Math.round(ts * 0.42))]
      : (TEXT_SIZES[ts] || TEXT_SIZES.normal);

    const body =
      variant === "next" ? this._renderNext(attrs, lang) :
      variant === "standings" ? this._renderStandings(attrs, lang) :
      variant === "form" ? this._renderForm(attrs, lang) :
      this._renderFixtures(attrs, lang, showComp);
    if (body === null) return renderInfoState("📅", this._t("minimal.empty"), "", "");

    const hideHeader = this._config.hide_header === true;
    const noComp = variant === "fixtures" && !showComp;
    return html`
      <ha-card>
        <div class="hero-bg"></div>
        <div class="sch ${variant} ${noComp ? "no-comp" : ""}" style="--sch-fs:${fs}px;--sch-pad:${pad}px">
          ${!hideHeader ? html`
            <div class="sch-title">
              ${displayCompetitionName(attrs.league_name || attrs.team_name || "", lang) || this._t("card.minimal")}
            </div>` : ""}
          ${body}
        </div>
      </ha-card>
    `;
  }

  _renderFixtures(attrs, lang, showComp) {
    const rows = this._rows(attrs).slice(0, this._config.max_matches ?? 15);
    if (!rows.length) return null;
    const dateFmt = new Intl.DateTimeFormat(lang, { weekday: "short", day: "2-digit", month: "short" });
    return rows.map((m, i) => this._row(m, i, dateFmt, showComp));
  }

  _renderNext(attrs, lang) {
    const m = pickNextMatch(attrs);
    if (!m) return null;
    const kind = nextWhenKind(m);
    let when;
    if (kind === "live") when = html`<span class="mn-live">${this._t("status.live")} ${m.home_score ?? ""}–${m.away_score ?? ""}</span>`;
    else if (kind === "tbd") when = this._relativeDay(m) + " · " + this._t("generic.unknown");
    else if (kind === "time") when = this._relativeDay(m) + " · " + (m.date || "").split(" ")[1];
    else when = this._relativeDay(m);
    return html`
      <div class="mn-next">
        <div class="mn-teams">${m.home_team} <span class="mn-dash">–</span> ${m.away_team}</div>
        <div class="mn-when">${when}</div>
      </div>`;
  }

  _relativeDay(m) {
    const d = parseMatchDate(m.date);
    if (!d) return (m.date || "").split(" ")[0] || "";
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const md = new Date(d); md.setHours(0, 0, 0, 0);
    const diff = Math.round((md - today) / 86400000);
    if (diff === 0) return this._t("time.today");
    if (diff === 1) return this._t("time.tomorrow");
    if (diff > 1 && diff <= 6) return this._t("time.in_n_d", { n: diff });
    const lang = resolveLang(this.hass, this._config);
    return new Intl.DateTimeFormat(lang, { weekday: "short", day: "2-digit", month: "short" }).format(d).replace(/\.$/, "");
  }

  _renderStandings(attrs, lang) {
    const rows = standingsRows(attrs, this._config.max_matches ?? 20);
    if (!rows.length) return null;
    const myName = this._config.my_team || attrs.team_name || "";
    return html`
      <div class="mn-tbl-head">
        <span></span><span>${this._t("mini.team") || ""}</span>
        <span class="num">${this._t("mini.p") || "P"}</span>
        <span class="num">${this._t("mini.gd") || "GD"}</span>
        <span class="num">${this._t("mini.pts") || "Pts"}</span>
      </div>
      ${rows.map((r, i) => {
        const mine = myName && teamMatchesName(r.team, myName);
        return html`
          <div class="mn-tbl-row ${i % 2 ? "odd" : ""} ${mine ? "mine" : ""}">
            <span class="mn-rank">${r.rank}</span>
            <span class="mn-team">${r.team}</span>
            <span class="num">${r.played}</span>
            <span class="num">${r.gd > 0 ? "+" + r.gd : (r.gd ?? "")}</span>
            <span class="num pts">${r.points ?? ""}</span>
          </div>`;
      })}`;
  }

  _renderForm(attrs, lang) {
    const team = this._config.my_team || attrs.team_name || "";
    // Use the sensor's team_id for exact matching when the user hasn't typed a name.
    const trackedId = this._config.my_team ? null : attrs.team_id;
    const form = computeForm(attrs, { name: team, id: trackedId }, this._config.max_matches ?? 10);
    if (!form) return null;
    return html`
      <div class="mn-form">
        <span class="mn-form-team">${team}</span>
        <span class="mn-form-dots">${form.results.map((r) => html`<span class="mn-fd ${r.toLowerCase()}">${this._t("form." + r)}</span>`)}</span>
        <span class="mn-form-sum">${form.w}${this._t("form.W")} ${form.d}${this._t("form.D")} ${form.l}${this._t("form.L")}</span>
      </div>`;
  }

  _row(m, i, dateFmt, showComp) {
    const d = parseMatchDate(m.date);
    const dateLabel = (d ? dateFmt.format(d) : (m.date ? m.date.split(" ")[0] : "")).replace(/\.$/, "");
    const tracked = { name: this._config.my_team || "", id: null };
    const isHome = tracked.name && matchSideIsTeam(m, "home", tracked);
    const isAway = tracked.name && matchSideIsTeam(m, "away", tracked);
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
      .sch { position: relative; z-index: 1; padding: 6px 0; font-variant-numeric: tabular-nums; font-size: var(--sch-fs, 14px); }
      .sch-title {
        font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em;
        color: var(--cl-text-2, #94a3b8); padding: 8px 14px 6px;
      }
      .sch-row {
        display: grid;
        grid-template-columns: minmax(72px, auto) minmax(52px, auto) 1fr auto 1fr auto;
        align-items: baseline; gap: 10px;
        padding: var(--sch-pad, 7px) 14px; font-size: var(--sch-fs, 14px);
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

      /* next-match variant */
      .mn-next { padding: 10px 14px 12px; text-align: center; }
      .mn-teams { font-size: calc(var(--sch-fs, 14px) + 3px); font-weight: 700; }
      .mn-dash { color: var(--cl-text-2, #94a3b8); font-weight: 400; }
      .mn-when { margin-top: 4px; color: var(--cl-text-2, #94a3b8); }
      .mn-when .mn-live { color: var(--cl-live, #ef4444); font-weight: 700; }

      /* standings variant */
      .mn-tbl-head, .mn-tbl-row {
        display: grid; grid-template-columns: 26px 1fr 30px 40px 34px; gap: 8px;
        align-items: baseline; padding: var(--sch-pad, 6px) 14px;
      }
      .mn-tbl-head { font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cl-text-2, #94a3b8); padding-bottom: 4px; }
      .mn-tbl-row.odd { background: var(--cl-surface, rgba(255,255,255,0.04)); }
      .mn-tbl-row.mine { font-weight: 800; }
      .mn-rank { color: var(--cl-text-2, #94a3b8); text-align: center; }
      .mn-team { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .num { text-align: right; color: var(--cl-text-2, #94a3b8); }
      .num.pts { color: var(--cl-text, #f8fafc); font-weight: 700; }

      /* form variant */
      .mn-form { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding: 12px 14px; }
      .mn-form-team { font-weight: 700; }
      .mn-form-dots { display: inline-flex; gap: 4px; }
      .mn-fd {
        width: 18px; height: 18px; border-radius: 4px; display: inline-flex; align-items: center; justify-content: center;
        font-size: 10px; font-weight: 800; color: #fff;
      }
      .mn-fd.w { background: var(--cl-win, #22c55e); }
      .mn-fd.d { background: var(--cl-draw, #94a3b8); }
      .mn-fd.l { background: var(--cl-loss, #ef4444); }
      .mn-form-sum { margin-left: auto; color: var(--cl-text-2, #94a3b8); font-size: 11px; font-weight: 700; }
    `];
  }
}

if (!customElements.get("soccer-live-schedule")) {
  customElements.define("soccer-live-schedule", SoccerLiveScheduleCard);
}
