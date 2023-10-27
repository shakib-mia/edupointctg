/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#002c6a",
      secondary: {
        DEFAULT: "#f5c76b",
        100: "#f7d282",
        200: "#f8da9a",
        300: "#fae2b1",
        400: "#fbedc9",
        500: "#fdf5e0",
        600: "#fffdf8",
        700: "#e6b75a",
        800: "#d9a64b",
        900: "#cc9541",
      },
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
};
