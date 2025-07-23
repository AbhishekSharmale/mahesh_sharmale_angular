/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
      },
      colors: {
        'navy': '#1a237e',
        'orange': '#ff6f00',
        'gold': '#ffc107',
        'green': '#2e7d32',
        'blue': '#2196f3',
        'red': '#d32f2f',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 20px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 6px rgba(255, 111, 0, 0.2)',
        'button-hover': '0 6px 12px rgba(255, 111, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}