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
        // Dark luxury palette
        obsidian: "#0A0A0A",
        carbon: "#0E0E0F",
        charcoal: "#121214",
        graphite: "#1A1A1D",
        smoke: "#222226",
        // Elegant gold accents
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C670",
          dark: "#A8862A",
          muted: "#8A7029",
        },
        ivory: "#F5F2EA",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.25em",
        wider2: "0.18em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E8C670 0%, #D4AF37 45%, #A8862A 100%)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(212,175,55,0.10), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "luxe": "0 30px 80px -20px rgba(0,0,0,0.8)",
        "gold-glow": "0 0 40px -8px rgba(212,175,55,0.35)",
        "card": "0 20px 60px -25px rgba(0,0,0,0.9)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "kenburns": {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1.5%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "kenburns": "kenburns 20s ease-out infinite alternate",
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "scroll-down": "scroll-down 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
