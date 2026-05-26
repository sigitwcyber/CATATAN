/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wingstone: {
          dark: '#0B0B0B',     // Deep Premium Black
          cardDark: '#161616', // Card Black
          light: '#F9F9F9',    // Pure Light Gray
          cardLight: '#FFFFFF',// White Card
          accent: '#D4AF37',   // Premium Gold Accent
          muted: '#8E8E93'     // Cool Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}