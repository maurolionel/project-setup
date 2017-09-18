import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

const guides = [
  {
    url: '#',
    label: 'Guía de intalación de sistema continuo'
  },
  {
    url: '#',
    label: 'Manual de usuario'
  },
  {
    url: '#',
    label: 'Recomendaciones de uso'
  },
  {
    url: '#',
    label: 'Guía de purgado y mantenimiento de sistema continuo'
  }
];

const Wrapper = styled.div`
  display: flex;
`;

const ProductPicture = styled.div`
  flex: 1;
  min-height: 350px;
  background-color: #ddd;
`;

const ProductGuides = styled.div`
  flex: 1;
  padding: 0 1.5rem 1rem;
  color: ${({ theme }) => theme.gray};
`;

const ProductName = styled.h1`
  margin: 0 0 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: 400;
`;

const GuidesList = styled.ul`
  margin: 0;
  padding: 0;
`;

const GuidesListItem = styled.li`
  margin: 0.5rem 0;
  list-style: none;
`;

const GuidesListItemLink = styled.a`
  display: block;
  padding: 1.3rem 1rem;
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  &:hover {
    background-color: ${({ theme }) => lighten(0.08, theme.primary)};
  }
`;

const renderGuideItemLink = aGuide => (
  <GuidesListItem>
    <GuidesListItemLink
      key={aGuide.id}
      href={aGuide.url}
      title="Hacé click para ver/descargar el instructivo"
    >
      {`Instructivo de ${aGuide.type} para ${aGuide.brand} ${aGuide.product}`}
    </GuidesListItemLink>
  </GuidesListItem>
);

const ProductResult = ({ instructives }) => (
  <Wrapper>
    <ProductPicture />
    <ProductGuides>
      <ProductName>HP Officejet Pro 8610 e-All-in-One Printer</ProductName>
      <GuidesList>
        {instructives.map(renderGuideItemLink)}
      </GuidesList>
    </ProductGuides>
  </Wrapper>
);

ProductResult.propTypes = {
  instructives: PropTypes.array.isRequired
};

export default ProductResult;
