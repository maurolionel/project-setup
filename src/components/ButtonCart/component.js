import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const ShopIcon = styled.i.attrs({
  className: 'fa fa-shopping-cart'
}) `
  margin: -1px 0.5rem 0 0;
  font-size: 1rem;
`;

const ButtonCart = ({ style, className, type, isInCart }) => (
  <Button style={style} className={className} type={type} primary={isInCart}>
    <ShopIcon />Agregar al carrito
  </Button>
);

ButtonCart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  isInCart: PropTypes.bool.isRequired
};

ButtonCart.defaultProps = {
  style: {},
  className: '',
  type: 'submit'
};

export default ButtonCart;
