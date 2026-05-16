import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FC5632",
          orangeHover: "#E54825",
          blue: "#0B6DFF",
          blueDark: "#0242C5",
          text: "#111111",
          muted: "#5B6470",
          soft: "#F6F7F8",
          border: "#E5E7EB",
          dark: "#131314"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.08)",
        card: "0 18px 50px rgba(17, 17, 17, 0.06)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
