/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"],
        heading: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
