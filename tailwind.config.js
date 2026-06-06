/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light premium palette
        primary: '#0F172A',      // Deep navy
        secondary: '#0EA5E9',    // Sky blue
        accent: '#F59E0B',       // Amber
        light: '#F8FAFC',        // Off white
        border: '#E2E8F0',       // Light gray
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
