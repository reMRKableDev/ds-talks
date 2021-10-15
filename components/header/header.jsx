import { useState } from 'react';
import { Switch } from '@headlessui/react';
import SiteIcon from '../shared/siteIcon';
import useDarkMode from '../../hooks/useDarkMode';
import { BRAND_NAME, SUN_ICON, MOON_ICON } from '../../lib/constants';

const Header = ({ handleToggleMenu }) => {
  const [enabled, setEnabled] = useState(false);
  // const [dark, setDark] = useDarkMode();

  return (
    <header className="flex justify-between p-4 md:p-6 bg-brandRed text-white sticky top-0">
      <button className="uppercase" onClick={handleToggleMenu}>
        Menu
      </button>
      <p className="uppercase">{BRAND_NAME}</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-black' : 'bg-white'
        } relative inline-flex flex-shrink-0 items-center h-6 w-12 rounded-full cursor-pointer border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors ease-in-out duration-200`}
      >
        <span
          aria-hidden="true"
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-5 h-5 transform bg-brandRed rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 p-0.5`}
        >
          {<SiteIcon name={enabled ? MOON_ICON : SUN_ICON} />}
        </span>
      </Switch>
    </header>
  );
};

export default Header;
