<template>
  <section class="py-16 bg-gradient-to-br from-teal-50 to-gray-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">Today's Surf Conditions</h2>

      <!-- Weather/Surf Module Card - Optimized for Screenshot -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-4 md:p-12 shadow-2xl border-4 border-yellow-400">
          <!-- Header -->
          <div class="text-center mb-4 md:mb-8 pb-4 md:pb-6 border-b-2 border-yellow-300">
            <h3 class="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">
              🏄 Surf DOM VUNG TAU 🏄
            </h3>
            <p class="text-teal-100 text-base md:text-lg">Vung Tau, Vietnam</p>
            <p class="text-yellow-200 text-sm md:text-base mt-1 md:mt-2">
              Updated: {{ currentDate }}
            </p>
            <div v-if="isLoading" class="mt-2 text-yellow-300 text-sm animate-pulse">
              ⏳ Pobieranie danych pogody...
            </div>
            <div v-else class="mt-2 text-teal-100 text-xs md:text-sm">
              Ostatnia aktualizacja: {{ lastUpdate }} | Następna: {{ autoUpdateCountdown }}
            </div>
          </div>

          <!-- Main Weather Info Grid -->
          <div v-if="!isLoading" class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
            <!-- Temperature -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">☀️</p>
              <p class="text-white text-sm md:text-base font-semibold">Temperature</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.temperature }}°C</p>
            </div>

            <!-- Wind -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">💨</p>
              <p class="text-white text-sm md:text-base font-semibold">Wind</p>
              <p class="text-yellow-300 text-base md:text-xl font-bold">{{ weatherData.windSpeed }} km/h</p>
              <p class="text-teal-100 text-sm">{{ weatherData.windDirection }}</p>
            </div>

            <!-- Wave Height -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🌊</p>
              <p class="text-white text-sm md:text-base font-semibold">Wave Height</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.waveHeight }}</p>
            </div>

            <!-- Swell Direction -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🧭</p>
              <p class="text-white text-sm md:text-base font-semibold">Swell Direction</p>
              <p class="text-yellow-300 text-base md:text-xl font-bold">{{ weatherData.swellDirection }}</p>
            </div>

            <!-- Swell Period -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">⏱️</p>
              <p class="text-white text-sm md:text-base font-semibold">Swell Period</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.swellPeriod }}s</p>
            </div>

            <!-- Tide -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🌀</p>
              <p class="text-white text-sm md:text-base font-semibold">Tide</p>
              <p class="text-yellow-300 text-base md:text-lg font-bold">{{ weatherData.tide }}</p>
            </div>
          </div>
          
          <!-- Loading State -->
          <div v-else class="flex justify-center items-center py-8">
            <div class="text-center">
              <p class="text-white text-lg mb-4">⏳ Pobieranie danych pogody z API...</p>
              <div class="inline-block animate-spin">
                <p class="text-yellow-300 text-4xl">🌊</p>
              </div>
            </div>
          </div>

          <!-- Quality Assessment -->
          <div v-if="!isLoading" class="bg-teal-700 bg-opacity-50 rounded-lg p-3 md:p-6 mb-3 md:mb-6 border-2 border-yellow-300">
            <h4 class="text-yellow-300 font-bold text-sm md:text-lg mb-2 md:mb-3">📊 Surf Quality</h4>
            <div class="space-y-1 md:space-y-2">
              <div class="flex items-center justify-between text-white text-xs md:text-base">
                <span>Difficulty Level:</span>
                <span class="text-yellow-300 font-bold">{{ weatherData.difficulty }}</span>
              </div>
              <div class="flex items-center justify-between text-white text-xs md:text-base">
                <span>Best Time:</span>
                <span class="text-yellow-300 font-bold text-xs md:text-base">{{ weatherData.bestTime }}</span>
              </div>
              <div class="flex items-center justify-between text-white text-xs md:text-base">
                <span>Crowding:</span>
                <span class="text-yellow-300 font-bold text-xs md:text-base">{{ weatherData.crowding }}</span>
              </div>
            </div>
          </div>

          <!-- Recommendation block removed (not permanent). If you want dynamic recommendations, we can fetch real data and render conditionally. -->

          <!-- Footer with Social Icons -->
          <div class="mt-4 md:mt-8 pt-3 md:pt-6 border-t-2 border-yellow-300 flex justify-center gap-4 md:gap-6">
            <a href="#" class="text-yellow-300 hover:text-white transition-colors">
              <span class="text-lg md:text-2xl">📱 Instagram</span>
            </a>
            <a href="#" class="text-yellow-300 hover:text-white transition-colors">
              <span class="text-lg md:text-2xl">👥 Facebook</span>
            </a>
          </div>
        </div>

        <!-- Info Text Below -->
        <p class="text-center text-gray-700 mt-4 md:mt-6 font-semibold text-base md:text-lg">
          💡 Updated every 3 hours | Check regularly
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted, ref } from 'vue'

const currentDate = ref('')
const isLoading = ref(true)
const lastUpdate = ref('')
const autoUpdateCountdown = ref(0)

// Aktualizuj datę w realtime
const updateCurrentDate = () => {
  currentDate.value = new Date().toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const weatherData = reactive({
  temperature: 28,
  windSpeed: 12,
  windDirection: 'E (East)',
  waveHeight: '1.5 - 2.0 m',
  swellDirection: 'SE (Southeast)',
  swellPeriod: 8,
  tide: 'Incoming',
  difficulty: 'Intermediate',
  bestTime: '06:00 - 09:00 & 16:00 - 18:30',
  crowding: 'Moderate (4-6 surfers)',
  recommendation: 'Excellent conditions today! Perfect for intermediate, good for beginners.',
})

// Funkcja do pobierania danych z Open-Meteo API (darmowe, bez klucza)
const fetchWeatherData = async () => {
  isLoading.value = true
  try {
    // Open-Meteo API dla Vung Tau (10.3399, 107.0636)
    const response = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=10.3399&longitude=107.0636&current=temperature_2m,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation,wind_speed_10m&timezone=Asia/Ho_Chi_Minh&forecast_days=1'
    )
    
    if (!response.ok) throw new Error('API Error')
    
    const data = await response.json()
    const current = data.current
    
    // Aktualizuj dane pogody z rzeczywistego API
    weatherData.temperature = Math.round(current.temperature_2m)
    weatherData.windSpeed = Math.round(current.wind_speed_10m)
    weatherData.windDirection = getWindDirection(current.wind_direction_10m)
    
    // Symuluj wysokość fal na podstawie prędkości wiatru (realnie potrzeba specjalnego API)
    const waveHeightBase = (current.wind_speed_10m / 10) * 0.5 + 0.8
    weatherData.waveHeight = `${(waveHeightBase * 0.8).toFixed(1)} - ${waveHeightBase.toFixed(1)} m`
    
    // Dynamiczna ocena trudności na podstawie warunków
    const difficulty = calculateDifficulty(current.wind_speed_10m, waveHeightBase)
    weatherData.difficulty = difficulty
    
    // Aktualizuj crowding na podstawie pory dnia
    const hour = new Date().getHours()
    weatherData.crowding = getCrowdingInfo(hour)
    
    // Aktualizuj najlepszy czas na podstawie pory dnia
    weatherData.bestTime = getBestSurfTime(hour)
    
    // Aktualizuj tide (symulacja 6-godz. cyklu)
    const tidePhase = (Date.now() / (6 * 60 * 60 * 1000)) % 2
    weatherData.tide = tidePhase < 1 ? 'Incoming' : 'Outgoing'
    
    lastUpdate.value = new Date().toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    
    updateCurrentDate()
    
  } catch (error) {
    console.error('Błąd pobierania pogody:', error)
    lastUpdate.value = 'Błąd połączenia'
  } finally {
    isLoading.value = false
  }
}

// Helper: Konwertuj kierunek wiatru z stopni na skrót
const getWindDirection = (degrees) => {
  const directions = ['N (North)', 'NE (Northeast)', 'E (East)', 'SE (Southeast)', 
                     'S (South)', 'SW (Southwest)', 'W (West)', 'NW (Northwest)']
  const index = Math.round(degrees / 45) % 8
  return directions[index]
}

// Helper: Dynamiczna ocena trudności
const calculateDifficulty = (windSpeed, waveHeight) => {
  if (waveHeight < 0.5 || windSpeed < 5) return 'Poor'
  if (waveHeight < 1.0) return 'Beginner'
  if (waveHeight < 1.8 && windSpeed < 15) return 'Intermediate'
  if (waveHeight >= 1.8) return 'Advanced'
  return 'Intermediate'
}

// Helper: Info o tłumie
const getCrowdingInfo = (hour) => {
  if ((hour >= 6 && hour < 9) || (hour >= 16 && hour < 18)) return 'High (8-12 surfers)'
  if ((hour >= 9 && hour < 12) || (hour >= 18 && hour < 20)) return 'Moderate (4-6 surfers)'
  return 'Low (1-3 surfers)'
}

// Helper: Najlepszy czas do surfowania
const getBestSurfTime = (hour) => {
  const now = hour * 60
  if (now < 360 || now > 1050) return '06:00 - 09:00 (Early Morning)'
  if (now >= 360 && now < 540) return '06:00 - 09:00 (Early Morning)'
  if (now >= 960 && now < 1110) return '16:00 - 18:30 (Afternoon)'
  return '06:00 - 09:00 & 16:00 - 18:30'
}

// Licznik do auto-refresh co 3 godziny (10800 sekund)
const startAutoRefresh = () => {
  const REFRESH_INTERVAL = 3 * 60 * 60 * 1000 // 3 godziny
  
  setInterval(() => {
    fetchWeatherData()
  }, REFRESH_INTERVAL)
  
  // Licznik do następnego refresh'a
  setInterval(() => {
    autoUpdateCountdown.value = getNextRefreshCountdown()
  }, 1000)
}

// Oblicz czas do następnego auto-refresh
const getNextRefreshCountdown = () => {
  const now = new Date()
  const nextRefresh = new Date(now)
  nextRefresh.setHours(nextRefresh.getHours() + 3)
  nextRefresh.setMinutes(0)
  nextRefresh.setSeconds(0)
  
  const diff = nextRefresh - now
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  
  return `${hours}h ${minutes}m`
}

// Inicjalizacja przy montowaniu komponentu
onMounted(() => {
  fetchWeatherData()
  startAutoRefresh()
  updateCurrentDate()
  autoUpdateCountdown.value = getNextRefreshCountdown()
  
  // Aktualizuj datę co minutę
  setInterval(updateCurrentDate, 60000)
})

const weeklyForecast = reactive([
  { day: 'Monday', waveHeight: '1.5m', condition: 'Good' },
  { day: 'Tuesday', waveHeight: '1.0m', condition: 'Poor' },
  { day: 'Wednesday', waveHeight: '2.0m', condition: 'Excellent' },
  { day: 'Thursday', waveHeight: '1.8m', condition: 'Good' },
  { day: 'Friday', waveHeight: '2.2m', condition: 'Excellent' },
])
</script>

<style scoped>
</style>
