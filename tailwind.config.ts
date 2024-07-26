import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        "2xl": "2rem",
      },

      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch", // add required value here
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            p: {
              color: "#C4C4C4",
              letterSpacing: "1px",
              fontFamily: "var(--font-merriweather)",
              "@screen sm": {
                fontSize: "16px", // Adjust as needed
              },
              "@screen md": {
                fontSize: "18px", // Adjust as needed
              },
            },
            h1: {
              fontSize: "36px",
              lineHeight: "40px",
              color: "white",
              "@screen sm": {
                fontSize: "24px", // Adjust as needed
                lineHeight: "28px",
              },
              "@screen md": {
                fontSize: "30px", // Adjust as needed
                lineHeight: "34px",
              },
            },
            h2: {
              fontSize: "30px",
              lineHeight: "36px",
              color: "white",
              "@screen sm": {
                fontSize: "22px", // Adjust as needed
                lineHeight: "26px",
              },
              "@screen md": {
                fontSize: "26px", // Adjust as needed
                lineHeight: "30px",
              },
            },
            h3: {
              fontSize: "24px",
              lineHeight: "32px",
              color: "white",
              "@screen sm": {
                fontSize: "18px", // Adjust as needed
                lineHeight: "22px",
              },
              "@screen md": {
                fontSize: "20px", // Adjust as needed
                lineHeight: "24px",
              },
            },
            h4: {
              fontSize: "20px",
              lineHeight: "28px",
              color: "white",
              "@screen sm": {
                fontSize: "16px", // Adjust as needed
                lineHeight: "20px",
              },
              "@screen md": {
                fontSize: "18px", // Adjust as needed
                lineHeight: "22px",
              },
            },
            strong: {
              color: "white",
            },
            code: {
              backgroundColor: "rgba(229 229 229 / 0.1)",
              padding: "2px",
              color: "#d4d4d4",
              borderRadius: "4px",
            },
          },
        },
      },

      fontFamily: {
        sans: ["var(--font-merriweather)"],
      },
      container: {
        center: true,
        padding: "0px 24px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
