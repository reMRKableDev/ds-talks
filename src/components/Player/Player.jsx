import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { PodcastEpisodesContext } from '../../contexts/PodcastEpisodesContext';

const Player = () => {
  const { selectedEpisode } = useContext(PodcastEpisodesContext);

  const { audio_url: url, episode_number: number, artist } = selectedEpisode;

  return (
    <AudioPlayer
      src={url}
      header={number && artist ? `${number} ${artist}` : null}
    />
  );
};

export default Player;
