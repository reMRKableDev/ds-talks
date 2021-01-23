import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';

import App from './App';

import {
  validateNotEmptyData,
  validateStringMatches,
  validateElementContainsDescendant,
} from './utils/test-validators';

const renderComponentWithRouter = (
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history,
  };
};

describe('App.js Test Suite', () => {
  test('should validate full rendering/navigating of app', async () => {
    const {
      container,
      history: { navigate },
    } = renderComponentWithRouter(<App />);

    const appContainer = container;

    validateNotEmptyData(appContainer);

    const navigationBar = screen.getByTestId('navigation-bar');
    const homeLink = screen.getByTestId('home-link');
    const mapLink = screen.getByTestId('map-link');

    validateElementContainsDescendant(navigationBar, homeLink);
    validateElementContainsDescendant(navigationBar, mapLink);

    const { innerHTML } = appContainer;

    validateStringMatches(innerHTML, 'Welcome! Check out the map');

    await navigate('/map');
  });
});
