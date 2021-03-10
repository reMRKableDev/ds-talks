import { Icon } from 'leaflet';

import PlayIcon from '../../../assets/icons/play.png';

const leafletIcon = new Icon({
  iconUrl: PlayIcon,
  iconAnchor: [17, 45],
  popupAnchor: [3, -45],
});

export default leafletIcon;
