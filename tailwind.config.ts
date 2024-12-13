import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spoti: ['var(--font-spotifymix-regular)'],
        spotiBold: ['var(--font-spotifymix-bold)'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "#121212",
        secondaryColor: "#212121",
        chipCheckbox: "#2a2a2a",
      },
    },
  },
  plugins: [],
} satisfies Config;


