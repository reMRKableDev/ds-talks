import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { XIcon } from '@heroicons/react/outline';
import { useUI } from 'hooks';
import Button from 'components/shared/ui/button';
import {
  menuCloseIcon,
  menuContainer,
  menuHeaderItems,
  menuHeaderWrapper,
  menuOverlayContainer,
} from './menuStyles';

const Menu = () => {
  const { displayMenu, handleCloseMenu } = useUI();

  const [menuAnimationStyle, animateMenu] = useSpring(() => ({
    transform: 'translateX(100%)',
  }));
  const [overlayStyle, animateOverlay] = useSpring(() => ({
    opacity: 0,
    visibility: 'hidden',
  }));

  const localScopedCloseMenuHandler = () => handleCloseMenu();

  useEffect(() => {
    animateMenu({
      transform: `translateX(${displayMenu ? '0%' : '100%'})`,
    });

    animateOverlay({
      opacity: displayMenu ? 0.3 : 0,
      visibility: 'visible',
      onRest: () => {
        animateOverlay({
          immediate: true,
          visibility: displayMenu ? 'visible' : 'hidden',
        });
      },
    });
  });

  return (
    <>
      <animated.button
        type="button"
        style={overlayStyle}
        onClick={localScopedCloseMenuHandler}
        className={menuOverlayContainer}
      />
      <animated.div style={menuAnimationStyle} className={menuContainer}>
        <div className={menuHeaderWrapper}>
          <Button
            className={menuHeaderItems}
            onClick={localScopedCloseMenuHandler}
          >
            <XIcon className={menuCloseIcon} />
          </Button>
        </div>
        <div>MENU</div>
      </animated.div>
    </>
  );
};
export default Menu;
