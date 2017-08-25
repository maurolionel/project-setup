import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../../../../components/Card';
import Title from '../../../../components/Title';

const Wrapper = styled.div`
  margin: 4rem 0;

  h1 {
    margin-bottom: 1.8rem;
    margin-left: 0.5rem;
    color: ${({ theme }) => theme.gray};
    font-size: 1.7rem;
  }
`;

const Carousel = styled.section`
  display: flex;
  justify-content: space-around;

  > * {
    margin: 0 0.5rem;
  }
`;

const HighlightedProducts = ({ highlightedProducts }) => (
  <Wrapper>
    <Title>Productos destacados</Title>
    {highlightedProducts && (
      <Carousel>
        {highlightedProducts.map(product =>
          <Card key={product.id} product={product} />
        )}
      </Carousel>
    )}
  </Wrapper>
);

HighlightedProducts.propTypes = {
  highlightedProducts: PropTypes.array
};

HighlightedProducts.defaultProps = {
  highlightedProducts: []
};

export default HighlightedProducts;
