/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Elegância em Prata" - JS Joias
        ink: {
          DEFAULT: '#0A0A0A', // preto profundo (fundo)
          900: '#0A0A0A',
          800: '#141414',
          700: '#1F1F1F',
          600: '#2A2A2A',
        },
        silver: {
          DEFAULT: '#E5E4E2', // prata
          light: '#F5F5F5',
          dark: '#9CA3AF',
        },
        // Acento dourado elegante
        gold: {
          DEFAULT: '#D4AF37', // dourado clássico
          light: '#E8C547',
          dark: '#B8960C',
          glow: 'rgba(212, 175, 55, 0.3)',
        },
        // Rose gold alternativa
        rose: {
          DEFAULT: '#B76E79',
          light: '#C98A92',
          dark: '#955660',
          glow: 'rgba(183, 110, 121, 0.3)',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'], // títulos elegantes
        serif: ['Playfair Display', 'serif'], // textos elegantes
        sans: ['Inter', 'system-ui', 'sans-serif'], // texto técnico
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(212, 175, 55, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
