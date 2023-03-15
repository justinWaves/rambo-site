/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'rambo-red': '#EE1210'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'Sans'],
      },
    },
  },
  plugins: [],
}
