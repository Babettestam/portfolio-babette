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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#ECC053",
      secondary: "#7174AB",
      yellow: {
        800: "#AC821B",
      },
      lightBackground: "#FDF9EF",
    },
  },
  plugins: [],
};
export default config;
