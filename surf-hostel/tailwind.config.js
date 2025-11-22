/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    '50': '#f9fafb',
                    '100': '#f4f5f7',
                    '200': '#e5e7eb',
                    '300': '#d2d6dc',
                    '400': '#9fa6b2',
                    '500': '#6b7280',
                    '600': '#4b5563',
                    '700': '#374151',
                    '800': '#252f3f',
                    '900': '#161e2e',
                },
                yellow: {
                    '50': '#faf9f0',
                    '100': '#f7ef9b',
                    '200': '#ede156',
                    '300': '#d1c02f',
                    '400': '#a09916',
                    '500': '#7b7d0a',
                    '600': '#622e06',
                    '700': '#4c4c06',
                    '800': '#343406',
                    '900': '#242006',
                },
                teal: {
                    '50': '#f3f7f8',
                    '100': '#d9f0f7',
                    '200': '#ade3ef',
                    '300': '#77c5d8',
                    '400': '#3da3bb',
                    '500': '#2c849d',
                    '600': '#266b82',
                    '700': '#215165',
                    '800': '#183748',
                    '900': '#0f2131',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                fadeIn: 'fadeIn 0.8s ease-in forwards',
                slideUp: 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                slideUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
        },
    },
    plugins: [],
}
