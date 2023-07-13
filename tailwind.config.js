/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Comic": ["Comic Sans MS", 'Sans-serif'],
        'Pacific': ['Pacifico',"Comic Sans MS",'cursive'],
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require('tailwindcss-animated')],
};
