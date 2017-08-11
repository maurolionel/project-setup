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

const ShoppingCart = ({ productsInCart }) => (
  <Wrapper withoutChangingStateStyle>
    {productsInCart.length > 0
      ? <ShoppingList listOfProducts={productsInCart} />
      : (
        <div>
          <p>Todavía no tenés ningún producto en el carrito.</p>
          <p>Podés hacerlo desde la sección <Anchor to="/productos">productos</Anchor>.</p>
        </div>
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
