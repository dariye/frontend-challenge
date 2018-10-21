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
    https: true
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
    '~/plugins/vue-mugen-scroll.js'
  ],
  vendor: [
    'babel-polyfill',
    'vue-mugen-scroll'
  ],
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/axios'],
    ['@nuxtjs/proxy'],
    ['@nuxtjs/sitemap'],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
  ]
}
