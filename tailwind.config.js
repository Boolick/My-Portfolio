export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Open Sans", "sans-serif"],
        heading: ["Heebo", "sans-serif"],
      },
      boxShadow: {
        custom: "0 3px 6px rgba(0, 0, 0, 1), 0 3px 6px rgba(0, 0, 0, 1)",
      },
      transitionProperty: {
        opacity: "opacity",
        backgroundColor: "background-color",
        color: "color",
        flexDirection: "flex-direction",
      },
      transitionDuration: {
        DEFAULT: "500ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s forwards",
        fadeOut: "fadeOut 0.5s forwards",
      },
      screens: {
        xsm: "320px",
        sm: "640px",
        md: "768px",
        lg: "769px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
