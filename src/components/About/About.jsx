import React from 'react';

import {
  StyledAboutSection,
  StyledDescriptionContainer,
  // StyledDescriptionFigureContainer,
  // StyledDescriptionFigure,
  // StyledDescriptionFigureImage,
  StyledDescriptionTextContainer,
  StyledDescriptionParagraph,
  StyledDescriptionTextHighlight,
  StyledDescriptionSpan,
  StyledDescriptionLinkContainer,
  StyledDescriptionLink,
} from './AboutStyles';
// import MicrophoneIcon from '../../assets/icons/podcast-mic.svg';

const About = () => (
    <StyledAboutSection>
      <StyledDescriptionContainer className="row">
        {/* <StyledDescriptionFigureContainer className="column">
          <StyledDescriptionFigure>
            <StyledDescriptionFigureImage
              src={MicrophoneIcon}
              alt="podcast-mic"
            />
          </StyledDescriptionFigure>
        </StyledDescriptionFigureContainer> */}
        <StyledDescriptionTextContainer className="double-column">
          <StyledDescriptionParagraph>
            <StyledDescriptionTextHighlight>
              Dance Specific{' '}
              <StyledDescriptionSpan>Talks</StyledDescriptionSpan>
            </StyledDescriptionTextHighlight>{' '}
            is a unique podcast, with stories from dancers worldwide.
          </StyledDescriptionParagraph>
          <StyledDescriptionLinkContainer>
            <StyledDescriptionLink to="/map">Check out our stories of map</StyledDescriptionLink>
          </StyledDescriptionLinkContainer>
        </StyledDescriptionTextContainer>
      </StyledDescriptionContainer>
    </StyledAboutSection>
  );

export default About;
