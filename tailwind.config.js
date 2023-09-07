const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
