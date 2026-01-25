/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A726A', // Verde institucional elegante (baseado no logo)
          light: '#6B9A91',
          dark: '#3A5A54',
        },
        secondary: {
          DEFAULT: '#D4C4B0', // Marrom claro para detalhes
          light: '#E8DDD0',
          dark: '#B8A896',
        },
        neutral: {
          offWhite: '#FAF9F7', // Off-white para fundos
          gray: '#6B7280', // Cinza elegante para textos
          dark: '#374151',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
