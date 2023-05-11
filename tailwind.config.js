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
        'red-netflix': 'rgba(229, 9, 20, 1)',
        'red-netflix-dark': 'rgba(193, 17, 25, 1)'
      }
    }
  },
  plugins: []
};
