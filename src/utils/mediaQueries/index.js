import { css } from 'styled-components';
import breakpointsData from '../../data/breakpointsData';

const respondToDeviceWidth = Object.keys(breakpointsData).reduce(
  (acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpointsData[label]}) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);

export default respondToDeviceWidth;
