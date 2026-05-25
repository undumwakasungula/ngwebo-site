import type { Config } from 'tailwindcss';

const config: Config = {
content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './styles/**/*.css'],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        secondary: '#007BFF',
        accent: '#FFD447',
        neutral: {
          DEFAULT: '#F5F7FA',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0'
        },
        // legacy palette (preserved)
        space: {
          950: '#020816',
          900: '#08122a',
          800: '#14213d',
          700: '#243b5f',
        },
        steel: '#b0b8c4',
        cyan: '#4dc0ff',
      },
      boxShadow: {
        glow: '0 0 60px rgba(79, 170, 255, 0.12)',
      },
      backgroundImage: {
        'star-grid': 'radial-gradient(circle at top, rgba(77,192,255,0.16), transparent 26%), radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08), transparent 20%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04), transparent 12%)',
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        sans: ['Roboto', 'Open Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
