import styled from 'styled-components';

import themeStyles from '../../theme/themeStyles';

const { buttonBgColor, backgroundColor, buttonTextColor } = themeStyles;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  width: 100%;
`;

export const StyledThemeButtonContainer = styled.div`
  padding: 0.625em;
`;

export const StyledThemeButton = styled.button`
  background-color: ${buttonBgColor};
  border: 1px solid ${backgroundColor};
  border-radius: 1em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  color: ${buttonTextColor};
  cursor: pointer;
  font-size: 0.8em;
  padding: 0.5em 1em;
  outline: none;
`;
