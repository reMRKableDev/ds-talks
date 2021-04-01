import styled from 'styled-components';
import themeStyles from '../../theme/themeStyles';
import respondToDeviceWidth from '../../utils/mediaQueries';

const {
  linearGradientColorEnd,
  linearGradientColorStart,
  linearGradientColorMiddle,
} = themeStyles;

const smStyles = respondToDeviceWidth.sm`
margin-bottom: 2em;
`;

export const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    145deg,
    ${linearGradientColorStart} 0%,
    ${linearGradientColorMiddle} 75%,
    ${linearGradientColorEnd} 100%
  );

  ${smStyles}
`;

export const StyledFigure = styled.figure`
  width: 100vw;
`;

export const StyledImage = styled.img`
  width: 100%;
`;
