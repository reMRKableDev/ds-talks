import React, { useContext } from 'react';
import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';
import StyledQuitPlayerButton from './QuitPlayerButton';

const QuitPlayerButton = () => {
  const { quitAudioPlayer } = useContext(PodcastEpisodesContext);

  return (
    <StyledQuitPlayerButton type="button" onClick={() => quitAudioPlayer()}>
      <span>Hello</span>
    </StyledQuitPlayerButton>
  );
};

export default QuitPlayerButton;
