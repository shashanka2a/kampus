import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        marker: ["var(--font-marker)", "cursive"],
        handwriting: ["var(--font-handwriting)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(12deg)" },
          "50%": { transform: "translateY(-10px) rotate(6deg)" }
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

