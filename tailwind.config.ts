import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ef',
          100: '#cce6de',
          200: '#99ccbd',
          300: '#66b39c',
          400: '#33997b',
          500: '#004e35',
          600: '#003e2a',
          700: '#002f20',
          800: '#001f15',
          900: '#00100b',
        },
        secondary: {
          50: '#fce8e8',
          100: '#f9d1d1',
          200: '#f3a3a4',
          300: '#ed7576',
          400: '#e74749',
          500: '#d01012',
          600: '#a60d0e',
          700: '#7d0a0b',
          800: '#530707',
          900: '#2a0304',
        },
        beige: '#F3F3F1',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        DEFAULT: '#F3F3F1',
      },
    },
  },
  plugins: [],
};

export default config;

