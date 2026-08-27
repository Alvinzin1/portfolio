/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#F8FAFC',       // Slate-50 (fundo principal claro)
          darker: '#FFFFFF',     // Branco (fundo alternado e sidebar)
          forest: '#FFFFFF',     // Branco (fundo dos cards)
          orange: '#2563EB',     // Tech Blue (Acento Principal)
          mint: '#7C3AED',       // Royal Violet (Acento Secundário)
          light: '#0F172A',      // Slate-900 (Texto principal escuro)
          success: '#10B981',    // Esmeralda moderna para sucesso
          danger: '#EF4444',
          warning: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.4s ease-out forwards',
        'pop-in': 'popIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          'from': { transform: 'scale(0.95)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        popIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '80%': { transform: 'scale(1.02)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
