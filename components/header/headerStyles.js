import { BG, TRANSLATE } from '../../lib/constants';

export const headerWrapper = `flex justify-between items-center p-4 md:p-6 bg-brandRed text-white sticky top-0`;

export const headerItems = `uppercase mt-0.5 select-none md:text-lg`;

export const switchContainer = `
relative inline-flex flex-shrink-0 items-center h-6 w-12 rounded-full cursor-pointer border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors ease-in-out duration-200
`;

export const switchToggleWrapper = `inline-block w-5 h-5 transform bg-brandRed rounded-full shadow-lg transform ring-0 transition ease-in-out duration-100 p-0.5 md: transition duration-500 ease-in-out hover:scale-150`;

export const menuIcon = `block h-8 w-8 text-black dark:text-white`;

export const setIconColor = (isMoon) =>
  isMoon === 'moon' ? `text-white` : `text-black`;

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
