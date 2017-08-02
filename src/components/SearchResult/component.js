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
  padding: 1rem;
`;

const SearchResult = ({ results }) => (
  <Section>
    {results && results.map(aResult => (
      <CardContainer key={aResult.id}>
        <Card product={aResult} />
      </CardContainer>
    ))}
  </Section>
);

SearchResult.propTypes = {
  results: PropTypes.array
};

SearchResult.defaultProps = {
  results: []
};

export default SearchResult;
