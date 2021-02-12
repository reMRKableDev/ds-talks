import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import leafletIcon from './LeafletIcon/LeafletIcon';

const MarkerIcon = ({ episodesList }) =>
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
  ));

export default MarkerIcon;
