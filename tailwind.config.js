/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'rambo-red': '#EE1210'
      },
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif']
      },
    },
  },
  plugins: [],
}
