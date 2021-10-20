import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import NavbarOverflow from './navbarOverflow';
import NavbarGroup from './navbarGroup';
import NavbarMain from './navbarMain';
import NavbarHeader from './navbarHeader';
import {
  navbarOverflowWrapper,
  navbarContainer,
  navbarWrapper,
  navbarOverflowContainer,
} from './navbarStyles';

const Navbar = ({ showMenu, handleToggleMenu }) => (
  <Transition.Root show={showMenu} as={Fragment}>
    <Dialog
      as="div"
      className={navbarOverflowContainer}
      onClose={handleToggleMenu}
    >
      <div className={navbarOverflowWrapper}>
        <NavbarOverflow />
        <NavbarGroup>
          <div className={navbarContainer}>
            <div className={navbarWrapper}>
              <NavbarHeader handleToggleMenu={handleToggleMenu} />
              <NavbarMain />
            </div>
          </div>
        </NavbarGroup>
      </div>
    </Dialog>
  </Transition.Root>
);
export default Navbar;
