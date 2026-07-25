/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#3F3733',
        secondary: '#6B6558',
        light: {
          100: '#F8F6F3',
          200: '#DED5CC',
        },
        dark: {
          100: '#111111',
        },
        background: '#F8F6F3',
        accent: '#8D5852',
      }
    },
  },
  plugins: [],
}

