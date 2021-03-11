import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext';

import helperFunctions from '../../helpers';

const { removeAnyHTMLTagsFromString } = helperFunctions;

const EpisodeDetails = () => {
  const { episodeDetails, closeEpisodeDetails } = useContext(
    PodcastEpisodesContext
  );

  const { artist, description, artwork_url: episodeArtwork } = episodeDetails;

  return (
    <>
      <div
        style={{
          border: '2px solid #000',
          padding: '5px',
        }}
      >
        <h1>Guest: {artist}</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <figure style={{ width: '500px', height: 'auto' }}>
            <img
              style={{ width: '100%' }}
              src={episodeArtwork}
              alt="episode-artwork"
            />
          </figure>
          <p>{removeAnyHTMLTagsFromString(description)}</p>
        </div>

        <button type="button" onClick={() => closeEpisodeDetails()}>
          Close details{' '}
        </button>
      </div>
    </>
  );
};

export default EpisodeDetails;
