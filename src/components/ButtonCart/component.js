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
  display: inline-flex;
  justify-content: center;
  width: 25px;
  padding: 2px 5px;
  margin: 0 0.5rem 0 0;
  border-radius: 2px;
  color: #8a8a8a;
  background-color: #e2e2e2;
  font-size: 0.9rem;
`;

const ButtonRemove = styled(Button)`
  position: absolute;
  top: -8px;
  right: -5px;
  padding: 2px 4px;
  border-radius: 1em;
  color: ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.whiteGray};
  font-size: 0.7rem;
`;

const ButtonCart = ({ style, className, type, quantity, isNotInCart, addToCart, removeFromCart }) => (
  <div style={{ position: 'relative' }}>
    <Button
      style={{ ...style, paddingLeft: isNotInCart ? '0.8rem' : '0.5rem' }}
      className={className}
      type={type}
      primary={isNotInCart}
      onClick={addToCart}
    >
      {isNotInCart
        ? <div><Icon kind="shopping-cart" />Agregar al carrito</div>
        : (
          <div>
            <Quantity>{quantity}</Quantity>
            Agregado
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
