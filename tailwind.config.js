/** @type {import('tailwindcss').Config} */
// 1. Import the plugin function
const { addDynamicIconSelectors } = require('@iconify/tailwind');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  // 2. Add it to the plugins array
  plugins: [
    addDynamicIconSelectors(),
  ],
};