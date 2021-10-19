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
import { BRAND_NAME, BG, TRANSLATE } from '../../lib/constants';

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
        className={`${isEnabled(enabled, BG)} ${switchContainer}`}
      >
        <span
          aria-hidden="true"
          className={`${isEnabled(enabled, TRANSLATE)} ${switchToggleWrapper}`}
        >
          {<SiteIcon name={isEnabled(enabled)} />}
        </span>
      </Switch>
    </header>
  );
};

export default Header;
