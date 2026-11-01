/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        riad: {
          bg: '#fbfbfa',
          sand: '#f6f4f2',
          cream: '#e9ddd2',
          terracotta: '#66473d',
          'terracotta-hover': '#43322d',
          bronze: '#ad8566',
          pine: '#24322e',
          'pine-dark': '#1a2421',
          sage: '#4b6753',
          blue: '#1e4870',
          'blue-light': '#edf4f9',
          gold: '#c29d59',
          charcoal: '#1d2434',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.18em',
        'super-luxury': '0.25em',
      }
    },
  },
  plugins: [],
}

