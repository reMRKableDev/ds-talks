import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import {
  StyledDetailsFigure,
  StyledDetailsSection,
  StyledDetailsHeading,
  StyledDetailsContainer,
  StyledDetailsFigureImage,
  StyledDetailsDescription,
  StyledDetailsTextContainer,
  StyledDetailsFigureContainer,
} from './EpisodeDetailsStyles';

import removeAnyHTMLTagsFromString from './helpers';

const EpisodeDetails = () => {
  const { episodeDetails, closeEpisodeDetails } = useContext(
    PodcastEpisodesContext
  );

  const { artist, description, artwork_url: episodeArtwork } = episodeDetails;

  return (
    <>
      <StyledDetailsSection>
        <StyledDetailsHeading>Guest: {artist}</StyledDetailsHeading>
        <StyledDetailsContainer className="row">
          <StyledDetailsFigureContainer className="column">
            <StyledDetailsFigure>
              <StyledDetailsFigureImage
                src={episodeArtwork}
                alt="episode-artwork"
              />
            </StyledDetailsFigure>
          </StyledDetailsFigureContainer>
          <StyledDetailsTextContainer className="column">
            <StyledDetailsDescription>
              {removeAnyHTMLTagsFromString(description)}
            </StyledDetailsDescription>
          </StyledDetailsTextContainer>
        </StyledDetailsContainer>

        <button type="button" onClick={() => closeEpisodeDetails()}>
          Close details
        </button>
      </StyledDetailsSection>
    </>
  );
};

export default EpisodeDetails;
