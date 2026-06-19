# ⚽ Soccer Live Card

Beautiful, animated football cards for Home Assistant with multi-language support, extensive customization, offline caching, and mobile responsiveness.

Companion for the [Soccer Live integration](https://github.com/rononline/soccerlive).

> Built on ideas from [Calcio Live Card](https://github.com/Bobsilvio/calcio-live-card) by @Bobsilvio

---

## ✨ Cards

All cards share the same wrapper — add one **Soccer Live Card** via the HA picker, then choose the type in the editor.

| Card | `card_type` | Description |
|---|---|---|
| Standings | `standings` | League table with coloured zones (CL / EL / relegation), gold for #1 |
| Team | `team` | Live score, form pills, season record, top scorer, TV channel, attendance, weather |
| Matches | `matches` | Day-grouped matches with live highlighting and FT badge |
| News | `news` | Article feed with images and relative timestamps |
| Lineup | `lineup` | Starting eleven for both teams, formation, shirt numbers |
| Timeline | `timeline` | Minute-by-minute log (goals, cards, substitutions) |
| Bracket | `bracket` | Knockout bracket: list view or tournament tree with trophy |
| Top Scorers | `scorers` | Top scorers list with photo, team logo and goal tally |
| Countdown | `countdown` | Countdown timer to next match with live score display and weather |
| Mini Standings | `mini-standings` | Compact standings table with configurable rows and groups |
| Live Match | `live-match` | Current match with key events, possession, and shot stats |
| Multi Team | `multi-team` | Multiple teams' matches in one card |
| Team Competitions | `team-competitions` | All team competitions with tab selector |
| Live Commentary | `live-commentary` | Real-time play-by-play commentary with event icons |
| Match Center | `match-center` | Tabbed match view: Overview, Stats, Timeline, Lineup, H2H |
| Team Form | `team-form` | Form trend with W/D/L dots, goals chart, home/away split, match list |

> **Legacy YAML** (old individual types like `custom:soccer-live-team`) still work for backward compatibility.

### Features

- 🌍 **Multi-language** — EN / NL / DE / PT / FR / ES / IT, auto-detected via HA locale
- 🎨 **Animations** — live pulse, score pop, goal confetti + banner
- 🔔 **In-card toasts** — optional on goals and cards, no notification spam
- 🏆 **Bracket** — list style or tournament tree with SVG connector lines
- 🎨 **Themes** — `dark`, `light`, `classic`, `neon`, `gold`, `orange`, `blue`, `black-white`, `feyenoord`, `arsenal`, `barcelona`, `real-madrid`
- 📱 **Responsive** — works on mobile, tablet and desktop
- 📡 **Offline caching** — last-known data shown when integration is unavailable
- 🌦️ **Weather** — current conditions at the match venue (Team and Countdown cards)

---

## 📸 Screenshots

| Standings | Team | Matches |
|---|---|---|
| ![Standings](images/standings.png) | ![Team](images/team.png) | ![Matches](images/matches.png) |

---

## 📦 Installation via HACS

1. Add the repository as a **custom repository** in HACS:
   `https://github.com/rononline/soccerlive-card` — category: **Dashboard**
2. Install **Soccer Live Card** via HACS
3. Restart Home Assistant and do a hard refresh of the dashboard (`Ctrl+F5` / `Cmd+Shift+R`)

> Make sure the [Soccer Live integration](https://github.com/rononline/soccerlive) is installed first.

---

## 🃏 Card reference

All cards share these common options:

| Option | Default | Description |
|---|---|---|
| `entity` | required | The Soccer Live sensor entity ID |
| `language` | `auto` | Force language: `auto`, `en`, `nl`, `de`, `pt`, `fr`, `es`, `it` |
| `skin` | `dark` | `dark`, `light`, `classic`, `neon`, `gold`, `orange`, `blue`, `black-white`, `feyenoord`, `arsenal`, `barcelona`, `real-madrid` |
| `hide_header` | `false` | Hide the top bar with competition logo and name |
| `hide_broadcasts` | `false` | Hide TV/streaming channel chips (ESPN data is US-centric) — applies to Team, Countdown, LiveMatch, MatchCenter, Matches |
| `compact` | `false` | Dense layout: smaller scoreboard, hides form/H2H/previous — applies to Team and Countdown |

> **Entity IDs:** Examples in this README use simplified IDs like `sensor.soccer_live_standings_ned_1`. Your actual entity IDs may be longer (e.g. `sensor.soccer_live_ned_1_soccerlive_standings_dutch_eredivisie`). Use the visual editor to pick the correct sensor.

### 🏅 Standings

```yaml
type: custom:soccer-live-card
card_type: standings
entity: sensor.soccer_live_standings_ned_1
max_teams_visible: 18
hide_header: false
show_event_toasts: false
```

### ⚽ Team

```yaml
type: custom:soccer-live-card
card_type: team
entity: sensor.soccer_live_next_ned_1_feyenoord_rotterdam
show_event_toasts: true
score_size: normal    # normal / big / huge
show_previous_matches: true
show_form_trend: true
```

With `show_event_toasts: true`, a goal triggers a full celebration:
confetti burst, flashing card border, large "GOAL!" banner, score animation and vibration on mobile.

The card shows a **weather badge** (temperature, wind) for the match venue when conditions are available.

### 📋 Matches

```yaml
type: custom:soccer-live-card
card_type: matches
entity: sensor.soccer_live_all_ned_1
max_events_visible: 6
max_events_total: 50
show_finished_matches: true
hide_past_days: 0
show_event_toasts: false
```

### 📰 News

```yaml
type: custom:soccer-live-card
card_type: news
entity: sensor.soccer_live_news_ned_1
max_articles: 5
hide_images: false
```

### 👥 Lineup

```yaml
type: custom:soccer-live-card
card_type: lineup
entity: sensor.soccer_live_next_ned_1_feyenoord_rotterdam
```

> Available shortly before kick-off (once ESPN publishes the lineups).

### ⏱ Timeline

```yaml
type: custom:soccer-live-card
card_type: timeline
entity: sensor.soccer_live_next_ned_1_feyenoord_rotterdam
reverse_order: true   # newest on top
```

### 🏆 Bracket

```yaml
type: custom:soccer-live-card
card_type: bracket
entity: sensor.soccer_live_bracket_uefa_champions
style: tree           # 'list' (default) or 'tree'
compact: false
tree_show_playoffs: false
```

The bracket sensor is created automatically for cup competitions:
Champions League, Europa League, Conference League, FA Cup, Copa del Rey, World Cup, Euros, and more.

### 🥇 Top Scorers

```yaml
type: custom:soccer-live-card
card_type: scorers
entity: sensor.soccer_live_scorers_ned_1
max_items: 10
hide_header: false
```

The top scorers sensor (`soccer_live_scorers_*`) is created automatically for every competition sensor.
Shows: rank, player photo, name, team logo and goal tally.

> Not all competitions provide top scorer data via ESPN. If the sensor shows `Not available`, the competition does not support this endpoint.

### ⏳ Countdown

```yaml
type: custom:soccer-live-card
card_type: countdown
entity: sensor.soccer_live_next_ned_1_feyenoord_rotterdam
```

Shows a countdown timer to the next match, switches to live score when the match is active.
Also shows a **weather badge** for the match venue.

### 🏆 Mini Standings

```yaml
type: custom:soccer-live-card
card_type: mini-standings
entity: sensor.soccer_live_standings_ned_1
max_rows: 5
group: null          # optional: filter standings group (e.g. "WK A", "WK B")
highlight_team: null # optional: highlight team name
```

Compact standings table with configurable max rows and optional team highlighting.
Rows sorted by points, then wins, then goal difference.

### ⚽ Live Match

```yaml
type: custom:soccer-live-card
card_type: live-match
entity: sensor.soccer_live_all_ned_1
max_stats: 4
```

Displays the current/best match with key events, possession stats, and shots on target.

### 🔄 Multi Team

```yaml
type: custom:soccer-live-card
card_type: multi-team
entities:
  - sensor.soccer_live_next_ned_1_feyenoord_rotterdam
  - sensor.soccer_live_all_mixed_ajax
  - sensor.soccer_live_all_mixed_psv_eindhoven
title: My Teams
hide_header: false
```

Shows multiple teams' matches in one compact card, each on its own row.

### 🗂️ Team Competitions

```yaml
type: custom:soccer-live-card
card_type: team-competitions
entity: sensor.soccer_live_all_mixed_feyenoord_rotterdam
team_name: "Feyenoord"      # optional: override team name
default_comp: "Eredivisie"  # optional: default competition tab
```

All team competitions in one card with a tab selector to switch between leagues and cups.

### 💬 Live Commentary

```yaml
type: custom:soccer-live-card
card_type: live-commentary
entity: sensor.soccer_live_commentary_ned_1
```

Real-time play-by-play commentary with event icons and score progression.

> Requires a `soccer_live_commentary_*` sensor. Commentary availability depends on ESPN API support for the specific competition.

### 🗂️ Match Center

```yaml
type: custom:soccer-live-card
card_type: match-center
entity: sensor.soccer_live_next_ned_1_ajax
```

Tabbed view of a single match. Tabs appear only when data is available: Stats and Timeline after kick-off, Lineup once ESPN publishes it.

> Works best with a `next_*` or `all_mixed_*` sensor, which enriches the match with lineup, key events and H2H via the ESPN summary endpoint.

### 👥 Team Form

```yaml
type: custom:soccer-live-card
card_type: team-form
entity: sensor.soccer_live_next_ned_1_ajax
team_name: Ajax
```

> `team_name` is recommended. Without it the card tries to auto-detect the tracked team from `previous_matches`, but detection may be ambiguous with only one previous match or when the same opponent appears multiple times.

---

## 🔗 Integration version requirements

Some card features require a minimum version of the [Soccer Live integration](https://github.com/rononline/soccerlive):

| Feature | Min. integration version |
|---|---|
| Standings zone colors from ESPN (`zone_color`, `zone_label`) | v3.4.0 |
| Team standing summary below name (`home_standing_summary`) | v3.4.0 |
| Broadcast channels list (`broadcasts`) | v3.4.0 |
| Stats / Commentary / Video chips with links (`match.links`) | v3.4.1 |
| `week_number` per match (competition schedule grouping) | v3.4.2 |
| Neutral venue flag (`neutral_site`) | v3.4.0 |
| News byline, tags, premium flag | v3.4.0 |
| Season form from summary (`last_five_home/away`) | v3.4.0 |
| Countdown competition name from `league_info.name` | v3.6.5 |
| URL-based shared fetch cache (sensors on same endpoint share one request) | v3.6.3 |

Cards degrade gracefully when older integration versions are used — features simply won't appear if the data is absent.

---

## 🌍 Multi-language

All UI text is translated via `src/i18n.js` with **250 keys** in seven languages.

| Key | EN | NL | DE | PT | FR | ES | IT |
|---|---|---|---|---|---|---|---|
| `time.today` | Today | Vandaag | Heute | Hoje | Aujourd'hui | Hoy | Oggi |
| `event.goal` | Goal | Doelpunt | Tor | Gol | But | Gol | Goal |
| `round.r16` | Round of 16 | Achtste finales | Achtelfinale | Oitavas | Huitièmes | Octavos | Ottavi |
| `status.halftime` | Halftime | Rust | Halbzeit | Intervalo | Mi-temps | Descanso | Intervallo |
| `ui.loading_timeout` | Loading timeout | Laden mislukt | Ladetimeout | Tempo esgotado | Délai dépassé | Tiempo agotado | Timeout |

---

## 📜 License

GPL-3.0 — see [LICENSE](LICENSE).
Data via ESPN public APIs.
