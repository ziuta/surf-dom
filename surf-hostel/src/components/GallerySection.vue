<template>
  <section id="instagram" class="py-16 bg-gray-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-4">📸 Follow Our Journey</h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        @surffuntin - Latest moments from our surf community
      </p>

      <!-- Elfsight Instagram Widget -->
      <div class="flex justify-center mb-12">
        <div class="elfsight-app-a4f4d7d2-901c-4845-8a93-28ed12483c91" data-elfsight-app-lazy></div>
      </div>

      <!-- CTA Button -->
      <div class="text-center">
        <a 
          href="https://www.instagram.com/surffuntin/" 
          target="_blank"
          class="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
        >
          Follow Us on Instagram →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Load Elfsight platform script
  const script = document.createElement('script')
  script.src = 'https://elfsightcdn.com/platform.js'
  script.async = true
  
  script.onload = () => {
    // Remove Elfsight branding link after script loads
    setTimeout(() => {
      const links = document.querySelectorAll('a[href*="elfsight.com"]')
      links.forEach(link => {
        link.style.display = 'none'
        link.remove()
      })
    }, 1000)
  }
  
  document.body.appendChild(script)
  
  // Also watch for dynamically added elements
  const observer = new MutationObserver(() => {
    const elfsightLinks = document.querySelectorAll('a[href*="elfsight.com"]')
    elfsightLinks.forEach(link => {
      link.style.display = 'none'
      link.remove()
    })
  })
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
})
</script>

<style scoped>
/* Hide Elfsight branding link */
:deep(a[href*="elfsight.com"]) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* Additional global style to catch any elfsight branding */
:global(a[href*="elfsight.com"]) {
  display: none !important;
  visibility: hidden !important;
}

/* Hide Instagram CTA button */
:deep(a[href*="instagram.com/surffuntin"]) {
  display: none !important;
}
</style>
