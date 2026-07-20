# Changelog

## v3.21.187 (2026-07-20)
- Custom palette: all colour fields (including `gradient_from`/`gradient_to`) now clear their config key when emptied instead of storing an empty string, keeping the config clean
- Custom palette: the editor clamps the gradient angle (0–360) and watermark opacity (0–1) when saving, so out-of-range values aren't left in the config (previously only the applied CSS was clamped)
- Custom palette: watermark URLs are restricted to `/local/…`, `http(s):` and `data:image/` (defensive validation); opacity, size and URL handling moved to pure `clampOpacity` / `normalizeWatermarkSize` / `sanitizeWatermarkUrl` helpers with unit tests
- Custom palette: a hint appears when only one gradient colour is set, since the gradient only applies when both are valid

## v3.21.186 (2026-07-20)
- Custom background: the gradient-angle validator now uses an explicit set of valid CSS direction keywords, so invalid combinations like "to top bottom" are rejected (fall back to 135°) instead of being passed through
- Custom background: an empty `watermark_opacity` (e.g. `""` in YAML) now keeps the default instead of becoming 0 (invisible); the watermark URL is escaped safely so quotes in it can't break the CSS
- Custom background: the low-contrast warning now checks the text/secondary/accent colours against both gradient endpoints, not just the flat background
- Added an expanded-editor visual snapshot that captures the gradient/watermark input fields themselves, and a test that invalid gradient directions are rejected
- Note: the new custom-background editor labels are English + Dutch; other languages fall back to English, consistent with the rest of the skin editor

## v3.21.185 (2026-07-20)
- Custom palette background: the editor now has fields for the gradient angle (0–360°) and the watermark size (40% / 60% / 80% / contain), which were already applied but not editable, plus a help hint that the watermark URL is a URL or /local/… path served by Home Assistant
- Custom palette background: hardened the values — the gradient angle is validated and clamped (numbers, `<n>deg` −360..360, or a `to <side>` keyword; else 135°), the watermark opacity is clamped to 0–1 and the size restricted to safe values (contain/cover/%/px), and empty fields are removed from the config instead of stored. Pure `normalizeGradientAngle` helper with a test
- Note: the crest watermark already works on every card that uses the shared card shell (including Countdown, Match Center and Team Competitions, which render the background layer via `renderCardHero`) — no per-card change was needed

## v3.21.184 (2026-07-20)
- Custom palette: added a **background gradient** (`gradient_from` / `gradient_to`, optional `gradient_angle`, default 135°) and a **crest watermark** (`background_image` URL, `watermark_opacity`, `watermark_size`), so cards can get a club-branded look — a red gradient with a faint centred crest — matching a custom-styled dashboard. Applied through the shared card background, so it works on every card. Editor fields added under the custom palette's advanced section (EN/NL); pure `buildGradient` helper with a test; visual snapshot added

## v3.21.183 (2026-07-20)
- Minimal card standings: an empty `standings` array no longer blocks a populated `standings_groups` fallback
- Minimal card team recognition: matching now prefers team ids and, for names, uses whole-word/normalised comparison instead of substring — so "Inter" no longer matches "Internacional" (genuinely ambiguous cases like "Inter" vs "Inter Miami" still need an id). The form variant uses the sensor's team_id when no name is typed
- Editor: an unsupported variant for the chosen sensor now shows a warning instead of being slipped silently between the allowed options
- Added pure helpers/tests for team matching and the standings fallback, and a Playwright snapshot for the `next` variant with a live match (guards live priority at render time)

## v3.21.182 (2026-07-20)
- Minimal card `next` variant: a live match now takes priority over the next upcoming match, so the current live score is shown instead of the following fixture
- Minimal card `form` variant: fixed a case where, without a tracked team, every match could be counted as the team's (an empty name matched all) — it now shows the empty state instead
- Minimal card logic (live priority, form, standings, variant/sensor rules) moved to a pure `shared-minimal-model.js` with unit tests
- Editor: the variant list is now limited to what the sensor supports (a standings sensor only offers `standings`), and `max_matches` is hidden for the `next` variant where it has no effect
- Added Playwright snapshots for the four Minimal variants at 320px; the Minimal labels are now translated in all seven languages; the visual workflow also triggers on package/build changes

## v3.21.181 (2026-07-20)
- Renamed the **Schedule** card to **Minimal** and gave it a `variant` selector, so several minimalist text views live under one entry in the card picker instead of cluttering the list: `fixtures` (the schedule list, default), `next` (single-line next match with a relative date/countdown or live score), `standings` (plain text table: rank · team · played · goal difference · points, your team bold), and `form` (recent W/D/L for your team). All share the `text_size`, `my_team`, `hide_header` and skin/language options. Existing `card_type: schedule` configs keep working (aliased to `minimal`). Variant labels + a text mini-table header added in English and Dutch

## v3.21.180 (2026-07-20)
- Schedule card: added a `text_size` option (Extra small / Small / Normal / Large, or a raw px number) that scales both the font and the row height, so the list can be made more compact (or larger). Labels in English and Dutch

## v3.21.179 (2026-07-20)
- New **Schedule** card (`card_type: schedule`): a minimalist fixtures list — date · time · home – away · competition — as a plain zebra-striped text table, no logos or colours. Options: `show` (upcoming/previous/all), `max_matches`, `my_team` (bold highlight), `show_competition`, `hide_header`. Shows "unknown" for fixtures without a confirmed time (integration v3.6.96) and the score for finished matches. Labels in English and Dutch

## v3.21.178 (2026-07-19)
- Visual tests: `test:visual` now builds first so screenshots never run against a stale bundle (added `test:visual:update` too); tightened the diff tolerance from 2% to 1%
- Visual tests: added snapshots for light + black-white (guards the `--cl-accent-visible` fix), a missing abbreviation/colour (name fallback), a very long team name at 320px (ellipsis), a multi-entity editor showing the shared source "(via …)", and the Home Assistant appearance with an explicit HA theme (not just fallback colours)
- CI: added a GitHub Actions **Visual** workflow that runs the suite in the official Playwright Linux container; see `test/visual/README.md` for the one-time Linux-baseline bootstrap

## v3.21.177 (2026-07-19)
- Added a Playwright visual-regression layer (`npm run test:visual`) with a parameterised harness and committed baselines, covering the dark/light/HA appearances, a legacy skin, the inline team names + tracked underline (light + white-gold), and the editor (palette swatches on desktop/mobile, the custom-palette contrast warning, and the shared-inheritance status). Kept out of `npm test` so the default suite stays browser-free; see `test/visual/README.md`

## v3.21.176 (2026-07-19)
- Skins: fix `--cl-accent-visible` for the light + black-white combination — its secondary colour is white too, so it now falls back to an explicit slate (`#475569`) instead of an equally-invisible white. white-gold still uses its (gold) secondary

## v3.21.175 (2026-07-19)
- Multi-entity cards: the shared appearance/palette/language status now names its source, e.g. "Nederlands · shared (via <sensor>)", so it's clear the first sensor's defaults are used (single-entity cards are unchanged)
- Skins: the tracked-team underline uses a new contrast-aware `--cl-accent-visible` token, which falls back to the darker secondary colour on light appearances where the accent is near-white (white-gold, black-white), so the marker stays visible
- Team card: an empty/`N/A` abbreviation now falls back to the team name instead of leaving just a coloured marker; team colours are normalised so `rgb(...)` values stay valid
- Editors: choosing the shared/auto language now removes the `language` key instead of storing an empty string, keeping the config clean (consistent with appearance/compact)

## v3.21.174 (2026-07-19)
- Team card: the tracked team in the match lists is no longer coloured with the accent (which can be near-white on light appearances and unreadable) — it keeps the readable text colour and is emphasised with bold weight and an accent underline stripe
- Team card: `_teamBadge` now normalises team colours, so a valid `rgb(255,0,0)` stays valid instead of being turned into `#rgb(255,0,0)`; invalid/missing colours fall back to the accent tint. Long names in the match lists truncate with an ellipsis so they don't break the row on narrow screens
- Editors: the shared language selector shows full language names again (English, Nederlands, Deutsch, …) instead of bare codes, and the shared status reads "Nederlands · shared" instead of "nl · shared"
- Accessibility: the appearance/palette/compact radio groups now also support Home/End keys

## v3.21.173 (2026-07-19)
- Team card: the team names in the previous/upcoming match lists are now inline — a small team-colour marker plus the name as plain text — instead of a heavy coloured pill. The tracked team is highlighted with the accent colour instead of an outline box, and the names now stay readable on the light appearance
- Editors: the language selector is a single shared `renderLanguageControl()` used by all card editors, so every editor (Timeline, Scorers, Standings, Club, …) shows the shared-language inherited status ("nl · shared"), not just Team and Match Center. Removed the duplicated per-editor language lists
- Team editor: the compact control is now a real radio group (`role="radiogroup"`/`radio`, `aria-checked`, roving tabindex, arrow keys), consistent with appearance and palette
- The legacy-skin migration and radio arrow-key navigation moved to pure helpers (`buildMigratedConfig`, `nextRadioIndex`) with direct unit tests

## v3.21.172 (2026-07-19)
- Skin editor: fix legacy `skin:` configs showing no appearance/palette as selected — the picker now highlights the effective (resolved) values, so `skin: red-white` correctly shows Dark and Red & White selected. Picking a value on a legacy-skin card migrates it to explicit `appearance`/`palette` and drops `skin`, so the old field no longer shadows the new ones
- Skin editor: the low-contrast warning now names which parts fail (main text, secondary text and/or accent) instead of a single generic message
- Editor: shared language now shows the same explicit inherited status as compact/skins (e.g. "nl · shared") in the Team and Match Center language selectors, instead of just "Auto"
- Accessibility: appearance and palette are now real radio groups (`role="radiogroup"`/`radio`, `aria-checked`, roving tabindex) with arrow-key navigation

## v3.21.171 (2026-07-18)
- Skin editor: the picker now computes the effective look (including values inherited from the sensor), so the selected appearance/palette matches what the card actually renders instead of showing the local fallback
- Skin editor: the custom-palette contrast check now also fires when only the text or only the background is customised — the missing colour is taken from the chosen appearance's default (skipped for the Home Assistant appearance, whose colours come from the theme)
- Accessibility: appearance buttons, palette swatches and the compact tri-state expose `aria-pressed`, and all editor buttons are `type="button"` so they can't accidentally submit a surrounding form
- Compact resolution and shared-language inheritance moved to pure helpers with direct unit tests (alongside the existing appearance/palette tests)

## v3.21.170 (2026-07-18)
- Skin editor: appearance and palette now have an explicit "inherit" option that shows what the sensor shares, e.g. "Red & White · shared". Picking a value overrides just that axis; choosing inherit clears it so the card follows the shared default again — making it visible when a value comes from the sensor
- Team editor: the compact setting is now a three-way control — Shared / On / Off — so a card can explicitly opt out of a globally-shared compact mode (or in), and the inherited value is shown on the Shared option
- Labels (`skin.default`, `skin.shared`, `editor.inherit/on/off`) added in English and Dutch

## v3.21.169 (2026-07-18)
- Shared defaults: appearance and palette are now inherited from the sensor per field, not all-or-nothing — a card that sets only `appearance: light` still inherits the shared `palette: red-white` (previously it fell back to the default). A legacy `skin` still opts the card out of both. Covered by unit tests
- Skin editor: the custom-palette contrast warning now also checks secondary text and the accent against the background, not just the main text
- Timeline: the diagnostic console logging of unknown/odd events is now opt-in (`debug: true`), so unusual provider data no longer logs on every update

## v3.21.168 (2026-07-18)
- Shared per-sensor preferences: cards now inherit appearance, palette, language and (Team card) compact mode from the sensor's `card_defaults` attribute (integration v3.6.93) when the card itself doesn't set them — so you can set the look once in the integration options instead of on every card. A card's own setting always wins

## v3.21.167 (2026-07-18)
- Editor: the Team and Match Center editors now group their growing list of switches into labelled sections — Match info, Prediction & odds, Display and Appearance — instead of one long "Settings" list, so options are easier to find. Section labels added in English and Dutch

## v3.21.166 (2026-07-18)
- Prediction and odds sections show a small "Pre-match" status chip during a live match, making clear that these are the pre-kickoff snapshot kept as context (they don't update live), unlike the live in-play odds which keep their own Live badge. `team.status_prematch` added in English and Dutch

## v3.21.165 (2026-07-18)
- Timeline: unknown/odd events are handled more gracefully — events with nothing meaningful to show are skipped instead of rendering a blank row, unrecognised types show neutrally with a meta badge, and skipped/unrecognised events are logged to the browser console for diagnostics without bothering the viewer. Classification moved to a pure, tested helper
- Lineup card: the empty state now distinguishes "not published yet" (before kickoff — line-ups usually appear ~1h before) from "not available", using the match status, so an upcoming match doesn't look broken

## v3.21.164 (2026-07-18)
- Club card: the squad is collapsed by default (first 3 per position) with a "Show all" / "Show less" toggle, so a full squad no longer makes the card very tall (`squad_collapsed: false` shows everyone, `squad_preview` sets the count)
- Club card: transfers get In / Out / All filter tabs (with counts) when both directions are present
- Club card: a small footnote notes that club data refreshes about once a day (it's cached ~24h), so slightly stale data isn't confusing. Squad/transfer/filter logic added to the pure club model with tests

## v3.21.163 (2026-07-18)
- Skin editor: the palette is now chosen from colour swatches (a two-colour dot per palette) instead of a plain dropdown, and the appearance is a segmented button row — so you can see what you pick
- Custom palette: added an expandable "Advanced colours" section (live, gold, surface, card, secondary text, divider, chip) on top of the simple accent/accent-2/background/text fields, plus a reset button
- Custom palette: a low-contrast warning appears when the chosen text and background don't meet the WCAG AA ratio (4.5:1), so a light custom background with light text is flagged
- Removed the deprecated `renderSkinColorControls` alias (all editors use `renderSkinControls`). New editor labels added in English and Dutch

## v3.21.162 (2026-07-18)
- Skins: the light appearance now defaults to a blue accent (as the old `light` skin did) instead of purple; dark still defaults to purple. Applies to both `skin: light` and a bare `appearance: light`

## v3.21.161 (2026-07-18)
- Skins split into two independent axes: **appearance** (`dark` / `light` / `ha` Home Assistant theme) and **palette** (`purple` / `red-white` / `orange` / `blue` / `team` / `custom` / …). Any combination now works — e.g. a light red-white card — instead of a fixed set of bundled skins. Surfaces are accent-tinted so every palette looks right on every appearance
- New Home Assistant appearance follows `--ha-card-background`, `--primary-text-color`, `--divider-color` etc., so the cards blend into the active HA theme
- Renamed Auto to **Team colours** (palette `team`), which is what it does — derive accents from the team's colours (now contrast-aware, see v3.21.160)
- The skin picker is now a single shared, localised control (appearance + palette selectors, plus custom colour inputs with a Reset button) used by every card editor; labels added in English and Dutch (other languages fall back to English)
- Backwards compatible: the old `skin:` field keeps working and maps to the matching appearance + palette (e.g. `skin: red-white` → dark + red-white; club aliases like `feyenoord` still resolve). Setting `appearance:`/`palette:` overrides it

## v3.21.160 (2026-07-18)
- Skins: define the semantic form colours (`--cl-win`/`--cl-draw`/`--cl-loss`) centrally so W/D/L stays green/grey/red on every skin, and make `--cl-accent-soft` (the favourite highlight) follow each skin's accent instead of being stuck on the default purple
- Skins: auto (team-colour) accents are now contrast-aware — near-black/near-white kit colours are skipped so an all-black or all-white kit can't produce an unreadable card, near-identical colours no longer collapse into a flat card (a lighter second accent is derived), and with no usable colour the skin's own defaults are kept. Colour logic moved to a pure `skin-colors.js` with unit tests

## v3.21.159 (2026-07-18)
- Prediction section: relabelled the goal figures from "Expected goals" to "Goal lines" and format them as thresholds (`-2.5` → `< 2.5`, `+2.5` → `> 2.5`, with a decimal comma in comma-locales), so they're no longer mistaken for xG; the tooltip clarifies they are bookmaker goal lines, not xG. Comparison now shows only form/attack/defense (total dropped). New `show_prediction_details` toggle (Team + Match Center) hides the comparison bars and goal lines while keeping the win-probability bar and advice. Labels updated/added in all 7 languages

## v3.21.158 (2026-07-18)
- Team & Match Center cards: the prediction section now shows a home-vs-away strength comparison (form/attack/defense/overall as paired bars) and the predicted goal lines (home/away + over-under), from the extra prediction data in integration v3.6.91 — no extra API requests. Added `team.cmp_form/att/def/total`, `team.exp_goals` and `team.exp_goals_note` in all 7 languages

## v3.21.157 (2026-07-18)
- Club card: `hasClubContent()` now treats a usable coach as content and no longer treats an empty squad/transfers list as content, so a club with only a coach still renders and an empty squad no longer forces an empty card. Tests updated accordingly

## v3.21.156 (2026-07-18)
- Team & Match Center cards: the odds section now shows a pulsing "Live" badge and a "Live in-play odds" title/tooltip when the integration provides live in-play odds during a match (integration v3.6.88), instead of the "averaged market odds" label and bookmaker count used for pre-match odds. Added `team.odds_live`, `team.odds_live_note` and `team.odds_live_badge` in all 7 languages

## v3.21.155 (2026-07-18)
- Scorers card: the `assists` ranking now reads the real top-assists ranking from the sensor's new `assists` attribute (integration v3.6.87) instead of re-sorting the top scorers by their assists, so assist leaders with few goals are no longer missed
- Club card: extracted the squad grouping and transfer display into a pure `shared-club-model.js` module and added unit tests (grouping order, empty groups, transfer capping/counterparty/date formatting)

## v3.21.154 (2026-07-18)
- New Club card (card_type: club): shows the club profile (stadium, founded year, coach), the full squad grouped by position (GK/DEF/MID/ATT) with shirt number and age, and recent transfers (in/out, player, fee, from/to, date). Reads the club attribute from an API-Football team sensor (integration v3.6.86); editor toggles for squad/transfers and a max_transfers option. Labels in all 7 languages

## v3.21.153 (2026-07-17)
- Scorers card: add a `ranking` option (`goals` (default) / `assists`) so one card can show top scorers or top assists instead of needing separate cards — the list is re-sorted and re-ranked client-side from the data the sensor already provides (assists come from API-Football). `yellow_cards`/`red_cards` are already accepted and will work once the integration exposes those counts. Editor gets a ranking selector; `card.assists` and `editor.ranking` added in all 7 languages

## v3.21.152 (2026-07-17)
- Team & Match Center cards: show the prediction, odds and unavailable-players sections during a live match too (as pre-match context), not only before kick-off; hidden once the match is finished. Pairs with integration v3.6.82 which keeps the pre-match snapshot attached during the game

## v3.21.151 (2026-07-17)
- Data provenance: the prediction and odds section titles now carry a subtle explanatory tooltip / aria-label ("Provider estimate, not a guarantee" / "Averaged market odds, may be delayed") with a dotted-underline affordance, so the strong visual presentation doesn't suggest more certainty than the source provides. Added `team.prediction_note` and `team.odds_note` in all 7 languages

## v3.21.150 (2026-07-17)
- Unavailable-players section: cap each team's list at 6 with a "+N more" line so it can't grow unbounded (e.g. ten or more absentees); `team.and_more` label in all 7 languages
- Preview: the upcoming-match mock now includes the pre-match sections with deliberately extreme content (many absentees, a long injury reason, one missing odd, high standing) to check layout on narrow columns

## v3.21.149 (2026-07-17)
- Accessibility: the pre-match sections no longer rely on colour alone — injury/suspension icons carry an `aria-label`/`title` (Injured / Suspended), the odds favourite has a `Favourite` label (in addition to the lowest number), and the prediction bar segments have per-outcome titles. Added `team.injured`, `team.suspended` and `team.favourite` labels in all 7 languages

## v3.21.148 (2026-07-16)
- Tests: add targeted frontend unit tests (`node --test`) for `standingText`, `translateAdvice`, `scoreText` and the odds/prediction models — covering structured vs ESPN standing, N/A / zero points, advice word combinations + regional language codes, missing/tied/single odds, single bookmaker, and prediction percentages that don't sum to 100
- Prediction bar: normalize the segment widths so the bar always fills its track even when the percentages don't add up to 100; show a dash for a missing percentage instead of `0%`
- Refactor: extract the pure odds/prediction decision logic into `shared-prematch-model.js` (lit-free, unit-tested)

## v3.21.147 (2026-07-16)
- Odds subtitle: with a single bookmaker use "From {n}" instead of "Average of {n}" (there is no average of one source); more natural German phrasing ("Durchschnitt von … Buchmachern", "Von 1 Buchmacher")

## v3.21.146 (2026-07-16)
- Fix: Match Center, Team Competitions and Team Form cards now also show the API-Football standing (structured rank/points), not only ESPN summary string — the standing had disappeared from these three cards for API-Football after v3.21.141. Standing formatting is now shared via shared-standing.js across all four cards

## v3.21.145 (2026-07-16)
- Odds: use the singular form for the bookmaker-average subtitle when there is exactly one bookmaker (e.g. "1 bookmaker" instead of "1 bookmakers")
- Odds: only highlight a favourite when at least two odds are present and one is uniquely the lowest (no favourite for a single odd or a tie)

## v3.21.144 (2026-07-16)
- Odds section: use the international 1 – X – 2 notation above the team names; plural Dutch label "Quoteringen"; show a small "Average of N bookmakers" subtitle (from bookmaker_count); soften the favourite marker to a subtle tint (no strong accent border)

## v3.21.143 (2026-07-16)
- Localize the odds label: Dutch "Quotering" and Portuguese "Cotações" instead of the English "Odds" (other languages already had a translation)

## v3.21.142 (2026-07-16)
- Team & Match Center cards: redesign the odds section into three even columns (outcome label on top, odd below) with the favourite (lowest odd) highlighted, instead of a cramped single line

## v3.21.141 (2026-07-16)
- Match Center card: add editor toggles to hide the prediction, odds and unavailable-players sections individually (all default on)
- Team card: localize the standing label — format the structured rank/points (API-Football) with a translated "pts" label (all 7 languages) instead of showing the backend string; ESPN summaries still shown as-is

## v3.21.140 (2026-07-16)
- Match Center card: show the pre-match prediction, odds and unavailable-players sections in the overview tab for upcoming matches (only when data exists), matching the Team card
- Refactor: extract the shared pre-match sections into shared-prematch.js, used by both the Team and Match Center cards

## v3.21.139 (2026-07-16)
- Team card: translate "goals" to "doelpunten" in the Dutch prediction advice (was left untranslated)

## v3.21.138 (2026-07-16)
- Team card: localize the API-Football prediction advice by translating its fixed vocabulary (Combo Winner, Double chance, and, or draw, goals, ...) while leaving team names and goal figures intact; English/unmapped phrases pass through

## v3.21.137 (2026-07-16)
- Team card: show xG (expected goals) in the live stats row when both teams have a value
- Team card: add editor toggles to show/hide the weather, prediction, odds and unavailable-players sections (all default on, so existing cards are unchanged)

## v3.21.136 (2026-07-16)
- Team card: show averaged 1X2 odds (home/draw/away) for upcoming matches when odds data exists (competitive matches within ~2 weeks of kickoff); `team.odds` label in all 7 languages

## v3.21.135 (2026-07-16)
- Team card: show an "Unavailable" section (injured 🩹 / suspended 🚫 players with reason) for upcoming matches when injury data exists; `team.injuries` label in all 7 languages

## v3.21.134 (2026-07-16)
- Team card: show a pre-match prediction (home/draw/away win-probability bar + betting advice) for upcoming matches when prediction data exists; `team.prediction` label in all 7 languages

## v3.21.133 (2026-07-15)
- Weather badge: show the forecast for kickoff time on upcoming matches (nearest Open-Meteo hourly forecast, 1h–16 days out) instead of current conditions; live/imminent/past matches keep current conditions; forecast marked with a clock icon in the tooltip

## v3.21.132 (2026-07-13)
- Weather badge: add FC Dordrecht's ground (M-Scores Stadion / Stadion Krommedijk); every venue returned by the ESPN and API-Football sensors now resolves to coordinates

## v3.21.131 (2026-07-13)
- Weather badge: resolve training-ground venues that carry a pitch/field number (e.g. "Sportcomplex Varkenoord 1") by retrying against the base name

## v3.21.130 (2026-07-13)
- Weather badge: cover all 16 FIFA World Cup 2026 stadiums (NRG Stadium, Mercedes-Benz Stadium, Estadio Banorte, GEHA Field at Arrowhead)

## v3.21.129 (2026-07-13)
- Weather badge: add stadium coordinates and venue-name aliases for ESPN/API-Football name variants (NEC, Telstar, ADO Den Haag, Sparta, Excelsior, SC Cambuur, Feyenoord's Varkenoord, plus English/sponsor variants)

## v3.21.128 (2026-07-13)
- Weather badge: validate server-provided venue coordinates as real numbers before use, otherwise fall back to the known-venue lookup

## v3.21.127 (2026-07-13)
- All cards: guard every score render with a shared `scoreText()` helper so an object score (as ESPN can send during live matches) can never render as "[object Object]"

## v3.21.126 (2026-07-10)
- Countdown card: only repaint per-second while a match is counting down (state `pre`); clear the tick timer defensively before re-creating it
- Countdown / Match Center / Team Form: fix "NaN–NaN" score rendering for non-numeric head-to-head / previous-match scores

## v3.21.125 (2026-07-10)
- Timeline / Matches / Match Center / Team popup: no longer badge missed penalties or VAR-disallowed goals as goals (shared `isGoalEvent()` helper)

## v3.21.124 (2026-07-10)
- Apply competition-name localization to the Scorers card title, Bracket card title and MiniStandings heading

## v3.21.123 (2026-07-10)
- Shorten the Dutch club-friendlies label to "Oefenwedstrijd"

## v3.21.122 (2026-07-10)
- Team card: wrap competition labels in the previous/next match rows instead of cutting them off mid-word

## v3.21.121 (2026-07-10)
- Shared formation pitch: consistent jersey-number fallback for bench players

## v3.21.120 (2026-07-08)
- Extract the formation pitch into a shared module used by the Lineup card, Team/Matches popups and Match Center

## v3.21.119 (2026-07-06)
- Team card: fix the match-details popup header on mobile — hide the stats grid when neither team has stats and show team names centered under the logos

## v3.21.118 (2026-07-05)
- Cards: translate API-Football competition labels consistently in Countdown, News, Lineup and Timeline headers as well, so friendly fixtures no longer leak raw provider names in those views

## v3.21.117 (2026-07-05)
- Cards: translate API-Football friendly competition labels consistently across Matches, Team, Ticker, Team Competitions and Match Center cards, including `Friendlies`, `Friendlies Club`, `Friendlies Clubs`, `Friendly Club(s)` and `Club Friendlies`

## v3.21.116 (2026-07-05)
- Matches card: prefer team name over `World` as the header for team/mixed sensors and translate club friendlies labels in the match list
- Team card: hide empty `N/A` clock/status text in finished-match detail popups
- Docs: document API-Football sensor compatibility and the v3.6.58 integration requirement for API-Football match details

## v3.21.63 (2026-06-26)
- Docs: README bijgewerkt — verwijderde kaarten (LiveMatch, LiveCommentary, SeasonOverview, Timeline, Lineup) uit tabel en reference sections; Countdown sectie vermeldt nieuwe compacte strip en `hide_when_live`; MatchCenter sectie vermeldt pitch opstelling
- Preview: verwijderde kaart-panels (Live Match, Lineup, Timeline, Live Commentary, Season Overview) uit preview.html

## v3.21.62 (2026-06-26)
- Removed cards: LiveMatch, LiveCommentary, SeasonOverview, Timeline, Lineup — functionaliteit zit in MatchCenter (tabs: stats, tijdlijn, opstelling) en Countdown/Team; bundle 73 KB kleiner (584 → 511 KB)

## v3.21.61 (2026-06-26)
- Countdown card: `post` (afgelopen) state krijgt nu ook de compacte strip (`✓ FT · Tunisia – Netherlands · 1–3`) in plaats van de volledige kaart met score, badges en meta-info
- Countdown card: `hide_when_live: true` verbergt de kaart nu ook bij afgelopen wedstrijden

## v3.21.60 (2026-06-26)
- MatchCenter pitch: player names now strip only the ESPN initial (`V. `) instead of taking the last word — "van Dijk", "de Jong", "van den Berg" are now displayed correctly instead of just "Dijk" / "Jong" / "Berg"

## v3.21.59 (2026-06-26)
- Countdown card: when a match goes live the card now shows a compact one-line strip (pulsing dot · LIVE · Home – Away · clock) instead of the full score view — the countdown is done, live scores belong in LiveMatch/MatchCenter
- Countdown card: new `hide_when_live: true` config option — the card disappears entirely from the dashboard when the match is in progress
- Countdown card: `getCardSize()` returns 1 (instead of 3) while live so the HA grid allocates minimal space

## v3.21.58 (2026-06-26)
- MatchCenter lineup: pitch now uses an SVG overlay for field markings (penalty areas, goal areas, penalty spots, penalty arcs, center circle, corner arcs); lineup tab no longer has a height cap so both teams are fully visible without scrolling

## v3.21.57 (2026-06-26)
- MatchCenter: lineup tab now renders a football pitch view — away team at top, home team at bottom, players shown as jersey-number circles with name labels, positioned by formation rows; bench players listed below the pitch; falls back to the previous list layout when no formation data is available

## v3.21.56 (2026-06-25)
- Countdown card: `_loadWeather` and the venue trigger in `updated` now use `_getNextMatch()` instead of `matches[0]` — for `team_matches_mixed` sensors the weather is loaded for the displayed match's venue, not the oldest match in the list

## v3.21.55 (2026-06-24)
- Team card: `separateEvents` now excludes "Goal Disallowed" strings so VAR-cancelled goals no longer appear in the goals section of the match popup
- Countdown card: `_getNextMatch` now prioritises live matches (`in`) over upcoming (`pre`) — live score is shown instead of countdown when a match is in progress

## v3.21.54 (2026-06-24)
- Diagnostics: restore the missing i18n helper so the card no longer fails during render
- Team Competitions: ignore completed matches with invalid scores instead of classifying them as draws
- Team Form: do not repeat the current live match in the upcoming-match list
- Preview: use realistic distinct live/upcoming fixtures and the correct `headline` news field
- Preview: keep the no-live Ticker visible so every panel renders observable output
- Team: show abbreviation fallbacks when team logos are missing instead of broken image icons
- Countdown: use card-width container queries and bounded timer sizing so narrow dashboard columns cannot overflow
- Preview smoke test: parse actual panel definitions and compare them with the card registry instead of counting unrelated arrays
- Sync `package-lock.json` with package version `3.21.54`

## Unreleased

## v3.21.51 (2026-06-24)
- Team/Matches/Standings: on partial subscription failure release succeeded subscriptions and store empty array so a full retry happens on next hass update (previously a partial list blocked retries)

## v3.21.50 (2026-06-24)
- Standings: add `soccer_live_match_finished` to event subscriptions — match-finished toasts were never received
- Team/Matches: apply `Promise.allSettled` + generation-counter subscription pattern (same fix as Standings in v3.21.49)
- Sync `package-lock.json` to v3.21.49

## v3.21.49 (2026-06-24)
- Standings: rewrite `_subscribeToEvents` with `Promise.allSettled` and generation counter — prevents duplicate/stale subscriptions on rapid mount/unmount
- Standings: toast messages use `.textContent` (already), removed `<strong>` tags that were rendering as literal text

## v3.21.48 (2026-06-23)
- Translate remaining Italian inline comments to English in Standings, Bracket, and Team cards

## v3.21.47 (2026-06-23)
- Translate remaining Italian comments to English in i18n.js, Standings, Bracket and Matches

## v3.21.46 (2026-06-23)
- TeamCompetitions: remove `_parseTs` wrapper, call `parseMatchTimestamp` directly (same cleanup as SeasonOverview and Diagnostics)
- i18n/Standings: translate remaining Italian comments to English

## v3.21.45 (2026-06-23)
- LiveCommentary: fix `'penaalty'` typo — penalty events now correctly get ⚽ instead of 📋
- Standings: replace hardcoded Dutch preseason banner with translated `standings.preseason` key (EN/NL/DE/PT/FR/ES/IT)
- Diagnostics: replace hardcoded English title with `card.diagnostics` i18n key
- i18n: add `card.diagnostics` and `standings.preseason` keys in all 7 languages

## v3.21.44 (2026-06-23)
- Bracket: hide `compact` toggle in editor when style is `tree`; hide `tree_show_playoffs` toggle when style is `list`
- Bracket tree: show trophy centered with "Knockout stage starts soon" message when R16/QF/SF rounds are not yet available (e.g. during group stage)

## v3.21.43 (2026-06-23)
- TeamCompetitions: also show last finished match below the upcoming match, so each competition tab always shows context on the previous result

## v3.21.42 (2026-06-23)
- Security: validate URL scheme before `window.open` in shared match meta and News card — prevents `javascript:` and `data:` URI injection

## v3.21.41 (2026-06-23)
- MiniStandings: align header with Standings card — edge-to-edge gradient top bar with ball watermark and gradient title text

## v3.21.40 (2026-06-23)
- MatchCenter: add weather badge, venue/broadcast chips and locale-aware H2H dates
- SeasonOverview: replace `_parseTs` wrapper with direct `parseMatchTimestamp` call
- Diagnostics: replace duplicate `_parseLocalDate` with shared `parseMatchDate` from i18n

## v3.21.39 (2026-06-22)
- Preview: add edge-case fixture states for empty data, unavailable sensors, missing logos, long names and live-only ticker filtering
- Diagnostics: add sensor age and recommended card types based on `sensor_type`
- Tooling: add `npm run smoke:preview` and run it in the Auto Release workflow
- Workflow: use Node 24 in Auto Release
- Docs: add local preview smoke-test guidance and a release checklist

## v3.21.21 (2026-06-20)
- Ticker: redesign match items to vertical layout (home top, score/time middle, away bottom) for better readability; fixed width 160px per item

## v3.21.20 (2026-06-20)
- Ticker: add auto-scroll option with seamless loop and configurable speed (slow/normal/fast); scrolling pauses on hover

## v3.21.19 (2026-06-20)
- Add Ticker card: horizontal scrollable strip of matches with live scores, upcoming times and FT results; supports `all_matches_today`, `team_matches` and `team_matches_mixed` sensors; `filter: live` shows only live matches

## v3.21.17 (2026-06-20)
- Add Diagnostics card for Soccer Live sensor health and schedule counters
- Add example Lovelace dashboards for team, competition and mobile layouts

## v3.21.16 (2026-06-20)
- Docs: document sensor-driven `auto` skin behavior and editor guidance

## v3.21.15 (2026-06-20)
- Editor: show sensor-type hints and warnings for the selected card type
- Editor: wrap card-specific settings in a collapsible settings section

## v3.21.14 (2026-06-20)
- Skins: `auto` now reads team colors from Home Assistant sensor attributes, including nested `next_match` and `matches` data
- Editors: show compact custom skin color controls when `skin: custom` is selected
- UI states: align shared loading, info and error states with Soccer Live skin tokens

## v3.21.13 (2026-06-20)
- Skins: add generic `red-gold`, `blue-red` and `white-gold` palettes with legacy aliases for `arsenal`, `barcelona` and `real-madrid`
- Skins: add `custom` and `auto` skin support with YAML color overrides
- Light skin: improve contrast, accent colors and surface depth
- Docs: update the shared skin list and add custom skin examples

## v3.21.12 (2026-06-20)
- Editors: use the shared skin option list consistently across all card editors
- Skins: keep `feyenoord` as a backwards-compatible alias for `red-white`, but remove it from editor dropdowns to avoid duplicate skin choices

## v3.21.11 (2026-06-20)
- LiveMatch and MatchCenter: show `—` instead of `N/A` for missing statistic values
- Timeline, Countdown, MultiTeam and LiveCommentary: replace remaining visible English editor/fallback strings with existing i18n labels

## v3.21.10 (2026-06-20)
- TeamCompetitions: hide `N/A` competition/group names and omit the competition header when no real competition metadata is available

## v3.21.9 (2026-06-19)
- Team, TeamForm and MatchCenter: hide `N/A` standing/record summaries instead of rendering them in card bodies or badges

## v3.21.8 (2026-06-19)
- TeamCompetitions: hide `N/A` standing summaries instead of rendering them as badges

## v3.21.7 (2026-06-19)
- Add shared card shell styles for consistent skin depth, radius, shadow and hero gradients across cards
- Countdown, LiveMatch, MatchCenter, TeamCompetitions, TeamForm, LiveCommentary, MultiTeam, MiniStandings and Scorers now use the shared visual shell
- Existing hero cards now import the shared shell base to keep skin rendering more consistent

## v3.21.6 (2026-06-19)
- Team card: align match details popup with the Matches card body-level native `<dialog>` portal

## v3.21.5 (2026-06-19)
- Matches card: render match details popup as a body-level native `<dialog>` portal so it appears above Lovelace/simple-tabs cards

## v3.21.4 (2026-06-19)
- Team card: render match details popup as a body-level native `<dialog>` portal to force browser top-layer stacking above Lovelace/simple-tabs cards

## v3.21.3 (2026-06-19)
- Team card: render match details popup through a `document.body` portal so it is no longer trapped behind Lovelace/simple-tabs stacking contexts

## v3.21.2 (2026-06-19)
- Team card: render match details popup with native `<dialog>.showModal()` so it opens in the browser top layer above stack/tab cards

## v3.21.1 (2026-06-19)
- LiveMatch, MultiTeam, TeamCompetitions: replace final remaining hardcoded `LIVE`/`FT` labels with `_t('status.live')` / `_t('status.full_time')`

## v3.21.0 (2026-06-19)
- Team: `"tegen"` → `_t('match.vs')` (Dutch hardcode removed)
- Bracket, Countdown, LiveCommentary, MatchCenter, MultiTeam, TeamCompetitions, Matches: all remaining hardcoded `"LIVE"` and `"FT"` replaced with `_t('status.live')` / `_t('status.full_time')`

## v3.20.9 (2026-06-19)
- MatchCenter: `"vs"` → `_t('match.vs')` for pre-match score placeholder
- TeamForm: `"vs"` → `_t('match.vs')` in previous match rows
- Matches: `"LIVE"` → `_t('status.live')`, `"FT"` → `_t('status.full_time')`

## v3.20.8 (2026-06-19)
- shared-header: when logo image fails to load, fallback emoji is now shown instead of leaving an empty orange box

## v3.20.7 (2026-06-19)
- MiniStandings, Bracket, News: add `league_info[0].logo_href` as fallback logo source
- All cards now consistently resolve icons via `league_logo` → `league_info.logo_href` → fallback emoji

## v3.20.6 (2026-06-19)
- shared-header: filter out `"N/A"` as logo URL (parser fallback) so the fallback emoji shows instead of a broken/empty icon box
- Countdown: `@media (max-width: 600px)` now sets `cd-body { padding: 12px }` instead of `ha-card { padding: 12px }` — fix for icon still offset on narrow screens

## v3.20.5 (2026-06-19)
- Countdown: remove `padding: 16px` from `ha-card` (was offsetting the header 16px too far inward); body content now in `.cd-body` wrapper with the same 16px padding
- MatchCenter: use `attrs.league_info[0].logo_href` as icon fallback — `team_match` sensors don't have `league_logo` as a top-level attribute but do have `league_info`

## v3.20.4 (2026-06-19)
- Lineup + Timeline: add `stateObj.attributes.league_logo/name` as fallback so header icon is always shown
- LiveCommentary: header logo fallback chain added; league name uses full `name` instead of `abbreviation`; `'Live Commentary'` via `_t('card.live_commentary')`
- TeamForm: `'Team Form'` fallback via `_t('card.team_form')`
- `card.team_form` + `card.live_commentary` added in all 7 languages (258 keys total)

## v3.20.3 (2026-06-19)
- shared-header: `sh-badge.date` and `.ft` now use `var(--cl-text)` (white) on dark background — consistent with Team card's status badge
- MatchCenter: inject `attrs.league_logo` / `attrs.league_name` into match before rendering so the header icon is always populated

## v3.20.2 (2026-06-19)
- MatchCenter, Lineup, Timeline: competition name/logo fallback to `match.league_name` / `match.league_logo` — parser stores the name in `league_name`, not `competition_name`, so the header was showing blank

## v3.20.1 (2026-06-19)
- MatchCenter editor: add skin/language dropdowns, section headers via `_t()`, entity label via `_t()`
- TeamForm editor: add skin/language dropdowns, section headers via `_t()`, replace `<input checkbox>` with `ha-switch`

## v3.20.0 (2026-06-19)
- MatchCenter: all 5 tabs (Overview, Stats, Timeline, Lineup, H2H) always visible — empty state shown instead of hiding tabs pre-match
- MatchCenter: "Formation" label via `_t('match.formation')` in 7 languages
- MatchCenter: "No H2H data" via `_t('ui.no_h2h_yet')` in 7 languages
- `match.formation` + `ui.no_h2h_yet` added in all 7 languages (256 keys total)

## v3.19.9 (2026-06-19)
- TeamCompetitions card fully rewritten: per competition tab now shows featured match (score/date), form dots (W/D/L last 5), standing summary, previous result and next match — instead of one compact match row
- Tab logos added to competition tabs
- Offline cache support added (was missing)

## v3.19.8 (2026-06-19)
- All 13 skins now available in every editor (Countdown, LiveMatch, MiniStandings, Scorers, MultiTeam, TeamCompetitions, LiveCommentary were missing orange, blue, black-white, feyenoord, arsenal, barcelona, real-madrid)
- `SKIN_OPTIONS` exported from `skins.js` as single source of truth for all editor dropdowns

## v3.19.7 (2026-06-19)
- Remove unused `renderSelector`, `renderToggle`, `renderFieldGroup`, `renderSection` imports from Team and Countdown editors

## v3.19.6 (2026-06-19)
- Offline error state in Team, Countdown, LiveMatch, MultiTeam via `_t('ui.offline_cached')` + `_t('ui.waiting_integration')`
- MultiTeam no-entities error via `_t('ui.no_entities_configured')` + `_t('ui.add_team_entity')`
- 4 new `ui.*` keys added in all 7 languages (254 total)

## v3.19.5 (2026-06-19)
- README: i18n key count updated to 250; `hide_broadcasts` coverage includes Matches card; integration version requirements table extended with v3.6.3/v3.6.5 entries

## v3.19.4 (2026-06-18)
- All editor section headers (`<h3>Sensor</h3>`, `<h3>Settings</h3>`, `<h3>Appearance</h3>`, `<h3>Teams</h3>`) translated via `_t()` in 13 editors
- `editor.teams` key added in all 7 languages (MultiTeam editor section header)
- LiveMatch editor: "Team sensor" label via `_t('editor.sensor')`
- MiniStandings editor: "Standings entity" label via `_t('editor.entity')`
- LiveCommentary editor: redundant hardcoded hint removed

## v3.19.3 (2026-06-18)
- Scorers card: loading state via `_t('ui.loading')` (was hardcoded "Loading scorers...")
- Scorers card: empty state via `_t('scorers.empty')` (was hardcoded "No data")
- Scorers card: fallback header title via `_t('card.scorers')` (was hardcoded "Top Scorers")
- MatchCenter + TeamForm: loading state via `_t('ui.loading')` (was hardcoded "Loading match..." / "Loading form...")

## v3.19.2 (2026-06-18)
- Fix PT: remove duplicate `match.draw` + Spanish tab labels (`Resumen`, `Cronología`, `Alineación`) that were accidentally inserted after the correct Portuguese set

## v3.19.1 (2026-06-18)
- Fix FR/IT apostrophe syntax errors in i18n values (`l'intégration`, `d'événements`, `l'integrazione` etc.)
- Add missing ES `match.draw` and `tab.*` keys (were skipped during earlier ES block update)

## v3.19.0 (2026-06-18)
- `match.draw` key added in all 7 languages (was missing; Team card showed raw key)
- `tab.overview/stats/timeline/lineup/h2h` keys added in all 7 languages
- `standings.goals` key added in all 7 languages; Standings card no longer falls back to hardcoded "doelpunten"
- MatchCenter: TABS constant replaced by `TAB_IDS` array; tab labels built dynamically via `_t('tab.' + id)`
- `package.json` license corrected from `ISC` to `GPL-3.0-only`
- `i18n.js` header comment updated to list all 7 supported languages

## v3.18.6 (2026-06-18)
- DE: add 17 missing `stat.*` translation keys (lost during earlier `cd.days` corruption)
- All 7 languages now at exactly 242 keys

## v3.18.5 (2026-06-18)
- Fix corrupted DE `cd.days`/`hrs`/`min`/`sec` keys (same apostrophe-fixer bug as month.5-8)

## v3.18.4 (2026-06-18)
- Fix corrupted `month.5–8` keys in EN/NL/FR/ES/DE/PT: apostrophe-fixer had merged 4 keys into one string value, causing raw key strings to appear in date headers

## v3.18.3 (2026-06-18)
- Standings: zone color border now set as inline style on `<td>` directly (was CSS custom property on `<tr>` — unreliable in shadow DOM / HA themes)
- Standings: `legend-dot` gets `display: inline-block; flex-shrink: 0` so colored squares always render

## v3.18.2 (2026-06-18)
- Fix apostrophe syntax errors in IT/FR i18n values (sensor_unavailable_hint, restart_ha)

## v3.18.1 (2026-06-18)
- All card error/empty states via i18n in 7 languages: `ui.sensor_unavailable_hint`, `ui.restart_ha`, `ui.no_standings_data`, `ui.no_competition_data` + hints
- MiniStandings, TeamCompetitions, Countdown, MatchCenter, TeamForm, Scorers, Team, LiveMatch, MultiTeam error messages fully translated

## v3.18.0 (2026-06-18)
- `ui.entity_not_found`, `ui.no_match_data`, `ui.no_stats_yet`, `ui.no_events_yet`, `ui.no_lineup_yet`, `ui.no_form_data` added in 7 languages
- MatchCenter, TeamForm, Scorers: empty states via `_t()` instead of hardcoded English

## v3.17.5 (2026-06-17)
- Remove duplicate `editor.max_stats` entries in EN and NL

## v3.17.4 (2026-06-17)
- Fix unescaped apostrophes in FR editor translations

## v3.17.3 / v3.17.2 (2026-06-17)
- `editor.*` keys added for IT, FR, ES, DE, PT — all 7 languages now fully covered

## v3.17.0 (2026-06-17)
- All 15 card editors translated via i18n: `editor.*` keys in EN + NL; other languages fall back to EN
- MatchCenter editor: checkboxes replaced by `ha-switch` for visual consistency

## v3.16.x (2026-06-17)
- Team editor fully translated (EN + NL) via `_t()` + `editor.*` i18n keys
- LiveMatch editor: missing `_switchChanged` method added (hide_broadcasts toggle was silently broken)
- Matches card: `hide_broadcasts` support for inline TV chips + toggle in editor
- Countdown + LiveMatch + MatchCenter editors: `hide_broadcasts` toggles added

## v3.15.8 (2026-06-17)
- `hide_broadcasts`, `compact` toggles added to Team, Countdown and LiveMatch visual editors
- `hide_broadcasts` and `compact` documented in README common-options table
- Dead venue/venueCity/broadcasts/neutralSite vars removed from Countdown and LiveMatch render methods
- MatchCenter Stats tab: ESPN stat keys translated via `translateStatKey` (same as LiveMatch)

## v3.15.0 (2026-06-17)

### Compact mode
- **Team card**: `compact: true` hides form trend, previous matches, H2H, upcoming list and upcoming section; shrinks logo to 48px, score to 36px, hides topscorer/standing rows
- **Countdown**: `compact: true` reduces logo (32px), countdown numbers (22px), tighter padding throughout

### Click-through consistency
- **LiveMatch**: own `.meta` venue row replaced by `renderMatchMeta`; broadcast/attendance/stats/commentary/video chips now consistent with Team, MatchCenter and Countdown

## v3.14.0 (2026-06-17)

### New: shared-match-meta.js
- `renderMatchMeta(match, { lang, t, weatherBadge, showDate })` — venue row + broadcast/attendance/link chips in one component
- `matchMetaStyles` — consistent CSS for all match meta across cards
- Chip variants: broadcast (TV icon), attendance (people icon), stats/commentary/video (clickable, accent colour)

### Click-through consistency
- **MatchCenter** Overview tab: venue + broadcast/attendance/link chips via shared-match-meta
- **Countdown**: own `.meta` row replaced by shared-match-meta; weather badge preserved; stats/commentary/video chips now available

## v3.13.1 (2026-06-17)
- LiveCommentary: migrate to shared-header; add `hide_header` guard (was always showing)
- TeamCompetitions: migrate `.card-header` to shared-header; remove dead CSS
- MiniStandings: remove dead `.header` / `.league-logo` / `.title` CSS
- Timeline, Lineup, Bracket: remove dead `.header-icon` / `.header-text` CSS
- Matches: remove dead `.matches-header` / `.league-logo` / `.league-info` CSS block

## v3.13.0 (2026-06-17)
- All cards now use `shared-header.js` — Team, Countdown, Matches, Timeline, Lineup, Bracket, MiniStandings added
- Team card own `.top-bar`/`.competition`/`.comp-icon` CSS removed; `soccerHeaderStyles` imported

## v3.12.0 (2026-06-17)

### Design consistency: shared header
- `src/cards/shared-header.js` introduced as single source of truth for card headers
- `renderSoccerHeader({ logo, title, badge, fallbackIcon })` — Team card spec: 24px comp-icon with gradient + box-shadow, 12px/700 title
- `renderSoccerBadge(text, variant)` — uniform pill in four variants: `live` (red), `ft` (surface), `date` (surface), `neutral` (surface)
- All cards now import `soccerHeaderStyles` from shared file

### Cards migrated to shared header
- **Team** — own `.top-bar`/`.competition`/`.comp-icon` CSS removed; z-index override kept for hero-bg overlay
- **Countdown** — old centred `.header` replaced; live/FT/date badge from shared
- **Matches** — `.matches-header` replaced; live counter and progress ("1 / 3") as badge
- **Timeline**, **Lineup**, **Bracket** — old `header-icon` / `header-text` pattern replaced
- **MiniStandings** — own `.header` replaced
- Previously migrated: TeamForm, MatchCenter, Scorers, News

## v3.11.0 (2026-06-17)

### New cards
- **Match Center** (`card_type: match-center`) — tabbed match view: Overview, Stats, Timeline, Lineup, H2H; tabs only appear when data is available
- **Team Form** (`card_type: team-form`) — W/D/L dots, goals-per-match chart, home/away split, previous + upcoming matches; labels fully translated in 7 languages

### Team Form improvements
- `team_name` in config recommended; auto-detect uses frequency analysis over `previous_matches` but may be ambiguous with one match or repeat opponents
- Logo and standing badge now use the correct home/away side based on detected team position

### Card picker
- Picker uses `ha-form` select (replaces `ha-select` which had unreliable event firing)
- Card type dropdown preserves `entity`, `skin`, `language`, `show_event_toasts` when switching types
- Editor remembers full per-type config and restores it when switching back
- `resolveElement()` restricted to known legacy element names; unknown `card_type` shows an error card instead of a silent placeholder
- `type: WRAPPER_TYPE` hardcoded in `_dispatch()` — sub-editors cannot override the wrapper identity
- `customCards` registration guarded against double-load; `customElements.define` guarded on all 28 card + editor elements

### Other fixes
- Countdown card: responsive — on ≤480px teams stack on top row, countdown takes full width below
- Scorers card implemented (rank, headshot, team logo, goal tally; offline cache; ESPN-unavailable state)
- `getGridOptions()` delegated to sub-card for sections dashboards
- Match Center + Team Form headers match Team card style (gradient comp-icon, status badge)
- `scorers-editor.js`: fixed `import from 'lit'` → `'lit-element'`
- 0 npm audit vulnerabilities

### Breaking change (v3.8.0)
YAML changed from `type: custom:soccer-live-team` to `type: custom:soccer-live-card` + `card_type: team`. Legacy long names still work for backward compatibility.

## v3.7.1 (2026-06-17)
- Team card: all goal animation timeouts tracked in `_animationTimers`, cleared in `disconnectedCallback`
- Tutte popup: score `0` no longer shown as `-` (falsy check replaced by explicit null/empty/'N/A' check)
- Tutte card: `_cleanupTimers` array tracks `_recentEventMatches` timeouts, cleared on disconnect
- package-lock.json synced after each version bump

## v3.7.0 (2026-06-17)
- Tutte + Standings: event subscriptions now triggered from `updated()` on first `hass` (guard against duplicates)
- Tutte + Standings: `_escHandler` cleaned up in `disconnectedCallback`
- Tutte popup: rewritten as Lit template in shadow DOM (no global `document.body` injection)
- Team matching on ESPN `team_id` when available (more reliable than name matching)
- lockfile synced to 3.6.9 / 3.7.0 after version bumps

## v3.6.9 (2026-06-16)
- Fix: `_escHandler` cleanup added to `disconnectedCallback` — no dangling ESC listener when card removed while popup is open
- Use `attributes.*` instead of `stateObj.attributes.*` for previous/upcoming matches (consistent offline/cache rendering)

## v3.6.8 (2026-06-16)
- hacs.json: `description` field removed (not allowed by HACS schema)
- package-lock.json synced to 3.6.8

## v3.6.6 (2026-06-16)
- H2H: W/D/L summary with coloured bar in card and popup
- Card shows 5 H2H matches (was 3); popup shows 8
- Winner highlighted bold, loser dimmed in popup

## v3.6.5 (2026-06-16)
- Fix: event toasts (goal / card notifications) now reliably subscribe — `connectedCallback` fires before `hass` is available in HA; subscription now triggered from `updated()` on first `hass`, with guard against duplicate subscriptions

## v3.6.4 (2026-06-16)
- Live Match: stats built from `home_statistics`/`away_statistics` (all stats visible, not just 4)
- Live Match: visual comparison bar per stat (home accent / away dimmed)
- Live Match: "No events yet" translated via i18n (`popup.no_events`)
- `package.json` version synced to `3.6.3`
- `hacs.json`: description added

## v3.6.3 (2026-06-16)
- Bundle rebuilt clean without competition schedule card
- Fixes HACS version mismatch after release consolidation

## v3.6.0 (2026-06-15)
- Standings legend uses ESPN `zone_label`/`zone_abbrev`; tooltip on each row shows full zone name
- Team card: 📊 Stats / 💬 Commentary / 🎬 Video / ⚖️ Neutral venue chips (clickable, hidden when no link)
- Team card: `last_five_home/away` from summary as form source; min. 2 results required
- Team card: all broadcast channels shown; previous match date no longer wraps
- Season form dots translated via i18n (D → G in Dutch); single-result form hidden
- News card: byline, premium badge ★, category tags with CSS
- Stats/Commentary/Video chip labels translated in all 7 languages
- i18n complete for FR/ES/DE: `card.stats`, `card.video`, `ui.neutral_site`, `ui.open_*`
- `noopener,noreferrer` on all external `window.open` calls
- Competition schedule card removed (ESPN provides no reliable matchday numbers)

## v3.4.0 (2026-06-15)
- Standings card uses ESPN `zone_color` directly (no hardcoded rules needed)
- Team card shows `standing_summary` below team name in pre-match (e.g. "3rd in Eredivisie")
- News card: premium badge ★, author (byline), category tags
- Countdown + LiveMatch: broadcast channels and neutral venue indicator in meta line
- Fixed: "Calcio Live · Top Scorers" renamed to "Soccer Live Top Scorers" in Add Card picker

## v3.3.0 (2026-06-15)
- ESC key closes popup in Team and Matches cards
- Timeline: Start/End Delay events filtered out (ESPN broadcast markers)
- Timeline: event labels translated (Kickoff → Aftrap, Halftime → Rust, etc.)
- Countdown: FT badge translated via i18n
- Arsenal, Barcelona, Real Madrid skins added
- Orange, Blue, Black-White skins added; `feyenoord` alias fixed
- All 12 skins visible in every editor dropdown
- Italian card types renamed: `soccer-live-classifica` → `soccer-live-standings`, `soccer-live-cannonieri` → `soccer-live-scorers`
- Cached data used consistently (Countdown, LiveMatch): `attributes?.` instead of `stateObj.attributes`
- Team editor filter shows `all_mixed` sensors alongside `next`
- Stub configs corrected for Team, Matches, Standings cards
- OfflineCache key prefix fixed: `soccerlive_cache_` → `soccer_live_`
- Releases consolidated: removed 50+ micro-releases, replaced with 3 milestone releases

## v3.2.0 (2026-06-15)

## v3.1.8 (2026-06-15)
- Fix entity ID prefix in all editors and stub configs: `soccerlive_` → `soccer_live_`
- Fix OfflineCache localStorage key prefix: `soccerlive_cache_` → `soccer_live_`
- Remove dead code in sensor.py (unused variables, commented-out debug logs)

## v3.1.7 (2026-06-15)
- Differentiated empty states: `renderInfoState` (grey, neutral) vs `renderCardError` (red, action required)
- Team card: detect wrong entity type vs off-season
- LiveCommentary: proper empty state when no live match is active
- LiveMatch: distinguish no-data (off-season) from no-live-match
- Countdown: off-season info state instead of generic error
- i18n: 8 new keys in all 7 languages (`ui.no_live_match`, `ui.off_season`, `ui.endpoint_unsupported`, `ui.wrong_entity_type` + hints)

## v3.1.6 (2026-06-15)
- XSS fix: escape `label` in `renderLineup()` (was unescaped `m.home_team` / `m.away_team`)

## v3.1.5 (2026-06-15)
- XSS fix: escape all ESPN data in popup `innerHTML` (Team card + Tutte card)
- Added `esc()` helper covering team names, scores, player names, formations, event text, h2h data

## v3.1.4 (2026-06-15)
- Fix offline cache fallback in Countdown and LiveMatch cards
- `stateObj` is truthy even when `state === 'unavailable'`, so `_cachedData` was never used

## v3.1.3 (2026-06-15)
- Fix offline cache fallback in Team card (same bug as v3.1.4)
- Clean up `package.json`: remove ~140 transitive dependencies; only `lit` and `lit-element` remain in `dependencies`
- Suppress webpack bundle size warning (338 KiB is expected for a lit-element card)

## v3.1.2 (2026-06-15)
- Translate loading timeout errors in all 7 languages
- Reset `_lastWeatherVenue` in `setConfig` so weather reloads when entity changes in editor
- Cap `_lastWritten` Map in OfflineCache at 50 entries

## v3.1.1 (2026-06-15)
- Loading timeout: show error after 10s if entity never responds (Team, Countdown, LiveMatch, MultiTeam)
- OfflineCache: skip `localStorage.setItem` when data hasn't changed (content-based throttle)

## v3.1.0 (2026-06-15)
- Add World Cup 2026 venues (16 stadiums: USA, Canada, Mexico)
- Add Champions League venues (40+ European stadiums)
- Add Turkish, Portuguese, Scottish club stadiums
- Weather only reloads when venue changes (was: every hass state update)
- Cap VENUE_CACHE and WEATHER_CACHE at 150 entries
- `getVenueCoordinates()` is now synchronous

## v3.0.9 (2026-06-15)
- Add all 18 Eredivisie stadiums to `KNOWN_VENUES` (including Sparta-Stadion Het Kasteel)
- Fix Philips Stadion coordinates (were wrong)
- Remove bogus `Sanako Stadium` entry

## v3.0.8 (2026-06-15)
- Disable browser-side Nominatim geocoding (caused CORS errors and 429 rate limiting)
- Weather badge now uses server-provided coordinates only, with hardcoded fallback list

## v3.0.7 (2026-06-15)
- Fix release tag: v3.0.6 pointed to wrong commit

## v3.0.6 (2026-06-15)
- Server-side stadium geocoding via integration (subsequently reverted in v3.0.8 due to CORS)

## v3.0.5 (2026-06-15)
- XSS fix: replace `innerHTML` with `textContent` in toast messages (Classifica, Tutte)
- Memory leak fix: `clearTimeout` in `disconnectedCallback` (Classifica, Tutte)
- JSDoc documentation on Team, Countdown, LiveMatch, MultiTeam cards
- i18n: replace hardcoded English strings with translation keys in MultiTeam card
- Mini Standings: replace hardcoded "No standings data" with `renderCardError()`

---

## v3.0.0 (2026-06-14)
- Initial Soccer Live Card release (fork of Calcio Live Card by @Bobsilvio)
- Phase 1: Loading states on all cards
- Phase 2: Error handling with `renderCardError` and `renderLoading`
- Phase 3: Editor UI improvements with `editor-helper.js`
- Phase 4: Offline fallback with localStorage caching (24h TTL)
- Phase 5: Push notifications documentation
- Phase 6: JSDoc type annotations
- Phase 7: Mobile responsiveness (media queries at 600px and 400px)
