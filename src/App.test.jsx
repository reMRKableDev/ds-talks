import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';

import App from './App';
import validators from './utils/test-validators';

const {
  validateNotEmptyData,
  validateStringMatches,
  validateElementContainsDescendant,
} = validators;

const renderComponentWithRouter = (
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) => ({
  ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
  history,
});

describe('App.js Test Suite', () => {
  test('should validate full rendering/navigating of app', async () => {
    const {
      container,
      history: { navigate },
    } = renderComponentWithRouter(<App />);

    expect(1).toBe(1)

    const appContainer = container;

    validateNotEmptyData(appContainer);

    const navigationBar = screen.getByTestId('navigation-bar');
    const homeLink = screen.getByTestId('home-link');
    const mapLink = screen.getByTestId('map-link');

    validateElementContainsDescendant(navigationBar, homeLink);
    validateElementContainsDescendant(navigationBar, mapLink);

    validateStringMatches(appContainer.innerHTML, 'Welcome! Check out the map');

    await navigate('/map');

    validateStringMatches(container.innerHTML, "See map for all episodes")

  });
});
