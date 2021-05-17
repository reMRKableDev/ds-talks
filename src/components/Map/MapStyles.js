import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import respondToDeviceWidth from '../../utils/mediaQueries';

const mdSectionStyles = respondToDeviceWidth.md`
padding: 100px;

`;

const mdMapContainerStyles = respondToDeviceWidth.md`
margin-top: 1em;
height: 100vh;
`;

export const StyledSection = styled.section`
  padding: 15px;

  ${mdSectionStyles};
`;

export const StyledMapContainer = styled(MapContainer)`
  margin-top: 5em;
  border: 2px solid #000;
  height: 92vh;

  ${mdMapContainerStyles};
`;
