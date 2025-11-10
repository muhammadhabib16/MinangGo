/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF5E1',
        sand: '#FFEBCC',
        brand: '#C8302D',
        highlight: '#F4B41A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 24px 70px -30px rgba(200, 48, 45, 0.25)',
      },
    },
  },
  plugins: [],
}

