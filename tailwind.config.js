export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        surface: "rgba(255,255,255,0.08)",
        border: "rgba(255,255,255,0.12)",
        primary: "#6366F1",
        accent: "#22D3EE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui"],
        heading: ["Cal Sans", "Inter"],
      },
    },
  },
  plugins: [],
};
