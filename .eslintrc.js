module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'comma-dangle': 'off',
        indent: ['error', 4],
        'prefer-const': 'off',
        quotes: 'off',
        semi: 'off',
        'space-before-function-paren': 'off',
        'vue/html-indent': ['error', 4],
        'vue/html-self-closing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/order-in-components': 'off',
    }
}
