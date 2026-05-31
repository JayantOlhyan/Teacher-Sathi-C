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
        primary: "#166534",
        accent: "#15803D",
        success: "#16A34A",
        warning: "#D97706",
        danger: "#DC2626",
        brand: {
          DEFAULT: "#166534",
          dark: "#14532D",
          light: "#15803D",
          50: "#EDF7EF",
          100: "#D8EEDD",
          200: "#AEDCBA",
          300: "#79C390",
          400: "#3FA866",
          500: "#16A34A",
          600: "#15803D",
          700: "#166534",
          800: "#14532D",
          900: "#0F3D22",
          950: "#0A2A17",
        },
        cta: {
          DEFAULT: "#16A34A",
          hover: "#128A3E",
        },
        warm: {
          bg: "#F7F9F4",
          sunken: "#EEF2EA",
          surface: "#FBFCF8",
          DEFAULT: "#3C4B3A",
          gold: "#E1A140",
          yellow: "#FBBF24",
        },
        ink: {
          DEFAULT: "#1C2B1C",
          2: "#3C4B3A",
          3: "#5E6C5A",
          4: "#8A9686",
        },
        cream: "#F7F9F4",
        "dark-bg": "#0A2A17",
        "dark-card": "#14532D",
        "dark-surface": "#0F3D22",
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(28,43,28,0.07), 0 4px 12px rgba(28,43,28,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "var(--font-mukta)", "sans-serif"],
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
