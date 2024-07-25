/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ice-blue': '#6EB3F4',
        'dark-indigo': '#080737',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playwrite: ["Playwrite DK Loopet", 'cursive'],
        playwritehr: ["Playwrite HR", 'cursive'],
        dancingscript: ["Dancing Script", 'cursive']
      },
      keyframes: {
        fadeInLeft: { // animate hi i'm 
          '0%': { opacity: 0, transform: 'translateX(-100px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}