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
      '11': '380px',
      '6': '30vw',
      '102' : '93vw',
      '7' : "20vh",
      '8' : "850px",
      "12" : "600px",
      "13" : "350px",
      "14" : "450px",
      "15" : "170px",
      "16" : "660px",
      "17" : "90px",
      "18" : "650px",
      "19" : "50px",
    }
  },
  daisyui: {
    themes: ["halloween"],
    color : ["accent"]
  },
  plugins: [require("daisyui")],
}