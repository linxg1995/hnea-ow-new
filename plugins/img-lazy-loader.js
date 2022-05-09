import Vue from 'vue'

Vue.directive('lazy-src', {
    inserted(el, binding) {
        // console.log('lazy-src', el, binding)
        let value = binding.value || {}
        let observer = new IntersectionObserver(function (entries) {
            const entry = entries[0]
            if (entry.isIntersecting) {
                el.setAttribute('src', value.src || '')
                observer.unobserve(el)
                observer = null
            }
        }, {
            root: value.root || null,
            rootMargin: value.rootMargin || '0px',
            threshold: value.threshold || 0.5
        })
        observer.observe(el)
    }
})
