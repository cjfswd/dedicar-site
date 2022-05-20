export default {
  target: 'static',
  ssr: 'false',
  generate: {
    fallback: '404.html'
  },
  head: {
    title: 'Dedicar Equipe - Apoio e Assistência a Pacientes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'dedicar, equipe, cuidadores, idoso, acompanhantes, rio de janeiro, rj, alzheimer'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/index.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap",
      },
    ],
    script: [
      { src: '/js/three.min.js' },
      { src: '/js/vanta.dots.min.js' },
      // { src: "http://192.168.0.130:8098" }
    ],
    htmlAttrs: {
      lang: 'pt-br'
    },
  },
  css: [
    'animate.css/animate.min.css',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  // modules: ['vue-scrollto/nuxt',],
  // router: {
  //   middleware: ['index']
  // },
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  sitemap: {
    hostname: 'http://equipededicar.com',
    routes: [
      '/#início',
      '/#serviço',
      '/#sobre',
      '/#depoimentos',
      '/#contato'
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],
  plugins: [
    '~/plugins/vuescreen',
    '~/plugins/vue100vh',
    '~/plugins/vuescrollto',
  ],
  build: {
    transpile: ['vue-100vh'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
    viewer: true,
  },
  components: true,
  server: {
    host: '0.0.0.0', // default: localhost
    port: '3006'
  },
}
