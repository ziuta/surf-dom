import { createI18n } from 'vue-i18n'

// Import locale files
import en from './locales/en.json'
import vi from './locales/vi.json'
import ru from './locales/ru.json'

// Get saved language from localStorage or detect from browser
const getSavedLanguage = () => {
    const saved = localStorage.getItem('language')
    if (saved) return saved

    // Fallback to browser language if available
    const browserLang = navigator.language.split('-')[0]
    if (['en', 'vi', 'ru'].includes(browserLang)) return browserLang

    return 'en'
}

const i18n = createI18n({
    legacy: false, // Use Composition API mode
    locale: getSavedLanguage(),
    fallbackLocale: 'en',
    messages: {
        en,
        vi,
        ru
    }
})

export default i18n
