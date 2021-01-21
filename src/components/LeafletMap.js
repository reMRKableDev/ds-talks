import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { mapTilerProvider } from "../osm-providers";

const LeafletMap = () => {
  const mapReference = useRef();
  const CENTER = { lat: 52.377956, lng: 4.89707 };
  const ZOOM_LEVEL = 3;
  const MAX_ZOOM = 18;

  const { url, attribution } = mapTilerProvider;

  return (
    <MapContainer
      center={CENTER}
      zoom={ZOOM_LEVEL}
      maxZoom={MAX_ZOOM}
      ref={mapReference}
    >
      <TileLayer url={url} attribution={attribution} />
    </MapContainer>
  );
};

export default LeafletMap;
