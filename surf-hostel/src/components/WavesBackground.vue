<template>
  <div class="waves-background absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      class="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      style="height: 100%"
    >
      <!-- Wave 1 - Slowest, largest, sharpest peaks -->
      <path
        class="wave wave-1"
        d="M0,150 Q150,80 300,150 T600,150 T900,150 T1200,150 L1200,400 L0,400 Z M1200,150 Q1350,80 1500,150 T1800,150 T2100,150 T2400,150 L2400,400 L1200,400 Z"
        fill="rgba(6, 182, 212, 0.25)"
      />
      
      <!-- Wave 2 - Medium-slow speed, medium-sharp peaks -->
      <path
        class="wave wave-2"
        d="M0,200 Q120,100 240,200 T480,200 T720,200 T960,200 T1200,200 L1200,400 L0,400 Z M1200,200 Q1320,100 1440,200 T1680,200 T1920,200 T2160,200 T2400,200 L2400,400 L1200,400 Z"
        fill="rgba(14, 165, 233, 0.22)"
      />
      
      <!-- Wave 3 - Medium speed, medium peaks -->
      <path
        class="wave wave-3"
        d="M0,250 Q100,160 200,250 T400,250 T600,250 T800,250 T1000,250 T1200,250 L1200,400 L0,400 Z M1200,250 Q1300,160 1400,250 T1600,250 T1800,250 T2000,250 T2200,250 T2400,250 L2400,400 L1200,400 Z"
        fill="rgba(34, 197, 94, 0.2)"
      />

      <!-- Wave 4 - Fastest, smallest, sharpest peaks for detail -->
      <path
        class="wave wave-4"
        d="M0,300 Q80,240 160,300 T320,300 T480,300 T640,300 T800,300 T960,300 T1200,300 L1200,400 L0,400 Z M1200,300 Q1280,240 1360,300 T1520,300 T1680,300 T1840,300 T2000,300 T2160,300 T2400,300 L2400,400 L1200,400 Z"
        fill="rgba(59, 130, 246, 0.25)"
      />
    </svg>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Check if device has reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    // Disable animations for accessibility
    const waves = document.querySelectorAll('.wave')
    waves.forEach(wave => {
      wave.style.animation = 'none'
    })
  }
})
</script>

<style scoped>
.waves-background {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
}

.wave {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

.wave-1 {
  animation: wave1 20s linear infinite;
}

.wave-2 {
  animation: wave2 12s linear infinite;
  animation-delay: -4s;
}

.wave-3 {
  animation: wave3 8s linear infinite;
  animation-delay: -2s;
}

.wave-4 {
  animation: wave4 5s linear infinite;
  animation-delay: -1s;
}

@keyframes wave1 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@keyframes wave2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@keyframes wave3 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

@keyframes wave4 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1200px);
  }
}

/* Mobile optimization */
@media (max-width: 768px) {
  .waves-background {
    height: 150px;
  }
  
  .wave-1 {
    animation: wave1 16s linear infinite;
  }
  
  .wave-2 {
    animation: wave2 10s linear infinite;
  }
  
  .wave-3 {
    animation: wave3 6s linear infinite;
  }

  .wave-4 {
    animation: wave4 4s linear infinite;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .waves-background {
    height: 100px;
  }
  
  .wave-1 {
    animation: wave1 15s linear infinite;
  }
  
  .wave-2 {
    animation: wave2 9s linear infinite;
  }
  
  .wave-3 {
    animation: wave3 5s linear infinite;
  }

  .wave-4 {
    animation: wave4 3s linear infinite;
  }
}

/* Low power mode / battery saver / reduced motion */
@media (prefers-reduced-motion: reduce) {
  .wave {
    animation: none !important;
    opacity: 0.3;
  }
}
</style>
