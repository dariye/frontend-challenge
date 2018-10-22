require('dotenv').config()

export default {
  loading: {
    color: '#D90378'
  },
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
    '~/plugins/vuikit',
    '~/plugins/filters',
  ],
  vendor: [
    'babel-polyfill',
    'lodash.debounce',
    'fuzzaldrin-plus'
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
