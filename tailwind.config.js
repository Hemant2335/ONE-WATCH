/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '30vw',
      '102' : '93vw',
      '7' : "20vh",
      '8' : "850px"
    }
  },
  daisyui: {
    themes: ["halloween"],
    color : ["accent"]
  },
  plugins: [require("daisyui")],
}