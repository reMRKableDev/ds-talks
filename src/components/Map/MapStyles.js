import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import respondToDeviceWidth from '../../utils/mediaQueries';

const mdSectionStyles = respondToDeviceWidth.md`
padding: 50px;
`;

export const StyledSection = styled.section`
  padding: 10px;

  ${mdSectionStyles}
`;

export const StyledMapContainer = styled(MapContainer)`
  margin-top: 5em;
  height: 80vh;
`;
