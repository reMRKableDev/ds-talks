import React from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layer from '../Layer/Layer';
import MarkerIcon from '../MarkerIcon/MarkerIcon';

const Map = () => {
  const CENTER = { lat: 52.377956, lng: 4.89707 };
  const ZOOM_LEVEL = 3;
  const MAX_ZOOM = 10;

  return (
    <section className="main-container">
      <MapContainer center={CENTER} zoom={ZOOM_LEVEL} maxZoom={MAX_ZOOM}>
        <Layer />
        <MarkerIcon />
      </MapContainer>
    </section>
  );
};

export default Map;
