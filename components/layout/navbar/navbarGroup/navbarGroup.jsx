import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import {
  transitionEnter,
  transitionLeave,
  transitionEnterTo,
  navbarGroupWrapper,
  transitionLeaveTo,
  transitionEnterFrom,
  transitionLeaveFrom,
} from './navbarGroupStyles';

const NavbarGroup = ({ children }) => (
  <div className={navbarGroupWrapper}>
    <Transition.Child
      as={Fragment}
      enter={transitionEnter}
      enterFrom={transitionEnterFrom}
      enterTo={transitionEnterTo}
      leave={transitionLeave}
      leaveFrom={transitionLeaveFrom}
      leaveTo={transitionLeaveTo}
    >
      {children}
    </Transition.Child>
  </div>
);

export default NavbarGroup;
