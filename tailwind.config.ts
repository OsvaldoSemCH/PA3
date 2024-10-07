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
        "cy3":"var(--Yellow3)",
        "cy2":"var(--Yellow2)",
        "cy1":"var(--Yellow1)",
        "white":"var(--White)",
        "cblue":"var(--Blue)",
        "black":"var(--Black)",
      },
    },
  },
  plugins: [],
};
export default config;
