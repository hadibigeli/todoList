/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2sm': '300px',
        'sm': '400px',  
        'md': '700px',  
        'lg': '1080px', 
        'xl': '1440px', 
      },
    },
  },
  plugins: [],
}

