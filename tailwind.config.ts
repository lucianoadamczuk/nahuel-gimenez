import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    colors: {
      light: "#F2F2F2",
      gray: "#D9D9D9",
      dark: {
        DEFAULT: "#0D0D0D",
        soft: "#262626",
      },

      transparent: "rgba(242, 242, 242, 0)",
      primary: {
        DEFAULT: "#593723",
        light: "#8C5E35",
      },

      highlight: {
        DEFAULT: "#8C1E14",
      },
    },
  },
  plugins: [],
};
export default config;
