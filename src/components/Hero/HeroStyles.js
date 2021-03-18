import styled from 'styled-components';
import respondToDeviceWidth from '../../utils/mediaQueries';

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
    rgba(253, 38, 71, 1) 0%,
    rgba(252, 128, 45, 1) 75%,
    rgba(250, 167, 43, 1) 100%
  );

  ${smStyles}
`;

export const StyledFigure = styled.figure`
  width: 100vw;
`;

export const StyledImage = styled.img`
  width: 100%;
`;
