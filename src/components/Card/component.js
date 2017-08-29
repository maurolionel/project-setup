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
  overflow: hidden;
  position: relative;
  padding: 0;
  border-radius: 4px;
`;

const LinkImage = styled(Link)`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.whiteGray};
  &:hover {
    .offer-badge {
      opacity: 0.5;
      background-color: ${({ theme }) => lighten(0.2, theme.grayDark)};
    }
  }
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

const OfferBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 50;
  padding: 0.3rem 0.3rem;
  border-radius: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.success};
  font-size: 0.7rem;
  text-align: center;
  text-transform: uppercase;
  transition: opacity 0.2s, background-color 0.2s;
`;

const Card = ({ product, staticPath, onAddToCart }) => {
  const addToCart = () => onAddToCart(product.id);
  const path = `${staticPath}${product.categoryId}/${product.id}.jpg`;
  return (
    <StyledCard>
      <LinkImage to={`/productos/${product.id}`}>
        {product.isOfferMode && <OfferBadge className="offer-badge">¡oferta!</OfferBadge>}
        <img src={path} alt={product.name} />
      </LinkImage>
      <Details>
        <Price>${product.price}</Price>
        <LinkName to={`/productos/${product.id}`}>{product.name}</LinkName>
        <Description>{product.description}</Description>
      </Details>
      <ActionWrapper>
        {product.hasStock
          && <Button onClick={addToCart} primary>Agregar al carrito</Button>}
        <LinkCustom to={`/productos/${product.id}`}>Ver</LinkCustom>
        {!product.hasStock && <span>Sin stock</span>}
      </ActionWrapper>
    </StyledCard>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
  staticPath: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default Card;
