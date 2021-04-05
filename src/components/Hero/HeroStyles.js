import styled from 'styled-components';
import themeStyles from '../../theme/themeStyles';
import respondToDeviceWidth from '../../utils/mediaQueries';

const {
  heroBannerColor,
  linearGradientColorEnd,
  linearGradientColorStart,
  linearGradientColorMiddle,
} = themeStyles;

const smStyles = respondToDeviceWidth.sm`
margin-bottom: 2em;
`;

const lgStyles = respondToDeviceWidth.lg`
height: 100vh;
`;

export const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    145deg,
    ${linearGradientColorStart} 0%,
    ${linearGradientColorMiddle} 75%,
    ${linearGradientColorEnd} 100%
  );

  ${smStyles}

  ${lgStyles}
`;

export const StyledFigure = styled.figure`
  width: 100vw;
`;

export const StyledImage = styled.img`
  width: 100%;
  -webkit-filter: ${heroBannerColor};
  filter: ${heroBannerColor};
`;
