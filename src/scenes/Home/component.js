import React from 'react';
import Banner from './components/Banner';
import CardsCarousel from './components/CardsCarousel';
import Shortcuts from './components/Shortcuts';
import Features from './components/Features';

const Home = () => (
  <section>
    <Banner />
    <CardsCarousel />
    <Shortcuts />
    <Features />
  </section>
);

export default Home;
