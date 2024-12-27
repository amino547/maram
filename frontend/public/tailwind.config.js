/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This makes sure Tailwind can purge unused styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
