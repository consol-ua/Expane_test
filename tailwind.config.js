module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5f5ee',
          100: '#c0e7d4',
          200: '#97d7b9',
          300: '#6ac89e',
          400: '#44bc8a',
          500: '#00b075',
          600: '#00a16a',
          700: '#008f5d',
          800: '#007d51',
          900: '#005d3b',
        },
        black: '#2B3940',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
