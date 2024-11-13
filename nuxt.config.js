import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  head: {
    title: 'G-Tower',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover G-Tower...' },
      { hid: 'og:title', name: 'og:title', content: 'G-Tower' },
      { hid: 'og:url', name: 'og:url', content: 'https://g-tower.com' },
      { hid: 'og:image', name: 'og:image', content: 'https://g-tower.com/main-logo.png' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'G-Tower' },
      { hid: 'og:description', name: 'og:description', content: 'Discover G-Tower...' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'Discover G-Tower...' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://g-tower.com/main-logo.png' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'G-Tower' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Discover G-Tower...' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/main-logo.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/vue@2.7', type: 'text/javascript' },
      { src: 'https://unpkg.com/vue-i18n@8/dist/vue-i18n.min.js', type: 'text/javascript' },
      { src: 'https://unpkg.com/vue-demi@0.13.5/lib/index.iife.js', type: 'text/javascript' },
      { src: 'https://unpkg.com/vue-i18n-bridge@9.2.0-beta.38/dist/vue-i18n-bridge.global.prod.js', type: 'text/javascript' }
    ]
  },
  css: [],
  plugins: [{ src: '@/plugins/aos', mode: 'client' }],
  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'zoom-in'
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],
  axios: {
    baseURL: '/'
  },
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
          success: colors.green.accent3
        }
      }
    }
  },
  build: {  }
}
