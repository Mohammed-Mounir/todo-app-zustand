const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Primary
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-bg':
          'linear-gradient(100deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        'check-bg-blue': 'hsl(192, 100%, 67%)',
        'check-bg-purple': 'hsl(280, 87%, 65%)',
        // Light Theme
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',
        // Dark Theme
        'very-dark-blue': 'hsl(235, 21%, 11%)',
        'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-dark': 'hsl(234, 11%, 52%)',
        'very-dark-grayish-blue-dark': 'hsl(233, 14%, 35%)',
        'very-dark-grayish-blue-dark2': 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [],
};
