import React from 'react';
import styled from 'styled-components';
import Pictures from './components/Pictures';
import Features from './components/Features';
import Description from './components/Description';
import BoxContent from './components/BoxContent';

const boxContentData = [
  '1 impresora HP LaserJet PRO 100',
  '1 cable USB',
  '4 CartuchoS de toner CYMK 126A',
  '1 Instrucciones de uso'
];

const Product = styled.div`
  display: flex;
`;

const SingleProduct = () => (
  <section>
    <Product>
      <Pictures />
      <Features />
    </Product>
    <Description />
    <BoxContent data={boxContentData} />
  </section>
);

export default SingleProduct;
