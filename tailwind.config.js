/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Patrick Hand', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z' stroke='gray' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 21L16.65 16.65' stroke='gray' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px',
          backgroundSize: '15px',
        }
      }
      addUtilities(utilities);
    })
  ],
}
