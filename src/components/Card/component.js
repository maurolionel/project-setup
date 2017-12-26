import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
import { FormattedNumber } from 'react-intl';
import isEmpty from 'lodash.isempty';
import Paper from '../Paper';
import ButtonCart from '../ButtonCart';
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

const Card = ({ product, productUrl }) => (
  <StyledCard>
    <LinkImage to={productUrl}>
      {product.isOfferMode && <OfferBadge className="offer-badge">¡oferta!</OfferBadge>}
      <img src={product.images[0]} alt={product.name} />
    </LinkImage>
    <Details>
      <Price>
        <FormattedNumber value={!isEmpty(product.prices) && product.prices.Mayorista.tax} style="currency" currency="USD" />
      </Price>
      <LinkName to={productUrl}>{product.name}</LinkName>
      <Description>{product.description}</Description>
    </Details>
    <ActionWrapper>
      {product.hasStock && <ButtonCart productId={product.id} />}
      <LinkCustom to={productUrl}>Ver</LinkCustom>
      {!product.hasStock && <span>Sin stock</span>}
    </ActionWrapper>
  </StyledCard>
);

Card.propTypes = {
  product: PropTypes.object.isRequired,
  productUrl: PropTypes.string.isRequired
};

export default Card;
