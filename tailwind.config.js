/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        night: {
          0: '#0b0a2a',
          1: '#140d3a',
          2: '#241a54',
        },
        star: {
          cyan: '#46e0ff',
          purple: '#b98bff',
          pink: '#ff8fc7',
          yellow: '#ffe07a',
          green: '#7cf0bd',
        },
      },
    },
  },
  plugins: [],
}

