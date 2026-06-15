# Changelog

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
