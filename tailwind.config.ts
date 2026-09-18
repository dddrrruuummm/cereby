import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071c2b",
        pearl: "#f4f8f5",
        blush: "#ff6b4a",
        wine: "#0d887c",
        brass: "#d7ff3f",
        mist: "#d9eee8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(7, 28, 43, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
