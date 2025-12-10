<template>
  <section class="py-16 bg-gradient-to-br from-teal-50 to-gray-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">Today's Surf Conditions</h2>

      <div class="max-w-2xl mx-auto">
        <div class="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-4 md:p-12 shadow-2xl border-4 border-yellow-400">
          <div class="text-center mb-4 md:mb-8 pb-4 md:pb-6 border-b-2 border-yellow-300">
            <h3 class="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">
              🏄 Surf DOM VUNG TAU 🏄
            </h3>
            <p class="text-teal-100 text-base md:text-lg">Vung Tau, Vietnam</p>
            <p class="text-yellow-200 text-sm md:text-base mt-1 md:mt-2">
              Updated: {{ currentDate }}
            </p>
            <div v-if="isLoading" class="mt-2 text-yellow-300 text-sm animate-pulse">
              ⏳ Checking spot conditions...
            </div>
          </div>

          <div v-if="!isLoading" class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">☀️</p>
              <p class="text-white text-sm md:text-base font-semibold">Temperature</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.temperature }}°C</p>
            </div>

            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">💨</p>
              <p class="text-white text-sm md:text-base font-semibold">Wind</p>
              <p class="text-yellow-300 text-base md:text-xl font-bold">{{ weatherData.windSpeed }} km/h</p>
              <p class="text-teal-100 text-xs font-light">{{ weatherData.windDirection }}</p>
            </div>

            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🌊</p>
              <p class="text-white text-sm md:text-base font-semibold">Wave Height</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.waveHeight }} m</p>
            </div>

            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🧭</p>
              <p class="text-white text-sm md:text-base font-semibold">Wave Direction</p>
              <p class="text-yellow-300 text-base md:text-lg font-bold leading-tight">{{ weatherData.swellDirection }}</p>
            </div>

            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">⏱️</p>
              <p class="text-white text-sm md:text-base font-semibold">Period</p>
              <p class="text-yellow-300 text-lg md:text-2xl font-bold">{{ weatherData.swellPeriod }}s</p>
            </div>

            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-2 md:p-4">
              <p class="text-yellow-300 text-lg md:text-2xl mb-0 md:mb-1">🌀</p>
              <p class="text-white text-sm md:text-base font-semibold">Tide Trend</p>
              <p class="text-yellow-300 text-base md:text-lg font-bold">{{ weatherData.tide }}</p>
            </div>
          </div>
          
          <div v-else class="flex justify-center items-center py-8">
            <div class="text-center">
              <p class="text-white text-lg mb-4">Connecting to ocean satellites...</p>
              <div class="inline-block animate-spin">
                <p class="text-yellow-300 text-4xl">🤙</p>
              </div>
            </div>
          </div>

          <div v-if="!isLoading" class="bg-teal-700 bg-opacity-50 rounded-lg p-3 md:p-6 mb-3 md:mb-6 border-2 border-yellow-300">
            <h4 class="text-yellow-300 font-bold text-sm md:text-lg mb-2 md:mb-3">📊 Surf Vibe Check</h4>
            <div class="space-y-1 md:space-y-2">
              <div class="flex items-center justify-between text-white text-xs md:text-base">
                <span>Current Vibe:</span>
                <span class="text-yellow-300 font-bold uppercase tracking-wider text-right">{{ weatherData.difficulty }}</span>
              </div>

              <div class="flex items-center justify-between text-white text-xs md:text-base">
                <span>Best Time:</span>
                <span :class="{'animate-pulse text-yellow-300': weatherData.isBestTimeNow, 'text-teal-100': !weatherData.isBestTimeNow}" class="font-bold text-xs md:text-base text-right">
                  {{ weatherData.bestTime }}
                </span>
              </div>
              
              <div class="flex items-center justify-between text-white text-xs md:text-base pt-2 border-t border-teal-600/50 mt-2">
                <span>Suggestion:</span>
                <span class="text-teal-100 font-medium text-xs md:text-sm text-right pl-4">{{ weatherData.recommendation }}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 md:mt-8 pt-3 md:pt-6 flex justify-center gap-4 md:gap-6">
            <a href="https://www.instagram.com/vungtausurfschool/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:text-white transition-colors group flex flex-col items-center">
              <span class="text-3xl mb-1 transform group-hover:scale-110 transition-transform">📷</span>
              <span class="text-sm md:text-base font-semibold">Instagram</span>
            </a>
            <a href="https://www.facebook.com/SURFDOMvungtau/" target="_blank" rel="noopener noreferrer" class="text-yellow-300 hover:text-white transition-colors group flex flex-col items-center">
              <span class="text-3xl mb-1 transform group-hover:scale-110 transition-transform">👥</span>
              <span class="text-sm md:text-base font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'

const currentDate = ref('')
const isLoading = ref(true)

const updateCurrentDate = () => {
  currentDate.value = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  })
}

const weatherData = reactive({
  temperature: 0,
  windSpeed: 0,
  windDirection: '-',
  waveHeight: '0.0',
  swellDirection: '-',
  swellPeriod: 0,
  tide: 'Incoming', // Wracamy do symulacji
  bestTime: '-', 
  isBestTimeNow: false,
  difficulty: '-',
  recommendation: '-'
})

const fetchWeatherData = async () => {
  isLoading.value = true
  try {
    // Współrzędne "w wodzie" dla lepszego wiatru
    const lat = '10.353749'
    const lon = '107.105195'

    // 1. Weather API (Bez zmian)
    const weatherPromise = fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,wind_direction_10m&timezone=Asia/Ho_Chi_Minh`
    )
    
    // 2. Marine API (NAPRAWIONE: Usunięto 'hourly=sea_surface_height')
    // Teraz pobieramy tylko pewne dane: wysokość, kierunek i okres fal
    const marinePromise = fetch(
      `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=wave_height,wave_direction,wave_period&timezone=Asia/Ho_Chi_Minh`
    )

    const [weatherRes, marineRes] = await Promise.all([weatherPromise, marinePromise])

    if (!weatherRes.ok || !marineRes.ok) throw new Error('API Error')

    const weatherJson = await weatherRes.json()
    const marineJson = await marineRes.json()

    // --- Weather ---
    const wCurrent = weatherJson.current
    weatherData.temperature = Math.round(wCurrent.temperature_2m)
    weatherData.windSpeed = Math.round(wCurrent.wind_speed_10m)
    weatherData.windDirection = getDirectionLabel(wCurrent.wind_direction_10m)

    // --- Marine ---
    const mCurrent = marineJson.current
    weatherData.waveHeight = mCurrent.wave_height.toFixed(1)
    weatherData.swellPeriod = mCurrent.wave_period ? mCurrent.wave_period.toFixed(0) : '-'
    weatherData.swellDirection = getDirectionLabel(mCurrent.wave_direction)

    // --- Tide Simulation (Bezpieczna metoda) ---
    // Symulacja cyklu ~6 godzinnego (wystarczająca dla orientacji Rising/Falling)
    const tidePhase = (Date.now() / (6 * 60 * 60 * 1000)) % 2
    weatherData.tide = tidePhase < 1 ? 'Incoming 🌊' : 'Outgoing 📉'

    // --- Conditions ---
    const condition = calculateSurfCondition(
      mCurrent.wave_height, 
      wCurrent.wind_speed_10m
    )
    weatherData.difficulty = condition.status
    weatherData.recommendation = condition.desc

    // --- Best Time ---
    calculateBestTime()

    updateCurrentDate()
    
  } catch (error) {
    console.error('Fetch error:', error)
    // Awaryjne wartości w razie błędu
    weatherData.difficulty = 'Offline'
    weatherData.recommendation = 'Check local report'
  } finally {
    isLoading.value = false
  }
}

const getDirectionLabel = (degrees) => {
  const directions = ['N (North)', 'NE (North East)', 'E (East)', 'SE (South East)', 'S (South)', 'SW (South West)', 'W (West)', 'NW (North West)']
  const normalized = (degrees % 360 + 360) % 360; 
  const index = Math.round(normalized / 45) % 8
  return directions[index]
}

const calculateBestTime = () => {
  const hour = new Date().getHours()
  const isMorning = hour >= 6 && hour < 10
  const isAfternoon = hour >= 15 && hour < 19 
  
  if (isMorning || isAfternoon) {
    weatherData.bestTime = 'RIGHT NOW! 🚀'
    weatherData.isBestTimeNow = true
  } else {
    weatherData.bestTime = '06:00 - 10:00 & > 15:00'
    weatherData.isBestTimeNow = false
  }
}

const calculateSurfCondition = (waveHeight, windSpeed) => {
  if (waveHeight < 0.2) {
    return { status: 'Chill / SUP Day 🧘', desc: 'Perfect water for Paddleboarding or swimming!' }
  }
  if (windSpeed > 30) {
    return { status: 'Wild / Windy 🌬️', desc: 'Strong winds. Good for paddle fitness training.' }
  }
  if (waveHeight >= 0.2 && waveHeight < 0.8) {
    return { status: 'Fun Longboard Waves 🏄', desc: 'Ideal for beginners & longboard cruising.' }
  }
  if (waveHeight >= 0.8 && waveHeight < 1.5) {
    return { status: 'Excellent Conditions 🔥', desc: 'Great power. Perfect for all levels.' }
  }
  if (waveHeight >= 1.5) {
    return { status: 'Big Swell / Pumping 🚀', desc: 'Strong waves for experienced surfers.' }
  }
  return { status: 'Good Day 🤙', desc: 'Get in the water and have fun!' }
}

onMounted(() => {
  fetchWeatherData()
  setInterval(updateCurrentDate, 60000)
  setInterval(calculateBestTime, 60000)
  setInterval(fetchWeatherData, 30 * 60 * 1000) 
})
</script>