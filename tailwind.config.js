/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#0066ff',
        accent: '#ff6b35',
        'neutral-light': '#f5f5f5',
        'neutral-dark': '#2a2a2a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
}
