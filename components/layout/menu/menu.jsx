import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useUI } from 'hooks';
import {
  menuOverflowWrapper,
  menuContainer,
  menuWrapper,
  menuOverflowContainer,
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
        onClick={() => handleCloseMenu()}
        className="fixed top-0 left-0 z-20 h-screen w-full bg-[#041C2C] h-screen-ios md:z-40"
      />
      <animated.div
        style={menuAnimationStyle}
        className="fixed top-0 right-0 z-30 flex h-screen w-full flex-col bg-white text-black h-screen-ios md:z-50 md:w-[645px]"
      >
        MENU
      </animated.div>
    </>
  );
};
export default Menu;
