import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F0C0A", // near-black restaurant backdrop
          soft: "#171310"
        },
        wood: {
          DEFAULT: "#241712", // dark bar-wood panels
          light: "#2F1F17"
        },
        gold: {
          DEFAULT: "#C9A24B", // logo metal gold
          light: "#E8CD8A",
          dim: "#8C7136"
        },
        cream: "#F3ECDD", // menu-card paper tone
        ember: {
          DEFAULT: "#A63A2C", // grill coals accent, used sparingly
          light: "#C24B3A"
        },
        leaf: "#384A34" // foliage green from the printed menus
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        script: ["var(--font-playball)", "cursive"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(243,236,221,0.045) 1px, transparent 0)",
        "ember-fade": "linear-gradient(90deg, transparent, rgba(166,58,44,0.55), transparent)"
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,162,75,0.35)"
      }
    }
  },
  plugins: []
};

export default config;
