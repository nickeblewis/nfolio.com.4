import pkg from './package'
import client from './sanity.js'

export default {
  // mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        type: 'text/css',
        rel: 'stylesheet'
      },
      {
        href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css',
        type: 'text/css',
        rel: 'stylesheet',
        integrity:
          'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz',
        crossorigin: 'anonymous'
      },
      {
        href: 'https://unpkg.com/bulma@0.7.4/css/bulma.min.css',
        type: 'text/css',
        rel: 'stylesheet'
      },
      {
        href: '"https://use.fontawesome.com/releases/v5.8.1/css/all.css"',
        type: 'text/css',
        rel: 'stylesheet'
      }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js'
      },
      {
        src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js'
      },
      // Snipcart js
      {
        src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        id: 'snipcart',
        'data-autopop': 'false',
        // Change me. Read more at http://snipcart.com
        'data-api-key':
          'NzIzOTg5MjktMzA3NC00ODk0LWE5N2ItNTNjMDA1YzI3OWQ3NjM2MzY3MDEyNTg3MjIyMTA3'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Global CSS
   */
  css: ['~/css/global.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/globalData'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: async function() {
      const paths = await client.fetch(`{
        "product": *[_type == "product"].slug.current,
        "category": *[_type == "category"].slug.current,
        "vendor": *[_type == "vendor"].slug.current
      }`)
      return Object.keys(paths).reduce(
        (acc, key) => [
          ...acc,
          ...paths[key].reduce((acc, curr) => [...acc, `${key}/${curr}`], [])
        ],
        []
      )
    }
  }
}
