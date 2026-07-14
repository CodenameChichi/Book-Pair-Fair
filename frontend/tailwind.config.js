/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#3F3733',
        secondary: '#7F756D',
        light: {
          100: '#EEE9E1',
          200: '#E2DAD1',
        },
        dark: {
          100: '#656565',
          200: '#111111',
        },
        background: '#F8F6F3',
        accent: '#B06A72',
      }
    },
  },
  plugins: [],
}

