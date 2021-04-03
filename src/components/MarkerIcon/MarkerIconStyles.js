import styled from 'styled-components';

import themeStyles from '../../theme/themeStyles';
import respondToDeviceWidth from '../../utils/mediaQueries';

const {
  backgroundColor,
  buttonBgColor,
  buttonBorderColor,
  buttonTextColor,
  textColor,
} = themeStyles;

const mdButtonContainerStyles = respondToDeviceWidth.md`
flex-direction: row;
`;

export const StyledPopupText = styled.p`
  font-size: 1.5em;
`;

export const StyledPopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${mdButtonContainerStyles}
`;

export const StyledPopupButton = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${buttonBorderColor};
  background-color: ${buttonBgColor};
  color: ${buttonTextColor};
  border-radius: 2em;
  width: 30%;
  padding: 0.625em 1.25em;
  transition: 0.3s;
  margin-bottom: 0.2em;
  outline: none;

  &:hover {
    border: 2px solid ${buttonBorderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
  }
`;
