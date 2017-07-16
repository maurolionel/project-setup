import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFilter = styled.div``;

const Title = styled.h3`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  text-transform: capitalize;
`;

const Value = styled.div`
  margin: 0.2rem;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
  id: props => props.id,
  name: props => props.name
})`
  margin-right: 0.5rem
`;

const Label = styled.label`
  color: ${({ theme }) => theme.gray};
  text-transform: capitalize;
`;

const Filter = ({ type, values }) => (
  <StyledFilter>
    <Title>{type}</Title>
    <div>
      {values.map((aValue, index) => (
        <Value>
          <Checkbox key={index} id={aValue} name={index} />
          <Label htmlFor={aValue}>{aValue}</Label>
        </Value>
      ))}
    </div>
  </StyledFilter>
);

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

export default Filter;
