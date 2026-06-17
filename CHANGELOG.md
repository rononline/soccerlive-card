# Changelog

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
