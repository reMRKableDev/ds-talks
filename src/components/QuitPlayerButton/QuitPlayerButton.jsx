import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext';

const QuitPlayerButton = () => {
  const { quitAudioPlayer } = useContext(PodcastEpisodesContext);

  return (
    <button type="button" onClick={() => quitAudioPlayer()}>
      Quit Player
    </button>
  );
};

export default QuitPlayerButton;
