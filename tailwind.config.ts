import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", lg: "2rem" }, screens: { xl: "1180px" } },
    extend: {
      colors: {
        ink: { DEFAULT: "#ffffff", soft: "#d3d3d7", muted: "#b9b8bb", dim: "#7d7c85" },
        night: { DEFAULT: "#0d0c11", 2: "#121118" },
        line: { DEFAULT: "rgba(255,255,255,.09)", strong: "rgba(255,255,255,.16)" },
        violet: { DEFAULT: "#6f5adc", deep: "#4d19b1", soft: "#c9bcff" },
        teal: { DEFAULT: "#9ff0ec", kicker: "#bdf7ee" },
        logo: "#bcbcbf",
        wa: { DEFAULT: "#25d366", deep: "#128c4a" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "50%": { transform: "translateY(-10px)" } },
        pop: { from: { opacity: "0", transform: "translateY(8px) scale(.96)" } },
        rise: { from: { opacity: ".15", transform: "translateY(24px)" } },
        lineUp: { from: { transform: "translateY(105%)" } },
        settle: { from: { opacity: "0", transform: "translateY(10px)" } },
        ring: { from: { transform: "scale(1)", opacity: ".7" }, to: { transform: "scale(1.6)", opacity: "0" } },
        blink: { "50%": { opacity: ".25" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite 1.2s",
        pop: "pop .35s cubic-bezier(.2,.9,.3,1.2) both",
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        "line-up": "lineUp .9s cubic-bezier(.2,.75,.2,1) both",
        settle: "settle .8s ease both",
        ring: "ring 2.4s infinite",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
