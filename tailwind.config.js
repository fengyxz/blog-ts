/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{
      colors:{
        primary:'#f5cb5c',
      }
    }
  },
  plugins: [ require('tailwind-scrollbar'),],
}
