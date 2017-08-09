import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({ productsInCart, onDecrementQuantity }) => (
  <div>
    <ul>
      {productsInCart.map((aProductInCart, index) => (
        <li key={aProductInCart.id}>
          <ul>
            <li>{index}</li>
            <li>{aProductInCart.name}</li>
            <li>{aProductInCart.price}</li>
            <li>{aProductInCart.quantity}</li>
            <li>
              <button onClick={() => onDecrementQuantity(aProductInCart.id)}>-</button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

ShoppingCart.propTypes = {
  productsInCart: PropTypes.array,
  onDecrementQuantity: PropTypes.func.isRequired
};

ShoppingCart.defaultProps = {
  productsInCart: []
};

export default ShoppingCart;
