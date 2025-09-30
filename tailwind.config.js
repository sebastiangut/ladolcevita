/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          25: '#fffef7',
          50: '#fffbeb',
        },
        orange: {
          25: '#fffaf5',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'body': ['Crimson Text', 'serif'],
      },
      animation: {
        'fadeInSmooth': 'fadeInSmooth 0.8s ease-in-out forwards',
        'logoRevealSmooth': 'logoRevealSmooth 1.2s ease-in-out forwards',
        'menuReveal': 'menuReveal 1s ease-out forwards',
        'starTwinkle': 'starTwinkle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInSmooth: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 30px, 0) scale3d(0.8, 0.8, 1)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
          },
        },
        logoRevealSmooth: {
          'from': {
            opacity: '0',
            transform: 'translate3d(0, 50px, 0) scale3d(0.6, 0.6, 1)',
          },
          'to': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
          },
        },
        menuReveal: {
          'from': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        starTwinkle: {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.2)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
