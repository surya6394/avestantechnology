/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgclr": "#002a54",
        "txt-clr": "#222222",
        "hover-clr": "#F88F50",
        "txt-clr2": "#dfe6e9",
        "whatsapp-clr": "#00b894",
        "facebook-clr": "#3498db",
        "instagram-clr": "#d62976",
        "linkedin-clr": "#2980b9",
        "bgclr1": "#96BDA6",
        "btnclr1": "#CDB30C"
      }
    },
  },
  plugins: [],
}

