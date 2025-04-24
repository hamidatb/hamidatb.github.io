/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#1E0623",
          secondary: "#FCD8F6",
          tertiary: "#36113D",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
        },
        boxShadow: {
          card: "0px 35px 120px -15pxrgb(163, 43, 115)",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg2.png')",
        },
      },
    },
    plugins: [],
  };