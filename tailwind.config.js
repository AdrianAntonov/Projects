/** @type {import('tailwindcss').Config} */

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['var (--font-lato)'],
        UnifrakturMaguntia: ['var (--font-UnifrakturMaguntia)'],
        Germania_One: ['var (--font-Germania_One)'],
      },
      // backgroundColor: {
      //   skin: {
      //     primary: withOpacity('--color-primary'),
      //     a11y: withOpacity('--color-a11y'),
      //   },
      // },
    },
  },
  plugins: [],
};
