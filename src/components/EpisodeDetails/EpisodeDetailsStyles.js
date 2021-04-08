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

const smSectionStyles = respondToDeviceWidth.sm`
height: 100vh;
`;

const smButtonStyles = respondToDeviceWidth.sm`
width: auto;
`;

export const StyledDetailsSection = styled.section`
  padding: 1.5em;
  text-align: center;
  background-color: ${backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 100%;

  ${smSectionStyles};
`;

export const StyledDetailsHeading = styled.h1`
  padding-top: 1.5em;
  text-align: center;
  text-decoration: underline;
  transition: text-decoration 1s;
`;

export const StyledDetailsContainer = styled.div`
  margin-top: 1.25em;
  align-items: center;
`;

const smTextContainerStyles = respondToDeviceWidth.sm`
width: 100%;
`;

export const StyledDetailsTextContainer = styled.div`
  height: auto;
  width: 320px;
  align-self: center;
  overflow-y: scroll;
  overflow-x: scroll;

  ${smTextContainerStyles}
`;

export const StyledDetailsText = styled.p`
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
