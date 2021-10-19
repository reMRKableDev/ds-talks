import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import SiteLink from '../shared/siteLink';

const Navbar = ({ handleToggleMenu }) => (
  <aside>
    <nav>
      <button type="button" onClick={handleToggleMenu}>
        Close
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

export default Navbar;
