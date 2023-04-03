/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-rgb': 'rgb(20, 20, 20)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
