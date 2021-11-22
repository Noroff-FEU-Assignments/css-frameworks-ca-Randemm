module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "440px",
      // => @media (min-width: 440px) { ... }

      md: "576px",
      // => @media (min-width: 576px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1680px) { ... }
    },
    extend: {
      colors: {
        primary: "#262626",
        spacegray: "#E5E5E5",
        smashpink: "#C32C72",
        softbeige: "#F4F3EE",
        altgray: "#8D8D8D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
