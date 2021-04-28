import React, { useContext } from 'react';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext/PodcastEpisodesContext';

import StyledAudioPlayer from './PlayerStyles';

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
