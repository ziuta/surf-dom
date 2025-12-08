<template>
  <section id="home" class="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
    <!-- Background Image with Parallax Effect and Enhanced Overlay -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
      :style="{ 
        backgroundImage: `url('${heroBg}')`,
        transform: `translateY(${parallaxOffset}px)`
      }"
    >
      <!-- Gradient + Dark Overlay for Better Text Contrast -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
    </div>

    <!-- Hero Content - Relative positioning with better spacing -->
    <div class="relative z-10 w-full flex items-center justify-center px-4">
      <div class="text-center text-white max-w-4xl">
        <!-- Pre-Headline with Blue to Lime Animation -->
        <p class="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-lime-400 mb-2 sm:mb-3 tracking-widest uppercase drop-shadow-2xl animate-colorShift">🏄 THE SEASON IS NOW!</p>
        
        <!-- Main Headline with Shadow -->
        <h1 class="text-5xl sm:text-6xl md:text-7xl font-black mb-3 sm:mb-4 leading-tight animate-slideUp drop-shadow-xl" style="font-family: 'pardon4x4', sans-serif;">
          EVERYDAY<br />SURF CAMP
        </h1>
        
        <!-- Subheadline with Value Prop and Shadow -->
        <p class="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 font-semibold text-gray-50 max-w-2xl mx-auto drop-shadow-lg">
          Surfing Lessons + Unlimited Gear + 3 Meals Daily + Free Accommodation
        </p>

        <!-- Price - More Visible with Shadow -->
        <div class="mb-5 sm:mb-7">
          <p class="text-sm text-gray-300 mb-1 font-bold drop-shadow-lg">All for just</p>
          <p class="text-3xl sm:text-4xl md:text-5xl font-black text-lime-300 drop-shadow-lg">2,100,000 ₫</p>
        </div>
        
        <!-- Location USP with Shadow -->
        <p class="text-sm sm:text-base text-gray-200 mb-6 sm:mb-8 drop-shadow-lg">
          Perfect waves. Perfect weather. Perfect time to book your spot at Vung Tau's premier surf destination.
        </p>
        
        <!-- CTA Buttons with Blue Theme -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <button class="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all hover:scale-105 rounded-lg shadow-lg">
            🎉 BOOK YOUR SPOT NOW
          </button>
          <button @click="scrollToPackages" class="px-8 sm:px-10 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white font-bold border-2 border-white hover:bg-white/30 transition-all rounded-lg">
            Learn More
          </button>
        </div>
        
        <!-- Trust Indicators with Shadow -->
        <p class="text-xs sm:text-sm text-gray-300 italic drop-shadow-lg">
          ✓ Award-Winning Instructors ✓ Professional Equipment ✓ Join Anytime
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../assets/hero-bg.jpg';
import { ref, onMounted, onUnmounted } from 'vue';

const parallaxOffset = ref(0);

const scrollToPackages = () => {
  const packagesSection = document.getElementById('packages');
  if (packagesSection) {
    packagesSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  // Calculate parallax offset based on scroll position
  const scrollPosition = window.scrollY;
  parallaxOffset.value = scrollPosition * 0.5;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
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

@keyframes colorShift {
  0% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(90deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}

.animate-slideUp {
  animation: slideUp 1s ease-in-out 0.3s both;
}

.animate-colorShift {
  animation: colorShift 3s ease-in-out infinite;
}
</style>
