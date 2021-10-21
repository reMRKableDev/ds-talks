import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon, MenuAlt4Icon } from '@heroicons/react/outline';
import SiteLink from '../shared/siteLink';
import useDarkMode from '../../hooks/useDarkMode';
import {
  menuIcon,
  isEnabled,
  headerLogo,
  headerItems,
  setIconColor,
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
            <MoonIcon className={setIconColor('moon')} />
          ) : (
            <SunIcon className={setIconColor('sun')} />
          )}
        </span>
      </Switch>
      <SiteLink className={headerLogo} linkTo="/" value={BRAND_NAME} />

      <div
        role="button"
        tabIndex={0}
        className={headerItems}
        onClick={handleToggleMenu}
        onKeyPress={handleToggleMenu}
      >
        <MenuAlt4Icon className={menuIcon} />
      </div>
    </header>
  );
};

export default Header;
