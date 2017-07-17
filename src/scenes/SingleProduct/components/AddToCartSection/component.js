import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import StockLabel from '../../../../components/StockLabel';

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
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: ${({ theme }) => theme.gray};
`;

const QuantityInput = styled.input.attrs({
  type: 'number',
  value: 1,
  min: 1
})`
  width: 3rem;
  padding: 0.5rem 0 0.5rem 0.6rem;
  margin-right: 0.5rem;
  border: 1px solid #9E9E9E;
  border-radius: 2px;
  color: ${({ theme }) => theme.gray};
  font-size: 1.3rem;
`;

const AddToCartSection = () => (
  <StyledWrapper>
    <Title>HP LaserJet PRO 100</Title>
    <StockLabel withStock />
    <Price>$ 599.00</Price>
    <QuantityWrapper>
      <QuantityInput type="number" value="1" min="1" />
      <span>u.</span>
    </QuantityWrapper>
    <Link to="/carrito">Comprar</Link>
  </StyledWrapper>
);

export default AddToCartSection;
