import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aside from './components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

const Products = ({ products, categories }) => (
  (products && categories)
    ? (
      <Section>
        <Aside categories={categories} />
        <SearchResult results={products} categories={categories} />
      </Section>
    )
    : null
);

Products.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array
};

Products.defaultProps = {
  categories: [],
  products: []
};

export default Products;
