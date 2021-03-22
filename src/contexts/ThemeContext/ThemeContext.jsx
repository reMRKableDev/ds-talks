import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ThemeWrapper from './ThemeWrapper';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const SiteThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState({ mode: 'light' });

  const toggle = () => {
    const mode = themeState.mode === 'light' ? `dark` : `light`;
    console.log("object");
    setThemeState({ mode });
  };

  return (
    <ThemeContext.Provider value={{ toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

SiteThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
