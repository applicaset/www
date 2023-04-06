export default {
  target: 'static',
  head: {
    title: 'ApplicaSet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'We help you migrate to any cloud'
      }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-protected-mailto'
  ],
  googleFonts: {
    families: {
      'Open+Sans': true
    }
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  build: {
    html: {
      minify: {
        decodeEntities: false
      }
    }
  }
}
