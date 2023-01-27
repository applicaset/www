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
    'nuxt-protected-mailto'
  ],
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