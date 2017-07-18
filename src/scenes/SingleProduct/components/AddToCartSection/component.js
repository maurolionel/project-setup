import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import StockLabel from '../../../../components/StockLabel';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

const StyledWrapper = styled.div`
  flex: 1 1 50%;
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0 0 0.3rem;
  color: ${({ theme }) => theme.gray};
  font-size: 1.5rem;
  font-weight: 700;
`;

const Price = styled.span`
  display: block;
  margin-top: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;

const QuantityWrapper = styled.div`
  margin: 1rem 0;
`;

const QuantityLabel = styled.span`
  display: block;
  margin-bottom: 3px;
  color: ${({ theme }) => darken(0.3, theme.grayLighter)};
  font-size: 0.75rem;
  font-weight: 300;
  text-transform: capitalize;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityInput = styled(Input).attrs({
  type: 'number',
  defaultValue: 1,
  min: 1
})`
  width: 3.3rem;
  padding: 0.5rem 0 0.5rem 0.6rem;
  margin-right: 0.5rem;
  border: 0;
  outline: 0;
  color: ${({ theme }) => darken(0.5, theme.grayLighter)};
`;

const ShopIcon = styled.i.attrs({
  className: 'fa fa-shopping-cart'
})`
  margin: -1px 0.5rem 0 0;
  font-size: 1rem;
`;

const AddToCartSection = () => (
  <StyledWrapper>
    <Title>HP LaserJet PRO 100</Title>
    <StockLabel withStock />
    <Price>$ 599.00</Price>
    <QuantityWrapper>
      <QuantityLabel>Cantidad</QuantityLabel>
      <Quantity>
        <QuantityInput />
        <Button to="/carrito"><ShopIcon />Agregar al carrito</Button>
      </Quantity>
    </QuantityWrapper>
    <Button to="/carrito" primary>Comprar</Button>
  </StyledWrapper>
);

export default AddToCartSection;
