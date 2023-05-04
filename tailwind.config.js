/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9b0404',
        'logo-main-dark': '#A85524',
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
}

