/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#04db21",

          "secondary": "#cc77dd",

          "accent": "#4fef54",

          "neutral": "#362442",

          "base-100": "#E4E6E7",

          "info": "#7C9AF4",

          "success": "#1CD475",

          "warning": "#ECAB51",

          "error": "#E9563F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

