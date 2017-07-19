import React from 'react';
import styled from 'styled-components';
import Filter from '../../../../components/Filter';

const filters = [
  {
    id: 1,
    type: 'categoria',
    values: [
      'impresoras',
      'sistemas continuos',
      'cartuchos recargables'
    ]
  },
  {
    id: 2,
    type: 'marca',
    values: [
      'epson',
      'hp',
      'canon'
    ]
  }
];

const renderFilter = aFilter => (
  <Filter key={aFilter.id} type={aFilter.type} values={aFilter.values} />
);

const StyledAside = styled.aside`
  flex: 0 0 15rem;
  padding: 1rem;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.primary};
`;

const Aside = () => (
  <StyledAside>
    <Title>Filtrar búsqueda</Title>
    <div>
      {filters.map(renderFilter)}
    </div>
    <div>--destacados--</div>
  </StyledAside>
);

export default Aside;
