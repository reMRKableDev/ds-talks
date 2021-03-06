import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Navbar from './components/Navbar/Navbar';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';

import { PodcastEpisodesContextProvider } from './contexts/PodcastEpisodesContext';

function App() {
  return (
    <section className="App">
      <PodcastEpisodesContextProvider>
        <Navbar />

        <Router>
          <HomePage path="/" />
          <MapPage path="/map" />
          <NotFoundPage default />
        </Router>
      </PodcastEpisodesContextProvider>
    </section>
  );
}

export default App;
