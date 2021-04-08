/* eslint-disable no-console */
import React from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css';

import { StyledSection, StyledMapContainer } from './MapStyles';

import Layer from '../Layer/Layer';
import MarkerIcon from '../MarkerIcon/MarkerIcon';

const Map = () => {
  const CENTER = { lat: 40.866667, lng: 34.566667 };
  const ZOOM_LEVEL = 2;
  const MAX_ZOOM = 18;
  const MIN_ZOOM = 2;

  return (
    <StyledSection>
      <StyledMapContainer
        center={CENTER}
        zoom={ZOOM_LEVEL}
        maxZoom={MAX_ZOOM}
        minZoom={MIN_ZOOM}
        scrollWheelZoom={false}
        worldCopyJump
        fixBounds
      >
        <Layer />
        <MarkerIcon />
      </StyledMapContainer>
    </StyledSection>
  );
};

export default Map;
