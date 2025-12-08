<template>
  <section id="surfing" class="py-16 bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden">
    <!-- Animated Waves Background -->
    <WavesBackground />
    
    <div class="section-container relative z-10">
      <h2 class="heading-md text-center mb-12">SURF SCHOOL</h2>

      <div class="mb-8">
        <!-- Left Column - Courses -->
        <div class="slide-up">
          <p class="text-gray-700 mb-6 leading-relaxed font-semibold text-lg bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center">
            Learn to surf with professional instructors at one of Vietnam's best surfing spots!
          </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Adult Group Session -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-teal-600 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-teal-600 mb-2">👥 Group Session</h3>
              <p class="text-gray-600 mb-2 text-base">Up to 6 people per group</p>
              <ul class="text-gray-700 space-y-1 text-base">
                <li>✅ Max 6 surfers per session</li>
                <li>✅ 2 hours instruction</li>
                <li>✅ Professional instructors</li>
                <li>✅ Board & wetsuit</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">980,000 ₫ / person • 2 hr</p>
              <p class="text-sm mt-1"><a href="https://vungtausurfschool.setmore.com/polina" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">Book a lesson now</a></p>
            </div>

            <!-- Adult Paired Session -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-yellow-600 mb-2">👫 Paired Session</h3>
              <p class="text-gray-600 mb-2 text-base">Perfect for couples</p>
              <ul class="text-gray-700 space-y-1 text-base">
                <li>✅ 2 people per session</li>
                <li>✅ 2 hours instruction</li>
                <li>✅ Personalized attention</li>
                <li>✅ Transfer included</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">1,500,000 ₫ / person • 2 hr</p>
              <p class="text-sm mt-1"><a href="https://vungtausurfschool.setmore.com/polina" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">Book a lesson now</a></p>
            </div>

            <!-- Private Lessons -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-teal-500 mb-2">⭐ Individual Lesson</h3>
              <p class="text-gray-600 mb-2 text-base">1-on-1 custom training</p>
              <ul class="text-gray-700 space-y-1 text-base">
                <li>✅ Personal instructor</li>
                <li>✅ Flexible scheduling</li>
                <li>✅ All skill levels</li>
                <li>✅ Full equipment</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">2,800,000 ₫ / person • 2 hr</p>
              <p class="text-sm mt-1"><a href="https://vungtausurfschool.setmore.com/polina" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">Book a lesson now</a></p>
            </div>

            <!-- Children Sessions -->
            <div class="bg-white/85 backdrop-blur-sm p-5 rounded-lg shadow-md border-l-4 border-pink-500 hover:shadow-lg transition-shadow hover:bg-white/95">
              <h3 class="heading-sm text-pink-600 mb-2">🏄 Children Lessons</h3>
              <p class="text-gray-600 mb-2 text-base">2 hourss per session</p>
              <ul class="text-gray-700 space-y-1 text-base">
                <li>✅ Single: 750,000 ₫</li>
                <li>✅ 4-Pass: 375,000 ₫/session</li>
                <li>✅ Fun & safe learning</li>
                <li>✅ Junior equipment</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-3">4-Pack: 375,000 ₫ / session • 2 hrs each</p>
              <p class="text-sm mt-1"><a href="https://vungtausurfschool.setmore.com/polina" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline">Book a lesson now</a></p>
            </div>
          </div>
        </div>

        <!-- Booking Info - Accordion (collapsed by default) -->
        <div class="slide-up mt-8">
          <div class="bg-gradient-to-br from-blue-50/85 to-teal-50/85 backdrop-blur-sm rounded-lg border-2 border-teal-200/70 transition-colors overflow-hidden">
            <div
              role="button"
              tabindex="0"
              @click="bookingOpen = !bookingOpen"
              @keydown.enter="bookingOpen = !bookingOpen"
              class="p-4 cursor-pointer flex items-center justify-between"
            >
              <h4 class="font-bold text-gray-800 mb-0 text-lg">📅 Booking Information & Surf Spots</h4>
              <svg :class="bookingOpen ? 'rotate-180' : ''" class="w-8 h-8 transform transition-transform text-gray-700 drop-shadow-xl hover:scale-105" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd" />
              </svg>
            </div>

            <transition name="fade">
              <div v-show="bookingOpen" class="p-6 border-t border-teal-100">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Left Column - Booking Info -->
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-4 text-base">Lesson Details</h5>
                    <ul class="text-gray-700 space-y-3 text-base">
                      <li class="flex gap-2">
                        <div>
                          <strong>Schedule:</strong>
                          <p class="text-gray-600">Daily at 8:00 & 15:00</p>
                          <p class="text-gray-600 text-sm mt-1">Please arrive 15 minutes early at Surf Hostel</p>
                        </div>
                      </li>
                      <li class="flex gap-2">
                        <div>
                          <strong>Included:</strong>
                          <p class="text-gray-600">Transfer, theory & practice, equipment</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <strong>Note:</strong>
                          <p class="text-gray-600">In the morning the instructor checks conditions and sends exact confirmation whether the surf session will run</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <!-- Right Column - Surf Spots -->
                  <div>
                    <h5 class="font-semibold text-gray-900 mb-4 text-base">Our Surfing Spots</h5>
                    <ul class="text-gray-700 space-y-3 text-base">
                      <li class="mb-6">
                        <h6 class="font-semibold text-gray-900">Back Beach - Main City Spot</h6>
                        <p class="text-sm text-gray-700 mb-2">🟢 All Levels | 🏖️ Sandy Bottom | 🌊 Endless Peaks</p>
                        <p class="text-gray-600 text-sm">The heart of Vung Tau surfing. Kilometers of beach with endless sandbanks create countless peaks, guaranteeing an uncrowded lineup. Fun, consistent, and safe - perfect for your first wave or a chill longboard session.</p>
                      </li>

                      <li class="mb-6">
                        <h6 class="font-semibold text-gray-900">Saint Jacques Cape & Hon Ba - The Adventure Zone</h6>
                        <p class="text-sm text-gray-700 mb-2">🔴 Advanced Only | 🪨 Rocky Bottom | ⚡ Powerful Swell</p>
                        <p class="text-gray-600 text-sm">Scenic, heavy, and strictly for the experienced. This zone offers the city's most powerful waves wrapping around the cape. Expect strong currents, rocky bottoms, and adrenaline. Caution: Low tide access only.</p>
                      </li>

                      <li>
                        <h6 class="font-semibold text-gray-900">Bai Dua - The Storm Shelter</h6>
                        <p class="text-sm text-gray-700 mb-2">🟡 Intermediate | 🛡️ Protected Cove | 🌬️ Wind Safe</p>
                        <p class="text-gray-600 text-sm">Our secret weapon when the main beaches get blown out. Located near Soho Coffee, this spot is naturally sheltered from strong winds and heavy swells. It’s the perfect "session saver" when conditions elsewhere are too rough.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Full Width Booking Button -->
      <div class="mb-12">
        <a href="https://vungtausurfschool.setmore.com/polina" target="_blank" rel="noopener noreferrer" class="w-full inline-block px-8 py-4 bg-gradient-to-r from-lime-300 to-lime-500 text-gray-900 rounded-lg hover:from-lime-200 hover:to-lime-500 font-bold transition-all hover:scale-105 shadow-lg text-lg text-center">
          🏄 Book a Lesson
        </a>
      </div>

      <!-- Instructors -->
      <div class="mt-16">
        <h3 class="heading-md text-center mb-8">OUR INSTRUCTORS</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Instructor: Konstantin Roginsky -->
            <div class="text-center fade-in">
              <img
                :src="imgKonstantin"
                alt="Konstantin"
                class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h4 class="heading-sm">Konstantin</h4>
              <p class="text-gray-600 text-sm mb-2">The Surf Guru & Head Coach • 15+ years</p>
              <div class="flex justify-center gap-2 mb-3">
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">English</span>
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Russian</span>
              </div>
              <ul class="text-gray-700 text-sm text-left max-w-md mx-auto space-y-1">
                <li>• Champion of the Vung Tau Surf Festival.</li>
                <li>• Founder of the first surf school in Crimea & President of the Federation.</li>
                <li>• Veteran competitor with national championship experience.</li>
                <li><span class="font-semibold text-black">Specialty:</span> Making you fall in love with waves.</li>
              </ul>
            </div>

            <!-- Instructor: Cảnh (Local) -->
            <div class="text-center fade-in">
              <img
                :src="imgCan"
                alt="Cảnh"
                class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h4 class="heading-sm">Cảnh</h4>
              <p class="text-gray-600 text-sm mb-2">The Local Legend • Vung Tau Native</p>
              <div class="flex justify-center gap-2 mb-3">
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Vietnamese</span>
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">English</span>
              </div>
              <ul class="text-gray-700 text-sm text-left max-w-md mx-auto space-y-1">
                <li>• Lifelong local with intimate knowledge of every surf spot.</li>
                <li>• Knows hidden breaks, currents and local tides.</li>
                <li>• Famous for raw, authentic surfing style.</li>
                <li><span class="font-semibold text-black">Specialty:</span> Showing you real Vietnamese surf vibes.</li>
              </ul>
            </div>

            <!-- Instructor: Polina -->
            <div class="text-center fade-in">
              <img
                :src="imgPolina"
                alt="Polina"
                class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
              />
              <h4 class="heading-sm">Polina</h4>
              <p class="text-gray-600 text-sm mb-2">Queen of Longboard • Certified Pro Coach</p>
              <div class="flex justify-center gap-2 mb-3">
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">English</span>
                <span class="text-xs px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Russian</span>
              </div>
              <ul class="text-gray-700 text-sm text-left max-w-md mx-auto space-y-1">
                <li>• Silver medalist in Longboard; Master of Sports in swimming.</li>
                <li>• Certified surf coach emphasizing safety (CPR & rescue trained).</li>
                <li>• Blends professional technique with graceful style.</li>
                <li><span class="font-semibold text-black">Specialty:</span>Taking you from zero to hero.</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WavesBackground from './WavesBackground.vue'
import imgKonstantin from '../../foto/2.png'
import imgCan from '../../foto/3.png'
import imgPolina from '../../foto/1.png'
import { ref } from 'vue'

const bookingOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 240ms ease, transform 240ms ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
