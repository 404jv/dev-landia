/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'blue': {
        450: '#52A1E9',
        350: '#64B9D0',
      },
      'purple': {
        750: '#716F9C'
      },
      'gray': {
        950: '#202023',
        850: '#2E2E33',
        450: '#646783',
        350: '#CFCFD0'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}