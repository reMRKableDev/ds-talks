import React, { useContext } from 'react';

import Map from '../components/Map/Map';
import Player from '../components/Player/Player';

import { PodcastEpisodesContext } from '../contexts/PodcastEpisodesContext';

const MapPage = () => {
  const { audioPlayerVisibility } = useContext(PodcastEpisodesContext);

  return (
    <>
      <Map />
      {audioPlayerVisibility && <Player />}
    </>
  );
};

export default MapPage;
