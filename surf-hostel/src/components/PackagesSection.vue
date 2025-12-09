<template>
  <section id="packages" class="py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
    <div class="section-container">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h2 class="heading-md mb-4">CHOOSE YOUR VIBE</h2>
        <div class="mb-8 text-center text-gray-600">✓ Surfing Lessons with Champions ✓ Professional Equipment ✓ Adults & Kids</div>
      </div>

      <!-- Initial Choice Section -->
      <div v-if="!selectedType" class="mb-16 p-12 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">🏄 Where Do You Want to Stay?</h3>
          <p class="text-lg text-gray-600 mb-12">Choose your accommodation type and discover the perfect surf camp package for you</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Hostel Option -->
            <button
              @click="selectedType = 'hostel'"
              class="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-3 border-orange-500 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <div class="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-5 transition-all"></div>
              <div class="relative z-10">
                <div class="text-6xl mb-4">🏠</div>
                <h4 class="text-2xl font-bold text-gray-900 mb-2">Hostel</h4>
                <p class="text-base text-gray-700 mb-6">Social vibes & shared experiences</p>
                <div class="space-y-2 text-sm text-gray-600 mb-6">
                  <p>✓ Shared rooms</p>
                  <p>✓ Budget-friendly</p>
                  <p>✓ Great for making friends</p>
                </div>
                <div class="inline-block px-6 py-2 bg-orange-500 text-white font-bold rounded-lg group-hover:bg-orange-600 transition-all">
                  Explore Hostel Package →
                </div>
              </div>
            </button>

            <!-- Hotel Option -->
            <button
              @click="selectedType = 'hotel'"
              class="group relative overflow-hidden rounded-xl p-8 bg-gradient-to-br from-blue-50 to-cyan-50 border-3 border-blue-500 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              <div class="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-all"></div>
              <div class="relative z-10">
                <div class="text-6xl mb-4">🏨</div>
                <h4 class="text-2xl font-bold text-gray-900 mb-2">Hotel</h4>
                <p class="text-base text-gray-700 mb-6">Comfort & privacy with luxury</p>
                <div class="space-y-2 text-sm text-gray-600 mb-6">
                  <p>✓ Private rooms</p>
                  <p>✓ Ocean views</p>
                  <p>✓ Premium amenities</p>
                </div>
                <div class="inline-block px-6 py-2 bg-blue-500 text-white font-bold rounded-lg group-hover:bg-blue-600 transition-all">
                  Explore Hotel Package →
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Package Section (appears after selection) -->
      <div v-if="selectedType" class="animate-fadeIn">
        <!-- Back Button & Selection Header -->
        <div class="mb-12 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <button
            @click="selectedType = null"
            class="inline-block w-full md:w-auto px-6 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all"
          >
            ← Back to Selection
          </button>
          <h3 class="text-2xl font-bold text-gray-900 text-center md:text-left">
            {{ selectedType === 'hostel' ? '🏠 Hostel Package' : '🏨 Hotel Package' }}
          </h3>
          <div class="w-40 hidden md:block"></div>
        </div>

        <!-- Package Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          <!-- Surf Camp (Hostel) -->
          <div v-if="selectedType === 'hostel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-orange-500 relative group animate-fadeIn">
            <div class="absolute top-3 right-3 z-10">
              <div class="bg-gradient-to-r from-orange-500 to-orange-300 text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg">
                ⭐ BESTSELLER
              </div>
            </div>
            <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">🔥 Surf Camp</h2>
              <p class="text-orange-100 text-base">Shared Room in a Hostel • Beginner Friendly</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-base text-gray-600 mb-2">Price per person / day</p>
                <div class="flex items-baseline gap-3">
                  <p class="text-lg md:text-xl font-bold text-gray-400 line-through">1.900.000 ₫</p>
                  <p class="text-2xl md:text-4xl font-black text-orange-600">1.330.000 ₫</p>
                </div>
                <p class="text-sm text-orange-600 font-bold mt-2 bg-orange-100 inline-block px-3 py-1 rounded">💰 FREE Accommodation + Save 800K!</p>
              </div>
              <div class="mb-6">
                <h4 class="font-semibold text-lg mb-3">✅ INCLUDED</h4>
                <ul class="space-y-2 text-base text-gray-700">
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Accommodation (Room / Bed)</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Daily Breakfast</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Daily Surf Lesson (Any Level)</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Board Rental for the Lessons</span></li>
                </ul>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="font-semibold text-lg mb-3">✅ FOR FREE</h4>
                <ul class="space-y-2 text-base text-gray-700">
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Instructor Support & Safety Briefing</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Photo & Video Content</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Transfer to Surf Spot</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Access to All SURF DOM Locations</span></li>
                  <li class="flex gap-3"><span class="text-orange-500">✓</span><span>Help with Bikes & Local Services</span></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right-side inquiry form for hostel -->
          <div v-if="selectedType === 'hostel'" class="rounded-xl overflow-hidden bg-white hidden md:flex flex-col p-8 shadow-lg">
            <form @submit.prevent="sendInquiry('hostel')" class="w-full space-y-3 flex flex-col h-full">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Send Booking Inquiry</h3>
              
              <div class="flex-1 overflow-y-auto space-y-3 pr-2">
                <!-- Name Input -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Enter your name"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Email Input -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="your@email.com"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Country + Phone -->
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Country</label>
                    <select
                      v-model="formData.country"
                      class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-xs"
                      required
                    >
                      <option value="">Select country</option>
                      <option v-for="c in countryList" :key="c.code" :value="c.code">
                        {{ c.flag }} {{ c.name }} {{ c.code }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      :placeholder="getPhonePlaceholder"
                      class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <!-- Check-in Date -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">📅 Check-in Date</label>
                  <input
                    v-model="formData.checkInDate"
                    type="date"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Check-out Date -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">📅 Check-out Date</label>
                  <input
                    v-model="formData.checkOutDate"
                    type="date"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Message Textarea -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">💬 Message</label>
                  <textarea
                    v-model="formData.message"
                    placeholder="Any specific requests or questions..."
                    rows="2"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none text-xs"
                  ></textarea>
                </div>

                <!-- Success Message -->
                <div v-if="successMessage" class="p-3 bg-green-100 border-2 border-green-500 rounded-lg text-green-800 text-xs">
                  ✅ {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="p-3 bg-red-100 border-2 border-red-500 rounded-lg text-red-800 text-xs">
                  ❌ {{ errorMessage }}
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-bold py-2 rounded-lg transition-all mt-4 text-sm"
              >
                {{ isLoading ? '⏳ Sending...' : 'Send Inquiry ➤' }}
              </button>
            </form>
          </div>

          <!-- Surf Camp Hotel (single option) -->
          <div v-if="selectedType === 'hotel'" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-l-4 border-blue-500 animate-fadeIn">
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <h2 class="heading-sm text-white mb-1">🏨 Surf Camp Hotel</h2>
              <p class="text-blue-100 text-base">Private 2, 3 or 4 person room in a hotel</p>
            </div>
            <div class="p-6 flex flex-col h-full">
              <div class="mb-6 pb-6 border-b border-gray-200">
                <p class="text-sm text-gray-600 mb-1">Price per person / day starts at</p>
                <p class="text-2xl md:text-4xl font-black text-blue-600">1.780.000 ₫</p>
                <p class="text-sm text-blue-600 font-bold mt-2 bg-blue-100 inline-block px-3 py-1 rounded">comfort & privacy</p>
              </div>
              <div class="mb-6">
                <h4 class="font-semibold text-lg mb-3">✅ INCLUDED</h4>
                <ul class="space-y-2 text-base text-gray-700">
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Accommodation (Private Room)</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Daily Breakfast</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Daily Surf Lesson (Any Level)</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Board Rental for the Lesson</span></li>
                </ul>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="font-semibold text-lg mb-3">✅ FOR FREE</h4>
                <ul class="space-y-2 text-base text-gray-700">
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Instructor Support & Safety Briefing</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Photo & Video Content</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Transfer to Surf Spot</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Access to All SURF DOM   Locations</span></li>
                  <li class="flex gap-3"><span class="text-blue-500">✓</span><span>Help with Bikes & Local Services</span></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right-side inquiry form for hotel -->
          <div v-if="selectedType === 'hotel'" class="rounded-xl overflow-hidden bg-white hidden md:flex flex-col p-8 shadow-lg">
            <form @submit.prevent="sendInquiry('hotel')" class="w-full space-y-3 flex flex-col h-full">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Send Booking Inquiry</h3>
              
              <div class="flex-1 overflow-y-auto space-y-3 pr-2">
                <!-- Name Input -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Enter your name"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Email Input -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="your@email.com"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Country + Phone -->
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Country</label>
                    <select
                      v-model="formData.country"
                      class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs"
                      required
                    >
                      <option value="">Select country</option>
                      <option v-for="c in countryList" :key="c.code" :value="c.code">
                        {{ c.flag }} {{ c.name }} {{ c.code }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      :placeholder="getPhonePlaceholder"
                      class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <!-- Check-in Date -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">📅 Check-in Date</label>
                  <input
                    v-model="formData.checkInDate"
                    type="date"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Check-out Date -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">📅 Check-out Date</label>
                  <input
                    v-model="formData.checkOutDate"
                    type="date"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                    required
                  />
                </div>

                <!-- Message Textarea -->
                <div>
                  <label class="block text-xs font-semibold text-gray-700 mb-1">💬 Message</label>
                  <textarea
                    v-model="formData.message"
                    placeholder="Any specific requests or questions..."
                    rows="2"
                    class="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-xs"
                  ></textarea>
                </div>

                <!-- Success Message -->
                <div v-if="successMessage" class="p-3 bg-green-100 border-2 border-green-500 rounded-lg text-green-800 text-xs">
                  ✅ {{ successMessage }}
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="p-3 bg-red-100 border-2 border-red-500 rounded-lg text-red-800 text-xs">
                  ❌ {{ errorMessage }}
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 rounded-lg transition-all mt-4 text-sm"
              >
                {{ isLoading ? '⏳ Sending...' : 'Send Inquiry ➤' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Group Discount Section -->
        <div class="mb-16 p-8 md:p-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl border-2 border-purple-300 animate-fadeIn">
          <div class="max-w-2xl mx-auto text-center">
            <h3 class="heading-sm text-purple-900 mb-4">🎉 TRAVELING WITH A GROUP?</h3>
            <p class="text-lg text-gray-800 mb-3 font-semibold">Get a Group Discount on Any Package!</p>
            <p class="text-base text-gray-700 mb-4">
              Minimum 5 people: <strong>Your discount % = your group size</strong>
            </p>
            <p class="text-sm text-gray-600 italic mb-4">
              Example: Group of 10 people = 10% discount on all Package
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-300">
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Any combination</p>
                <p class="text-xs text-gray-600">Mix & match any Package</p>
              </div>
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Fully customizable</p>
                <p class="text-xs text-gray-600">Tailored to your group</p>
              </div>
              <div>
                <p class="text-sm font-semibold text-purple-700">✓ Easy to manage</p>
                <p class="text-xs text-gray-600">Flexible arrangements</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
          <div class="text-center animate-fadeIn">
          <h3 class="heading-sm text-gray-900 mb-6">Ready for a new adventure?</h3>
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            No matter which package you choose, an unforgettable experience awaits you at SURF DOM.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/84977724210" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-bold transition-all hover:scale-105 shadow-lg inline-block text-center">
              📞 Book Now (WhatsApp)
            </a>
            <a href="https://wa.me/84977724210" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-50 font-bold transition-all inline-block text-center">
              📧 Send Inquiry (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

// ============================================
// STATE MANAGEMENT
// ============================================

const selectedType = ref(null)

const formData = ref({
  name: '',
  email: '',
  country: '',
  phone: '',
  checkInDate: '',
  checkOutDate: '',
  message: ''
})

const isLoading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// ============================================
// COUNTRY LIST WITH PHONE CODES
// ============================================

const countryList = [
  { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
  { name: 'Algeria', code: '+213', flag: '🇩🇿' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Belarus', code: '+375', flag: '🇧🇾' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Belize', code: '+501', flag: '🇧🇿' },
  { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Brunei', code: '+673', flag: '🇧🇳' },
  { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
  { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
  { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
  { name: 'Croatia', code: '+385', flag: '🇭🇷' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'East Timor', code: '+670', flag: '🇹🇱' },
  { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
  { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
  { name: 'Fiji', code: '+679', flag: '🇫🇯' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'Ghana', code: '+233', flag: '🇬🇭' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
  { name: 'Honduras', code: '+504', flag: '🇭🇳' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Iceland', code: '+354', flag: '🇮🇸' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Iran', code: '+98', flag: '🇮🇷' },
  { name: 'Iraq', code: '+964', flag: '🇮🇶' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Jamaica', code: '+1-876', flag: '🇯🇲' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
  { name: 'Laos', code: '+856', flag: '🇱🇦' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
  { name: 'Nepal', code: '+977', flag: '🇳🇵' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'North Korea', code: '+850', flag: '🇰🇵' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Oman', code: '+968', flag: '🇴🇲' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Panama', code: '+507', flag: '🇵🇦' },
  { name: 'Papua New Guinea', code: '+675', flag: '🇵🇬' },
  { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Qatar', code: '+974', flag: '🇶🇦' },
  { name: 'Romania', code: '+40', flag: '🇷🇴' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Samoa', code: '+685', flag: '🇼🇸' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Serbia', code: '+381', flag: '🇷🇸' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Trinidad & Tobago', code: '+1-868', flag: '🇹🇹' },
  { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Uganda', code: '+256', flag: '🇺🇬' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Yemen', code: '+967', flag: '🇾🇪' },
]

// Get phone placeholder based on selected country
const getPhonePlaceholder = computed(() => {
  return '123456789'
})

// ============================================
// EMAILJS INITIALIZATION
// ============================================

// Initialize EmailJS with your public key
emailjs.init('L81fHctOFfSEzjh0g')

// ============================================
// FORM SUBMISSION
// ============================================

const sendInquiry = async (packageType) => {
  isLoading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    // Validate form
    if (!formData.value.name.trim() || !formData.value.email.trim()) {
      throw new Error('Please fill in name and email fields')
    }

    if (!formData.value.checkInDate || !formData.value.checkOutDate) {
      throw new Error('Please select both check-in and check-out dates')
    }

    if (new Date(formData.value.checkOutDate) <= new Date(formData.value.checkInDate)) {
      throw new Error('Check-out date must be after check-in date')
    }

    // Calculate number of nights
    const checkIn = new Date(formData.value.checkInDate)
    const checkOut = new Date(formData.value.checkOutDate)
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))

    // Determine package name for better context
    const packageName = packageType === 'hostel' ? '🏠 Hostel Package' : '🏨 Hotel Package'
    const fullPhone = `${formData.value.country}${formData.value.phone}`

    // Send email using EmailJS
    const response = await emailjs.send(
      'service_3imlx22',       // Service ID
      'template_mocfu5m',      // Template ID
      {
        to_email: 'vungtausurfschool@gmail.com',
        user_name: formData.value.name,
        user_email: formData.value.email,
        package: packageName,
        phone: fullPhone,
        check_in: formData.value.checkInDate,
        check_out: formData.value.checkOutDate,
        nights: nights.toString(),
        message: formData.value.message || 'No additional message',
        reply_to: formData.value.email
      }
    )

    if (response.status === 200) {
      successMessage.value = `✅ Your inquiry was sent successfully! We'll contact you at ${formData.value.email} soon.`

      // Reset form
      formData.value = {
        name: '',
        email: '',
        country: '',
        phone: '',
        checkInDate: '',
        checkOutDate: '',
        message: ''
      }

      // Clear message after 5 seconds
      setTimeout(() => {
        successMessage.value = ''
      }, 5000)
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    errorMessage.value = `❌ Error: ${error.message || 'Failed to send inquiry. Please try WhatsApp instead.'}`

    // Clear error after 6 seconds
    setTimeout(() => {
      errorMessage.value = ''
    }, 6000)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-out;
}
</style>
