import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MenuOverflow from './menuOverflow';
import MenuGroup from './menuGroup';
import MenuMain from './menuMain';
import MenuHeader from './menuHeader';
import {
  menuOverflowWrapper,
  menuContainer,
  menuWrapper,
  menuOverflowContainer,
} from './menuStyles';

const Menu = ({ showMenu, handleToggleMenu }) => (
  <Transition.Root show={showMenu} as={Fragment}>
    <Dialog
      as="div"
      className={menuOverflowContainer}
      onClose={handleToggleMenu}
    >
      <div className={menuOverflowWrapper}>
        <MenuOverflow />
        <MenuGroup>
          <div className={menuContainer}>
            <div className={menuWrapper}>
              <MenuHeader handleToggleMenu={handleToggleMenu} />
              <MenuMain />
            </div>
          </div>
        </MenuGroup>
      </div>
    </Dialog>
  </Transition.Root>
);
export default Menu;
