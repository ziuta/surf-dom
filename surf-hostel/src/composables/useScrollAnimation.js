import { onMounted } from 'vue'

export function useScrollAnimation() {
    onMounted(() => {
        // Create Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        })

        // Observe all elements with fade-in or slide-up class
        const fadeInElements = document.querySelectorAll('.fade-in, .slide-up')
        fadeInElements.forEach((el) => observer.observe(el))

        return () => {
            fadeInElements.forEach((el) => observer.unobserve(el))
        }
    })
}
