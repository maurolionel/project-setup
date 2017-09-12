import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import Paper from '../../../../components/Paper';
import Button from '../../../../components/Button';
import Table from '../Table';

const TableWrapper = styled(Paper) `
  width: 100%;
  border-radius: 0;
`;

const ActionButton = styled(Button) `
  padding: 0 0.3rem 0.1rem;
`;

const Icon = styled.i.attrs({
  className: props => `fa fa-${props.type}`
}) `
  color: ${({ theme }) => theme.grayDark};
  font-size: 0.8rem;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CartTable = ({ products, staticPath, isInteractive, onRemoveFromCart, onDecreaseQuantity, onIncreaseQuantity }) => {
  const getTotal = productsCollection => productsCollection
    .map(aProduct => aProduct.price * aProduct.quantity)
    .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);
  return (
    <TableWrapper withoutChangingStateStyle>
      <Table>
        <thead>
          <tr>
            <th colSpan={isInteractive ? '5' : '4'}>Cantidad de productos: {products.length}</th>
          </tr>
          <tr>
            {isInteractive && <th><i className="fa fa-trash" /></th>}
            <th>Detalle del producto</th>
            <th className="text-right">Precio unitario</th>
            <th className="text-center">Cantidad</th>
            <th className="text-right">Precio total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(aProduct => (
            <tr key={aProduct.id}>
              {isInteractive && (
                <td>
                  <ActionButton
                    onClick={() => onRemoveFromCart(aProduct.id)}
                    title="Eliminar producto del carrito"
                  >
                    <Icon type="remove" />
                  </ActionButton>
                </td>
              )}
              <td>
                <FlexCenter>
                  <Link to={`productos/${aProduct.id}`} title="Ver producto">
                    <ProductImage src={`${staticPath}${aProduct.categoryId}/${aProduct.id}.jpg`} />
                  </Link>
                  {aProduct.name}
                </FlexCenter>
              </td>
              <td className="text-right">
                <FormattedNumber value={aProduct.price} style="currency" currency="USD" />
              </td>
              <td className={isInteractive ? 'product-quantity' : 'text-center'}>
                <span>{aProduct.quantity}</span>
                {isInteractive && (
                  <div>
                    <ActionButton onClick={() => onDecreaseQuantity(aProduct.id)} disabled={aProduct.quantity <= 1}>
                      <Icon type="minus" />
                    </ActionButton>
                    <ActionButton onClick={() => onIncreaseQuantity(aProduct.id)}>
                      <Icon type="plus" />
                    </ActionButton>
                  </div>
                )}
              </td>
              <td className="text-right">
                <FormattedNumber value={aProduct.price * aProduct.quantity} style="currency" currency="USD" />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={isInteractive ? '3' : '2'} />
            <td className="text-right">Total</td>
            <td className="text-right">
              <FormattedNumber value={getTotal(products)} style="currency" currency="USD" />
            </td>
          </tr>
        </tfoot>
      </Table>
    </TableWrapper>
  );
};

CartTable.propTypes = {
  products: PropTypes.func.isRequired,
  staticPath: PropTypes.string.isRequired,
  isInteractive: PropTypes.bool,
  onRemoveFromCart: PropTypes.func,
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func
};

CartTable.defaultProps = {
  isInteractive: false,
  onRemoveFromCart: null,
  onDecreaseQuantity: null,
  onIncreaseQuantity: null
};

export default CartTable;
