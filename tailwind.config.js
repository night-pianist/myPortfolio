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
        playwritehu: ["Playwrite HU", 'cursive'],
        dancingscript: ["Dancing Script", 'cursive'],
        varelaround: ["Varela Round", 'sans-serif'],
      },
      fontSize: {
        'welcomeSizeLg': '10rem',
        'welcomeSizeMd': '9rem',
        'welcomeSizeSm': '8rem',
      },
    },
  },
  plugins: [],
}