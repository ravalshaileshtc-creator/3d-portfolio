/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDeep: '#11131b',
        bgSurface: '#191b23',
        bgGlass: 'rgba(25, 27, 35, 0.65)',
        primary: '#b4c5ff',
        secondary: '#4cd7f6',
        accent: '#ffb596',
        borderGlow: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 0 25px rgba(76, 215, 246, 0.25)',
        glowBlue: '0 0 25px rgba(180, 197, 255, 0.25)',
        glowPurple: '0 0 35px rgba(168, 85, 247, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
