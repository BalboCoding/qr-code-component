/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Outfit', 'sans-serif'],
      },
      colors:{
        customWhite:"hsl(0, 0%, 100%)",
        customSlate300:"hsl(212, 45%, 89%)",
        customSlate500:"hsl(216, 15%, 48%)",
        customSlate900:"hsl(218, 44%, 22%)"
      },
      fontSize:{
        base:"15px",
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'body': {
          margin: '0',
          padding: '0',
          'box-sizing': 'border-box',
        },
      });
    },
  ],
}

