import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

const Wrapper = styled.div`
  display: flex;
`;

const ProductPicture = styled.img`
  flex: 1;
  max-height: 350px;
  background-color: #fff;
  object-fit: contain;
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
      {`Instructivo de ${aGuide.guideClass} de ${aGuide.category} de ${aGuide.guideType}`}
    </GuidesListItemLink>
  </GuidesListItem>
);

const ProductResult = ({ staticPath, guides }) => (
  <Wrapper>
    <ProductPicture src={`${staticPath}2/${guides[0].productId}.jpg`} />
    <ProductGuides>
      <ProductName>{guides[0].model}</ProductName>
      <GuidesList>
        {guides.map(renderGuideItemLink)}
      </GuidesList>
    </ProductGuides>
  </Wrapper>
);

ProductResult.propTypes = {
  staticPath: PropTypes.string.isRequired,
  guides: PropTypes.array.isRequired
};

export default ProductResult;
