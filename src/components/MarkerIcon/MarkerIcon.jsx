import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';
import leafletIcon from '../LeafletIcon/LeafletIcon';

import {
  StyledPopupButton,
  StyledPopupText,
  StyledPopupButtonContainer,
} from './MarkerIconStyles';

const MarkerIcon = () => {
  const { episodesList, selectEpisode, renderEpisodeDetails } = useContext(
    PodcastEpisodesContext
  );

  return (
    episodesList &&
    episodesList.map((episodeItem) => (
      <Marker
        data-testid="episode-title"
        position={episodeItem.coordinates}
        icon={leafletIcon}
        key={episodeItem.id}
      >
        <Popup>
          <StyledPopupText>{episodeItem.title}</StyledPopupText>
          <StyledPopupButtonContainer>
            <StyledPopupButton
              type="button"
              onClick={() => selectEpisode(episodeItem)}
            >
              Listen
            </StyledPopupButton>
            <StyledPopupButton
              type="button"
              onClick={() => renderEpisodeDetails(episodeItem)}
            >
              Details
            </StyledPopupButton>
          </StyledPopupButtonContainer>
        </Popup>
      </Marker>
    ))
  );
};

export default MarkerIcon;
