const path = require('path')

module.exports = {
  // Do not compile unused classes as part of the final CSS
  purge: {
    enabled: true,
    content: ['./client/**/*.jsx'] // Only observe .jsx files
  },
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#4E66C7',
          600: '#385AE0'
        }
      }
    }

  }
}
