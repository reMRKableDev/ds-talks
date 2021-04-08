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

const mdSectionStyles = respondToDeviceWidth.md`
padding: 100px;
height: 100vh;

`;

const smButtonStyles = respondToDeviceWidth.sm`
width: 30%;
`;

export const StyledDetailsSection = styled.section`
  padding: 10px;
  text-align: center;
  background-color: pink;

  ${mdSectionStyles};
`;

export const StyledDetailsHeading = styled.h1`
  margin-top: 2em;
  text-align: center;
  text-decoration: underline;
  transition: text-decoration 1s;
`;

export const StyledDetailsContainer = styled.div`
  margin-top: 2em;
  align-items: center;
`;

export const StyledDetailsTextContainer = styled.div`
  align-self: center;
  overflow-y: scroll;
  padding: 1em;
`;

export const StyledDetailsDescription = styled.p`
  text-align center;
  line-height: 1.8em;
`;

export const StyledDescriptionButton = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${buttonBorderColor};
  background-color: ${buttonBgColor};
  color: ${buttonTextColor};
  border-radius: 2em;
  width: 50%;
  padding: 0.625em 1.25em;
  transition: 0.3s;
  outline: 0;
  cursor: pointer;
  margin: 1em 0 3em 0;

  &:hover {
    border: 2px solid ${buttonBorderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
  }

  ${smButtonStyles}
`;
