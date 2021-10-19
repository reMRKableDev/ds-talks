import { useEffect, useState } from 'react';
import { DARK } from '../lib/constants';

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(undefined);

  useEffect(() => {
    setEnabled(document.documentElement.classList.contains(DARK));
  }, []);

  useEffect(() => {
    const rootElement = window.document.documentElement.classList;

    if (enabled) {
      rootElement.add(DARK);
      localStorage.setItem('isDarkMode', 'true');
    } else {
      rootElement.remove(DARK);
      localStorage.setItem('isDarkMode', 'false');
    }
  }, [enabled]);

  return [enabled, setEnabled];
}
