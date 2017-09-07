import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../../../../components/Title';
import Button from '../../../../components/Button';

const ActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const Summary = ({ products, shipping, onPrevStep, onNextStep }) => {
  const renderProducts = p => (
    <li key={p.id}>{p.name} | {p.quantity} | ${p.price} | ${p.price * p.quantity}</li>
  );
  const renderShipping = (item, i) => <li key={i}>{item[0]}: {item[1]}</li>;
  return (
    <div>
      <Title>Productos</Title>
      <ul>{products.map(renderProducts)}</ul>
      <Title>Envío</Title>
      <ul>{shipping.map(renderShipping)}</ul>
      <ActionGroup>
        <Button onClick={onPrevStep}>Ver paso anterior</Button>
        <Button primary onClick={onNextStep}>Siguiente</Button>
      </ActionGroup>
    </div>
  );
};

Summary.propTypes = {
  products: PropTypes.array.isRequired,
  shipping: PropTypes.array.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired
};

export default Summary;
