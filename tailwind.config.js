/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
      backgroundImage: {
        'hero': 'url(../image/desktop/image-hero.jpg)',
        'mobile-hero': 'url(../image/mobile/image-hero.jpg)'
      }
    },
  },
  plugins: [],
}

