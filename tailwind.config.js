/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      screens: {
        xs: "570px",
        "2md": "940px",
        lg: "1128px",
        "3xl": "1728px",
      },
    },
  },
  plugins: [],
};
