import React from 'react';
import './Map.css';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import StyledSection from './MapStyles';

import Layer from '../Layer/Layer';
import MarkerIcon from '../MarkerIcon/MarkerIcon';

const Map = () => {
  const CENTER = { lat: 52.377956, lng: 4.89707 };
  const ZOOM_LEVEL = 2;
  const MAX_ZOOM = 18;
  const MIN_ZOOM = 2;

  return (
    <StyledSection>
      <MapContainer
        center={CENTER}
        zoom={ZOOM_LEVEL}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        scrollWheelZoom={false}
        worldCopyJump
      >
        <Layer />
        <MarkerIcon />
      </MapContainer>
    </StyledSection>
  );
};

export default Map;
