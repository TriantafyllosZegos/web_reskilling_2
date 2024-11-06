/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        grotesk: ["Cabinet Grotesk", "serif"],
        Teko: ["Teko"],
      },
      fontSize: {
        responsive: "clamp(60px, 10vw + 1rem, 300px)",
      },
      lineHeight: {
        responsive: "clamp(150px, 15vw + 2rem, 429px)",
      },
    },
  },
  plugins: [],
};
