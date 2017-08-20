import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Aside from '../../components/Aside';
import SearchResult from '../../components/SearchResult';

const Section = styled.section`
  display: flex;
`;

const ProductsFilteredByCategory = ({ match: { params: { categoryName } }, products, categories }) => {
  if (!products || !categories) {
    return null;
  }
  const categoryId = categories.find(aCategory => categoryName === aCategory.name).id;
  const result = products.filter(aProduct => categoryId === aProduct.categoryId);
  return (
    <Section>
      <Aside categories={categories} />
      <SearchResult results={result} categories={categories} />
    </Section>
  );
};

ProductsFilteredByCategory.propTypes = {
  match: PropTypes.object.isRequired,
  categories: PropTypes.array,
  products: PropTypes.array
};

ProductsFilteredByCategory.defaultProps = {
  categories: [],
  products: []
};

export default ProductsFilteredByCategory;
