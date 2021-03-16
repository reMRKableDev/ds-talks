import React from 'react';
import { Router } from '@reach/router';

import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';

import { SiteThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { PodcastEpisodesContextProvider } from './contexts/PodcastEpisodesContext/PodcastEpisodesContext';

function App() {
  return (
    <>
      <SiteThemeProvider>
        <PodcastEpisodesContextProvider>
          <Navbar />

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

export default App;
