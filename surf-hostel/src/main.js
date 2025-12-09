import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

// In development, add class to disable blur effects which can slow down
// Chrome DevTools when inspecting elements. This is safe for dev only.
if (import.meta.env.DEV) {
	try {
		document.documentElement.classList.add('dev-no-blur')
		// inject a high-priority style tag to aggressively disable blur/filter
		const s = document.createElement('style')
		s.setAttribute('data-dev-no-blur', 'true')
		s.innerHTML = `
			/* aggressive dev override (injected last) */
			html.dev-no-blur *, html.dev-no-blur *::before, html.dev-no-blur *::after {
				-webkit-backdrop-filter: none !important;
				backdrop-filter: none !important;
				filter: none !important;
				--tw-backdrop-blur: blur(0px) !important;
				--tw-blur: blur(0px) !important;
				--tw-drop-shadow: none !important;
			}
			html.dev-no-blur [class*="backdrop-blur"], html.dev-no-blur [class*="blur-"] {
				-webkit-backdrop-filter: none !important;
				backdrop-filter: none !important;
				filter: none !important;
			}
			html.dev-no-blur .drop-shadow-lg, html.dev-no-blur .drop-shadow-xl {
				filter: none !important;
			}
		`
		document.head.appendChild(s)
		// quick console feedback for debugging
		// eslint-disable-next-line no-console
		console.log('[dev-no-blur] injected aggressive override — blur/backdrop-filter disabled for dev')
	} catch (e) {
		// document might not be available in some SSR contexts
	}
}

createApp(App)
	.use(i18n)
	.mount('#app')

// Export i18n to window for global access
window.__i18n = i18n

