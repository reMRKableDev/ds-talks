import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { SiteThemeProvider } from './contexts/ThemeContext/ThemeContext';
import { PodcastEpisodesContextProvider } from './contexts/PodcastEpisodesContext/PodcastEpisodesContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SiteThemeProvider>
        <PodcastEpisodesContextProvider>
          <App />
        </PodcastEpisodesContextProvider>
      </SiteThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
