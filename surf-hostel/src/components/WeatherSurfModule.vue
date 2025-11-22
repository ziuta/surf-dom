<template>
  <section class="py-16 bg-gradient-to-br from-teal-50 to-gray-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">Today's Surf Conditions</h2>

      <!-- Weather/Surf Module Card - Optimized for Screenshot -->
      <div class="max-w-2xl mx-auto">
        <div class="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-yellow-400">
          <!-- Header -->
          <div class="text-center mb-8 pb-6 border-b-2 border-yellow-300">
            <h3 class="text-3xl md:text-4xl font-bold text-white mb-2">
              🏄 SURF HOSTEL VUNG TAU 🏄
            </h3>
            <p class="text-teal-100 text-lg">Vung Tau, Vietnam</p>
            <p class="text-yellow-200 text-sm mt-2">
              Updated: {{ currentDate }}
            </p>
          </div>

          <!-- Main Weather Info Grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <!-- Temperature -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">☀️</p>
              <p class="text-white text-sm font-semibold">Temperature</p>
              <p class="text-yellow-300 text-2xl font-bold">{{ weatherData.temperature }}°C</p>
            </div>

            <!-- Wind -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">💨</p>
              <p class="text-white text-sm font-semibold">Wind</p>
              <p class="text-yellow-300 text-xl font-bold">{{ weatherData.windSpeed }} km/h</p>
              <p class="text-teal-100 text-xs">{{ weatherData.windDirection }}</p>
            </div>

            <!-- Wave Height -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">🌊</p>
              <p class="text-white text-sm font-semibold">Wave Height</p>
              <p class="text-yellow-300 text-2xl font-bold">{{ weatherData.waveHeight }}</p>
            </div>

            <!-- Swell Direction -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">🧭</p>
              <p class="text-white text-sm font-semibold">Swell Direction</p>
              <p class="text-yellow-300 text-xl font-bold">{{ weatherData.swellDirection }}</p>
            </div>

            <!-- Swell Period -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">⏱️</p>
              <p class="text-white text-sm font-semibold">Swell Period</p>
              <p class="text-yellow-300 text-2xl font-bold">{{ weatherData.swellPeriod }}s</p>
            </div>

            <!-- Tide -->
            <div class="text-center bg-teal-700 bg-opacity-50 rounded-lg p-4">
              <p class="text-yellow-300 text-2xl mb-1">🌀</p>
              <p class="text-white text-sm font-semibold">Tide</p>
              <p class="text-yellow-300 text-lg font-bold">{{ weatherData.tide }}</p>
            </div>
          </div>

          <!-- Quality Assessment -->
          <div class="bg-teal-700 bg-opacity-50 rounded-lg p-6 mb-6 border-2 border-yellow-300">
            <h4 class="text-yellow-300 font-bold text-lg mb-3">📊 Surf Quality</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-white">
                <span>Difficulty Level:</span>
                <span class="text-yellow-300 font-bold">{{ weatherData.difficulty }}</span>
              </div>
              <div class="flex items-center justify-between text-white">
                <span>Best Time:</span>
                <span class="text-yellow-300 font-bold">{{ weatherData.bestTime }}</span>
              </div>
              <div class="flex items-center justify-between text-white">
                <span>Crowding:</span>
                <span class="text-yellow-300 font-bold">{{ weatherData.crowding }}</span>
              </div>
            </div>
          </div>

          <!-- Recommendation -->
          <div class="bg-yellow-400 bg-opacity-20 rounded-lg p-6 border-2 border-yellow-300">
            <p class="text-white text-center text-lg">
              <span class="text-yellow-300 font-bold">✅ RECOMMENDATION:</span>
            </p>
            <p class="text-white text-center mt-2 text-lg font-semibold">
              {{ weatherData.recommendation }}
            </p>
            <p class="text-teal-100 text-center mt-3 text-sm">
              Perfect conditions for learning or advanced surfing!
            </p>
          </div>

          <!-- Footer with Social Icons -->
          <div class="mt-8 pt-6 border-t-2 border-yellow-300 flex justify-center gap-6">
            <a href="#" class="text-yellow-300 hover:text-white transition-colors">
              <span class="text-2xl">📱 Instagram</span>
            </a>
            <a href="#" class="text-yellow-300 hover:text-white transition-colors">
              <span class="text-2xl">👥 Facebook</span>
            </a>
          </div>
        </div>

        <!-- Info Text Below -->
        <p class="text-center text-gray-700 mt-6 font-semibold">
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
