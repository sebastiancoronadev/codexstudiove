import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#FF007F',
          orange: '#FF6B00',
          red: '#FF0000',
          cyan: '#00F0FF',
          gold: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        'marquee-slow': 'marquee 70s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'glitch-1': 'glitch-anim-1 0.4s infinite linear alternate-reverse',
        'glitch-2': 'glitch-anim-2 0.5s infinite linear alternate-reverse',
        'snake-rotate': 'snakeRotate 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        snakeRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'glitch-anim-1': {
          '0%': { clipPath: 'inset(40% 0 61% 0)' },
          '20%': { clipPath: 'inset(92% 0 1% 0)' },
          '40%': { clipPath: 'inset(43% 0 1% 0)' },
          '60%': { clipPath: 'inset(25% 0 58% 0)' },
          '80%': { clipPath: 'inset(54% 0 7% 0)' },
          '100%': { clipPath: 'inset(58% 0 43% 0)' },
        },
        'glitch-anim-2': {
          '0%': { clipPath: 'inset(65% 0 20% 0)' },
          '20%': { clipPath: 'inset(28% 0 16% 0)' },
          '40%': { clipPath: 'inset(54% 0 31% 0)' },
          '60%': { clipPath: 'inset(72% 0 2% 0)' },
          '80%': { clipPath: 'inset(15% 0 42% 0)' },
          '100%': { clipPath: 'inset(84% 0 12% 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 127, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 0, 127, 0.8)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config
