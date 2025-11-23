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
          <h2 class="heading-md">ABOUT SURF DOM</h2>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Welcome to Surf DOM Vung Tau - Your gateway to a paradise surfing experience in Vietnam!
          </p>

          <div class="space-y-4">
            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🏠
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Comfortable Rooms</h3>
                <p class="text-gray-600">Air-conditioned rooms with ocean views, premium beds, and private bathrooms</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🌅
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Rooftop Terrace</h3>
                <p class="text-gray-600">Watch sunsets and check surf conditions from our expansive oceanfront terrace</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  👥
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Community Space</h3>
                <p class="text-gray-600">Meet surfers from around the world in our vibrant restaurant and bar</p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-600 text-white">
                  🏄
                </div>
              </div>
              <div>
                <h3 class="heading-sm">Surf Community</h3>
                <p class="text-gray-600">Immerse yourself in surfing culture and be part of a dynamic surfer community</p>
              </div>
            </div>
          </div>

          <button class="mt-8 px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold transition-all hover:scale-105">
            Book a Room
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
