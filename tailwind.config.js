	/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 4s linear infinite',
        },
        colors:{
          primary: '#64748b',
          secondary: '#cbd5e1',
        }
      }
    },
    plugins: [],
  }