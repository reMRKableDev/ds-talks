import theme from 'styled-theming';

const THEME_LIGHT = '#fffefc';
const THEME_DARK = '#040707';
const THEME_BRAND_PRIMARY = '#fc802d';
const THEME_BRAND_SECONDARY = '#fd2647';

const btnColorCombo = { light: THEME_DARK, dark: THEME_LIGHT };

const bgAndBtnTextCombo = { light: THEME_LIGHT, dark: THEME_DARK };

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
  brandPrimaryColor: theme('mode', brandColorCombo('primary')),
  brandSecondaryColor: theme('mode', brandColorCombo('secondary')),
};

export default themeStyles;
