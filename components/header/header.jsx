import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon, MenuAlt4Icon } from '@heroicons/react/outline';
import SiteLink from '../shared/siteLink';
import useDarkMode from '../../hooks/useDarkMode';
import {
  isEnabled,
  headerItems,
  headerWrapper,
  switchContainer,
  switchToggleWrapper,
} from './headerStyles';
import { BRAND_NAME, BG, TRANSLATE } from '../../lib/constants';

const Header = ({ handleToggleMenu }) => {
  const [enabled, setEnabled] = useDarkMode();

  const handleEnableSwitch = () => setEnabled(!enabled);

  return (
    <header className={headerWrapper}>
      <Switch
        checked={enabled}
        onChange={handleEnableSwitch}
        className={`${isEnabled(enabled, BG)} ${switchContainer}`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(enabled, TRANSLATE)} ${switchToggleWrapper}`}
        >
          {enabled ? (
            <MoonIcon className="text-white" />
          ) : (
            <SunIcon className="text-black" />
          )}
        </span>
      </Switch>
      <SiteLink className={headerItems} linkTo="/" value={BRAND_NAME} />

      <div
        role="button"
        tabIndex={0}
        className={headerItems}
        onClick={handleToggleMenu}
        onKeyPress={handleToggleMenu}
      >
        <MenuAlt4Icon className="block h-8 w-8 text-black dark:text-white" />
      </div>
    </header>
  );
};

export default Header;
