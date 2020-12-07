export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'bfrog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'link', type: 'stylesheet', href: 'https://cdn.materialdesignicons.com/5.5.55/css/materialdesignicons.min.css' },
      { rel: 'link', type: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/vuetify/2.3.17/vuetify.css'}

    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome', 
    ],
    axios: {
    baseURL: process.env.BASE_URL || 'https://fintechhorizonsmedia.com/api/v1'
    },

      http: {
     baseURL: process.env.BASE_URL || 'https://fintechhorizonsmedia.com/api/v1'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
