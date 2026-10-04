/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
          dark: '#000000',
        },
        azure: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#CC5500',
        },
        cyan: {
          DEFAULT: '#FF6B00',
          light: '#FF8533',
          dark: '#CC5500',
        },
        surface: '#F8F8F8',
        ink: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
