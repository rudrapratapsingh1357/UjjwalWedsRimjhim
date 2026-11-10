/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F8F4EB',
          light: '#FBF9F4',
          dark: '#EFE6D7',
        },
        beige: {
          DEFAULT: '#EFE6D7',
          warm: '#E6DCB8',
        },
        espresso: {
          DEFAULT: '#38291F',
          muted: '#5A4638',
          light: '#7A6453',
        },
        gold: {
          DEFAULT: '#B69558',
          light: '#D4B87C',
          dark: '#93733A',
          shimmer: '#E8D49E',
        },
        blush: {
          DEFAULT: '#DDA9A6',
          light: '#F2D3D1',
          soft: '#F9ECEB',
        },
        sage: {
          DEFAULT: '#8A947B',
          light: '#A5AE98',
          soft: '#E4E7DF',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        widest: '0.22em',
        luxury: '0.3em',
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(56, 41, 31, 0.05)',
        card: '0 10px 30px -4px rgba(182, 149, 88, 0.1)',
        gold: '0 0 25px rgba(182, 149, 88, 0.2)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B69558 0%, #D4B87C 50%, #93733A 100%)',
        'soft-fade': 'linear-gradient(180deg, rgba(248, 244, 235, 0) 0%, rgba(248, 244, 235, 0.95) 100%)',
      },
    },
  },
  plugins: [],
};

