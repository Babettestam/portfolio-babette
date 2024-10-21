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
      gridTemplateColumns: {
        base: "5% auto 5%",
        baseMd: "10% auto 10%",
        baseXl: "15% auto 15%",
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
    // borderRadius: {
    //   none: "0",
    //   sm: "0.125rem",
    //   md: "0.375rem",
    //   lg: "0.5rem",
    //   full: "9999px",
    //   large: "12px",
    // },
  },
  plugins: [],
};
export default config;
