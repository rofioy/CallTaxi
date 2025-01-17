/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ["Poppins"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

