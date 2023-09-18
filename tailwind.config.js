/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem'
      },
      colors: {
        'purple': '#24053E',
        'green': '#44FFA1',
        'pink': '#FCF8FF',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
    }
  },
  plugins: [],
}

