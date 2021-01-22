import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import PlayIcon from "../../assets/icons/play.png";

const icon = new Icon({
  iconUrl: PlayIcon,
  iconAnchor: [17, 45],
  popupAnchor: [3, -45],
});

const MarkerIcon = () => {
  return (
    <Marker position={[52.377956, 4.89707]} icon={icon}>
      <Popup>
        <p>popup</p>
      </Popup>
    </Marker>
  );
};

export default MarkerIcon;
