// Weather display for match venues
// Uses Open-Meteo API (no API key required)
// Caches coordinates to minimize API calls

const VENUE_CACHE = new Map();
const WEATHER_CACHE = new Map();
const WEATHER_INFLIGHT = new Map(); // cacheKey -> pending fetch Promise (de-dupes concurrent requests)
const CACHE_DURATION = 3600000; // 1 hour
const MAX_CACHE_SIZE = 150;

// Stadium coordinates by venue name (as returned by ESPN API)
const KNOWN_VENUES = {
  // === EREDIVISIE ===
  'Johan Cruijff Arena': { lat: 52.3145, lon: 4.9425 },
  'Johan Cruijff ArenA': { lat: 52.3145, lon: 4.9425 },
  'Philips Stadion': { lat: 51.4424, lon: 5.4675 },
  'Stadion Feyenoord': { lat: 51.8896, lon: 4.5219 },
  'Feyenoord Stadium': { lat: 51.8896, lon: 4.5219 },
  'De Kuip': { lat: 51.8896, lon: 4.5219 },
  'Stadion de Kuip': { lat: 51.8896, lon: 4.5219 },
  'AFAS Stadion': { lat: 52.6281, lon: 4.7483 },
  'Stadion Galgenwaard': { lat: 52.0779, lon: 5.1456 },
  'De Grolsch Veste': { lat: 52.2373, lon: 6.8296 },
  'Goffert Stadion': { lat: 51.8307, lon: 5.8606 },
  'Abe Lenstra Stadion': { lat: 52.9584, lon: 5.9141 },
  'Sparta-Stadion Het Kasteel': { lat: 51.9171, lon: 4.4658 },
  'Sparta Stadion Het Kasteel': { lat: 51.9171, lon: 4.4658 },  // API-Football naming (no hyphen)
  'Het Kasteel': { lat: 51.9171, lon: 4.4658 },
  'De Adelaarshorst': { lat: 52.2488, lon: 6.1737 },
  'Polman Stadion': { lat: 52.3514, lon: 6.6582 },
  'Mandemakers Stadion': { lat: 51.6853, lon: 5.0535 },
  'Euroborg': { lat: 53.1822, lon: 6.5942 },
  'MAC³PARK Stadion': { lat: 52.5143, lon: 6.1006 },
  'MACPARK Stadion': { lat: 52.5143, lon: 6.1006 },
  'Yanmar Stadion': { lat: 52.3893, lon: 5.2152 },
  'Rat Verlegh Stadion': { lat: 51.5747, lon: 4.7716 },
  'Koning Willem II Stadion': { lat: 51.5547, lon: 5.0917 },
  'Fortuna Sittard Stadion': { lat: 51.0011, lon: 5.8683 },
  'GelreDome': { lat: 51.9653, lon: 5.9111 },
  'Kras Stadion': { lat: 52.4436, lon: 4.6264 },
  'De Vijverberg': { lat: 51.9630, lon: 6.2872 },
  'Cambuur Stadion': { lat: 53.2112, lon: 5.8102 },
  'Parkstad Limburg Stadion': { lat: 50.9081, lon: 5.9928 },
  'Cars Jeans Stadion': { lat: 52.0667, lon: 4.3167 },
  'BENU Stadion': { lat: 52.0667, lon: 4.3167 },  // ADO Den Haag (renamed)
  'ADO Den Haag Stadium': { lat: 52.0667, lon: 4.3167 },  // ESPN naming for ADO's stadium
  'Bingoal Stadion': { lat: 52.0667, lon: 4.3167 },  // ADO Den Haag (renamed)
  // Name variants seen in live ESPN/API-Football venue fields:
  'Goffertstadion': { lat: 51.8307, lon: 5.8606 },  // NEC Nijmegen (one-word variant of Goffert Stadion)
  'Sportcomplex Varkenoord': { lat: 51.8896, lon: 4.5219 },  // Feyenoord training ground, adjacent to De Kuip
  'Varkenoord': { lat: 51.8896, lon: 4.5219 },
  'M-Scores Stadion': { lat: 51.8139, lon: 4.6836 },  // FC Dordrecht (Stadion Krommedijk, sponsor name)
  'Stadion Krommedijk': { lat: 51.8139, lon: 4.6836 },  // FC Dordrecht
  'Riwal Hoogwerkers Stadion': { lat: 51.8139, lon: 4.6836 },  // FC Dordrecht (former name)
  'Krommedijk': { lat: 51.8139, lon: 4.6836 },
  'Kooi Stadion': { lat: 53.2112, lon: 5.8102 },  // SC Cambuur (Leeuwarden)
  'Kooi Stadium': { lat: 53.2112, lon: 5.8102 },
  'Leeuwarden Stadion': { lat: 53.2112, lon: 5.8102 },  // SC Cambuur
  '711 Stadion': { lat: 52.4592, lon: 4.6556 },  // Telstar (Velsen-Zuid)
  'BUKO Stadion': { lat: 52.4592, lon: 4.6556 },  // Telstar (API-Football naming)
  'Rabobank IJmond Stadion': { lat: 52.4592, lon: 4.6556 },  // Telstar
  'WerkTalent Stadion': { lat: 52.0667, lon: 4.3167 },  // ADO Den Haag (API-Football naming)
  'Stadion Woudestein': { lat: 51.9308, lon: 4.5386 },  // Excelsior (Rotterdam)
  'Van Donge & De Roo Stadion': { lat: 51.9308, lon: 4.5386 },  // Excelsior
  'Goffert Stadium': { lat: 51.8307, lon: 5.8606 },  // NEC (English variant)
  'Grolsch Veste': { lat: 52.2373, lon: 6.8296 },  // FC Twente (without "De")
  'Abe Lenstra Stadium': { lat: 52.9584, lon: 5.9141 },  // Heerenveen (English variant)
  'Philips Stadium': { lat: 51.4424, lon: 5.4675 },  // PSV (English variant)
  'Hitachi Capital Mobility Stadion': { lat: 53.1822, lon: 6.5942 },  // FC Groningen (Euroborg sponsor name)
  'Koning Willem II Stadium': { lat: 51.5547, lon: 5.0917 },  // Willem II (English variant)
  'Galgenwaard': { lat: 52.0779, lon: 5.1456 },  // FC Utrecht (without "Stadion")

  // === FIFA WORLD CUP 2026 (USA / Canada / Mexico) ===
  'MetLife Stadium': { lat: 40.8135, lon: -74.0745 },          // New York/New Jersey
  'AT&T Stadium': { lat: 32.7480, lon: -97.0927 },             // Dallas
  'SoFi Stadium': { lat: 33.9535, lon: -118.3392 },            // Los Angeles
  'Levi\'s Stadium': { lat: 37.4032, lon: -121.9699 },         // San Francisco
  'Hard Rock Stadium': { lat: 25.9580, lon: -80.2389 },        // Miami
  'Lincoln Financial Field': { lat: 39.9008, lon: -75.1675 },  // Philadelphia
  'Arrowhead Stadium': { lat: 39.0490, lon: -94.4839 },        // Kansas City
  'GEHA Field at Arrowhead Stadium': { lat: 39.0490, lon: -94.4839 }, // Kansas City (WC naming)
  'NRG Stadium': { lat: 29.6847, lon: -95.4107 },              // Houston
  'Mercedes-Benz Stadium': { lat: 33.7554, lon: -84.4008 },    // Atlanta
  'Estadio Banorte': { lat: 19.3030, lon: -99.1506 },          // Mexico City (Azteca renamed for WC)
  'Allegiant Stadium': { lat: 36.0908, lon: -115.1839 },       // Las Vegas
  'Gillette Stadium': { lat: 42.0909, lon: -71.2643 },         // Boston
  'Century Link Field': { lat: 47.5952, lon: -122.3316 },      // Seattle
  'Lumen Field': { lat: 47.5952, lon: -122.3316 },
  'BC Place': { lat: 49.2768, lon: -123.1117 },                // Vancouver
  'BMO Field': { lat: 43.6334, lon: -79.4179 },                // Toronto
  'Estadio Azteca': { lat: 19.3030, lon: -99.1506 },           // Mexico City
  'Estadio BBVA': { lat: 25.6694, lon: -100.2436 },            // Monterrey
  'Estadio Akron': { lat: 20.6854, lon: -103.4673 },           // Guadalajara

  // === UEFA CHAMPIONS LEAGUE (common venues) ===
  'Allianz Arena': { lat: 48.2188, lon: 11.6247 },             // Bayern München
  'Signal Iduna Park': { lat: 51.4532, lon: 7.4516 },          // Borussia Dortmund
  'Olympiastadion': { lat: 52.5147, lon: 13.2395 },            // Hertha BSC / Berlin finales
  'Wembley Stadium': { lat: 51.5560, lon: -0.2796 },           // Engeland
  'Tottenham Hotspur Stadium': { lat: 51.6043, lon: -0.0665 },
  'Emirates Stadium': { lat: 51.5549, lon: -0.1084 },          // Arsenal
  'Stamford Bridge': { lat: 51.4821, lon: -0.1910 },           // Chelsea
  'Old Trafford': { lat: 53.4632, lon: -2.2910 },              // Manchester United
  'Etihad Stadium': { lat: 53.4831, lon: -2.2004 },            // Manchester City
  'Anfield': { lat: 53.4308, lon: -2.9608 },                   // Liverpool
  'Villa Park': { lat: 52.5092, lon: -1.8847 },                // Aston Villa
  'Camp Nou': { lat: 41.3815, lon: 2.1229 },                   // Barcelona
  'Spotify Camp Nou': { lat: 41.3815, lon: 2.1229 },
  'Estadi Olímpic Lluís Companys': { lat: 41.3643, lon: 2.1580 }, // Barcelona tijdelijk
  'Santiago Bernabéu': { lat: 40.4530, lon: -3.6883 },         // Real Madrid
  'Civitas Metropolitano': { lat: 40.4361, lon: -3.5995 },     // Atlético Madrid
  'San Mamés': { lat: 43.2627, lon: -2.9385 },                 // Athletic Bilbao
  'Estadio de La Cerámica': { lat: 39.9441, lon: -0.1042 },    // Villarreal
  'Mestalla': { lat: 39.4747, lon: -0.3583 },                  // Valencia
  'Parc des Princes': { lat: 48.8414, lon: 2.2530 },           // PSG
  'Stade de France': { lat: 48.9244, lon: 2.3601 },
  'Groupama Stadium': { lat: 45.7654, lon: 4.9825 },           // Olympique Lyon
  'Vélodrome': { lat: 43.2697, lon: 5.3961 },                  // Olympique Marseille
  'Stade Vélodrome': { lat: 43.2697, lon: 5.3961 },
  'San Siro': { lat: 45.4781, lon: 9.1240 },                   // Milan / Inter
  'Stadio Giuseppe Meazza': { lat: 45.4781, lon: 9.1240 },
  'Allianz Stadium': { lat: 45.1096, lon: 7.6412 },            // Juventus
  'Stadio Olimpico': { lat: 41.9341, lon: 12.4547 },           // Roma / Lazio
  'Stadio Diego Armando Maradona': { lat: 40.8279, lon: 14.1930 }, // Napoli
  'BayArena': { lat: 51.0382, lon: 7.0023 },                   // Bayer Leverkusen
  'Red Bull Arena': { lat: 51.3457, lon: 12.3484 },            // RB Leipzig
  'Volksparkstadion': { lat: 53.5875, lon: 9.8985 },           // Hamburg / HSV
  'Volksparkstadion Hamburg': { lat: 53.5875, lon: 9.8985 },
  'Stadion Feijenoord': { lat: 51.8896, lon: 4.5219 },
  'Estádio da Luz': { lat: 38.7526, lon: -9.1849 },            // Benfica
  'Estádio José Alvalade': { lat: 38.7613, lon: -9.1609 },     // Sporting CP
  'Estádio do Dragão': { lat: 41.1611, lon: -8.5834 },         // FC Porto
  'Celtic Park': { lat: 55.8491, lon: -4.2051 },               // Celtic
  'Ibrox Stadium': { lat: 55.8508, lon: -4.3095 },             // Rangers
  'Johan Cruyff Arena': { lat: 52.3145, lon: 4.9425 },
  'PSV Stadion': { lat: 51.4424, lon: 5.4675 },
  'Fenerbahçe Şükrü Saracoğlu': { lat: 40.9836, lon: 29.0333 },
  'Türk Telekom Stadium': { lat: 41.1066, lon: 29.0103 },      // Galatasaray
  'Vodafone Park': { lat: 41.0038, lon: 28.9967 },             // Beşiktaş
};

function _evictCacheIfNeeded(cache) {
  if (cache.size >= MAX_CACHE_SIZE) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
}

function getVenueCoordinates(venueName) {
  if (!venueName || venueName === 'N/A') return null;

  if (VENUE_CACHE.has(venueName)) return VENUE_CACHE.get(venueName);

  let coords = KNOWN_VENUES[venueName] || null;
  // Some providers append a pitch/field number to a training-ground venue
  // (e.g. API-Football's "Sportcomplex Varkenoord 1"); retry against the base
  // name when the exact string isn't a known venue.
  if (!coords) {
    const base = venueName.replace(/\s+\d+$/, '');
    if (base !== venueName) coords = KNOWN_VENUES[base] || null;
  }
  if (coords) {
    _evictCacheIfNeeded(VENUE_CACHE);
    VENUE_CACHE.set(venueName, coords);
  }
  return coords;
}

function _buildWeather(temperature, weather_code, wind_speed, forecast = false) {
  return {
    temp: Math.round(temperature),
    code: weather_code,
    wind: kmhToBeaufort(wind_speed),
    wind_unit: 'BFT',
    icon: getWeatherIcon(weather_code),
    description: getWeatherDescription(weather_code),
    forecast,
    timestamp: Date.now()
  };
}

// Decide whether to show a kickoff-time forecast (returns unix seconds) or the
// current conditions (null). Matches within ~1h, already started/past, or
// beyond the Open-Meteo forecast horizon fall back to current weather.
function _forecastTargetSeconds(kickoffISO) {
  if (!kickoffISO) return null;
  const t = Date.parse(kickoffISO);
  if (Number.isNaN(t)) return null;
  const ahead = t - Date.now();
  if (ahead <= 3600000) return null;        // live / imminent / past → current
  if (ahead > 16 * 86400000) return null;   // beyond forecast horizon → current
  return Math.floor(t / 1000);
}

async function _fetchCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`
  );
  const data = await response.json();
  if (data.current) {
    return _buildWeather(data.current.temperature_2m, data.current.weather_code, data.current.wind_speed_10m, false);
  }
  return null;
}

async function _fetchForecastWeather(lat, lon, targetSeconds) {
  // Query the UTC day of kickoff in unixtime, then pick the hour nearest kickoff.
  const day = new Date(targetSeconds * 1000).toISOString().slice(0, 10);
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code,wind_speed_10m&timezone=GMT&timeformat=unixtime&start_date=${day}&end_date=${day}`
  );
  const data = await response.json();
  const h = data.hourly;
  if (!h || !Array.isArray(h.time) || !h.time.length) return null;
  let best = 0, bestDiff = Infinity;
  for (let i = 0; i < h.time.length; i++) {
    const diff = Math.abs(h.time[i] - targetSeconds);
    if (diff < bestDiff) { bestDiff = diff; best = i; }
  }
  return _buildWeather(h.temperature_2m[best], h.weather_code[best], h.wind_speed_10m[best], true);
}

async function getWeather(lat, lon, kickoffISO = null) {
  const target = _forecastTargetSeconds(kickoffISO);
  const cacheKey = target ? `${lat},${lon},@${target}` : `${lat},${lon}`;

  if (WEATHER_CACHE.has(cacheKey)) {
    const cached = WEATHER_CACHE.get(cacheKey);
    if (Date.now() - cached.timestamp < CACHE_DURATION) return cached.data;
  }

  // Share a single in-flight request across concurrent callers for the same
  // venue+time, so multiple cards mounting at once don't each hit the API.
  if (WEATHER_INFLIGHT.has(cacheKey)) return WEATHER_INFLIGHT.get(cacheKey);

  const request = (async () => {
    try {
      const weather = target
        ? await _fetchForecastWeather(lat, lon, target)
        : await _fetchCurrentWeather(lat, lon);
      if (weather) {
        _evictCacheIfNeeded(WEATHER_CACHE);
        WEATHER_CACHE.set(cacheKey, { data: weather, timestamp: Date.now() });
        return weather;
      }
    } catch (e) {
      console.warn('Weather fetch failed:', e);
    } finally {
      WEATHER_INFLIGHT.delete(cacheKey);
    }
    return null;
  })();

  WEATHER_INFLIGHT.set(cacheKey, request);
  return request;
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
  if (!code || code === 0 || code === 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 55) return '🌦️';
  if (code >= 61 && code <= 65) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code >= 80 && code <= 82) return '🌧️';
  if (code === 85 || code === 86) return '🌨️';
  if (code === 95 || code === 96 || code === 99) return '⛈️';
  return '🌤️';
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Cloudy',
    45: 'Foggy', 48: 'Foggy',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
    61: 'Rain', 63: 'Heavy rain', 65: 'Very heavy rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 77: 'Snow grains',
    80: 'Showers', 81: 'Heavy showers', 82: 'Violent showers',
    85: 'Snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm + hail', 99: 'Thunderstorm + heavy hail'
  };
  return descriptions[code] || 'Unknown';
}

export { getVenueCoordinates, getWeather, KNOWN_VENUES };
