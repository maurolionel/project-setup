import { SHOPPING_CART_INCREASE, SHOPPING_CART_ADD, SHOPPING_CART_DECREASE, SHOPPING_CART_REMOVE } from './actionTypes';

const shoppingCartIncrease = payload => ({
  type: SHOPPING_CART_INCREASE,
  payload
});

const shoppingCartAdd = payload => ({
  type: SHOPPING_CART_ADD,
  payload
});

const shoppingCartDecrease = payload => ({
  type: SHOPPING_CART_DECREASE,
  payload
});

const shoppingCartRemove = payload => ({
  type: SHOPPING_CART_REMOVE,
  payload
});

export {
  shoppingCartIncrease,
  shoppingCartAdd,
  shoppingCartDecrease,
  shoppingCartRemove
};
