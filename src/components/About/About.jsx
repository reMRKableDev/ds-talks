import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="row description-section">
      <div className="column description-image">
        <figure>
          <img src="https://via.placeholder.com/300" alt="podcast" />
        </figure>
      </div>
      <div className="double-column description-text">
        <p>
          Dance Specific Talks is a unique podcast, where dancers can share
          their stories.
        </p>
        <p>
          Hear their incredible journeys, learn from their experiences, and much
          more.
        </p>
      </div>
    </section>
  );
};

export default About;
