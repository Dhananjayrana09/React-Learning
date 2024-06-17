/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Fix typo from 'darkmode' to 'darkMode'
  theme: {
    extend: {},
  },
  plugins: [],
};
