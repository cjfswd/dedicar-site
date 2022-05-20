export default {
  mode: 'jit',
  prefix: 'tw-',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  purge: [],
  theme: {
    screens: {
      'ms':'320px',
      'mm':'375px',
      'ml':'425px',
      'sm': '640px',
      'md':'768px',
      'lg':'1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')]
  ,
}
