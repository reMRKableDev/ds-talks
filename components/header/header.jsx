import { useState } from 'react';
import { Switch } from '@headlessui/react';

import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ handleToggleMenu }) => {
  const [enabled, setEnabled] = useState(false);
  // const [dark, setDark] = useDarkMode();

  return (
    <header className="flex justify-between p-4 md:p-6 bg-brandRed text-white sticky top-0">
      <button className="uppercase" onClick={handleToggleMenu}>
        Menu
      </button>
      <p className="uppercase">Dance Specific Talks</p>
      <button>Toggle</button>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-black' : 'bg-black'}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </header>
  );
};

export default Header;
