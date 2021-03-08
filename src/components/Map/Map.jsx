import React, { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layer from '../Layer/Layer';
import MarkerIcon from '../MarkerIcon/MarkerIcon';

import ApiDataService from '../../services/apiDataService';
import guestLocationList from '../../data/guestData';
import helperFunctions from './helpers';

const {
  addCoordinatesToEachEpisodeResult,
  removeFalsyValuesFromTheList,
} = helperFunctions;

const Map = () => {
  const [episodesList, setEpisodesList] = useState([]);

  const CENTER = { lat: 52.377956, lng: 4.89707 };
  const ZOOM_LEVEL = 3;
  const MAX_ZOOM = 10;

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

  return (
    <section className="main-container">
      <MapContainer center={CENTER} zoom={ZOOM_LEVEL} maxZoom={MAX_ZOOM}>
        <Layer />
        <MarkerIcon episodesList={episodesList} />
      </MapContainer>
    </section>
  );
};

export default Map;
