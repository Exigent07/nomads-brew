/** @type {import('tailwindcss').Config} */
export default {
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
        textColor: "var(--text-color)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "sans-serif"],
        special: ["'Raleway'", "sans-serif"],
        logo: ["'Anton'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
