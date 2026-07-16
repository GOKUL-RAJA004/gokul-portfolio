/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#030712', // Very dark black/navy
          800: '#0b1121',
          700: '#111827',
          600: '#1f2937',
        },
        electric: {
          blue: '#3b82f6',
          purple: '#a855f7',
          cyan: '#06b6d4',
        },
        neon: {
          purple: '#c026d3', // Fuchsia/Magenta mix
          magenta: '#db2777',
          cyan: '#22d3ee',
          red: '#ef4444',
          blue: '#60a5fa'
        },
        // Flat keys for @apply resolution
        'navy-900': '#030712',
        'navy-800': '#0b1121',
        'navy-700': '#111827',
        'navy-600': '#1f2937',
        'electric-blue': '#3b82f6',
        'electric-purple': '#a855f7',
        'electric-cyan': '#06b6d4',
        'neon-purple': '#c026d3',
        'neon-magenta': '#db2777',
        'neon-cyan': '#22d3ee',
        'neon-red': '#ef4444',
        'neon-blue': '#60a5fa'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'blob-slow': 'blob 10s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(192, 38, 211, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
