import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartList from './components/CartList';
import Anchor from '../Anchor';
import Paper from '../Paper';
import Preloader from '../Preloader';

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

  > * {
    width: 380px;
  }
`;

const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  min-height: 60px;
  text-align: center;
`;

const CartPopover = ({ canMount, isCartFullfilled, isLoadingProducts, isVisible }) => {
  if (!canMount) return null;
  return (
    <Popover className={isVisible ? 'is-visible' : ''}>
      <StyledPaper>
        {isCartFullfilled
          ? isLoadingProducts
            ? <Preloader />
            : <CartList />
          : <p>Tu carrito está vacío. <Anchor to="/productos">Ver productos</Anchor>.</p>
        }
      </StyledPaper>
    </Popover>
  );
};

CartPopover.propTypes = {
  canMount: PropTypes.bool.isRequired,
  isCartFullfilled: PropTypes.bool.isRequired,
  isLoadingProducts: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired
};

export default CartPopover;
