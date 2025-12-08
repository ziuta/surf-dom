<template>
  <section id="packages" class="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
    <div class="section-container">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h2 class="heading-md mb-4">CHOOSE YOUR VIBE</h2>
        <div class="mb-8 text-center text-gray-600">✓ Surfing Lessons with Champions</div>
      </div>

      <!-- Initial Choice Section -->
      <div v-if="!selectedType" class="mb-16 p-12 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">🏄 Where Do You Want to Stay?</h3>
          <p class="text-lg text-gray-600 mb-12">Choose your accommodation type and discover the perfect surf camp package for you</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Hostel Option -->
            <button
              @click="selectedType = 'hostel'"
              class="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-3 border-orange-500 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <div class="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-5 transition-all"></div>
              <div class="relative z-10">
                <div class="text-6xl mb-4">🏠</div>
                <h4 class="text-2xl font-bold text-gray-900 mb-2">Hostel</h4>
                <p class="text-base text-gray-700 mb-6">Social vibes & shared experiences</p>
                <div class="space-y-2 text-sm text-gray-600 mb-6">
                  <p>✓ Shared rooms</p>
                  <p>✓ Budget-friendly</p>
                  <p>✓ Great for making friends</p>
                </div>
                <div class="inline-block px-6 py-2 bg-orange-500 text-white font-bold rounded-lg group-hover:bg-orange-600 transition-all">
                  Explore Hostel Packages →
                </div>
              </div>
            </button>

            <!-- Hotel Option -->
            <button
              @click="selectedType = 'hotel'"
              class="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-3 border-blue-500 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-all"></div>
              <div class="relative z-10">
                <div class="text-6xl mb-4">🏨</div>
                <h4 class="text-2xl font-bold text-gray-900 mb-2">Hotel</h4>
                <p class="text-base text-gray-700 mb-6">Comfort & privacy with luxury</p>
                <div class="space-y-2 text-sm text-gray-600 mb-6">
                  <p>✓ Private rooms</p>
                  <p>✓ Ocean views</p>
                  <p>✓ Premium amenities</p>
                </div>
                <div class="inline-block px-6 py-2 bg-blue-500 text-white font-bold rounded-lg group-hover:bg-blue-600 transition-all">
                  Explore Hotel Packages →
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Packages Section (appears after selection) -->
      <div v-if="selectedType" class="animate-fadeIn">
        <!-- Back Button & Selection Header -->
        <div class="mb-12 flex items-center justify-between">
          <button
            @click="selectedType = null"
            class="inline-block px-6 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all"
          >
            ← Back to Selection
          </button>
          <h3 class="text-2xl font-bold text-gray-900">
            {{ selectedType === 'hostel' ? '🏠 Hostel Packages' : '🏨 Hotel Packages' }}
          </h3>
          <div class="w-40"></div>
        </div>

        <!-- Packages Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <!-- All-Inclusive Dorm (Hostel) -->
          <div v-if="selectedType === 'hostel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-orange-500 relative group animate-fadeIn">
            <div class="absolute top-3 right-3 z-10">
              <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-xs font-black rounded-full shadow-lg">
                ⭐ BESTSELLER
              </div>
            </div>
            <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">🔥 All-Inclusive Surf Camp</h2>
              <p class="text-orange-100 text-base">Shared Room in a Hostel • Social Vibes</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-base text-gray-600 mb-2">Price per person / day</p>
                <div class="flex items-baseline gap-3">
                  <p class="text-xl font-bold text-gray-400 line-through">2.900.000 ₫</p>
                  <p class="text-4xl font-black text-orange-600">2.100.000 ₫</p>
                </div>
                <p class="text-sm text-orange-600 font-bold mt-2 bg-orange-100 inline-block px-3 py-1 rounded">💰 FREE Accommodation + Save 800K!</p>
              </div>
              <ul class="space-y-3 text-base text-gray-700 mb-6 flex-grow">
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Shared room in our social hostel</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Full meals daily (breakfast, lunch, dinner) - homemade & international</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Intensive surfing lessons with award-winning instructor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Skateboarding session - discover a new passion!</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Unlimited board and equipment rental</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>Full Surf Camp party atmosphere</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span>City tour (tuk-tuk / bike) included</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Basic Dorm (Hostel) -->
          <div v-if="selectedType === 'hostel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-amber-500 animate-fadeIn">
            <div class="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">🌊 Basic Surf Camp</h2>
              <p class="text-amber-100 text-base">Shared Room in a Hostel • Beginner-Friendly</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-base text-gray-600 mb-1">Price per person / day</p>
                <p class="text-4xl font-black text-amber-600">1.100.000 ₫</p>
                <p class="text-sm text-amber-600 font-bold mt-2 bg-amber-100 inline-block px-3 py-1 rounded">💵 Best Budget Option</p>
              </div>
              <ul class="space-y-3 text-base text-gray-700 mb-6 flex-grow">
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Shared room in our friendly hostel</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Breakfast included daily</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Surfing lessons with experienced instructor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Unlimited board and equipment rental</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Surf Camp party atmosphere & social community</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-500">✓</span>
                  <span>Access to all common areas & activities</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Premium All-Inclusive Hotel -->
          <div v-if="selectedType === 'hotel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500 animate-fadeIn">
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">✨ All-Inclusive Surf Camp</h2>
              <p class="text-blue-100 text-base">Private Room in a Hotel • Oceanview</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-base text-gray-600 mb-1">Price per person / day</p>
                <p class="text-4xl font-black text-blue-600">3.500.000 ₫</p>
                <p class="text-sm text-blue-600 font-bold mt-2 bg-blue-100 inline-block px-3 py-1 rounded">🏖️ Premium All-Inclusive</p>
              </div>
              <ul class="space-y-3 text-base text-gray-700 mb-6 flex-grow">
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span><strong>Private room</strong> (single or double bed) in beautiful hotel</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>Stunning oceanview with rooftop terrace access</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>Full meals daily (breakfast, lunch, dinner) - Vietnamese & international</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>Intensive surfing lessons with award-winning instructor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>Skateboarding session & full Surf Camp party atmosphere</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>Unlimited board and equipment rental</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-blue-500">✓</span>
                  <span>City tour (tuk-tuk / bike) & all activities included</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Basic Comfort Hotel -->
          <div v-if="selectedType === 'hotel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-indigo-500 animate-fadeIn">
            <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">🏨 Basic Surf Camp</h2>
              <p class="text-indigo-100 text-base">Private Room in a Hotel • Oceanview</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-base text-gray-600 mb-1">Price per person / day</p>
                <p class="text-4xl font-black text-indigo-600">3.000.000 ₫</p>
                <p class="text-sm text-indigo-600 font-bold mt-2 bg-indigo-100 inline-block px-3 py-1 rounded">🛏️ Comfort + Privacy</p>
              </div>
              <ul class="space-y-3 text-base text-gray-700 mb-6 flex-grow">
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span><strong>Private room</strong> (single or double bed) in oceanview hotel</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Beautiful oceanview with rooftop terrace access</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Breakfast included daily</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Surfing lessons with experienced instructor</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Unlimited board and equipment rental</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Surf Camp party atmosphere & social community</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-indigo-500">✓</span>
                  <span>Access to all activities & city tour</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Group Discount Section -->
        <div class="mb-16 p-8 md:p-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300 animate-fadeIn">
          <div class="max-w-2xl mx-auto text-center">
            <h3 class="heading-sm text-purple-900 mb-4">🎉 TRAVELING WITH A GROUP?</h3>
            <p class="text-lg text-gray-800 mb-3 font-semibold">Get a Group Discount on Any Package!</p>
            <p class="text-base text-gray-700 mb-4">
              Minimum 5 people: <strong>Your discount % = your group size</strong>
            </p>
            <p class="text-sm text-gray-600 italic mb-4">
              Example: Group of 10 people = 10% discount on all packages
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-300">
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Any combination</p>
                <p class="text-xs text-gray-600">Mix & match any packages</p>
              </div>
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Fully customizable</p>
                <p class="text-xs text-gray-600">Tailored to your group</p>
              </div>
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Easy to manage</p>
                <p class="text-xs text-gray-600">Flexible arrangements</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="text-center animate-fadeIn">
          <h3 class="heading-sm text-gray-900 mb-6">Ready for a new adventure?</h3>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            No matter which package you choose, an unforgettable experience awaits you at SURF DOM.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <button class="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-bold transition-all hover:scale-105 shadow-lg">
              📞 Book Now
            </button>
            <button class="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-50 font-bold transition-all">
              📧 Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedType = ref(null)
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-out;
}
</style>
