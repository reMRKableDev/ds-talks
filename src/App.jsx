import React from 'react';
import { Router } from '@reach/router';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';

import {
  useTheme,
  SiteThemeProvider,
} from './contexts/ThemeContext/ThemeContext';
import { PodcastEpisodesContextProvider } from './contexts/PodcastEpisodesContext/PodcastEpisodesContext';

function App({ theme }) {
  const toggleTheme = useTheme();

  const handleThemeToggle = () => {
    setTimeout(() => {
      toggleTheme.toggle();
    }, 100);
  };

  return (
    <>
      <SiteThemeProvider>
        <PodcastEpisodesContextProvider>
          <Navbar theme={theme} handleThemeToggle={handleThemeToggle} />

          <Router>
            <HomePage path="/" />
            <MapPage path="/map" />
            <NotFoundPage default />
          </Router>
        </PodcastEpisodesContextProvider>
      </SiteThemeProvider>
    </>
  );
}

export default withTheme(App);
App.propTypes = {
  theme: PropTypes.objectOf(PropTypes.object).isRequired,
};
