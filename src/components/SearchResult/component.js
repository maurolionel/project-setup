import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const CardContainer = styled.article`
  flex: 0 1 30%;
  display: flex;
  min-width: 300px;
  padding: 1rem;
`;

const SearchResult = ({ results, categories }) => (
  <Section>
    {results && results.map((aResult) => {
      const categoryName = categories.find(aCategory => aResult.category_id === aCategory.id).name;
      return (
        <CardContainer key={aResult.id}>
          <Card product={aResult} categoryName={categoryName} />
        </CardContainer>
      );
    })}
  </Section>
);

SearchResult.propTypes = {
  results: PropTypes.array,
  categories: PropTypes.array
};

SearchResult.defaultProps = {
  results: [],
  categories: []
};

export default SearchResult;
