import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import CartTable from '../CartTable';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextStep = styled(Button)`
  align-self: flex-end;
  margin-top: 2rem;
`;

const ShoppingList = props => (
  <Wrapper>
    <CartTable
      products={props.listOfProducts}
      staticPath={props.staticPath}
      onIncreaseQuantity={props.onIncreaseQuantity}
      onDecreaseQuantity={props.onDecreaseQuantity}
      onRemoveFromCart={props.onRemoveFromCart}
      isInteractive
    />
    <NextStep primary onClick={props.onNextStep}>Siguiente</NextStep>
  </Wrapper>
);

ShoppingList.propTypes = {
  staticPath: PropTypes.string.isRequired,
  listOfProducts: PropTypes.array.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired
};

export default ShoppingList;
