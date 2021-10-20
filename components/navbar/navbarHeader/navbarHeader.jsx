import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { BRAND_NAME } from '../../../lib/constants';
import {
  navbarHeaderIcon,
  navbarHeaderTitle,
  navbarHeaderWrapper,
} from './navbarHeaderStyles';

const NavbarHeader = ({ handleToggleMenu }) => (
  <div className={navbarHeaderWrapper}>
    <Dialog.Title className={navbarHeaderTitle}>{BRAND_NAME}</Dialog.Title>
    <button type="button" onClick={handleToggleMenu}>
      <span className="sr-only">Close panel</span>
      <XIcon className={navbarHeaderIcon} aria-hidden="true" />
    </button>
  </div>
);

export default NavbarHeader;
