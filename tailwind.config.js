const colors = require('tailwindcss/colors');

function guessProductionMode() {
  const argv = process.argv.join(' ').toLowerCase();
  const isProdEnv = process.env.NODE_ENV === 'production';
  return (
    isProdEnv ||
    [' build', ':build', 'ng b', '--prod'].some((command) =>
      argv.includes(command)
    )
  );
}

module.exports = {
  purge: {
    enabled: guessProductionMode(),
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      fontFamily: {
        marker: ['Permanent Marker', 'cursive', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
