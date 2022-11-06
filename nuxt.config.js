export default {
  target: 'static',
  head: {
    title: 'ApplicaSet'
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
