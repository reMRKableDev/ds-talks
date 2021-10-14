import { useEffect, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../lib/constants';

export default function useDarkMode() {
  const [theme, setTheme] = useState(DARK_THEME);
  const currentColorTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

  useEffect(() => {
    const rootElement = window.document.documentElement;
    rootElement.classList.add(theme);
  }, [theme]);

  return [currentColorTheme, setTheme];
}
