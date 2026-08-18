
const config= {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-yellow-500',
    'text-yellow-600',
    'text-purple-500',
    'text-purple-600',
    'text-blue-500',
    'border-yellow-500/30',
    'border-purple-500/30',
    'border-blue-500/30',
    'bg-yellow-500/10',
    'bg-purple-500/10',
    'bg-blue-500/10',
    'border-yellow-500/20',
    'border-purple-500/20',
    'border-blue-500/20',
    'via-yellow-500/60',
    'via-purple-500/60',
    'via-blue-500/60',
    'shadow-yellow-500/20',
    'shadow-purple-500/20',
    'shadow-blue-500/20',
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
        'spin-slow': 'spin 8s linear infinite',
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
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
        '2000': '2000px',
      },
      screens: {
        xs: '475px',
      },
      zIndex: {
        header: '9999',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1500': {
          perspective: '1500px',
        },
        '.perspective-2000': {
          perspective: '2000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      })
    },
  ],
}

export default config