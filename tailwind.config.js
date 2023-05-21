/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'red-netfuix': 'rgba(229, 9, 20, 1)',
        'red-netfuix-dark': 'rgba(193, 17, 25, 1)',
        'dark-netfuix': 'rgb(20, 20, 20)'
      },
      screens: {
        '3xl': '1920px'
      }
    }
  },
  plugins: []
};
