/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      maxHeight:{
        '80vh': '80vh',
        '95vh': '95vh',
        '100vh': '100vh'
      }
    },
  },
  plugins: [],
}

