import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext';
import leafletIcon from './LeafletIcon/LeafletIcon';

const MarkerIcon = () => {
  const { episodesList } = useContext(PodcastEpisodesContext);

  return (
    episodesList &&
    episodesList.map((episodeItem) => (
      <Marker
        data-testid="episode-title"
        position={episodeItem.coordinates}
        icon={leafletIcon}
        key={episodeItem.id}
      >
        <Popup>
          <p>{episodeItem.title}</p>
        </Popup>
      </Marker>
    ))
  );
};

export default MarkerIcon;
