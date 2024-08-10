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
        'pink': '#D688C1',
        'lavender': '#9773E0',
        'sky': '#2F91D3',
        'teal': '#2DCDC2',
        'light-blue': '#579dff',
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
        'xxs': '0.5rem',
      },
      dropShadow: {
        'blue-glow': '0 0 15px rgba(115, 189, 255, 0.8)',
      },
    },
  },
  plugins: [],
}