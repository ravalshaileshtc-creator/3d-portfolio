/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 3 Strict Light Colors:
        // 1. Crisp Light Background (#F8FAFC)
        // 2. Primary Text & Deep Slate (#0F172A)
        // 3. Tech Accent Blue (#0284C7)
        bgDeep: '#F8FAFC',
        bgSurface: '#FFFFFF',
        bgGlass: 'rgba(255, 255, 255, 0.85)',
        primary: '#0F172A',
        secondary: '#0284C7',
        accent: '#0284C7',
        borderGlow: 'rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glowCyan: '0 4px 25px rgba(2, 132, 199, 0.15)',
        glowBlue: '0 4px 25px rgba(15, 23, 42, 0.10)',
        glowPurple: '0 4px 35px rgba(2, 132, 199, 0.15)',
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
