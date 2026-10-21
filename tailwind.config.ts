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
        charcoal: {
          DEFAULT: "#20211F",
          pure: "#151614",
          light: "#2C2E2A",
          muted: "#3E413B",
        },
        linen: {
          DEFAULT: "#E8E1D5",
          light: "#F4F0E8",
          dark: "#D6CCC0",
        },
        offwhite: {
          DEFAULT: "#F8F6F0",
          pure: "#FAF8F4",
        },
        sage: {
          DEFAULT: "#9A9A82",
          light: "#B2B29E",
          dark: "#7A7A66",
        },
        softgrey: {
          DEFAULT: "#D8D6CF",
          light: "#ECEAE4",
          dark: "#BCB9AF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widestEditorial: "0.22em",
      },
      backgroundImage: {
        "textile-weave": "radial-gradient(#20211F 0.5px, transparent 0.5px), radial-gradient(#20211F 0.5px, #F8F6F0 0.5px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
