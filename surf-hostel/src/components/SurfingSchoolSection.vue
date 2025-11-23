<template>
  <section id="surfing" class="py-16 bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Animated Waves Background -->
    <WavesBackground />
    
    <div class="section-container relative z-10">
      <h2 class="heading-md text-center mb-12">SURF SCHOOL</h2>

      <div class="mb-8">
        <!-- Left Column - Courses -->
        <div class="slide-up">
          <p class="text-gray-700 mb-6 leading-relaxed font-semibold text-lg bg-white/80 backdrop-blur-sm p-4 rounded-lg">
            Learn to surf with professional instructors at one of Vietnam's best surfing spots!
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Adult Group Session -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-teal-600 mb-2">👥 Group Session</h3>
              <p class="text-gray-600 mb-2 text-sm">Up to 6 people per group</p>
              <ul class="text-gray-700 space-y-1 text-xs">
                <li>✅ Max 6 surfers per session</li>
                <li>✅ 1 hour instruction</li>
                <li>✅ Professional instructors</li>
                <li>✅ Board & wetsuit</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">980,000 ₫ / person/hr</p>
            </div>

            <!-- Adult Paired Session -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-yellow-600 mb-2">👫 Paired Session</h3>
              <p class="text-gray-600 mb-2 text-sm">Perfect for couples</p>
              <ul class="text-gray-700 space-y-1 text-xs">
                <li>✅ 2 people per session</li>
                <li>✅ 1 hour instruction</li>
                <li>✅ Personalized attention</li>
                <li>✅ Transfer included</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">1,500,000 ₫ / person/hr</p>
            </div>

            <!-- Private Lessons -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-teal-500 mb-2">⭐ Individual Lesson</h3>
              <p class="text-gray-600 mb-2 text-sm">1-on-1 custom training</p>
              <ul class="text-gray-700 space-y-1 text-xs">
                <li>✅ Personal instructor</li>
                <li>✅ Flexible scheduling</li>
                <li>✅ All skill levels</li>
                <li>✅ Full equipment</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">2,800,000 ₫ / person/hr</p>
            </div>

            <!-- Children Sessions -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-pink-600 mb-2">🏄 Children Lessons</h3>
              <p class="text-gray-600 mb-2 text-sm">2 hours per session</p>
              <ul class="text-gray-700 space-y-1 text-xs">
                <li>✅ Single: 750,000 ₫</li>
                <li>✅ 4-Pass: 375,000 ₫/session</li>
                <li>✅ Fun & safe learning</li>
                <li>✅ Junior equipment</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">2 hours / session</p>
            </div>
          </div>
        </div>

        <!-- Booking Info - Full Width Below -->
        <div class="slide-up mt-8">
          <!-- Booking Info -->
          <div class="bg-gradient-to-br from-blue-50/85 to-teal-50/85 backdrop-blur-sm p-6 rounded-lg border-2 border-teal-200/70 hover:border-teal-300/90 transition-colors">
            <h4 class="font-bold text-gray-800 mb-4 text-lg">📅 Booking Information</h4>
            <ul class="text-gray-700 space-y-3 text-sm">
              <li class="flex gap-2">
                <span>📍</span>
                <div>
                  <strong>Schedule:</strong>
                  <p class="text-gray-600">Daily at 8:00 & 15:00</p>
                </div>
              </li>
              <li class="flex gap-2">
                <span>🚐</span>
                <div>
                  <strong>Included:</strong>
                  <p class="text-gray-600">Transfer, theory & practice, equipment</p>
                </div>
              </li>
              <li class="flex gap-2">
                <span>💳</span>
                <div>
                  <strong>Prepayment:</strong>
                  <p class="text-gray-600">Group 250,000₫ | Individual 500,000₫</p>
                </div>
              </li>
              <li class="flex gap-2">
                <span>⚠️</span>
                <div>
                  <strong>Note:</strong>
                  <p class="text-gray-600">Group size reduces in difficult weather</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Full Width Booking Button -->
      <div class="mb-12">
        <button class="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-lg hover:from-yellow-500 hover:to-yellow-600 font-bold transition-all hover:scale-105 shadow-lg text-lg">
          📞 Book a Lesson
        </button>
      </div>

      <!-- Instructors -->
      <div class="mt-16">
        <h3 class="heading-md text-center mb-8">OUR INSTRUCTORS</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Anh Minh</h4>
            <p class="text-gray-600 text-sm mb-2">Lead Instructor • 10 years experience</p>
            <p class="text-gray-700 text-sm">Local surfing master from Vung Tau. Specializes in teaching beginners.</p>
          </div>

          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Sofia</h4>
            <p class="text-gray-600 text-sm mb-2">Instructor • 7 years experience</p>
            <p class="text-gray-700 text-sm">International surfer. Expert in advanced technique instruction.</p>
          </div>

          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Tommy</h4>
            <p class="text-gray-600 text-sm mb-2">Instructor • 5 years experience</p>
            <p class="text-gray-700 text-sm">Surfing enthusiast with infectious energy. Great with children.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WavesBackground from './WavesBackground.vue'
</script>

<style scoped>
</style>
