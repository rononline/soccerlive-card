# Changelog

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
