<template>
  <section id="contact" class="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">GET IN TOUCH</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Info Card -->
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="heading-sm mb-6">Contact Information</h3>

          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="text-3xl flex-shrink-0">📍</div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                <p class="text-gray-700 text-sm">
                  123 Tran Hung Dao Street<br/>
                  Vung Tau, Ba Ria - Vung Tau<br/>
                  Vietnam 79000
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl flex-shrink-0">📞</div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Phone</h4>
                <p class="text-gray-700 text-sm">
                  <a href="tel:+84906123456" class="text-teal-600 hover:text-teal-700 font-medium">
                    +84 (906) 123-456
                  </a>
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl flex-shrink-0">✉️</div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Email</h4>
                <p class="text-gray-700 text-sm">
                  <a href="mailto:info@surphostelvungtau.com" class="text-teal-600 hover:text-teal-700 font-medium">
                    info@surphostelvungtau.com
                  </a>
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-3xl flex-shrink-0">🕐</div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-1">Hours</h4>
                <p class="text-gray-700 text-sm">
                  Monday - Sunday<br/>
                  06:00 - 23:00 (Reception 24/7)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media Card -->
        <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-teal-100">
          <h3 class="heading-sm mb-6 text-teal-700">Follow us on Social Media</h3>
          
          <div class="space-y-3">
            <a href="https://instagram.com" target="_blank" class="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg transition-all hover:shadow-md border border-purple-200 hover:border-purple-400">
              <span class="text-3xl">📱</span>
              <span class="font-bold text-gray-800">Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" class="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all hover:shadow-md border border-blue-300 hover:border-blue-500">
              <span class="text-3xl">👥</span>
              <span class="font-bold text-gray-800">Facebook</span>
            </a>
            <a href="https://tiktok.com" target="_blank" class="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 rounded-lg transition-all hover:shadow-md border border-gray-700 hover:border-gray-500">
              <span class="text-3xl">🎬</span>
              <span class="font-bold text-white">TikTok</span>
            </a>
          </div>
          
          <div class="mt-6 pt-6 border-t border-teal-100">
            <p class="text-center text-gray-700 text-sm">
              <span class="block mb-2">📸 Tag us in your surfing adventures</span>
              <span class="font-bold text-teal-600">#SurfHostelVungTau</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Map Placeholder -->
      <div class="mt-12 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.6789!2d107.0863612!3d10.3335304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317565f5aa54ec31%3A0x8928dd1105611181!2sSurf%20Hostel!5e0!3m2!1sen!2s!4v1234567890"
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
</script>

<style scoped>
</style>
