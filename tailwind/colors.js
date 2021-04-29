const colors = require('tailwindcss/colors');

let darkblue = {
  100: '#2651B54',
  200: '#2651B5',
  300: '#1B3A80',
  400: '#022342',
  500: '#152C63',
  600: '#0B1733',
  700: '#000d19',
  800: '#000810',
  900: '#000408',
};

let secondaryGreen = {
  100: '#e9f2ce',
  200: '#d3e59d',
  300: '#bcd96c',
  400: '#a6cc3b',
  500: '#90bf0a',
  600: '#698C07',
  700: '#698C07',
  800: '#78A108',
  900: '#304003',
};

module.exports = {
  transparent: 'transparent',
  gray: {
    darkest: colors.gray['900'],
    dark: colors.gray['600'],
    DEFAULT: colors.gray['400'],
    light: '#f5f5f5',
    lightest: colors.gray['200'],
  },
  green: {
    darkest: colors.green['900'],
    dark: colors.green['800'],
    DEFAULT: colors.green['500'],
    light: colors.green['100'],
    lightest: colors.green['50'],
  },
  red: {
    darkest: colors.red['900'],
    dark: colors.red['800'],
    DEFAULT: colors.red['500'],
    light: colors.red['100'],
    lightest: colors.red['50'],
  },
  white: {
    DEFAULT: 'var(--color-white)',
  },
  primary: {
    darkest: darkblue['900'],
    dark: darkblue['600'],
    DEFAULT: darkblue['500'],
    light: darkblue['300'],
    lightest: darkblue['100'],
  },
  secondary: {
    darkest: secondaryGreen['900'],
    dark: secondaryGreen['800'],
    DEFAULT: secondaryGreen['500'],
    light: secondaryGreen['300'],
    lightest: secondaryGreen['100'],
  },
  blue: {
    darkest: colors.blue['900'],
    dark: colors.blue['800'],
    DEFAULT: colors.blue['500'],
    light: colors.blue['100'],
    lightest: colors.blue['50'],
  },
  yellow: {
    darkest: colors.yellow['900'],
    dark: colors.yellow['800'],
    DEFAULT: colors.yellow['500'],
    light: colors.yellow['100'],
    lightest: colors.yellow['50'],
  },
};
