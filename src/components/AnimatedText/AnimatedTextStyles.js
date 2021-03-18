import styled, { keyframes } from 'styled-components';
import themeStyles from '../../theme/themeStyles';
import respondToDeviceWidth from '../../utils/mediaQueries';

const { backgroundColor } = themeStyles;

const mdSectionStyles = respondToDeviceWidth.md`
height: 25vh;
`;

const flashingText = keyframes`
    25%,
    75% { opacity: 0; }
    50% { opacity: 0.8; }
    100% { opacity: 1; }
`;

export const StyledSection = styled.section`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${backgroundColor};
  text-align: center;
  padding: 1em;

  ${mdSectionStyles}
`;

const smHeadingStyles = respondToDeviceWidth.sm`
font-size: 2em;
`;

const mdHeadingStyles = respondToDeviceWidth.md`
font-size: 4em;
`;

export const StyledH2 = styled.h2`
  font-size: 1.8em;
  text-transform: uppercase;
  animation: ${flashingText} 5s linear infinite;

  ${smHeadingStyles}

  ${mdHeadingStyles}
`;
