export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "cyan",
        tertiary: "#E5E5E5",
      },
      fontFamily: {
        primary: ["Libre Baskerville", "sans-serif"],
        secondary: ["Mukta", "sans-serif"],
        tertiary: ["Cinzel", "sans-serif"],
      }
    },
  },
  plugins: [],
}
