# 🏄 SURF HOSTEL VUNG TAU - Vue 3 Website

Profesjonalna, responsywna strona wizytówkowa dla Surf Hostelu w Vung Tau, Vietnam - łącząca hostel boutique, szkołę surfingu i organizację lokalnych wycieczek.

## 🌊 Cechy Strony

### ✨ Kluczowe Moduły
- **Hero Section** - Wciągające wprowadzenie z gradient overlay
- **Weather & Surf Module** - Wizualnie wydzielony moduł z warunkami surfingu (gotowy do screenshota)
- **About Section** - Historia i oferta Surf Hostelu
- **Surfing School** - Kursy surfingu dla początkujących, pośrednich i zaawansowanych
- **Local Tours** - Wycieczki po Vung Tau, wyprawy jednodniowe, doświadczenia kulturalne
- **Gallery** - Grid zdjęć z Vung Tau, plaż, surfu i lokalnych atrakcji
- **Testimonials** - Opinie gości z całego świata
- **Contact Section** - Formularz kontaktowy z mapą
- **Sticky Navigation** - Nawigacja z logo i call-to-action

### 🎨 Design & Styling
- **Tailwind CSS v3** - Customowe kolory (gray, yellow, teal)
- **Mobile-First Responsywny Design** - Optimized dla urządzeń mobilnych
- **Animacje przy Scrollu** - Fade-in i slide-up efekty
- **Smooth Scroll** - Płynne przejścia między sekcjami
- **Modern UI/UX** - Czysty, minimalistyczny design

### 🚀 Technologia

**Framework & Tools:**
- Vue 3 z Composition API (`<script setup>`)
- Vite (bundler)
- Tailwind CSS v3
- Intersection Observer API dla animacji

**Stack:**
- **Frontend:** Vue 3, Tailwind CSS
- **Build Tool:** Vite
- **CSS Framework:** Tailwind CSS
- **Animacje:** CSS + Intersection Observer API

## 📦 Instalacja

### Wymagania
- Node.js 16+ 
- npm lub yarn

### Setup Projektu

1. **Instalacja zależności:**
```bash
cd surf-hostel
npm install
```

2. **Uruchomienie dev servera:**
```bash
npm run dev
```
Strona będzie dostępna na `http://localhost:5173/`

3. **Build produkcyjny:**
```bash
npm run build
```

4. **Preview buildu:**
```bash
npm run preview
```

## 🗂️ Struktura Projektu

```
surf-hostel/
├── src/
│   ├── components/
│   │   ├── Header.vue                 # Sticky nawigacja
│   │   ├── Hero.vue                   # Hero section
│   │   ├── WeatherSurfModule.vue      # Moduł pogody (kluczowy!)
│   │   ├── AboutSection.vue           # O Surf Hostelu
│   │   ├── SurfingSchoolSection.vue   # Szkoła surfingu
│   │   ├── LocalToursSection.vue      # Lokalne wycieczki
│   │   ├── GallerySection.vue         # Galeria zdjęć
│   │   ├── TestimonialsSection.vue    # Opinie gości
│   │   ├── ContactSection.vue         # Kontakt
│   │   └── Footer.vue                 # Stopka
│   ├── composables/
│   │   └── useScrollAnimation.js      # Intersection Observer
│   ├── App.vue                        # Główny komponent
│   ├── main.js                        # Entry point
│   └── style.css                      # Globalne style
├── public/                            # Statyczne pliki
├── package.json                       # Zależności
├── tailwind.config.js                 # Konfiguracja Tailwind
├── postcss.config.js                  # Konfiguracja PostCSS
└── vite.config.js                     # Konfiguracja Vite
```

## 🎯 Moduł Pogody (Weather/Surf Module)

Najważniejsza sekcja strony - wizualnie wydzielona, gotowa do screenshota na social media.

### Zawartość Modułu:
- **Temperatura** - Aktualna temperatura w Vung Tau
- **Wiatr** - Prędkość i kierunek wiatru
- **Wysokość Fal** - Aktualna wysokość fal
- **Kierunek Fal** - Orientacja swell'u
- **Okres Fal** - Okres pomiędzy falami
- **Pływy** - Status pływów (fala przychodząca/odpływająca)
- **Jakość Surfingu** - Ogólna ocena warunków
- **Rekomendacja** - Porada dla surferów
- **Social Media Icons** - Instagram & Facebook

### Design:
- Gradient tła (teal-600 do teal-800)
- Border żółty dla wyróżnienia
- Emoji ikony dla każdego parametru
- Wymiary optymalne do screenshota (1080x1080 lub 1920x1080)
- Nazwa "SURF HOSTEL VUNG TAU" widoczna w nagłówku

## 🌐 Konfiguracja Kolorów Tailwind

Customowe kolory dostępne w `tailwind.config.js`:

```javascript
colors: {
  gray: {    // Tła, teksty
    '50':  '#f9fafb',
    '100': '#f4f5f7',
    // ... pełna paleta
    '900': '#161e2e',
  },
  yellow: {  // Akcenty, przyciski
    '50':  '#faf9f0',
    '100': '#f7ef9b',
    // ... pełna paleta
    '900': '#242006',
  },
  teal: {    // CTA, linki, główne akcenty
    '50':  '#f3f7f8',
    '100': '#d9f0f7',
    // ... pełna paleta
    '900': '#0f2131',
  },
}
```

## 🎬 Animacje

Wszystkie animacje są realizowane za pomocą **Intersection Observer API**:

- **fade-in** - Stopniowe pojawienie się
- **slide-up** - Przesunięcie od dołu z fade-in

Klasy CSS:
```html
<div class="fade-in">Element pojawi się z fade efektem</div>
<div class="slide-up">Element przesunie się w górę</div>
```

## 📱 Responsywność

Strona jest całkowicie responsywna i zoptymalizowana dla:
- **Mobile** (< 640px) - Single column layout
- **Tablet** (640px - 1024px) - 2-3 kolumny
- **Desktop** (> 1024px) - Pełny grid layout

### Breakpoints Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔌 API Integration (Przyszłe)

Moduł pogody aktualnie używa mockup danych. Aby podłączyć prawdziwe API:

1. **Opcje API:**
   - OpenWeatherMap API
   - Stormglass.io (dane o falach)
   - NOAA Marine Weather

2. **Integracja:**
   ```javascript
   // W WeatherSurfModule.vue
   import { onMounted, ref } from 'vue'

   const weatherData = ref({})

   onMounted(async () => {
     const response = await fetch('API_URL')
     const data = await response.json()
     weatherData.value = data
   })
   ```

## 🌐 SEO & Metadata

Zalecane pola dla SEO:

```html
<!-- W index.html -->
<title>SURF HOSTEL VUNG TAU - Szkoła Surfingu w Wietnamie</title>
<meta name="description" content="Boutique hostel i szkoła surfingu w Vung Tau, Vietnam. Naucz się surfować, poznaj lokalną kulturę i przyjaznością surferską.">
<meta property="og:title" content="SURF HOSTEL VUNG TAU">
<meta property="og:image" content="/og-image.png">
```

## 📸 Obrazy (Unsplash)

Strona używa bezarmowych zdjęć z Unsplash:
- `surfing vietnam`
- `vietnam beach`
- `beach hostel`
- `vung tau`

## 🚀 Deployment

### Opcje Deployment:
1. **Vercel** - Idealny dla Vue/Vite
2. **Netlify** - Prosta konfiguracja
3. **AWS S3 + CloudFront**
4. **GitHub Pages**

### Build & Deploy na Vercel:
```bash
npm run build
# Następnie deploy folderu 'dist'
```

## 🔧 Development Tips

### Hot Module Replacement (HMR)
Vite automatycznie reloaduje stronę podczas edycji plików Vue.

### Debugging
1. Vue DevTools - rozszerzenie przeglądarki
2. Console.log() w `<script setup>`
3. Tailwind JIT mode dla dynamicznych klas

### Performance
- **Lazy Loading** - Zdjęcia ładują się na żądanie
- **CSS Optimization** - Tailwind tree-shake
- **Code Splitting** - Automatyczne chunking

## 📞 Kontakt & Informacje

**SURF HOSTEL VUNG TAU**
- 📍 123 Tran Hung Dao Street, Vung Tau, Vietnam
- 📱 +84 (906) 123-456
- ✉️ info@surphostelvungtau.com
- 🕐 Open 06:00 - 23:00 (Reception 24/7)

## 📄 Licencja

MIT License - Projekt jest otwarty do użytku komercyjnego.

## 🙏 Credits

- Vue 3 & Composition API
- Tailwind CSS
- Vite
- Unsplash - darmowe zdjęcia
- Intersection Observer API

---

**Made with 🏄 by Surf Hostel Vung Tau Development Team**

*Ostatnia aktualizacja: 22 Listopada 2024*
