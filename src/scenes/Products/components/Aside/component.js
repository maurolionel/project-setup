import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filter from '../Filter';

const StyledAside = styled.aside`
  flex: 0 0 15rem;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.primary};
`;

const Aside = ({ categories }) => (
  categories
    ? (
      <StyledAside>
        <Title>Filtrar búsqueda</Title>
        <Filter type="categorías" values={categories} />
      </StyledAside>
    )
    : null
);

Aside.propTypes = {
  categories: PropTypes.array
};

Aside.defaultProps = {
  categories: []
};

export default Aside;
