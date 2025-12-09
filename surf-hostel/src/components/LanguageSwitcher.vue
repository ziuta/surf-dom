<template>
  <div class="flex items-center gap-1 md:gap-2">
    <button
      v-for="lang in languages"
      :key="lang.code"
      @click="changeLanguage(lang.code)"
      :class="[
        'px-2 py-1 md:px-3 md:py-2 rounded-lg transition-all text-sm md:text-base font-semibold',
        currentLang === lang.code
          ? 'bg-orange-500 text-white shadow-lg scale-110'
          : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
      ]"
      :title="`Switch to ${lang.name}`"
    >
      {{ lang.flag }} <span class="hidden sm:inline">{{ lang.code.toUpperCase() }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentLang = ref('en')

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

onMounted(() => {
  const saved = localStorage.getItem('language')
  if (saved) {
    currentLang.value = saved
  }
})

const changeLanguage = (lang) => {
  currentLang.value = lang
  localStorage.setItem('language', lang)
  document.documentElement.lang = lang
  
  // Update i18n locale through global property if available
  if (window.__i18n) {
    window.__i18n.global.locale.value = lang
  }
}
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

button:active {
  transform: scale(0.95);
}
</style>
