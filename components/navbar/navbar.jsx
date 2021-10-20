import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import SiteLink from '../shared/siteLink';
import SiteIcon from '../shared/siteIcon';

const Navbar = ({ handleToggleMenu }) => {
  return (
    <aside>
      <nav>
        <button type="button" onClick={handleToggleMenu}>
          <XIcon className="block h-8 w-8 text-black dark:text-white" />
        </button>
        <div>
          <SiteLink linkTo="/" value="Home" />
          <SiteLink linkTo="/map" value="Map" />
        </div>

        <div>
          <p>Follow on Social Media</p>
        </div>
      </nav>
    </aside>
  );
};
export default Navbar;
