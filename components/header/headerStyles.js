export const headerWrapper = `flex justify-between items-center p-4 md:p-6 bg-brandRed text-white sticky top-0`;

export const headerItems = `uppercase mt-0.5`;

export const switchContainer = `
relative inline-flex flex-shrink-0 items-center h-6 w-12 rounded-full cursor-pointer border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors ease-in-out duration-200
`;

export const switchToggleWrapper = `inline-block w-5 h-5 transform bg-brandRed rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 p-0.5`;

export const isEnabled = (isEnabledValue, optionOne, optionTwo) =>
  isEnabledValue ? optionOne : optionTwo;
