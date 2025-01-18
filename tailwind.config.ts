import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "700px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch", // add required value here
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            h1: {
              color: "rgba(255,255,255,0.8)",
            },
            h2: {
              color: "rgba(255,255,255,0.8)",
            },
            h3: {
              color: "rgba(255,255,255,0.8)",
            },
            h4: {
              color: "rgba(255,255,255,0.8)",
            },
            h5: {
              color: "rgba(255,255,255,0.8)",
            },
            h6: {
              color: "rgba(255,255,255,0.8)",
            },
          },
        },
      },
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       maxWidth: "100ch", // add required value here
      //       color: "#333",
      //       a: {
      //         color: "#3182ce",
      //         "&:hover": {
      //           color: "#2c5282",
      //         },
      //       },
      //       p: {
      //         color: "rgba(255,255,255,0.8)",
      //         fontWeight: "300",
      //         "@screen sm": {
      //           fontSize: "16px", // Adjust as needed
      //         },
      //         "@screen md": {
      //           fontSize: "18px", // Adjust as neede
      //         },
      //       },
      //       h1: {
      //         fontSize: "36px",
      //         lineHeight: "40px",
      //         color: "rgba(255,255,255,0.8)",
      //         "@screen sm": {
      //           fontSize: "24px", // Adjust as needed
      //           lineHeight: "28px",
      //         },
      //         "@screen md": {
      //           fontSize: "30px", // Adjust as needed
      //           lineHeight: "34px",
      //         },
      //       },
      //       h2: {
      //         fontSize: "30px",
      //         lineHeight: "36px",
      //         color: "rgba(255,255,255,0.8)",
      //         "@screen sm": {
      //           fontSize: "22px", // Adjust as needed
      //           lineHeight: "26px",
      //         },
      //         "@screen md": {
      //           fontSize: "26px", // Adjust as needed
      //           lineHeight: "30px",
      //         },
      //       },
      //       h3: {
      //         fontSize: "24px",
      //         lineHeight: "32px",
      //         color: "rgba(255,255,255,0.8)",
      //         "@screen sm": {
      //           fontSize: "18px", // Adjust as needed
      //           lineHeight: "22px",
      //         },
      //         "@screen md": {
      //           fontSize: "20px", // Adjust as needed
      //           lineHeight: "24px",
      //         },
      //       },
      //       h4: {
      //         fontSize: "20px",
      //         lineHeight: "28px",
      //         color: "rgba(255,255,255,0.8)",
      //         "@screen sm": {
      //           fontSize: "16px", // Adjust as needed
      //           lineHeight: "20px",
      //         },
      //         "@screen md": {
      //           fontSize: "18px", // Adjust as needed
      //           lineHeight: "22px",
      //         },
      //       },
      //       strong: {
      //         color: "rgba(255,255,255,0.8)",
      //       },
      //       mark: {
      //         color: "black",
      //       },
      //       code: {
      //         backgroundColor: "rgba(229 229 229 / 0.1)",
      //         padding: "2px",
      //         color: "#d4d4d4",
      //         borderRadius: "4px",
      //       },
      //     },
      //   },
      // },

      fontFamily: {
        jetBrains: ["var(--font-jet-brains)"],
        inter: ["var(--inter)"],
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
