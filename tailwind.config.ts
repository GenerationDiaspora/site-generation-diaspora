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
        // Vert Héritage — #0B5E3C
        primary: {
          50: '#e7f2ed',
          100: '#cee4da',
          200: '#9dc9b5',
          300: '#6cae90',
          400: '#3b936b',
          500: '#1e7850',
          600: '#0B5E3C',
          700: '#094b30',
          800: '#073824',
          900: '#042518',
        },
        // Rouge Engagement — #C8102E
        secondary: {
          50: '#fae7ea',
          100: '#f4cfd5',
          200: '#e99fab',
          300: '#de7081',
          400: '#d34057',
          500: '#C8102E',
          600: '#a30d26',
          700: '#7d0a1d',
          800: '#570714',
          900: '#32040b',
        },
        // Or Prestige — #C8A55A
        gold: {
          50: '#faf6ee',
          100: '#f4edde',
          200: '#e9dbbd',
          300: '#dec99c',
          400: '#d3b77b',
          500: '#C8A55A',
          600: '#a98847',
          700: '#856b38',
          800: '#614e29',
          900: '#3d311a',
        },
        beige: '#F7F4EE',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        DEFAULT: '#F7F4EE',
      },
    },
  },
  plugins: [],
};

export default config;

