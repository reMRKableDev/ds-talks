import { useState } from 'react';
import { Switch } from '@headlessui/react';
import SiteIcon from '../shared/siteIcon';
import useDarkMode from '../../hooks/useDarkMode';
import {
  isEnabled,
  headerItems,
  headerWrapper,
  switchContainer,
  switchToggleWrapper,
} from './headerStyles';
import { BRAND_NAME, SUN_ICON, MOON_ICON } from '../../lib/constants';

const Header = ({ handleToggleMenu }) => {
  const [enabled, setEnabled] = useState(false);
  // const [dark, setDark] = useDarkMode();

  return (
    <header className={headerWrapper}>
      <button className={headerItems} onClick={handleToggleMenu}>
        Menu
      </button>
      <p className={headerItems}>{BRAND_NAME}</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${isEnabled(
          enabled,
          'bg-black',
          'bg-white'
        )} ${switchContainer}`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(
            enabled,
            'translate-x-6',
            'translate-x-1'
          )} ${switchToggleWrapper}`}
        >
          {<SiteIcon name={isEnabled(enabled, MOON_ICON, SUN_ICON)} />}
        </span>
      </Switch>
    </header>
  );
};

export default Header;
