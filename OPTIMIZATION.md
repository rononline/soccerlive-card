# ⚡ Bundle Optimization & Performance Guide

## Current Bundle Size
- **Total**: 320 KB (minified)
- **Lines**: 5,238

## Largest Cards
1. **Team** (76 KB) — many event details, stats, animations
2. **Classifica** (56 KB) — standings table with zones, sorting
3. **Tutte** (48 KB) — day grouping, multiple match display
4. **Bracket** (40 KB) — SVG generation, tree layout

## Optimization Strategies

### 1. Lazy Loading (High Impact)
Currently all 14 cards load even if not used. Could implement:
- Dynamic imports via webpack code splitting
- Load cards on-demand (only when added to dashboard)
- **Potential savings**: 40-50% for typical users with 2-3 cards

```javascript
// Example (not implemented)
const TeamCard = () => import('./cards/Team/soccer-live-team.js');
```

### 2. Shared Utilities (Medium Impact)
Some code duplication between cards:
- Extract common match rendering functions
- Shared date formatting logic
- Common animation mixins
- **Potential savings**: 10-15%

### 3. SVG Optimization (Low Impact)
Bracket card generates SVG connector lines. Could:
- Cache SVG paths
- Use CSS for simple connectors instead
- **Potential savings**: 2-3%

### 4. Translation Size (Low Impact)
i18n object is in every bundle. Could:
- Load translations separately
- Only include active language
- **Potential savings**: 5-10%

## Performance Tips

### Card Load Time
Add `renderLoading()` helper while data fetches:
```javascript
if (!data) return renderLoading('Fetching match data...');
```

### Network Optimization
- Use `Accept-Language: en` header to reduce ESPN API responses
- Cache standings/bracket data longer (less change)
- Debounce rapid updates

### UI Performance
- Use `reverse()` on comment lists (newer first) instead of re-render
- Memoize computed properties (team colors, logos)
- Defer non-critical DOM updates

### Detection in HA
Use `hasUpdated()` to skip renders if props unchanged:
```javascript
shouldUpdate(changedProps) {
  return changedProps.has('hass') || changedProps.has('_config');
}
```

## Recommendation
For production, implement **lazy loading** (#1). It gives:
- 40-50% size reduction for typical users
- No user-facing changes
- Minimal code changes (webpack already configured)

Current 320 KB is acceptable for feature set, but lazy loading would bring it to ~150-200 KB.

## Monitoring
Track bundle size with:
```bash
npm run build && du -h dist/soccer-live-card.bundle.js
```

Set alerts if bundle grows >350 KB.
