import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import ApiDataService from '../services/apiDataService';
import guestLocationList from '../data/guestData';
import helperFunctions from '../helpers';

const {
  addCoordinatesToEachEpisodeResult,
  removeFalsyValuesFromTheList,
} = helperFunctions;

export const PodcastEpisodesContext = createContext();

export const PodcastEpisodesContextProvider = ({ children }) => {
  const [episodesList, setEpisodesList] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState({});

  useEffect(async () => {
    const podcastService = new ApiDataService();

    const allEpisodesList = await podcastService.getAllEpisodes();

    const episodeListWithGuestLocation = addCoordinatesToEachEpisodeResult(
      allEpisodesList,
      guestLocationList
    );

    const episodeListWithGuestLocationClean = removeFalsyValuesFromTheList(
      episodeListWithGuestLocation
    );

    setEpisodesList(episodeListWithGuestLocationClean);
  }, [episodesList]);

  const selectEpisode = (incomingEpisode) => {
    const foundEpisode = episodesList.find(
      (episodeItem) => episodeItem.id === incomingEpisode.id
    );

    setSelectedEpisode(foundEpisode);
  };

  return (
    <PodcastEpisodesContext.Provider
      value={{ episodesList, selectEpisode, selectedEpisode }}
    >
      {children}
    </PodcastEpisodesContext.Provider>
  );
};

PodcastEpisodesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
