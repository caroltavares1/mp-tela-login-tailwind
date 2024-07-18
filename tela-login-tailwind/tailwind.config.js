/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradient1: '#4158d0',
        gradient2: '#c850c0',
        gradient3: '#ffcc70',
        bgcolor: {
          DEFAULT: '#070709'
        },
        h1Color: {
          DEFAULT: '#E5E7EB'
        },
        textColor: {
          DEFAULT: '#9CA3AF'
        },
        inputArea: {
          DEFAULT: '#111112'
        }
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

