import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          purple: '#7c3aed',
          dark: '#0a0a0f',
          card: '#111118',
          border: '#1e1e2e',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: [
          'clamp(2rem, 5vw, 4rem)',
          { lineHeight: '1.1', fontWeight: '800' },
        ],
        section: [
          'clamp(1.5rem, 3vw, 2.5rem)',
          { lineHeight: '1.2', fontWeight: '700' },
        ],
        'card-title': [
          'clamp(1rem, 2vw, 1.5rem)',
          { lineHeight: '1.4', fontWeight: '600' },
        ],
        'body-lg': [
          'clamp(0.95rem, 1.5vw, 1.125rem)',
          { lineHeight: '1.7', fontWeight: '400' },
        ],
        body: [
          'clamp(0.9rem, 1vw, 1rem)',
          { lineHeight: '1.6', fontWeight: '400' },
        ],
        small: [
          'clamp(0.8rem, 0.9vw, 0.875rem)',
          { lineHeight: '1.5', fontWeight: '400' },
        ],
        xs: [
          'clamp(0.7rem, 0.8vw, 0.75rem)',
          { lineHeight: '1.4', fontWeight: '400' },
        ],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 99, 235, 0.15)',
        'glow-lg': '0 0 80px rgba(37, 99, 235, 0.2)',
        card: '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(37, 99, 235, 0.15)',
      },
      screens: {
        xs: '475px',
      },
      zIndex: {
        header: '9999',
      },
    },
  },
  plugins: [],
}

export default config
