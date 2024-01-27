/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"]
      },
      transitionDuration: {
        "2000": "2000ms"
      },
      spacing: {
        '128': '32rem',
        '140': ''
      }
    },
  },
  plugins: [],
}

