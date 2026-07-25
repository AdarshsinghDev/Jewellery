import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── COLOUR SYSTEM ────────────────────────────────────────────────
      // NOT pure white. NOT dark. A warm parchment-bone-linen palette
      // Every value has temperature — no neutral greys
      colors: {
        // Surface hierarchy — cool parchment, slight grey warmth
        canvas:   "#F4F3F0",   // base — cool white parchment
        surface:  "#ECEAE5",   // cards, panels
        wash:     "#E4E1DB",   // subtle inset
        tint:     "#D2CECA",   // borders, dividers
        // Ink hierarchy — darker for better visibility
        ink:      "#0F0F11",   // primary text — near-true black
        dim:      "#2A2830",   // secondary
        muted:    "#52505A",   // tertiary
        ghost:    "#82808A",   // captions, placeholders
        // Accent — burgundy/wine #76233c scale
        silver: {
          deep:   "#3D0F1F",   // darkest
          dark:   "#5A1A2E",   // dark
          mid:    "#76233C",   // PRIMARY — exact user color
          warm:   "#8F3A52",   // slightly lighter
          light:  "#B06880",   // soft
          pale:   "#DDB8C4",   // very pale tint
          blush:  "#F5EAEe",   // near-surface tint
        },
        // Backward-compat alias
        bronze: {
          deep:   "#3D0F1F",
          dark:   "#5A1A2E",
          mid:    "#76233C",
          warm:   "#8F3A52",
          light:  "#B06880",
          pale:   "#DDB8C4",
          blush:  "#F5EAEE",
        },
        white:    "#FFFFFF",
        true:     "#0D0D0F",
      },

      // ── TYPOGRAPHY ───────────────────────────────────────────────────
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-jost)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Optical — not mechanical
        "3xs":  ["0.6rem",  { lineHeight: "1", letterSpacing: "0.15em" }],
        "2xs":  ["0.68rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
        xs:     ["0.78rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        sm:     ["0.875rem",{ lineHeight: "1.65", letterSpacing: "0.03em" }],
        base:   ["1rem",    { lineHeight: "1.75", letterSpacing: "0.01em" }],
        lg:     ["1.1rem",  { lineHeight: "1.7", letterSpacing: "0em" }],
        xl:     ["1.25rem", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        "2xl":  ["1.5rem",  { lineHeight: "1.5", letterSpacing: "-0.02em" }],
        "3xl":  ["2rem",    { lineHeight: "1.3", letterSpacing: "-0.03em" }],
        "4xl":  ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.04em" }],
        "5xl":  ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.04em" }],
        "6xl":  ["5rem",    { lineHeight: "1",   letterSpacing: "-0.05em" }],
        "7xl":  ["6.5rem",  { lineHeight: "0.95",letterSpacing: "-0.05em" }],
        "8xl":  ["8.5rem",  { lineHeight: "0.92",letterSpacing: "-0.06em" }],
      },

      // ── SPACING ─────────────────────────────────────────────────────
      spacing: {
        px:  "1px",
        "0.5": "4px",
        "1":   "8px",
        "1.5": "12px",
        "2":   "16px",
        "2.5": "20px",
        "3":   "24px",
        "3.5": "28px",
        "4":   "32px",
        "5":   "40px",
        "6":   "48px",
        "7":   "56px",
        "8":   "64px",
        "9":   "72px",
        "10":  "80px",
        "11":  "88px",
        "12":  "96px",
        "14":  "112px",
        "16":  "128px",
        "18":  "144px",
        "20":  "160px",
        "24":  "192px",
        "28":  "224px",
        "32":  "256px",
        "36":  "288px",
        "40":  "320px",
        "48":  "384px",
        "56":  "448px",
        "64":  "512px",
        "72":  "576px",
        "80":  "640px",
      },

      maxWidth: {
        content:   "1440px",
        editorial: "1280px",
        body:      "960px",
        prose:     "640px",
        narrow:    "480px",
      },

      borderRadius: {
        none: "0",
        sm:   "1px",
        DEFAULT: "2px",
        md:   "3px",
        lg:   "4px",
        xl:   "6px",
        full: "9999px",
      },

      boxShadow: {
        // Warm-temperature shadows — brown undertone, not grey
        "sm":   "0 1px 4px rgba(28,24,20,0.08)",
        "md":   "0 4px 16px rgba(28,24,20,0.10)",
        "lg":   "0 8px 32px rgba(28,24,20,0.12)",
        "xl":   "0 16px 56px rgba(28,24,20,0.14)",
        "2xl":  "0 32px 80px rgba(28,24,20,0.16)",
        "card": "0 2px 12px rgba(28,24,20,0.08), 0 1px 3px rgba(28,24,20,0.06)",
        "lift": "0 8px 40px rgba(28,24,20,0.14)",
        "inner":"inset 0 1px 4px rgba(28,24,20,0.08)",
        "bronze-glow": "0 0 60px rgba(118,35,60,0.12)",
      },

      transitionTimingFunction: {
        "silk":   "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo":   "cubic-bezier(0.19, 1, 0.22, 1)",
        "soft":   "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "sharp":  "cubic-bezier(0.55, 0, 0.1, 1)",
      },

      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "1000":"1000ms",
        "1200":"1200ms",
      },

      keyframes: {
        "reveal-up": {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "line-grow": {
          "0%":   { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        "drift-up": {
          "0%":   { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-12px)" },
        },
        "ticker": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        "reveal-up":  "reveal-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "reveal-in":  "reveal-in 0.7s ease forwards",
        "line-grow":  "line-grow 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "drift-up":   "drift-up 6s ease-in-out infinite alternate",
        "ticker":     "ticker 50s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
