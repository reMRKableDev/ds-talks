import { useEffect, useState } from 'react';
import { DARK, LIGHT } from '../lib/constants';

export default function useDarkMode() {
  const [dark, setDark] = useState(false);

  // TODO: Fix the dark mode rendering
  useEffect(() => {
    const rootElement = window.document.documentElement;

    if (dark || localStorage.isDarkMode) {
      /* console.log('here 3');
      setDark(localStorage.isDarkMode);
      rootElement.classList.add(DARK);
      return; */
      rootElement.classList.add(DARK);
      localStorage.setItem('isDarkMode', dark);

      /* if (dark) {
        rootElement.classList.add(DARK);
        localStorage.setItem('isDarkMode', dark);
      } else {
        console.log('here');
        rootElement.classList.remove(DARK);
        localStorage.removeItem('isDarkMode');
      } */
    } else {
      rootElement.classList.remove(DARK);
      localStorage.removeItem('isDarkMode');
    }
    /* if (!localStorage.theme) {
      localStorage.setItem('theme', LIGHT);
      setDark(localStorage.theme);
    } else {
      console.log('post refresh', localStorage.theme);
      rootElement.classList.remove(localStorage.theme);
      rootElement.classList.add(localStorage.theme);
      // localStorage.setItem('theme', theme);

      // setTheme(localStorage.theme);
    } */
  }, [dark]);

  return [dark, setDark];
}
