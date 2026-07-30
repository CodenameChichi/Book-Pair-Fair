/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#3F3733',
        secondary: '#6B6558',
        light: {
          100: '#F8F6F3',
          200: '#EEE9E1',
          300: '#DED5CC',
        },
        dark: {
          100: '#7F756D',
          200: '#111111',
        },
        background: '#F8F6F3',
        accent: '#8D5852',
      },

      fontFamily: {
        'newyork': ['newyork'],
        'newyork-semi': ['newyork-semi'],
        'sf-pro': ['sf-pro'],
        'sf-pro-medium': ['sf-pro-medium'],
        'sf-pro-semi': ['sf-pro-semi'],
      }
    },
  },
  plugins: [],
}

