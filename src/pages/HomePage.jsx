import React from 'react';

import Hero from '../components/Hero/Hero';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import About from '../components/About/About';

import textData from '../data/textData';

const { welcomeSlogan, epicSlogan } = textData;

const HomePage = () => (
  <>
    <Hero />
    <AnimatedText slogan={welcomeSlogan} />
    <About />
    <AnimatedText slogan={epicSlogan} />
  </>
);

export default HomePage;
