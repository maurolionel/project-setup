import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import CartTable from '../CartTable';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NextStep = styled(Button)`
  align-self: flex-end;
  margin-top: 2rem;
`;

const ShoppingList = props => (
  <Wrapper>
    <CartTable isInteractive />
    <NextStep primary onClick={props.onNextStep}>Siguiente</NextStep>
  </Wrapper>
);

ShoppingList.propTypes = {
  onNextStep: PropTypes.func.isRequired
};

export default ShoppingList;
