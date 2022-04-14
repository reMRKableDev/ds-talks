import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { BRAND_NAME } from 'lib/constants';
import {
  menuHeaderIcon,
  menuHeaderTitle,
  menuHeaderWrapper,
} from './menuHeaderStyles';

const MenuHeader = ({ handleToggleMenu }) => (
  <div className={menuHeaderWrapper}>
    <Dialog.Title className={menuHeaderTitle}>{BRAND_NAME}</Dialog.Title>
    <button type="button" onClick={handleToggleMenu}>
      <span className="sr-only">Close panel</span>
      <XIcon className={menuHeaderIcon} aria-hidden="true" />
    </button>
  </div>
);

export default MenuHeader;
