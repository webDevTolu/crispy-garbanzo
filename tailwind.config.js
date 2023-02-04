/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        dark: {
          background: "#18181b",
          hover: "#202022",
          text: "#f4f4f5",
          textSec: "#a1a1aa",
          textSubtle: "#48484e",
        },
        light: {
          background: "#ffffff",
          hover: "#fafafa",
          text: "#27272a",
          textSec: "#52525b",
          textSubtle: "#a1a1aa",
        },
        link: "#29beae",
        linkHover: "#187167",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
