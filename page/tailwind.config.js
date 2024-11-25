/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          contentGreen: '#B6C4A2',
          darkGreen:    '#222823',
        },
        grey: {
          contentGrey:  '#575A5E',
        },
        white: {
          contentWhite: '#F4F7F5',
        },
        black: {
          contentBlack: '#020100'
        },
        orange: {
          warning:      '#E07A5F'
        },
      },
      scrollMargin: {
        // Für Abschnitte mit einem fixierten Header von 80px Höhe
        'header': '80px',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scrollBehavior: ['responsive'], // Aktiviert responsive smooth scrolling
    },
  },
};
