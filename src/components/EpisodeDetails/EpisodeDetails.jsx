import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import {
  StyledDetailsSection,
  StyledDetailsHeading,
  StyledDetailsContainer,
  StyledDescriptionButton,
  StyledDetailsDescription,
  StyledDetailsTextContainer,
} from './EpisodeDetailsStyles';

import removeAnyHTMLTagsFromString from './helpers';

const EpisodeDetails = () => {
  const { episodeDetails, closeEpisodeDetails } = useContext(
    PodcastEpisodesContext
  );

  const { artist, description } = episodeDetails;

  return (
    <>
      <StyledDetailsSection>
        <StyledDetailsHeading>Guest: {artist}</StyledDetailsHeading>
        <StyledDetailsContainer className="row">
          <StyledDetailsTextContainer className="column">
            <StyledDetailsDescription>
              {removeAnyHTMLTagsFromString(description)}
            </StyledDetailsDescription>
          </StyledDetailsTextContainer>
        </StyledDetailsContainer>

        <StyledDescriptionButton
          type="button"
          onClick={() => closeEpisodeDetails()}
        >
          Close details
        </StyledDescriptionButton>
      </StyledDetailsSection>
    </>
  );
};

export default EpisodeDetails;
