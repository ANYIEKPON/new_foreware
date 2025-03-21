import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: "350px",
      ssm2: "380px",
      ssm3: "420px",
      sm: "480px",
      md: "768px",
      lg1: "940px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        my_bg_image: "url('../public/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
