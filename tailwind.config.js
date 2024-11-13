/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('./assets/banner.jpg')",
      },
      colors:{
        activeBtn: "#A7C957",
        hover: "#cfd186"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

