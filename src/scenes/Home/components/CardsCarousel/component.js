import React from 'react';
import styled from 'styled-components';
import Card from '../../../../components/Card';

const mockedProduct = {
  id: '1',
  category_id: '1',
  name: 'CISS Epson XP211 - 50cc',
  price: '499',
  date: '2017-06-01',
  status: '1',
  ml_id: '0'
};

const StyledCardsCarousel = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

const CardsCarousel = () => (
  <StyledCardsCarousel>
    <Card product={mockedProduct} />
    <Card product={mockedProduct} />
    <Card product={mockedProduct} />
    <Card product={mockedProduct} />
  </StyledCardsCarousel>
);

export default CardsCarousel;
