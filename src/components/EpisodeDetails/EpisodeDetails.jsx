import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext';

const EpisodeDetails = () => {
  const { episodeDetails, closeEpisodeDetails } = useContext(
    PodcastEpisodesContext
  );

  const { artist, description } = episodeDetails;

  const strippedDescription = () => description.replace(/(<([^>]+)>)/gi, '');

  return (
    <>
      <div>
        <h1>Guest: {artist}</h1>
        {strippedDescription()}
      </div>

      <button type="button" onClick={() => closeEpisodeDetails()}>
        Close details{' '}
      </button>
    </>
  );
};

export default EpisodeDetails;
