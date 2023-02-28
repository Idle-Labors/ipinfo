/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik']
    },
    backgroundImage: (theme) => ({
      heroImg: "url('pattern-bg.png')"
    })
  }},
  plugins: []}
