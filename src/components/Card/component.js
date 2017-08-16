import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import Paper from '../Paper';

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

const LinkActionButton = styled.button`
  padding: 0.5rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.base};
  background-color: ${({ theme }) => theme.accent};
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s background-color;
  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.accent)};
  }
`;

const Card = ({ product, categoryName, onAddToCart }) => {
  const hasStock = Boolean(parseInt(product.has_stock, 10));
  return (
    <StyledCard>
      <LinkImage to={`/productos/${categoryName}/${product.id}`}>
        <img src="" alt={product.name} />
      </LinkImage>
      <Details>
        <Price>${product.price}</Price>
        <LinkName to={`/productos/${categoryName}/${product.id}`}>{product.name}</LinkName>
        <Description>{product.description}</Description>
      </Details>
      {hasStock
        ? <LinkActionButton onClick={() => onAddToCart(product.id)}>Agregar al carrito</LinkActionButton>
        : <p>Sin stock</p>
      }
    </StyledCard>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  categoryName: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Card;
