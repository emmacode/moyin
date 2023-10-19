import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ["var(--sf-font)", ...fontFamily.sans],
      },
      colors: {
        primary: "#e6f1ff",
        primaryAlpha: "#adc8ff",
        secondary: "#ef3636",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
