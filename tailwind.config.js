/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        devcircleLight: {
          primary: "#6C5CE7",
          secondary: "#00B894",
          accent: "#FF7675",
          neutral: "#1F2937",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          info: "#3B82F6",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      {
        devcircleDark: {
          primary: "#8B5CF6",
          secondary: "#14B8A6",
          accent: "#F472B6",
          neutral: "#111827",
          "base-100": "#0F172A",
          "base-200": "#111827",
          "base-300": "#1F2937",
          info: "#60A5FA",
          success: "#34D399",
          warning: "#FBBF24",
          error: "#F87171",
        },
      },
      "corporate",
    ],
  },
};
