<template>
  <section class="w-full">
    <div class="w-full">
      <!-- Full Width Title -->
      <div class="text-center mb-8 px-4 sm:px-6 lg:px-8">
        <h2 class="heading-md text-white mb-2">Live Wind & Wave Map</h2>
        <p class="text-gray-800 text-base">Real-time ocean conditions for Vung Tau</p>
      </div>

      <!-- Windy Interactive Ocean Map - Full Width -->
      <div class="w-full h-96 md:h-screen/2 pointer-events-none">
        <iframe
          title="Live Ocean Map - Waves, Wind & Temperature"
          width="100%"
          height="100%"
          src="https://embed.windy.com/embed2.html?lat=10.346&lon=107.084&detailLat=10.346&detailLon=107.084&width=100%&height=100%&zoom=13&level=surface&overlay=waves&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
          frameborder="0"
          style="border: none; display: block; pointer-events: none;"
        ></iframe>
      </div>

      <!-- Info Section Below Map -->
      <div class="bg-gradient-to-r from-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 py-8">
        <div class="max-w-6xl mx-auto">
          <p class="text-gray-300 text-center text-base">
            💡 <strong>Use the map controls to:</strong> Zoom in/out, change layers (waves, wind, temperature), and view forecasts
          </p>
          <p class="text-gray-400 text-center text-sm mt-2">
            Updated in real-time | Check regularly for the best surfing conditions
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
