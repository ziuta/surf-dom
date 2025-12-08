<template>
  <footer class="bg-gray-900 text-white py-12 md:py-12 relative overflow-hidden">
    <!-- Footer Waves -->
    <FooterWaves />
    
    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h4 class="font-bold text-lg mb-4 text-yellow-400">Surf DOM</h4>
          <p class="text-gray-400 text-base">
            Your best hostel for learning to surf in Vung Tau, Vietnam. Experience surf, culture, and friendship.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold mb-4 text-yellow-400">Quick Links</h4>
          <ul class="space-y-2 text-base text-gray-400">
            <li><a href="#about" class="hover:text-teal-400 transition-colors">About</a></li>
            <li><a href="#surfing" class="hover:text-teal-400 transition-colors">Surf School</a></li>
            <li><a href="#activities" class="hover:text-teal-400 transition-colors">Activities</a></li>
            <li><a href="#gallery" class="hover:text-teal-400 transition-colors">Gallery</a></li>
            <li><a href="#contact" class="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold mb-4 text-yellow-400">Services</h4>
          <ul class="space-y-2 text-base text-gray-400">
            <li><a href="https://wa.me/84977724210" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors">Room Booking (WhatsApp)</a></li>
            <li><a href="#" class="hover:text-teal-400 transition-colors">Surf Lessons</a></li>
            <li><a href="#" class="hover:text-teal-400 transition-colors">Tours</a></li>
            <li><a href="#" class="hover:text-teal-400 transition-colors">Private Lessons</a></li>
            <li><a href="#" class="hover:text-teal-400 transition-colors">Corporate Events</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-bold mb-4 text-yellow-400">Follow Us</h4>
          <div class="flex flex-col gap-2 text-base text-gray-300">
            <a href="https://www.facebook.com/SURFDOMvungtau/" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/vungtausurfschool/?next=%2F" target="_blank" rel="noopener noreferrer" class="hover:text-teal-400 transition-colors">Instagram</a>
          </div>
          <p class="text-base text-gray-400 mt-4">Please tag us @vungtausurfschool</p>
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-black">
    <div class="section-container text-center py-3">
      <p class="text-white text-sm">Made with 🔥 by <a href="https://ogien.net/" target="_blank" rel="noopener noreferrer" class="underline">ogien.net</a></p>
    </div>
  </div>
</template>

<script setup>
import FooterWaves from './FooterWaves.vue'
</script>

<style scoped>
</style>
