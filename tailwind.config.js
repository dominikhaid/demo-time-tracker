// Example `tailwind.config.js` filecorePlugins  from ('./tailwind/core');
const spacing = require('./tailwind/spacing');
const keyframes = require('./tailwind/vivify-keyframes');
const animations = require('./tailwind/vivify-names');
const keyframes2 = require('./tailwind/hover-keyframes');
const animations2 = require('./tailwind/hover-names');
const colors = require('./tailwind/colors');
const fontSize = require('./tailwind/fontsize');
const screens = require('./tailwind/screens');
const width = require('./tailwind/width');
const height = require('./tailwind/height');
const core = require('./tailwind/core');
const shadow = require('./tailwind/shadow');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  corePlugins: core,
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
      borderColor: ['active', 'hover', 'disabled'],
      borderWidth: ['active', 'hover'],
      opacity: ['disabled', 'dark'],
      backgroundColor: ['disabled'],
      cursor: ['hover', 'focus', 'disabled'],
      boxShadow: ['dark', 'hover'],
      animation: ['hover'],
    },
  },
  theme: {
    // important: '#__next',
    spacing: spacing,
    ringColor: colors,
    colors: colors,
    screens: screens,
    minWidth: width,
    maxWidth: width,
    // fill: colors,
    width: width,
    height: height,
    minHeight: height,
    maxHeight: height,
    inset: width,
    fontFamily: {
      sans: ['Maven Pro', 'sans-serif'],
    },
    boxShadow: shadow,
    fontSize: fontSize,
    container: {padding: spacing},
    extend: {
      keyframes: {...keyframes, ...keyframes2},
      animation: {...animations, ...animations2},
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
