import React from 'react';

import Hero from '../components/Hero/Hero';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import About from '../components/About/About';

import textData from '../data/text';

const { welcomeText, epicText } = textData;

const HomePage = () => (
  <>
    <Hero />
    <AnimatedText slogan={welcomeText} />
    <About />
    <AnimatedText slogan={epicText} />
  </>
);

export default HomePage;
