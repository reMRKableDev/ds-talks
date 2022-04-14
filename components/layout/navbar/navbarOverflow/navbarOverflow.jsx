import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  dialogOverlay,
  transitionEnter,
  transitionEnterTo,
  transitionEnterFrom,
  transitionLeaveTo,
  transitionLeaveFrom,
  transitionLeave,
} from './navbarOverflowStyles';

const NavbarOverflow = () => (
  <Transition.Child
    as={Fragment}
    enter={transitionEnter}
    enterFrom={transitionEnterFrom}
    enterTo={transitionEnterTo}
    leave={transitionLeave}
    leaveFrom={transitionLeaveFrom}
    leaveTo={transitionLeaveTo}
  >
    <Dialog.Overlay className={dialogOverlay} />
  </Transition.Child>
);

export default NavbarOverflow;
