const colors = require('./colors');

module.exports = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',

  '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.2)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  primary: `0 0 10px ${colors.primary.light}`,
  secondary: `0 0 10px ${colors.secondary.light}`,
  green: '0 0 10px rgba(34, 197, 94,0.7)',
  gray: '0 0 10px rgba(17, 24, 39,0.2)',
  container:
    '0px 0px 20px rgba(17, 24, 39,0.3), -10px 0 10px rgba(255, 255, 255,0.6)',
  none: 'none',
};
