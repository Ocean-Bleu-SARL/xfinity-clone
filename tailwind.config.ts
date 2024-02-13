import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mmd: { max: "768px" },
        mlg: { max: "1280px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#000000',
        secondary: '#6138F5',
        onPrimary: '#FFFFFF',
        onSecondary: '#FFFFFF',
        thirth: '#008558',
        onThirth: '#ffffff'
      },
      fontFamily: {
        crete: ['Crete Round', 'serif'],
        cabin: ['Cabin', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
