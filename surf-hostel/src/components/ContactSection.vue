<template>
  <section id="contact" class="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">SKONTAKTUJ SIĘ Z NAMI</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="heading-sm mb-6">Wyślij wiadomość</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label class="block text-gray-700 font-medium mb-2">Imię</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Temat</label>
              <select v-model="form.subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600">
                <option value="booking">Rezerwacja pokoju</option>
                <option value="lesson">Lekcja surfingu</option>
                <option value="tour">Wycieczka</option>
                <option value="other">Inne pytanie</option>
              </select>
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Wiadomość</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold transition-all hover:scale-105"
            >
              Wyślij wiadomość
            </button>

            <p v-if="formSubmitted" class="text-green-600 text-center font-semibold">
              ✓ Dziękujemy za wiadomość! Odezwiemy się wkrótce.
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <!-- Info Card -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="heading-sm mb-6">Informacje Kontaktowe</h3>

            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="text-3xl">📍</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Adres</h4>
                  <p class="text-gray-700">
                    123 Tran Hung Dao Street<br/>
                    Vung Tau, Ba Ria - Vung Tau<br/>
                    Vietnam 79000
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="text-3xl">📞</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <p class="text-gray-700">
                    <a href="tel:+84906123456" class="text-teal-600 hover:text-teal-700">
                      +84 (906) 123-456
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="text-3xl">✉️</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                  <p class="text-gray-700">
                    <a href="mailto:info@surphostelvungtau.com" class="text-teal-600 hover:text-teal-700">
                      info@surphostelvungtau.com
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="text-3xl">🕐</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Godziny Otwarcia</h4>
                  <p class="text-gray-700">
                    Poniedziałek - Niedziela<br/>
                    06:00 - 23:00 (Reception 24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-gradient-to-r from-teal-600 to-teal-700 p-8 rounded-lg shadow-lg text-white">
            <h3 class="font-semibold mb-4">Śledź nas na social mediach</h3>
            <div class="flex gap-4">
              <a href="https://instagram.com" target="_blank" class="text-2xl hover:text-yellow-300 transition-colors">
                📱 Instagram
              </a>
              <a href="https://facebook.com" target="_blank" class="text-2xl hover:text-yellow-300 transition-colors">
                👥 Facebook
              </a>
              <a href="https://tiktok.com" target="_blank" class="text-2xl hover:text-yellow-300 transition-colors">
                🎬 TikTok
              </a>
            </div>
            <p class="mt-4 text-teal-100 text-sm">
              Taguj nas w twoich wygodach surfingu #SurfHostelVungTau
            </p>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="mt-12 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.7262829450606!2d107.0646!3d10.2408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756d89c5f8e7fb%3A0x1234567890abcdef!2sVung%20Tau!5e0!3m2!1spl!2s!4v1234567890"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: 'booking',
  message: ''
})

const formSubmitted = ref(false)

const submitForm = () => {
  // Here you would typically send the form to a backend
  console.log('Form submitted:', form)
  formSubmitted.value = true
  
  // Reset form after 3 seconds
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.subject = 'booking'
    form.message = ''
    formSubmitted.value = false
  }, 3000)
}
</script>

<style scoped>
</style>
