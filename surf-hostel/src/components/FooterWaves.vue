<template>
  <div class="footer-waves absolute inset-0 overflow-hidden pointer-events-none flex flex-col">
    <!-- Separator and Copyright -->
    <div class="flex-1 flex flex-col justify-end pointer-events-auto relative z-20">
      <div class="border-t border-gray-700 py-6 px-4 sm:px-0">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Surf DOM VUNG TAU. All rights reserved.</p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-teal-400 transition-colors">Terms of Use</a>
            <a href="#" class="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>

    <svg
      class="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      style="height: 100%; min-height: 300px;"
    >
      <!-- Footer Wave 1 - Purple gradient -->
      <path
        class="footer-wave footer-wave-1"
        d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 L1200,300 L0,300 Z M1200,100 Q1350,50 1500,100 T1800,100 T2100,100 T2400,100 L2400,300 L1200,300 Z"
        fill="rgba(168, 85, 247, 0.35)"
      />
      
      <!-- Footer Wave 2 - Pink gradient -->
      <path
        class="footer-wave footer-wave-2"
        d="M0,150 Q120,80 240,150 T480,150 T720,150 T960,150 T1200,150 L1200,300 L0,300 Z M1200,150 Q1320,80 1440,150 T1680,150 T1920,150 T2160,150 T2400,150 L2400,300 L1200,300 Z"
        fill="rgba(236, 72, 153, 0.3)"
      />
      
      <!-- Footer Wave 3 - Orange gradient -->
      <path
        class="footer-wave footer-wave-3"
        d="M0,200 Q100,130 200,200 T400,200 T600,200 T800,200 T1000,200 T1200,200 L1200,300 L0,300 Z M1200,200 Q1300,130 1400,200 T1600,200 T1800,200 T2000,200 T2200,200 T2400,200 L2400,300 L1200,300 Z"
        fill="rgba(249, 115, 22, 0.25)"
      />
    </svg>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    const waves = document.querySelectorAll('.footer-wave')
    waves.forEach(wave => {
      wave.style.animation = 'none'
    })
  }
})
</script>

<style scoped>
.footer-waves {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 400px;
  z-index: 0;
  opacity: 1;
}

.footer-wave {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

.footer-wave-1 {
  animation: footerWave1 18s linear infinite;
}

.footer-wave-2 {
  animation: footerWave2 11s linear infinite;
  animation-delay: -3s;
}

.footer-wave-3 {
  animation: footerWave3 7s linear infinite;
  animation-delay: -1.5s;
}

@keyframes footerWave1 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@keyframes footerWave2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@keyframes footerWave3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

/* Mobile optimization */
@media (max-width: 768px) {
  .footer-waves {
    height: 250px;
  }
  
  .footer-wave-1 {
    animation: footerWave1 14s linear infinite;
  }
  
  .footer-wave-2 {
    animation: footerWave2 9s linear infinite;
  }
  
  .footer-wave-3 {
    animation: footerWave3 5s linear infinite;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .footer-waves {
    height: 200px;
  }
  
  .footer-wave-1 {
    animation: footerWave1 12s linear infinite;
  }
  
  .footer-wave-2 {
    animation: footerWave2 8s linear infinite;
  }
  
  .footer-wave-3 {
    animation: footerWave3 4s linear infinite;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-wave {
    animation: none !important;
    opacity: 0.3;
  }
}
</style>
