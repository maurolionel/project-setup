import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../Paper';
import Button from '../Button';

const Popover = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% - 1px);
  right: 0;
  visibility: hidden;
  opacity: 0;
  padding-top: 10px;
  transform: translateY(10px);
  transition-property: opacity, transform, visibility;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  &.is-visible {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

const Table = ({ products, onIncreaseQuantity, onDecreaseQuantity, onRemoveProduct }) => (
  <table>
    <thead>
      <tr>
        <th colSpan="2">Producto</th>
        <th>Cantidad</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {products.map(aProduct => (
        <tr key={aProduct.id}>
          <td><img src={aProduct.images[0]} alt={aProduct.name} /></td>
          <td>{aProduct.name}</td>
          <td>
            <div style={{ display: 'flex' }}>
              <Button onClick={onDecreaseQuantity}>-</Button>
              {aProduct.quantity}
              <Button onClick={onIncreaseQuantity}>+</Button>
            </div>
          </td>
          <td>
            <Button onClick={onRemoveProduct}>X</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  products: PropTypes.array.isRequired,
  onIncreaseQuantity: PropTypes.func,
  onDecreaseQuantity: PropTypes.func,
  onRemoveProduct: PropTypes.func
};

Table.defaultProps = {
  onIncreaseQuantity: () => console.log('SUMA 1'),
  onDecreaseQuantity: () => console.log('RESTA 1'),
  onRemoveProduct: () => console.log('ELIMINA')
};

const CartPopover = ({ products, isVisible }) => (
  <Popover className={isVisible ? 'is-visible' : ''}>
    <Paper>
      {products.length
        ? <Table products={products} />
        : <p>Tu carrito está vacío.</p>}
    </Paper>
  </Popover>
);

CartPopover.propTypes = {
  products: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default CartPopover;
