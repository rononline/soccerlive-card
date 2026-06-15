// Simple localStorage-based cache for sensor data
// Allows cards to display last-known state when integration is offline

const CACHE_KEY_PREFIX = 'soccer_live_cache_';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const _lastWritten = new Map(); // entityId -> last JSON string written
const MAX_LAST_WRITTEN = 50;

export class OfflineCache {
  static set(entityId, data) {
    try {
      const json = JSON.stringify(data);
      if (_lastWritten.get(entityId) === json) return; // no change, skip write
      if (_lastWritten.size >= MAX_LAST_WRITTEN) {
        _lastWritten.delete(_lastWritten.keys().next().value);
      }
      _lastWritten.set(entityId, json);
      localStorage.setItem(
        CACHE_KEY_PREFIX + entityId,
        JSON.stringify({ timestamp: Date.now(), data })
      );
    } catch (e) {
      console.warn('Failed to cache:', e);
    }
  }

  static get(entityId) {
    try {
      const cached = localStorage.getItem(CACHE_KEY_PREFIX + entityId);
      if (!cached) return null;

      const { timestamp, data } = JSON.parse(cached);
      const age = Date.now() - timestamp;

      // Return cache if still valid
      if (age < CACHE_DURATION) {
        return { data, age, isCached: true };
      }

      // Expired - remove it
      this.clear(entityId);
      return null;
    } catch (e) {
      console.warn('Failed to read cache:', e);
      return null;
    }
  }

  static clear(entityId) {
    try {
      localStorage.removeItem(CACHE_KEY_PREFIX + entityId);
    } catch (e) {
      console.warn('Failed to clear cache:', e);
    }
  }

  static clearAll() {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(CACHE_KEY_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      console.warn('Failed to clear all cache:', e);
    }
  }

  static getAge(entityId) {
    const cached = localStorage.getItem(CACHE_KEY_PREFIX + entityId);
    if (!cached) return null;
    try {
      const { timestamp } = JSON.parse(cached);
      const ageMs = Date.now() - timestamp;
      const ageMin = Math.floor(ageMs / 60000);
      if (ageMin < 60) return `${ageMin}m ago`;
      const ageH = Math.floor(ageMin / 60);
      if (ageH < 24) return `${ageH}h ago`;
      const ageD = Math.floor(ageH / 24);
      return `${ageD}d ago`;
    } catch (e) {
      return null;
    }
  }
}

// Usage in a card:
// export class ExampleCard extends LitElement {
//   render() {
//     const stateObj = this.hass.states[this._config.entity];
//
//     if (!stateObj || stateObj.state === 'unavailable') {
//       // Try cached data
//       const cached = OfflineCache.get(this._config.entity);
//       if (cached) {
//         return html`
//           <div class="offline-notice">
//             📡 Offline — showing cached data from ${cached.age}
//           </div>
//           ${this._renderWithData(cached.data)}
//         `;
//       }
//       return renderCardError('📡', 'Sensor unavailable', '...');
//     }
//
//     // Cache the live data
//     OfflineCache.set(this._config.entity, stateObj.attributes);
//     return this._renderWithData(stateObj.attributes);
//   }
// }
