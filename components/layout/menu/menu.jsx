import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useUI } from 'hooks';
import Button from 'components/shared/ui/button';

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
        className={`fixed top-0 left-0 z-20 h-screen w-full bg-[#041C2C] h-screen-ios md:z-40`}
      />
      <animated.div
        style={menuAnimationStyle}
        className={`fixed top-0 right-0 z-30 flex h-screen w-full flex-col bg-white text-black dark:bg-black dark:text-white h-screen-ios md:z-50 md:w-[645px] `}
      >
        <div className={`flex justify-end p-4 md:p-6`}>
          <Button
            className={`uppercase select-none md:text-lg text-black dark:text-white self-center`}
            onClick={localScopedCloseMenuHandler}
          >
            <XMarkIcon
              className={`block h-4 w-4 md:h-8 md:w-8 text-black dark:text-white`}
            />
          </Button>
        </div>
        <div>MENU</div>
      </animated.div>
    </>
  );
};
export default Menu;
