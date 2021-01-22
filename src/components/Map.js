import React, { useRef } from "react";
import { MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Layer from "./Layer";
import MarkerIcon from "./MarkerIcon";

const Map = () => {
  const mapReference = useRef();
  const CENTER = { lat: 52.377956, lng: 4.89707 };
  const ZOOM_LEVEL = 3;
  const MAX_ZOOM = 18;

  return (
    <MapContainer
      center={CENTER}
      zoom={ZOOM_LEVEL}
      maxZoom={MAX_ZOOM}
      ref={mapReference}
    >
      <Layer />
      <MarkerIcon />
    </MapContainer>
  );
};

export default Map;
