/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0871E0',
        secondary: '#4EADFE',
        text: '#1F1F21',
      },
    },
  },
  plugins: [],
};
