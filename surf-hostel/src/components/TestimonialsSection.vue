<template>
  <section class="py-16 bg-white">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">GUEST REVIEWS</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(r, idx) in displayedReviews" :key="idx" class="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-teal-600 fade-in transform transition hover:shadow-xl hover:-translate-y-1">
          <div class="flex gap-1 mb-3">
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
            <span class="text-yellow-400">⭐</span>
          </div>
          <p class="text-gray-700 mb-4 italic">"{{ r.text }}"</p>
          <div>
            <p class="font-semibold text-gray-900">{{ r.name }}</p>
            <p class="text-gray-600 text-sm">{{ r.locale }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const reviews = [
  {
    name: 'Jake',
    locale: 'UK',
    lang: 'en',
    text: `Sickest weekend ever! 🤙 Finally nailed my pop-up thanks to Konstantin, the guy is an absolute legend and knows the ocean inside out. The hostel vibe is super social, perfect if you're traveling solo. Cold beers on the terrace after a session = pure happiness. Coming back for sure!`
  },
  {
    name: 'Sarah',
    locale: 'UK',
    lang: 'en',
    text: `Such a hidden gem in Vung Tau. I was super nervous but Polina made me feel so safe in the water, she’s amazing! 🌊 We also went surfing with Cảnh and he took us to some local spots I would never find alone. No fancy BS, just good waves and great people. 10/10 recommend.`
  },
  {
    name: 'Dmitry',
    locale: 'RU',
    lang: 'ru',
    text: `Костя — мировой мужик, реальный профи! 🔥 Показал где лучшие волны, откатали на ура, без лишней воды и теорий. Вечером в хостеле атмосфера просто огонь, чувствуешь себя как в гостях у старых друзей. Если хотите настоящий серфинг во Вьетнаме, а не туристический развод, вам точно сюда.`
  },
  {
    name: 'Elena',
    locale: 'RU',
    lang: 'ru',
    text: `Полина просто супер! Очень боялась глубины, но с ней вообще спокойно, объясняет всё чётко и понятно. На второй день я уже поймала свою первую волну! 😍 Хостел уютный, вид с террасы бомба. Ребята, спасибо за эмоции, это был лучший отпуск!`
  },
  {
    name: 'Minh',
    locale: 'VN',
    lang: 'vn',
    text: `Trời ơi vui xỉu mọi người ơi! 🌊 Lần đầu học surf mà thầy Cảnh hướng dẫn siêu có tâm, té lên té xuống nhưng cười banh nóc. Hostel view đẹp, sống ảo cháy máy luôn. Ai muốn đổi gió cuối tuần thì xuống đây là chuẩn bài nha. Must try!`
  },
  {
    name: 'Linh',
    locale: 'VN',
    lang: 'vn',
    text: `Vibe ở đây chill phết. 😎 Học surf mệt nhưng phê, may mà có team support nhiệt tình lắm. Đồ ăn ngon, giá hợp lý cho sinh viên. Thích nhất là không khí thân thiện, ai cũng hòa đồng như người nhà. Hẹn gặp lại team sớm nè!`
  }
]

const displayedReviews = ref([])

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
}

function noConsecutiveSameLang(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].lang === arr[i - 1].lang) return false
  }
  return true
}

onMounted(() => {
  // Try to shuffle so languages are not grouped; fallback to simple shuffle
  const copy = reviews.slice()
  let attempts = 0
  do {
    shuffleArray(copy)
    attempts++
  } while (!noConsecutiveSameLang(copy) && attempts < 20)

  displayedReviews.value = copy
})

</script>

<style scoped>
/* subtle card entrance */
.fade-in { animation: fadeIn 560ms ease both; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
</style>
