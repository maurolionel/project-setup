import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';

const Icon = styled.i.attrs({
  className: props => `fa fa-${props.kind}`
})`
  margin: -1px 0.5rem 0 0;
  font-size: 1rem;
`;

const ButtonCart = ({ style, className, type, quantity, isNotInCart }) => (
  <Button style={style} className={className} type={type} primary={isNotInCart}>
    {isNotInCart
      ? <div><Icon kind="shopping-cart" />Agregar al carrito</div>
      : <div><Icon kind="check" />Agregado ({quantity})</div>
    }
  </Button>
);

ButtonCart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  isNotInCart: PropTypes.bool.isRequired
};

ButtonCart.defaultProps = {
  style: {},
  className: '',
  type: 'submit'
};

export default ButtonCart;
