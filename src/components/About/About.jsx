import React from 'react';
import { Link } from '@reach/router';
import './About.css';

import MicrophoneIcon from '../../assets/icons/podcast-mic.svg';
import MapBg from '../../assets/images/map.png';

const About = () => {
  return (
    <section className="row description-section">
      <div
        className="column description-image"
        style={{ backgroundImage: `url(${MapBg})` }}
      >
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
        <Link to="/map">See Map</Link>
      </div>
    </section>
  );
};

export default About;
