<template>
  <header class="sticky top-0 z-50 bg-white shadow-md">
    <nav class="section-container py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img src="../assets/logo.png" alt="Surf DOM Logo" class="w-8 h-8" />
        <a href="#home" class="text-5xl font-black text-gray-900 hover:text-teal-600 uppercase" style="font-family: 'pardon4x4', sans-serif; letter-spacing: 0.05em;">
          SURF DOM
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <a href="#about" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">{{ $t('header.about') }}</a>
        <a href="#surfing" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">{{ $t('header.school') }}</a>
        <a href="#activities" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">{{ $t('header.tours') }}</a>
        <a href="#instagram" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">{{ $t('header.gallery') }}</a>
        <a href="#contact" class="text-gray-700 hover:text-teal-600 font-medium transition-colors">{{ $t('header.contact') }}</a>
      </div>

      <!-- CTA Buttons & Language Switcher -->
      <div class="flex items-center gap-4">
        <LanguageSwitcher />
        <a href="https://wa.me/84977724210" target="_blank" rel="noopener noreferrer" class="hidden md:inline-block px-6 py-2 bg-lime-300 text-gray-900 rounded-lg hover:bg-lime-500 font-medium transition-all">
          Ask Anything (WhatsApp)
        </a>

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
          <a href="#about" class="text-gray-700 hover:text-teal-600 font-medium">{{ $t('header.about') }}</a>
          <a href="#surfing" class="text-gray-700 hover:text-teal-600 font-medium">{{ $t('header.school') }}</a>
          <a href="#activities" class="text-gray-700 hover:text-teal-600 font-medium">{{ $t('header.tours') }}</a>
          <a href="#instagram" class="text-gray-700 hover:text-teal-600 font-medium">{{ $t('header.gallery') }}</a>
          <a href="#contact" class="text-gray-700 hover:text-teal-600 font-medium">{{ $t('header.contact') }}</a>
          <a href="https://wa.me/84977724210" target="_blank" rel="noopener noreferrer" class="w-full px-6 py-2 bg-lime-300 text-gray-900 rounded-lg hover:bg-lime-400 font-medium text-center">
            Ask Anything (WhatsApp)
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
</style>

