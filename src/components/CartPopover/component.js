import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartList from './components/CartList';
import Paper from '../Paper';

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


const CartPopover = ({ canMount, isCartEmpty, isVisible }) => {
  if (!canMount) return null;
  return (
    <Popover className={isVisible ? 'is-visible' : ''}>
      <Paper>
        {isCartEmpty ? <CartList /> : <p>Tu carrito está vacío.</p>}
      </Paper>
    </Popover>
  );
};

CartPopover.propTypes = {
  canMount: PropTypes.bool.isRequired,
  isCartEmpty: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default CartPopover;
