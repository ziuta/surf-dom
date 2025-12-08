<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation Header -->
    <Header />

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <Hero />

      <!-- Packages Section -->
      <PackagesSection />

      <!-- About Section -->
      <AboutSection />

      <!-- Surfing School Section -->
      <SurfingSchoolSection />

      <!-- Local Tours Section -->
      <LocalToursSection />

      <!-- Gallery Section -->
      <GallerySection />

      <!-- Weather/Surf Conditions Module -->
      <WeatherSurfModule />

      <!-- Windy Map Section - Full Width -->
      <WindyMapSection />

      <!-- Testimonials Section -->
      <TestimonialsSection />

      <!-- Contact Section -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import WeatherSurfModule from './components/WeatherSurfModule.vue'
import WindyMapSection from './components/WindyMapSection.vue'
import PackagesSection from './components/PackagesSection.vue'
import AboutSection from './components/AboutSection.vue'
import SurfingSchoolSection from './components/SurfingSchoolSection.vue'
import LocalToursSection from './components/LocalToursSection.vue'
import GallerySection from './components/GallerySection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'

useScrollAnimation()
</script>

<style scoped>
</style>
