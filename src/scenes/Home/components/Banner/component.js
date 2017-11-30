import React from 'react';
import styled from 'styled-components';
import Carousel from '../../../../components/Carousel';
import banner1 from './images/home_banner_general.gif';
import banner2 from './images/nav.jpg';

const Section = styled.section`
  display: flex;
  width: 100%;
`;

const banners = [
  banner1,
  banner2,
  'http://www.imprek.com.ar/imagenes/carrusel/tarj.jpg',
  'http://www.imprek.com.ar/imagenes/carrusel/home_banner_principal.jpg',
  'http://www.imprek.com.ar/imagenes/carrusel/home_banner_papel_nuevo.jpg',
  'http://www.imprek.com.ar/imagenes/carrusel/home_banner_general.jpg'
];

const Banner = () => (
  <Section>
    <Carousel slides={banners} />
  </Section>
);

export default Banner;
