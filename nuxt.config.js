
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Fintech Media LatAm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'link', type: 'stylesheet', href: 'https://cdn.materialdesignicons.com/5.5.55/css/materialdesignicons.min.css' },
      { rel: 'link', type: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' } ,
      { rel: 'link', type: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [ '@plugins/firebase',  '@plugins/vue-material'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxtjs-mdi-font',
    ],
    axios: {
    baseURL: process.env.BASE_URL || 'https://fintechhorizonsmedia.com/api/v1',
    },


    //stripe: {
    //publishableKey: 'pk_live_XfWHUi5ZgIVMcDsaWQDMHFCa',
    // },

    env: {
      fbAPIKey: process.env.FB_KEY || 'AIzaSyBzUEYv2IKnQURUERVEH4g_-3OO4XSfWSY',
      GS_MXDV_KEY: process.env.GS_MXDV_KEY || '1t19HcSTysd_Va13NDE4kVVSuAo_G7y9dv8bM9cHlWpQ'
     // stripePRICEID: process.env.STRIPE_PRICE_ID,
     // stripePUBLIC: process.env.STRIPE_PUBLIC_KEY,
     // stripeSECRET: process.env.STRIPE_SECRET_KEY,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, {}) {
      config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty',
          child_process: 'empty'
      }
  }
  }

}
// nuxt.config.js
module.exports = {
  router: {
    middleware: ['visits', 'user-agent']
  }
}
