import axios from 'axios'
export default {
  module: [
    '@nuxtjs/vuetify',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  router: {
    mode: 'history'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'amplify_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '//code.jquery.com/jquery-3.4.1.min.js',
        type: 'text/javascript'
      },
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/marked/0.8.0/marked.min.js',
        type: 'text/javascript'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    hardSource: true,
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },

  /*
  ** generate
  */
  generate: {
    routes() {
      return axios.get(`https://xshn7hqya2.execute-api.ap-northeast-1.amazonaws.com/Prod/recipes?size=10`)
      .then((res) => {
        return res.data.data.map((data) => {
          return {
            route: '/recipe/' + data.recipe_code,
            payload: data
          }
        });
      })
    }
  }
}
