import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'guessed-cell': '#6AAA64',
        'includes-cell': '#CEB02C',
        'no-match-cell': '#939B9F',
        'empty-cell': '#DEE1E2',
        'qwerty': '#DADCE04D',
        'header': '#F3F3F3',
        'custom-dark': '#262B3C',
      },
      minWidth: {
        'keys-cell': '44px',
      },
      minHeight: {
        'keys-cell': '51px',
      },
      width: {
        'cell': '76px',
        'qwerty-cell': '44px',
        '68': '263px',
      }, 
      height: {
        'cell': '76px',
        'qwerty-cell': '51px',
      },
    },
  },
  plugins: [
    nextui()
  ],
};
export default config;
