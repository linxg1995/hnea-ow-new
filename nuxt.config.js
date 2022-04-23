export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: '海南省电子竞技运动协会',
        htmlAttrs: {
            lang: 'zh'
        },
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
            { hid: 'description', name: 'description', content: '海南省电子竞技运动协会' },
            { name: 'keywords', content: '海南省电子竞技运动协会,海南电子竞技运动协会,海南电竞协会,海南电竞,HNEA,hnea' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
            { name: 'baidu-site-verification', content: 'code-chtQgQxzH2' },
            { name: 'referrer', content: 'no-referrer' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/normalize.css',
        '~/assets/css/tailwind.css',
        'swiper/swiper.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/swiper.js', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
