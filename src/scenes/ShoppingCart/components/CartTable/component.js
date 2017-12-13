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

const CartTable = ({
  products,
  categories,
  isInteractive,
  onRemoveFromCart,
  onDecreaseQuantity,
  onIncreaseQuantity
}) => {
  const getTotal = productsCollection => productsCollection
    .map(aProduct => aProduct.price * aProduct.quantity)
    .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);
  const getCategoryNameById = id => categories && categories.find(c => id === c.id).name;
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
                  <Link to={`productos/${getCategoryNameById(aProduct.categoryId)}/${aProduct.id}`} title="Ver producto">
                    <ProductImage src={aProduct.images[0]} />
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
  categories: PropTypes.array,
  isInteractive: PropTypes.bool,
  onRemoveFromCart: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired
};

CartTable.defaultProps = {
  isInteractive: false,
  categories: []
};

export default CartTable;
