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
        bgLight: "#F5F3EE",
        primaryText: "#111111",
        secondaryText: "#666666",
        accentLime: "#C7F000",
        borderLight: "#C9C7C0",
        darkSection: "#111111",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
        heading: ["var(--font-heading)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "Oswald", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
