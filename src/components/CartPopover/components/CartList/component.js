import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../Button';
import Link from '../../../Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollableTable = styled.div`
  overflow: auto;
  max-height: 350px;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.grayLighter};
`;

const Table = styled.table.attrs({
  cellSpacing: 0
})`
  width: 100%;
  tbody tr:hover {
    background-color: ${({ theme }) => theme.whiteGray};
  }
  tr:last-child td {
    border: none;
  }
  td, th {
    overflow: hidden;
    max-width: 160px;
    padding: 5px 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grayLighter};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Quantity = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 5px;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  text-align: center;
`;

const CartList = ({ products, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }) => (
  <Wrapper>
    <ScrollableTable>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th colSpan="2">Producto</th>
            <th>Cantidad</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map((aProduct, index) => (
            <tr key={aProduct.id} title={aProduct.name}>
              <td>{index + 1}</td>
              <td><img width="60" src={aProduct.images[0]} alt={aProduct.name} /></td>
              <td>{aProduct.name}</td>
              <td>
                <div style={{ display: 'flex' }}>
                  <Button onClick={() => onDecreaseQuantity(aProduct.id)} disabled={aProduct.quantity <= 1}>-</Button>
                  <Quantity>{aProduct.quantity}</Quantity>
                  <Button onClick={() => onIncreaseQuantity(aProduct.id)}>+</Button>
                </div>
              </td>
              <td>
                <Button onClick={() => onRemoveFromCart(aProduct.id)}>X</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ScrollableTable>
    <StyledLink to="/carrito" primary>Comprar</StyledLink>
  </Wrapper>
);

CartList.propTypes = {
  products: PropTypes.array.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default CartList;
