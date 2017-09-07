import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import Paper from '../../../../components/Paper';
import Button from '../../../../components/Button';
import Table from '../Table';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableWrapper = styled(Paper)`
  width: 100%;
  border-radius: 0;
`;

const ActionButton = styled(Button)`
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

const NextStep = styled(Button)`
  align-self: flex-end;
  margin-top: 2rem;
`;

const getTotal = productsCollection => productsCollection
  .map(aProduct => aProduct.price * aProduct.quantity)
  .reduce((prevPrice, currentPrice) => prevPrice + currentPrice);

const ShoppingList = (props) => {
  const { staticPath, listOfProducts, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart, onNextStep } = props;
  return (
    <Wrapper>
      <TableWrapper withoutChangingStateStyle>
        <Table>
          <thead>
            <tr>
              <th colSpan="5">Cantidad de productos: {listOfProducts.length}</th>
            </tr>
            <tr>
              <th><i className="fa fa-trash" /></th>
              <th>Nombre del producto</th>
              <th className="text-right">Precio unitario</th>
              <th className="text-center">Cantidad</th>
              <th className="text-right">Precio total</th>
            </tr>
          </thead>
          <tbody>
            {listOfProducts.map(aProduct => (
              <tr key={aProduct.id}>
                <td>
                  <ActionButton
                    onClick={() => onRemoveFromCart(aProduct.id)}
                    title="Eliminar producto del carrito"
                  >
                    <Icon type="remove" />
                  </ActionButton>
                </td>
                <td>
                  <FlexCenter>
                    <ProductImage src={`${staticPath}${aProduct.categoryId}/${aProduct.id}.jpg`} />
                    {aProduct.name}
                  </FlexCenter>
                </td>
                <td className="text-right">
                  <FormattedNumber value={aProduct.price} style="currency" currency="USD" />
                </td>
                <td className="product-quantity">
                  <span>{aProduct.quantity}</span>
                  <div>
                    <ActionButton onClick={() => onDecreaseQuantity(aProduct.id)} disabled={aProduct.quantity <= 1}>
                      <Icon type="minus" />
                    </ActionButton>
                    <ActionButton onClick={() => onIncreaseQuantity(aProduct.id)}>
                      <Icon type="plus" />
                    </ActionButton>
                  </div>
                </td>
                <td className="text-right">
                  <FormattedNumber value={aProduct.price * aProduct.quantity} style="currency" currency="USD" />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" />
              <td className="text-right">Total</td>
              <td className="text-right">
                <FormattedNumber value={getTotal(listOfProducts)} style="currency" currency="USD" />
              </td>
            </tr>
          </tfoot>
        </Table>
      </TableWrapper>
      <NextStep primary onClick={onNextStep}>Siguiente</NextStep>
    </Wrapper>
  );
};

ShoppingList.propTypes = {
  staticPath: PropTypes.string.isRequired,
  listOfProducts: PropTypes.array.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired
};

export default ShoppingList;
