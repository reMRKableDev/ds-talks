import React from 'react';
import './About.css';

import MicrophoneIcon from '../../assets/icons/podcast-mic.svg';

const About = () => {
  return (
    <section className="row description-section">
      <div className="column description-image">
        <figure>
          <img src={MicrophoneIcon} alt="podcast-mic" />
        </figure>
      </div>
      <div className="double-column description-text">
        <p>
          <mark>
            Dance Specific <span>Talks</span>
          </mark>{' '}
          is a unique podcast, with stories from dancers worldwide.
        </p>
        <p>
          Therese Sahlin interviews everyone from underground Hip-hop battlers
          to famous Bachata stars.
        </p>
      </div>
    </section>
  );
};

export default About;
