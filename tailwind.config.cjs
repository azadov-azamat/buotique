const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      comforts: ["Comfortaa"],
      shangoB: ["Shango-Bold"],
      shangoM: ["Shango-Medium"]
    },
    colors: {
      primary: '#6C9392',
      primary_dark: '#103A39',
      primary_light: '#D4E2D5',
      brown: '#A05842',
      brown_light: '#E5D5BE',
      white: '#FEF9F5',
      gold: '#CDC18F'
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
})
