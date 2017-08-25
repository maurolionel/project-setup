import React from 'react';
import Banner from './components/Banner';
import HighlightedProducts from './components/HighlightedProducts';
import Shortcuts from './components/Shortcuts';
import Features from './components/Features';

const Home = () => (
  <section>
    <Banner />
    <HighlightedProducts />
    <Shortcuts />
    <Features />
  </section>
);

export default Home;
