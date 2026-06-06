import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural green primary palette
        forest: {
          DEFAULT: "#2F4A36",
          900: "#1F3325",
          800: "#274030",
          700: "#2F4A36",
          600: "#3A5C43",
          500: "#4A7254",
          400: "#6A9072",
        },
        moss: "#4A7254",
        fern: "#6B9362",
        sage: {
          DEFAULT: "#8FA98A",
          light: "#C3D2BD",
        },
        // Earthy / stone tones
        clay: "#B0876A",
        terracotta: "#C07F5A",
        stone: {
          DEFAULT: "#7C7E78",
          light: "#D8D5CC",
          dark: "#5A5C56",
        },
        // Warm neutrals / backgrounds
        cream: "#FAF8F2",
        sand: "#EFE9DD",
        linen: "#F3EFE6",
        // Text
        ink: "#23291F",
        bark: "#3C3A33",
      },
      fontFamily: {
        display: ["var(--font-bitter)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.12em",
        wider3: "0.18em",
      },
      backgroundImage: {
        "leaf-fade":
          "radial-gradient(ellipse at top right, rgba(74,114,84,0.08), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(31,51,37,0.25)",
        card: "0 18px 50px -28px rgba(31,51,37,0.35)",
        lift: "0 28px 60px -30px rgba(31,51,37,0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(12px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        kenburns: "kenburns 22s ease-out infinite alternate",
        "scroll-down": "scroll-down 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
