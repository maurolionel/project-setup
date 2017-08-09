import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE } from './actionTypes';

const shoppingCartAdd = payload => ({
  type: SHOPPING_CART_ADD,
  payload
});

const shoppingCartRemove = payload => ({
  type: SHOPPING_CART_REMOVE,
  payload
});

export {
  shoppingCartAdd,
  shoppingCartRemove
};
