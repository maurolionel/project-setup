import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../components/Title';

const ExploreResult = ({ query }) => (
  <Title>{`Resultado de la búsqueda para "${query}"`}</Title>
);

ExploreResult.propTypes = {
  query: PropTypes.string.isRequired
};

export default ExploreResult;
