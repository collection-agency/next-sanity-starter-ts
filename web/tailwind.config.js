module.exports = {
  mode: 'jit',
  purge: {
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
