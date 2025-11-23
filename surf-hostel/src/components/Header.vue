<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="section-container py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <svg class="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.5a1 1 0 01-2 0V5H5v1.5a1 1 0 01-2 0V4zm0 7a1 1 0 011-1h4a1 1 0 010 2H4a1 1 0 01-1-1zm6 0a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1zm6 0a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z"/>
        </svg>
        <a href="#home" class="text-xl font-bold text-gray-900 hover:text-teal-600">
          SURF HOSTEL
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <a href="#about" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">About</a>
        <a href="#surfing" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">Surf School</a>
        <a href="#tours" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">Tours</a>
        <a href="#gallery" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">Gallery</a>
        <a href="#contact" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">Contact</a>
      </div>

      <!-- CTA Buttons -->
      <div class="flex items-center gap-4">
        <button class="hidden md:inline-block px-6 py-2 bg-white border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white font-medium transition-all">
          Book a Room
        </button>
        <button class="hidden md:inline-block px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 font-medium transition-all">
          Book Surf Lesson
        </button>

        <!-- Mobile Menu Toggle -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
        <div class="section-container py-4 flex flex-col gap-4">
          <a href="#about" class="text-gray-700 hover:text-teal-600 font-medium">About</a>
          <a href="#surfing" class="text-gray-700 hover:text-teal-600 font-medium">Surf School</a>
          <a href="#tours" class="text-gray-700 hover:text-teal-600 font-medium">Tours</a>
          <a href="#gallery" class="text-gray-700 hover:text-teal-600 font-medium">Gallery</a>
          <a href="#contact" class="text-gray-700 hover:text-teal-600 font-medium">Contact</a>
          <button class="w-full px-6 py-2 bg-white border-2 border-teal-600 text-teal-600 rounded-lg hover:bg-teal-600 hover:text-white font-medium">
            Book a Room
          </button>
          <button class="w-full px-6 py-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 font-medium">
            Book Surf Lesson
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
</style>
