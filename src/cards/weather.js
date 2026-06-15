// Weather display for match venues
// Uses Open-Meteo API (no API key required)
// Caches coordinates to minimize API calls

const VENUE_CACHE = new Map();
const WEATHER_CACHE = new Map();
const CACHE_DURATION = 3600000; // 1 hour

// Common stadium coordinates (venue name -> lat/lon)
const KNOWN_VENUES = {
  // Eredivisie
  'Johan Cruijff Arena': { lat: 52.3145, lon: 4.9425 },         // Ajax
  'Johan Cruijff ArenA': { lat: 52.3145, lon: 4.9425 },
  'Philips Stadion': { lat: 51.4424, lon: 5.4675 },             // PSV
  'Stadion Feyenoord': { lat: 51.8896, lon: 4.5219 },           // Feyenoord
  'Feyenoord Stadium': { lat: 51.8896, lon: 4.5219 },
  'De Kuip': { lat: 51.8896, lon: 4.5219 },
  'Stadion de Kuip': { lat: 51.8896, lon: 4.5219 },
  'AFAS Stadion': { lat: 52.6281, lon: 4.7483 },                // AZ
  'Stadion Galgenwaard': { lat: 52.0779, lon: 5.1456 },         // FC Utrecht
  'De Grolsch Veste': { lat: 52.2373, lon: 6.8296 },            // FC Twente
  'Goffert Stadion': { lat: 51.8307, lon: 5.8606 },             // NEC Nijmegen
  'Abe Lenstra Stadion': { lat: 52.9584, lon: 5.9141 },         // sc Heerenveen
  'Sparta-Stadion Het Kasteel': { lat: 51.9171, lon: 4.4658 },  // Sparta Rotterdam
  'Het Kasteel': { lat: 51.9171, lon: 4.4658 },
  'De Adelaarshorst': { lat: 52.2488, lon: 6.1737 },            // Go Ahead Eagles
  'Polman Stadion': { lat: 52.3514, lon: 6.6582 },              // Heracles Almelo
  'Mandemakers Stadion': { lat: 51.6853, lon: 5.0535 },         // RKC Waalwijk
  'Euroborg': { lat: 53.1822, lon: 6.5942 },                    // FC Groningen
  'MAC³PARK Stadion': { lat: 52.5143, lon: 6.1006 },            // PEC Zwolle
  'MACPARK Stadion': { lat: 52.5143, lon: 6.1006 },
  'Yanmar Stadion': { lat: 52.3893, lon: 5.2152 },              // Almere City
  'Rat Verlegh Stadion': { lat: 51.5747, lon: 4.7716 },         // NAC Breda
  'Koning Willem II Stadion': { lat: 51.5547, lon: 5.0917 },    // Willem II
  'Fortuna Sittard Stadion': { lat: 51.0011, lon: 5.8683 },     // Fortuna Sittard
  'GelreDome': { lat: 51.9653, lon: 5.9111 },                   // Vitesse
  'Kras Stadion': { lat: 52.4436, lon: 4.6264 },                // SC Telstar (Eerste Divisie)
  'De Vijverberg': { lat: 51.9630, lon: 6.2872 },               // De Graafschap
  'Cambuur Stadion': { lat: 53.2112, lon: 5.8102 },             // SC Cambuur
  'Parkstad Limburg Stadion': { lat: 50.9081, lon: 5.9928 },    // Roda JC
  'Cars Jeans Stadion': { lat: 52.0667, lon: 4.3167 },          // ADO Den Haag

  // International
  'Allianz Arena': { lat: 48.2188, lon: 11.6247 },
  'Signal Iduna Park': { lat: 51.4532, lon: 7.4516 },
  'Stamford Bridge': { lat: 51.4821, lon: -0.1910 },
  'Old Trafford': { lat: 53.4632, lon: -2.2910 },
  'Camp Nou': { lat: 41.3815, lon: 2.1229 },
  'Spotify Camp Nou': { lat: 41.3815, lon: 2.1229 },
  'Santiago Bernabéu': { lat: 40.4530, lon: -3.6883 },
  'San Mamés': { lat: 43.2627, lon: -2.9385 },
};

async function getVenueCoordinates(venueName) {
  if (!venueName || venueName === 'N/A') return null;

  // Check local cache first
  if (VENUE_CACHE.has(venueName)) {
    return VENUE_CACHE.get(venueName);
  }

  // Check known venues only - NO browser-side geocoding
  // Server provides venue_lat/venue_lon via integration
  if (KNOWN_VENUES[venueName]) {
    VENUE_CACHE.set(venueName, KNOWN_VENUES[venueName]);
    return KNOWN_VENUES[venueName];
  }

  // No fallback to browser Nominatim - coordinates must come from server
  return null;
}

async function getWeather(lat, lon) {
  const cacheKey = `${lat},${lon}`;

  // Check cache
  if (WEATHER_CACHE.has(cacheKey)) {
    const cached = WEATHER_CACHE.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data;
    }
  }

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`
    );
    const data = await response.json();
    if (data.current) {
      const windKmh = data.current.wind_speed_10m;
      const weather = {
        temp: Math.round(data.current.temperature_2m),
        code: data.current.weather_code,
        wind: kmhToBeaufort(windKmh),
        wind_unit: 'BFT',
        icon: getWeatherIcon(data.current.weather_code),
        description: getWeatherDescription(data.current.weather_code),
        timestamp: Date.now()
      };
      WEATHER_CACHE.set(cacheKey, { data: weather, timestamp: Date.now() });
      return weather;
    }
  } catch (e) {
    console.warn('Weather fetch failed:', e);
  }

  return null;
}

function kmhToBeaufort(kmh) {
  if (kmh < 1) return 0;
  if (kmh < 6) return 1;
  if (kmh < 12) return 2;
  if (kmh < 20) return 3;
  if (kmh < 29) return 4;
  if (kmh < 39) return 5;
  if (kmh < 50) return 6;
  if (kmh < 62) return 7;
  if (kmh < 75) return 8;
  if (kmh < 89) return 9;
  if (kmh < 103) return 10;
  if (kmh < 118) return 11;
  return 12;
}

function getWeatherIcon(code) {
  // WMO Weather interpretation codes
  if (!code || code === 0 || code === 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code === 51 || code === 53 || code === 55) return '🌧️';
  if (code === 61 || code === 63 || code === 65) return '🌧️';
  if (code === 71 || code === 73 || code === 75) return '🌨️';
  if (code === 77) return '🌨️';
  if (code === 80 || code === 81 || code === 82) return '🌧️';
  if (code === 85 || code === 86) return '🌨️';
  if (code === 95 || code === 96 || code === 99) return '⛈️';
  return '🌤️';
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'Clear',
    1: 'Mostly clear',
    2: 'Partly cloudy',
    3: 'Cloudy',
    45: 'Foggy',
    48: 'Foggy',
    51: 'Light rain',
    53: 'Moderate rain',
    55: 'Heavy rain',
    61: 'Rain',
    63: 'Heavy rain',
    65: 'Very heavy rain',
    71: 'Light snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    80: 'Showers',
    82: 'Heavy showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm + hail',
    99: 'Thunderstorm + heavy hail'
  };
  return descriptions[code] || 'Unknown';
}

export { getVenueCoordinates, getWeather, KNOWN_VENUES };
