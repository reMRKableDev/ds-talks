import React, { useContext } from 'react';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import StyledAudioPlayer from './StyledAudioPlayer';
import QuitPlayerButton from '../QuitPlayerButton/QuitPlayerButton';

const Player = () => {
  const { selectedEpisode } = useContext(PodcastEpisodesContext);
  const { audio_url: url, episode_number: number, artist } = selectedEpisode;

  return (
    <StyledAudioPlayer
      autoPlay
      loop
      src={url}
      layout="stacked"
      customAdditionalControls={[]}
      header={number && artist ? `Episode #${number} with ${artist}` : null}
      footer={<QuitPlayerButton />}
    />
  );
};

export default Player;
