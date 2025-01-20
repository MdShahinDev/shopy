/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',},
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
      },
      backgroundImage: {
        'promoBanner': "url('/src/assets/promotionalBanner.jpg')",
        'mencategory': "url('/src/assets/Mencategory.png')",
        'womencategory': "url('/src/assets/Womencategory.png')",
        'kidcategory': "url('/src/assets/Kidscategory.png')",
        'emailsubscription': "url('/src/assets/Banner1.jpg')",
        'shopcover': "url('/src/assets/ShopCover.jpg')",
      }
    },
  },
  plugins: [],
}