import styled from 'styled-components';
import themeStyles from '../../theme/themeStyles';

const {
  textColor,
  backgroundColor,
  buttonBorderColor,
  buttonBgColor,
  buttonTextColor,
} = themeStyles;

const StyledQuitPlayerButton = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${buttonBorderColor};
  background-color: ${buttonBgColor};
  color: ${buttonTextColor};
  border-radius: 2em;
  padding: 0.625em 1.25em;
  transition: 0.3s;
  outline: 0;
  cursor: pointer;
  margin: 1em 0 3em 0;
  align-self: center;
  width: 30%;

  &:hover {
    border: 2px solid ${buttonBorderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
  }
`;

export default StyledQuitPlayerButton;
