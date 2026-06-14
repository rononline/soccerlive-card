# Changelog

## v3.0.0 (2026-06-14)

### ✨ Major Features
- **Phase 1: Loading States** - All cards show loading spinner while fetching data
- **Phase 2: Error Handling** - Friendly error messages with troubleshooting hints
- **Phase 3: Editor UI Improvements** - Unified editor styling with helper components
- **Phase 4: Offline Fallback** - localStorage caching for graceful degradation (24h TTL)
- **Phase 5: Push Notifications** - Full documentation on integration-based push notifications
- **Phase 6: Type Safety & JSDoc** - Comprehensive JSDoc comments for better IDE support
- **Phase 7: Mobile Responsiveness** - Media queries for tablets (600px) and phones (400px)

### 🐛 Bug Fixes
- Fixed Team card loading state infinite loop (duplicate updated() methods)
- Corrected attributes reference in cached data fallback

### 📊 Cards Improved
- Team Card - loading states, offline cache, mobile responsive, JSDoc
- Countdown Card - loading states, offline cache, mobile responsive
- LiveMatch Card - loading states, offline cache, mobile responsive
- MultiTeam Card - loading states, offline cache

### 📝 Editors Enhanced
All 8 card editors now use unified `editor-helper.js`:
- Team, Countdown, MultiTeam, LiveMatch, LiveCommentary, MiniStandings, TeamCompetitions, Lineup, Classifica, Tutte

### 🔄 Migration from v2.x
- v2.x maintained backward compatibility with old `calcio_live_` domain
- v3.0.0 uses `soccer_live` domain exclusively
- Existing `calcio_live_*` entities should be migrated to `soccer_live_*` equivalents
- HACS will auto-update cards to v3.0.0

### ⚠️ Breaking Changes
- Requires Home Assistant 2024.6+
- Old `calcio_live_` domain references removed
- Cards now require `sensor.soccer_live_*` entities

---

## v2.26.26 (2026-06-14)
- HOTFIX: Team card loading state bug

## v2.26.25 (2026-06-14)
- Phase 7: Mobile responsiveness with media queries

## v2.26.24 (2026-06-14)
- Phase 5+6: Push notifications documentation and JSDoc

## v2.26.23 (2026-06-14)
- Phase 4: Offline fallback with localStorage caching

## v2.26.22 (2026-06-14)
- Phase 3: Editor UI improvements with helper components

## v2.26.21 (2026-06-14)
- Phase 1: Add loading states to all main cards
