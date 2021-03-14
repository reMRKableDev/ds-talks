import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import ApiDataService from '../services/apiDataService';
import guestLocationList from '../data/guestData';
import helperFunctions from '../helpers';

const {
  addCoordinatesToEachEpisodeResult,
  findIncomingEpisodeInEpisodeList,
  removeFalsyValuesFromTheList,
} = helperFunctions;

export const PodcastEpisodesContext = createContext();

export const PodcastEpisodesContextProvider = ({ children }) => {
  const [episodesList, setEpisodesList] = useState([]);
  const [episodeDetails, setEpisodeDetails] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState({});
  const [audioPlayerVisibility, setAudioPlayerVisibility] = useState(false);

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
    const foundEpisode = findIncomingEpisodeInEpisodeList(
      episodesList,
      incomingEpisode
    );

    setSelectedEpisode(foundEpisode);
    setAudioPlayerVisibility(true);
  };

  const quitAudioPlayer = () => setAudioPlayerVisibility(false);

  const renderEpisodeDetails = (incomingEpisode) => {
    const foundEpisode = findIncomingEpisodeInEpisodeList(
      episodesList,
      incomingEpisode
    );

    setEpisodeDetails(foundEpisode);
  };

  const closeEpisodeDetails = () => setEpisodeDetails({});

  return (
    <PodcastEpisodesContext.Provider
      value={{
        episodesList,
        selectEpisode,
        episodeDetails,
        quitAudioPlayer,
        selectedEpisode,
        closeEpisodeDetails,
        renderEpisodeDetails,
        audioPlayerVisibility,
      }}
    >
      {children}
    </PodcastEpisodesContext.Provider>
  );
};

PodcastEpisodesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
