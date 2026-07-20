import { LitElement, html, css } from "lit-element";
import { t, resolveLang, parseMatchDate } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";
import { renderCardError, renderInfoState } from "../card-error.js";
import { renderLoading } from "../loading-spinner.js";
import { soccerCardShellStyles } from "../card-shell.js";
import { displayCompetitionName } from "../shared-competition.js";

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
    if (!this.hass || !this._config) return renderLoading("Loading...");
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

  _nextMatch(attrs) {
    const up = attrs.upcoming_matches || [];
    if (up.length) return up[0];
    const all = attrs.matches || [];
    return all.find((m) => m.state === "in") || all.find((m) => m.state === "pre") || attrs.next_match || null;
  }

  _renderNext(attrs, lang) {
    const m = this._nextMatch(attrs);
    if (!m) return null;
    let when;
    if (m.state === "in") when = html`<span class="mn-live">${this._t("status.live")} ${m.home_score ?? ""}–${m.away_score ?? ""}</span>`;
    else if (m.time_tbd) when = this._relativeDay(m) + " · " + this._t("generic.unknown");
    else {
      const t = (m.date || "").split(" ")[1] || "";
      when = this._relativeDay(m) + (t ? " · " + t : "");
    }
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
    const table = attrs.standings || (attrs.standings_groups && attrs.standings_groups[0] && attrs.standings_groups[0].standings) || [];
    if (!table.length) return null;
    const rows = table.slice(0, this._config.max_matches ?? 20);
    const my = (this._config.my_team || attrs.team_name || "").toLowerCase();
    return html`
      <div class="mn-tbl-head">
        <span></span><span>${this._t("mini.team") || ""}</span>
        <span class="num">${this._t("mini.p") || "P"}</span>
        <span class="num">${this._t("mini.gd") || "GD"}</span>
        <span class="num">${this._t("mini.pts") || "Pts"}</span>
      </div>
      ${rows.map((r, i) => {
        const played = (r.played != null) ? r.played : ((r.wins || 0) + (r.draws || 0) + (r.losses || 0));
        const gd = r.goal_difference;
        const mine = my && (r.team_name || "").toLowerCase().includes(my);
        return html`
          <div class="mn-tbl-row ${i % 2 ? "odd" : ""} ${mine ? "mine" : ""}">
            <span class="mn-rank">${r.rank ?? i + 1}</span>
            <span class="mn-team">${r.team_name || r.team || ""}</span>
            <span class="num">${played}</span>
            <span class="num">${gd > 0 ? "+" + gd : (gd ?? "")}</span>
            <span class="num pts">${r.points ?? ""}</span>
          </div>`;
      })}`;
  }

  _renderForm(attrs, lang) {
    const tracked = (this._config.my_team || attrs.team_name || "").toLowerCase();
    const finished = (attrs.previous_matches && attrs.previous_matches.length)
      ? attrs.previous_matches
      : (attrs.matches || []).filter((m) => m.state === "post");
    const results = finished.map((m) => {
      const isHome = (m.home_team || "").toLowerCase().includes(tracked);
      const isAway = (m.away_team || "").toLowerCase().includes(tracked);
      if (!isHome && !isAway) return null;
      const hs = parseInt(m.home_score), as = parseInt(m.away_score);
      if (isNaN(hs) || isNaN(as)) return null;
      if (hs === as) return "D";
      return ((isHome && hs > as) || (isAway && as > hs)) ? "W" : "L";
    }).filter(Boolean).slice(0, this._config.max_matches ?? 10);
    if (results.length < 1) return null;
    const w = results.filter((r) => r === "W").length;
    const d = results.filter((r) => r === "D").length;
    const l = results.filter((r) => r === "L").length;
    return html`
      <div class="mn-form">
        <span class="mn-form-team">${this._config.my_team || attrs.team_name || ""}</span>
        <span class="mn-form-dots">${results.map((r) => html`<span class="mn-fd ${r.toLowerCase()}">${this._t("form." + r)}</span>`)}</span>
        <span class="mn-form-sum">${w}${this._t("form.W")} ${d}${this._t("form.D")} ${l}${this._t("form.L")}</span>
      </div>`;
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
