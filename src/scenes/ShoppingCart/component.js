import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCart = ({ productsInCart, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }) => (
  <div>
    <ul>
      {productsInCart.map((aProductInCart, index) => (
        <li key={aProductInCart.id}>
          <ul>
            <li>{index}</li>
            <li>{aProductInCart.name}</li>
            <li>{aProductInCart.price}</li>
            <li>
              <button onClick={() => onDecreaseQuantity(aProductInCart.id)}>-</button>
              <span>{aProductInCart.quantity}</span>
              <button onClick={() => onIncreaseQuantity(aProductInCart.id)}>+</button>
            </li>
            <li>
              <button onClick={() => onRemoveFromCart(aProductInCart.id)}>X</button>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

ShoppingCart.propTypes = {
  productsInCart: PropTypes.array,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

ShoppingCart.defaultProps = {
  productsInCart: []
};

export default ShoppingCart;
