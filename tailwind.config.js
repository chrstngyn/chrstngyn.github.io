module.exports = {
  purge: [],
  theme: {
    // responsive breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },

    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem"
      }
    },

    fontFamily: {
      display: ["Inconsolata", "monospace"],
      body: ["Montserrat", "sans-serif"]
    },

    // global color palette
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff"
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
