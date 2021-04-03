import styled from 'styled-components';
import { Link } from '@reach/router';
import themeStyles from '../../theme/themeStyles';

import respondToDeviceWidth from '../../utils/mediaQueries';

const smParagraphStyles = respondToDeviceWidth.sm`
font-size: 2em;
`;

const lgParagraphStyles = respondToDeviceWidth.lg`
font-size: 2.5em;
`;

const {
  backgroundColor,
  brandPrimaryColor,
  brandSecondaryColor,
  buttonBgColor,
  buttonBorderColor,
  buttonTextColor,
  textColor,
} = themeStyles;

export const StyledAboutSection = styled.section`
  background-color: ${backgroundColor};
`;

export const StyledDescriptionContainer = styled.div`
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  margin: 0 1em;
  border: 5px solid ${textColor};
  padding: 0.5em;
`;

export const StyledDescriptionFigureContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const StyledDescriptionFigure = styled.figure`
  width: 50px;
  height: 50px;
  background-color: ${brandPrimaryColor};
  border: 2px solid ${brandSecondaryColor};
  border-radius: 50%;
  padding: 2em;
`;

export const StyledDescriptionFigureImage = styled.img`
  width: 100%;
`;

export const StyledDescriptionTextContainer = styled.div`
  text-align: center;
`;

export const StyledDescriptionParagraph = styled.p`
  font-size: 1.2em;
  text-transform: capitalize;
  padding: 1em;

  ${smParagraphStyles}

  ${lgParagraphStyles}
`;

export const StyledDescriptionTextHighlight = styled.mark`
  color: ${buttonTextColor};
  border-radius: 0.8em 0.3em;
  background: linear-gradient(
    to right,
    rgba(252, 128, 45, 1),
    rgba(253, 38, 71, 1)
  );
  box-decoration-break: clone;
  margin: 0 -0.2em;
  padding: 0.1em 0.4em;
`;

export const StyledDescriptionSpan = styled.span`
  text-transform: uppercase;
  font-weight: 900;
`;

export const StyledDescriptionLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledDescriptionLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid ${buttonBorderColor};
  background-color: ${buttonBgColor};
  color: ${buttonTextColor};
  border-radius: 2em;
  width: 30%;
  padding: 0.625em 1.25em;
  transition: 0.3s;
  outline: none;

  &:hover {
    border: 2px solid ${buttonBorderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
  }
`;
