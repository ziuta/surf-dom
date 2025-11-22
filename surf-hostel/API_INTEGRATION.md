# 🌤️ API Integration - Weather & Surf Conditions

## Obecna Implementacja

Moduł `WeatherSurfModule.vue` aktualnie używa **mockup danych** zaciętych w komponencie. Można je łatwo zastąpić prawdziwymi danymi z API.

## Opcje API do Integracji

### 1. OpenWeatherMap API (REKOMENDOWANE)

Darmowe API dla pogody. Wymaga rejestracji.

**Setup:**

1. Rejestracja: https://openweathermap.org/api
2. Utwórz `.env.local`:
```
VITE_OPENWEATHER_API_KEY=your_api_key
VITE_OPENWEATHER_LAT=10.2408
VITE_OPENWEATHER_LON=107.0646
```

3. Zainstaluj axios:
```bash
npm install axios
```

4. Utwórz `src/services/weatherService.js`:
```javascript
import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const LAT = import.meta.env.VITE_OPENWEATHER_LAT
const LON = import.meta.env.VITE_OPENWEATHER_LON

export async function getWeatherData() {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat: LAT,
          lon: LON,
          appid: API_KEY,
          units: 'metric'
        }
      }
    )
    
    return {
      temperature: Math.round(response.data.main.temp),
      windSpeed: Math.round(response.data.wind.speed * 3.6), // m/s to km/h
      windDirection: getWindDirection(response.data.wind.deg),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
    }
  } catch (error) {
    console.error('Error fetching weather:', error)
    return null
  }
}

function getWindDirection(degrees) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const index = Math.round(degrees / 22.5) % 16
  return directions[index]
}
```

5. Użyj w komponencie:
```javascript
// WeatherSurfModule.vue
import { onMounted, reactive } from 'vue'
import { getWeatherData } from '@/services/weatherService'

const weatherData = reactive({
  temperature: 0,
  windSpeed: 0,
  // ... inne pola
})

onMounted(async () => {
  const data = await getWeatherData()
  if (data) {
    Object.assign(weatherData, data)
  }
})
```

### 2. Stormglass.io (DANE O FALACH)

Specjalizuje się w danych o warunkach wodnych.

**Setup:**

1. Rejestracja: https://stormglassapi.io
2. `.env.local`:
```
VITE_STORMGLASS_API_KEY=your_api_key
```

3. `src/services/stormglassService.js`:
```javascript
import axios from 'axios'

const API_KEY = import.meta.env.VITE_STORMGLASS_API_KEY
const LAT = 10.2408
const LON = 107.0646

export async function getSurfData() {
  try {
    const response = await axios.get(
      'https://api.stormglass.io/v2/weather/point',
      {
        params: {
          lat: LAT,
          lng: LON,
          params: 'waveHeight,swellDirection,swellPeriod,windSpeed',
        },
        headers: {
          'Authorization': API_KEY
        }
      }
    )
    
    const current = response.data.hours[0]
    
    return {
      waveHeight: current.waveHeight ? `${current.waveHeight[0].value.toFixed(1)}m` : 'N/A',
      swellDirection: current.swellDirection ? `${current.swellDirection[0].value}°` : 'N/A',
      swellPeriod: current.swellPeriod ? `${current.swellPeriod[0].value}s` : 'N/A',
      windSpeed: current.windSpeed ? current.windSpeed[0].value : 0,
    }
  } catch (error) {
    console.error('Error fetching surf data:', error)
    return null
  }
}
```

### 3. Magic Seaweed API (PROGNOZA SURFINGU)

Dane specjalistyczne dla surferów.

```javascript
// Wymaga płatnego subskrypcji, ale bardzo dokładne
const API_KEY = import.meta.env.VITE_MAGIC_SEAWEED_API_KEY
const SPOT_ID = 13050 // Vung Tau spot ID

export async function getMagicSeaweedForecast() {
  const response = await axios.get(
    `https://magicseaweed.com/api/forecasts/spot/${SPOT_ID}`,
    {
      params: {
        apikey: API_KEY
      }
    }
  )
  
  return response.data
}
```

### 4. Open-Meteo API (BEZARMOWE, BEZ KLUCZA API)

Publiczne API bez ograniczeń - świetne do testów!

```javascript
export async function getOpenMeteoWeather() {
  const LAT = 10.2408
  const LON = 107.0646
  
  const response = await axios.get(
    'https://api.open-meteo.com/v1/forecast',
    {
      params: {
        latitude: LAT,
        longitude: LON,
        current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m',
        timezone: 'auto',
      }
    }
  )
  
  return response.data.current
}
```

## Kompletny Przykład Integracji

Utwórz `src/composables/useWeather.js`:

```javascript
import { reactive, onMounted, ref } from 'vue'
import axios from 'axios'

export function useWeather() {
  const weatherData = reactive({
    temperature: 28,
    windSpeed: 12,
    windDirection: 'E',
    waveHeight: '1.5m',
    swellDirection: 'SE',
    swellPeriod: 8,
    loading: false,
    error: null,
  })

  onMounted(async () => {
    weatherData.loading = true
    try {
      // Pobierz dane
      const weatherResponse = await axios.get('API_URL_1')
      const surfResponse = await axios.get('API_URL_2')
      
      // Zaktualizuj reactive state
      Object.assign(weatherData, {
        temperature: weatherResponse.data.temperature,
        windSpeed: weatherResponse.data.wind_speed,
        // ... itd
      })
    } catch (err) {
      weatherData.error = err.message
      console.error('Weather fetch error:', err)
    } finally {
      weatherData.loading = false
    }
  })

  return { weatherData }
}
```

## Update WeatherSurfModule.vue

```vue
<script setup>
import { useWeather } from '@/composables/useWeather'

const { weatherData } = useWeather()
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-teal-50 to-gray-50">
    <div class="section-container">
      <!-- ... existing template ... -->
      
      <!-- Loading State -->
      <div v-if="weatherData.loading" class="text-center">
        <p class="text-gray-600">Ładowanie warunków surfingu...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="weatherData.error" class="text-center text-red-600">
        <p>Błąd przy ładowaniu danych: {{ weatherData.error }}</p>
      </div>

      <!-- Weather Data Display -->
      <div v-else>
        <!-- ... wyświetl weatherData.temperature, itp ... -->
      </div>
    </div>
  </section>
</template>
```

## CORS Issues - Rozwiązanie

Jeśli API zwraca CORS error, użyj CORS proxy:

```javascript
const corsProxy = 'https://cors-anywhere.herokuapp.com/'
const apiUrl = corsProxy + 'https://api.example.com/...'
```

Lub ustaw proxy w `vite.config.js`:

```javascript
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api.example.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
}
```

## Caching Strategy

Aby nie przeciążać API, dodaj caching:

```javascript
const CACHE_DURATION = 1800000 // 30 minut

let cachedData = null
let lastFetchTime = null

export async function getCachedWeather() {
  const now = Date.now()
  
  if (cachedData && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedData
  }
  
  cachedData = await getWeatherData()
  lastFetchTime = now
  return cachedData
}
```

## Testing API Integration

```bash
npm install -D vitest
```

`tests/weather.test.js`:

```javascript
import { describe, it, expect, vi } from 'vitest'
import { getWeatherData } from '@/services/weatherService'

describe('Weather Service', () => {
  it('should fetch weather data', async () => {
    const data = await getWeatherData()
    expect(data).toHaveProperty('temperature')
    expect(data).toHaveProperty('windSpeed')
  })
})
```

## Prognoza Tygodniowa

Dodaj drugi API call dla prognozy:

```javascript
// WeatherSurfModule.vue
const weeklyForecast = reactive([
  // Będą pobierane z API
])

onMounted(async () => {
  const forecast = await getWeeklyForecast()
  Object.assign(weeklyForecast, forecast)
})
```

## Security Best Practices

1. **Nikdy nie commituj API keys** - Użyj `.env.local`
2. **Waliduj dane** - Sprawdź typy danych
3. **Rate limiting** - Dodaj ochronę przed spam'em
4. **Error handling** - Graceful fallback
5. **HTTPS only** - Zawsze szyfruj dane w transit

## Monitoring & Logging

```javascript
export function useWeatherLogger() {
  const logFetch = (url, duration, success) => {
    console.log(`[Weather API] ${url} - ${duration}ms - ${success ? '✅' : '❌'}`)
  }

  return { logFetch }
}
```

---

**Gotowych API'ów! 🌊 Powodzenia z integracją!**
