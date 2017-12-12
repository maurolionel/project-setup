import React from 'react';
import styled from 'styled-components';
import Carousel from '../../../../components/Carousel';
import banner1 from './images/1.gif';
import banner2 from './images/2.jpg';
import banner3 from './images/3.jpg';
import banner4 from './images/4.jpg';
import banner5 from './images/5.jpg';
import banner6 from './images/6.jpg';

const Section = styled.section`
  display: flex;
  width: 100%;
`;

const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

const Banner = () => (
  <Section>
    <Carousel slides={banners} />
  </Section>
);

export default Banner;
