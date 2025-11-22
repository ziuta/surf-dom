<template>
  <section id="home" class="relative w-full h-screen overflow-hidden">
    <!-- Windy Interactive Ocean Map - Zoomed to Vung Tau -->
    <div class="absolute inset-0 w-full h-full">
      <iframe
        title="Live Ocean Map - Waves, Wind & Temperature"
        width="100%"
        height="100%"
        src="https://embed.windy.com/embed2.html?lat=10.346&lon=107.084&detailLat=10.346&detailLon=107.084&width=100%&height=100%&zoom=13&level=surface&overlay=waves&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
        frameborder="0"
        style="border: none;"
      ></iframe>
    </div>

    <!-- Semi-transparent Overlay for Hero Content -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Hero Content Overlay -->
    <div class="absolute inset-0 flex items-end justify-center pb-32">
      <div class="text-center">
        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
          <button class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-600 font-semibold transition-all hover:scale-105 shadow-lg text-lg">
            Book a Room
          </button>
          <button class="px-8 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 font-semibold transition-all hover:scale-105 shadow-lg text-lg">
            Book Surf Lesson
          </button>
        </div>
      </div>
    </div>

    <!-- Bottom Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
      <p class="text-sm mb-2">Scroll to explore</p>
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// No additional JavaScript needed - Windy handles all map functionality
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}

.animate-slideUp {
  animation: slideUp 1s ease-in-out 0.3s both;
}
</style>
