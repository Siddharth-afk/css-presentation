/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        fade: 'fadeOut 5s ease-in-out',
        wave: 'wave 5s linear infinite',
        expand: 'expand linear',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.blue.600') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(3deg)' },
          '20%': { transform: 'rotate(-3deg)' },
          '30%': { transform: 'rotate(3deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
          '60%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        expand: {
          '0%': {borderRadius: 'border-radius: 75px'},
          '25%': {borderRadius: 'border-radius: 50px'},
          '50%': {borderRadius: 'border-radius: 25px'},
          '75%': {borderRadius: 'border-radius: 10px'},
          '100%': {borderRadius: 'border-radius: 0px'},
        }
      }),

      backgroundColor: theme => ({
        'heading-complement': '#4847B8', 
        'offwhite': '#f8f8ff',
      })
    },
  },
  plugins: [],
}
