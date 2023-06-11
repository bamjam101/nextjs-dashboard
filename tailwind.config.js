/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#323C4D",
        secondary: "#7A8699",
        gray: "#606C80",
        "gray-light": "#F2F4F7",
        "gray-secondary": "#1F2633",
        brown: "#CA8A04",
        yellow: "#CA8A04",
        pink: "#DB2777",
        purple: "#9333EA",
        green: "#16A34A",
        sky: "#17A5E6",
      },
      backgroundColor: {
        main: "#F7F8FA",
        green: "#22C55E1A",
        yellow: "#EAB3081A",
        pink: "#EC48991A",
        purple: "#A855F71A",
      },
    },
  },
  plugins: [],
};
