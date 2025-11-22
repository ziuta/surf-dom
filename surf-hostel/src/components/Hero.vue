<template>
  <section id="home" class="relative w-full h-screen">
    <!-- Background Image -->
    <img
      src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80"
      alt="Surfing in Vietnam"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>

    <!-- Content -->
    <div class="relative h-full flex items-center justify-center">
      <div class="section-container text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          SURF HOSTEL
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-100 animate-slideUp">
          Vung Tau, Vietnam - Twoje miejsce do nauki surfingu
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp">
          <button class="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 font-semibold transition-all hover:scale-105">
            Zarezerwuj Pokój
          </button>
          <button class="px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 font-semibold transition-all hover:scale-105">
            Sprawdź Warunki Surfingu
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
