import theme from 'styled-theming';

const THEME_LIGHT = '#fffefc';
const THEME_DARK = '#121212';
const THEME_BRAND_PRIMARY = '#fc802d';
const THEME_BRAND_SECONDARY = '#fd2647';
const THEME_LIGHT_LINEAR_GRADIENT_START = 'rgba(253, 38, 71, 1)';
const THEME_LIGHT_LINEAR_GRADIENT_MIDDLE = 'rgba(252, 128, 45, 1)';
const THEME_LIGHT_LINEAR_GRADIENT_END = 'rgba(250, 167, 43, 1)';

const THEME_DARK_LINEAR_GRADIENT_START = 'rgba(25, 4, 7, 1)';
const THEME_DARK_LINEAR_GRADIENT_MIDDLE = 'rgba(25, 13, 4, 1)';
const THEME_DARK_LINEAR_GRADIENT_END = 'rgba(25, 17, 4, 1)';

const btnColorCombo = { light: THEME_DARK, dark: THEME_LIGHT };

const bgAndBtnTextCombo = { light: THEME_LIGHT, dark: THEME_DARK };

const linearGradientCombo = {
  start: {
    light: THEME_LIGHT_LINEAR_GRADIENT_START,
    dark: THEME_DARK_LINEAR_GRADIENT_START,
  },

  middle: {
    light: THEME_LIGHT_LINEAR_GRADIENT_MIDDLE,
    dark: THEME_DARK_LINEAR_GRADIENT_MIDDLE,
  },

  end: {
    light: THEME_LIGHT_LINEAR_GRADIENT_END,
    dark: THEME_DARK_LINEAR_GRADIENT_END,
  },
};

const brandColorCombo = (brandType) =>
  brandType === 'primary'
    ? { light: THEME_BRAND_PRIMARY, dark: THEME_BRAND_PRIMARY }
    : { light: THEME_BRAND_SECONDARY, dark: THEME_BRAND_SECONDARY };

const themeStyles = {
  textColor: theme('mode', { light: '#000', dark: '#fff' }),
  buttonBgColor: theme('mode', btnColorCombo),
  buttonBorderColor: theme('mode', btnColorCombo),
  buttonTextColor: theme('mode', bgAndBtnTextCombo),
  backgroundColor: theme('mode', bgAndBtnTextCombo),
  linearGradientColorStart: theme('mode', linearGradientCombo.start),
  linearGradientColorMiddle: theme('mode', linearGradientCombo.middle),
  linearGradientColorEnd: theme('mode', linearGradientCombo.end),
  brandPrimaryColor: theme('mode', brandColorCombo('primary')),
  brandSecondaryColor: theme('mode', brandColorCombo('secondary')),
};

export default themeStyles;
