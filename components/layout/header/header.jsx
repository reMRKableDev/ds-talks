/* import { SunIcon, MoonIcon, Bars2Icon } from '@heroicons/react/24/outline/'; */
import SiteLink from 'components/shared/siteLink';
import SiteIcon from 'components/shared/siteIcon';
import { useDarkMode, useUI } from 'hooks';
import Button from 'components/shared/ui/button';
import {
  BG,
  SUN_ICON,
  MOON_ICON,
  MENU_ICON,
  TRANSLATE,
  BRAND_NAME,
} from 'lib/constants/';

const Header = () => {
  const [enabled, setEnabled] = useDarkMode();
  const { handleToggleMenu } = useUI();

  const handleEnableSwitch = () => setEnabled(!enabled);

  const setIconColor = (isMoon) =>
    isMoon === MOON_ICON ? `text-white bg-none` : `text-black bg-none`;

  const isEnabled = (isEnabledValue, styleType) => {
    switch (styleType) {
      case BG:
        return isEnabledValue ? 'bg-black' : 'bg-white';

      case TRANSLATE:
        return isEnabledValue ? 'translate-x-6' : 'translate-x-1';

      default:
        return null;
    }
  };

  return (
    <header className="uppercase flex justify-between items-center p-4 z-10 md:p-6 bg-white text-black sticky top-0 dark:bg-black dark:text-white">
      <Button
        onClick={handleEnableSwitch}
        className={`${isEnabled(
          enabled,
          BG
        )} relative inline-flex flex-shrink-0 items-center h-6 w-12 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors ease-in-out duration-200 border-solid border-2 border-black  dark:border-white`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(
            enabled,
            TRANSLATE
          )} inline-block w-5 h-5 transform bg-brandRed rounded-full shadow-lg  ring-0 transition ease-in-out duration-100 p-0.5 md:transition hover:scale-150 border-solid border-2 border-black`}
        >
          <span
            className={
              enabled ? setIconColor(MOON_ICON) : setIconColor(SUN_ICON)
            }
          >
            <SiteIcon name={enabled ? MOON_ICON : SUN_ICON} />
          </span>
        </span>
      </Button>
      <SiteLink className="select-none text-xl" linkTo="/" value={BRAND_NAME} />

      <Button className="select-none md:text-lg" onClick={handleToggleMenu}>
        <span className="block h-4 w-4 md:h-8 md:w-8 text-black dark:text-white">
          <SiteIcon name={MENU_ICON} />
        </span>
      </Button>
    </header>
  );
};

export default Header;
