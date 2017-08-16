import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import Button from '../../../../components/Button';
import Table from '../Table';

const ActionButton = styled(Button)`
  padding: 0 0.3rem 0.1rem;
`;

const Icon = styled.i.attrs({
  className: props => `fa fa-${props.type}`
}) `
  color: ${({ theme }) => theme.grayDark};
  font-size: 0.8rem;
`;

const getTotal = productsCollection => productsCollection
  .map(aProduct => aProduct.price * aProduct.quantity)
  .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);

const ShoppingList = ({ listOfProducts, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }) => (
  <Table>
    <thead>
      <tr>
        <th colSpan="6">Productos: {listOfProducts.length}</th>
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
      {listOfProducts.map((aProduct, index) => (
        <tr key={aProduct.id}>
          <td>{index + 1}</td>
          <td>{aProduct.name}</td>
          <td><FormattedNumber value={aProduct.price} style="currency" currency="USD" /></td>
          <td className="quantity">
            <span>{aProduct.quantity}</span>
            <div>
              <ActionButton onClick={() => onDecreaseQuantity(aProduct.id)}>
                <Icon type="minus" />
              </ActionButton>
              <ActionButton onClick={() => onIncreaseQuantity(aProduct.id)}>
                <Icon type="plus" />
              </ActionButton>
            </div>
          </td>
          <td><FormattedNumber value={aProduct.price * aProduct.quantity} style="currency" currency="USD" /></td>
          <td>
            <ActionButton onClick={() => onRemoveFromCart(aProduct.id)}>
              <Icon type="remove" />
            </ActionButton>
          </td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan="3" />
        <td>Total</td>
        <td><FormattedNumber value={getTotal(listOfProducts)} style="currency" currency="USD" /></td>
      </tr>
    </tfoot>
  </Table>
);

ShoppingList.propTypes = {
  listOfProducts: PropTypes.array.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default ShoppingList;