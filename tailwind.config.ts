import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: '#a855f7',
        accent: '#06b6d4',
        dark: {
          DEFAULT: '#0a0a0f',
          card: 'rgba(20, 20, 30, 0.8)',
          glass: 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s infinite ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(50px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-30px, 30px) scale(0.9)' },
          '75%': { transform: 'translate(-50px, -30px) scale(1.05)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          'to': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #06b6d4 0%, #6366f1 100%)',
      },
    },
  },
  plugins: [],
}

export default config
