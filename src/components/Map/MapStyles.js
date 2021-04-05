import styled from 'styled-components';
import respondToDeviceWidth from '../../utils/mediaQueries';

const mdSectionStyles = respondToDeviceWidth.md`
padding: 50px;
`;

export default styled.section`
  padding: 10px;

  ${mdSectionStyles}
`;
