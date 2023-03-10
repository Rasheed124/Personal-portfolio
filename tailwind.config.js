/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: {
      //     'about-pattern': "url('./public/assets/images/about.png')",
      //  },

      colors: {
        primaryOne: 'rgb(249,249,252)',
        primaryTwo: 'rgb(15,18,33)',
        secondary: {
          100: 'rgb(239,253,249)',
          200: 'rgb(208,236,245)',
        }
      },
      zIndex: {
        '-one': '-1',
        'two': '2',
      },

      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [],
}
