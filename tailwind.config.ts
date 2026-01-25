import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2d5a3d",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Disable problematic utilities that cause CSS warnings
    textSizeAdjust: false,
    fontSmoothing: false,
  },
  future: {
    // Disable experimental features that cause warnings
    hoverOnlyWhenSupported: true,
  },
};

export default config;