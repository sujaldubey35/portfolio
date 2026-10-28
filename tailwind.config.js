/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0e14",
        "ink-2": "#0f141c",
        "ink-3": "#141b24",
        paper: "#f1f5f9",
        "paper-dim": "#94a3b8",
        "paper-faint": "#64748b",
        teal: {
          DEFAULT: "#14b8a6",
          light: "#2dd4bf",
          deep: "#0f766e",
          glow: "rgba(20, 184, 166, 0.15)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};