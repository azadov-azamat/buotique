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
    screens: {
      's270': '270px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md2': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
      gold: '#CDC18F',
      opacity_form: 'rgba(196, 196, 196, 0.15)',
      opacity_hero: 'rgba(0, 0, 0, 0.6)',
      opacity_page: 'rgba(120, 121, 106, 0.3)',

    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
})
