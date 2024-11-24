/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "rgb(var(--color-white) / <alpha-value>)",
      black: "rgb(var(--color-black ) / <alpha-value>)",
      gray: "rgb(var(--color-gray ) / <alpha-value>)",
      lightwhite: "rgb(var(--color-lightwhite ) / <alpha-value>)",
      lightgray: "rgb(var(--color-lightgray ) / <alpha-value>)",
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
    },
    backgroundImage: {
      'engine-pattern': "url('/img/engine-pattern.png')",
    },
    extend: {},
  },
  plugins: [],
};
