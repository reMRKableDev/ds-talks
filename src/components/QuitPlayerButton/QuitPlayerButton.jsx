import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import StyledQuitPlayerButton from './QuitPlayerButton';

const QuitPlayerButton = () => {
  const { quitAudioPlayer } = useContext(PodcastEpisodesContext);

  return (
    <StyledQuitPlayerButton type="button" onClick={() => quitAudioPlayer()}>
      Quit Player
    </StyledQuitPlayerButton>
  );
};

export default QuitPlayerButton;
