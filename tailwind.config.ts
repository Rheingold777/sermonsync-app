import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SermonSync Brand Colors
        navy: {
          DEFAULT: "#1A2238",
          50: "#E8EAF0",
          100: "#C5CAD9",
          200: "#9EA6BF",
          300: "#7782A5",
          400: "#596591",
          500: "#3B497D",
          600: "#1A2238",
          700: "#151C2E",
          800: "#101624",
          900: "#0B101A",
        },
        gold: {
          DEFAULT: "#C8A951",
          50: "#FCF9F0",
          100: "#F7F0D9",
          200: "#EFDFB0",
          300: "#E7CE87",
          400: "#DFBD5E",
          500: "#C8A951",
          600: "#A68A3E",
          700: "#7D682F",
          800: "#544620",
          900: "#2B2410",
        },
        cream: {
          DEFAULT: "#FBF8F0",
          50: "#FFFFFF",
          100: "#FBF8F0",
          200: "#F5EEDC",
          300: "#EFE4C8",
          400: "#E9DAB4",
          500: "#E3D0A0",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
