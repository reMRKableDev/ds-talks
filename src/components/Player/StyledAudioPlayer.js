import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';

const StyledAudioPlayer = styled(AudioPlayer)`
  background-color: pink;
  font-family: 'Roboto', sans-serif;
  outline: none;

  .rhap_header {
    color: white;
    text-align: center;
    font-size: 1.5em;
    padding: 0.2em 0;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .rhap_progress-section {
    display: flex;
    color: white;
    justify-content: space-around;
    flex-flow: row wrap;
    padding: 0.2em 0;

    .rhap_time {
      padding: 0.2em;
      font-weight: 900;
    }

    .rhap_progress-container {
      background-color: #fff;
      width: 50%;
      outline: none;

      .rhap_progress-bar {
        height: 1em;

        .rhap_progress-indicator {
          border: 0.35em solid #000;
          background-color: #000;
        }

        .rhap_progress-filled {
          border: 0.3em solid #999;
          background-color: #999;
          height: 0.2em;
        }
      }
    }
  }

  .rhap_controls-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .rhap_additional-controls {
      display: none;
    }

    .rhap_main-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.2em;
      width: 100%;

      button {
        background-color: transparent;
        width: 2.5em;
        height: 2.5em;
        margin: 0.5em;
        outline: none;

        svg {
          width: 100%;
          height: auto;
        }
      }
    }

    .rhap_volume-controls {
      display: none;
    }
  }

  .rhap_footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledAudioPlayer;
