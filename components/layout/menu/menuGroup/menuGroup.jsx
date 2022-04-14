import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import {
  transitionEnter,
  transitionLeave,
  transitionEnterTo,
  menuGroupWrapper,
  transitionLeaveTo,
  transitionEnterFrom,
  transitionLeaveFrom,
} from './menuGroupStyles';

const NavbarGroup = ({ children }) => (
  <div className={menuGroupWrapper}>
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
