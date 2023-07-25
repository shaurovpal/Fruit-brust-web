/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'food-bg': "url( './images/banner1.png' )"
            
          }
      },
    },
    plugins: [],
  }