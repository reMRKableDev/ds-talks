import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import NotFoundPage from './pages/NotFoundPage';

import { useTheme } from './contexts/ThemeContext/ThemeContext';

function App({ theme }) {
  const toggleTheme = useTheme();

  const handleThemeToggle = () => {
    setTimeout(() => {
      toggleTheme.toggle();
    }, 100);
  };

  return (
    <>
      <Navbar theme={theme} handleThemeToggle={handleThemeToggle} />

      <Switch>
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </>
  );
}

export default withTheme(App);
App.propTypes = {
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
};
