const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      futuraBookRegular: ["futurabookcregular", "sans-serif"],
    },
    extend: {
      fontFamily: {
        sans: ["futura-demic-reg", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
