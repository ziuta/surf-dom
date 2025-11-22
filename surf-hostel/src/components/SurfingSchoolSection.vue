<template>
  <section id="surfing" class="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">SURF SCHOOL</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="slide-up">
          <p class="text-gray-700 mb-6 leading-relaxed">
            Learn to surf with professional instructors at one of Vietnam's best surfing spots!
          </p>

          <div class="space-y-6">
            <!-- Beginner Course -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 class="heading-sm text-teal-600 mb-2">🌊 Beginner Course</h3>
              <p class="text-gray-600 mb-3">Perfect for those with no experience</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ 5 days - 15 hours of instruction</li>
                <li>✅ Maximum 4 surfers per instructor</li>
                <li>✅ Surfboard + wetsuit + instructor included</li>
                <li>✅ Beginner-friendly waves</li>
                <li>✅ Certificate upon completion</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Price: $199 / 5 days</p>
            </div>

            <!-- Intermediate Course -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 class="heading-sm text-yellow-600 mb-2">🏄 Intermediate Course</h3>
              <p class="text-gray-600 mb-3">For those with basic knowledge</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ 3 days - 9 hours of instruction</li>
                <li>✅ Advanced technique</li>
                <li>✅ Variety of wave types</li>
                <li>✅ Ocean safety</li>
                <li>✅ 1-on-1 or small group</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Price: $149 / 3 days</p>
            </div>

            <!-- Private Lessons -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <h3 class="heading-sm text-teal-500 mb-2">⭐ Private Lessons</h3>
              <p class="text-gray-600 mb-3">Customized training program</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ Personalized instruction</li>
                <li>✅ Flexible hours</li>
                <li>✅ For all skill levels</li>
                <li>✅ Professional instructors</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Price: $45 / hour</p>
            </div>
          </div>

          <button class="mt-8 px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 font-semibold transition-all hover:scale-105">
            Book a Lesson
          </button>
        </div>

        <!-- Image -->
        <div class="overflow-hidden rounded-lg shadow-lg fade-in">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80"
            alt="Surfing School"
            class="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
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
</script>

<style scoped>
</style>
