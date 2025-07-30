/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5AA9E6',
        secondary: '#FFFFFF',
        accent: '#2D4B6D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5AA9E6 0%, #2D4B6D 100%)',
      },
    },
  },
  plugins: [],
};
