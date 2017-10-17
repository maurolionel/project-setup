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

const Quantity = styled.span`
  color: #9E9E9E;
  font-size: 0.9rem;
`;

const ButtonRemove = styled(Button)`
  position: absolute;
  top: -8px;
  right: -5px;
  padding: 2px 4px;
  border-radius: 1em;
  color: ${({ theme }) => theme.whiteGray};
  background-color: ${({ theme }) => theme.grayDark};
  font-size: 0.7rem;
`;

const ButtonCart = ({ style, className, type, quantity, isNotInCart, addToCart, removeFromCart }) => (
  <div style={{ position: 'relative' }}>
    <Button
      style={style}
      className={className}
      type={type}
      primary={isNotInCart}
      onClick={addToCart}
    >
      {isNotInCart
        ? <div><Icon kind="shopping-cart" />Agregar al carrito</div>
        : (
          <div>
            <Icon kind="check" />Agregado
            <Quantity style={{ fontStyle: 'normal' }}>{quantity}</Quantity>
          </div>
        )
      }
    </Button>
    {!isNotInCart &&
      <ButtonRemove onClick={removeFromCart} title="Eliminar del carrito">
        <i className="fa fa-remove" />
      </ButtonRemove>
    }
  </div>
);

ButtonCart.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  isNotInCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

ButtonCart.defaultProps = {
  style: {},
  className: '',
  type: 'button'
};

export default ButtonCart;
