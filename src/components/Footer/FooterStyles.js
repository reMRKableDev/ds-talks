import styled from 'styled-components';
import themeStyles from '../../theme/themeStyles';
import respondToDeviceWidth from '../../utils/mediaQueries';

const {
  textColor,
  backgroundColor,
  linearGradientColorEnd,
  linearGradientColorStart,
  linearGradientColorMiddle,
} = themeStyles;

const smStyleHeading = respondToDeviceWidth.sm`
font-size: 5.5vw;
margin: 0.8em 0;

span {
    border: 6px solid #fff;
}
`;

const mdStyleHeading = respondToDeviceWidth.md`
font-size: 5vw;
margin: 0.6em 0;

span {
    border: 8px solid #fff;
}
`;

const lgStyleHeading = respondToDeviceWidth.lg`
font-size: 4.5vw;
margin: 0.5em 0;

span {
    border: 10px solid #fff;
}
`;

export const StyledFooter = styled.footer`
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    145deg,
    ${linearGradientColorStart} 0%,
    ${linearGradientColorMiddle} 75%,
    ${linearGradientColorEnd} 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
`;

export const StyledH2 = styled.h2`
  font-size: 6vw;
  margin: 1em 0;
  text-transform: uppercase;
  span {
    color: #fff;
    border: 4px solid ${!backgroundColor};
    box-shadow: 0 0 10px ${!backgroundColor};
    padding: 5px;
    text-transform: none;
  }

  ${smStyleHeading}

  ${mdStyleHeading}
  
  ${lgStyleHeading}
`;

export const StyledFooterPhrase = styled.p`
  color: ${textColor};
  margin-bottom: 25px;
`;

export const StyledFooterDeveloperTag = styled.p`
  color: ${textColor};
  margin-bottom: 1em;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;
