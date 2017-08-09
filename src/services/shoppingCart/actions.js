import { SHOPPING_CART_ADD, SHOPPING_CART_INCREMENT, SHOPPING_CART_DECREMENT, SHOPPING_CART_REMOVE } from './actionTypes';

const shoppingCartAdd = payload => ({
  type: SHOPPING_CART_ADD,
  payload
});

const shoppingCartIncrement = payload => ({
  type: SHOPPING_CART_INCREMENT,
  payload
});

const shoppingCartDecrement = payload => ({
  type: SHOPPING_CART_DECREMENT,
  payload
});

const shoppingCartRemove = payload => ({
  type: SHOPPING_CART_REMOVE,
  payload
});

export {
  shoppingCartAdd,
  shoppingCartIncrement,
  shoppingCartDecrement,
  shoppingCartRemove
};
