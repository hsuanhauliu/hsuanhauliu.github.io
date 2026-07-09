/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          0: '#0a0e17',
          1: '#0f1420',
          2: '#161c2b',
        },
        accent: {
          DEFAULT: '#5b9bff',
          soft: '#9dc1ff',
        },
      },
    },
  },
  plugins: [],
}

