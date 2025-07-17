const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      aspectRatio: {
        poster: "2 / 3",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, addComponents }) {
      // Add custom utilities
      addUtilities({
        ".grid-list": {
          display: "grid",
          gap: "1rem",
          "grid-template-columns": "repeat(auto-fill, minmax(8rem, 1fr))",
          "@media (min-width: 768px)": {
            "grid-template-columns": "repeat(auto-fill, minmax(12rem, 1fr))",
          },
          "@media (min-width: 1024px)": {
            "grid-template-columns": "repeat(auto-fill, minmax(15rem, 1fr))",
          },
        },
        ".h-hero": {
          height: "560px",
          "@media (min-width: 768px)": {
            height: "780px",
          },
        },
        ".scrollbar-hidden": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      })

      // Add custom components
      addComponents({
        ".overlay": {
          position: "absolute",
          inset: "0",
          border: "1px solid hsl(var(--border))",
          "border-radius": "calc(var(--radius) - 2px)",
          display: "flex",
          "align-items": "flex-end",
          "background-image":
            "linear-gradient(to top right, hsl(var(--background) / 0.95))",
        },
        ".empty-box": {
          display: "flex",
          height: "8rem",
          "align-items": "center",
          "justify-content": "center",
          "border-radius": "calc(var(--radius) + 2px)",
          border: "1px dashed hsl(var(--border))",
          color: "hsl(var(--muted-foreground))",
        },
      })
    },
  ],
}
