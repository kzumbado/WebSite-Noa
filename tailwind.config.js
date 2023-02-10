/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
        'hsm': { 'raw': '(min-height: 770px)' },
        'hxs': { 'raw': '(min-height: 1000px)' }
      },
      colors: {
        "background": "#e4e4e4",
        "backgroundNight":"#2e2e36",
        "heading": "#2f2f2f",
        "headingNight": "#212127",
        "overlay": "rgba(47, 47, 47, 0.4)",
        primary: {
          "100": "#335e57",
          "200": "#5F9C92"
        },
        secondary: {
          "100": "#f09f07"
        },
        navbar: {
          "scroll": "rgba(228,228,228,0.7)",
          "scrollNight": "rgba(46, 46, 54, 0.7)",
          "border-scroll": "rgba(228,228,228,0.7)",
          "border-scroll-night": "rgba(46, 46, 54, 0.7)",
        }
      }
    },
  },
  plugins: [],
}
