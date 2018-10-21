require('dotenv').config()

export default {
  env: {
    api: process.env.API
  },
  server: {
    port: 4000
  },
  axios: {
    debug: true,
    proxy: true,
    proxyHeaders: false,
    progress: true,
    https: process.env.NODE_ENV === 'production' ? true : false
  },
  render: {
    extend (config, ctx) {
      if (!ctx.isDev) {
        config.modules.rules.push({
          bundleRenderer: {
            cache: require('lru-cache')({
              max: 1000,
              maxAge: 1000 * 60 * 15
            })
          }
        })
      }
    }
  },
  css: ['@vuikit/theme'],
  plugins: [
    '~/plugins/vuikit.js',
    '~/plugins/vue-rangedate-picker.js'
  ],
  vendor: [
    'babel-polyfill',
    'vue-rangedate-picker'
  ],
  modules: [
    ['@nuxtjs/dotenv'],
    ['@nuxtjs/pwa'],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['@nuxtjs/sitemap'],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
  ]
}
