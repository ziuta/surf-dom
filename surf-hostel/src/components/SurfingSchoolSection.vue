<template>
  <section id="surfing" class="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">SZKOŁA SURFINGU</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="slide-up">
          <p class="text-gray-700 mb-6 leading-relaxed">
            Naucz się surfować z profesjonalnymi instruktorami w jednym z najlepszych miejsc surfingowych Wietnamu!
          </p>

          <div class="space-y-6">
            <!-- Beginner Course -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-600">
              <h3 class="heading-sm text-teal-600 mb-2">🌊 Kurs Początkujących</h3>
              <p class="text-gray-600 mb-3">Idealne dla osób bez doświadczenia</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ 5 dni - 15 godzin nauki</li>
                <li>✅ Maksymalnie 4 osoby na instruktora</li>
                <li>✅ Tablica surfingowa + peniaz + instruktor</li>
                <li>✅ Bezpieczne, słabsze fale</li>
                <li>✅ Certyfikat ukończenia</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Cena: $199 / 5 dni</p>
            </div>

            <!-- Intermediate Course -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 class="heading-sm text-yellow-600 mb-2">🏄 Kurs Pośredni</h3>
              <p class="text-gray-600 mb-3">Dla osób z podstawową wiedzą</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ 3 dni - 9 godzin nauki</li>
                <li>✅ Technika zaawansowana</li>
                <li>✅ Różne rodzaje fal</li>
                <li>✅ Bezpieczeństwo w oceanie</li>
                <li>✅ 1-na-1 lub mała grupa</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Cena: $149 / 3 dni</p>
            </div>

            <!-- Private Lessons -->
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <h3 class="heading-sm text-teal-500 mb-2">⭐ Prywatne Lekcje</h3>
              <p class="text-gray-600 mb-3">Indywidualny program treningowy</p>
              <ul class="text-gray-700 space-y-2 text-sm">
                <li>✅ Personalizowana nauka</li>
                <li>✅ Elastyczne godziny</li>
                <li>✅ Dla każdego poziomu</li>
                <li>✅ Profesjonalni instruktorzy</li>
              </ul>
              <p class="text-yellow-600 font-bold mt-4">Cena: $45 / godzina</p>
            </div>
          </div>

          <button class="mt-8 px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 font-semibold transition-all hover:scale-105">
            Zarezerwuj Lekcję
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
        <h3 class="heading-md text-center mb-8">NASI INSTRUKTORZY</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Anh Minh</h4>
            <p class="text-gray-600 text-sm mb-2">Instruktor główny • 10 lat doświadczenia</p>
            <p class="text-gray-700 text-sm">Lokalny mistrz surfingu z Vung Tau. Specjalista w nauczaniu początkujących.</p>
          </div>

          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Sofia</h4>
            <p class="text-gray-600 text-sm mb-2">Instruktor • 7 lat doświadczenia</p>
            <p class="text-gray-700 text-sm">Międzynarodowa surferka. Specjalistka w nauczaniu techniki zaawansowanej.</p>
          </div>

          <div class="text-center fade-in">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
              alt="Instructor"
              class="w-48 h-48 rounded-full object-cover mx-auto mb-4 shadow-lg"
            />
            <h4 class="heading-sm">Tommy</h4>
            <p class="text-gray-600 text-sm mb-2">Instruktor • 5 lat doświadczenia</p>
            <p class="text-gray-700 text-sm">Entuzjasta surfingu z energią zaraźliwą. Świetnie pracuje z dziećmi.</p>
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
