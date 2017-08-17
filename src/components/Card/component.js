import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Paper from '../Paper';
import Button from '../Button';
import LinkCustom from '../Link';

const StyledCard = styled(Paper)`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 4px;
`;

const LinkImage = styled(Link)`
  flex-basis: 180px;
  background-color: #ededed;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LinkName = styled(Link)`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  overflow: hidden;
  margin: 0;
  color: ${({ theme }) => lighten(0.1, theme.gray)};
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Price = styled.span`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 1rem;
  button {
    width: auto;
    margin-right: 0.5rem;
  }
  span {
    margin-left: 0.5rem;
    font-style: italic;
  }
`;

const Card = ({ product, categoryName, onAddToCart }) => (
  <StyledCard>
    <LinkImage to={`/productos/${categoryName}/${product.id}`}>
      <img src="" alt={product.name} />
    </LinkImage>
    <Details>
      <Price>${product.price}</Price>
      <LinkName to={`/productos/${categoryName}/${product.id}`}>{product.name}</LinkName>
      <Description>{product.description}</Description>
    </Details>
    <ActionWrapper>
      {product.hasStock &&
        <Button onClick={() => onAddToCart(product.id)} primary>Agregar al carrito</Button>}
      <LinkCustom to={`/productos/${categoryName}/${product.id}`}>Ver</LinkCustom>
      {!product.hasStock && <span>Sin stock</span>}
    </ActionWrapper>
  </StyledCard>
);

Card.propTypes = {
  product: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Card;
