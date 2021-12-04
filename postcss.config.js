const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss // Before processing the .scss files, load up tailwind first.
  ]
}
