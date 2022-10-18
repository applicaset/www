export default {
  target: 'static',
  head: {
    title: 'ApplicaSet'
  },
  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/vuetify',
      {
        theme: {
          themes: {
            light: {
              primary: '#00A693',
              // secondary: '#424242',
              // accent: '#82B1FF',
              error: '#CC3333',
              info: '#0067A5',
              // success: '#4CAF50',
              warning: '#DEB645'
            },
            dark: {
              primary: '#00A693',
              // secondary: '#424242',
              // accent: '#FF4081',
              error: '#CC3333',
              info: '#0067A5',
              // success: '#4CAF50',
              warning: '#DEB645'
            }
          }
        }
      }
    ]
  ],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  }
}
