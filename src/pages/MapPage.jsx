import React, { useContext } from 'react';

import Map from '../components/Map/Map';
import Player from '../components/Player/Player';
import EpisodeDetails from '../components/EpisodeDetails/EpisodeDetails';

import { PodcastEpisodesContext } from '../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import isEmptyObject from './helpers';

const MapPage = () => {
  const { episodeDetails, audioPlayerVisibility } = useContext(
    PodcastEpisodesContext
  );

  return (
    <>
      {!isEmptyObject(episodeDetails) && <EpisodeDetails />}
      <Map />
      {audioPlayerVisibility && <Player />}
    </>
  );
};

export default MapPage;
