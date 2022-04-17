import { BG, TRANSLATE } from 'lib/constants';

export const headerWrapper = `uppercase flex justify-between items-center p-4 z-10 md:p-6 bg-white text-black sticky top-0 dark:bg-black dark:text-white`;

export const headerThemeSwitcher = `h-[200px] w-[200px]`;

export const headerItems = `select-none md:text-lg`;

export const headerLogo = `select-none text-xl`;

export const switchContainer = `
relative inline-flex flex-shrink-0 items-center h-6 w-12 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors ease-in-out duration-200 border-solid border-2 border-black  dark:border-white
`;

export const switchToggleWrapper = `inline-block w-5 h-5 transform bg-brandRed rounded-full shadow-lg transform ring-0 transition ease-in-out duration-100 p-0.5 md: transition duration-500 ease-in-out hover:scale-150 border-solid border-2 border-black`;

export const menuIcon = `block h-4 w-4 md:h-8 md:w-8 text-black dark:text-white`;

export const setIconColor = (isMoon) =>
  isMoon === 'moon' ? `text-white bg-none` : `text-black bg-none`;

export const isEnabled = (isEnabledValue, styleType) => {
  switch (styleType) {
    case BG:
      return isEnabledValue ? 'bg-black' : 'bg-white';

    case TRANSLATE:
      return isEnabledValue ? 'translate-x-6' : 'translate-x-1';

    default:
      return null;
  }
};
