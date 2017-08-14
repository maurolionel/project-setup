import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../../components/Anchor';
import Paper from '../../components/Paper';
import ShoppingList from './components/ShoppingList';

const Wrapper = styled(Paper)`
  flex: 1;
  padding: 2rem;
  border-radius: 0;
`;

const NoProductsWrapper = styled.div`
  text-align: center;
`;

const IconBasket = styled.i.attrs({
  className: 'fa fa-cart-plus'
})`
  margin-top: 2rem;
  color: ${({ theme }) => theme.grayLighter};
  font-size: 10rem;
`;

const ShoppingCart = ({ productsInCart }) => (
  <Wrapper withoutChangingStateStyle>
    {productsInCart.length > 0
      ? <ShoppingList listOfProducts={productsInCart} />
      : (
        <NoProductsWrapper>
          <p>No tenés ningún producto en el carrito de compras.</p>
          <p>Podés agregarlos desde la sección <Anchor to="/productos">productos</Anchor>.</p>
          <IconBasket />
        </NoProductsWrapper>
      )
    }
  </Wrapper>
);

ShoppingCart.propTypes = {
  productsInCart: PropTypes.array
};

ShoppingCart.defaultProps = {
  productsInCart: []
};

export default ShoppingCart;
