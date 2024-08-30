/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'hero-one': "url('https://img.goodfon.com/original/3875x2180/e/8d/mashina-car-render-rendering-sportkar-transport-vehicles-r-4.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
}

