/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"],
        heading: ["Heebo", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 3px 6px rgba(0, 0, 0, 1), 0 3px 6px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};
