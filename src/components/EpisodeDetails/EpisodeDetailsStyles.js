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
`;

export const StyledDetailsSection = styled.section`
  padding: 10px;
  text-align: center;

  ${mdSectionStyles}
`;

export const StyledDetailsHeading = styled.h1`
  text-align: center;
  text-decoration: underline;
  transition: text-decoration 1s;
`;

export const StyledDetailsContainer = styled.div`
  margin-top: 2em;
  align-items: center;
`;

export const StyledDetailsTextContainer = styled.div`
  height: 300px;
  align-self: center;
  overflow-y: scroll;
  padding: 2em;
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
  width: 30%;
  padding: 0.625em 1.25em;
  transition: 0.3s;
  outline: 0;
  cursor: pointer;

  &:hover {
    border: 2px solid ${buttonBorderColor};
    background-color: ${backgroundColor};
    color: ${textColor};
  }
`;
