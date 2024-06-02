/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm-max': { 'max': '378px' },
        'sm-max': { 'max': '768px' },
        'md-max': { 'max': '968px' },
      },
    },
  },
  plugins: [],
}

