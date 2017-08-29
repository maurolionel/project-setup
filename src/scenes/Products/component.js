import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

const Products = ({ products, categories, match, visibilityFilter }) => {
  if (!products || !categories) {
    return null;
  }

  const filteredByCategory = visibilityFilter === 0
    ? products
    : products.filter(aProduct => aProduct.categoryId === visibilityFilter);

  const filteredByMode = match.url === '/ofertas'
    ? filteredByCategory.filter(p => p.isOfferMode)
    : filteredByCategory;

  return (
    <Section>
      <Aside />
      <SearchResult results={filteredByMode} categories={categories} />
    </Section>
  );
};

Products.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
  match: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.number.isRequired
};

Products.defaultProps = {
  categories: [],
  products: []
};

export default Products;
