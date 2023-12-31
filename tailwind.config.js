/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      big: ["Anton", "sans-serif"],
      darkerGrotesque: ["Darker Grotesque", "sans-serif"],
      bubble: ["Cherry Bomb One", "cursive"],
      marker: ["Permanent Marker", "cursive"],
      fat: ["Bagel Fat One", "cursive"],
      chicle: ["Chicle", "cursive"],
    },
    extend: {
      colors: {
        background: "#181818",
        foreground: "#f5f5f5",
        primary: "#b15cff",
        secondary: "#b9ff5c",
        tertiary: "#ff5d5d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
