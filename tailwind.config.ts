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
        primary: "#2563EB",
        accent: "#7C3AED",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        brand: {
          DEFAULT: "#1D4ED8",
          dark: "#1e40af",
          light: "#3B82F6",
        },
        warm: {
          DEFAULT: "#4A3B2C",
          gold: "#E1A140",
          yellow: "#FBBF24",
        },
        cream: "#F9F9F4",
        "dark-bg": "#0B1121",
        "dark-card": "#1E293B",
        "dark-surface": "#1A233A",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.07), 0 4px 12px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto-sans-devanagari)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
