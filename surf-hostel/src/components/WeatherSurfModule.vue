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
          </div>

          <!-- Main Weather Info Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-8">
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

          <!-- Quality Assessment -->
          <div class="bg-teal-700 bg-opacity-50 rounded-lg p-3 md:p-6 mb-3 md:mb-6 border-2 border-yellow-300">
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

          <!-- Recommendation -->
          <div class="bg-yellow-400 bg-opacity-20 rounded-lg p-3 md:p-6 border-2 border-yellow-300">
            <p class="text-white text-center text-sm md:text-lg">
              <span class="text-yellow-300 font-bold">✅ RECOMMENDATION:</span>
            </p>
            <p class="text-white text-center mt-1 md:mt-2 text-sm md:text-lg font-semibold">
              {{ weatherData.recommendation }}
            </p>
            <p class="text-teal-100 text-center mt-1 md:mt-3 text-sm md:text-base">
              Perfect conditions for learning or advanced surfing!
            </p>
          </div>

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
import { reactive, computed } from 'vue'

const currentDate = new Date().toLocaleDateString('pl-PL', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})

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
