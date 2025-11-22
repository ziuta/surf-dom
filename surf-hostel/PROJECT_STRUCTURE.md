# 📋 PROJEKT STRUCTURE & COMPONENTS OVERVIEW

## 🗂️ Hierarchia Projektu

```
surf-hostel/
│
├── 📄 index.html                    # HTML entry point z SEO meta tags
├── 📦 package.json                  # Zależności i skrypty
├── 🔧 vite.config.js                # Vite configuration
├── 🎨 tailwind.config.js            # Customowe kolory
├── 🎭 postcss.config.js             # PostCSS + Tailwind
│
├── 📖 Dokumentacja
│   ├── README.md                    # Główna dokumentacja
│   ├── QUICKSTART_PL.md             # Szybki start po polsku
│   ├── DEPLOYMENT.md                # Instrukcje wdrażania
│   └── API_INTEGRATION.md           # Integracja z API
│
├── 📁 src/
│   ├── 🎨 style.css                 # Globalne style (Tailwind directives)
│   ├── 🚀 main.js                   # Vue app initialization
│   ├── 🏗️ App.vue                   # Root component
│   │
│   ├── 📦 components/
│   │   ├── Header.vue               # Sticky navigation
│   │   ├── Hero.vue                 # Hero section z CTA
│   │   ├── WeatherSurfModule.vue    # ⭐ Moduł pogody (kluczowy!)
│   │   ├── AboutSection.vue         # O Surf Hostelu
│   │   ├── SurfingSchoolSection.vue # Szkoła surfingu + instruktorzy
│   │   ├── LocalToursSection.vue    # Wycieczki i doświadczenia
│   │   ├── GallerySection.vue       # Grid zdjęć
│   │   ├── TestimonialsSection.vue  # Opinie gości
│   │   ├── ContactSection.vue       # Formularz + mapa
│   │   └── Footer.vue               # Stopka
│   │
│   └── 🎣 composables/
│       └── useScrollAnimation.js    # Intersection Observer dla animacji
│
└── 📦 node_modules/                 # Zainstalowane pakiety

```

## 🧩 Komponenty Detailowo

### 1. **Header.vue** (Nawigacja)
```
├── Logo z ikoną 🏄
├── Menu desktop (3+ screenów)
│   ├── O nas
│   ├── Szkoła Surfingu
│   ├── Wycieczki
│   ├── Galeria
│   └── Kontakt
├── CTA Button "Zarezerwuj"
└── Mobile Menu (hamburger na <md breakpoint)
```

**Features:**
- Sticky positioning
- Smooth scroll links
- Mobile responsive dropdown
- Logo link do #home

---

### 2. **Hero.vue** (Baner)
```
├── Background image (Unsplash: surfing/beach)
├── Gradient overlay (teal blend)
└── Content
    ├── H1 "SURF HOSTEL"
    ├── Subheading
    └── 2 CTA buttons
        ├── "Zarezerwuj Pokój" (teal)
        └── "Sprawdź Warunki Surfingu" (yellow)
```

**Features:**
- Full viewport height
- Fade-in animations
- Responsive typography
- Image optimization

---

### 3. **WeatherSurfModule.vue** (⭐ KLUCZOWY)
```
┌─────────────────────────────────────┐
│  SURF HOSTEL VUNG TAU               │  ← Header
│  Vung Tau, Vietnam                  │
│  Aktualizacja: 22 Nov 2024 21:47    │
├─────────────────────────────────────┤
│  Temperature │ Wind │ Wave Height   │  ← Main metrics (3 column grid)
│  Swell Dir   │ Swell Period │ Tides│  ← Secondary metrics
├─────────────────────────────────────┤
│  Jakość Surfingu                    │  ← Quality assessment
│  ┌───────────────────────────────┐  │
│  │ Difficulty: Średni             │  │
│  │ Best time: 06:00 - 09:00      │  │
│  │ Crowding: Średnie (4-6 osób)  │  │
│  └───────────────────────────────┘  │
├─────────────────────────────────────┤
│  REKOMENDACJA:                      │  ← Recommendation
│  Doskonałe warunki dzisiaj!         │
├─────────────────────────────────────┤
│  📱 Instagram  👥 Facebook          │  ← Social icons
└─────────────────────────────────────┘
```

**Design Features:**
- Gradient tła (teal-600 to teal-800)
- Border żółty (wyróżnienie)
- Grid 2x3 dla metryk
- Emoji ikony
- Wymiary optymalne do screenshota (1080x1080)
- Mockup dane (łatwo zastąpić prawdziwymi)

**Mockup Data:**
```javascript
{
  temperature: 28,
  windSpeed: 12,
  windDirection: 'E (Wschód)',
  waveHeight: '1.5 - 2.0 m',
  swellDirection: 'SE (Południowy Wschód)',
  swellPeriod: 8,
  tide: 'Fala Przychodząca',
  difficulty: 'Średni (Pośredni)',
  bestTime: '06:00 - 09:00 & 16:00 - 18:30',
  crowding: 'Średnie (4-6 osób)',
  recommendation: 'Doskonałe warunki dzisiaj!',
}
```

---

### 4. **AboutSection.vue** (O nas)
```
├── 2-column grid (md+)
│   ├── Image (left)
│   │   └── Hover scale effect
│   └── Content (right)
│       ├── H2 "O SURF HOSTEL"
│       ├── Opis
│       └── 4 feature boxes
│           ├── 🏠 Komfortowe Pokoje
│           ├── 🌅 Taras z Widokiem
│           ├── 👥 Wspólna Przestrzeń
│           └── 🏄 Atmosfera Surfingowa
│
└── CTA Button "Zarezerwuj Pokój"
```

**Features:**
- Responsive grid (1 col mobile, 2 col desktop)
- Icon + text feature boxes
- Smooth image hover
- Fade-in animation on scroll

---

### 5. **SurfingSchoolSection.vue** (Szkoła Surfingu)
```
├── 3 Course Cards
│   ├── Beginner ($199 / 5 dni)
│   │   ├── 🌊 Title
│   │   ├── Opis
│   │   └── Feature list
│   ├── Intermediate ($149 / 3 dni)
│   └── Private Lessons ($45 / godzina)
│
├── 2-column grid (md+)
│   ├── Course cards (left)
│   └── Image (right)
│
└── Instructors Section
    └── 3 instructor cards
        ├── Circular image
        ├── Imię + doświadczenie
        └── Opis specjalizacji
```

**Features:**
- Card-based layout
- Color-coded borders (teal, yellow)
- Feature lists z checkmarks
- Instructor profiles
- Responsive grid

---

### 6. **LocalToursSection.vue** (Wycieczki)
```
├── 2 Tour Type Cards
│   ├── Vung Tau City Tours
│   │   ├── 🏙️ Lighthouse
│   │   ├── ✝️ Giant Jesus
│   │   ├── 🏖️ Back Beach
│   │   └── 🍜 Local Restaurants
│   └── Day Trips
│       ├── 🏙️ Ho Chi Minh City
│       ├── 🥭 Can Gio Mangrove
│       ├── 🍽️ Food Tours
│       └── 🏝️ Hidden Beaches
│
├── Cultural Experiences Grid (3 col)
│   ├── 🧘 Meditation & Yoga
│   ├── 🍜 Cooking Workshops
│   └── 🏺 Craft Workshops
│
└── CTA Button "Zarezerwuj Wycieczkę"
```

**Features:**
- 2-column cards na desktop
- Icon + title + description
- Price display
- Gradient backgrounds
- Full-width gradient section dla kulturalnych doświadczeń

---

### 7. **GallerySection.vue** (Galeria)
```
3x3 Image Grid
├── Surfing
├── Hostel
├── Beach
├── Sunset
├── Local Attractions
├── Vietnam Culture
├── Community
├── Food
└── Adventure

Hover effects:
└── Zoom + opacity overlay
```

**Features:**
- Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Image hover with zoom
- Shadow on hover
- Fade-in animations on scroll

---

### 8. **TestimonialsSection.vue** (Opinie)
```
3-column grid (3x2 total = 6 cards)
├── Card 1 (Sarah, Australia) ⭐⭐⭐⭐⭐
├── Card 2 (Marco, Italy) ⭐⭐⭐⭐⭐
├── Card 3 (Emma & Tom, Canada) ⭐⭐⭐⭐⭐
├── Card 4 (Lisa, Germany) ⭐⭐⭐⭐⭐
├── Card 5 (David, Japan) ⭐⭐⭐⭐⭐
└── Card 6 (Peter, Netherlands) ⭐⭐⭐⭐⭐

Each card:
├── Stars (⭐ x5)
├── Quote
└── Author + Country
```

**Features:**
- Border-left color (teal)
- Star ratings
- Italic quotes
- International guests
- Fade-in on scroll

---

### 9. **ContactSection.vue** (Kontakt)
```
├── 2-column grid (md+)
│   ├── Contact Form (left)
│   │   ├── Name input
│   │   ├── Email input
│   │   ├── Subject select
│   │   ├── Message textarea
│   │   └── Submit button
│   │
│   └── Contact Info + Social (right)
│       ├── Contact Info Card
│       │   ├── 📍 Adres
│       │   ├── 📞 Telefon
│       │   ├── ✉️ Email
│       │   └── 🕐 Godziny
│       │
│       └── Social Media Card (Gradient)
│           ├── 📱 Instagram
│           ├── 👥 Facebook
│           └── 🎬 TikTok
│
└── Google Maps Iframe
```

**Features:**
- Form validation
- Success message display
- Auto reset after submission
- Contact info with icons
- Embedded map
- Social media links

---

### 10. **Footer.vue** (Stopka)
```
4-column grid
├── Brand Info
│   ├── Logo "SURF HOSTEL"
│   └── Krótki opis
├── Quick Links
│   ├── O nas
│   ├── Szkoła Surfingu
│   ├── Wycieczki
│   ├── Galeria
│   └── Kontakt
├── Services
│   ├── Rezerwacja pokoju
│   ├── Lekcje surfingu
│   ├── Wycieczki
│   ├── Prywatne lekcje
│   └── Corporate events
└── Social Media
    ├── Icons
    └── Hashtag #SurfHostelVungTau

Footer Bottom
├── Copyright info
└── Legal links
    ├── Polityka Prywatności
    ├── Warunki Użytkowania
    └── Kontakt
```

**Features:**
- Dark background (gray-900)
- 4-column responsive layout
- Yellow accent for headers
- Social media icons
- Hover effects (teal-400)

---

## 🎬 Composables

### `useScrollAnimation.js`

```javascript
export function useScrollAnimation() {
  // Intersection Observer
  ├── Obserwuje elementy z klasami .fade-in i .slide-up
  ├── Gdy element wejdzie w viewport
  └── Dodaje klasę .visible
      └── CSS animation uruchamia się

Klasy CSS:
├── .fade-in
│   └── opacity: 0 → 1
└── .slide-up
    └── translateY(30px) → 0 + opacity
```

**Użycie:**
```html
<div class="fade-in">Element pojawi się z fade</div>
<div class="slide-up">Element pojawi się z przesunięciem</div>
```

---

## 🎨 Customization Guide

### Zmiana Kolorów

Edytuj `tailwind.config.js`:
```javascript
extend: {
  colors: {
    gray: {
      '50': '#...',  // Zmień tutaj
      // ...
    },
    yellow: { /* ... */ },
    teal: { /* ... */ },
  }
}
```

### Zmiana Animacji

W `style.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);  /* Zmień: 50px */
  }
  to { /* ... */ }
}
```

### Dodanie Nowych Sekcji

1. Utwórz `src/components/NewSection.vue`
2. Dodaj do `App.vue`:
```javascript
import NewSection from './components/NewSection.vue'
```
3. W template:
```html
<NewSection />
```

---

## 📱 Breakpoints & Responsywność

| Breakpoint | Width | Kolumny |
|-----------|-------|---------|
| Mobile (none) | < 640px | 1 |
| sm | ≥ 640px | 1-2 |
| md | ≥ 768px | 2-3 |
| lg | ≥ 1024px | 3-4 |
| xl | ≥ 1280px | 4 |

**Użycie w HTML:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 col mobile, 2 col tablet, 3 col desktop -->
</div>
```

---

## 🔄 Data Flow

```
App.vue (root)
├── useScrollAnimation()  ← Initializes Intersection Observer
│
├── Header (sticky)
├── Hero
├── WeatherSurfModule (reactive state)
├── AboutSection (fade-in)
├── SurfingSchoolSection (slide-up)
├── LocalToursSection (fade-in)
├── GallerySection (fade-in)
├── TestimonialsSection (fade-in)
├── ContactSection (reactive form)
└── Footer
```

---

**Gotów do edycji i publikacji! 🚀**
