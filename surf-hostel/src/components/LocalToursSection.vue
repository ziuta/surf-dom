<template>
  <section id="tours" class="py-16 bg-white">
    <div class="section-container">
      <h2 class="heading-md text-center mb-12">LOKALNE WYCIECZKI & ATRAKCJE</h2>
      <p class="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Odkrywaj piękno Vung Tau i okolic z naszymi specjalistycznymi wycieczkami organizowanymi przez doświadczonych lokalnych przewodników.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Vung Tau City Tours -->
        <div class="bg-gradient-to-br from-teal-50 to-white p-8 rounded-lg shadow-lg border-2 border-teal-200 slide-up">
          <h3 class="heading-sm text-teal-600 mb-4">🏙️ Wycieczki po Vung Tau</h3>
          <p class="text-gray-700 mb-6">Poznaj lokalne atrakcje i ukryte skarby Vung Tau</p>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">🗼</span>
              <div>
                <h4 class="font-semibold text-gray-800">Latarnia Morska</h4>
                <p class="text-gray-600 text-sm">Historyczna latarnia z panoramicznym widokiem na zatokę</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">✝️</span>
              <div>
                <h4 class="font-semibold text-gray-800">Giant Jesus (Jezus Chrystus)</h4>
                <p class="text-gray-600 text-sm">Monumentalna statua Jezusa z wspaniałym widokiem na zatokę i miasto</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">🏖️</span>
              <div>
                <h4 class="font-semibold text-gray-800">Back Beach</h4>
                <p class="text-gray-600 text-sm">Piaskowa plaża z mieciomkowymi wodami, idealna do pływania</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">🍜</span>
              <div>
                <h4 class="font-semibold text-gray-800">Lokalne Restauracje</h4>
                <p class="text-gray-600 text-sm">Próbuj autentycznych potraw wietnamskich w naszych ulubionych miejscach</p>
              </div>
            </div>
          </div>

          <p class="text-yellow-600 font-bold mt-6">$25 - $35 / osoba</p>
          <p class="text-gray-600 text-sm mt-1">5-6 godzin • Codziennie, godziny elastyczne</p>
        </div>

        <!-- Day Trips -->
        <div class="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-lg shadow-lg border-2 border-yellow-200 slide-up">
          <h3 class="heading-sm text-yellow-600 mb-4">🚗 Jednodniowe Wyprawy</h3>
          <p class="text-gray-700 mb-6">Odkrywaj niż dwa niż poza Vung Tau</p>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-2xl">🏙️</span>
              <div>
                <h4 class="font-semibold text-gray-800">Ho Chi Minh City (Saigon)</h4>
                <p class="text-gray-600 text-sm">Historyczne świątynie, targowiska i nowoczesną architekturę</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">🥭</span>
              <div>
                <h4 class="font-semibold text-gray-800">Can Gio Mangrove Forest</h4>
                <p class="text-gray-600 text-sm">Łódki przez las mangrów, obserwacja ptaków i dzikiej przyrody</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">🍽️</span>
              <div>
                <h4 class="font-semibold text-gray-800">Food Tours & Night Markets</h4>
                <p class="text-gray-600 text-sm">Degustacja lokalnych potraw na nocnych targach z przewodnikiem</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <span class="text-2xl">🏝️</span>
              <div>
                <h4 class="font-semibold text-gray-800">Hidden Beaches & Surf Spots</h4>
                <p class="text-gray-600 text-sm">Odkrywaj sekretne plaże i niezinne miejsca do surfowania</p>
              </div>
            </div>
          </div>

          <p class="text-yellow-600 font-bold mt-6">$45 - $75 / osoba</p>
          <p class="text-gray-600 text-sm mt-1">8-10 godzin • Można zarezerwować</p>
        </div>
      </div>

      <!-- Cultural Experiences -->
      <div class="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-lg p-8 md:p-12 text-white">
        <h3 class="heading-sm text-white mb-6 text-center">🎭 AUTENTYCZNE WIETNAMSKIE DOŚWIADCZENIA</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <p class="text-4xl mb-3">🧘</p>
            <h4 class="font-bold mb-2">Medytacja & Joga</h4>
            <p class="text-teal-100 text-sm">Ćwicz jogę na plaży przy wschodzie słońca</p>
            <p class="text-yellow-300 font-bold mt-3">$15/seans</p>
          </div>

          <div class="text-center">
            <p class="text-4xl mb-3">🍜</p>
            <h4 class="font-bold mb-2">Warsztaty Kulinarne</h4>
            <p class="text-teal-100 text-sm">Naucz się gotować tradycyjne dania wietnamskie</p>
            <p class="text-yellow-300 font-bold mt-3">$30/warsztat</p>
          </div>

          <div class="text-center">
            <p class="text-4xl mb-3">🏺</p>
            <h4 class="font-bold mb-2">Warsztaty Rzemiosła</h4>
            <p class="text-teal-100 text-sm">Pracuj z lokalnym rzemieślnikami na tradycyjnych wyrobach</p>
            <p class="text-yellow-300 font-bold mt-3">$25/warsztat</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <button class="px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-semibold transition-all hover:scale-105">
          Zarezerwuj Wycieczkę
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
