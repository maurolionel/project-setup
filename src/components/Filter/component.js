import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFilter = styled.div``;

const Title = styled.h3`
  color: ${({ theme }) => theme.accent};
  text-transform: capitalize;
`;

const Filter = ({ type, values }) => (
  <StyledFilter>
    <Title>{type}</Title>
    {values.map((aValue, index) => <div key={index}>{aValue}</div>)}
  </StyledFilter>
);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default Filter;
