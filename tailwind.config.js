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
          primary: '#22d3ee',
          secondary: '#818cf8',
        }
      }
    },
    plugins: [],
  }