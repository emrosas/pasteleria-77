/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Objectivity", "sans-serif"],
      },
      colors: {
        dark: "#1F1F1F",
        "dark-2": "#0f0f0f",
        light: "#F8FCFA",
        brand: "#A2D8C8",
        "brand-2": "#1F473B",
        "brand-3": "#49AB8E",
        "header-1": "#0B0A09",
        "header-2": "#161413",
        "header-3": "#2C2825",
      },
      spacing: {
        page: "var(--page-spacing)",
      },
      backgroundImage: {
        hero: "url('/images/header-bg.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 16px))" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
