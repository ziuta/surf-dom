# 🚀 SURF HOSTEL - Instrukcje Deployment i Konfiguracji

## 📋 Szybki Start

### 1. Lokalna Instalacja
```bash
cd surf-hostel
npm install
npm run dev
```
Otwórz: `http://localhost:5173/`

### 2. Build Produkcyjny
```bash
npm run build
# Wygeneruje folder 'dist/' gotowy do deployment'u
```

### 3. Preview Buildu Lokalnie
```bash
npm run preview
```

## 🌐 Opcje Deployment'u

### Option 1: Vercel (REKOMENDOWANE)
Najszybszy i najłatwiejszy sposób dla Vue 3 + Vite

**Kroki:**
1. Wypchnij projekt na GitHub
2. Wejdź na [vercel.com](https://vercel.com)
3. Kliknij "New Project"
4. Wybierz GitHub repo
5. Vercel automatycznie skonfiguruje build
6. Deploy ✅

**Zaletami:**
- Automatyczne builds z każdym push'em
- SSL certificate automatycznie
- Custom domain support
- Free tier wystarczający

### Option 2: Netlify

**Kroki:**
1. Wejdź na [netlify.com](https://netlify.com)
2. Logowanie przez GitHub
3. "New site from Git"
4. Wybierz repo
5. Build command: `npm run build`
6. Publish directory: `dist`

### Option 3: AWS Amplify

**Kroki:**
```bash
npm install -g @aws-amplify/cli
amplify init
amplify hosting add
amplify publish
```

### Option 4: GitHub Pages + Actions

**Konfiguruj GitHub Actions workflow:**

Utwórz `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 5: Docker + VPS (DigitalOcean, Linode, etc.)

**Dockerfile:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Deploy na DigitalOcean:**
```bash
docker build -t surf-hostel .
docker tag surf-hostel registry.digitalocean.com/your-registry/surf-hostel
docker push registry.digitalocean.com/your-registry/surf-hostel
```

## 🔌 Konfiguracja Domeny Custom

### 1. Vercel Custom Domain
Settings → Domains → Dodaj domenę niestandardową

### 2. Cloudflare DNS
1. Dodaj domenę do Cloudflare
2. Zaktualizuj NS records u rejestratora
3. Cloudflare proxy dla performansu

### 3. SSL/HTTPS
- Vercel: Automatyczne
- Netlify: Automatyczne
- AWS: AWS Certificate Manager
- Docker: Nginx + Let's Encrypt Certbot

## 📊 Monitoring & Analytics

### Dodaj Google Analytics
W `index.html` (przed `</head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Dodaj Google Search Console
1. Wejdź na [search.google.com/search-console](https://search.google.com/search-console)
2. Dodaj domenę
3. Zweryfikuj własność (DNS record lub HTML tag)

## 🔐 Zmienne Środowiskowe

Utwórz `.env.local` dla zmiennych wrażliwych:

```
VITE_API_KEY=your_api_key
VITE_API_URL=https://api.example.com
```

Użyj w kodzie:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

## 🔧 Optimization

### 1. Image Optimization
Instaluj `vite-plugin-image-optimize`:
```bash
npm install -D vite-plugin-image-optimize
```

### 2. Minify & Compression
Vite robi to automatycznie w production build

### 3. Code Splitting
Vite automatycznie tworzy chunks dla lepszego loadowania

### 4. CDN dla Assetsów
Skonfiguruj w `vite.config.js`:
```javascript
export default {
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
}
```

## 📱 Performance Checklist

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals Green
- [ ] Mobile tested na rzeczywistych urządzeniach
- [ ] Images optimized (< 100KB)
- [ ] CSS minified (production)
- [ ] No console errors
- [ ] Fast First Contentful Paint (< 1.8s)
- [ ] Cache headers configured

## 🌍 Localization (Przyszłe)

Jeśli chcesz dodać wielojęzyczność:

```bash
npm install vue-i18n
```

Struktura:
```
locales/
├── pl.json
└── en.json
```

## 🔄 CI/CD Pipeline Przykład (GitHub Actions)

```yaml
name: Test & Build

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run preview
```

## 📧 Email Configuration

Dla contact form, użyj:
- **EmailJS** - Bezarmowy, frontend-only
- **Formspree** - Prosta integracja
- **SendGrid** - Enterprise solution

Przykład z EmailJS:
```javascript
import emailjs from '@emailjs/browser';

emailjs.init('your_public_key');

async function sendEmail(form) {
  try {
    await emailjs.sendForm('service_id', 'template_id', form);
    console.log('Email sent!');
  } catch (err) {
    console.log('Failed to send email:', err);
  }
}
```

## 🐛 Troubleshooting

### Problem: 404 na deployed site
**Solucja:** Ustaw `base` w `vite.config.js`:
```javascript
export default {
  base: '/surf-hostel/',
}
```

### Problem: Images nie ładują się
**Solucja:** Sprawdź ścieżki - powinny być relatywne `src="..."`

### Problem: CSS nie działa
**Solucja:** Wyczyść cache i przebuduj:
```bash
rm -rf dist node_modules
npm install
npm run build
```

## 📞 Support & Resources

- Vue 3 Docs: https://vuejs.org
- Tailwind Docs: https://tailwindcss.com
- Vite Docs: https://vitejs.dev
- Vercel Docs: https://vercel.com/docs

---

**Powodzenia z deploymentem! 🚀🏄‍♂️**
