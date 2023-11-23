/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "earth":"url('/src/images/earth.png')"
      },
      screens:{
        "sm":"376px",
        "md":"640px",
        "lg":"1024px"
      }
    },
  },
  plugins: [],
}

