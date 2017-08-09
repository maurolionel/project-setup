import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../../../components/Anchor';

const Title = styled.h3`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  text-transform: capitalize;
`;

const StyledAnchor = styled(Anchor)`
  display: block;
  margin: 0.2rem;
  color: ${({ theme }) => theme.gray};
  text-transform: capitalize;
`;

const Filter = ({ type, values }) => (
  <div>
    <Title>{type}</Title>
    <div>
      {values.map((aValue, index) => (
        <StyledAnchor key={index} to={`/productos/${aValue.name}`}>
          {aValue.name.replace(/-/g, ' ')}
        </StyledAnchor>
      ))}
    </div>
  </div>
);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default Filter;
