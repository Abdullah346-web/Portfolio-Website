/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--main-color)',
      },
      boxShadow: {
        glow: '0 0 8px var(--main-color), 0 0 16px var(--main-color)',
      },
    },
  },
  plugins: [],
}
