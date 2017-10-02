import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Alert from '../../../../components/Alert';
import Title from '../../../../components/Title';
import Button from '../../../../components/Button';
import CartTable from '../CartTable';
import Table from '../Table';
import Payment from './components/Payment';

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const FlexRow = styled.div`
  display: flex;
  margin-top: 2rem;
  > div {
    flex: 1;
    &:first-child {
      margin-right: 5rem;
    }
  }
`;

const renderShipping = (item, i) => (
  <tr key={i}>
    <td style={{ fontWeight: '700' }}>{item[0]}</td>
    <td>{item[1]}</td>
  </tr>
);

const Summary = ({ products, data, staticPath, isSubmitEnabled, onPrevStep, onPurchase }) => (
  <div>
    <CartTable products={products} staticPath={staticPath} />
    <FlexRow>
      <div>
        <Title>Envío</Title>
        <Table>
          <tbody>{data.map(renderShipping)}</tbody>
        </Table>
      </div>
      <div>
        <Payment />
        <Alert kind="info">
          Luego de confirmar la compra te enviaremos un mail con todos los datos necesarios para coordinar la entrega del pedido.
        </Alert>
      </div>
    </FlexRow>
    <ActionGroup>
      <Button type="button" onClick={onPrevStep}>Ver paso anterior</Button>
      <Button primary onClick={isSubmitEnabled && onPurchase} disabled={!isSubmitEnabled}>
        Confirmar compra
      </Button>
    </ActionGroup>
  </div>
);

Summary.propTypes = {
  products: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  staticPath: PropTypes.string.isRequired,
  isSubmitEnabled: PropTypes.bool.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onPurchase: PropTypes.func.isRequired
};

export default Summary;
