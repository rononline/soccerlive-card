# Changelog

## v3.9.8 (2026-06-17)
- Card type picker replaced with `ha-form` select (resolves ha-select event compatibility issues)
- `ha-select` and related dead code removed

## v3.9.5 (2026-06-17)
- `ha-select` picker (visual HA dropdown) replaces native `<select>`
- `customElements.define` guards added to all 14 sub-card files

## v3.9.4 (2026-06-17)
- CHANGELOG heading corrected to v3.9.3
- README common-options table: blockquote moved below table so `language` and `skin` rows render correctly
- `customElements.define` guards on wrapper elements (`soccer-live-card`, `soccer-live-card-editor`)
- `_errorCard()` unicode icon removed from source

## v3.9.3 (2026-06-17)
- Registry consolidated into single `CARD_REGISTRY` array; `TYPE_TO_ELEMENT`, `CARD_TYPES`, `CARD_EDITORS`, `LEGACY_ELEMENTS` all derived from it
- Unknown `card_type` shows explicit error card ("Unknown card_type: ...") instead of placeholder
- `scorers-editor.js`: import fixed from `'lit'` to `'lit-element'`
- `npm audit fix`: 0 vulnerabilities remaining
- README table updated: `card_type` column replaces legacy element names; legacy note added
- `_errorCard()` method implemented in wrapper

## v3.9.1 (2026-06-17)
- Card picker: `resolveElement()` restricted to known legacy element names only (no more arbitrary `soccer-live-*` strings accepted)
- Card picker: silent catch blocks now emit `console.warn` when entity is already set (easier debugging)
- Card picker: `type: WRAPPER_TYPE` hardcoded in `_dispatch()` — sub-editors can never override the wrapper identity
- Card picker: guard against double registration on cache/hot-reload (`customCards.some()` check)

## v3.9.0 (2026-06-17)
- Scorers card implemented (rank, headshot, player name, team logo, goal tally; offline cache; ESPN unavailable state)
- `getGridOptions()` delegated to sub-card for sections dashboards
- Editor remembers per-type config when switching card types (restored on switching back)
- `getStubConfig()` returns `{}` so picker starts with empty type selection
- README updated to new YAML format (`card_type: team` etc.)

## v3.8.3 (2026-06-17)
- Fix: `_dispatch()` now always includes `type: custom:soccer-live-card` so HA never loses the wrapper identity

## v3.8.2 (2026-06-17)
- Card picker: short card_type values (`team`, `standings`, etc.) — long names still accepted for backward compat
- Scorers and Live Commentary added to picker with editors
- Switching type now preserves `entity`, `skin`, `language`, `show_event_toasts`
- Emoji removed from type dropdown labels

## v3.8.1 (2026-06-17)
- Fix: `import from 'lit-element'` (was 'lit'), `{ type: Object }` property declarations
- Fix: sub-card `setConfig` exceptions caught when entity not yet configured

## v3.8.0 (2026-06-17)
- Single card picker entry (`custom:soccer-live-card`) replaces 14 separate entries
- `SoccerLiveCard` wrapper creates sub-card based on `card_type`
- `SoccerLiveCardEditor`: type dropdown first, then sub-card editor embedded below
- **Breaking change**: YAML now uses `type: custom:soccer-live-card` + `card_type: team`

## v3.7.3 (2026-06-17)
- Team card: `_toastTimer` cleared in `disconnectedCallback`
- `banner.innerHTML` replaced with `createElement/textContent`

## v3.7.2 (2026-06-17)
- Team card: `_toastTimer` cleared in `disconnectedCallback`
- Team card: `banner.innerHTML` replaced with `createElement/textContent` for style consistency
- CHANGELOG caught up after version bumps

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
