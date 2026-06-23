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
          50: '#e8f5ee',
          100: '#c6e8d6',
          200: '#8dd0ad',
          300: '#54b985',
          400: '#2da265',
          500: '#0B5D3B',
          600: '#094b30',
          700: '#073924',
          800: '#042618',
          900: '#02130c',
        },
        secondary: {
          50: '#fce8ea',
          100: '#f9d1d4',
          200: '#f3a3a9',
          300: '#ed757e',
          400: '#e74753',
          500: '#E1051A',
          600: '#b40415',
          700: '#870310',
          800: '#5a020b',
          900: '#2d0106',
        },
        gold: {
          50: '#faf6e6',
          100: '#f4eccc',
          200: '#e9d999',
          300: '#dec666',
          400: '#d3b333',
          500: '#D4AF37',
          600: '#aa8c2c',
          700: '#7f6921',
          800: '#554616',
          900: '#2a230b',
        },
        beige: '#F7F4EE',
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

