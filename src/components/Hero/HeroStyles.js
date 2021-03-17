import styled from 'styled-components';
import respondToDeviceWidth from '../../utils/mediaQueries';

export const StyledHeroSection = styled.section`
  margin-bottom: 1em;
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

  ${respondToDeviceWidth.sm`
  margin-bottom: 2em;
`}
`;

export const StyledFigure = styled.figure`
  width: 100vw;
`;

export const StyledImage = styled.img`
  width: 100%;
`;
