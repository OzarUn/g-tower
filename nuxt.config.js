import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - G-Tower',
    title: 'G-Tower',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Discover G-Tower: Your Trusted Global Support Structure Solutions Partner. We treat your projects as our own, delivering beyond expectations with quality engineering. Committed to reliability, clean energy, and cost-effective solutions. Building an environmentally sustainable and economically viable world.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'G-Tower',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://g-tower.com',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://g-tower.com/main-logo.png',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'G-Tower',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Discover G-Tower: Your Trusted Global Support Structure Solutions Partner. We treat your projects as our own, delivering beyond expectations with quality engineering. Committed to reliability, clean energy, and cost-effective solutions. Building an environmentally sustainable and economically viable world.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content:
          'Discover G-Tower: Your Trusted Global Support Structure Solutions Partner. We treat your projects as our own, delivering beyond expectations with quality engineering. Committed to reliability, clean energy, and cost-effective solutions. Building an environmentally sustainable and economically viable world.',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://g-tower.com/main-logo.png',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'G-Tower',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Discover G-Tower: Your Trusted Global Support Structure Solutions Partner. We treat your projects as our own, delivering beyond expectations with quality engineering. Committed to reliability, clean energy, and cost-effective solutions. Building an environmentally sustainable and economically viable world.',
      },

      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/main-logo.svg' },
      {
        rel: 'stylesheet',
        href: 'href="https://fonts.googleapis.com/css2?family=Jost&display=swap"',
      },
      {
        rel: 'stylesheet',
        href: 'href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],

  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'zoom-in',
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Router configuration
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'privacy',
        path: '/',
        query: {
          page_id: '4962'
        },
        component: resolve(__dirname, 'pages/privacy.vue')
      })
    },
    middleware: ['pageId']
  }
}
