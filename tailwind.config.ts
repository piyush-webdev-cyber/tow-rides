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
        primary: {
          DEFAULT: "#FF6B00",
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#FF6B00",
          700: "#EA580C",
          800: "#C2410C",
          900: "#9A3412",
        },
        accent: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#64748B",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FF6B00 0%, #FF8A3D 25%, #FF6B00 50%, #EA580C 100%)",
        "hero-gradient-2":
          "linear-gradient(135deg, #FF6B00 0%, #EA580C 50%, #C2410C 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
        "texture-noise":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        "glow-white": "0 0 20px rgba(255,255,255,0.3)",
        "glow-orange": "0 0 30px rgba(255,107,0,0.4)",
        "glow-black": "0 0 15px rgba(0,0,0,0.2)",
        "card": "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      transitionTimingFunction: {
        "ease-smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
