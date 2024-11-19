/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#F2E200",
        primary: "#4C0DD4",
        // secondary: "#4C46FF",
        secondary: "#6F46FF",
      },
      backgroundColor: {
        primary: "#15043B",
      },
    },
  },
  plugins: [],
};
