import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../../Anchor';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

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
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '400')};
  text-transform: capitalize;
`;

const ResetFilter = styled(Anchor)`
  color: ${({ theme }) => theme.grayDark};
  font-size: 0.8rem;
`;

const Filter = ({ type, values, visibilityFilter, onSelectVisibilityFilter }) => {
  const renderFilters = aFilter => (
    <StyledAnchor
      key={aFilter.id}
      to={`/productos/${aFilter.name}`}
      isSelected={visibilityFilter === aFilter.id}
    >
      {aFilter.name.replace(/-/g, ' ')}
    </StyledAnchor>
  );

  return (
    <div>
      <Head>
        <Title>{type}</Title>
        <ResetFilter to="/productos">Borrar filtro</ResetFilter>
      </Head>
      <div>{values.map(renderFilters)}</div>
    </div>
  );
};

Filter.propTypes = {
  type: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  visibilityFilter: PropTypes.number.isRequired,
  onSelectVisibilityFilter: PropTypes.func.isRequired
};

export default Filter;
