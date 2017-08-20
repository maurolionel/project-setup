import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

const Products = ({ products, categories, match }) => {
  if (!products || !categories) {
    return null;
  }
  const filteredProducts = match.url === '/ofertas'
    ? products.filter(p => p.isOfferMode)
    : products;
  return (
    <Section>
      <Aside categories={categories} />
      <SearchResult results={filteredProducts} categories={categories} />
    </Section>
  );
};

Products.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
  match: PropTypes.object.isRequired
};

Products.defaultProps = {
  categories: [],
  products: []
};

export default Products;
