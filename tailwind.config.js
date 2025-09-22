/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        'custom-1553': '1053px',
      },
      height: {
        'custom-521': '421px',
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #343A62 0%, #20243E 100%)',
      },
      colors: {
        'custom-white': 'rgba(255, 255, 255, 1)',
      },

      
    },
  },
  plugins: [],
}

