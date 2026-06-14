import { html, css } from 'lit-element';
import { getVenueCoordinates, getWeather } from './weather.js';

export const weatherBadgeStyles = css`
  .weather-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.1);
    font-size: 12px;
    color: var(--primary-text-color);
  }
  .weather-icon {
    font-size: 18px;
  }
  .weather-temp {
    font-weight: 600;
  }
  .weather-wind {
    font-size: 11px;
    opacity: 0.7;
  }
`;

export async function renderWeatherBadge(venue) {
  if (!venue || venue === 'N/A') return html``;

  try {
    const coords = await getVenueCoordinates(venue);
    if (!coords) return html``;

    const weather = await getWeather(coords.lat, coords.lon);
    if (!weather) return html``;

    return html`
      <div class="weather-badge" title="${venue}: ${weather.description}">
        <span class="weather-icon">${weather.icon}</span>
        <span class="weather-temp">${weather.temp}°</span>
        <span class="weather-wind" title="Wind speed">${weather.wind} km/h</span>
      </div>
    `;
  } catch (e) {
    console.warn('Weather badge error:', e);
    return html``;
  }
}

// Usage in a card:
// import { renderWeatherBadge, weatherBadgeStyles } from './weather-badge.js';
//
// class MyCard extends LitElement {
//   static get styles() {
//     return [weatherBadgeStyles, css`...`];
//   }
//
//   async connectedCallback() {
//     super.connectedCallback();
//     this.weatherBadge = await renderWeatherBadge(this.venue);
//     this.requestUpdate();
//   }
//
//   render() {
//     return html`
//       <div class="header">
//         ${this.weatherBadge}
//       </div>
//     `;
//   }
// }
