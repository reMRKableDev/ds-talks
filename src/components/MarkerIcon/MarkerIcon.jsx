import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import PlayIcon from '../../assets/icons/play.png';

const icon = new Icon({
  iconUrl: PlayIcon,
  iconAnchor: [17, 45],
  popupAnchor: [3, -45],
});

const MarkerIcon = ({ episodesList }) =>
  episodesList.map((episodeItem) => (
    <Marker
      data-testid="episode-title"
      position={episodeItem.coordinates}
      icon={icon}
      key={episodeItem.id}
    >
      <Popup>
        <p>{episodeItem.title}</p>
      </Popup>
    </Marker>
  ));

export default MarkerIcon;
