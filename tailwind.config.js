/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px"
      },
      colors: {
        "background": "#e4e4e4",
        "heading": "#2f2f2f",
        primary: {
          "100": "#335e57",
          "200": "#5F9C92"
        },
        secondary: {
          "100": "#f09f07"
        },
        navbar: {
          "scroll": "rgba(255,255,255,0.7)",
          "border-scroll": "rgba(255,255,255,0.7)"
        }
      }
    },
  },
  plugins: [],
}
