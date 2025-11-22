<template>
  <section id="about" class="py-16 bg-white">
    <div class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="overflow-hidden rounded-lg shadow-lg fade-in">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
            alt="Surf Hostel"
            class="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Content -->
        <div class="slide-up">
          <h2 class="heading-md">O SURF HOSTEL</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Witaj w SURF HOSTEL Vung Tau - Twojej bramie do rajskiego doświadczenia surfingowego w Wietnamie!
          </p>

          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🏠
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Komfortowe Pokoje</h3>
                <p class="text-gray-600">Klimatyzowane pokoje z widokiem na ocean, łóżka premium i prywatne łazienki</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🌅
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Taras z Widokiem</h3>
                <p class="text-gray-600">Obserwuj zachody słońca i warunki surfingu z naszego rozległego tarasu</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  👥
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Wspólna Przestrzeń</h3>
                <p class="text-gray-600">Spotkaj surferów z całego świata w naszej atmosferycznej restauracji i barze</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🏄
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Atmosfera Surfingowa</h3>
                <p class="text-gray-600">Otocz się pasją do surfingu i bądź częścią dynamicznej surferskiej społeczności</p>
              </div>
            </div>
          </div>

          <button class="mt-8 px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold transition-all hover:scale-105">
            Zarezerwuj Pokój
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
