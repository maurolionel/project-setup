import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const StyledCardsCarousel = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

const CardsCarousel = () => (
  <StyledCardsCarousel>
    <Card />
    <Card />
    <Card />
    <Card />
  </StyledCardsCarousel>
);

export default CardsCarousel;
