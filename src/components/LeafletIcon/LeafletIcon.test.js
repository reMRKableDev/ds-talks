import { Icon } from 'leaflet';
import leafletIcon from './LeafletIcon';
import validators from '../../utils/test-validators';

const {
  validateInstanceOf,
  validateNotEmptyData,
  validateStringMatches,
  validateArrayContaining,
} = validators;

describe('Leaflet Icon Test Suite', () => {
  test('should validate incoming icon', () => {
    validateNotEmptyData(leafletIcon);
    validateInstanceOf(leafletIcon, Icon);
  });

  test('should validate options data in leafletIcon', () => {
    const { options } = leafletIcon;

    validateNotEmptyData(options);

    const { iconUrl, iconAnchor, popupAnchor } = options;

    validateStringMatches(iconUrl, 'play.png');

    validateInstanceOf(iconAnchor, Array);
    validateArrayContaining(iconAnchor, [17, 45]);

    validateInstanceOf(popupAnchor, Array);
    validateArrayContaining(popupAnchor, [3, -45]);
  });
});
