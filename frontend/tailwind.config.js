/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#2B3A8C", // Trust (Primary)
        saffron: "#F59E0B", // Highlights / Buttons
        teal: "#0EA5A4", // Success / Active
        neutralBg: "#F9FAFB", // Background
        darkText: "#111827", // Text
        lightGray: "#E5E7EB", // Borders / Subtle elements
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        card: "0 6px 20px rgba(0, 0, 0, 0.05)",
        glow: "0 0 15px rgba(37, 99, 235, 0.1)", // for subtle button glow
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-slide": "fadeSlide 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #2B3A8C 0%, #0EA5A4 100%)", // subtle modern background option
      },
      transitionProperty: {
        smooth: "all",
      },
    },
  },
  plugins: [],
};