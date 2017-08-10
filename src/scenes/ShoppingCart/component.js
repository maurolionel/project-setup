import React from 'react';
import PropTypes from 'prop-types';
import Anchor from '../../components/Anchor';

const ShoppingCart = ({ productsInCart, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }) => (
  productsInCart.length > 0
    ? (
      <div>
        <table>
          <thead>
            <tr>
              <th colSpan="6">Productos: {productsInCart.length}</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Precio total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {productsInCart.map((aProductInCart, index) => (
              <tr key={aProductInCart.id}>
                <td>{index + 1}</td>
                <td>{aProductInCart.name}</td>
                <td>$ {aProductInCart.price}</td>
                <td>
                  <button onClick={() => onDecreaseQuantity(aProductInCart.id)}>-</button>
                  <span>{aProductInCart.quantity}</span>
                  <button onClick={() => onIncreaseQuantity(aProductInCart.id)}>+</button>
                </td>
                <td>$ {aProductInCart.price * aProductInCart.quantity}</td>
                <td>
                  <button onClick={() => onRemoveFromCart(aProductInCart.id)}>X</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" />
              <td>Total</td>
              <td>$...</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
    : (
      <div>
        <p>Todavía no tenés ningún producto en el carrito.</p>
        <p>Podés hacerlo desde la sección <Anchor to="/productos">productos</Anchor>.</p>
      </div>
    )
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
