import type { Config } from "tailwindcss";

export default {
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
        primary: '#F5E2B1',
        secondary: '#6F4F2E',
        org: '#D97C2E',
        // darkBrown: '#3E2A47',
        // goldenYellow: '#F1C232',
        // black: '#2A2A2A',
      },
    },
    plugins: [],
  }
} satisfies Config;

