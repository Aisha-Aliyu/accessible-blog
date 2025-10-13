/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b5fff", // accessible blue
          dark: "#084bb5"
        },
        accent: "#f97316",
        muted: "#64748b"
      },
    },
  },
  plugins: [],
};