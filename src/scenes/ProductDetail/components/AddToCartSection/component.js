import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import StockLabel from '../../../../components/StockLabel';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Title from '../../../../components/Title';
import Label from '../../../../components/Label';

const Wrapper = styled.div`
  flex: 1 1 50%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.base};
`;

const Name = styled(Title)`
  margin: 0 0 0.3rem;
  font-size: 1.5rem;
`;

const Price = styled.span`
  display: block;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
`;

const QuantityWrapper = styled.div`
  margin: 1.5rem 0 1rem;
`;

const QuantityLabel = styled(Label)`
  margin-bottom: 5px;
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
  <Wrapper>
    <Name>HP LaserJet PRO 100</Name>
    <StockLabel withStock />
    <Price>$ 599.00</Price>
    <QuantityWrapper>
      <QuantityLabel>Cantidad:</QuantityLabel>
      <Quantity>
        <QuantityInput />
        <Button to="/carrito"><ShopIcon />Agregar al carrito</Button>
      </Quantity>
    </QuantityWrapper>
    <Button to="/carrito" primary>Comprar</Button>
  </Wrapper>
);

export default AddToCartSection;
