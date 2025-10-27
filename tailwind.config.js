/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chart4: "hsl(var(--chart-4) / <alpha-value>)",
        chart5: "hsl(var(--chart-5) / <alpha-value>)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        '2xs': "var(--shadow-2xs)",
        xs: "var(--shadow-xs)",
      },
    },
  },
  plugins: [require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
};