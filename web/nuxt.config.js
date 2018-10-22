require('dotenv').config()

export default {
  head: {
    title: 'Pleo.io - Expenses, simplified',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Pleo decentralises company spending, eliminates expense reports and reimbursements and simplifies bookkeeping.' },
      { hid: 'keywords', name: 'keywords', content: 'company payment card,company prepaid card,company expenses,expense reports,reimbursement,petty cash' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
    '~/plugins/vue-mugen-scroll',
    '~/plugins/filters',
  ],
  vendor: [
    'babel-polyfill',
    'lodash.debounce',
    'fuzzaldrin-plus',
    'vue-mugen-scroll'
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
