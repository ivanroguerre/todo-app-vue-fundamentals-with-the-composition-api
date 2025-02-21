/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
  darkMode: "selector",
};
