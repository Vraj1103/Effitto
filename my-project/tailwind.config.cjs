/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:"#006677",
        light_green:"#00AFCC",
      },
      fontFamily: {
       Poppins:["Poppins", "sans-serif"], 
       Podkova:["Podkova","serif"],
      },
    },
  },
  plugins: [],
}