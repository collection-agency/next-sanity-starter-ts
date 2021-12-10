module.exports = {
  mode: 'jit',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {}
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}